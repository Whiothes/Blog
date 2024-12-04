"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7087],{6855:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var i=n(74641),s=n(74848),a=n(28453);const l={title:"gdb show list",tags:["gdb","list"]},r=void 0,o={authorsImageUrls:[]},d=[{value:"print list in GDB",id:"print-list-in-gdb",level:2}];function c(t){const e={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"print-list-in-gdb",children:"print list in GDB"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-gdb",children:'define phead\n    set $ptr = $arg1\n    plistdata $arg0\nend\n\ndocument phead\nPrint the first element of a list. E.g., given the declaration\n    Glist *datalist;\n    g_list_add(datalist, "Hello");\nview the list with something like\ngdb> phead char datalist\ngdb> pnext char\ngdb> pnext char\n\nThis macro defines $ptr as the current pointed-to list struct,\nand $pdata as the data in that list element.\nend\n\ndefine pnext\n    set $ptr = $ptr->next\n    plistdata $arg0\nend\n\ndocument pnext\nYou need to call phead first; that will set $ptr.\nThis macro will step forward in the list, then show the value at\nthat next element. Give the type of the list data as the only argument.\n\nThis macro defines $ptr as the current pointed-to list struct, and\n$pdata as the data in that list element.\nend\n'})})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function l(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),i.createElement(a.Provider,{value:e},t.children)}},74641:t=>{t.exports=JSON.parse('{"permalink":"/blog/2022/11/08/2022/gdb-showlist","source":"@site/blog/2022/2022-11-08-gdb-showlist.md","title":"gdb show list","description":"print list in GDB ##","date":"2022-11-08T00:00:00.000Z","tags":[{"inline":true,"label":"gdb","permalink":"/blog/tags/gdb"},{"inline":true,"label":"list","permalink":"/blog/tags/list"}],"readingTime":0.69,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"gdb show list","tags":["gdb","list"]},"unlisted":false,"prevItem":{"title":"Set up Meld as Difftool and Mergetool for Git","permalink":"/blog/2022/11/22/2022/git-diff-meld-tool"},"nextItem":{"title":"insecurity proof failed resolving \'$DOMAIN/A/IN\'","permalink":"/blog/2022/10/28/2022/dnssec-forward"}}')}}]);