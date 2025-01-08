"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7397],{26763:(I,i,g)=>{g.r(i),g.d(i,{assets:()=>d,contentTitle:()=>C,default:()=>A,frontMatter:()=>c,metadata:()=>e,toc:()=>a});const e=JSON.parse('{"id":"TOC/computer/system/csapp/ch07","title":"Chapter 7 Linking","description":"- Chapter 7 Linking","source":"@site/docs/TOC/computer/system/csapp/ch07.md","sourceDirName":"TOC/computer/system/csapp","slug":"/TOC/computer/system/csapp/ch07","permalink":"/docs/TOC/computer/system/csapp/ch07","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ch06","permalink":"/docs/TOC/computer/system/csapp/ch06"},"next":{"title":"Chapter 8 Exceptional Control Flow","permalink":"/docs/TOC/computer/system/csapp/ch08"}}');var n=g(74848),l=g(28453);const c={},C="Chapter 7 Linking",d={},a=[{value:"7.1 Compiler Drivers",id:"71-compiler-drivers",level:2},{value:"7.2 Static Linking",id:"72-static-linking",level:2},{value:"7.3 Object Files",id:"73-object-files",level:2},{value:"7.4 Relocatable Object Files",id:"74-relocatable-object-files",level:2},{value:"7.8 Executable Object Files",id:"78-executable-object-files",level:2},{value:"7.9 Loading Executable Object Files",id:"79-loading-executable-object-files",level:2},{value:"7.12 Position-Independent Code (PIC)",id:"712-position-independent-code-pic",level:2},{value:"7.13 Library Interpositioning",id:"713-library-interpositioning",level:2},{value:"7.13.1 Compile-Time Interpositioning",id:"7131-compile-time-interpositioning",level:3},{value:"7.13.2 Link-Time Interpositioning",id:"7132-link-time-interpositioning",level:3},{value:"7.13.3 Run-Time Interpositioning",id:"7133-run-time-interpositioning",level:3},{value:"7.14 Tools for Manipulating Object Files",id:"714-tools-for-manipulating-object-files",level:2}];function s(I){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...I.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"chapter-7-linking",children:"Chapter 7 Linking"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#chapter-7-linking",children:"Chapter 7 Linking"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#71-compiler-drivers",children:"7.1 Compiler Drivers"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#72-static-linking",children:"7.2 Static Linking"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#73-object-files",children:"7.3 Object Files"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#74-relocatable-object-files",children:"7.4 Relocatable Object Files"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#78-executable-object-files",children:"7.8 Executable Object Files"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#79-loading-executable-object-files",children:"7.9 Loading Executable Object Files"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#712-position-independent-code-pic",children:"7.12 Position-Independent Code (PIC)"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#713-library-interpositioning",children:"7.13 Library Interpositioning"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#7131-compile-time-interpositioning",children:"7.13.1 Compile-Time Interpositioning"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#7132-link-time-interpositioning",children:"7.13.2 Link-Time Interpositioning"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#7133-run-time-interpositioning",children:"7.13.3 Run-Time Interpositioning"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#714-tools-for-manipulating-object-files",children:"7.14 Tools for Manipulating Object Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"71-compiler-drivers",children:"7.1 Compiler Drivers"}),"\n",(0,n.jsx)(i.h2,{id:"72-static-linking",children:"7.2 Static Linking"}),"\n",(0,n.jsx)(i.h2,{id:"73-object-files",children:"7.3 Object Files"}),"\n",(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:g(36513).A+"",width:"636",height:"344"})}),(0,n.jsxs)(i.p,{children:["Figure 7.3 ",(0,n.jsx)(i.strong,{children:"Typical ELF relocatable object file"})]})]}),"\n",(0,n.jsx)(i.h2,{id:"74-relocatable-object-files",children:"7.4 Relocatable Object Files"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".text"})," The machine code of the compiled program"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".rodata"})," Read-only data"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".data"})," ",(0,n.jsx)(i.em,{children:"Initialized"})," global and static C variables"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".bss"})," (Better Save Space) ",(0,n.jsx)(i.em,{children:"Unintialized"})," global and static C variables"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".symtab"})," A ",(0,n.jsx)(i.em,{children:"symbol table"})," with information about functions and global variables that are defined and referenced"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".rel.text"})," A list of locations in the ",(0,n.jsx)(i.code,{children:".text"})," section that will need to be modified when the linker combines this object file with others."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".rel.data"})," Relocation information for any global variables that are referenced or defined"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".debug"})," A debugging symbol table with entries for local variables and types"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".line"})," A mapping between line numbers in the original C and machine code instructions in the ",(0,n.jsx)(i.code,{children:".text"})," section"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:".strtab"})," A string table for the symbol tables in the ",(0,n.jsx)(i.code,{children:".symtab"})," and ",(0,n.jsx)(i.code,{children:".debug"})," sections and for the section names in the section headers."]}),"\n",(0,n.jsx)(i.h2,{id:"78-executable-object-files",children:"7.8 Executable Object Files"}),"\n",(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:g(71722).A+"",width:"616",height:"344"})}),(0,n.jsxs)(i.p,{children:["Figure 7.13 ",(0,n.jsx)(i.strong,{children:"Typical ELF executable object file"})]})]}),"\n",(0,n.jsx)(i.h2,{id:"79-loading-executable-object-files",children:"7.9 Loading Executable Object Files"}),"\n",(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:g(62836).A+"",width:"202",height:"457"})}),(0,n.jsxs)(i.p,{children:["Figure 7.15 ",(0,n.jsx)(i.strong,{children:"Linux x86-64 run-time memory image."})," Gaps due to segment alignment requirements and address-space layout randomization (ASLR) are note shown. Not to scale."]})]}),"\n",(0,n.jsx)(i.h2,{id:"712-position-independent-code-pic",children:"7.12 Position-Independent Code (PIC)"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"gcc -fpic"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Procedure linkage table (PLT)"}),". The PLT is an array of 16-byte code entries.\nPLT[0] is a special entry that jumps into the dynamic linker. Each shared library function called by the execuable has its own PLT entry.\nEntries starting at PLT[2] invoke functions called by the user code."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Global offset table (GOT)"}),". The GOT is an array of 8-byte address entries. GOT[0] and GOT[1] contain information that the dynamic linker uses when it resolves function address. GOT[2] is the entry for the dynamic linker in the ld-linux.so module. GOT[4] and PLT[2] correspond to advec."]}),"\n",(0,n.jsx)(i.h2,{id:"713-library-interpositioning",children:"7.13 Library Interpositioning"}),"\n",(0,n.jsx)(i.p,{children:"allows you to intercept calls to shared library functions and execute your own code instead."}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"(a) Example program int.c"}),"\n"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"#include <stdio.h>\n#include <malloc.h>\n\nint main()\n{\n        int *p = malloc(32);\n        free(p);\n        return (0);\n}\n"})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"(b) Local malloc.h file"}),"\n"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"  #define malloc(size) myalloc(size)\n  #define free(ptr) myfree(ptr)o\n\n  void *mymalloc(size_t size);\n  void myfree(void *ptr);\n"})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"(c) Wrapper functions in mymalloc.c"}),"\n"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'#ifdef COMPILETIME\n#include <stdio.h>\n#include <malloc.h>\n\n/* malloc wrapper function */\nvoid *mymalloc(size_t size)\n{\n        void *ptr = malloc(size);\n        printf("malloc(%d)=%p\\n", (int)size, ptr);\n        return ptr;\n}\n\n/* free wrapper function */\nvoid myfree(void *ptr)\n{\n        free(ptr);\n        printf("free(%p)\\n", ptr);\n}\n\n#endif\n'})}),(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["Figure 7.20 ",(0,n.jsx)(i.strong,{children:"Compile-Time interpositioning with the C preprocessor"})]})})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'#ifdef LINKTIME\n#include <stdio.h>\n\nvoid *__real_malloc(size_t size);\nvoid __real_free(void *ptr);\n\n\n/* malloc wrapper function */\nvoid *__wrap_malloc(size_t size)\n{\n        void *ptr = __real_malloc(size); /* Call libc malloc */\n        printf("malloc(%d) = %p\\n", (int)size, ptr);\n        return ptr;\n}\n\n/* free wrapper function */\nvoid __wrap_free(void *ptr)\n{\n        __real_free(ptr);       /* Call libc free */\n        printf("free(%p)\\n", ptr);\n}\n\n#endif\n'})}),(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["Figure 7.21 ",(0,n.jsx)(i.strong,{children:"Link-time interpositioning with the --wrap flag"})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"7131-compile-time-interpositioning",children:"7.13.1 Compile-Time Interpositioning"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"linux> gcc -DCOMPILETIME -c mymalloc.c\nlinux> gcc -I. -o intc int.c mymalloc.o\n"})}),"\n",(0,n.jsx)(i.h3,{id:"7132-link-time-interpositioning",children:"7.13.2 Link-Time Interpositioning"}),"\n",(0,n.jsxs)(i.p,{children:["--wrap f flags tells the linker to resolve references to symbol f as ",(0,n.jsx)(i.strong,{children:"wrap_f, and to resolve references to symbol"}),"real_f as f."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"linux> gcc -DLINKTIME -c mymalloc.c\nlinux> gcc -c int.c\nlinux> gcc -Wl,--wrap,malloc -W1, --wrap,free -o intl int.o mymalloc.o\n"})}),"\n",(0,n.jsx)(i.h3,{id:"7133-run-time-interpositioning",children:"7.13.3 Run-Time Interpositioning"}),"\n",(0,n.jsx)(i.p,{children:"LD_PRELOAD set to a list of shared library pathnames, then when you load and execute a program, the dynamic linker will search the LD_PRELOAD libraries first."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'linux> gcc -DRUNTIME -shared -fpic -o mymalloc.so mymalloc.c -ldl\nlinux> gcc -o intr int.c\n\nlinux> LD_PRELOAD="./mymalloc.so" ./intr\n# OR\nlinux> (setenv LD_PRELOAD="./mymalloc.so"; ./intr; unsetenv LD_PRELOAD)\n'})}),"\n",(0,n.jsx)(i.p,{children:"we can use LD_PRELOAD to interpose on the library calls of any executable program!"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'linux> LD_PRELOAD="./mymalloc.so" /usr/bin/uptime\n'})}),"\n",(0,n.jsxs)("div",{children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'#ifdef RUNTIME\n#define _GNU_SOURCE\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <dlfcn.h>\n\n/* malloc wrapper function */\nvoid *malloc(size_t size)\n{\n void *(*mallocp)(size_t size);\n char *error;\n\n mallocp = dlsym(RTLD_NEXT, "malloc"); /* Get address of libc malloc */\n if ((error = dlerror()) != NULL) {\n  fputs(error, stderr);\n  exit(1);\n }\n\n char *ptr = mallocp(size); /* Call libc malloc */\n printf("malloc (%d) = %p\\n", (int)size, ptr);\n return ptr;\n}\n\n/* free wrapper function */\nvoid free(void *ptr)\n{\n        void (*free)(void *) = NULL;\n        char *error;\n\n        if (!ptr) {\n                return;\n        }\n\n        freep = dlsym(RTLD_NEXT, "free"); /* Get address of libc free */\n        if ((error = dlerror()) != NULL) {\n                fputs(error, stderr);\n                exit(1);\n        }\n\n        freep(ptr);\n        printf("free (%p)\\n", ptr);\n}\n\n#endif\n'})}),(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["Figure 7.22 ",(0,n.jsx)(i.strong,{children:"Run-time Interpositioning with LD_PRELOAD"})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"714-tools-for-manipulating-object-files",children:"7.14 Tools for Manipulating Object Files"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"binutils"})," package:"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"AR"}),". Creates static libraries, and inserts, deletes, lists, and extracts members."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"STRINGS"}),". Lists all of the printable strings contained in an object file."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"STRIP"}),". Deletes symbol table information from an object file."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"NM"}),". Lists the symbols defined in the symbol table of an object file."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"SIZE"}),". Lists the names and sizes of the sections in an object file."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"READELF"}),". Displays the complete structure of an object file,\nincluding all of the information encoded in the ELF header.\nSubsumes the functionality of ",(0,n.jsx)(i.code,{children:"SIZE"})," and ",(0,n.jsx)(i.code,{children:"NM"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"OBJECTDUMP"}),". The mother of all binary tools."]}),"\n",(0,n.jsxs)(i.p,{children:["Linux:\n",(0,n.jsx)(i.code,{children:"LDD"}),". Lists the shared libraries that an executable needs at run time."]})]})}function A(I={}){const{wrapper:i}={...(0,l.R)(),...I.components};return i?(0,n.jsx)(i,{...I,children:(0,n.jsx)(s,{...I})}):s(I)}},71722:(I,i,g)=>{g.d(i,{A:()=>e});const e=g.p+"assets/images/fig7.13-b0084c737b3f982153fa56c2b4f3c4c3.svg"},62836:(I,i,g)=>{g.d(i,{A:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6eGw9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZpZXdCb3g9Ijk2NyAzNjUgMjAyIDQ1NyIgd2lkdGg9IjIwMiIgaGVpZ2h0PSI0NTciPgogIDxkZWZzLz4KICA8ZyBpZD0iZmlnN18xNSIgc3Ryb2tlPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSJub25lIj4KICAgIDx0aXRsZT5maWc3LjE1PC90aXRsZT4KICAgIDxyZWN0IGZpbGw9IndoaXRlIiB4PSI5NjciIHk9IjM2NSIgd2lkdGg9IjIwMiIgaGVpZ2h0PSI0NTciLz4KICAgIDxnIGlkPSJmaWc3XzE1X0xheWVyXzEiPgogICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgICAgIDxnIGlkPSJHcm91cF8zMCI+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMzkiPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI0MTYiIHdpZHRoPSIyMDAiIGhlaWdodD0iNSIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNDE2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMzgiPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI3NzEiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIGZpbGw9ImFxdWEiLz4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNzcxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzM3Ij4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNzIxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjcyMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTczIDcyNy41NTIpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI0LjkwNCIgeT0iMTUiPlJlYWQtb25seSBjb2RlIHNlZ21lbnQ8L3RzcGFuPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMjguMzIiIHk9IjMzLjQ0OCI+KC5pbml0LCAudGV4dCwgLnJvZGF0YSk8L3RzcGFuPgogICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18zNiI+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjY3MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NjYyIvPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI2NzEiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3MyA2NzcuNTUyKSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMjMiIHk9IjE1Ij5SZWFkL3dyaXRlIHNlZ21lbnQ8L3RzcGFuPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNTMuMzYiIHk9IjMzLjQ0OCI+KC5kYXRhLCAuYnNzKTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzM1Ij4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNjIxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjYyMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTczIDYyNy41NTIpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI0Mi4wODgiIHk9IjE1Ij5SdW4tdGltZSBoZWFwPC90c3Bhbj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjI3LjEzNiIgeT0iMzMuNDQ4Ij4oY3JlYXRlZCBieSBtYWxsb2MpPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMzQiPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI1NzEiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIGZpbGw9ImFxdWEiLz4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNTcxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzMzIj4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNTIxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjUyMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTczIDUyNy41NTIpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI4LjQ0OCIgeT0iMTUiPk1lbW9yeS1tYXBwZWQgcmVnaW9uIDwvdHNwYW4+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSIyOC42MzIiIHk9IjMzLjQ0OCI+Zm9yIHNoYXJlZCBsaWJyYXJpZXM8L3RzcGFuPgogICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18zMiI+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjQ3MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iYXF1YSIvPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI0NzEiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMzEiPgogICAgICAgICAgPHJlY3QgeD0iOTY4IiB5PSI0MjEiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNjY2MiLz4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iNDIxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NzMgNDI3LjU1MikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjU2Ljc3NiIgeT0iMTUiPlVzZXIgc3RhY2s8L3RzcGFuPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iMjMuNDI0IiB5PSIzMy40NDgiPihjcmVhdGVkIGF0IHJ1biB0aW1lKTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzI5Ij4KICAgICAgICAgIDxyZWN0IHg9Ijk2OCIgeT0iMzY2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+CiAgICAgICAgICA8cmVjdCB4PSI5NjgiIHk9IjM2NiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwX3BhdGgiPgogICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2NjIi8+CiAgICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgICAgPHRleHQgY2xpcC1wYXRoPSJ1cmwoI2NsaXBfcGF0aCkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3MyAzODEuNzc2KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNDAuNjE2IiB5PSIxNSI+S2VybmVsIG1lbW9yeTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},36513:(I,i,g)=>{g.d(i,{A:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM6eGw9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZpZXdCb3g9IjE5OCAxMjggNjM2IDM0NCIgd2lkdGg9IjYzNiIgaGVpZ2h0PSIzNDQiPgogIDxkZWZzLz4KICA8ZyBpZD0iZmlnN18zIiBzdHJva2U9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9Im5vbmUiPgogICAgPHRpdGxlPmZpZzcuMzwvdGl0bGU+CiAgICA8cmVjdCBmaWxsPSJ3aGl0ZSIgeD0iMTk4IiB5PSIxMjgiIHdpZHRoPSI2MzYiIGhlaWdodD0iMzQ0Ii8+CiAgICA8ZyBpZD0iZmlnN18zX0xheWVyXzEiPgogICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgICAgIDxnIGlkPSJHcm91cF8zIj4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18yNyI+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjQyNiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iNDI2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTggNDI5LjI3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjIxLjA2NCIgeT0iMTUiPlNlY3Rpb24gaGVhZGVyIHRhYmxlPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMjYiPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSI0MDEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjQwMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDQwNC4yNzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI3Mi4wMzIiIHk9IjE1Ij4uc3RydGFiPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMjUiPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIzNzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjM3NiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDM3OS4yNzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI4MC40OCIgeT0iMTUiPi5saW5lPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMjQiPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIzNTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjM1MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDM1NC4yNzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI2OS45NTIiIHk9IjE1Ij4uZGVidWc8L3RzcGFuPgogICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18yMyI+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjMyNiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMzI2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTggMzI5LjI3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjY2LjEwNCIgeT0iMTUiPi5yZWwuZGF0YTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzIyIj4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMjI2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBmaWxsPSJ3aGl0ZSIvPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIyMjYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OCAyMjkuMjc2KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNzYuOTIiIHk9IjE1Ij4uZGF0YTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzIxIj4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMjAxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBmaWxsPSJ3aGl0ZSIvPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIyMDEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OCAyMDQuMjc2KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNjkuODA4IiB5PSIxNSI+LnJvZGF0YTwvdHNwYW4+CiAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzIwIj4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMTc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBmaWxsPSJ3aGl0ZSIvPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIxNzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OCAxNzkuMjc2KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNzkuMjk2IiB5PSIxNSI+LnRleHQ8L3RzcGFuPgogICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18xOSI+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjMwMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMzAxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTggMzA0LjI3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjY4LjQ4IiB5PSIxNSI+LnJlbC50ZXh0PC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMTgiPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIyNzYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjI3NiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDI3OS4yNzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI2Ni4zOTIiIHk9IjE1Ij4uc3ltdGFiPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMTciPgogICAgICAgICAgPHJlY3QgeD0iMjkzIiB5PSIyNTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIi8+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjI1MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgc3Ryb2tlPSJncmF5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDI1NC4yNzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSI4MC4wMzIiIHk9IjE1Ij4uYnNzPC90c3Bhbj4KICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfMiI+CiAgICAgICAgICA8cmVjdCB4PSIyOTMiIHk9IjE1MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNSIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDxyZWN0IHg9IjI5MyIgeT0iMTUxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1IiBzdHJva2U9ImdyYXkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTggMTU0LjI3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjU0LjEwNCIgeT0iMTUiPkVMRiBoZWFkZXI8L3RzcGFuPgogICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18yOCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDEzMykiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSIzMTk3NDQyM2UtMjAiIHk9IjE1Ij4wPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMjkiPgogICAgICAgIDxwYXRoIGQ9Ik0gMjg4IDE1MSBMIDI4OCAxNTEgQyAyODMuMDI5NDQgMTUxIDI3OSAxNTUuMDI5NDQgMjc5IDE2MCBMIDI3OSAyNzAuMTI2MiBDIDI3OSAyNzQuNjA2MzggMjc3LjQ5NTc0IDI3OC45NTY4MiAyNzQuNzI4MzUgMjgyLjQ4MDEgTCAyNzQuNSAyODIuNzcwODMgQyAyNzEuODU4NjggMjg2LjEzMzYzIDI3MS44NTg2OCAyOTAuODY2MzcgMjc0LjUgMjk0LjIyOTE3IEwgMjc0LjcyODM1IDI5NC41MTk5IEMgMjc3LjQ5NTc0IDI5OC4wNDMxOCAyNzkgMzAyLjM5MzYyIDI3OSAzMDYuODczOCBMIDI3OSA0MTcgQyAyNzkgNDIxLjk3MDU2IDI4My4wMjk0NCA0MjYgMjg4IDQyNiBMIDI4OCA0MjYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkxpbmVfMzAiPgogICAgICAgIDxwYXRoIGQ9Ik0gMjg4IDQyNiBMIDI4NC43MjkxNyA0MjYgQyAyODEuNTY1MDQgNDI2IDI3OSA0MjguNTY1MDQgMjc5IDQzMS43MjkxNyBMIDI3OSA0MzIuOTI4MyBDIDI3OSA0MzUuNTEwMjcgMjc3LjA2NDg1IDQzNy42ODIzIDI3NC41IDQzNy45NzkxNyBMIDI3NC41IDQzNy45NzkxNyBDIDI3NC4yMTIzNSA0MzguMDEyNDYgMjc0LjAwNjE2IDQzOC4yNzI2MyAyNzQuMDM5NDUgNDM4LjU2MDMgQyAyNzQuMDY3NDQgNDM4LjgwMjEgMjc0LjI1ODE4IDQzOC45OTI4NSAyNzQuNSA0MzkuMDIwODMgTCAyNzQuNSA0MzkuMDIwODMgQyAyNzcuMDY0ODUgNDM5LjMxNzcgMjc5IDQ0MS40ODk3MyAyNzkgNDQ0LjA3MTcgTCAyNzkgNDQ1LjI3MDgzIEMgMjc5IDQ0OC40MzQ5NiAyODEuNTY1MDQgNDUxIDI4NC43MjkxNyA0NTEgTCAyODggNDUxIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzMxIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDMuMDcyIDI4NCkiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIiB4PSIwIiB5PSIxNSI+U2VjdGlvbnM8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18zMiI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAzLjA3MiA0MTAuODI4KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjIuOTYiIHk9IjE1Ij5EZXNjcmliZTwvdHNwYW4+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayIgeD0iNjY3OTEwMmUtMTkiIHk9IjMzLjQ0OCI+b2JqZWN0IGZpbGU8L3RzcGFuPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siIHg9IjQuNzM2IiB5PSI1MS44OTU5OTYiPnNlY3Rpb25zPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},28453:(I,i,g)=>{g.d(i,{R:()=>c,x:()=>C});var e=g(96540);const n={},l=e.createContext(n);function c(I){const i=e.useContext(l);return e.useMemo((function(){return"function"==typeof I?I(i):{...i,...I}}),[i,I])}function C(I){let i;return i=I.disableParentContext?"function"==typeof I.components?I.components(n):I.components||n:c(I.components),e.createElement(l.Provider,{value:i},I.children)}}}]);