"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6990],{20818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"TOC/computer/network/tcpip/ch13","title":"Chapter 13. TCP Connection Management","description":"13.1 Introduction ##","source":"@site/docs/TOC/computer/network/tcpip/ch13.md","sourceDirName":"TOC/computer/network/tcpip","slug":"/TOC/computer/network/tcpip/ch13","permalink":"/docs/TOC/computer/network/tcpip/ch13","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 12. TCP: The Transmission Control Protocol (Preliminaries)","permalink":"/docs/TOC/computer/network/tcpip/ch12"},"next":{"title":"\u7b97\u6cd5 (\u7b2c 4 \u7248)","permalink":"/docs/category/\u7b97\u6cd5-\u7b2c-4-\u7248"}}');var s=n(74848),r=n(28453);const d={},c="Chapter 13. TCP Connection Management",l={},o=[{value:"13.1 Introduction",id:"131-introduction",level:2},{value:"13.2 TCP Connection Establishment and Termination",id:"132-tcp-connection-establishment-and-termination",level:2},{value:"13.2.1 TCP Half-Close",id:"1321-tcp-half-close",level:3},{value:"13.3 TCP Options",id:"133-tcp-options",level:2},{value:"13.5 TCP State Transitions",id:"135-tcp-state-transitions",level:2},{value:"13.5.1 TCP State Transition Diagram",id:"1351-tcp-state-transition-diagram",level:3},{value:"13.5.2 TIME_WAIT (2MSL Wait) State",id:"1352-time_wait-2msl-wait-state",level:3}];function a(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"chapter-13-tcp-connection-management",children:"Chapter 13. TCP Connection Management"})}),"\n",(0,s.jsx)(t.h2,{id:"131-introduction",children:"13.1 Introduction"}),"\n",(0,s.jsx)(t.h2,{id:"132-tcp-connection-establishment-and-termination",children:"13.2 TCP Connection Establishment and Termination"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"4-tuple: source ip, destination ip, source port, destination port."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"half-close"}),": close only a single direction of the data flow."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"reason for prefer to use UDP:"}),"\n",(0,s.jsx)(t.p,{children:"because of its ability to send and receive data without establishing connnections."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"1321-tcp-half-close",children:"13.2.1 TCP Half-Close"}),"\n",(0,s.jsx)(t.h2,{id:"133-tcp-options",children:"13.3 TCP Options"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Kind"}),(0,s.jsx)(t.th,{children:"Length"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Reference"}),(0,s.jsx)(t.th,{children:"Description and Purpose"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"EOL"}),(0,s.jsx)(t.td,{children:"[RFC0793]"}),(0,s.jsx)(t.td,{children:"End of Option List"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"NOP"}),(0,s.jsx)(t.td,{children:"[RFC0793]"}),(0,s.jsx)(t.td,{children:"No Operation (used for padding)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"MSS"}),(0,s.jsx)(t.td,{children:"[RFC0793]"}),(0,s.jsxs)(t.td,{children:["Maximum Segment Size ",(0,s.jsx)("br",{}),"1500 - 20",":IPv4"," - 20",":TCP"," [-12",":Timestamp","] = ",(0,s.jsx)(t.strong,{children:"1460"})," [1448]"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"WSOPT"}),(0,s.jsx)(t.td,{children:"[RFC1323]"}),(0,s.jsx)(t.td,{children:"Window Scaling Factor (left-shift amount on window)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"SACK-Permitted"}),(0,s.jsx)(t.td,{children:"[RFC2018]"}),(0,s.jsx)(t.td,{children:"Sender supports SACK options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"Var."}),(0,s.jsx)(t.td,{children:"SACK"}),(0,s.jsx)(t.td,{children:"[RFC2018]"}),(0,s.jsx)(t.td,{children:"SACK block(out-of-order data received)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"TSOPT"}),(0,s.jsx)(t.td,{children:"[RFC1323]"}),(0,s.jsx)(t.td,{children:"Timestamps option"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"28"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"UTO"}),(0,s.jsx)(t.td,{children:"[RFC5482]"}),(0,s.jsx)(t.td,{children:"User Timeout (abort after idle time)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"29"}),(0,s.jsx)(t.td,{children:"Var."}),(0,s.jsx)(t.td,{children:"TCP-AO"}),(0,s.jsx)(t.td,{children:"[RFC5925]"}),(0,s.jsx)(t.td,{children:"Authentication option (using various algorithms)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"253"}),(0,s.jsx)(t.td,{children:"Var."}),(0,s.jsx)(t.td,{children:"Experimental"}),(0,s.jsx)(t.td,{children:"[RFC4727]"}),(0,s.jsx)(t.td,{children:"Reserved for experimental use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"254"}),(0,s.jsx)(t.td,{children:"Var."}),(0,s.jsx)(t.td,{children:"Experimental"}),(0,s.jsx)(t.td,{children:"[RFC4727]"}),(0,s.jsx)(t.td,{children:"Reserved for experimental use"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"135-tcp-state-transitions",children:"13.5 TCP State Transitions"}),"\n",(0,s.jsx)(t.h3,{id:"1351-tcp-state-transition-diagram",children:"13.5.1 TCP State Transition Diagram"}),"\n",(0,s.jsx)(t.p,{children:"The Same as UNP"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image-20230409162314729",src:n(87327).A+"",width:"1068",height:"1374"})}),"\n",(0,s.jsx)(t.h3,{id:"1352-time_wait-2msl-wait-state",children:"13.5.2 TIME_WAIT (2MSL Wait) State"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["MSL: ",(0,s.jsx)(t.em,{children:"Maximum Segment Lifetime"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(72508).A+"",width:"639",height:"623"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},87327:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image-20230409162314729-c6ea13ee1b18d1659e1472f08acd6719.png"},72508:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fig13-9-863abdbf366ec12c8bcab8bcdcce699a.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);