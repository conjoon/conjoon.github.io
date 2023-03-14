"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[7498],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),A=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=A(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=A(a),m=o,d=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var A=2;A<r;A++)i[A]=a[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},796:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return A},toc:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"conjoon 1.1.0",authors:["ThorstenSuckow"],tags:["update","minor release","feature","local mail accounts"]},p=void 0,A={permalink:"/blog/2023/03/14/1.1.0-release",editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/blog/2023-03-14-1.1.0-release/index.md",source:"@site/blog/2023-03-14-1.1.0-release/index.md",title:"conjoon 1.1.0",description:"I'm happy to announce conjoon 1.1.0, a feature release that brings a lot of qol-improvements, bug fixes and a major feature to conjoon.",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"minor release",permalink:"/blog/tags/minor-release"},{label:"feature",permalink:"/blog/tags/feature"},{label:"local mail accounts",permalink:"/blog/tags/local-mail-accounts"}],readingTime:3.04,truncated:!1,authors:[{name:"Thorsten Suckow-Homberg",title:"Senior Software Developer & Trainer at eyeworkers GmbH, Germany",url:"http://twitter.com/ThorstenSuckow",email:"thorsten@suckow-homberg.de",twitter:"ThorstenSuckow",imageURL:"https://pbs.twimg.com/profile_images/1521112762902011904/rrKSXgUq_400x400.jpg",key:"ThorstenSuckow"}],frontMatter:{title:"conjoon 1.1.0",authors:["ThorstenSuckow"],tags:["update","minor release","feature","local mail accounts"]},nextItem:{title:"conjoon 1.0.4",permalink:"/blog/2022/12/17/1.0.4-release"}},s={authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"<strong>extjs-app-localmailaccount</strong>",id:"extjs-app-localmailaccount",level:3},{value:"Enabling extjs-app-localmailaccount - Frontend:",id:"enabling-extjs-app-localmailaccount---frontend",level:4},{value:"Enabling extjs-app-localmailaccount - Backend:",id:"enabling-extjs-app-localmailaccount---backend",level:4},{value:"Supporting UI-State-management",id:"supporting-ui-state-management",level:3},{value:"Other changes",id:"other-changes",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I'm happy to announce ",(0,r.kt)("strong",{parentName:"p"},"conjoon 1.1.0"),", a feature release that brings a lot of qol-improvements, bug fixes and a major feature to ",(0,r.kt)("strong",{parentName:"p"},"conjoon"),"."),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("h3",{id:"extjs-app-localmailaccount"},(0,r.kt)("strong",{parentName:"h3"},"extjs-app-localmailaccount")),(0,r.kt)("p",null,"With the new authentication package ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/packages/@conjoon/extjs-app-localmailaccount"},(0,r.kt)("strong",{parentName:"a"},"extjs-app-localmailaccount")),", you're now able to store multiple Email-Accounts directly on your computer. While the first major release of ",(0,r.kt)("strong",{parentName:"p"},"conjoon")," came bundled with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/packages/@conjoon/extjs-app-imapuser"},(0,r.kt)("strong",{parentName:"a"},"extjs-app-imapuser")),", an auth-package for authorizing against a single IMAP account (that was in particularly developed for free email hosters), this package now focuses on custom installations where users maintain their own instances of ",(0,r.kt)("strong",{parentName:"p"},"conjoon"),"."),(0,r.kt)("h4",{id:"enabling-extjs-app-localmailaccount---frontend"},"Enabling extjs-app-localmailaccount - Frontend:"),(0,r.kt)("p",null,"The package comes bundled with ",(0,r.kt)("strong",{parentName:"p"},"conjoon"),", so there's nothing left to do for you except for enabling the package. Use the latest version of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/misc/@conjoon/create-conjoon"},(0,r.kt)("strong",{parentName:"a"},"create-conjoon"))," to ease the installation process - it allows you to copy an ",(0,r.kt)("strong",{parentName:"p"},"official release")," to the directory of your previous installation (make sure you read the documentation before you overwrite the directory contents, or if you'd rather get a dev environment for ",(0,r.kt)("strong",{parentName:"p"},"conjoon")," up and running)."),(0,r.kt)("p",null,"Once you have updated, open ",(0,r.kt)("a",{parentName:"p",href:"/docs/conjoon.conf.json"},(0,r.kt)("inlineCode",{parentName:"a"},"conjoon.conf.json")),", then look for the section where ",(0,r.kt)("inlineCode",{parentName:"p"},"extjs-app-imapuser")," is configured. Add a property named ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," (if not already existing) and set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extjs-app-imapuser": {\n        "disabled": true\n    }\n}\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"extjs-app-localmailaccount"),", set the property to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extjs-app-localmailaccount": {\n        "disabled": false\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"missing configuration for extjs-app-localmailaccount")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you have no ",(0,r.kt)("inlineCode",{parentName:"p"},"extjs-app-localmailaccount")," existing with your ",(0,r.kt)("inlineCode",{parentName:"p"},"conjoon.conf.json"),",\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/packages/@conjoon/extjs-app-localmailaccount#what-goes-into-an-extjs-app-localmailaccount-configuration"},(0,r.kt)("strong",{parentName:"a"},"documentation"))," and utilize the default configuration coming with the package."))),(0,r.kt)("p",null,"Once everything is set configured, restarting your instance of ",(0,r.kt)("strong",{parentName:"p"},"conjoon")," should now directly boot to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MailDesktopView"),". A new button will be available in its toolbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8406).Z,width:"1075",height:"138"})),(0,r.kt)("p",null,"Clicking it will open up the ",(0,r.kt)("inlineCode",{parentName:"p"},"MailAccountWizard")," that lets you choose from a set of pre-configured accounts: "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1937).Z,width:"524",height:"657"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also apply custom mail server information by scrolling down the list and pick the ",(0,r.kt)("inlineCode",{parentName:"p"},'"...other IMAP account"'),"-entry."))),(0,r.kt)("p",null,"Once you have provided the required details, the Email Account will be stored in the ",(0,r.kt)("strong",{parentName:"p"},"Local Storage")," of your browser. It is always editable afterwards by selecting the node prepresenting the Email Account from the ",(0,r.kt)("inlineCode",{parentName:"p"},"MailFolderTree")," on the left side of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MailDesktopView"),": "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4138).Z,width:"829",height:"740"})),(0,r.kt)("h4",{id:"enabling-extjs-app-localmailaccount---backend"},"Enabling extjs-app-localmailaccount - Backend:"),(0,r.kt)("p",null,"Please make sure you take a look at the updates that came with the available backends, namely ",(0,r.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email#configureapi"},(0,r.kt)("strong",{parentName:"a"},"lumen-app-email"))," - you need to update to the latest version to make sure the updated client can properly communicate with the backend.\nMake sure you apply the proper api-configuration to your backend instance.\nUpgrading to a new version of ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email")," will also update to the latest version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conjoon/php-lib-conjoon"},(0,r.kt)("strong",{parentName:"a"},"php-lib-conjoon")),". Needless to say, ",(0,r.kt)("strong",{parentName:"p"},"lumen-app-email")," is fully backwards compatible."),(0,r.kt)("h3",{id:"supporting-ui-state-management"},"Supporting UI-State-management"),(0,r.kt)("p",null,"I have added support for saving the state of the UI so you do not have to expand/collapse various views once you re-enter the application. This is a small qol-improvement for now. The initial support for this opens the door for more improvements in this regard."),(0,r.kt)("h2",{id:"other-changes"},"Other changes"),(0,r.kt)("p",null,"Other notable changes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"blocked bg-images do not trigger external content warning ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/284"},"conjoon/extjs-app-webmail#284")),(0,r.kt)("li",{parentName:"ul"},"replying to email fails after sorting a large grid ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/270"},"conjoon/extjs-app-webmail#270")),(0,r.kt)("li",{parentName:"ul"},"onMailDesktopViewShow's internal callback cancels events ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/283"},"conjoon/extjs-app-webmail#283")),(0,r.kt)("li",{parentName:"ul"},"opening a message with erroneous key-fragments triggers error ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/282"},"conjoon/extjs-app-webmail#282"),"\nonMailAccountActiveChange triggers error if editor with error state is opened ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/274"},"conjoon/extjs-app-webmail#274")),(0,r.kt)("li",{parentName:"ul"},"child-folders not loaded when MailDesktopView is not opened via route ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/256"},"conjoon/extjs-app-webmail#256")),(0,r.kt)("li",{parentName:"ul"},"icons for mail folder missing upon first expand ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/281"},"conjoon/extjs-app-webmail#281")),(0,r.kt)("li",{parentName:"ul"},"error thrown when MailAccountWizard is destroyed and configs are loaded ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/280"},"conjoon/extjs-app-webmail#280")),(0,r.kt)("li",{parentName:"ul"},"reading pane button enabled when MailAccountWizard is active ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/278"},"conjoon/extjs-app-webmail#278")),(0,r.kt)("li",{parentName:"ul"},"protocol handler for mailto does not consider instance's pathname ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/268"},"conjoon/extjs-app-webmail#268")),(0,r.kt)("li",{parentName:"ul"},"button for toggling gridlist gets activated when MailAccountWizard is shown ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/conjoon/extjs-app-webmail/issues/277"},"conjoon/extjs-app-webmail#277"))))}m.isMDXComponent=!0},4138:function(e,t,a){t.Z=a.p+"assets/images/account-settings-770152a523e54b0b3f8fb8ac9c88502e.png"},8406:function(e,t){t.Z="data:image/png;base64,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"},1937:function(e,t,a){t.Z=a.p+"assets/images/wizard-step1-9b7377e30e8a649cdd82d2ba8c50853a.png"}}]);