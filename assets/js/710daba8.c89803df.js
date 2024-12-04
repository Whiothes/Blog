"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9349],{38169:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var i=t(83287),c=t(74848),r=t(28453);const s={title:"gcc error when inline without static",tags:["gcc"]},l=void 0,o={authorsImageUrls:[]},a=[{value:"gcc error when inline without static",id:"gcc-error-when-inline-without-static",level:2},{value:"<code>inline</code> only",id:"inline-only",level:3},{value:"C code:",id:"c-code",level:4},{value:"asm code:",id:"asm-code",level:4},{value:"With <code>static</code>",id:"with-static",level:3},{value:"C code",id:"c-code-1",level:4},{value:"asm code",id:"asm-code-1",level:4},{value:"With <code>__attribute__</code>",id:"with-__attribute__",level:3},{value:"C code",id:"c-code-2",level:4},{value:"asm code",id:"asm-code-2",level:4}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"gcc-error-when-inline-without-static",children:"gcc error when inline without static"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://www.geeksforgeeks.org/inline-function-in-c/",children:"Inline function in C - GeeksforGeeks"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsxs)(e.a,{href:"https://stackoverflow.com/questions/22767523/what-inline-attribute-always-inline-means-in-the-function#22767621",children:["c - what \u201cinline ",(0,c.jsx)(e.strong,{children:"attribute"}),"((always_inline))\u201d means in the function? - Stack Overflow"]})}),"\n"]}),"\n",(0,c.jsxs)(e.h3,{id:"inline-only",children:[(0,c.jsx)(e.code,{children:"inline"})," only"]}),"\n",(0,c.jsx)(e.h4,{id:"c-code",children:"C code:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\ninline int func() { printf("dll\\n"); }\n\nint main() { func(); }\n'})}),"\n",(0,c.jsx)(e.h4,{id:"asm-code",children:"asm code:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-asm",children:"  .section\t__TEXT,__text,regular,pure_instructions\n  .build_version macos, 11, 0\tsdk_version 11, 1\n  .globl\t_main                   ## -- Begin function main\n  .p2align\t4, 0x90\n_main:                                  ## @main\n  .cfi_startproc\n## %bb.0:\n  pushq\t%rbp\n  .cfi_def_cfa_offset 16\n  .cfi_offset %rbp, -16\n  movq\t%rsp, %rbp\n  .cfi_def_cfa_register %rbp\n  subq\t$16, %rsp\n  callq\t_func\n  xorl\t%ecx, %ecx\n  movl\t%eax, -4(%rbp)          ## 4-byte Spill\n  movl\t%ecx, %eax\n  addq\t$16, %rsp\n  popq\t%rbp\n  retq\n  .cfi_endproc\n                                        ## -- End function\n.subsections_via_symbols\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"with-static",children:["With ",(0,c.jsx)(e.code,{children:"static"})]}),"\n",(0,c.jsx)(e.h4,{id:"c-code-1",children:"C code"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nstatic inline int func() { printf("dll\\n"); }\n\nint main() { func(); }\n'})}),"\n",(0,c.jsx)(e.h4,{id:"asm-code-1",children:"asm code"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-asm",children:'  .section\t__TEXT,__text,regular,pure_instructions\n  .build_version macos, 11, 0\tsdk_version 11, 1\n  .globl\t_main                   ## -- Begin function main\n  .p2align\t4, 0x90\n_main:                                  ## @main\n  .cfi_startproc\n## %bb.0:\n  pushq\t%rbp\n  .cfi_def_cfa_offset 16\n  .cfi_offset %rbp, -16\n  movq\t%rsp, %rbp\n  .cfi_def_cfa_register %rbp\n  subq\t$16, %rsp\n  callq\t_func\n  xorl\t%ecx, %ecx\n  movl\t%eax, -4(%rbp)          ## 4-byte Spill\n  movl\t%ecx, %eax\n  addq\t$16, %rsp\n  popq\t%rbp\n  retq\n  .cfi_endproc\n                                        ## -- End function\n  .p2align\t4, 0x90         ## -- Begin function func\n_func:                                  ## @func\n  .cfi_startproc\n## %bb.0:\n  pushq\t%rbp\n  .cfi_def_cfa_offset 16\n  .cfi_offset %rbp, -16\n  movq\t%rsp, %rbp\n  .cfi_def_cfa_register %rbp\n  subq\t$16, %rsp\n  leaq\tL_.str(%rip), %rdi\n  movb\t$0, %al\n  callq\t_printf\n  movl\t-4(%rbp), %ecx\n  movl\t%eax, -8(%rbp)          ## 4-byte Spill\n  movl\t%ecx, %eax\n  addq\t$16, %rsp\n  popq\t%rbp\n  retq\n  .cfi_endproc\n                                        ## -- End function\n  .section\t__TEXT,__cstring,cstring_literals\nL_.str:                                 ## @.str\n  .asciz\t"dll\\n"\n\n.subsections_via_symbols\n'})}),"\n",(0,c.jsxs)(e.h3,{id:"with-__attribute__",children:["With ",(0,c.jsx)(e.code,{children:"__attribute__"})]}),"\n",(0,c.jsx)(e.h4,{id:"c-code-2",children:"C code"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\n#define inline __attribute__((alwyas_inline))\n\ninline int func() { printf("dll\\n"); }\n\nint main() { func(); }\n'})}),"\n",(0,c.jsx)(e.h4,{id:"asm-code-2",children:"asm code"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-asm",children:'  .section\t__TEXT,__text,regular,pure_instructions\n  .build_version macos, 11, 0\tsdk_version 11, 1\n  .globl\t_func                   ## -- Begin function func\n  .p2align\t4, 0x90\n_func:                                  ## @func\n  .cfi_startproc\n## %bb.0:\n  pushq\t%rbp\n  .cfi_def_cfa_offset 16\n  .cfi_offset %rbp, -16\n  movq\t%rsp, %rbp\n  .cfi_def_cfa_register %rbp\n  subq\t$16, %rsp\n  leaq\tL_.str(%rip), %rdi\n  movb\t$0, %al\n  callq\t_printf\n  movl\t-4(%rbp), %ecx\n  movl\t%eax, -8(%rbp)          ## 4-byte Spill\n  movl\t%ecx, %eax\n  addq\t$16, %rsp\n  popq\t%rbp\n  retq\n  .cfi_endproc\n                                        ## -- End function\n  .globl\t_main                   ## -- Begin function main\n  .p2align\t4, 0x90\n_main:                                  ## @main\n  .cfi_startproc\n## %bb.0:\n  pushq\t%rbp\n  .cfi_def_cfa_offset 16\n  .cfi_offset %rbp, -16\n  movq\t%rsp, %rbp\n  .cfi_def_cfa_register %rbp\n  subq\t$16, %rsp\n  callq\t_func\n  xorl\t%ecx, %ecx\n  movl\t%eax, -4(%rbp)          ## 4-byte Spill\n  movl\t%ecx, %eax\n  addq\t$16, %rsp\n  popq\t%rbp\n  retq\n  .cfi_endproc\n                                        ## -- End function\n  .section\t__TEXT,__cstring,cstring_literals\nL_.str:                                 ## @.str\n  .asciz\t"dll\\n"\n\n.subsections_via_symbols\n'})})]})}function f(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var i=t(96540);const c={},r=i.createContext(c);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(r.Provider,{value:e},n.children)}},83287:n=>{n.exports=JSON.parse('{"permalink":"/blog/2022/06/28/2022/gcc","source":"@site/blog/2022/2022-06-28-gcc.md","title":"gcc error when inline without static","description":"gcc error when inline without static","date":"2022-06-28T00:00:00.000Z","tags":[{"inline":true,"label":"gcc","permalink":"/blog/tags/gcc"}],"readingTime":2.235,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"gcc error when inline without static","tags":["gcc"]},"unlisted":false,"prevItem":{"title":"execute bash script remotely via curl","permalink":"/blog/2022/06/28/2022/curl-exec"},"nextItem":{"title":"center tables in a markdown file","permalink":"/blog/2022/06/28/2022/markdown-center"}}')}}]);