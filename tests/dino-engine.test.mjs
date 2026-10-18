import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceRun, collides, createRun, duckRun, jumpRun, runnerX, runnerSize, runSpeed } from '../lib/dino-engine.ts';

for (const width of [280, 320, 390, 768, 1160]) {
  for (const kind of ['cactus', 'double', 'rock']) {
    test(`a well-timed jump clears ${kind} on a ${width}px stage`, () => {
      let run = { ...createRun(width), obstacle: kind };
      let jumped = false;
      for (let frame = 0; frame < 1800 && run.passed === 0 && run.status === 'playing'; frame++) {
        // Jump about 0.26 seconds before the front edges meet.
        const distance = run.obstacleX - runnerX(width) - runnerSize.width;
        if (!jumped && distance <= runSpeed(run.time) * 0.26) { run = jumpRun(run); jumped = true; }
        run = advanceRun(run, 1 / 60);
      }
      assert.equal(jumped, true);
      assert.equal(run.status, 'playing');
      assert.equal(run.passed, 1);
    });
  }
}

test('the first obstacle collides without a jump', () => {
  let run = createRun(280);
  for (let i = 0; i < 600 && run.status === 'playing'; i++) run = advanceRun(run, 1 / 60);
  assert.equal(run.status, 'over');
});

test('ducking clears a bird while standing collides', () => {
  const run = { ...createRun(320), obstacle: 'bird', obstacleX: runnerX(320) };
  assert.equal(collides(run), true);
  assert.equal(collides(duckRun(run, true)), false);
});

test('pause freezes a jump and resumes without resetting its height', () => {
  const airborne = advanceRun(jumpRun(createRun(320)), 0.05);
  const paused = { ...airborne, status: 'paused' };
  assert.deepEqual(advanceRun(paused, 10), paused);
  const resumed = advanceRun({ ...paused, status: 'playing' }, 0.016);
  assert.ok(resumed.y > airborne.y);
});

test('repeated input cannot start a second jump while airborne', () => {
  const airborne = advanceRun(jumpRun(createRun(320)), 0.05);
  assert.deepEqual(jumpRun(airborne), airborne);
});

test('movement speed is independent of screen width and frame rate', () => {
  const travel = (width, fps) => {
    let run = createRun(width);
    for (let i = 0; i < fps / 2; i++) run = advanceRun(run, 1 / fps);
    return width + 100 - run.obstacleX;
  };
  assert.ok(Math.abs(travel(280, 30) - travel(1160, 120)) < 0.01);
});

test('a long frame is capped instead of skipping through the obstacle', () => {
  assert.ok(advanceRun(createRun(320), 30).time <= 0.051);
});
