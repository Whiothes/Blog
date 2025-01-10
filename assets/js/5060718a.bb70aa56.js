"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8496],{28520:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var c=l(42998),r=l(74848),o=l(28453);const t={title:"How to Clear Cache in Linux?",tags:["linux","memory","buff","cache"]},a=void 0,s={authorsImageUrls:[]},i=[{value:"How to Clear Cache in Linux?",id:"how-to-clear-cache-in-linux",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"how-to-clear-cache-in-linux",children:(0,r.jsx)(n.a,{href:"https://www.tecmint.com/clear-ram-memory-cache-buffer-and-swap-space-on-linux/",children:"How to Clear Cache in Linux?"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clear PageCache only."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sync; echo 1 > /proc/sys/vm/drop_caches\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Clear dentries and inodes."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sync; echo 2 > /proc/sys/vm/drop_caches\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Clear pagecache, dentries, and inodes."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sync; echo 3 > /proc/sys/vm/drop_caches\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["references:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.kernel.org/doc/html/latest/admin-guide/sysctl/vm.html#drop-caches",children:"Documentation for /proc/sys/vm/drop_caches"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>a});var c=l(96540);const r={},o=c.createContext(r);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(o.Provider,{value:n},e.children)}},42998:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/07/18/2022/clean-buff-cache","source":"@site/blog/2022/2022-07-18-clean-buff-cache.md","title":"How to Clear Cache in Linux?","description":"How to Clear Cache in Linux?","date":"2022-07-18T00:00:00.000Z","tags":[{"inline":true,"label":"linux","permalink":"/blog/tags/linux"},{"inline":true,"label":"memory","permalink":"/blog/tags/memory"},{"inline":true,"label":"buff","permalink":"/blog/tags/buff"},{"inline":true,"label":"cache","permalink":"/blog/tags/cache"}],"readingTime":0.245,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How to Clear Cache in Linux?","tags":["linux","memory","buff","cache"]},"unlisted":false,"prevItem":{"title":"How to block yum from upgrading obsoleted package?","permalink":"/blog/2022/07/20/2022/yum-block-obsolete"},"nextItem":{"title":"ideas of memory pool","permalink":"/blog/2022/07/03/2022/mem-pool"}}')}}]);