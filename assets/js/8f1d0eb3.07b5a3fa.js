"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[4618],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"conjoon installer updates",authors:["ThorstenSuckow"],tags:["update","installer","create-conjoon","npm","initializer"]},s=void 0,p={permalink:"/blog/2022/06/06/installer-update",editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/blog/2022-06-06-installer-update/index.md",source:"@site/blog/2022-06-06-installer-update/index.md",title:"conjoon installer updates",description:"Creating a custom labeled version of conjoon has never been easier.",date:"2022-06-06T00:00:00.000Z",formattedDate:"June 6, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"installer",permalink:"/blog/tags/installer"},{label:"create-conjoon",permalink:"/blog/tags/create-conjoon"},{label:"npm",permalink:"/blog/tags/npm"},{label:"initializer",permalink:"/blog/tags/initializer"}],readingTime:1.01,truncated:!1,authors:[{name:"Thorsten Suckow-Homberg",title:"Senior Software Developer & Trainer at eyeworkers GmbH, Germany",url:"http://twitter.com/ThorstenSuckow",email:"thorsten@suckow-homberg.de",twitter:"ThorstenSuckow",imageURL:"https://pbs.twimg.com/profile_images/1521112762902011904/rrKSXgUq_400x400.jpg",key:"ThorstenSuckow"}],frontMatter:{title:"conjoon installer updates",authors:["ThorstenSuckow"],tags:["update","installer","create-conjoon","npm","initializer"]},prevItem:{title:"Introducing create-siesta",permalink:"/blog/2022/07/15/create-siesta"},nextItem:{title:"Releasing conjoon 1.0.0-beta.0",permalink:"/blog/2022/06/01/pre-release"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6788).Z,width:"1093",height:"584"})),(0,o.kt)("p",null,"Creating a custom labeled version of ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," has never been easier. "),(0,o.kt)("p",null,"The installer (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-init"},"initializer"),") for ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," received an update to make setting up a local installation of the frontend more convenient and more intuitive."),(0,o.kt)("p",null,"The installer requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," ",(0,o.kt)("strong",{parentName:"p"},"16.14")," or above and is started by typing "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-conjoon@latest \n")),(0,o.kt)("p",null,"on the command line. Additionally, you have the option to initiate the ",(0,o.kt)("a",{target:"_blank",href:n(8527).Z+"#install-type"},"quick install")," right away by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"target directory")," for the installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx create-conjoon@latest "my webmail" ~/webmail\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"quick install")," will continue the installation process by picking the ",(0,o.kt)("strong",{parentName:"p"},"latest release")," from the package registry (",(0,o.kt)("strong",{parentName:"p"},"including pre-releases"),") and configure the installation with fake endpoints returning demo data. You can still connect to production systems later on by using appropriate settings."),(0,o.kt)("p",null,"If you prefer a guided installation for configuring endpoints for existing ",(0,o.kt)("a",{target:"_blank",href:n(8134).Z},"backends")," right away, you can omit any of the arguments. The installer will then present various options to make sure your requirements are met!"),(0,o.kt)("p",null,"In both cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"target directory")," will contain the files required for developing ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," and a production build available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder, which is served by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run stage")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"target directory.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Have a great day!")," \u2600\ufe0f"))}d.isMDXComponent=!0},8134:function(e,t,n){t.Z=n.p+"assets/files/overview-8db4359943e06906e553f7195535e9dd.md"},8527:function(e,t,n){t.Z=n.p+"assets/files/create-conjoon-ceb95c48fd2585e918c38d15f61bebca.md"},6788:function(e,t,n){t.Z=n.p+"assets/images/create-conjoon.0.22-b00964c94b66a0a0fb38094820d2526e.gif"}}]);