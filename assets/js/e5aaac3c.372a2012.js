"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[4349],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"conjoon 1.0.4",authors:["ThorstenSuckow"],tags:["update","interim release","patch","dependency injection"]},p=void 0,l={permalink:"/blog/2022/12/17/1.0.4-release",editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/blog/2022-12-17-1.0.4-release/index.md",source:"@site/blog/2022-12-17-1.0.4-release/index.md",title:"conjoon 1.0.4",description:"\ud83c\udf84 I'm happy to announce conjoon 1.0.4, an interim release that brings Dependency Injection to conjoon.",date:"2022-12-17T00:00:00.000Z",formattedDate:"December 17, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"interim release",permalink:"/blog/tags/interim-release"},{label:"patch",permalink:"/blog/tags/patch"},{label:"dependency injection",permalink:"/blog/tags/dependency-injection"}],readingTime:.46,truncated:!1,authors:[{name:"Thorsten Suckow-Homberg",title:"Senior Software Developer & Trainer at eyeworkers GmbH, Germany",url:"http://twitter.com/ThorstenSuckow",email:"thorsten@suckow-homberg.de",twitter:"ThorstenSuckow",imageURL:"https://pbs.twimg.com/profile_images/1521112762902011904/rrKSXgUq_400x400.jpg",key:"ThorstenSuckow"}],frontMatter:{title:"conjoon 1.0.4",authors:["ThorstenSuckow"],tags:["update","interim release","patch","dependency injection"]},prevItem:{title:"conjoon 1.1.0",permalink:"/blog/2023/03/14/1.1.0-release"},nextItem:{title:"conjoon 1.0",permalink:"/blog/2022/11/14/1.0.0-release"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83c\udf84 I'm happy to announce ",(0,a.kt)("strong",{parentName:"p"},"conjoon 1.0.4"),", an interim release that brings ",(0,a.kt)("em",{parentName:"p"},"Dependency Injection")," to ",(0,a.kt)("strong",{parentName:"p"},"conjoon"),"."),(0,a.kt)("p",null,"Paving the way for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/conjoon/projects/6"},(0,a.kt)("strong",{parentName:"a"},"conjoon 1.1.0"))," that targets support for runtime-replacable plugins, Dependeny Injection allows for a more supple integration of functionality for  application instances."),(0,a.kt)("p",null,"If you're interested in how the ",(0,a.kt)("em",{parentName:"p"},"Inversion of Control"),"-Container works in ",(0,a.kt)("strong",{parentName:"p"},"conjoon"),", have a look ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/dependencyinjection"},"at this article"),"."),(0,a.kt)("p",null,"The functionality has been refactored into ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coon-js/extjs-lib-core/tree/main/src/ioc"},(0,a.kt)("strong",{parentName:"a"},"coon.core.ioc")),", so if your Ext JS application is in the need of a simple yet powerful and flexible IoC-Container, you're good to go!"),(0,a.kt)("p",null," \ud83d\udd14 Happy Holidays! \u2744\ufe0f"))}f.isMDXComponent=!0}}]);