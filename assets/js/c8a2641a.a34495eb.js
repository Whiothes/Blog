"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7875],{78507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var o=r(76293),n=r(74848),a=r(28453);const s={title:"How to set coredump file path",tags:["coredump","crash","core"]},l=void 0,c={authorsImageUrls:[]},i=[{value:"Get coredump file path",id:"get-coredump-file-path",level:2},{value:"Set coredump file path",id:"set-coredump-file-path",level:2}];function p(e){const t={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"get-coredump-file-path",children:"Get coredump file path"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"sysctl kernel.core_pattern\n"})}),"\n",(0,n.jsx)(t.h2,{id:"set-coredump-file-path",children:"Set coredump file path"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"sysctl -w kernel.core_pattern=/var/crash/core.%u.%p.%t\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var o=r(96540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}},76293:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/01/21/coredump-file-set","source":"@site/blog/2023/01-21-coredump-file-set.md","title":"How to set coredump file path","description":"Get coredump file path","date":"2023-01-21T00:00:00.000Z","tags":[{"inline":true,"label":"coredump","permalink":"/blog/tags/coredump"},{"inline":true,"label":"crash","permalink":"/blog/tags/crash"},{"inline":true,"label":"core","permalink":"/blog/tags/core"}],"readingTime":0.095,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How to set coredump file path","tags":["coredump","crash","core"]},"unlisted":false,"prevItem":{"title":"Why openldap doesn\'t sync from master","permalink":"/blog/2023/02/17/openldap-sync"},"nextItem":{"title":"How to associate assembly code to exact line in C program?","permalink":"/blog/2023/01/15/objdump-C-line"}}')}}]);