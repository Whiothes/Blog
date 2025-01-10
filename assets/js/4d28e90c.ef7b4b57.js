"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8564],{30948:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var t=a(71152),i=a(74848),o=a(28453);const s={title:"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OS",tags:["ubuntu","apt","debian","depends"]},l=void 0,d={authorsImageUrls:[]},c=[{value:"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OSLink Text",id:"how-to-download-packages-with-dependencies-locally-in-ubuntu-debian-linux-mint-pop-oslink-text",level:2},{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"how-to-download-packages-with-dependencies-locally-in-ubuntu-debian-linux-mint-pop-oslink-text",children:(0,i.jsx)(n.a,{href:"https://ostechnix.com/download-packages-dependencies-locally-ubuntu/",children:"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OSLink Text"})}),"\n",(0,i.jsx)(n.h3,{id:"method-1",children:"Method 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt-get install --download-only <package_name>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All downloaded files will be saved in ",(0,i.jsx)(n.code,{children:"/var/cache/apt/archives"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo dpkg -i *\n"})}),"\n",(0,i.jsx)(n.h3,{id:"method-2",children:"Method 2"}),"\n",(0,i.jsxs)(n.p,{children:["if we have installed packages already, use the ",(0,i.jsx)(n.code,{children:"apt-rdepends"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'$ sudo apt install apt-rdepends\n\napt download $(apt-rdepends vim | grep -v "^ ")\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"if we get errors like this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"E: Can't select candidate version from package debconf-2.0 as it has no candidate\n"})}),"\n",(0,i.jsx)(n.p,{children:"delete version specified in name like this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"apt-get download $(apt-rdepends vim | grep -v \"^ \" | sed 's/debconf-2.0/debconf/g')\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo dpkg -i *\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var t=a(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},71152:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/10/27/2022/download-with-deps","source":"@site/blog/2022/2022-10-27-download-with-deps.md","title":"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OS","description":"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OSLink Text","date":"2022-10-27T00:00:00.000Z","tags":[{"inline":true,"label":"ubuntu","permalink":"/blog/tags/ubuntu"},{"inline":true,"label":"apt","permalink":"/blog/tags/apt"},{"inline":true,"label":"debian","permalink":"/blog/tags/debian"},{"inline":true,"label":"depends","permalink":"/blog/tags/depends"}],"readingTime":0.59,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OS","tags":["ubuntu","apt","debian","depends"]},"unlisted":false,"prevItem":{"title":"insecurity proof failed resolving \'$DOMAIN/A/IN\'","permalink":"/blog/2022/10/28/2022/dnssec-forward"},"nextItem":{"title":"AD \u7684\u4e3b\u8981\u6982\u5ff5","permalink":"/blog/2022/10/25/2022/ms_ad_key_concepts_schema"}}')}}]);