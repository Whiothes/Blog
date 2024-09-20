"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5144],{15178:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(74848),i=n(28453);const r={title:"Reduce Ubuntu Server",tags:["ubuntu"]},o=void 0,l={permalink:"/blog/2024/06/25/reduce-ubuntu-server",source:"@site/blog/2024/06-25-reduce-ubuntu-server.md",title:"Reduce Ubuntu Server",description:"0. Sizes for /boot and /boot/efi",date:"2024-06-25T00:00:00.000Z",tags:[{inline:!0,label:"ubuntu",permalink:"/blog/tags/ubuntu"}],readingTime:2.395,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Reduce Ubuntu Server",tags:["ubuntu"]},unlisted:!1,prevItem:{title:"KVM \u8fd0\u884c\u5e76\u7f16\u8f91iso\u955c\u50cf\u6587\u4ef6",permalink:"/blog/2024/07/25/kvm"},nextItem:{title:"\u5b89\u88c5 Windows \u5982\u4f55\u8df3\u8fc7\u8d26\u53f7\u767b\u5f55[^1]",permalink:"/blog/2024/06/19/win-skip-netlogin"}},a={authorsImageUrls:[]},c=[{value:"0. Sizes for <code>/boot</code> and <code>/boot/efi</code>",id:"0-sizes-for-boot-and-bootefi",level:3},{value:"1. Install pre-installed ubuntu server",id:"1-install-pre-installed-ubuntu-server",level:3},{value:"2. <strong>Remove Unnecessary Packages</strong> (compile envionrment)",id:"2-remove-unnecessary-packages-compile-envionrment",level:3},{value:"3. <strong>Disable Unnecessary Services</strong>",id:"3-disable-unnecessary-services",level:3},{value:"4. <strong>Clean Up Apt Cache</strong>",id:"4-clean-up-apt-cache",level:3},{value:"5. <strong>Limit Installed Software</strong>",id:"5-limit-installed-software",level:3},{value:"6. <strong>Configure NoInstallRecommends</strong>",id:"6-configure-noinstallrecommends",level:3},{value:"7. <strong>Use Lightweight Alternatives</strong>",id:"7-use-lightweight-alternatives",level:3},{value:"8. <strong>Optimize Configuration Files</strong>",id:"8-optimize-configuration-files",level:3},{value:"9. <strong>Regularly Monitor and Audit</strong>",id:"9-regularly-monitor-and-audit",level:3},{value:"10. <strong>Use System Snapshots</strong>",id:"10-use-system-snapshots",level:3},{value:"11. <strong>Security and Updates</strong>",id:"11-security-and-updates",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h3,{id:"0-sizes-for-boot-and-bootefi",children:["0. Sizes for ",(0,t.jsx)(s.code,{children:"/boot"})," and ",(0,t.jsx)(s.code,{children:"/boot/efi"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"/boot Partition"}),": You could reduce the ",(0,t.jsx)(s.code,{children:"/boot"})," partition size to around ",(0,t.jsx)(s.strong,{children:"200 MB"}),". This should still be sufficient to hold the kernel and initramfs image. Be cautious, as going too small could lead to issues during unexpected updates or changes that might require space, such as security patches for the kernel."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"/boot/efi Partition"}),": The EFI System Partition (",(0,t.jsx)(s.code,{children:"/boot/efi"}),") typically doesn't require much space if you're only using a few boot loaders. A size of ",(0,t.jsx)(s.strong,{children:"100 MB"})," is often recommended as a minimum by many Linux distributions and should be more than adequate for most single-boot configurations."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"1-install-pre-installed-ubuntu-server",children:"1. Install pre-installed ubuntu server"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Download pre-installed ubuntu server: ",(0,t.jsx)(s.a,{href:"https://cdimage.ubuntu.com/ubuntu-server/noble/daily-preinstalled/current/",children:"Ubuntu Server 24.04 (Noble Numbat) Daily Build"})]}),"\n",(0,t.jsxs)(s.li,{children:["use ",(0,t.jsx)(s.a,{href:"https://help.ubuntu.com/community/mkusb",children:"mkusb - Community Help Wiki"})," to flash: ",(0,t.jsx)(s.code,{children:"dus xxx.tar.xz"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"2-remove-unnecessary-packages-compile-envionrment",children:["2. ",(0,t.jsx)(s.strong,{children:"Remove Unnecessary Packages"})," (compile envionrment)"]}),"\n",(0,t.jsx)(s.p,{children:"After installation, you can remove packages that are not necessary for your server's purpose:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"List installed packages:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"dpkg-query -W --showformat='${Installed-Size}\\t${Package}\\n' | awk '{print $1/1024 \" MB\\t\" $2}' | sort -n -r\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Remove unnecessary packages: ",(0,t.jsx)(s.code,{children:"sudo apt-get remove --purge package-name"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo apt-get remove --purge build-essential autoconf automake gcc g++\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"3-disable-unnecessary-services",children:["3. ",(0,t.jsx)(s.strong,{children:"Disable Unnecessary Services"})]}),"\n",(0,t.jsx)(s.p,{children:"Ubuntu Server starts several services by default. Disabling services that are not needed can save system resources:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Check running services: ",(0,t.jsx)(s.code,{children:"systemctl list-unit-files --state=enabled"})]}),"\n",(0,t.jsxs)(s.li,{children:["Disable a service: ",(0,t.jsx)(s.code,{children:"sudo systemctl disable service-name"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"4-clean-up-apt-cache",children:["4. ",(0,t.jsx)(s.strong,{children:"Clean Up Apt Cache"})]}),"\n",(0,t.jsx)(s.p,{children:"After installing or updating packages, clean up the APT cache to free up disk space:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt-get clean\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"5-limit-installed-software",children:["5. ",(0,t.jsx)(s.strong,{children:"Limit Installed Software"})]}),"\n",(0,t.jsx)(s.p,{children:"Only install the software that is necessary for your server to function. Evaluate the need for each package before installing it."}),"\n",(0,t.jsxs)(s.h3,{id:"6-configure-noinstallrecommends",children:["6. ",(0,t.jsx)(s.strong,{children:"Configure NoInstallRecommends"})]}),"\n",(0,t.jsxs)(s.p,{children:["By default, ",(0,t.jsx)(s.code,{children:"apt"})," installs recommended packages along with dependencies. You can limit this behavior by configuring APT to not install recommended packages:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"echo 'APT::Install-Recommends \"0\";' | sudo tee -a /etc/apt/apt.conf.d/01norecommends\necho 'APT::Install-Suggests \"0\";' | sudo tee -a /etc/apt/apt.conf.d/01norecommends\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"7-use-lightweight-alternatives",children:["7. ",(0,t.jsx)(s.strong,{children:"Use Lightweight Alternatives"})]}),"\n",(0,t.jsxs)(s.p,{children:["Where possible, use lightweight alternatives to common software. For example, use ",(0,t.jsx)(s.code,{children:"nginx"})," instead of ",(0,t.jsx)(s.code,{children:"apache2"})," if you need a web server but require less overhead."]}),"\n",(0,t.jsxs)(s.h3,{id:"8-optimize-configuration-files",children:["8. ",(0,t.jsx)(s.strong,{children:"Optimize Configuration Files"})]}),"\n",(0,t.jsx)(s.p,{children:"Review and optimize configuration files to ensure that no unnecessary modules or plugins are loaded."}),"\n",(0,t.jsxs)(s.h3,{id:"9-regularly-monitor-and-audit",children:["9. ",(0,t.jsx)(s.strong,{children:"Regularly Monitor and Audit"})]}),"\n",(0,t.jsx)(s.p,{children:"Set up a routine to regularly check and audit your system:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use tools like ",(0,t.jsx)(s.code,{children:"ncdu"})," (NCurses Disk Usage) to analyze disk usage."]}),"\n",(0,t.jsxs)(s.li,{children:["Use ",(0,t.jsx)(s.code,{children:"htop"})," or ",(0,t.jsx)(s.code,{children:"top"})," to monitor running processes and resource usage."]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"10-use-system-snapshots",children:["10. ",(0,t.jsx)(s.strong,{children:"Use System Snapshots"})]}),"\n",(0,t.jsxs)(s.p,{children:["Before making significant changes, consider using tools like ",(0,t.jsx)(s.code,{children:"timeshift"})," to take system snapshots. This allows you to revert back if the changes do not produce the desired effect."]}),"\n",(0,t.jsxs)(s.h3,{id:"11-security-and-updates",children:["11. ",(0,t.jsx)(s.strong,{children:"Security and Updates"})]}),"\n",(0,t.jsx)(s.p,{children:"Ensure your minimal server setup is secure and receives necessary security updates. Minimal installations can still be vulnerable to security risks.\u0192qn"})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);