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
import { RaceCar } from './race-car';

export default function RocketGame({ active }: { active: boolean }) {
  const gameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const runRef = useRef<Run>(createRun(600, 'idle'));
  const [run, setRun] = useState<Run>(() => createRun(600, 'idle'));
  const [best, setBest] = useState(0);
  const [paint, setPaint] = useState('#d7e3ea');
  const [wheels, setWheels] = useState('aero');
  const [stripe, setStripe] = useState(true);
  const [garage, setGarage] = useState(false);
  const palette = ['#d7e3ea', '#f17464', '#adc7a3', '#ad9ed1', '#dfbd78', '#5ca9c8'];
  const saveCar = (color: string, rims: string, line: boolean) => {
    setPaint(color); setWheels(rims); setStripe(line);
    try { localStorage.setItem('rocket-car-v1', JSON.stringify({color, rims, line})); } catch {}
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('rocket-car-v1') || 'null');
        if (saved && /^#[0-9a-f]{6}$/i.test(saved.color) && ['aero','sport'].includes(saved.rims)) {
          setPaint(saved.color); setWheels(saved.rims); setStripe(saved.line === true);
        }
      } catch {}
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const publish = (next: Run) => {
    runRef.current = next;
    setRun(next);
  };
  const lastJump = useRef(0);
  const jump = () => {
    const now = performance.now();
    const current = runRef.current;
    if (current.status !== 'playing') return;
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
    lastJump.current = 0;
    setGarage(false);
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
    const blur = () => duck(false);
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
          <button className={styles.garageButton} aria-label="Customize car" onClick={() => { pause(); setGarage(true); }}>Garage</button>
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
            transform: `translateY(${-run.y}px) rotate(${-(run.rotation / 360 - Math.sin(2 * Math.PI * run.rotation / 360) / (2 * Math.PI)) * 360}deg)`,
          }}
          aria-hidden="true"
        >
          <RaceCar paint={paint} wheels={wheels} stripe={stripe} thrust={run.thrust && run.fuel > 0} />
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
              Space / ↑ jump · ↓ boost · F flip
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
            <button onPointerDown={(event) => { event.preventDefault(); flip(); }} onClick={(event) => { if (event.detail === 0) flip(); }} disabled={run.status === 'paused'} aria-label="Backflip">↶<small>Flip +100</small></button>
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
      {garage && <section className={styles.garage} aria-label="Customize your car" onKeyDown={event => { event.stopPropagation(); if (event.key === 'Escape') setGarage(false); }}>
        <div className={styles.garageHeading}><div><small>YOUR CAR / YOUR STYLE</small><h3>The garage</h3></div><button aria-label="Close garage" onClick={() => setGarage(false)}>×</button></div>
        <div className={styles.carPreview}><RaceCar paint={paint} wheels={wheels} stripe={stripe} thrust={false} /></div>
        <fieldset><legend>Body colour</legend><div className={styles.swatches}>{palette.map(color => <button key={color} style={{background:color}} aria-label={`Paint ${color}`} aria-pressed={paint === color} onClick={() => saveCar(color,wheels,stripe)} />)}</div><label className={styles.customColor}>Custom colour <input type="color" value={paint} onChange={event => saveCar(event.target.value,wheels,stripe)} /></label></fieldset>
        <fieldset><legend>Wheels</legend><div className={styles.wheelOptions}>{['aero','sport'].map(rim => <button key={rim} aria-pressed={wheels === rim} onClick={() => saveCar(paint,rim,stripe)}>{rim === 'aero' ? 'Aero discs' : 'Sport spokes'}</button>)}</div></fieldset>
        <label className={styles.stripeOption}><input type="checkbox" checked={stripe} onChange={event => saveCar(paint,wheels,event.target.checked)} /> Contrast accent</label>
        <button className={styles.driveButton} onClick={() => { setGarage(false); if (runRef.current.status === 'paused') togglePause(); else start(); }}>Save & drive</button>
      </section>}
    </div>
  );
}
