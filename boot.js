(async()=>{
const n=17;
const parts=[];
for(let i=0;i<n;i++){
  const t=await fetch('./p'+i+'.txt').then(r=>{if(!r.ok)throw new Error('missing p'+i+'.txt ('+r.status+')');return r.text();});
  parts.push(t.trim());
}
(0,eval)(new TextDecoder().decode(Uint8Array.from(atob(parts.join('')),c=>c.charCodeAt(0))));
})().catch(e=>{console.error(e);document.body.insertAdjacentHTML('beforeend','<pre style="color:#f88;padding:20px;font:14px monospace">Vortoria client load error:\n'+e+'</pre>');});
