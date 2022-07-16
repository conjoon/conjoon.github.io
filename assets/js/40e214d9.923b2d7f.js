"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[2017],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7500:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Introducing create-siesta",authors:["ThorstenSuckow"],tags:["update","installer","create-conjoon","npm","initializer"]},l=void 0,p={permalink:"/blog/2022/07/15/create-siesta",editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/blog/2022-07-15-create-siesta/index.md",source:"@site/blog/2022-07-15-create-siesta/index.md",title:"Introducing create-siesta",description:"Easily create Siesta tests for your applications",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"installer",permalink:"/blog/tags/installer"},{label:"create-conjoon",permalink:"/blog/tags/create-conjoon"},{label:"npm",permalink:"/blog/tags/npm"},{label:"initializer",permalink:"/blog/tags/initializer"}],readingTime:2.485,truncated:!1,authors:[{name:"Thorsten Suckow-Homberg",title:"Senior Software Developer & Trainer at eyeworkers GmbH, Germany",url:"http://twitter.com/ThorstenSuckow",email:"thorsten@suckow-homberg.de",twitter:"ThorstenSuckow",imageURL:"https://pbs.twimg.com/profile_images/1521112762902011904/rrKSXgUq_400x400.jpg",key:"ThorstenSuckow"}],frontMatter:{title:"Introducing create-siesta",authors:["ThorstenSuckow"],tags:["update","installer","create-conjoon","npm","initializer"]},nextItem:{title:"conjoon installer updates",permalink:"/blog/2022/06/06/installer-update"}},c={authorsImageUrls:[void 0]},u=[{value:"Easily create Siesta tests for your applications",id:"easily-create-siesta-tests-for-your-applications",level:2},{value:"Documentation",id:"documentation",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"easily-create-siesta-tests-for-your-applications"},"Easily create Siesta tests for your applications"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bryntum.com/products/siesta/"},"Siesta")," is a JavaScript unit and UI testing tool which allows for running tests (for ",(0,o.kt)("strong",{parentName:"p"},"Ext JS")," (view-) components, amongst others) directly in the web browser (or  headless in case you want to use it with your ci tools)."),(0,o.kt)("p",null,"It is ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),"'s favorite among the various testing tools out there (we're also working with ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest \ud83c\udccf")," when there's no ",(0,o.kt)("strong",{parentName:"p"},"Ext JS")," involved) and without it, it's clear that End-toEnd tests of some of the features and changes that have made it into ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," would have slowed the project down due to their cyclic complexity - or even worse, make the software stuck in regression. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/packages/@conjoon/extjs-app-webmail"},(0,o.kt)("strong",{parentName:"a"},"extjs-app-webmail"))," alone sports more than 5000 unit and ui tests created with ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," and they all make sure that the frontend behaves as intended and is free from unwelcomed side effects for any edge case that might occur (we know that's a ",(0,o.kt)("a",{parentName:"p",href:"https://dilbert.com/strip/2017-10-02?creator=Dilbert_Daily"},"bold statement"),")."),(0,o.kt)("p",null,"To ease the process of setting up a functional ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," environment, we're introducing the cli tool ",(0,o.kt)("inlineCode",{parentName:"p"},"create-siesta")," which can be used with any JavaScript framework that requires a functional ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," application running in a web browser, or at least a fully fledged infrastructure for running ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," tests. However, by providing integrated build options for the ",(0,o.kt)("strong",{parentName:"p"},"Ext JS SDK"),", it is best suited for environments where the ",(0,o.kt)("strong",{parentName:"p"},"Sencha")," framework is already being used or will be used."),(0,o.kt)("p",null,"For using the tool, all that is required is a working ",(0,o.kt)("a",{parentName:"p",href:"https://node.js"},"Node.js")," installation on your machine. The scaffolding process can then be started by typing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-siesta@latest\n")),(0,o.kt)("p",null,"on the console. ",(0,o.kt)("inlineCode",{parentName:"p"},"create-siesta")," will then guide you through the installation process and also consider the environment (aka ",(0,o.kt)("em",{parentName:"p"},"current working directory"),") it was invoked in, by falling back to already existing ",(0,o.kt)("strong",{parentName:"p"},"Ext JS")," sources for example, or any other package requirements already available."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7286).Z,width:"1200",height:"800"})),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"create-siesta")," is finished, a folder (defaulting to ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),") will be available with your project that contains a scaffolded ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," environment with templates for additional and future tests you and your team can implement. Tests can then be started with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run siesta:test\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create-siesta")," builds upon an already available helper tool for creating tests with ",(0,o.kt)("strong",{parentName:"p"},"Siesta"),", namely ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coon-js/siesta-lib-helper"},"@coon-js/siesta-lib-helper")," which is already widely used throughout the ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," project and the packages it depends on. This means that you will have an additional control at hand with the ",(0,o.kt)("strong",{parentName:"p"},"Siesta")," application that allows for switching between toolkit dependent tests and dynamically changing timeout values used with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"t.waitForMs()\n")),(0,o.kt)("p",null,"in tests."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("img",{src:a(9626).Z,width:"258",height:"207"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"The additional control made available by siesta-lib-helper allows for switching between the modern ",(0,o.kt)("inlineCode",{parentName:"em"},"M")," and classic ",(0,o.kt)("inlineCode",{parentName:"em"},"C")," toolkit and provides a list of timeout values that can be globally used with t.waitForMs() in tests."))))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The documentation for ",(0,o.kt)("inlineCode",{parentName:"p"},"create-siesta")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/misc/@coon-js/create-siesta"},"here"),", the sources are available with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coon-js"},"coon.js")," organization at ",(0,o.kt)("strong",{parentName:"p"},"GitHub"),", which provides a collection of useful tools for rapid ",(0,o.kt)("strong",{parentName:"p"},"Sencha Ext JS")," application development, and spawned from the ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," open source project."))}d.isMDXComponent=!0},7286:function(e,t,a){t.Z=a.p+"assets/images/create-siesta-cli-b0ae2613c737d30d917a282287580c32.gif"},9626:function(e,t,a){t.Z=a.p+"assets/images/siesta-lib-helper-ctrl-66e4cf51d5116c06ab072544ca4ed211.png"}}]);