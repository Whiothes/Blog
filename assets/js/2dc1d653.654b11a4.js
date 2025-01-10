"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7295],{72675:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var o=t(57267),r=t(74848),i=t(28453);const c={title:"docker  modify config for running container",tags:["docker","container","config","mount"]},s=void 0,a={authorsImageUrls:[]},l=[];function d(n){const e={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"stop docker"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"systemctl stop docker\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"modify container's config"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"$ cd /var/lib/docker/container/$containerID/\n\n$ vim config.v2.json\n\n# modify MountPoints\n\n$ vim hsotconfig.json\n\n# modify Binds\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"start docker"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"systemctl start docker\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"start container"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"docker start $containerID\n"})}),"\n"]}),"\n"]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function c(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(i.Provider,{value:e},n.children)}},57267:n=>{n.exports=JSON.parse('{"permalink":"/blog/2022/12/16/2022/docker-container-config","source":"@site/blog/2022/2022-12-16-docker-container-config.md","title":"docker  modify config for running container","description":"1. stop docker","date":"2022-12-16T00:00:00.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/tags/docker"},{"inline":true,"label":"container","permalink":"/blog/tags/container"},{"inline":true,"label":"config","permalink":"/blog/tags/config"},{"inline":true,"label":"mount","permalink":"/blog/tags/mount"}],"readingTime":0.225,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"docker  modify config for running container","tags":["docker","container","config","mount"]},"unlisted":false,"prevItem":{"title":"Connection \u2018ens33\u2018 is not available on device ens33 because device is strictly unmanaged","permalink":"/blog/2022/12/20/2022/interface-manage"},"nextItem":{"title":"Set up Meld as Difftool and Mergetool for Git","permalink":"/blog/2022/11/22/2022/git-diff-meld-tool"}}')}}]);