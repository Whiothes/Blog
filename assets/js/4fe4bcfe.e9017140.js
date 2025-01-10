"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1388],{99821:(I,g,i)=>{i.r(g),i.d(g,{assets:()=>Z,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>C,toc:()=>d});const C=JSON.parse('{"id":"TOC/computer/network/UNIX Network Programming/part2/ch6","title":"Chapter 6. I/O Multiplexing: The \'select\' and \'poll\' Functions","description":"6.1 Introduction","source":"@site/docs/TOC/computer/network/UNIX Network Programming/part2/ch6.md","sourceDirName":"TOC/computer/network/UNIX Network Programming/part2","slug":"/TOC/computer/network/UNIX Network Programming/part2/ch6","permalink":"/docs/TOC/computer/network/UNIX Network Programming/part2/ch6","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Appendix: io_uring","permalink":"/docs/TOC/computer/network/UNIX Network Programming/part2/appendix"},"next":{"title":"2 The Transport Layer: TCP, UDP, and SCTP","permalink":"/docs/TOC/computer/network/UNIX Network Programming/part1/ch02"}}');var A=i(74848),M=i(28453);const l={},c="Chapter 6. I/O Multiplexing: The 'select' and 'poll' Functions",Z={},d=[{value:"6.1 Introduction",id:"61-introduction",level:2},{value:"6.2 I/O Models",id:"62-io-models",level:2},{value:"Blocking I/O Model",id:"blocking-io-model",level:3},{value:"Nonblocking I/O Model",id:"nonblocking-io-model",level:3},{value:"I/O Multiplexing Model",id:"io-multiplexing-model",level:3},{value:"Signal-Driven Model",id:"signal-driven-model",level:3},{value:"Asynchronous I/O Model",id:"asynchronous-io-model",level:3},{value:"Epoll",id:"epoll",level:3},{value:"Aside",id:"aside",level:4},{value:"select advantages",id:"select-advantages",level:5},{value:"select disadvantages",id:"select-disadvantages",level:5},{value:"poll advantages",id:"poll-advantages",level:5},{value:"poll disadvantages",id:"poll-disadvantages",level:5}];function N(I){const g={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,M.R)(),...I.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g.header,{children:(0,A.jsx)(g.h1,{id:"chapter-6-io-multiplexing-the-select-and-poll-functions",children:"Chapter 6. I/O Multiplexing: The 'select' and 'poll' Functions"})}),"\n",(0,A.jsx)(g.h2,{id:"61-introduction",children:"6.1 Introduction"}),"\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsx)(g.li,{children:"When a client is handling multiplexing descriptors, I/O multiplexing should be used."}),"\n",(0,A.jsxs)(g.li,{children:["for a client to handle multiplex sockets at the same time. use ",(0,A.jsx)(g.code,{children:"select"})]}),"\n",(0,A.jsx)(g.li,{children:"TCP server handles both a listening socket and its connected sockets, I/O multiplexing is normally used"}),"\n",(0,A.jsx)(g.li,{children:"a server handles both TCP and UDP, I/O multiplexing is normally used"}),"\n",(0,A.jsx)(g.li,{children:"a server handles multiple services and perhaps multiple protocols, I/O multiplexing is normally used"}),"\n"]}),"\n",(0,A.jsx)(g.h2,{id:"62-io-models",children:"6.2 I/O Models"}),"\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsx)(g.li,{children:"blocking I/O"}),"\n",(0,A.jsx)(g.li,{children:"nonblocking I/O"}),"\n",(0,A.jsxs)(g.li,{children:["I/O multiplexing (",(0,A.jsx)(g.code,{children:"select"})," and ",(0,A.jsx)(g.code,{children:"poll"}),")"]}),"\n",(0,A.jsxs)(g.li,{children:["signal driven I/O (",(0,A.jsx)(g.code,{children:"SIGIO"}),")"]}),"\n",(0,A.jsxs)(g.li,{children:["asynchronous I/O (the POSIX ",(0,A.jsx)(g.code,{children:"aio_"}),"functions)"]}),"\n"]}),"\n",(0,A.jsx)(g.h3,{id:"blocking-io-model",children:"Blocking I/O Model"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(91024).A+"",width:"854",height:"468"})}),"\n",(0,A.jsx)(g.h3,{id:"nonblocking-io-model",children:"Nonblocking I/O Model"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(36163).A+"",width:"858",height:"468"})}),"\n",(0,A.jsx)(g.h3,{id:"io-multiplexing-model",children:"I/O Multiplexing Model"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(98226).A+"",width:"1147",height:"468"})}),"\n",(0,A.jsx)(g.h3,{id:"signal-driven-model",children:"Signal-Driven Model"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(32157).A+"",width:"893",height:"468"})}),"\n",(0,A.jsx)(g.h3,{id:"asynchronous-io-model",children:"Asynchronous I/O Model"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(77884).A+"",width:"835",height:"468"})}),"\n",(0,A.jsx)(g.h3,{id:"epoll",children:"Epoll"}),"\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsxs)(g.li,{children:["reference: ",(0,A.jsx)(g.strong,{children:"Linux Programming Interface: Chapter 63.4 The epoll API"})]}),"\n"]}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.img,{src:i(25859).A+"",width:"1266",height:"468"})}),"\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsxs)(g.li,{children:["Primary Advantages:","\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsxs)(g.li,{children:["the performance of ",(0,A.jsx)(g.em,{children:"epoll"})," scales much better than ",(0,A.jsx)(g.code,{children:"select()"})," and ",(0,A.jsx)(g.code,{children:"poll()"})," when monitoring ",(0,A.jsx)(g.strong,{children:"large"})," numbers of file descriptors"]}),"\n",(0,A.jsxs)(g.li,{children:["the ",(0,A.jsx)(g.em,{children:"epoll"})," API permits either level-trigger or edge-trigger notification."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(g.p,{children:["The performance of ",(0,A.jsx)(g.em,{children:"epoll"})," and signal-driven I/O is similar. but:"]}),"\n",(0,A.jsxs)(g.ul,{children:["\n",(0,A.jsx)(g.li,{children:"we avoid complexities of signal handling"}),"\n",(0,A.jsx)(g.li,{children:"we have greater fleixibility in specifiying what kind of monitoring we want to perform."}),"\n"]}),"\n",(0,A.jsxs)(g.p,{children:["for more detail, see ",(0,A.jsx)(g.strong,{children:"Linux Programming Interface"})]}),"\n",(0,A.jsx)(g.h4,{id:"aside",children:"Aside"}),"\n",(0,A.jsx)(g.p,{children:(0,A.jsx)(g.a,{href:"https://blog.actorsfit.com/a?ID=00450-c9565a1c-22e8-49ad-87b8-ee42f071694c",children:"The advantages and disadvantages of select, poll, epoll and comparison"})}),"\n",(0,A.jsx)(g.h5,{id:"select-advantages",children:"select advantages"}),"\n",(0,A.jsxs)(g.ol,{children:["\n",(0,A.jsx)(g.li,{children:"portable"}),"\n",(0,A.jsx)(g.li,{children:"provides better time precision for timeout values: microseconds, while poll is milliseconds."}),"\n"]}),"\n",(0,A.jsx)(g.h5,{id:"select-disadvantages",children:"select disadvantages"}),"\n",(0,A.jsxs)(g.ol,{children:["\n",(0,A.jsx)(g.li,{children:"fd number can be monitored is limited by a single process"}),"\n",(0,A.jsx)(g.li,{children:"maintain a data structure to store a large number of fd, copy between userspace and kernel space"}),"\n",(0,A.jsx)(g.li,{children:"linear scanning in fd list"}),"\n",(0,A.jsx)(g.li,{children:"timeout is not returned. needs to be reset before entering the next select"}),"\n"]}),"\n",(0,A.jsx)(g.h5,{id:"poll-advantages",children:"poll advantages"}),"\n",(0,A.jsxs)(g.ol,{children:["\n",(0,A.jsx)(g.li,{children:"fd number is no limit (pass events to kernel through pollfd)"}),"\n",(0,A.jsx)(g.li,{children:"faster than select when dealing with a large number of fd"}),"\n",(0,A.jsx)(g.li,{children:"has no limit on the maximum number of connections"}),"\n"]}),"\n",(0,A.jsx)(g.h5,{id:"poll-disadvantages",children:"poll disadvantages"}),"\n",(0,A.jsxs)(g.ol,{children:["\n",(0,A.jsx)(g.li,{children:"large number of fd arrays copied between user mode and kernel address space"}),"\n",(0,A.jsxs)(g.li,{children:[(0,A.jsx)(g.em,{children:"like select"}),", after poll returns, poll fd needs to be obtain the ready descriptor"]}),"\n"]})]})}function m(I={}){const{wrapper:g}={...(0,M.R)(),...I.components};return g?(0,A.jsx)(g,{...I,children:(0,A.jsx)(N,{...I})}):N(I)}},25859:(I,g,i)=>{i.d(g,{A:()=>C});const C=i.p+"assets/images/epoll-af4cda34943c6ceb46db2cb354cd747d.svg"},91024:(I,g,i)=>{i.d(g,{A:()=>C});const C="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0xOTEgNjYwIDg1NCA0NjgiIHdpZHRoPSI4NTQiIGhlaWdodD0iNDY4Ij4KICA8ZGVmcz4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHZpZXdCb3g9Ii0xIC00IDggOCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgY29sb3I9IiM2NjZhNmIiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNIDUuNzYgMCBMIDAgLTIuMTYgTCAwIDIuMTYgWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvbWFya2VyPgogICAgPGZvbnQtZmFjZSBmb250LWZhbWlseT0iQXZlbmlyIiBmb250LXNpemU9IjEzIiBwYW5vc2UtMT0iMiAxMSA1IDMgMiAyIDMgMiAyIDQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjQ2OCIgY2FwLWhlaWdodD0iNzA4IiBhc2NlbnQ9IjFlMyIgZGVzY2VudD0iLTM2NS45OTczIiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkF2ZW5pci1Sb21hbiIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxmb250LWZhY2UgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAyIDAgNCIgdW5pdHMtcGVyLWVtPSIxMDAwIiB1bmRlcmxpbmUtcG9zaXRpb249Ii0xMDAiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjUxNyIgY2FwLWhlaWdodD0iNzE0IiBhc2NlbnQ9Ijk1MS45OTU4IiBkZXNjZW50PSItMjEyLjk5NzQ0IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYU5ldWUiLz4KICAgICAgPC9mb250LWZhY2Utc3JjPgogICAgPC9mb250LWZhY2U+CiAgICA8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUuNjgzNTkiIHVuZGVybGluZS10aGlja25lc3M9IjQ5LjMxNjQwNiIgc2xvcGU9IjAiIHgtaGVpZ2h0PSI1MjIuOTQ5MiIgY2FwLWhlaWdodD0iNzE3LjI4NTE2IiBhc2NlbnQ9Ijc3MC4wMTk1IiBkZXNjZW50PSItMjI5Ljk4MDQ3IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYSIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyXzIiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgdmlld0JveD0iLTEgLTQgMTAgOCIgbWFya2VyV2lkdGg9IjEwIiBtYXJrZXJIZWlnaHQ9IjgiIGNvbG9yPSJibGFjayI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0gOCAwIEwgMCAtMyBMIDAgMyBaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxtZXRhZGF0YT4gUHJvZHVjZWQgYnkgT21uaUdyYWZmbGUgNy4xOC41XG4yMDIyLTA2LTI2IDA3OjAyOjMwICswMDAwPC9tZXRhZGF0YT4KICA8ZyBpZD0iSV9PIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogICAgPHRpdGxlPkkvTzwvdGl0bGU+CiAgICA8ZyBpZD0iSV9PX2Jsb2NrIj4KICAgICAgPHRpdGxlPmJsb2NrPC90aXRsZT4KICAgICAgPGcgaWQ9IkxpbmVfMzM2Ij4KICAgICAgICA8dGl0bGU+U3luY2hyb25vdXM8L3RpdGxlPgogICAgICAgIDxsaW5lIHgxPSI3OS42OTc5MiIgeTE9IjczMi41IiB4Mj0iMzI5Ljg3NzkiIHkyPSI3MzIuNSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9IiM2NjZhNmIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMzNSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc5LjgwMTkyIDcwOS42NzcxKSIgZmlsbD0iIzUxNTU1NiI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkF2ZW5pciIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iIzUxNTU1NiIgeD0iNjM5NDg4NWUtMTkiIHk9IjEzIj5TeXN0ZW0gY2FsbDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMzNCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg1Ljc5MTkgNzIzLjc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIuMTc1OTk4NTciIHk9IjE1Ij5ObyBkYXRhIHJlYWR5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMzIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NDYuMjczOSA4MzguNTc4KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5XYWl0IGZvciBkYXRhPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMyIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTUuNDQ3OSA5MTQuMDQ2OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIyLjIyNCIgeT0iMTUiPkRhdGEgcmVhZHkgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzMxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NDYuMjczOSA5NzQuMjYyOSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIxNSI+Q29weSBkYXRhIGZyb208L3RzcGFuPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjMzLjQ0OCI+S2VybmVsIHRvIHVzZXI8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8zMzAiPgogICAgICAgIDx0aXRsZT5TeW5jaHJvbm91czwvdGl0bGU+CiAgICAgICAgPGxpbmUgeDE9IjM0NC42OTc5IiB5MT0iMTAyNi44MjI5IiB4Mj0iOTQuNTE3OTIiIHkyPSIxMDI2LjgyMjkiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyKSIgc3Ryb2tlPSIjNjY2YTZiIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zMjkiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS42Nzg0MiAxMDA0KSIgZmlsbD0iIzUxNTU1NiI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkF2ZW5pciIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iIzUxNTU1NiIgeD0iMS44MDciIHk9IjEzIj5SZXR1cm4gT0sgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzI4Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuMjM4MDg0IDEwMTguMDk4OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI1LjM0NCIgeT0iMTUiPlByb2Nlc3MgPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIzMy40NDgiPmRhdGFncmFtPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzI3Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODAuNzc1OSAxMDE4LjA5ODkpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMS4wNDAwMDEyIiB5PSIxNSI+Q29weSBjb21wbGV0ZTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMyNiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS43NDQgODQ1LjYwNCkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIyLjIyNCIgeT0iMTUiPlByb2Nlc3MgYmxvY2tzIGluIDwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iOC43NDQiIHk9IjMzLjQ0OCI+Q2FsbCB0byByZWN2ZnJvbTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMyNSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjEyNTkyIDExMDYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE0Ij5GaWd1cmUgNi4xLiBCbG9ja2luZyBJL08gbW9kZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iTGluZV8zMjIiPgogICAgICAgIDxwYXRoIGQ9Ik0gLTI2LjQwMjA4MiA3MzIuNSBMIC0yNi40MDIwODIgNzMyLjUgQyAtMzEuMzcyNjQ1IDczMi41IC0zNS40MDIwOCA3MzYuNTI5NCAtMzUuNDAyMDggNzQxLjUgTCAtMzUuNDAyMDggODYzLjU0OTEgQyAtMzUuNDAyMDggODY3Ljc0MzMgLTM2LjcyMDY4NCA4NzEuODMxNCAtMzkuMTcxMzk1IDg3NS4yMzUyIEwgLTM5LjkwMjA4IDg3Ni4yNSBDIC00Mi41ODk5NzMgODc5Ljk4MzIgLTQyLjU4OTk3MyA4ODUuMDE2OCAtMzkuOTAyMDggODg4Ljc1IEwgLTM5LjE3MTM5NSA4ODkuNzY0OCBDIC0zNi43MjA2ODQgODkzLjE2ODYgLTM1LjQwMjA4IDg5Ny4yNTY3IC0zNS40MDIwOCA5MDEuNDUwOSBMIC0zNS40MDIwOCAxMDIzLjUgQyAtMzUuNDAyMDggMTAyOC40NzA2IC0zMS4zNzI2NDUgMTAzMi41IC0yNi40MDIwODIgMTAzMi41IEwgLTI2LjQwMjA4MiAxMDMyLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzIxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMTU4MDgyIDY2NSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI0MjYzMjU2NGUtMjEiIHk9IjE1Ij5BcHBsaWNhdGlvbjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMyMCI+CiAgICAgICAgPHBhdGggZD0iTSA1MjMuMjczOSA3MzAuNSBMIDUyMy4yNzM5IDczMC41IEMgNTI4LjI0NDUgNzMwLjUgNTMyLjI3MzkgNzM0LjUyOTQgNTMyLjI3MzkgNzM5LjUgTCA1MzIuMjczOSA4MTYuMDMzOSBDIDUzMi4yNzM5IDgxOS45NDM5IDUzMy45MDQ4NiA4MjMuNjc2OCA1MzYuNzczOSA4MjYuMzMzMyBMIDUzNi43NzM5IDgyNi4zMzMzIEMgNTM5LjA3NTEgODI4LjQ2NDEgNTM5LjIxMzMgODMyLjA1NjggNTM3LjA4MjU2IDgzNC4zNTggQyA1MzYuOTgzNyA4MzQuNDY0OCA1MzYuODgwNyA4MzQuNTY3OCA1MzYuNzczOSA4MzQuNjY2NyBMIDUzNi43NzM5IDgzNC42NjY3IEMgNTMzLjkwNDg2IDgzNy4zMjMyIDUzMi4yNzM5IDg0MS4wNTYxIDUzMi4yNzM5IDg0NC45NjYxIEwgNTMyLjI3MzkgOTIxLjUgQyA1MzIuMjczOSA5MjYuNDcwNiA1MjguMjQ0NSA5MzAuNSA1MjMuMjczOSA5MzAuNSBMIDUyMy4yNzM5IDkzMC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMxOSI+CiAgICAgICAgPHBhdGggZD0iTSA1MjMuMjczOSA5NDIuNzEwOSBMIDUyMy4yNzM5IDk0Mi43MTA5IEMgNTI4LjI0NDUgOTQyLjcxMDkgNTMyLjI3MzkgOTQ2Ljc0MDMgNTMyLjI3MzkgOTUxLjcxMDkgTCA1MzIuMjczOSA5ODMuNTg1MyBDIDUzMi4yNzM5IDk4Ni42MDkgNTM0LjAzMDEgOTg5LjM1NzIgNTM2Ljc3MzkgOTkwLjYyNzUgTCA1MzYuNzczOSA5OTAuNjI3NSBDIDUzNy45MjQ1IDk5MS4xNjAyIDUzOC40MjU0IDk5Mi41MjQ4IDUzNy44OTI3NSA5OTMuNjc1NCBDIDUzNy42NjQxNiA5OTQuMTY5MSA1MzcuMjY3NjYgOTk0LjU2NTYgNTM2Ljc3MzkgOTk0Ljc5NDIgTCA1MzYuNzczOSA5OTQuNzk0MiBDIDUzNC4wMzAxIDk5Ni4wNjQ1IDUzMi4yNzM5IDk5OC44MTI4IDUzMi4yNzM5IDEwMDEuODM2NCBMIDUzMi4yNzM5IDEwMzMuNzEwOSBDIDUzMi4yNzM5IDEwMzguNjgxNCA1MjguMjQ0NSAxMDQyLjcxMDkgNTIzLjI3MzkgMTA0Mi43MTA5IEwgNTIzLjI3MzkgMTA0Mi43MTA5IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMxOCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEzLjUzNTkgNjY1KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5LZXJuZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zMTciPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4MC45Mjc5IDk0Mi40OTQ5KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5Db3B5IGRhdGFncmFtPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzE2Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUuMzc0MDgyIDcyMy43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMi4xMzgiIHk9IjE1Ij5SZWN2ZnJvbTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzMwMyI+CiAgICAgICAgPGxpbmUgeDE9IjQzNi40OTU5IiB5MT0iOTY1Ljk0MjkiIHgyPSI0MzYuNDk1OSIgeTI9IjEwMDMuMTk4OSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXJfMikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzM3Ij4KICAgICAgICA8bGluZSB4MT0iNDM2LjQ5NTkiIHkxPSI3NDcuMjI0IiB4Mj0iNDM2LjQ5NTkiIHkyPSI4OTkuMTQ2OSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXJfMikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},36163:(I,g,i)=>{i.d(g,{A:()=>C});const C=i.p+"assets/images/fig6.2-8c5f2b4c90c2b0f9c22d796b98e617d8.svg"},98226:(I,g,i)=>{i.d(g,{A:()=>C});const C=i.p+"assets/images/fig6.3-6ac947917597d732eed57f7c3714cec4.svg"},32157:(I,g,i)=>{i.d(g,{A:()=>C});const C=i.p+"assets/images/fig6.4-cda9e5e04e65e4041b6fe3510c5c9b39.svg"},77884:(I,g,i)=>{i.d(g,{A:()=>C});const C="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0zMDYgNTkyIDgzNSA0NjgiIHdpZHRoPSI4MzUiIGhlaWdodD0iNDY4Ij4KICA8ZGVmcz4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHZpZXdCb3g9Ii0xIC00IDggOCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgY29sb3I9IiM2NjZhNmIiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNIDUuNzYgMCBMIDAgLTIuMTYgTCAwIDIuMTYgWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvbWFya2VyPgogICAgPGZvbnQtZmFjZSBmb250LWZhbWlseT0iQXZlbmlyIiBmb250LXNpemU9IjEzIiBwYW5vc2UtMT0iMiAxMSA1IDMgMiAyIDMgMiAyIDQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjQ2OCIgY2FwLWhlaWdodD0iNzA4IiBhc2NlbnQ9IjFlMyIgZGVzY2VudD0iLTM2NS45OTczIiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkF2ZW5pci1Sb21hbiIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxmb250LWZhY2UgZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAyIDAgNCIgdW5pdHMtcGVyLWVtPSIxMDAwIiB1bmRlcmxpbmUtcG9zaXRpb249Ii0xMDAiIHVuZGVybGluZS10aGlja25lc3M9IjUwIiBzbG9wZT0iMCIgeC1oZWlnaHQ9IjUxNyIgY2FwLWhlaWdodD0iNzE0IiBhc2NlbnQ9Ijk1MS45OTU4IiBkZXNjZW50PSItMjEyLjk5NzQ0IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYU5ldWUiLz4KICAgICAgPC9mb250LWZhY2Utc3JjPgogICAgPC9mb250LWZhY2U+CiAgICA8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTQiIHVuaXRzLXBlci1lbT0iMTAwMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSItNzUuNjgzNTkiIHVuZGVybGluZS10aGlja25lc3M9IjQ5LjMxNjQwNiIgc2xvcGU9IjAiIHgtaGVpZ2h0PSI1MjIuOTQ5MiIgY2FwLWhlaWdodD0iNzE3LjI4NTE2IiBhc2NlbnQ9Ijc3MC4wMTk1IiBkZXNjZW50PSItMjI5Ljk4MDQ3IiBmb250LXdlaWdodD0iNDAwIj4KICAgICAgPGZvbnQtZmFjZS1zcmM+CiAgICAgICAgPGZvbnQtZmFjZS1uYW1lIG5hbWU9IkhlbHZldGljYSIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICAgIDxtYXJrZXIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgbWFya2VyVW5pdHM9InN0cm9rZVdpZHRoIiBpZD0iRmlsbGVkQXJyb3dfTWFya2VyXzIiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgdmlld0JveD0iLTEgLTQgMTAgOCIgbWFya2VyV2lkdGg9IjEwIiBtYXJrZXJIZWlnaHQ9IjgiIGNvbG9yPSJibGFjayI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0gOCAwIEwgMCAtMyBMIDAgMyBaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxtZXRhZGF0YT4gUHJvZHVjZWQgYnkgT21uaUdyYWZmbGUgNy4xOC41XG4yMDIyLTA2LTI2IDA3OjE1OjQ0ICswMDAwPC9tZXRhZGF0YT4KICA8ZyBpZD0iSV9PIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogICAgPHRpdGxlPkkvTzwvdGl0bGU+CiAgICA8ZyBpZD0iSV9PX2FzeW5jIj4KICAgICAgPHRpdGxlPmFzeW5jPC90aXRsZT4KICAgICAgPGcgaWQ9IkxpbmVfMzk4Ij4KICAgICAgICA8dGl0bGU+U3luY2hyb25vdXM8L3RpdGxlPgogICAgICAgIDxsaW5lIHgxPSItNTQuNTU4MDgiIHkxPSI2NjQuNSIgeDI9IjE5NS42MjE5MiIgeTI9IjY2NC41IiBtYXJrZXItZW5kPSJ1cmwoI0ZpbGxlZEFycm93X01hcmtlcikiIHN0cm9rZT0iIzY2NmE2YiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzk3Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ni4zOTA5MiA2NDEuNjc3MSkiIGZpbGw9IiM1MTU1NTYiPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJBdmVuaXIiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9IiM1MTU1NTYiIHg9IjAiIHk9IjEzIj5zeXN0ZW0gY2FsbDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM5NiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEyLjAxNzkgNzcwLjU3OCkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIxNSI+V2FpdCBmb3IgZGF0YTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM5NSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYxLjE5MTkyIDg0Ni4wNDY5KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjIuMjI0IiB5PSIxNSI+RGF0YSByZWFkeSA8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zOTQiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMTc5IDkwNi4yNjI5KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5Db3B5IGRhdGEgZnJvbTwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMCIgeT0iMzMuNDQ4Ij5LZXJuZWwgdG8gdXNlcjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzM5MyI+CiAgICAgICAgPHRpdGxlPlN5bmNocm9ub3VzPC90aXRsZT4KICAgICAgICA8bGluZSB4MT0iMjEwLjQ0MTkyIiB5MT0iOTU4LjgyMjkiIHgyPSItMzkuNzM4MDgiIHkyPSI5NTguODIyOSIgbWFya2VyLWVuZD0idXJsKCNGaWxsZWRBcnJvd19NYXJrZXIpIiBzdHJva2U9IiM2NjZhNmIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM5MiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMDEwOTE4IDk0MC44MjI5KSIgZmlsbD0iIzUxNTU1NiI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkF2ZW5pciIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iIzUxNTU1NiIgeD0iMjEuNjg0IiB5PSIxMyI+RGVsaXZlciBzaWduYWw8L3RzcGFuPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJBdmVuaXIiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9IiM1MTU1NTYiIHg9IjQ5NzM3OTllLTE5IiB5PSIzMSI+U3BlY2lmaWVkIGluIGFpb19yZWFkPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzkxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk4LjAyMzA0IDk0MC4zNzQ5KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjE0LjM3NiIgeT0iMTUiPlNpZ25hbCBoYW5kbGVyPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIzMy40NDgiPlByb2Nlc3MgZGF0YWdyYW08L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zOTAiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ni41MTk5MiA5NTAuMDk4OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIxLjA0MDAwMTIiIHk9IjE1Ij5Db3B5IGNvbXBsZXRlPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzg5Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAxIDc5MS41KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjcuNDE2IiB5PSIxNSI+UHJvY2VzczwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iODUyNjUxM2UtMjAiIHk9IjMzLjQ0OCI+Q29udGludWVzPC90c3Bhbj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIuODk2IiB5PSI1MS44OTU5OTYiPkV4ZWN1dGluZzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM4OCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjEzMDA4MiAxMDM4KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI3LjYxNDEyOCIgeT0iMTQiPkZpZ3VyZSA2LjUuIEFzeW5jaHJvbm91cyBJL08gbW9kZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zODciPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzIuODMxMDQgNTk3KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjQyNjMyNTY0ZS0yMSIgeT0iMTUiPkFwcGxpY2F0aW9uPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzg2Ij4KICAgICAgICA8cGF0aCBkPSJNIDM4OS4wMTc5IDY2My41IEwgMzg5LjAxNzkgNjYzLjUgQyAzOTMuOTg4NSA2NjMuNSAzOTguMDE3OSA2NjcuNTI5NCAzOTguMDE3OSA2NzIuNSBMIDM5OC4wMTc5IDc0OS4wMzM5IEMgMzk4LjAxNzkgNzUyLjk0MzkgMzk5LjY0ODg2IDc1Ni42NzY4IDQwMi41MTc5IDc1OS4zMzMzIEwgNDAyLjUxNzkgNzU5LjMzMzMgQyA0MDQuODE5MSA3NjEuNDY0MSA0MDQuOTU3MyA3NjUuMDU2OCA0MDIuODI2NTYgNzY3LjM1OCBDIDQwMi43Mjc2NyA3NjcuNDY0OCA0MDIuNjI0NyA3NjcuNTY3OCA0MDIuNTE3OSA3NjcuNjY2NyBMIDQwMi41MTc5IDc2Ny42NjY3IEMgMzk5LjY0ODg2IDc3MC4zMjMyIDM5OC4wMTc5IDc3NC4wNTYxIDM5OC4wMTc5IDc3Ny45NjYxIEwgMzk4LjAxNzkgODU0LjUgQyAzOTguMDE3OSA4NTkuNDcwNiAzOTMuOTg4NSA4NjMuNSAzODkuMDE3OSA4NjMuNSBMIDM4OS4wMTc5IDg2My41IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzM4NSI+CiAgICAgICAgPHBhdGggZD0iTSAzODkuMDE3OSA4NzQuNzEwOSBMIDM4OS4wMTc5IDg3NC43MTA5IEMgMzkzLjk4ODUgODc0LjcxMDkgMzk4LjAxNzkgODc4Ljc0MDMgMzk4LjAxNzkgODgzLjcxMDkgTCAzOTguMDE3OSA5MTUuNTg1MyBDIDM5OC4wMTc5IDkxOC42MDg5IDM5OS43NzQxIDkyMS4zNTcyIDQwMi41MTc5IDkyMi42Mjc1IEwgNDAyLjUxNzkgOTIyLjYyNzUgQyA0MDMuNjY4NSA5MjMuMTYwMiA0MDQuMTY5NDMgOTI0LjUyNDggNDAzLjYzNjc1IDkyNS42NzU0IEMgNDAzLjQwODE2IDkyNi4xNjkxIDQwMy4wMTE2NiA5MjYuNTY1NiA0MDIuNTE3OSA5MjYuNzk0MiBMIDQwMi41MTc5IDkyNi43OTQyIEMgMzk5Ljc3NDEgOTI4LjA2NDUgMzk4LjAxNzkgOTMwLjgxMjggMzk4LjAxNzkgOTMzLjgzNjQgTCAzOTguMDE3OSA5NjUuNzEwOSBDIDM5OC4wMTc5IDk3MC42ODE0IDM5My45ODg1IDk3NC43MTA5IDM4OS4wMTc5IDk3NC43MTA5IEwgMzg5LjAxNzkgOTc0LjcxMDkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzg0Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzkuMjc5OTIgNTk3KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjAiIHk9IjE1Ij5LZXJuZWw8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zODMiPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ni42NzE5MiA4NzQuNDk0OSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIxNSI+Q29weSBkYXRhZ3JhbTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM4MiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Mi40OTQwOCA2NDYuNjc3MSkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSIyOS4yOTUwNCIgeT0iMTUiPmFpb19yZWFkPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzgxIj4KICAgICAgICA8bGluZSB4MT0iMzAyLjIzOTkiIHkxPSI4OTcuOTQyOSIgeDI9IjMwMi4yMzk5IiB5Mj0iOTM1LjE5ODkiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyXzIpIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzM4MCI+CiAgICAgICAgPHRpdGxlPlN5bmNocm9ub3VzPC90aXRsZT4KICAgICAgICA8bGluZSB4MT0iMjEwLjQ0MTkyIiB5MT0iNjkzIiB4Mj0iLTM5LjczODA4IiB5Mj0iNjkzIiBtYXJrZXItZW5kPSJ1cmwoI0ZpbGxlZEFycm93X01hcmtlcikiIHN0cm9rZT0iIzY2NmE2YiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMzc5Ij4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OS45ODE5MiA2NzAuMTc3MSkiIGZpbGw9IiM1MTU1NTYiPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJBdmVuaXIiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9IiM1MTU1NTYiIHg9IjguNTcwNDk5IiB5PSIxMyI+UmV0dXJuPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzc0Ij4KICAgICAgICA8cGF0aCBkPSJNIC0xOTcuNDk0MDggNjYzLjUgTCAtMTk3LjQ5NDA4IDY2My41IEMgLTIwMi40NjQ2NCA2NjMuNSAtMjA2LjQ5NDA4IDY2Ny41Mjk0IC0yMDYuNDk0MDggNjcyLjUgTCAtMjA2LjQ5NDA4IDc5NC41NDkxIEMgLTIwNi40OTQwOCA3OTguNzQzMyAtMjA3LjgxMjY4IDgwMi44MzE0IC0yMTAuMjYzNCA4MDYuMjM1MiBMIC0yMTAuOTk0MDggODA3LjI1IEMgLTIxMy42ODE5NyA4MTAuOTgzMiAtMjEzLjY4MTk3IDgxNi4wMTY4IC0yMTAuOTk0MDggODE5Ljc1IEwgLTIxMC4yNjM0IDgyMC43NjQ4IEMgLTIwNy44MTI2OCA4MjQuMTY4NiAtMjA2LjQ5NDA4IDgyOC4yNTY3IC0yMDYuNDk0MDggODMyLjQ1MDkgTCAtMjA2LjQ5NDA4IDk1NC41IEMgLTIwNi40OTQwOCA5NTkuNDcwNiAtMjAyLjQ2NDY0IDk2My41IC0xOTcuNDk0MDggOTYzLjUgTCAtMTk3LjQ5NDA4IDk2My41IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzM5OSI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUxLjcxMTkyIDY1NS43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMjQ4Njg5OTZlLTIwIiB5PSIxNSI+Tm8gZGF0YSByZWFkeTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJMaW5lXzQwMSI+CiAgICAgICAgPGxpbmUgeDE9IjMwMi4yMzk5IiB5MT0iNjc5LjIyNCIgeDI9IjMwMi4yMzk5IiB5Mj0iODMxLjE0NjkiIG1hcmtlci1lbmQ9InVybCgjRmlsbGVkQXJyb3dfTWFya2VyXzIpIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},28453:(I,g,i)=>{i.d(g,{R:()=>l,x:()=>c});var C=i(96540);const A={},M=C.createContext(A);function l(I){const g=C.useContext(M);return C.useMemo((function(){return"function"==typeof I?I(g):{...g,...I}}),[g,I])}function c(I){let g;return g=I.disableParentContext?"function"==typeof I.components?I.components(A):I.components||A:l(I.components),C.createElement(M.Provider,{value:g},I.children)}}}]);