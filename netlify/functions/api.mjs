import { getStore } from '@netlify/blobs';
import quiz from './lib/quiz.mjs';
export function createStorage(store) {
 return {
  async get(key) { const value=await store.get(key); return value===null?null:{text:async()=>value}; },
  async put(key,value) { await store.set(key,value); },
  async list({prefix}) { const {blobs}=await store.list({prefix}); return {objects:blobs.map(({key})=>({key})),truncated:false}; }
 };
}
export default async function handler(request) {
 if(!process.env.ADMIN_PASSWORD) return Response.json({error:'Le formateur doit configurer ADMIN_PASSWORD dans Netlify puis republier le site.'},{status:503});
 const store=getStore({name:'quizpharma-data',consistency:'strong'});
 return quiz.fetch(request,{ADMIN_PASSWORD:process.env.ADMIN_PASSWORD,BUCKET:createStorage(store)});
}
export const config={path:'/api/*'};
