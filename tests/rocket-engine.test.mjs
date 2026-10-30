import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createRun, flipRun, boostRun, advanceRun} from '../lib/rocket-engine.ts';
test('complete airborne flip earns one bonus; ground flip launches',()=>{
 let r=flipRun({...createRun(600),y:140,velocity:200,obstacleX:10000});
 for(let i=0;i<35;i++)r=advanceRun(r,1/60);
 assert.equal(r.bonus,100);assert.equal(r.flipping,false);
 assert.equal(flipRun(createRun(600)).flipping,true);
 assert(flipRun(createRun(600)).velocity>0);
});
test('thrust spends fuel, lift is capped, landing recharges',()=>{
 let r=boostRun({...createRun(600),obstacleX:10000},true);
 for(let i=0;i<30;i++)r=advanceRun(r,1/60);
 assert(r.y>0 && r.y<=150);assert(r.fuel<100);
 r=boostRun(r,false);for(let i=0;i<240;i++)r=advanceRun(r,1/60);
 assert.equal(r.y,0);assert(r.fuel>90);
});

test('a flip cannot restart during the same flight; paused state is untouched',()=>{
 const started=flipRun({...createRun(600),y:100});
 assert.equal(flipRun(started),started);
 const completed={...started,flipping:false,rotation:0};
 assert.equal(flipRun(completed),completed);
 const paused=createRun(600,'paused');assert.equal(flipRun(paused),paused);
});
