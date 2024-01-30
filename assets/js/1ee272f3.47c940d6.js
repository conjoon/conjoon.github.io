"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[4777],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2119:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"ddev-ms-email",title:"\ud83d\udeaa ddev-ms-email",slug:"/api/backends/@conjoon/ddev-ms-email"},s=void 0,p={unversionedId:"backends/ddev-ms-email",id:"backends/ddev-ms-email",title:"\ud83d\udeaa ddev-ms-email",description:".ddev/Docker configuration providing standalone server for conjoon/lumen-app-email.",source:"@site/docs/backends/ddev-ms-email.md",sourceDirName:"backends",slug:"/api/backends/@conjoon/ddev-ms-email",permalink:"/docs/api/backends/@conjoon/ddev-ms-email",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/backends/ddev-ms-email.md",tags:[],version:"current",frontMatter:{id:"ddev-ms-email",title:"\ud83d\udeaa ddev-ms-email",slug:"/api/backends/@conjoon/ddev-ms-email"},sidebar:"api",previous:{title:"\ud83d\udeaa lumen-app-email",permalink:"/docs/api/backends/@conjoon/lumen-app-email"},next:{title:"Backend API",permalink:"/docs/api/rest-api"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Starting DDEV",id:"starting-ddev",level:3},{value:"lumen-app-email",id:"lumen-app-email",level:3},{value:"conjoon",id:"conjoon",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Re-installing <strong>lumen-app-email</strong>",id:"re-installing-lumen-app-email",level:3},{value:"Re-installing <strong>conjoon</strong>",id:"re-installing-conjoon",level:3},{value:"DDEV Configuration",id:"ddev-configuration",level:3},{value:"Additional resources",id:"additional-resources",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".ddev/Docker configuration providing standalone server for ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email"},"conjoon/lumen-app-email"),"."),(0,r.kt)("p",null,"Provides additional scripts for adding a running ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org"},"conjoon")," JavaScript Email frontend installation to this container."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ddev.readthedocs.io/en/stable/"},"DDEV"),"\ninstalled and running."),(0,r.kt)("h3",{id:"starting-ddev"},"Starting DDEV"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"ddev-ms-email")," repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/conjoon/ddev-ms-email\n$ cd ./ddev-ms-email\n$ ddev start\n")),(0,r.kt)("h3",{id:"lumen-app-email"},"lumen-app-email"),(0,r.kt)("p",null,"Once the server was started, a hook script will advise ",(0,r.kt)("inlineCode",{parentName:"p"},"composer")," take care of obtaining the latest version of the ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/conjoon/lumen-app-email"},"conjoon/lumen-app-email"),"\npackage."),(0,r.kt)("p",null,"Note: This will only happen automatically if the server does not find an existing installation of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email"),"."),(0,r.kt)("p",null,"Once the package and all of its dependencies where loaded, the installation process of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email")," starts. Please refer\nto the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email"},"documentation")," for a detailed description of each installation step."),(0,r.kt)("p",null,"The services can then be accessed at the URL the container uses, defaulting to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://ddev-ms-email.ddev.site/rest-imapuser\n")),(0,r.kt)("p",null,"for authentication and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://ddev-ms-email.ddev.site/rest-api-email\n")),(0,r.kt)("p",null,"for the email messaging API."),(0,r.kt)("h3",{id:"conjoon"},"conjoon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org"},(0,r.kt)("strong",{parentName:"a"},"conjoon"))," is a JavaScript Email frontend and can be used with the API of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email"),"."),(0,r.kt)("p",null,"If you wish to install ",(0,r.kt)("strong",{parentName:"p"},"conjoon")," with this container, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ddev create-conjoon\n")),(0,r.kt)("p",null,"This will start ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/misc/@conjoon/create-conjoon"},(0,r.kt)("strong",{parentName:"a"},"create-conjoon"))," and guide you through\nthe steps necessary for setting up the frontend."),(0,r.kt)("p",null,"You can then access the frontend at the URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://conjoon.ddev.site\n")),(0,r.kt)("p",null,"Please make sure to read the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/conjoon.conf.json"},"documentation")," regarding the various configuration options availlable."),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("h3",{id:"re-installing-lumen-app-email"},"Re-installing ",(0,r.kt)("strong",{parentName:"h3"},"lumen-app-email")),(0,r.kt)("p",null,"Connect to the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ddev ssh\n")),(0,r.kt)("p",null,"Manually invoke the installation of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email"),". For creating a ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email")," instance with\nthe latest stable version from the ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.*"),"-branch, type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ composer create-project conjoon/lumen-app-email lumen-app-email "1.*" \n')),(0,r.kt)("h3",{id:"re-installing-conjoon"},"Re-installing ",(0,r.kt)("strong",{parentName:"h3"},"conjoon")),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ddev create-conjoon\n")),(0,r.kt)("p",null,"and follow the instructions on screen."),(0,r.kt)("h3",{id:"ddev-configuration"},"DDEV Configuration"),(0,r.kt)("p",null,"DDEV-configuration can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"./ddev/config.yaml"),".\nAdjust to your needs."),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("p",null,"Please refer to the documentation of ",(0,r.kt)("a",{parentName:"p",href:"./lumen-app-email"},"conjoon/lumen-app-email"),"\nfor additional information on how to configure your instance of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email"),"."))}m.isMDXComponent=!0}}]);