import test from 'node:test';
import assert from 'node:assert/strict';
import {writeFileSync,readFileSync} from 'node:fs';
import quiz from '../netlify/functions/lib/quiz.mjs';
import {createStorage} from '../netlify/functions/api.mjs';
function setup(){
 const data=new Map(); const blob={get:async k=>data.get(k)??null,set:async(k,v)=>{data.set(k,v)},list:async({prefix})=>({blobs:[...data.keys()].filter(k=>k.startsWith(prefix)).map(key=>({key}))})};
 const env={ADMIN_PASSWORD:'test-password',BUCKET:createStorage(blob)};
 const call=(path,body,cookie)=>quiz.fetch(new Request('https://quiz.test'+path,{method:body?'POST':'GET',headers:cookie?{cookie}:{},body:body?JSON.stringify(body):undefined}),env);
 return {data,env,call};
}
test('centralisation multi-appareils, contrôle accès, corrigés et export Excel',async()=>{
 const {call,data,env}=setup();
 const publicQs=await(await call('/api/questions')).json();assert.equal(publicQs.length,33);assert.ok(publicQs.every(q=>!q.correct));
 assert.equal((await call('/api/admin/results')).status,401);
 assert.equal((await call('/api/admin/settings',{timed:false,minutes:30,max_attempts:0,allow_resume:true})).status,401);
 const login=await call('/api/admin/login',{password:env.ADMIN_PASSWORD});assert.equal(login.status,200);const cookie=login.headers.get('set-cookie').split(';')[0];
 const qs=await(await call('/api/admin/questions',null,cookie)).json();
 for(const prenom of ['Camille','Lucas']){const a=await(await call('/api/start',{nom:'Essai',prenom})).json();const r=await(await call('/api/submit',{attempt_token:a.token,answers:Object.fromEntries(qs.map(q=>[q.id,q.correct]))})).json();assert.equal(r.score20,20);assert.equal((await call('/api/submit',{attempt_token:a.token,answers:{}})).status,200)}
 const results=await(await call('/api/admin/results',null,cookie)).json();assert.equal(results.results.length,2);
 const exportX=await call('/api/admin/export.xlsx',null,cookie);writeFileSync('/tmp/quiz-netlify-test.xlsx',Buffer.from(await exportX.arrayBuffer()));
 assert.ok((await(await call('/api/admin/export.csv',null,cookie)).text()).includes('Camille'));
 assert.ok([...data.keys()].some(k=>k.startsWith('submissions/')));
});
test('réglages, limite de tentatives, reprise et échéance conservée',async()=>{
 const {call,data}=setup();const login=await call('/api/admin/login',{password:'test-password'});const cookie=login.headers.get('set-cookie').split(';')[0];
 assert.equal((await call('/api/admin/settings',{timed:true,minutes:10,max_attempts:1,allow_resume:true},cookie)).status,200);
 const a=await(await call('/api/start',{nom:'Dupont',prenom:'Marie'})).json();assert.ok(a.deadline>a.started_at);
 assert.equal((await call('/api/progress',{token:a.token,answers:{1:['A']},current:12})).status,200);
 const resumed=await(await call('/api/start',{nom:'Dupont',prenom:'Marie',token:a.token})).json();assert.equal(resumed.current,12);assert.deepEqual(resumed.answers[1],['A']);assert.equal(resumed.deadline,a.deadline);
 assert.equal((await call('/api/start',{nom:'Dupont',prenom:'Marie'})).status,403);
 const key='attempts/'+a.token+'.json';const stored=JSON.parse(data.get(key));stored.deadline=Date.now()-60000;data.set(key,JSON.stringify(stored));
 assert.equal((await call('/api/progress',{token:a.token,answers:{},current:0})).status,200);
 const r=await(await call('/api/submit',{attempt_token:a.token,answers:{2:['A']}})).json();assert.deepEqual(r.answers['1'],['A']);assert.deepEqual(r.answers['2'],[]);
});
test('interface mobile et script client livrés sans corrigé public',()=>{
 const html=readFileSync('public/index.html','utf8'),js=readFileSync('public/static/app.js','utf8');
 assert.ok(html.includes('viewport-fit=cover'));assert.ok(html.includes('settingsForm'));assert.ok(!html.includes('id="groupe"'));assert.ok(!js.includes("el('groupe').value"));new Function(js);
});

test('copies en cours visibles, mise à jour sans doublon et envoi automatique uniquement après Suivant',async()=>{
 const {call}=setup();const login=await call('/api/admin/login',{password:'test-password'});const cookie=login.headers.get('set-cookie').split(';')[0];const qs=await(await call('/api/admin/questions',null,cookie)).json();const a=await(await call('/api/start',{nom:'EnCours',prenom:'Alice'})).json();
 await call('/api/progress',{token:a.token,answers:{1:['A']},confirmed:[1],current:1});let list=await(await call('/api/admin/results',null,cookie)).json();assert.equal(list.results.length,1);assert.equal(list.results[0].status,'in_progress');assert.equal(list.results[0].answered,1);
 await call('/api/progress',{token:a.token,answers:{1:['B']},confirmed:[1],current:1});list=await(await call('/api/admin/results',null,cookie)).json();assert.equal(list.results.length,1);assert.deepEqual(list.results[0].answers[1],['B']);
 const answers=Object.fromEntries(qs.map(q=>[q.id,q.correct]));let progress=await(await call('/api/progress',{token:a.token,answers,confirmed:qs.slice(0,-1).map(q=>q.id),current:32})).json();assert.equal(progress.completed,false);
 progress=await(await call('/api/progress',{token:a.token,answers,confirmed:qs.map(q=>q.id),current:32})).json();assert.equal(progress.completed,true);assert.equal(progress.result.score20,20);
 list=await(await call('/api/admin/results',null,cookie)).json();assert.equal(list.results.length,1);assert.equal(list.results[0].status,'completed');
 const duplicate=await(await call('/api/progress',{token:a.token,answers:{},confirmed:[],current:0})).json();assert.equal(duplicate.completed,true);assert.equal(duplicate.result.score20,20);
});

test('Suivant exige une sélection et valide les QCM après tous les choix',async()=>{
 const {runInNewContext}=await import('node:vm');const elements=new Map();const element=id=>{if(!elements.has(id))elements.set(id,{value:'',textContent:'',innerHTML:'',style:{},classList:{add(){},remove(){},toggle(){},contains(){return true}},addEventListener(){},scrollIntoView(){}});return elements.get(id)};
 const ctx={document:{getElementById:element,addEventListener(){}},window:{addEventListener(){},scrollTo(){}},localStorage:{getItem(){return null}},fetch:async url=>({ok:true,json:async()=>url.includes('settings')?{timed:false,max_attempts:0,allow_resume:true}:[]}),setTimeout(){return 1},clearTimeout(){},setInterval(){return 1},clearInterval(){},alert(){},confirm(){return true}};
 runInNewContext(readFileSync('public/static/app.js','utf8'),ctx);await new Promise(r=>setImmediate(r));
 runInNewContext("questions=[{id:1,type:'QCS',text:'Simple',options:[{key:'A',text:'Choix'}]},{id:2,type:'QCM',text:'Multiple',options:[{key:'A',text:'Un'},{key:'B',text:'Deux'}]}];renderQuestion()",ctx);
 assert.equal(element('nextBtn').disabled,true);runInNewContext('move(1)',ctx);assert.equal(runInNewContext('current',ctx),0);
 runInNewContext("choose('A',true)",ctx);assert.equal(element('nextBtn').disabled,false);runInNewContext('move(1)',ctx);assert.equal(runInNewContext('current',ctx),1);assert.equal(element('nextBtn').disabled,true);
 runInNewContext("choose('A',true);choose('B',true)",ctx);assert.equal(runInNewContext('confirmed.includes(2)',ctx),false);assert.equal(runInNewContext('answers[2].length',ctx),2);
 runInNewContext('move(1)',ctx);assert.equal(runInNewContext('confirmed.length',ctx),2);assert.equal(runInNewContext('current',ctx),1);
 runInNewContext("choose('A',false);choose('B',false)",ctx);assert.equal(element('nextBtn').disabled,true);assert.equal(runInNewContext('confirmed.includes(2)',ctx),false);
});
