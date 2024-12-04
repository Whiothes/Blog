"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6583],{34424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(74848),i=r(28453);const t={slug:"Chapter 1. UNIX System Overview"},d="Chapter 1. UNIX System Overview",l={id:"TOC/computer/system/apue/ch01",title:"Chapter 1. UNIX System Overview",description:"1.1 Introduction ##",source:"@site/docs/TOC/computer/system/apue/ch01.md",sourceDirName:"TOC/computer/system/apue",slug:"/TOC/computer/system/apue/Chapter 1. UNIX System Overview",permalink:"/docs/TOC/computer/system/apue/Chapter 1. UNIX System Overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"Chapter 1. UNIX System Overview"},sidebar:"tutorialSidebar",previous:{title:"Advanced Programming in the Unix Environment",permalink:"/docs/category/advanced-programming-in-the-unix-environment"},next:{title:"Chapter 2. UNIX Standardization and Implementations",permalink:"/docs/TOC/computer/system/apue/ch02"}},a={},c=[{value:"1.1 Introduction",id:"11-introduction",level:2},{value:"1.2 UNIX Architecture",id:"12-unix-architecture",level:2},{value:"1.3 Logging in",id:"13-logging-in",level:2},{value:"Login Name",id:"login-name",level:3},{value:"Shells",id:"shells",level:3},{value:"1.4 Files and Descriptors",id:"14-files-and-descriptors",level:2},{value:"File System",id:"file-system",level:3},{value:"Filename",id:"filename",level:3},{value:"Pathname",id:"pathname",level:3},{value:"Working Directory",id:"working-directory",level:3},{value:"Home Directory",id:"home-directory",level:3},{value:"1.5 Input and Output",id:"15-input-and-output",level:2},{value:"File Descriptors",id:"file-descriptors",level:3},{value:"Standard Input, Standard Output, and Standard Error",id:"standard-input-standard-output-and-standard-error",level:3},{value:"Unbuffered I/O",id:"unbuffered-io",level:3},{value:"Standard I/O",id:"standard-io",level:3},{value:"1.6 Program and Processes",id:"16-program-and-processes",level:2},{value:"Program",id:"program",level:3},{value:"Processes and Process ID",id:"processes-and-process-id",level:3},{value:"Process Control",id:"process-control",level:3},{value:"Threads and Thread IDs",id:"threads-and-thread-ids",level:3},{value:"1.7 Error Handling",id:"17-error-handling",level:2},{value:"Error Recovery",id:"error-recovery",level:3},{value:"1.8 User Identification",id:"18-user-identification",level:2},{value:"User ID",id:"user-id",level:3},{value:"Group ID",id:"group-id",level:3},{value:"Supplementary Group IDs",id:"supplementary-group-ids",level:3},{value:"1.9 Signals",id:"19-signals",level:3},{value:"1.10 Time Values",id:"110-time-values",level:3},{value:"1.11 System calls and Library Functions",id:"111-system-calls-and-library-functions",level:2}];function o(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"chapter-1-unix-system-overview",children:"Chapter 1. UNIX System Overview"})}),"\n",(0,s.jsx)(n.h2,{id:"11-introduction",children:"1.1 Introduction"}),"\n",(0,s.jsx)(n.p,{children:"operating system provide services for programs running."}),"\n",(0,s.jsx)(n.h2,{id:"12-unix-architecture",children:"1.2 UNIX Architecture"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"kernel: control hardware resources of the computer and provides and environment under which program can run"}),"\n",(0,s.jsx)(n.li,{children:"system calls: the interface to the kernel"}),"\n",(0,s.jsx)(n.li,{children:"library routines: libraries of common functions are built on the top of the system call"}),"\n",(0,s.jsx)(n.li,{children:"shell: special application tha provides an interface for running other applications"}),"\n"]}),"\n",(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(31665).A+"",width:"281",height:"281"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Figure 1.1  Architecture of the UNIX operating system"})})]}),"\n",(0,s.jsx)(n.h2,{id:"13-logging-in",children:"1.3 Logging in"}),"\n",(0,s.jsx)(n.h3,{id:"login-name",children:"Login Name"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"etc/passwd"})," stored user infomation"]}),"\n",(0,s.jsx)(n.h3,{id:"shells",children:"Shells"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"01fig02",src:r(3910).A+"",width:"684",height:"130"})}),"\n",(0,s.jsx)(n.h2,{id:"14-files-and-descriptors",children:"1.4 Files and Descriptors"}),"\n",(0,s.jsx)(n.h3,{id:"file-system",children:"File System"}),"\n",(0,s.jsx)(n.p,{children:"The UNIX file system is a hierarchical arrangement of directories and files."}),"\n",(0,s.jsx)(n.h3,{id:"filename",children:"Filename"}),"\n",(0,s.jsx)(n.p,{children:"the names in a directory"}),"\n",(0,s.jsx)(n.h3,{id:"pathname",children:"Pathname"}),"\n",(0,s.jsx)(n.p,{children:"a sequence of one or more filenames, separated by slashes and optionally startting with a slash."}),"\n",(0,s.jsx)(n.h3,{id:"working-directory",children:"Working Directory"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Every process"})," has a ",(0,s.jsx)(n.em,{children:"working directory"}),", sometimes called the ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"current"})," working directory"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"home-directory",children:"Home Directory"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"login"})," directory"]}),"\n",(0,s.jsx)(n.h2,{id:"15-input-and-output",children:"1.5 Input and Output"}),"\n",(0,s.jsx)(n.h3,{id:"file-descriptors",children:"File Descriptors"}),"\n",(0,s.jsx)(n.p,{children:"small non-negative integers that the kernel uses to identify the files accessed by a process."}),"\n",(0,s.jsx)(n.h3,{id:"standard-input-standard-output-and-standard-error",children:"Standard Input, Standard Output, and Standard Error"}),"\n",(0,s.jsx)(n.p,{children:"fd equal to 0, 1, 2"}),"\n",(0,s.jsx)(n.h3,{id:"unbuffered-io",children:"Unbuffered I/O"}),"\n",(0,s.jsxs)(n.p,{children:["Unbuffered I/O is provided by the functions ",(0,s.jsx)(n.code,{children:"open"}),", ",(0,s.jsx)(n.code,{children:"read"}),", ",(0,s.jsx)(n.code,{children:"write"}),", ",(0,s.jsx)(n.code,{children:"lseek"}),", and ",(0,s.jsx)(n.code,{children:"close"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"standard-io",children:"Standard I/O"}),"\n",(0,s.jsx)(n.p,{children:"provide a buffered interface to unbuffered I/O functions."}),"\n",(0,s.jsx)(n.h2,{id:"16-program-and-processes",children:"1.6 Program and Processes"}),"\n",(0,s.jsx)(n.h3,{id:"program",children:"Program"}),"\n",(0,s.jsx)(n.p,{children:"A /program/ is an executable file residing on disk in a directory."}),"\n",(0,s.jsx)(n.h3,{id:"processes-and-process-id",children:"Processes and Process ID"}),"\n",(0,s.jsx)(n.p,{children:"An executing instance of a program"}),"\n",(0,s.jsx)(n.h3,{id:"process-control",children:"Process Control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create: ",(0,s.jsx)(n.code,{children:"fork"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["Running: ",(0,s.jsx)(n.code,{children:"exec"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["Waiting: ",(0,s.jsx)(n.code,{children:"waitpid"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"threads-and-thread-ids",children:"Threads and Thread IDs"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"All threads withina process share the same address space, file descriptors, stacks, and process-related attributes."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Each thread executes on its own stack, although any thread can ",(0,s.jsx)(n.strong,{children:"access"})," the stacks of other threads in the same process."]})}),"\n",(0,s.jsx)(n.h2,{id:"17-error-handling",children:"1.7 Error Handling"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<errno.h>"})}),"\n",(0,s.jsxs)(n.p,{children:["supports ",(0,s.jsx)(n.em,{children:"multithread"})," access to errno by defining it as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"extern int *__errno_location(void);\n#define errno (*__errno_location())\n"})}),"\n",(0,s.jsx)(n.h3,{id:"error-recovery",children:"Error Recovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"nonfatal: most nonfatal errors are temporary."}),"\n",(0,s.jsx)(n.li,{children:"fatal: no recovery action."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"typical recovery action for a resource-related nonfatal error is to delay and retry later."}),"\n",(0,s.jsx)(n.h2,{id:"18-user-identification",children:"1.8 User Identification"}),"\n",(0,s.jsx)(n.h3,{id:"user-id",children:"User ID"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"passwd"})," file, a numeric value that identifies user to the system."]}),"\n",(0,s.jsx)(n.h3,{id:"group-id",children:"Group ID"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"passwd"})," file, a numeric value that identifies group to the system."]}),"\n",(0,s.jsx)(n.h3,{id:"supplementary-group-ids",children:"Supplementary Group IDs"}),"\n",(0,s.jsx)(n.p,{children:"a user belongs to other groups"}),"\n",(0,s.jsx)(n.h3,{id:"19-signals",children:"1.9 Signals"}),"\n",(0,s.jsx)(n.p,{children:"a technique used to notify other processes"}),"\n",(0,s.jsx)(n.h3,{id:"110-time-values",children:"1.10 Time Values"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Calendar time. counts the number of seconds since the Epoch: 1970-1-1 00:00:00"}),"\n",(0,s.jsx)(n.li,{children:"Process time. measures the central processor resources used by a process."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"111-system-calls-and-library-functions",children:"1.11 System calls and Library Functions"}),"\n",(0,s.jsx)(n.h3,{id:""}),"\n",(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(5398).A+"",width:"345",height:"449"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Figure 1.11 Separation of malloc function and sbrk system call"})})]}),"\n",(0,s.jsxs)(n.p,{children:["system call in the kernel ",(0,s.jsx)(n.em,{children:"allocate"})," an additional chunk of space on behalf of the process.\nthe malloc library function ",(0,s.jsx)(n.em,{children:"manages"})," this space from user level."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(94977).A+"",width:"429",height:"421"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Figure 1.12 Difference between C library functions and system calls"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},31665:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/01fig01-c851671ad1f22ed8c1400463d1c72d2e.jpg"},3910:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/01fig02-b3270edd1ac4d20e9770044fe4283943.jpg"},5398:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/01fig11-3d3091b0bd40f6608f0b43b6d49505f6.jpg"},94977:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/01fig12-5ac576b0bb620acc8919c326384b3f54.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);