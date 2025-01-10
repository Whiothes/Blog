"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9846],{42814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var s=t(65329),r=t(74848),l=t(28453);const a={title:"Configure Local NTP Server",tags:["ntp"]},o=void 0,c={authorsImageUrls:[]},i=[];function d(e){const n={code:"code",li:"li",ol:"ol",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"install NTP package"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# CentOS\n$ sudo yum install -y ntp\n\n# Ubuntu\n$ sudo apt install -y ntp\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Edit ",(0,r.jsx)(n.code,{children:"ntp.conf"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vim /etc/ntp.conf\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"# Add local server\nserver 192.168.5.104\n\n# Set access restrict\nrestrict 192.168.5.0 mask 255.255.254.0 notrap\n\n# Set logfile\nlogfile /var/log/ntpservice.log\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Start NTP server"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ntpd\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Verify NTP Server"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ntpq -p\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}},65329:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/01/09/setup-local-ntp-server","source":"@site/blog/2023/01-09-setup-local-ntp-server.md","title":"Configure Local NTP Server","description":"1. install NTP package","date":"2023-01-09T00:00:00.000Z","tags":[{"inline":true,"label":"ntp","permalink":"/blog/tags/ntp"}],"readingTime":0.33,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Configure Local NTP Server","tags":["ntp"]},"unlisted":false,"prevItem":{"title":"How to copy to clipboard in Vim?","permalink":"/blog/2023/01/11/vim-copy-to-clipboard"},"nextItem":{"title":"Connection \u2018ens33\u2018 is not available on device ens33 because device is strictly unmanaged","permalink":"/blog/2022/12/20/2022/interface-manage"}}')}}]);