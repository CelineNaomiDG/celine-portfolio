'use client';

/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- This keyboard-controlled game uses a focusable application region; its buttons retain native semantics. */

import { useEffect, useRef, useState } from 'react';
import {
  advanceRun,
  flipRun,
  runScore,
  runSpeed,
  createRun,
  boostRun,
  jumpRun,
  obstacleSizes,
  runnerSize,
  runnerX,
  type Run,
} from '@/lib/rocket-engine';
import styles from './rocket-game.module.css';

export default function RocketGame({ active }: { active: boolean }) {
  const gameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const runRef = useRef<Run>(createRun(600, 'idle'));
  const [run, setRun] = useState<Run>(() => createRun(600, 'idle'));
  const [best, setBest] = useState(0);

  const publish = (next: Run) => {
    runRef.current = next;
    setRun(next);
  };
  const lastJump = useRef(0);
  const jump = () => {
    const now = performance.now();
    const current = runRef.current;
    if (now - lastJump.current < 300 && current.y > 0 && current.fuel >= 25)
      publish({ ...current, velocity: 480, fuel: current.fuel - 25 });
    else publish(jumpRun(current));
    lastJump.current = now;
  };
  const flip = () => publish(flipRun(runRef.current));


  const duck = (held: boolean) => publish(boostRun(runRef.current, held));
  const pause = () => {
    if (runRef.current.status === 'playing')
      publish({ ...runRef.current, status: 'paused', ducking: false, thrust: false });
  };
  const start = () => {
    try { setBest(Number(localStorage.getItem('rocket-best-v1')) || 0); } catch {}
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
        setBest((value) => Math.max(value, runScore(next)));
      if (next.status === 'over') { try { const old = Number(localStorage.getItem('rocket-best-v1')) || 0; localStorage.setItem('rocket-best-v1', String(Math.max(old, runScore(next)))); } catch {} }
      if (next.status === 'playing') frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run.status, active]);

  const obstacle = obstacleSizes[run.obstacle];
  const score = runScore(run);
  const inGame = run.status === 'playing' || run.status === 'paused';

  return (
    <div
      ref={gameRef}
      tabIndex={0}
      role="application"
      className={styles.game}
      aria-label="Rocket drive prototype"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          duck(false);
          pause();
        }
      }}
      onKeyDown={(event) => {
        if (!active || !['Space', 'ArrowUp', 'ArrowDown', 'KeyF'].includes(event.code))
          return;
        if ((event.target as HTMLElement).closest('button')) return;
        if (runRef.current.status !== 'playing') return;
        event.preventDefault();
        if (event.code === 'KeyF' && !event.repeat) flip();
        else if (event.code === 'ArrowDown') duck(true);
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
          NIGHT SHIFT
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
              {run.status === 'paused' ? '▶︎' : 'Ⅱ'}
            </button>
          )}
        </div>
      </div>
      <div className={styles.fuel}>{Math.round(runSpeed(run.time) * 0.4)} KM/H · THRUST <meter min={0} max={100} value={run.fuel} aria-label="Rocket fuel" /> {Math.round(run.fuel)}%</div>
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
        <div className={styles.moon} aria-hidden="true" />
        <div className={styles.cityFar} aria-hidden="true">
          {[0,1].map(copy => <div className={styles.cityStrip} key={copy}>{Array.from({length:12},(_,i)=><i key={i} style={{height:48+(i*37)%100,width:25+(i*13)%31}} />)}</div>)}
        </div>
        <div className={styles.cityNear} aria-hidden="true">
          {[0,1].map(copy => <div className={styles.cityStrip} key={copy}>{Array.from({length:9},(_,i)=><i key={i} style={{height:36+(i*29)%92,width:35+(i*17)%40}} />)}</div>)}
        </div>
        <div className={styles.roadGlow} aria-hidden="true" />
        <div
          className={styles.runner}
          data-jumping={run.y > 0}
          data-ducking={run.ducking}
          style={{
            left: runnerX(run.width),
            width: runnerSize.width,
            height: run.ducking ? runnerSize.duckHeight : runnerSize.height,
            transform: `translateY(${-run.y}px) rotate(${-run.rotation}deg)`,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 46" width="100%" height="100%" fill="currentColor">
            <ellipse cx="51" cy="40" rx="43" ry="3" fill="#a3e8f1" opacity=".23" />
            {run.thrust && run.fuel > 0 && <g className={styles.jet}>
              <path d="M12 26-22 29 12 33M24 35 29 61 35 35M69 35 76 61 81 35" fill="#91dbe9" opacity=".6" />
              <path d="M11 28-9 30 11 31M27 35 29 50 32 35M72 35 76 50 78 35" fill="white" />
            </g>}
            <path d="M6 26 22 22 38 10Q45 7 60 10L77 21 93 25 98 31 94 36H6Z" fill="#899aa5" />
            <path d="M7 26 24 23 39 11Q46 8 60 11L77 23 93 26 96 30H7Z" fill="#e1e9ee" />
            <path d="m29 23 13-11 15 1 13 10Z" fill="#304550" />
            <path d="m44 13 11 1 10 7H36Z" fill="#94bdca" opacity=".65" />
            <path d="m49 13 3 10M31 26l2 7h30l7-8" fill="none" stroke="#657b89" strokeWidth="1" />
            <path d="M5 19h19v3H5Zm5 13h81l-5 5H12Z" fill="#253740" />
            <path d="M10 27h9" stroke="#ef9a99" strokeWidth="2" />
            <path d="M85 27h9" stroke="#efffff" strokeWidth="3" />
            <path d="m94 27 45-8v22l-45-12" fill="#c8ecf3" opacity=".09" />
            {[27,77].map(x=><g key={x}>
              <circle cx={x} cy="34" r="9" fill="#0a1118" stroke="#91a2b0" strokeWidth="1.5" />
              <circle cx={x} cy="34" r="5.8" fill="#435967" stroke="#d3e0e5" strokeWidth="1" />
              <path d={`M${x-4} 30l8 8m-8 0 8-8M${x} 28v12`} stroke="#ccdce2" strokeWidth="1" />
              <circle cx={x} cy="34" r="1.7" fill="#edf6fa" />
            </g>)}
          </svg>
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
          <svg
            viewBox="0 0 54 46"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M4 46V16L16 3h26l8 13v30Z" fill="#83949f" />
            <path d="M9 23h36M9 33h36" stroke="#17232c" strokeWidth="5" />
          </svg>
        </div>
        <div className={styles.ground} aria-hidden="true" />
        {!inGame && (
          <div className={styles.overlay}>
            <p>
              {run.status === 'over'
                ? 'End of this run.'
                : 'An independent arcade experiment.'}
            </p>
            <h3>
              {run.status === 'over' ? `Score ${score}` : 'Jump. Thrust. Repeat.'}
            </h3>
            <button onClick={start}>
              {run.status === 'over' ? 'Play again' : 'Play'}
            </button>
            <small>
              Double-tap Jump for a burst · Hold Boost to fly
              <br />
              Space / ↑ jump · ↓ boost · F flip above 65px
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
            <button onClick={flip} disabled={run.status !== 'playing' || run.y < 65 || run.flipping} aria-label="Backflip">↶<small>Flip +100</small></button>
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
              aria-label="Boost"
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
              ↑↑<small>Boost</small>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
