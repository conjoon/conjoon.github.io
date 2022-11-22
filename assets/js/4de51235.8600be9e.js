"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[3099],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6006:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={slug:"/api/misc/@coon-js/delorean"},s="\ud83d\udce6 delorean",p={unversionedId:"misc/delorean",id:"misc/delorean",title:"\ud83d\udce6 delorean",description:"ECMAScript transpilation layer for Sencha CMD / Ext JS.",source:"@site/docs/misc/delorean.md",sourceDirName:"misc",slug:"/api/misc/@coon-js/delorean",permalink:"/docs/api/misc/@coon-js/delorean",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/misc/delorean.md",tags:[],version:"current",frontMatter:{slug:"/api/misc/@coon-js/delorean"},sidebar:"api",previous:{title:"\ud83d\udce6 create-siesta",permalink:"/docs/api/misc/@coon-js/create-siesta"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Command Line Options",id:"command-line-options",level:2},{value:"<code>--prepare, -p</code>",id:"--prepare--p",level:3},{value:"<code>--revert, -r</code>",id:"--revert--r",level:3},{value:"<code>--help, -h</code>",id:"--help--h",level:3},{value:"Configuration",id:"configuration",level:2},{value:"<code>.deloreanrc.json</code>",id:"deloreanrcjson",level:4},{value:"<code>map</code>",id:"map",level:4},{value:"<code>toolkits</code>",id:"toolkits",level:4},{value:"<code>build</code>",id:"build",level:4},{value:"<code>.babelrc</code>",id:"babelrc",level:4},{value:"CI/CD Integration",id:"cicd-integration",level:2},{value:"build.xml",id:"buildxml",level:3},{value:"package.json",id:"packagejson",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-delorean"},"\ud83d\udce6 delorean"),(0,o.kt)("p",null,"ECMAScript transpilation layer for Sencha CMD / Ext JS."),(0,o.kt)("p",null,"Allows for using modern ECMAScript in your source code. Will transpile to ES versions Sencha CMD and its baked in\nClosure Compiler understands."),(0,o.kt)("p",null,"Makes it possible to use "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the nullish coalescing operator"),(0,o.kt)("li",{parentName:"ul"},"the optional chaining operator "),(0,o.kt)("li",{parentName:"ul"},"destructuring assignment syntax ")),(0,o.kt)("p",null,"without breaking builds created with Sencha CMD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const foo = null ?? "default string";\n\nconst fn = ([x, y, z]) => ({x, y, z});\n\nconst adventurer = {\n    name: "Alice",\n    cat: {\n        name: "Dinah"\n    }\n};\n\nconst dogName = adventurer.dog?.name;\n')),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install ",(0,o.kt)("strong",{parentName:"p"},"@coon-js/delorean")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save-dev @coon-js/delorean\n")),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@coon-js/delorean")," is an npm tool that provides an additional transpilation layer on top of Sencha CMD with the help of\n",(0,o.kt)("a",{parentName:"p",href:"httpy://babel.dev"},(0,o.kt)("strong",{parentName:"a"},"Babel")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/coon-js/delorean/main/delorean_pipeline.png",alt:null})),(0,o.kt)("p",null,"For making this work, ",(0,o.kt)("strong",{parentName:"p"},"delorean")," alters the project file of the package or application and redirects source-roots to the\nfiles that were processed and transpiled by Babel. This allows for using any JavaScript language feature in the project\ncode (even class syntax is now possible): With the default configuration of ",(0,o.kt)("strong",{parentName:"p"},"delorean"),", it will end up as ES5 code."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@thorstensuckow/sencha-ext-js-beyond-es5-a0382916b7a6"},"detailed blog post")," available\nthat explains the motivation, the purpose and the internal functionality of this tool for further reference."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx delorean \n")),(0,o.kt)("p",null,"will show the help-screen of ",(0,o.kt)("strong",{parentName:"p"},"delorean"),"."),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx delorean -p\n")),(0,o.kt)("p",null,"This will add a ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},".deloreanrc.json")," to the root-directory of the package that is using\n",(0,o.kt)("strong",{parentName:"p"},"@coon-js/delorean"),"."),(0,o.kt)("p",null,"Transpiled source files will be available in the ",(0,o.kt)("inlineCode",{parentName:"p"},".deloreanbuild"),"-folder found in the project's root. Your\n",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," will contain updated information regarding source folders (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"classpath"),", see ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),"),\nwhich will now point to `.deloreanbuild:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  "classpath": [\n-            "${package.dir}/src",\n-            "${package.dir}/${toolkit.name}/src"\n+            "${package.dir}/.deloreanbuild/src",\n+            "${package.dir}/.deloreanbuild/${toolkit.name}/src"\n         ],\n         "overrides": [\n-            "${package.dir}/overrides",\n-            "${package.dir}/${toolkit.name}/overrides"\n+            "${package.dir}/.deloreanbuild/overrides",\n+            "${package.dir}/.deloreanbuild/${toolkit.name}/overrides"\n         ],\n')),(0,o.kt)("p",null,"Subsequent ",(0,o.kt)("strong",{parentName:"p"},"Sencha CMD")," build processes will consume the transpiled sources found in this directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx delorean -r\n")),(0,o.kt)("p",null,"will revert the changes made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "classpath": [\n      "${package.dir}/src",\n      "${package.dir}/${toolkit.name}/src"\n  ],\n  "overrides": [\n      "${package.dir}/overrides",\n      "${package.dir}/${toolkit.name}/overrides"\n  ]\n')),(0,o.kt)("h2",{id:"command-line-options"},"Command Line Options"),(0,o.kt)("h3",{id:"--prepare--p"},(0,o.kt)("inlineCode",{parentName:"h3"},"--prepare, -p")),(0,o.kt)("p",null,"Prepares the ",(0,o.kt)("inlineCode",{parentName:"p"},".deloreanbuild")," folder, adds transpiled sources to it and update the project file so that particular entries\npoint to ",(0,o.kt)("strong",{parentName:"p"},"this")," folder as the sources root (see ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),")."),(0,o.kt)("h3",{id:"--revert--r"},(0,o.kt)("inlineCode",{parentName:"h3"},"--revert, -r")),(0,o.kt)("p",null,"Reverts the changes made to the configuration files."),(0,o.kt)("h3",{id:"--help--h"},(0,o.kt)("inlineCode",{parentName:"h3"},"--help, -h")),(0,o.kt)("p",null,"Show the ",(0,o.kt)("strong",{parentName:"p"},"help")," screen."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"deloreanrcjson"},(0,o.kt)("inlineCode",{parentName:"h4"},".deloreanrc.json")),(0,o.kt)("p",null,"The configuration file required by ",(0,o.kt)("strong",{parentName:"p"},"delorean"),".\nContains options for setting JSON-keys available with Sencha's Ext JS ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," that should be used\nfor determining the JavaScript-source files for transpiling."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "map" : [\n      "sencha.classpath",\n      "sencha.overrides",\n      "classpath",\n      "overrides"\n    ],\n    "toolkits": [\n      "modern", "classic"\n    ],\n    "build": [\n      "desktop", "shared"\n    ]\n}\n')),(0,o.kt)("h4",{id:"map"},(0,o.kt)("inlineCode",{parentName:"h4"},"map")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array"))),(0,o.kt)("p",null,"Holds all the JSON-keys that should be considered when collecting source-directories for transpiling. Values containing\ntemplate-strings will be properly considered, such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${package.dir}/src")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${toolkit.name}/src")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/${build.id}/overrides"))),(0,o.kt)("h4",{id:"toolkits"},(0,o.kt)("inlineCode",{parentName:"h4"},"toolkits")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array"))),(0,o.kt)("p",null,"Holds the values that should be used when evaluating strings containing templates, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"${toolkit.name}/src"),".\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"toolkits")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},'["modern", "classic"]'),", the directories ",(0,o.kt)("inlineCode",{parentName:"p"},"modern/src")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"classic/src")," will be considered\nwhen collecting source files for transpiling."),(0,o.kt)("h4",{id:"build"},(0,o.kt)("inlineCode",{parentName:"h4"},"build")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array"))),(0,o.kt)("p",null,"Holds the values that should be used when evaluating strings containing templates, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"app/${build.id}/overrides"),".\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},'["desktop", "shared"]'),", the directories ",(0,o.kt)("inlineCode",{parentName:"p"},"app/desktop/overrides")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app/shared/overrides")," will be considered\nwhen collecting source files for transpiling."),(0,o.kt)("h4",{id:"babelrc"},(0,o.kt)("inlineCode",{parentName:"h4"},".babelrc")),(0,o.kt)("p",null,"The configuration file required by ",(0,o.kt)("strong",{parentName:"p"},"Babel"),"\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," is the configuration file for ",(0,o.kt)("strong",{parentName:"p"},"Babel")," and has default options known to\nwork with Sencha Ext JS projects >= 7.4. Adjust to your needs. See ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"the documentation"),"\nfor an exhaustive list of configuration options."),(0,o.kt)("h2",{id:"cicd-integration"},"CI/CD Integration"),(0,o.kt)("p",null,"The two commands are easily integrated with CI/CD pipelines commonly used with Sencha Ext JS projects.\nYou can automate transpiling by configuring either the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.xml")," of a Sencha package or a Sencha app, or by adding additional scripts to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h3",{id:"buildxml"},"build.xml"),(0,o.kt)("p",null,"This file is available with any package or app that is created with Sencha Ext JS. It provides a place for adding options and hooks for the Ant tool used with Sencha CMD and allows for configuring -before-build /-after-build targets (amongst others). You can make use of delorean by configuring the targets like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<target name="-before-build">\n    <exec executable="cmd">\n        <arg line="/c npx delorean -p"/>\n    </exec>\n</target>\n\n<target name="-after-build">\n    <exec executable="cmd">\n        <arg line="/c npx delorean -r"/>\n    </exec>\n</target>\n')),(0,o.kt)("p",null,"This will run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx delorean -p")," before Sencha CMD builds the project, and revert all project specific changes once the build completes by invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"npx delorean -r"),"."),(0,o.kt)("h3",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"If you already have a build script in your package.json that calls Sencha CMD, wrap the build command with calls to ",(0,o.kt)("strong",{parentName:"p"},"delorean"),". Here\u2019s an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": [\n    "build": "npx delorean -p && npm run senchabuild && npx delorean -r",\n    "senchabuild": "npm run clean && cross-env webpack --env.profile=desktop --env.environment=production --env.treeshake=yes --env.cmdopts=--uses"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);