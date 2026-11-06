import quiz from '../netlify/functions/lib/quiz.mjs';
export function storage(db) {return {
 async get(key){const row=await db.prepare('SELECT value FROM records WHERE key = ?').bind(key).first();return row?{text:async()=>row.value}:null},
 async put(key,value){await db.prepare('INSERT INTO records(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key,value).run()},
 async list({prefix='',cursor=''}){const result=await db.prepare('SELECT key FROM records WHERE key >= ? AND key < ? AND key > ? ORDER BY key LIMIT 500').bind(prefix,prefix+'\uffff',cursor).all();const objects=result.results;return {objects,truncated:objects.length===500,cursor:objects.at(-1)?.key}}
}}
export default {async fetch(req,env){
 const url=new URL(req.url);
 if(url.pathname.startsWith('/api/')){
  if(!env.ADMIN_PASSWORD||!env.DB)return Response.json({error:'Configuration Cloudflare incomplète : DB et ADMIN_PASSWORD requis.'},{status:503});
  return quiz.fetch(req,{ADMIN_PASSWORD:env.ADMIN_PASSWORD,BUCKET:storage(env.DB)});
 }
 if(!['GET','HEAD'].includes(req.method))return new Response('Method not allowed',{status:405});
 // Seuls les fichiers publics passent par Netlify. Les données restent dans D1.
 const path=url.pathname==='/'?'/index.html':url.pathname;
 const hashes=env.ASSET_HASHES||{};
 if(env.NETLIFY_ORIGIN&&hashes[path]){
  try{
   const origin=new URL(env.NETLIFY_ORIGIN);
   if(origin.protocol!=='https:'||origin.hostname===url.hostname)throw Error('Origine invalide');
   const r=await fetch(new URL(path,origin),{method:'GET',redirect:'error',signal:AbortSignal.timeout(2500)});
   if(r.ok){const bytes=await r.arrayBuffer();const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),b=>b.toString(16).padStart(2,'0')).join('');
    if(hash===hashes[path]){const h=new Headers(r.headers);h.delete('set-cookie');h.delete('content-encoding');h.delete('content-length');h.delete('etag');h.set('X-Quiz-Hosting','netlify');return new Response(req.method==='HEAD'?null:bytes,{headers:h,status:200})}
   }
  }catch{/* Copie Cloudflare si panne, quota, délai ou contenu inattendu. */}
 }
 const r=await env.ASSETS.fetch(req);const h=new Headers(r.headers);h.set('X-Quiz-Hosting','cloudflare');return new Response(r.body,{status:r.status,headers:h});
}}
