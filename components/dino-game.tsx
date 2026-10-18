'use client';

/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- This keyboard-controlled game uses a focusable application region; its buttons retain native semantics. */

import { useEffect, useRef, useState } from 'react';
import {
  advanceRun,
  createRun,
  duckRun,
  jumpRun,
  obstacleSizes,
  runnerSize,
  runnerX,
  type Run,
} from '@/lib/dino-engine';
import styles from './dino-game.module.css';

export default function DinoGame({ active }: { active: boolean }) {
  const gameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const runRef = useRef<Run>(createRun(600, 'idle'));
  const [run, setRun] = useState<Run>(() => createRun(600, 'idle'));
  const [best, setBest] = useState(0);

  const publish = (next: Run) => {
    runRef.current = next;
    setRun(next);
  };
  const jump = () => publish(jumpRun(runRef.current));
  const duck = (held: boolean) => publish(duckRun(runRef.current, held));
  const pause = () => {
    if (runRef.current.status === 'playing')
      publish({ ...runRef.current, status: 'paused', ducking: false });
  };
  const start = () => {
    publish(createRun(stageRef.current?.clientWidth ?? 600));
    gameRef.current?.focus({ preventScroll: true });
  };
  const togglePause = () => {
    if (runRef.current.status === 'paused') {
      publish({ ...runRef.current, status: 'playing' });
      gameRef.current?.focus({ preventScroll: true });
    } else pause();
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const resize = () =>
      publish({ ...runRef.current, width: stage.clientWidth });
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) pause();
  }, [active]);

  useEffect(() => {
    const hidden = () => {
      if (document.hidden) pause();
    };
    const blur = () => pause();
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('blur', blur);
    return () => {
      document.removeEventListener('visibilitychange', hidden);
      window.removeEventListener('blur', blur);
    };
  }, []);

  useEffect(() => {
    if (run.status !== 'playing' || !active) return;
    let frame = 0;
    let previous: number | undefined;
    const tick = (now: number) => {
      const elapsed = previous === undefined ? 0 : (now - previous) / 1000;
      previous = now;
      const next = advanceRun(runRef.current, elapsed);
      publish(next);
      if (next.status === 'over')
        setBest((value) => Math.max(value, Math.floor(next.time * 10)));
      if (next.status === 'playing') frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run.status, active]);

  const obstacle = obstacleSizes[run.obstacle];
  const score = Math.floor(run.time * 10);
  const inGame = run.status === 'playing' || run.status === 'paused';

  return (
    <div
      ref={gameRef}
      tabIndex={0}
      role="application"
      className={styles.game}
      aria-label="Dinosaur runner"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) duck(false);
      }}
      onKeyDown={(event) => {
        if (!active || !['Space', 'ArrowUp', 'ArrowDown'].includes(event.code))
          return;
        if ((event.target as HTMLElement).closest('button')) return;
        if (runRef.current.status !== 'playing') return;
        event.preventDefault();
        if (event.code === 'ArrowDown') duck(true);
        else if (!event.repeat) jump();
      }}
      onKeyUp={(event) => {
        if (event.code === 'ArrowDown') {
          event.preventDefault();
          duck(false);
        }
      }}
    >
      <div className={styles.top}>
        <strong>
          <i />
          No Wi-Fi Dino
        </strong>
        <div className={styles.topActions}>
          <span className={styles.score}>
            HI {String(best).padStart(4, '0')}{' '}
            <b>{String(score).padStart(4, '0')}</b>
          </span>
          {inGame && (
            <button
              onClick={togglePause}
              aria-label={
                run.status === 'paused' ? 'Resume game' : 'Pause game'
              }
            >
              {run.status === 'paused' ? '▶' : 'Ⅱ'}
            </button>
          )}
        </div>
      </div>
      <div
        ref={stageRef}
        className={styles.stage}
        data-status={run.status}
        data-passed={run.passed}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest('button')) return;
          if (runRef.current.status !== 'playing') return;
          event.preventDefault();
          gameRef.current?.focus({ preventScroll: true });
          jump();
        }}
      >
        <span className={styles.cloud} aria-hidden="true">
          · · ·
        </span>
        <span className={styles.cloudTwo} aria-hidden="true">
          · ·
        </span>
        <div
          className={styles.runner}
          data-jumping={run.y > 0}
          data-ducking={run.ducking}
          style={{
            left: runnerX(run.width),
            width: runnerSize.width,
            height: run.ducking ? runnerSize.duckHeight : runnerSize.height,
            transform: `translateY(${-run.y}px)`,
          }}
          aria-hidden="true"
        >
          <span>🦖</span>
        </div>
        <div
          className={`${styles.obstacle} ${run.obstacle === 'double' ? styles.double : ''}`}
          style={{
            width: obstacle.width,
            height: obstacle.height,
            bottom: 67 + obstacle.bottom,
            transform: `translateX(${run.obstacleX}px)`,
          }}
          aria-hidden="true"
        >
          {obstacle.glyph}
        </div>
        <div className={styles.ground} aria-hidden="true" />
        {!inGame && (
          <div className={styles.overlay}>
            <p>
              {run.status === 'over'
                ? 'Connection lost again.'
                : 'A tiny offline break.'}
            </p>
            <h3>
              {run.status === 'over' ? `Score ${score}` : 'Run, jump, duck.'}
            </h3>
            <button onClick={start}>
              {run.status === 'over' ? 'Play again' : 'Play'}
            </button>
            <small>
              Tap the game or Jump · Hold Duck for birds
              <br />
              Keyboard: Space / ↑ jump · ↓ duck
            </small>
          </div>
        )}
        {run.status === 'paused' && (
          <div className={styles.overlay}>
            <h3>Paused</h3>
            <button onClick={togglePause}>Continue</button>
          </div>
        )}
        {inGame && (
          <div className={styles.controls}>
            <button
              disabled={run.status === 'paused'}
              onPointerDown={(event) => {
                event.preventDefault();
                jump();
              }}
              onClick={(event) => {
                if (event.detail === 0) jump();
              }}
              aria-label="Jump"
            >
              ↑<small>Jump</small>
            </button>
            <button
              disabled={run.status === 'paused'}
              aria-label="Duck"
              onPointerDown={(event) => {
                event.preventDefault();
                event.currentTarget.setPointerCapture(event.pointerId);
                duck(true);
              }}
              onPointerUp={() => duck(false)}
              onPointerCancel={() => duck(false)}
              onLostPointerCapture={() => duck(false)}
              onBlur={() => duck(false)}
              onKeyDown={(event) => {
                if (['Space', 'Enter', 'ArrowDown'].includes(event.code)) {
                  event.preventDefault();
                  duck(true);
                }
              }}
              onKeyUp={(event) => {
                if (['Space', 'Enter', 'ArrowDown'].includes(event.code)) {
                  event.preventDefault();
                  duck(false);
                }
              }}
            >
              ↓<small>Duck</small>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
