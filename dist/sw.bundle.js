if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const o=e=>r(e,d),a={module:{uri:d},exports:f,require:o};i[d]=Promise.all(s.map((e=>a[e]||o(e)))).then((e=>(n(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"f1597475a5daa2907e90e2271d411f13"},{url:"946.bundle.js",revision:"cc582ae0cd0fdff61d2e587ce1c4092d"},{url:"app.webmanifest",revision:"086b87d3fdaf9ccf7cb9e970b11fa6af"},{url:"app~a51fa3f5.bundle.js",revision:"be17210de1e29c52a182d0f45f13cbb1"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"13c52450d9d5fc02bff4bc80eb149566"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"5c60f5b33f526a269714118dcbf00190"},{url:"app~e4317507.bundle.js",revision:"c6e654d47d97ef800a78ceb6f7048644"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/resto-128x128.png",revision:"2b1dfd54d32f8b9cfb6fbdbe39870b5e"},{url:"icons/resto-144x144.png",revision:"f99eb48206dbac866194525d98be988a"},{url:"icons/resto-152x152.png",revision:"9c012f6b35d10019936b0e1a30b81d89"},{url:"icons/resto-192x192.png",revision:"a5be1d5c808654224a16e497784e0a74"},{url:"icons/resto-384x384.png",revision:"54876c5078ba8092195b824933caea18"},{url:"icons/resto-512x512.png",revision:"7750692697e92e63f2e7ba50be69f668"},{url:"icons/resto-72x72.png",revision:"0707b67ab39d01681fddf9ceee0df593"},{url:"icons/resto-96x96.png",revision:"b6650892028e77321bd6baf985c05a7a"},{url:"icons/resto.png",revision:"6aca2440570b4705a6dc6ffb0cd3aaa5"},{url:"index.html",revision:"1d2ead63fd7037abdcfa38f62c354c2d"},{url:"resto.jpg",revision:"eba59dbe6faad325aeb9204ee26351d5"}],{})}));
//# sourceMappingURL=sw.bundle.js.map