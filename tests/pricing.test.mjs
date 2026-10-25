import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultSelection, estimate, normalizeSelection, readSelection } from '../app/services/pricing-data.ts';

test('website and optional maintenance never mix one-off and monthly amounts',()=>{
 const result=estimate({...defaultSelection,website:'launch',maintenance:'beheer'});
 assert.equal(result.oneOff,950); assert.equal(result.monthly,99);
 assert.match(result.summary,/Eenmalig: Circa/); assert.match(result.summary,/per maand/);
 assert.ok(result.pending.some(x=>x.includes('Hosting')));
});
test('unpriced extras remain explicit and do not become zero-priced inclusions',()=>{
 const result=estimate({...defaultSelection,extras:['cms','shop']});
 assert.equal(result.oneOff,1950); assert.deepEqual(result.extraLabels,['Zelf inhoud aanpassen','Verkopen of betalen']);
 assert.match(result.summary,/op offerte/); assert.ok(result.pending.includes('Verkopen of betalen'));
});
test('design and maintenance agree with approved advertised prices',()=>{
 assert.equal(estimate({...defaultSelection,service:'design',design:'set'}).oneOff,225);
 assert.equal(estimate({...defaultSelection,service:'design',design:'single'}).qualifier,'Vanaf');
 assert.equal(estimate({...defaultSelection,service:'design',design:'flyer'}).oneOff,95);
 const maintenance=estimate({...defaultSelection,service:'maintenance',maintenance:'doorontwikkeling'});
 assert.equal(maintenance.oneOff,null); assert.equal(maintenance.monthly,179);
});
test('switching to a bespoke service never carries a website maintenance charge',()=>{
 const result=estimate({...defaultSelection,service:'software',maintenance:'doorontwikkeling',extras:['ai']});
 assert.equal(result.oneOff,null); assert.equal(result.monthly,null); assert.equal(result.amountLabel,'Op offerte');
 assert.match(result.summary,/AI-ondersteuning/);
});
test('untrusted query data is constrained to known identifiers and prices',()=>{
 const selection=readSelection(JSON.stringify({service:'design',design:'set',amount:1,extras:['publish','publish','<script>'],maintenance:'free'}));
 const result=estimate(selection);
 assert.equal(result.oneOff,225); assert.deepEqual(selection.extras,['publish']);
 assert.equal(readSelection('{broken'),undefined); assert.equal(readSelection('x'.repeat(2001)),undefined);
 assert.equal(normalizeSelection({service:'__proto__',website:'toString'}).website,'business');
});
test('a maintenance enquiry always has a valid plan, and selection survives a URL round-trip',()=>{
 const initial=normalizeSelection({service:'maintenance',maintenance:'none'});
 assert.equal(initial.maintenance,'basis');
 const param=new URLSearchParams({samenstelling:JSON.stringify(initial)});
 assert.deepEqual(readSelection(new URLSearchParams(param.toString()).get('samenstelling')),initial);
 assert.equal(estimate(initial).monthly,49);
});
