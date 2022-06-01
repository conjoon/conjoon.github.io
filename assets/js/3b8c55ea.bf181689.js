"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[217],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={id:"installation",title:"Installation",description:"Installing builds and building from scratch"},l="Installation",c={unversionedId:"installation",id:"installation",title:"Installation",description:"Installing builds and building from scratch",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/conjoon/conjoon/docs/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"Installing builds and building from scratch"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Configuration",permalink:"/docs/configuration"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Using an official Build",id:"using-an-official-build",level:2},{value:"Installing &amp; building from scratch",id:"installing--building-from-scratch",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Accessing Sencha&#39;s NPM Repository",id:"accessing-senchas-npm-repository",level:4},{value:"Installing the Dependencies",id:"installing-the-dependencies",level:3},{value:"Running the tests",id:"running-the-tests",level:3},{value:"Available Build Scripts",id:"available-build-scripts",level:2},{value:"Development Build w/ integrated webserver and mocked backend",id:"development-build-w-integrated-webserver-and-mocked-backend",level:5},{value:"Production Build",id:"production-build",level:5},{value:"Production Build with webserver for preview",id:"production-build-with-webserver-for-preview",level:5}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conjoon"),"`s infrastructure consists of ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/overview"},(0,o.kt)("strong",{parentName:"a"},"NPM")),"- and ",(0,o.kt)("a",{parentName:"p",href:"https://packagist.org/packages/conjoon/"},(0,o.kt)("strong",{parentName:"a"},"composer")),"-packages. We also provide ",(0,o.kt)("a",{parentName:"p",href:"/docs/backends/ddev-ms-email"},(0,o.kt)("strong",{parentName:"a"},"Docker/DDEV"))," images for pre-build ",(0,o.kt)("a",{parentName:"p",href:"/docs/backends/overview"},"backends"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide focuses on the installation of the web-client. For more information on the installation of one of the available backends, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"backends/overview"},"Backend Guide")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/#quick-start"},(0,o.kt)("strong",{parentName:"a"},"Quick Start"))," to get a build running in no time! \u23f1"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," version 16 or above (check your installed version with ",(0,o.kt)("inlineCode",{parentName:"p"},"node-v"),"). Multiple Node versions\ncan be managed with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm"),"."),(0,o.kt)("h2",{id:"using-an-official-build"},"Using an official Build"),(0,o.kt)("p",null,"Each release of ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," comes with an official build. Releases are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/conjoon/conjoon/releases/"},"GitHub project page"),". Builds are packed as zip-files and prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"conjoon.build"),", following the release-tag, e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"conjoon.build.1.2.3.zip"),"."),(0,o.kt)("p",null,"Download a release build and unzip the file (WinZip or 7-Zip on Microsoft Windows, ",(0,o.kt)("inlineCode",{parentName:"p"},"unzip conjoon.build.xxx.zip -d target-folder")," on Unix).\nSimply place the extracted contents in a directory that is publicly accessible on your webserver, and you're done."),(0,o.kt)("p",null,"Example: Your page can be accessed given the url ",(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain.com"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"document root")," is set to  ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/html/mydomain"),".\n",(0,o.kt)("strong",{parentName:"p"},"conjoon")," should be available at the address ",(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain.com/conjoon"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"md /var/www/html/mydomain/conjoon\nunzip conjoon.build.xxx.zip -d /var/www/html/mydomain/conjoon\n")),(0,o.kt)("h2",{id:"installing--building-from-scratch"},"Installing & building from scratch"),(0,o.kt)("p",null,"If you wish to create a build of ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," on your own, you can clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/conjoon/conjoon"},"repository")," and\nrun the build process on your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/conjoon/conjoon\ncd conjoon\n")),(0,o.kt)("p",null,"Your home directory now contains the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"conjoon")," with the repository contents. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We strive to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch stable. If you're looking for the most recent sources, you should use our ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"-branch."))),(0,o.kt)("h3",{id:"requirements-1"},"Requirements"),(0,o.kt)("p",null,"Now that you have a local copy of the repository, you need to install the (development-)dependencies. ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),"\nuses the ",(0,o.kt)("a",{parentName:"p",href:"https://sencha.com"},"Sencha Ext JS SDK")," and requires ",(0,o.kt)("a",{parentName:"p",href:"https://sencha.com"},"Sencha Ext JS")," version 7.4 or above."),(0,o.kt)("h4",{id:"accessing-senchas-npm-repository"},"Accessing Sencha's NPM Repository"),(0,o.kt)("p",null,"The Sencha NPM-repository is private and requires a registered user for downloading the Ext JS SDK. A registered user is either the owner of a commercial license of the SDK, or a user registered for a 30-days trial version of the framework (more info ",(0,o.kt)("a",{parentName:"p",href:"https://www.sencha.com/products/extjs/evaluate/"},"here"),"). To actually resolve the dependencies for ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"npm ci"),", you need to provide your Sencha NPM credentials during the process. "),(0,o.kt)("p",null,"Once you have your authentication credentials confirmed by Sencha, return to the cli and type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm login --registry=https://npm.sencha.com/ --scope=@sencha\n")),(0,o.kt)("p",null,"This will start the authentication process for the private NPM repository. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your email-address is your username when logging in, but you have to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," with two dots ",(0,o.kt)("inlineCode",{parentName:"p"},".."),".\nExample: ",(0,o.kt)("inlineCode",{parentName:"p"},"myname@domain.tld")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"myname..domain.tld"),"."))),(0,o.kt)("p",null,"Once signed in, an access token will be placed in your ",(0,o.kt)("inlineCode",{parentName:"p"},"npmrc")," file for future authentication against Sencha's NPM repository.\nYou have now registered ",(0,o.kt)("a",{parentName:"p",href:"https://npm.sencha.com"},"https://npm.sencha.com")," for packages with the scope ",(0,o.kt)("inlineCode",{parentName:"p"},"@sencha")," and can continue with installing the dependencies for ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),". "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on how to access the Sencha NPM Repository, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sencha.com/extjs/7.4.0/guides/using_systems/using_npm/npm_repo_access.html"},"Sencha's official guide"),"."))),(0,o.kt)("h3",{id:"installing-the-dependencies"},"Installing the Dependencies"),(0,o.kt)("p",null,"Following the above steps, return to the cloned respository in your home directory and start the install process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ~/conjoon\n$ npm ci --save-dev  \n")),(0,o.kt)("h3",{id:"running-the-tests"},"Running the tests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conjoon"),"`s frontend is tested with ",(0,o.kt)("a",{parentName:"p",href:"http://bryntum.com/products/siesta"},(0,o.kt)("strong",{parentName:"a"},"Siesta")),". The test browser can be fired up with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run test\n")),(0,o.kt)("h2",{id:"available-build-scripts"},"Available Build Scripts"),(0,o.kt)("p",null,"Once all dependencies were installed with the help of ",(0,o.kt)("strong",{parentName:"p"},"NPM"),", you can run various scripts that help you with the\ndevelopment of ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),"."),(0,o.kt)("h5",{id:"development-build-w-integrated-webserver-and-mocked-backend"},"Development Build w/ integrated webserver and mocked backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n")),(0,o.kt)("h5",{id:"production-build"},"Production Build"),(0,o.kt)("p",null,"A deployable build will be made available in ",(0,o.kt)("inlineCode",{parentName:"p"},"build/production/conjoon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build\n")),(0,o.kt)("h5",{id:"production-build-with-webserver-for-preview"},"Production Build with webserver for preview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build:preview\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you're done with installation, you can configure the client and its available packages.\nPlease refer to the chapter ",(0,o.kt)("a",{parentName:"p",href:"./configuration"},'"Configuration"')," for more information."))))}u.isMDXComponent=!0}}]);