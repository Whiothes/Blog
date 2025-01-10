"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8729],{35240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"TOC/computer/Distributed_System/02 bigtable","title":"Bigtable: A Distributed Storage System for Structured Data","description":"2 Data Model","source":"@site/docs/TOC/computer/Distributed_System/02 bigtable.md","sourceDirName":"TOC/computer/Distributed_System","slug":"/TOC/computer/Distributed_System/02 bigtable","permalink":"/docs/TOC/computer/Distributed_System/02 bigtable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"The Google File System","permalink":"/docs/TOC/computer/Distributed_System/01 gfs"},"next":{"title":"MapReduce: Simplified Data Processing on Large Clusters","permalink":"/docs/TOC/computer/Distributed_System/03 MapReduce"}}');var i=n(74848),a=n(28453);const r={},l="Bigtable: A Distributed Storage System for Structured Data",o={},c=[{value:"2 Data Model",id:"2-data-model",level:2},{value:"3. API",id:"3-api",level:2},{value:"4 Building Blocks",id:"4-building-blocks",level:2},{value:"5 Implementation",id:"5-implementation",level:2},{value:"5.1 Tablet Location",id:"51-tablet-location",level:3},{value:"5.2 Tablet Assignment",id:"52-tablet-assignment",level:3},{value:"5.3 Tablet Serving",id:"53-tablet-serving",level:3},{value:"5.4 Compactions",id:"54-compactions",level:3}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"bigtable-a-distributed-storage-system-for-structured-data",children:"Bigtable: A Distributed Storage System for Structured Data"})}),"\n",(0,i.jsx)(t.h2,{id:"2-data-model",children:"2 Data Model"}),"\n",(0,i.jsxs)(t.p,{children:["A Bigtable is spare, distributed, persistent multiple-dimentional sorted map. (like ",(0,i.jsx)(t.code,{children:"DNS"})," structure)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(73307).A+"",width:"1209",height:"425"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Rows"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The rows keys in a table are arbitrary strings (currently up to 64KB in size). Every read or write of data under a single row key is ",(0,i.jsx)(t.strong,{children:"atomic"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Bigtable maintains data in lexicographic order by row key."}),"\n",(0,i.jsx)(t.p,{children:"dynamically partitioned."}),"\n",(0,i.jsxs)(t.p,{children:["range is called a ",(0,i.jsx)(t.em,{children:"tablet"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Column Families"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["be grouped into sets called ",(0,i.jsx)(t.em,{children:"column families"}),", which form the basic unit of access control."]}),"\n",(0,i.jsx)(t.p,{children:"All data in a column family is usually of the same type."}),"\n",(0,i.jsxs)(t.p,{children:["A column key is named using the following syntax: ",(0,i.jsx)(t.em,{children:"family:qualifiers"}),". Column family ",(0,i.jsx)(t.strong,{children:"names"})," must be printable, but ",(0,i.jsx)(t.strong,{children:"qualifiers"})," may be arbitrary strings."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Timestamps"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each cell in a Bigtab le can contain multiple versions of the same data; indexed by timestamp, 64-bit integers. unique."}),"\n",(0,i.jsx)(t.h2,{id:"3-api",children:"3. API"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'// Open the table\nTable *T = OpenOrDie("/bigtable/web/webtable");\n\n// Write a new anchor and delete an old anchor\nRowMutation r1(T, "com.cnn.www");\nr1.Set("anchor:www.c-span.org", "CNN");\nr1.Delete("anchor:www.abc.com");\nOperation op;\nApply(&op, &r1);\n'})}),"\n",(0,i.jsx)(t.p,{children:"Figure 2: Writing to Bigtable."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Scanner scanner(T);\nScanStream *stream;\nstream = scanner.FetchColumnFamily("anchor");\nstream->SetReturnAllVersions();\nscanner.Lookup("com.cnn.www");\nfor (; !stream->Done(); stream->Next()) {\nprintf("%s %s %lld %s\\n",\nscanner.RowName(),\nstream->ColumnName(),\nstream->MicroTimestamp(),\nstream->Value());\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Figure 3: Reading from Bigtable."}),"\n",(0,i.jsx)(t.h2,{id:"4-building-blocks",children:"4 Building Blocks"}),"\n",(0,i.jsx)(t.p,{children:"Bigtable uses the distributed Google File System (GFS) to store log and data files. operates in a shared pool of machines. depends on a cluster management system for scheduling."}),"\n",(0,i.jsxs)(t.p,{children:["The Google ",(0,i.jsx)(t.em,{children:"SSTable"})," file format is used internally to store Bigtable data."]}),"\n",(0,i.jsx)(t.p,{children:"Big table relies on a highly-available and persistent distributed lock service called Chubby. consists of five active replicas,"}),"\n",(0,i.jsx)(t.p,{children:"Chubby: highly-available and persistent distributed lock service."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"mater actively serve requests."}),"\n",(0,i.jsx)(t.li,{children:"namespace consists of directories and small files. Each directory or file can be used as a lock, and reads and writes to a file are atomic."}),"\n",(0,i.jsx)(t.li,{children:"Chubby client library provides consistent caching of Chubby files."}),"\n",(0,i.jsxs)(t.li,{children:["maintains a ",(0,i.jsx)(t.em,{children:"session"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Bigtable uses Chubby to ensure that there is at most one active master at any time; to store the bootstrap location of Bigtable data; to discvoer tablet servers and finalize tablet server deaths; to store Bigtable schema information; and to access control lists.# 5 Implementation"}),"\n",(0,i.jsx)(t.p,{children:"three major components: a library that is linked into every client, one master servaer, and many tablet servers."}),"\n",(0,i.jsx)(t.h2,{id:"5-implementation",children:"5 Implementation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a library is linked into every client,"}),"\n",(0,i.jsx)(t.li,{children:"one master server, responsible for assigning tablets to tablet servers, detecting the addition and expiration of tablet servers, balancing tablet-server load, and garbage collection of files in GFS."}),"\n",(0,i.jsx)(t.li,{children:"many tablet servers. can be dynamically added (or removed) from a cluster to accomodate changes into workloads. manage a set of tablets. handles read and write requests to the tablets that it has loaded, splits tablets that have grown too large."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"client data does not move through the master, because Bigtable clients do not rely on the master for tablet location information., the master is lightly loaded in practice."}),"\n",(0,i.jsx)(t.p,{children:"Big table cluster stores a number of tables consists a set of tablets contains all data associated with a row range."}),"\n",(0,i.jsx)(t.h3,{id:"51-tablet-location",children:"5.1 Tablet Location"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20230319232818057",src:n(631).A+"",width:"778",height:"504"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"root tablet"})," contains the location of all tablets in a special ",(0,i.jsx)(t.code,{children:"METADATA"})," table. ",(0,i.jsx)(t.strong,{children:"nevel split"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"METADATA"})," table stores the location of a tablet under a row key that is an encoding of the tablet's table identifier and its end row."]}),"\n",(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.code,{children:"METADATA"})," row stores approximately 1KB of data in memory."]}),"\n",(0,i.jsx)(t.p,{children:"The client library caches tablet locations. recursively moves up the tablet location hierarchy when the location of a tablet is missing or incorrect."}),"\n",(0,i.jsx)(t.h3,{id:"52-tablet-assignment",children:"5.2 Tablet Assignment"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Each tablet is assigned to one tablet server at a time."})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The master grabs a unique ",(0,i.jsx)(t.em,{children:"master"})," lock in Chubby, which prevents concurrent master instantiations."]}),"\n",(0,i.jsx)(t.li,{children:"The master scans the servers directory in Chubby to find the live servers."}),"\n",(0,i.jsx)(t.li,{children:"The master communicates with every live tablet server to discover what tables are already assigned to each server."}),"\n",(0,i.jsxs)(t.li,{children:["The master scans the ",(0,i.jsx)(t.code,{children:"METADATA"})," table to learn that is not already assigned, the master adds the table to the set of unassigned tablets, which makes the tablet eligible for tablet assignment."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"53-tablet-serving",children:"5.3 Tablet Serving"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20230323222340563",src:n(3489).A+"",width:"511",height:"347"})}),"\n",(0,i.jsx)(t.h3,{id:"54-compactions",children:"5.4 Compactions"}),"\n",(0,i.jsx)(t.p,{children:"When the memtable size reaches a threshold, the memtable is frozen, a new memtable is created, and the frozen memtable is converted to an SSTable and written to GFS."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"minor compaction"})," goals:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"shrinks the memory usage of the tablet server"}),"\n",(0,i.jsx)(t.li,{children:"reduces the amount of data that has to be read from the commit log during recovery if this server dies."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},73307:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20230318215854882-a3efd757c0d56e4c6944e330cf20a2ac.png"},631:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20230319232818057-250d7afc83606c65cff7c02b8643d3cb.png"},3489:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20230323222340563-f1caf930b6cc546542628a9f261a5bfe.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);