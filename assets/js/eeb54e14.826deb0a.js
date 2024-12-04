"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6588],{70142:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=s(40223),a=s(74848),l=s(28453);const r={title:"SSSD and Active Directory",tags:["sssd","AD","domain","ubuntu","kylin"]},t=void 0,o={authorsImageUrls:[]},d=[{value:"SSSD and Active Directory",id:"sssd-and-active-directory",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"sssd-and-active-directory",children:"SSSD and Active Directory"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"install packages:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ sudo apt install sssd-ad sssd-tools realmd adcli sssd-tools sssd libnss-sss libpam-sss adcli packagekit\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"join domain"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ sudo realm discover -v $DOMAIN\n$ sudo realm join $DOMAIN\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["edit ",(0,a.jsx)(n.code,{children:"/etc/sssd/sssd.conf"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-conf",children:"$ vim /etc/sssd/sssd.conf\n\n[sssd]\ndomains = ad1.example.com\nconfig_file_version = 2\nservices = nss, pam\n\n[domain/ad1.example.com]\ndefault_shell = /bin/bash\nkrb5_store_password_if_offline = True\ncache_credentials = True\nkrb5_realm = AD1.EXAMPLE.COM\nrealmd_tags = manages-system joined-with-adcli\nid_provider = ad\nfallback_homedir = /home/%u@%d\nad_domain = ad1.example.com\nuse_fully_qualified_names = True\nldap_id_mapping = True\naccess_provider = ad\n\n# the following is not shown in ubuntu documentation,\n# but is necessary for version after 22\nad_gpo_ignore_unreadable = True\nad_gpo_access_control = permissive\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"automatically create home directory"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"\n$ sudo pam-auth-update --enable mkhomedir\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"check"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ getent passwd $USERNAME@$DOMAIN\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"login"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ sudo login\n\nad-client login: $USERNAME@$DOMAIN\nPassword: \nWelcome to Ubuntu 20.04 LTS (GNU/Linux 5.4.0-24-generic x86_64)\n...\nCreating directory '/home/john@ad1.example.com'.\njohn@ad1.example.com@ad-client:~ \n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["references","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://ubuntu.com/server/docs/service-sssd-ad",children:"SSSD and Active Directory"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(96540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}},40223:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/07/20/2022/ubuntu-AD-sssd","source":"@site/blog/2022/2022-07-20-ubuntu-AD-sssd.md","title":"SSSD and Active Directory","description":"SSSD and Active Directory ##","date":"2022-07-20T00:00:00.000Z","tags":[{"inline":true,"label":"sssd","permalink":"/blog/tags/sssd"},{"inline":true,"label":"AD","permalink":"/blog/tags/ad"},{"inline":true,"label":"domain","permalink":"/blog/tags/domain"},{"inline":true,"label":"ubuntu","permalink":"/blog/tags/ubuntu"},{"inline":true,"label":"kylin","permalink":"/blog/tags/kylin"}],"readingTime":0.845,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"SSSD and Active Directory","tags":["sssd","AD","domain","ubuntu","kylin"]},"unlisted":false,"prevItem":{"title":"iptables port map","permalink":"/blog/2022/10/11/2022/port-forward"},"nextItem":{"title":"Member Server in an Active Directory Domain","permalink":"/blog/2022/07/20/2022/ubuntu-AD-winbind"}}')}}]);