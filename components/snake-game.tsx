'use client';
/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- Focusable application surface provides arrow-key game controls alongside native buttons. */
import { useEffect, useRef, useState } from 'react';
import styles from './snake-game.module.css';
type Point = { x: number; y: number };
const directions: Record<string, Point> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};
const initial = [
  { x: 5, y: 8 },
  { x: 4, y: 8 },
  { x: 3, y: 8 },
];
function foodFor(body: Point[]) {
  const free = Array.from({ length: 256 }, (_, i) => ({
    x: i % 16,
    y: Math.floor(i / 16),
  })).filter((p) => !body.some((s) => s.x === p.x && s.y === p.y));
  return free[Math.floor(Math.random() * free.length)] ?? null;
}
export default function SnakeGame({ active }: { active: boolean }) {
  const [body, setBody] = useState<Point[]>(initial),
    [food, setFood] = useState<Point | null>({ x: 11, y: 8 }),
    [status, setStatus] = useState('idle'),
    [best, setBest] = useState(0);
  const direction = useRef(directions.ArrowRight),
    queued = useRef(directions.ArrowRight),
    surface = useRef<HTMLDivElement>(null);
  const state = useRef({ body, food });

  const score = (body.length - 3) * 10;
  function turn(key: string) {
    const d = directions[key];
    if (d && !(d.x === -direction.current.x && d.y === -direction.current.y))
      queued.current = d;
  }
  function start() {
    direction.current = directions.ArrowRight;
    queued.current = directions.ArrowRight;
    state.current = { body: initial, food: { x: 11, y: 8 } };
    setBody(initial);
    setFood({ x: 11, y: 8 });
    setStatus('playing');
    surface.current?.focus({ preventScroll: true });
  }
  useEffect(() => {
    if (!active) {
      const timer = setTimeout(
        () => setStatus((s) => (s === 'playing' ? 'paused' : s)),
        0,
      );
      return () => clearTimeout(timer);
    }
  }, [active]);
  useEffect(() => {
    const pause = () => setStatus((s) => (s === 'playing' ? 'paused' : s));
    const hidden = () => {
      if (document.hidden) pause();
    };
    window.addEventListener('blur', pause);
    document.addEventListener('visibilitychange', hidden);
    return () => {
      window.removeEventListener('blur', pause);
      document.removeEventListener('visibilitychange', hidden);
    };
  }, []);
  useEffect(() => {
    if (status !== 'playing' || !active) return;
    const timer = setInterval(
      () => {
        const { body: b, food: f } = state.current;
        direction.current = queued.current;
        const head = {
          x: b[0].x + direction.current.x,
          y: b[0].y + direction.current.y,
        };
        const eats = !!f && head.x === f.x && head.y === f.y;
        const occupied = eats ? b : b.slice(0, -1);
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= 16 ||
          head.y >= 16 ||
          occupied.some((p) => p.x === head.x && p.y === head.y)
        ) {
          setStatus('over');
          return;
        }
        const next = [head, ...b];
        if (!eats) next.pop();
        const nextFood = eats ? foodFor(next) : f;
        state.current = { body: next, food: nextFood };
        setBody(next);
        setFood(nextFood);
        setBest((v) => Math.max(v, (next.length - 3) * 10));
        if (!nextFood) setStatus('won');
      },
      Math.max(85, 180 - score),
    );
    return () => clearInterval(timer);
  }, [status, active, score]);
  return (
    <div
      className={styles.game}
      ref={surface}
      tabIndex={0}
      role="application"
      aria-label="Snake game"
      onKeyDown={(e) => {
        if (!active || (e.target as HTMLElement).closest('button')) return;
        if (directions[e.key]) {
          e.preventDefault();
          turn(e.key);
        }
        if (e.code === 'Space') {
          e.preventDefault();
          setStatus((s) =>
            s === 'playing' ? 'paused' : s === 'paused' ? 'playing' : s,
          );
        }
      }}
    >
      <header>
        <strong>Snake / pixel break</strong>
        <span>
          Score {score} · Best {best}
        </span>
      </header>
      <div className={styles.board} aria-label="Snake board">
        <svg viewBox="0 0 160 160" aria-hidden="true">
          <defs>
            <pattern
              id="snake-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                opacity=".08"
              />
            </pattern>
          </defs>
          <rect width="160" height="160" fill="url(#snake-grid)" />
          {body.map((p, i) => (
            <rect
              key={i}
              x={p.x * 10 + 1}
              y={p.y * 10 + 1}
              width="8"
              height="8"
              rx={i === 0 ? 3 : 2}
              fill="currentColor"
              opacity={i === 0 ? 1 : 0.65}
            />
          ))}
          {food && (
            <circle
              cx={food.x * 10 + 5}
              cy={food.y * 10 + 5}
              r="3"
              fill="#b65433"
            />
          )}
        </svg>
        {status !== 'playing' && (
          <div className={styles.overlay}>
            <strong>
              {status === 'over'
                ? 'Good run. Try again?'
                : status === 'won'
                  ? 'Board complete!'
                  : status === 'paused'
                    ? 'Paused'
                    : 'Collect. Grow. Repeat.'}
            </strong>
            <button
              onClick={
                status === 'paused'
                  ? () => {
                      setStatus('playing');
                      surface.current?.focus({ preventScroll: true });
                    }
                  : start
              }
            >
              {status === 'paused' ? 'Resume Snake' : 'Play Snake'}
            </button>
          </div>
        )}
      </div>
      <div className={styles.controls}>
        {Object.keys(directions).map((key, i) => (
          <button
            key={key}
            aria-label={`Snake ${key.slice(5).toLowerCase()}`}
            onClick={() => turn(key)}
          >
            {['↑', '↓', '←', '→'][i]}
          </button>
        ))}
        <button
          disabled={status !== 'playing'}
          onClick={() => setStatus('paused')}
        >
          Pause
        </button>
      </div>
      <p>Arrow keys or buttons · Space to pause · Avoid walls and your tail.</p>
    </div>
  );
}
