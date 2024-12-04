"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6911],{80809:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"TOC/computer/Distributed_System/03 MapReduce","title":"MapReduce: Simplified Data Processing on Large Clusters","description":"Abstract","source":"@site/docs/TOC/computer/Distributed_System/03 MapReduce.md","sourceDirName":"TOC/computer/Distributed_System","slug":"/TOC/computer/Distributed_System/03 MapReduce","permalink":"/docs/TOC/computer/Distributed_System/03 MapReduce","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bigtable: A Distributed Storage System for Structured Data","permalink":"/docs/TOC/computer/Distributed_System/02 bigtable"},"next":{"title":"Linux Kernel","permalink":"/docs/category/linux-kernel"}}');var r=i(74848),s=i(28453);const a={},l="MapReduce: Simplified Data Processing on Large Clusters",o={},c=[{value:"Abstract",id:"abstract",level:2},{value:"2 Programming Model",id:"2-programming-model",level:2},{value:"2.1 Example",id:"21-example",level:3},{value:"2.2 Types",id:"22-types",level:3},{value:"3 Implementation",id:"3-implementation",level:2},{value:"3.1Execution Overview",id:"31execution-overview",level:2},{value:"3.2 Master Data Structures",id:"32-master-data-structures",level:3},{value:"3.3. Fault Tolerance",id:"33-fault-tolerance",level:3},{value:"Worker Failure",id:"worker-failure",level:4},{value:"Master Failure",id:"master-failure",level:4},{value:"Semantics in the Presence of Failures",id:"semantics-in-the-presence-of-failures",level:4},{value:"3.4 Locality",id:"34-locality",level:3},{value:"4. Refinements",id:"4-refinements",level:2},{value:"4.3 Combiner Function",id:"43-combiner-function",level:3}];function d(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"mapreduce-simplified-data-processing-on-large-clusters",children:"MapReduce: Simplified Data Processing on Large Clusters"})}),"\n",(0,r.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,r.jsx)(t.p,{children:"a programming model and an associated implementation for processing and generating large data sets."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"map"})," function processes a key/value pair to generate a set of intermediate key/value pairs,"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"reduce"})," function merges all intermediate values associated with the same intermediate key."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"2-programming-model",children:"2 Programming Model"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image-20230402150335147",src:i(94993).A+"",width:"1388",height:"1070"})}),"\n",(0,r.jsx)(t.h3,{id:"21-example",children:"2.1 Example"}),"\n",(0,r.jsx)(t.p,{children:"pseudo-code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'map(String key, String value):\n\t// key: document name\n\t// value: document contents\nfor each word w in value:\n\tEmitIntermediate(w, "1");\n\nreduce(String key, Iterator values):\n\t// key: a word\n\t// values: a list of counts\n\tint result = 0;\n\tfor each v in values:\n\t\tresult += ParseInt(v);\n\tEmit(AsString(result));\n'})}),"\n",(0,r.jsx)(t.h3,{id:"22-types",children:"2.2 Types"}),"\n",(0,r.jsx)(t.p,{children:"map      (k1, v1)        ----\x3e list (k2, v2)"}),"\n",(0,r.jsx)(t.p,{children:"reduce (k2, list(v2)) ----\x3e list(v2)"}),"\n",(0,r.jsx)(t.h2,{id:"3-implementation",children:"3 Implementation"}),"\n",(0,r.jsx)(t.h2,{id:"31execution-overview",children:"3.1Execution Overview"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"split into pieces"}),"\n",(0,r.jsx)(t.li,{children:"master picks idle workers and assigns tasks"}),"\n",(0,r.jsx)(t.li,{children:"assigned worker reads input split."}),"\n",(0,r.jsxs)(t.li,{children:["partitioned into ",(0,r.jsx)(t.em,{children:"R"})," regions and write buffered pairs to local disk periodically."]}),"\n",(0,r.jsx)(t.li,{children:"a reduce worker uses RPC to read buffered data from the local disks of the map workers"}),"\n",(0,r.jsxs)(t.li,{children:["reduce worker iterates over, append the output of the ",(0,r.jsx)(t.em,{children:"Reduce"})," function to a final output file for this reduce partition."]}),"\n",(0,r.jsx)(t.li,{children:"the master wakes up the user program after workers completed."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"32-master-data-structures",children:"3.2 Master Data Structures"}),"\n",(0,r.jsxs)(t.p,{children:["for each map task and reduce task: state (",(0,r.jsx)(t.em,{children:"idle"}),", ",(0,r.jsx)(t.em,{children:"in-progress"})," or ",(0,r.jsx)(t.em,{children:"completed"}),"), and the identity of the worker machine (for non-idle tasks)"]}),"\n",(0,r.jsxs)(t.p,{children:["for each completed map task: the locations and sizes of the ",(0,r.jsx)(t.em,{children:"R"})," intermediate file regions produced by the map task"]}),"\n",(0,r.jsx)(t.h3,{id:"33-fault-tolerance",children:"3.3. Fault Tolerance"}),"\n",(0,r.jsx)(t.h4,{id:"worker-failure",children:"Worker Failure"}),"\n",(0,r.jsx)(t.p,{children:"The master pings every worker periodically."}),"\n",(0,r.jsx)(t.p,{children:"Completed map tasks are re-executed on a failure because their output is stored on the local disks of the failed machine that is therefore inaccessible. Completed reduce tasks stored their output in a global file system."}),"\n",(0,r.jsx)(t.p,{children:"When a map task is executed twice or more, all worker executing reduce tasks are notified of the re-execution. Any reduce task that has not already read will read the data from later machine."}),"\n",(0,r.jsx)(t.h4,{id:"master-failure",children:"Master Failure"}),"\n",(0,r.jsx)(t.p,{children:"make the master write periodic checkpoints, when it dies, started from the last checkpointed state."}),"\n",(0,r.jsx)(t.h4,{id:"semantics-in-the-presence-of-failures",children:"Semantics in the Presence of Failures"}),"\n",(0,r.jsxs)(t.p,{children:["when ",(0,r.jsx)(t.em,{children:"map"})," and ",(0,r.jsx)(t.em,{children:"reduce"})," operator are ",(0,r.jsx)(t.strong,{children:"deterministic"})," functions of input values, distributed  implementation produces the ",(0,r.jsx)(t.strong,{children:"same"})," output."]}),"\n",(0,r.jsx)(t.p,{children:"We rely on atomic commits of map and reduce task outputs to achieve non-faulting sequential execution of the entire program."}),"\n",(0,r.jsx)(t.p,{children:"Each in-process task writes its output to private temporary files."}),"\n",(0,r.jsx)(t.p,{children:"The reduce worker atomically renames its temporary output file to the final output file when a reduce task completes."}),"\n",(0,r.jsx)(t.h3,{id:"34-locality",children:"3.4 Locality"}),"\n",(0,r.jsx)(t.h2,{id:"4-refinements",children:"4. Refinements"}),"\n",(0,r.jsx)(t.h3,{id:"43-combiner-function",children:"4.3 Combiner Function"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The only difference between a reduce function and a combiner function is how the MapReduce library handles the output of the function."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},94993:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image-20230402150335147-4bb1f4e50c2187f919c9e87316249a6a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);