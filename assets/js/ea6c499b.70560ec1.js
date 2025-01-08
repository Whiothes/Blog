"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3012],{53978:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"TOC/computer/system/ostep/ch17","title":"17 Free-Space Management","description":"- 17 Free-Space Management","source":"@site/docs/TOC/computer/system/ostep/ch17.md","sourceDirName":"TOC/computer/system/ostep","slug":"/TOC/computer/system/ostep/ch17","permalink":"/docs/TOC/computer/system/ostep/ch17","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"16 Segmentation","permalink":"/docs/TOC/computer/system/ostep/ch16"},"next":{"title":"18 Paging: Introduction","permalink":"/docs/TOC/computer/system/ostep/ch18"}}');var s=t(74848),i=t(28453);const r={},c="17 Free-Space Management",l={},h=[{value:"17.2 Low-level Mechanisms",id:"172-low-level-mechanisms",level:2},{value:"17.3 Basic Strategies",id:"173-basic-strategies",level:2}];function d(A){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"17-free-space-management",children:"17 Free-Space Management"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"#17-free-space-management",children:"17 Free-Space Management"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"#172-low-level-mechanisms",children:"17.2 Low-level Mechanisms"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"#173-basic-strategies",children:"17.3 Basic Strategies"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"external fregmentation:"})," the free space gets chopped into little pieces of different sizes and is thus fragmented; subsequent requests may fail because there is no signle contiguous space that can satisfy the request, even though the total amount of free space exceeds the size of the request."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20230312020013311",src:t(2794).A+"",width:"749",height:"136"})}),"\n",(0,s.jsx)(e.h2,{id:"172-low-level-mechanisms",children:"17.2 Low-level Mechanisms"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Spliting and Coalescing"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20230312020311090",src:t(89811).A+"",width:"725",height:"99"})}),"\n",(0,s.jsx)(e.p,{children:"the free list of this heap would be like:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20230312020449607",src:t(14430).A+"",width:"653",height:"135"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Tracking The Size Of Allocated Regions"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"typedef struct {\n    int size;\n    int magic;\n} header_t;\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Embedding A Free List"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"typedef struct __node_t {\n int   size;\n struct __node_t *next;\n} node_t;\n"})}),"\n",(0,s.jsx)(e.p,{children:"initializes the heap and puts the first element of the free list inside that space:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"// mmap() returns a pointer to a chunk of free space\nnode_t *head =\n    mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_ANON | MAP_PRIVATE, -1, 0);\nhead->size = 4096 - sizeof(node_t);\nhead->next = NULL;\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20230312021401933",src:t(55230).A+"",width:"960",height:"1184"})}),"\n",(0,s.jsx)(e.p,{children:"upon the request for 100 bytes, the library allocated 108 bytes out of the existing one free chunk,"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20230312021520372",src:t(82723).A+"",width:"966",height:"1321"})}),"\n",(0,s.jsx)(e.h2,{id:"173-basic-strategies",children:"17.3 Basic Strategies"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Best Fit"})}),"\n",(0,s.jsx)(e.p,{children:"search through the free list and find chunks of free memory that are as big or bigger than the requested size."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Worst Fit"})}),"\n",(0,s.jsx)(e.p,{children:"find the largest chunk and return the requested amount; keep the remaining (large) chunk on the free list. Worst fit tries to thus leave big chunks free instead of lots of small chunks that can arise from a best-fit approach."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"First Fit"})}),"\n",(0,s.jsxs)(e.p,{children:["simply finds the first block that is big enough and returns the requested amount to the user. use ",(0,s.jsx)(e.strong,{children:"address-based ordering;"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Next Fit"})}),"\n",(0,s.jsx)(e.p,{children:"keeps an extra pointer to the location within the list where one was looking last."}),"\n",(0,s.jsx)(e.p,{children:"The idea is to spread the searches for free space throughout the list more uniformly, thus"})]})}function a(A={}){const{wrapper:e}={...(0,i.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(d,{...A})}):d(A)}},2794:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},89811:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},14430:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image-20230312020449607-fbce4fccc722296651679192e4c6d218.png"},55230:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image-20230312021401933-611465dedbf851e0600fd4ffc3a23d04.png"},82723:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image-20230312021520372-565c62fa62cdf4c77b29d054b046c60b.png"},28453:(A,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var n=t(96540);const s={},i=n.createContext(s);function r(A){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function c(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:r(A.components),n.createElement(i.Provider,{value:e},A.children)}}}]);