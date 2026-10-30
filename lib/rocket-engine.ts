export type RunStatus = 'idle' | 'playing' | 'paused' | 'over';
export type ObstacleKind = 'cactus' | 'double' | 'bird' | 'rock';

export const runnerSize = { width: 68, height: 32, duckHeight: 32 };
export const obstacleSizes = {
  cactus: { width: 32, height: 46, bottom: 0, glyph: '🌵' },
  double: { width: 54, height: 46, bottom: 0, glyph: '🌵🌵' },
  bird: { width: 40, height: 30, bottom: 46, glyph: '🐦' },
  rock: { width: 34, height: 30, bottom: 0, glyph: '🪨' },
};
const sequence: ObstacleKind[] = ['cactus', 'rock', 'double', 'bird'];
const gravity = 1300;
const jumpVelocity = 520;

export type Run = {
  status: RunStatus;
  width: number;
  time: number;
  y: number;
  velocity: number;
  ducking: boolean;
  obstacleX: number;
  obstacle: ObstacleKind;
  passed: number;
  fuel: number;
  thrust: boolean;
  rotation: number;
  flipping: boolean;
  bonus: number;
};

export function createRun(width: number, status: RunStatus = 'playing'): Run {
  return {
    status,
    width,
    time: 0,
    y: 0,
    velocity: 0,
    ducking: false,
    obstacleX: width + 100,
    obstacle: 'cactus',
    passed: 0,
    fuel: 100,
    thrust: false,
    rotation: 0,
    flipping: false,
    bonus: 0,
  };
}

export const runnerX = (width: number) =>
  Math.max(20, Math.min(84, width * 0.1));
export const runSpeed = (time: number) => Math.min(360, 260 + time * 1.5);

export function jumpRun(run: Run): Run {
  if (
    run.status !== 'playing' ||
    run.y > 0 ||
    run.velocity !== 0 ||
    run.ducking
  )
    return run;
  return { ...run, velocity: jumpVelocity };
}

export function duckRun(run: Run, ducking: boolean): Run {
  return {
    ...run,
    ducking:
      ducking && run.status === 'playing' && run.y === 0 && run.velocity === 0,
  };
}

export function collides(run: Run): boolean {
  const obstacle = obstacleSizes[run.obstacle];
  const left = runnerX(run.width);
  const height = run.ducking ? runnerSize.duckHeight : runnerSize.height;
  // Logical hitboxes stay independent of emoji fonts, device scale and page zoom.
  return (
    left + runnerSize.width - 9 > run.obstacleX + 4 &&
    left + 9 < run.obstacleX + obstacle.width - 4 &&
    run.y + height - 6 > obstacle.bottom + 4 &&
    run.y + 5 < obstacle.bottom + obstacle.height - 4
  );
}

export function advanceRun(current: Run, elapsed: number): Run {
  if (current.status !== 'playing') return current;
  const run = { ...current };
  // Bound catch-up after a slow/background frame; substeps prevent tunnelling.
  let remaining = Math.min(0.05, Math.max(0, elapsed));
  while (remaining > 0 && run.status === 'playing') {
    const step = Math.min(remaining, 1 / 120);
    remaining -= step;
    run.time += step;
    if (run.flipping) {
      run.rotation += 900 * step;
      if (run.rotation >= 360) { run.rotation = 0; run.flipping = false; run.bonus += 100; }
    }

    if (run.thrust && run.fuel > 0) {
      run.fuel = Math.max(0, run.fuel - 55 * step);
      run.velocity = Math.min(240, run.velocity + 2200 * step);
    } else if (run.y === 0) run.fuel = Math.min(100, run.fuel + 28 * step);

    if (run.y > 0 || run.velocity > 0) {
      run.y = Math.max(
        0,
        run.y + run.velocity * step - (gravity * step * step) / 2,
      );
      run.velocity = run.y > 0 ? run.velocity - gravity * step : 0;
    }
    if (run.y === 0 && run.flipping) { run.rotation = 0; run.flipping = false; }
    if (run.y > 150) { run.y = 150; run.velocity = Math.min(0, run.velocity); }
    run.obstacleX -= runSpeed(run.time) * step;
    if (collides(run)) {
      run.status = 'over';
      run.ducking = false;
    } else if (run.obstacleX + obstacleSizes[run.obstacle].width < 0) {
      run.passed += 1;
      run.obstacle = sequence[run.passed % sequence.length];
      run.obstacleX = run.width + 120;
    }
  }
  return run;
}

export function boostRun(run: Run, held: boolean): Run { return { ...run, thrust: held && run.status === 'playing' }; }

export function flipRun(run: Run): Run {
  if (run.status !== 'playing' || run.y < 65 || run.flipping) return run;
  return { ...run, flipping: true, rotation: 0 };
}
export const runScore = (run: Run) => Math.floor(run.time * 10) + run.bonus;
