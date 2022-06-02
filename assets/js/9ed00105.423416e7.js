"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[9004],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),l=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=l(n.components);return o.createElement(s.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),d=l(t),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||i;return t?o.createElement(m,r(r({ref:e},p),{},{components:t})):o.createElement(m,r({ref:e},p))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:a,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9733:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],c={id:"configuration",title:"Configuration",description:"Configuring an installation of conjoon and its frontend packages"},s=void 0,l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Configuring an installation of conjoon and its frontend packages",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/conjoon/conjoon/docs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",description:"Configuring an installation of conjoon and its frontend packages"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Guides",permalink:"/docs/category/guides"}},p={},f=[{value:"Where can I find the configuration file?",id:"where-can-i-find-the-configuration-file",level:3},{value:"What goes into a <code>conjoon.conf.json</code>?",id:"what-goes-into-a-conjoonconfjson",level:2},{value:"Application settings",id:"application-settings",level:3},{value:"Package configurations",id:"package-configurations",level:3},{value:"Services",id:"services",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Further information",id:"further-information",level:2}],d={toc:f};function u(n){var e=n.components,t=(0,a.Z)(n,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide focuses on the configuration of the web-client of ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),". For more information on the configuration of one of the available backends, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"backends/overview"},"Backend Guide")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"conjoon")," is a set of packages that need to get activated with the main application in order to work. This guide shows how to use the central configuration file for the whole application, and how to adjust package-specific settings."),(0,i.kt)("h3",{id:"where-can-i-find-the-configuration-file"},"Where can I find the configuration file?"),(0,i.kt)("p",null,"The configuration file for ",(0,i.kt)("strong",{parentName:"p"},"conjoon")," is available at the following path in a build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"desktop/resources/coon-js/conjoon.conf.json\n")),(0,i.kt)("h2",{id:"what-goes-into-a-conjoonconfjson"},"What goes into a ",(0,i.kt)("inlineCode",{parentName:"h2"},"conjoon.conf.json"),"?"),(0,i.kt)("p",null,"An overview of a ",(0,i.kt)("strong",{parentName:"p"},"conjoon")," configuration can be categorized into:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#application-settings"},"Application settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package-configurations"},"Package configurations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#services"},"Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#plugins"},"Plugins"))),(0,i.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to the ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json"},"conjoon.conf.json reference"),"."),(0,i.kt)("h3",{id:"application-settings"},"Application settings"),(0,i.kt)("p",null,"Application settings allow for configuration of the ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json#application-title"},(0,i.kt)("inlineCode",{parentName:"a"},"title")),", a ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json#application-titleTpl"},(0,i.kt)("inlineCode",{parentName:"a"},"title template")),", an initial ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json#application-announcement"},(0,i.kt)("inlineCode",{parentName:"a"},"Announcement Bar"))," configuration and an arbitrary set of additional configurations for your installation. "),(0,i.kt)("h3",{id:"package-configurations"},"Package configurations"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json#packages"},(0,i.kt)("inlineCode",{parentName:"a"},"packages")),"-section in the configuration file of ",(0,i.kt)("strong",{parentName:"p"},"conjoon")," allows for configuring package-specific behavior.\nAlthough packages are self-contained and can be configured directly within their domain, it is good practice to\nconfigure them in the configuration file of ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),". It also allows you for adding ",(0,i.kt)("inlineCode",{parentName:"p"},"controller plugins"),", altering the functionality of packages."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"During runtime, Application- and Package-specific configurations can be accessed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.ConfigManager"),"-API."))),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"conjoon.conf.json#services"},(0,i.kt)("inlineCode",{parentName:"a"},"services")),"-section allows for configuring services to be looked up for the ServiceLocator in ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),", making it possible to share existing functionality among the unlinked packages used with ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are interested in how the ServiceLocator works with ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),", you can follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/servicelocator"},"this guide"),"."))),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Plugins are divided into ",(0,i.kt)("inlineCode",{parentName:"p"},"application"),"- and ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"-plugins, and allow for altering the functionality of components and the application itself."),(0,i.kt)("h2",{id:"further-information"},"Further information"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are interested in the internals of the configuration system and how it is used with conjoon, you can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configurationdetails"},"this guide"),"."))))}u.isMDXComponent=!0}}]);