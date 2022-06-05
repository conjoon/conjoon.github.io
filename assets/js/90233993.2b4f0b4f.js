"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[1776],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=g;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9992:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],r={id:"configurationdetails",title:"Configuration Details",description:"Configuration Details and defining Plugins"},p=void 0,s={unversionedId:"guides/configurationdetails",id:"guides/configurationdetails",title:"Configuration Details",description:"Configuration Details and defining Plugins",source:"@site/docs/guides/configurationdetails.md",sourceDirName:"guides",slug:"/guides/configurationdetails",permalink:"/docs/guides/configurationdetails",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/guides/configurationdetails.md",tags:[],version:"current",frontMatter:{id:"configurationdetails",title:"Configuration Details",description:"Configuration Details and defining Plugins"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Using the Service Locator",permalink:"/docs/guides/servicelocator"}},c={},u=[{value:"Environment-specific configuration files",id:"environment-specific-configuration-files",level:2},{value:"Layout of an application-configuration file",id:"layout-of-an-application-configuration-file",level:3},{value:"Sections considered within an application configuration file",id:"sections-considered-within-an-application-configuration-file",level:3},{value:"Dynamic Package  Loading",id:"dynamic-package-loading",level:2},{value:"Package Configurations",id:"package-configurations",level:2},{value:"Resolving to the application&#39;s resource-path",id:"resolving-to-the-applications-resource-path",level:3},{value:"Accessing Package Configuration during  runtime",id:"accessing-package-configuration-during--runtime",level:3},{value:"Configuring Plugins for PackageControllers",id:"configuring-plugins-for-packagecontrollers",level:2},{value:"Using the package&#39;s name to automatically set up the plugin",id:"using-the-packages-name-to-automatically-set-up-the-plugin",level:3},{value:"Passing arguments to a controller plugin&#39;s constructor",id:"passing-arguments-to-a-controller-plugins-constructor",level:3},{value:"Configuring Plugins for the Application",id:"configuring-plugins-for-the-application",level:2},{value:"Configuring Component Plugins",id:"configuring-component-plugins",level:2},{value:"Advise on using plugins",id:"advise-on-using-plugins",level:2},{value:"Best practices",id:"best-practices",level:2}],g={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),", you are able to configure application behavior with the help of\nits ",(0,o.kt)("a",{parentName:"p",href:"/docs/conjoon.conf.json"},"configuration file"),". This guide sheds some light on how to configure controller-,\napplication- and component-plugins."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"conjoon")," is essentially a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/coon-js"},"coon.js")),'-application. Whenever we speak of "a ',(0,o.kt)("strong",{parentName:"p"},"coon.js"),'\n-application" in this guide, we also mean ',(0,o.kt)("strong",{parentName:"p"},"conjoon"),"."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide originates from the blog\narticle ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@thorstensuckow/creating-ext-js-applications-with-coon-js-part-3-configuration-details-and-defining-plugins-a9e8e99b280a"},"Creating Ext JS applications with coon.js \u2014 Part 3: Configuration Details and defining Plugins"),"\n."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"environment-specific-configuration-files"},"Environment-specific configuration files"),(0,o.kt)("p",null,"Application and Package configuration files will be looked up in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),"-path, containing the folder that was\nconfigured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"coon-js"),"-section of the application's ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app.json"',title:'"app.json"'},'{\n    "production": {\n        "coon-js" : {\n            "resourcePath": "files",\n            "env": "prod"\n        }\n    },\n    "development": {\n        "coon-js" : {\n            "resourcePath": "files",\n            "env": "dev"\n        }\n    }    \n}\n')),(0,o.kt)("p",null,"Depending on the build you are using (in this case either the production- or the development-build), configuration-files\nwill be looked up in ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/files")," (note that the resources-folder is the folder-name/path returned by a call\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext.getResourcePath()"),")."),(0,o.kt)("p",null,"A coon.js-Application (i.e. ",(0,o.kt)("strong",{parentName:"p"},"conjoon"),") will first query configuration files for the build that is being used (by using\nthe pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"[application_name].[coon-js.env].conf.json"),"), and if that file could not be loaded and results in a HTTP\nerror-code, loading will fall back to ",(0,o.kt)("inlineCode",{parentName:"p"},"[application_name].conf.json"),". In short, environment-specific configuration files\nwill always be given precedence over the default-configuration files."),(0,o.kt)("p",null,"For using specific package configuration files, see the section\nabout ",(0,o.kt)("a",{parentName:"p",href:"#dynamic-package-loading"},"Dynamic Package Loading"),"."),(0,o.kt)("h3",{id:"layout-of-an-application-configuration-file"},"Layout of an application-configuration file"),(0,o.kt)("p",null,"An application's configuration file ",(0,o.kt)("strong",{parentName:"p"},"MUST")," contain valid JSON. The configuration needs to be an object keyed\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"[application_name].config"),". For an application with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"conjoon"),", the structure needs to be initially laid\nout as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conjoon": {\n  }\n}\n')),(0,o.kt)("p",null,"Note how the configuration has to be introduced with the name of the application the configuration is used in, in this\ncase ",(0,o.kt)("inlineCode",{parentName:"p"},"conjoon"),"\n."),(0,o.kt)("h3",{id:"sections-considered-within-an-application-configuration-file"},"Sections considered within an application configuration file"),(0,o.kt)("p",null,"The following sections are considered when reading out a coon.js-application configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application"),": runtime related configuration for the application. Will be available\nvia ",(0,o.kt)("inlineCode",{parentName:"li"},"coon.core.ConfigManager.get([application_name]"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugins"),": Controller-/Component-Plugins that need to be registered for various controllers and/or components"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages"),": Configuration for packages used by the application. Can also be used to disable/enable packages in a given\nbuild")),(0,o.kt)("h2",{id:"dynamic-package-loading"},"Dynamic Package  Loading"),(0,o.kt)("p",null,"For dynamic package loading, ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," queries ",(0,o.kt)("inlineCode",{parentName:"p"},"Ext.manifest")," for packages which are part of the used-configuration in\nan application's ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),". Those packages need to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"coon-js")," section configured with a package-entry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "autoLoad": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"autoLoad")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", these packages will be loaded by this application implementation dynamically upon\nstartup."),(0,o.kt)("p",null,"If configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerController"),"-options set to true, this package's ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageController")," - if any - will be\nregistered with the application, and during startup, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHook"),"-method is called when the application is ready\nto settle into its ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()"),"-method. If any of the registered ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageControllers")," ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHook()"),"-methods\nreturn ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the application's ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," will not be called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "autoLoad": {\n        "registerController": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"package-configurations"},"Package Configurations"),(0,o.kt)("p",null,"You can add individual configuration files for your packages - those files must follow the naming\nscheme ",(0,o.kt)("inlineCode",{parentName:"p"},"[package_name].conf.json"),", and it's generally a good idea to save them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),"-folder as described in\nthe previous section about the ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.js"),"-environment variable, since this folder can serve as the root for all\nconfiguration files for your application."),(0,o.kt)("p",null,"Package configuration files will be considered if a package has the following section set in its ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", or\nglobally in the application configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "config": {}\n    }\n  }\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "config": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "config": "filename"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"While the first two entries will fall back to file names given the pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"[package_name].conf.json"),", the last example\nwill define the file name explicitly."),(0,o.kt)("p",null,"Using specific configuration files for packages instead of placing the configuration itself in their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," can\nbe beneficial when applying larger configurations to packages."),(0,o.kt)("p",null,"By default, package configuration files will be looked up in the package's ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),"-folder. If an additional path is\nspecified, this path is interpreted and resolved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Resolving to the resource-path of the owning package:"',title:'"Resolving',to:!0,the:!0,"resource-path":!0,of:!0,owning:!0,'package:"':!0},'\n{\n    "autoLoad": {\n        "registerController": true\n    },\n    \n    "config": "extjs-app-webmail.conf.json"\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "autoLoad": {\n    "registerController": true\n  },\n  "config": "${package.resourcePath}/extjs-app-webmail.conf.json"\n}\n')),(0,o.kt)("h3",{id:"resolving-to-the-applications-resource-path"},"Resolving to the application's resource-path"),(0,o.kt)("p",null,"The following resolves\nto ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/packages/@conjoon/extjs-app-webmail#what-goes-into-an-extjs-app-webmail-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"resources/[coon-js.resourcePath]/extjs-app-webmail.conf.json")),"\n. In this case, configuration will be read out from the resources-folder of the application, not the package itself.\nThis spares developers the tedious task of looking up individual files throughout packages in the file system; it makes\nit possible to have all configuration centralized at one place, maintaining this one file with .gitignore, if necessary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "autoLoad": {\n        "registerController": true\n    },\n    "config": "${coon-js.resourcePath}/extjs-app-webmail.conf.json"\n}\n')),(0,o.kt)("p",null,"Package configuration files will completely overwrite configuration defined in the package.json-files of the owning\npackage."),(0,o.kt)("h3",{id:"accessing-package-configuration-during--runtime"},"Accessing Package Configuration during  runtime"),(0,o.kt)("p",null,"The configuration's data is registered with the ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.ConfigManager")," and can be queried by using calls\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.ConfigManager.get([package_name])"),"."),(0,o.kt)("h2",{id:"configuring-plugins-for-packagecontrollers"},"Configuring Plugins for PackageControllers"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.PackageControllers")," are application controllers that wire additional functionality into the ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.js"),"\n-application their used with, such as automizing routing or providing navigation options to their package's views."),(0,o.kt)("p",null,"They can have an arbitrary number of plugins of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.plugin.ControllerPlugin")," which are called by the\napplication during its preLaunchHook-process - which gets called prior to the application's launch-method."),(0,o.kt)("p",null,"Regardless of the state of the return-value of a PackageController's ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHook()"),", all registered plugins will be\nexecuted during the ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHookProcess"),", making sure one can add additional setup instructions prior to calling a\npackage controller's ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHook"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/400/1*T4vK3Qp2NYviCue9K9HcZw.png",alt:null})),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHookProcess()")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.Application")," will visit every configured controller plugin first, but\nonly calls each controller's ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchHook()")," until the first ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," is detected as a return value"))),(0,o.kt)("p",null,"For registering PluginControllers, either create them and add them to the PackageController manually by\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.PackageController#addPlugin()"),", or use the package's configuration."),(0,o.kt)("h3",{id:"using-the-packages-name-to-automatically-set-up-the-plugin"},"Using the package's name to automatically set up the plugin"),(0,o.kt)("p",null,"You can use the package-name to specify a single ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerPlugin")," out of this individual package. The plugin will then\nbe looked up in the specified package's app-folder given the naming\npattern ",(0,o.kt)("inlineCode",{parentName:"p"},"[package-namespace].app.plugin.ControllerPlugin"),"), or by specifying the fully qualified namespace (",(0,o.kt)("em",{parentName:"p"},"fqn"),") of\nthe `ControllerPlugins to load."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plug-cn_themeutil")," has the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.plugin.themeutil"),"; ",(0,o.kt)("strong",{parentName:"p"},"conjoon")," tries to\ncreate ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.plugin.themeutil.app.plugin.ControllerPlugin")," during application startup; the class must therefore be\ndefined and registered so the dependency can be properly resolved by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://sencha.com"},"Sencha Ext JS")),"  - this\nsimply means that you need to make sure that the defining package of the plugin is defined as a dependency for the\napplication itself, in either the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),"'s requires or uses-property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "config": {\n        "plugins": {\n          "controller": [\n            "plug-cn_themeutil"\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The following is the same as above, but this time we specify the ",(0,o.kt)("em",{parentName:"p"},"fqn")," of the\nplugin (",(0,o.kt)("inlineCode",{parentName:"p"},"coon.plugin.themeutil.app.plugin.ControllerPlugin"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "package": {\n      "config": {\n        "plugins": {\n          "controller": [\n            "coon.plugin.themeutil.app.plugin.ControllerPlugin"\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"passing-arguments-to-a-controller-plugins-constructor"},"Passing arguments to a controller plugin's constructor"),(0,o.kt)("p",null,"A controller plugin can also be configured with arguments that get applied to the constructor of the ControllerPlugin.\nFor specifying constructor arguments, the configuration for the controller plugin has to be an object with the\nkeys ",(0,o.kt)("inlineCode",{parentName:"p"},"xclass")," holding the ",(0,o.kt)("em",{parentName:"p"},"fqn")," of the controller plugin, and ",(0,o.kt)("inlineCode",{parentName:"p"},"args"),", which is an array of arguments that get passed to\nthe plugin's constructor."),(0,o.kt)("p",null,"In the following example, ",(0,o.kt)("inlineCode",{parentName:"p"},'{property: "value"}')," is passed as the first argument to the plugin's constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coon-js": {\n    "plugins": {\n      "controller": [\n        {\n          "xclass": "conjoon.plugin.ControllerPlugin",\n          "args": [\n            {\n              "property": "value"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Plugins for PackageControllers will only be registered if the ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageController")," itself is configured as such\nin the owning package's configuration (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"coon-js.package.controller"),").\nYou can add as many plugins as you'd like in the configuration, and mix and match package names with fqns of the\nControllerPlugins."),(0,o.kt)("h2",{id:"configuring-plugins-for-the-application"},"Configuring Plugins for the Application"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.js"),"-application can also be configured with plugins (read: application plugins). These plugins are loaded\nglobally into the application, and do not depend on PackageControllers per se."),(0,o.kt)("p",null,"The configuration of application plugins follows the same principles as configuring controller plugins when it comes to\nresolving dependencies, given either the package name the application plugin can be found in, or the fqn of the\napplication plugin."),(0,o.kt)("p",null,"There are two (obvious) differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When not using the fqn, application plugins will be looked up given the\npattern ",(0,o.kt)("inlineCode",{parentName:"li"},"[package_namespace].app.plugin.ApplicationPlugin")),(0,o.kt)("li",{parentName:"ul"},"application plugins must be configured in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/conjoon.conf.json#application"},"application configuration"),", namely\nin the ",(0,o.kt)("inlineCode",{parentName:"li"},"[application_name].plugins.application")," section")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"The following registers ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.plugin.themeutil.app.plugin.ApplicationPlugin")," as an application plugin for the owning\napplication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conjoon": {\n    "plugins": {\n      "application": [\n        "extjs-plug-themeutil"\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"configuring-component-plugins"},"Configuring Component Plugins"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"coon.js")," provides funtionality to specify component-plugins using both the application configuration or package\nconfigurations."),(0,o.kt)("p",null,"To properly resolve component plugins as dependencies, they need to be loaded by defining them as classes owned by\npackages (e.g. by specifying those packages in the ",(0,o.kt)("inlineCode",{parentName:"p"},"requires"),"- or ",(0,o.kt)("inlineCode",{parentName:"p"},"uses"),"-section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),")  - or in any other\nway so the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sencha.com/extjs/7.5.1/classic/Ext.Loader.html"},"Ext JS' ",(0,o.kt)("inlineCode",{parentName:"a"},"loader"))," is aware of them."),(0,o.kt)("p",null,"A component plugin configuration has the following key/value-pairs (and can be placed in either the application\nconfiguration or a package configuration):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cmp"),": A valid component query the application uses to look up the component for which this plugin should be\nregistered"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event"),": The name of the event that should be listened to for instantiating and registering the plugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pclass"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"fclass"),": The fqn for the plugin to use. If you are using a plugin that extends ",(0,o.kt)("inlineCode",{parentName:"li"},"Ext.plugin.Abstract"),",\nuse ",(0,o.kt)("inlineCode",{parentName:"li"},"pclass"),". If you are referencing a grid-feature (i.e. extending ",(0,o.kt)("inlineCode",{parentName:"li"},"Ext.grid.feature.Feature"),"), use ",(0,o.kt)("inlineCode",{parentName:"li"},"fclass")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),": An array of arguments that get passed to the constructor of the plugin")),(0,o.kt)("p",null,"Internally, the mixin ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.plugin.ComponentPluginMixin")," is used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.Application"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"coon.core.app.PackageController")," to manage component plugins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for specifying component plugins using the application configuration:"',title:'"Example',for:!0,specifying:!0,component:!0,plugins:!0,using:!0,the:!0,application:!0,'configuration:"':!0},'{\n  "conjoon": {\n    "plugins": {\n      "components": [\n        {\n          "cmp": "cn_navport-tbar",\n          "pclass": "conjoon.ModeSwitchPlugin",\n          "event": "beforerender",\n          "args": [\n            {\n              "defaultMode": "dark"\n            }\n          ]\n        },\n        {\n          "cmp": "cn_mail-mailmessagegrid",\n          "fclass": "conjoon.PreviewTextLazyLoad",\n          "event": "cn_init"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for specifying component plugins using a package configuration:"',title:'"Example',for:!0,specifying:!0,component:!0,plugins:!0,using:!0,a:!0,package:!0,'configuration:"':!0},'{\n  "coon-js": {\n    "package": {\n      "config": {\n        "plugins": {\n          "controller": [\n            "plug-cn_themeutil"\n          ],\n          "components": [\n            {\n              "cmp": "cn_navport-tbar",\n              "pclass": "conjoon.ModeSwitchPlugin",\n              "event": "beforerender",\n              "args": [\n                {\n                  "defaultMode": "dark"\n                }\n              ]\n            },\n            {\n              "cmp": "cn_mail-mailmessagegrid",\n              "fclass": "conjoon.PreviewTextLazyLoad",\n              "event": "cn_init"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"advise-on-using-plugins"},"Advise on using plugins"),(0,o.kt)("p",null,"Use Application Plugins when you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add optional functionality to an application")),(0,o.kt)("p",null,"Use Controller Plugins when you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add optional functionality to a package")),(0,o.kt)("p",null,"Use Component Plugins when you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add optional functionality to a specific component")),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("p",null,"It is recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages"),"-section of the application configuration to make sure configuration can be edited at a central place."),(0,o.kt)("p",null,"Specifying the packages-section in the application configuration file will make sure that packages configurations defined here ",(0,o.kt)("strong",{parentName:"p"},"completely overwrite")," the settings found in their original ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"Configuration of packages in the application configuration is the same as configuring packages in their associated ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", except for section keys used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for package configuration in the application configuration file:"',title:'"Example',for:!0,package:!0,configuration:!0,in:!0,the:!0,application:!0,'file:"':!0},'{\n    "conjoon": {\n        "packages" : {\n            "extjs-app-webmail" : {\n                "autoLoad": {\n                    "registerController": true\n                },\n                "config": "${coon-js.resourcePath}/mail.conf.json"\n            },\n            "extjs-app-imapuser": {\n                "autoLoad": {\n                    "registerController": true\n                },\n                "config": {\n                    "service": {\n                        "rest-imapuser": {\n                            "base": "https://rest-imapuser/api/v0"\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);