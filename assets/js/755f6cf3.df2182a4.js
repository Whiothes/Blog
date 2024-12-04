"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8286],{79757:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"TOC/computer/system/ostep/Virtualization/ch06","title":"6 Mechanism: Limited Direct Execution","description":"6.1 Basic Technique: Limited Direct Execution ##","source":"@site/docs/TOC/computer/system/ostep/Virtualization/ch06.md","sourceDirName":"TOC/computer/system/ostep/Virtualization","slug":"/TOC/computer/system/ostep/Virtualization/ch06","permalink":"/docs/TOC/computer/system/ostep/Virtualization/ch06","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"5 Interlude: Process API","permalink":"/docs/TOC/computer/system/ostep/Virtualization/ch05"},"next":{"title":"7 Scheduling: Introduction","permalink":"/docs/TOC/computer/system/ostep/Virtualization/ch07"}}');var n=r(74848),i=r(28453);const o={},c="6 Mechanism: Limited Direct Execution",l={},d=[{value:"6.1 Basic Technique: Limited Direct Execution",id:"61-basic-technique-limited-direct-execution",level:2},{value:"6.2 Problem #1: Restricted Operations",id:"62-problem-1-restricted-operations",level:2},{value:"6.3 Problem #2: Switching Between Processes",id:"63-problem-2-switching-between-processes",level:2},{value:"Saving and Restoring Context",id:"saving-and-restoring-context",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"6-mechanism-limited-direct-execution",children:"6 Mechanism: Limited Direct Execution"})}),"\n",(0,n.jsx)(s.h2,{id:"61-basic-technique-limited-direct-execution",children:"6.1 Basic Technique: Limited Direct Execution"}),"\n",(0,n.jsx)(s.p,{children:"problems to virtualize the CPU:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"make sure program doesn't do anything should not be done while still running it efficiently"}),"\n",(0,n.jsx)(s.li,{children:"how operating system stop and switch to another process."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"62-problem-1-restricted-operations",children:"6.2 Problem #1: Restricted Operations"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user mdoe"})," : applications do not have full access to hardware resources."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"kernel mode"})," : the OS has access to the full resources of the machine."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"system call"})," : make user process perform some kinds of privileged operation, such as reading from disk.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"trap"})," instruction: simultaneously jumps into the kernel and raises the privilege level to kernel mode.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"return-from-trap"})," : returns into the calling user program while simultaneously reducing the privilege level back to user mode when finished."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"kernel stack"})," : pushed the program counter, flags, and a few other registers onto a per-process ",(0,n.jsx)(s.strong,{children:"kernel stack"})," for ",(0,n.jsx)(s.strong,{children:"return-from-trap"})," to pop to resume execution of the user-mode program."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"trap table"})," : setting up at boot time for ",(0,n.jsx)(s.strong,{children:"trap"})," to know which code to run."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"system call number"})," : assigned to each system call to specify the exact system call."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"left"},children:(0,n.jsxs)("table",{align:"center",children:[(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["OS @ boot ",(0,n.jsx)("br",{}),"\n(kernel mode)"]}),(0,n.jsx)("th",{children:"Hardware"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"initialize the table"}),(0,n.jsx)("td",{children:"remember address of sycall handler"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["OS @ run ",(0,n.jsx)("br",{}),"(kernel mode)"]}),(0,n.jsx)("th",{children:"Hardware"}),(0,n.jsxs)("th",{children:["Program ",(0,n.jsx)("br",{}),"(user mode)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:["Create entry for process list",(0,n.jsx)("br",{}),"\nAllocate memory for program",(0,n.jsx)("br",{}),"\nLoad program into memory",(0,n.jsx)("br",{}),"\nSetup user stack with argv",(0,n.jsx)("br",{}),"\nFill kernel stack with reg/PC",(0,n.jsx)("br",{}),"\nreturn-from-trap "]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["restore regs",(0,n.jsx)("br",{}),"\n(from kernel stack)",(0,n.jsx)("br",{}),"\nmove to user mode",(0,n.jsx)("br",{}),"\njump to main",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Run main()",(0,n.jsx)("br",{}),"\n...",(0,n.jsx)("br",{}),"\nCall system call",(0,n.jsx)("br",{}),"\ntrap into OS",(0,n.jsx)("br",{})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["save regs",(0,n.jsx)("br",{}),"\n(to kernel stack)",(0,n.jsx)("br",{}),"\nmove to kernel mode",(0,n.jsx)("br",{}),"\njump to trap handler",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Handle trap",(0,n.jsx)("br",{}),"\nDo work of system call ",(0,n.jsx)("br",{}),"\nreturn-from-trap",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["restore regs",(0,n.jsx)("br",{}),"\n(from kern mode>",(0,n.jsx)("br",{}),"\nmove to user mode",(0,n.jsx)("br",{}),"\njump to PC after trap",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["...",(0,n.jsx)("br",{}),"\nreturn from main()",(0,n.jsx)("br",{}),"\ntrap(via exit())",(0,n.jsx)("br",{})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Free memory of process",(0,n.jsx)("br",{}),"\nRemvoe from process list",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]})]})}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsxs)(s.p,{children:["Figure 6.2: ",(0,n.jsx)(s.strong,{children:"Limited Direct Execution Protocol"})]})}),"\n",(0,n.jsx)(s.h2,{id:"63-problem-2-switching-between-processes",children:"6.3 Problem #2: Switching Between Processes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"How can the operating system regain contraol of the CPU so that it can switch between process?\n"})}),"\n",(0,n.jsx)(s.h3,{id:"saving-and-restoring-context",children:"Saving and Restoring Context"}),"\n",(0,n.jsx)(s.p,{children:"By switching stacks, the kernel enters the call to the switch code in the context of one process and returns int he context of another."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var t=r(96540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);