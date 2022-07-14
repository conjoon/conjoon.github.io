"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[2236],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8418:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"servicelocator",title:"Using the Service Locator",description:"Registering services and using the Service Locator",slug:"/advanced/servicelocator"},c=void 0,l={unversionedId:"guides/servicelocator",id:"guides/servicelocator",title:"Using the Service Locator",description:"Registering services and using the Service Locator",source:"@site/docs/guides/servicelocator.md",sourceDirName:"guides",slug:"/advanced/servicelocator",permalink:"/docs/advanced/servicelocator",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/guides/servicelocator.md",tags:[],version:"current",frontMatter:{id:"servicelocator",title:"Using the Service Locator",description:"Registering services and using the Service Locator",slug:"/advanced/servicelocator"},sidebar:"docs",previous:{title:"Configuration Details",permalink:"/docs/advanced/configurationdetails"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},p={},d=[{value:"What is a Service Locator (and why)",id:"what-is-a-service-locator-and-why",level:2},{value:"Simple use case: An <code>ImageService</code>",id:"simple-use-case-an-imageservice",level:2},{value:"Configuring Services",id:"configuring-services",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide focuses on details of the configuration options available when using ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.app.Application")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.js"),"-package; namely the services-configuration option that lets you define services that can be queried using ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.ServiceLocator"),", providing a central registry for concrete classes mapped to abstracts."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"With ",(0,i.kt)("strong",{parentName:"p"},"conjoon"),", you are able to configure services with the help of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/conjoon.conf.json#services"},"application configuration"),". This guide gives some details on when to use services, and how its done."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide originates from the blog article ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@thorstensuckow/creating-ext-js-applications-with-coon-js-part-4-using-the-service-locator-ce6bc2548352"},"Creating Ext JS applications with coon.js \u2014 Part 4: Registering services and using the Service Locator"),"."))),(0,i.kt)("h2",{id:"what-is-a-service-locator-and-why"},"What is a Service Locator (and why)"),(0,i.kt)("p",null,"If you're not familiar with the concept of Service Locators, Martin Fowler has a very good introduction to this design pattern over ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/injection.html"},"at his blog"),"."),(0,i.kt)("p",null,"In Short, a Service Locator allows for separating large sections of a software. It represents a central registry that is known by every section in the software. Decoupled and unaware of each other, those sections are still able to use one and the same functionality during runtime by querying the Service Locator for concrete implementations of abstracts which describe their required functionality."),(0,i.kt)("p",null,"The functionality of a Service Locator in a nutshell: Modules in a software that share no links in between them, can still use the same functionality by using a Service Locator: A central registry providing concrete instances of abstracts."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/400/1*vdzilmvH5g5BPHhxq6MBbQ.png",alt:null})),(0,i.kt)("p",{parentName:"div"},"The functionality of a Service Locator in a nutshell: Modules in a software that share no links in between them, can still use the same functionality by using a Service Locator: A central registry providing concrete instances of abstracts."))),(0,i.kt)("h2",{id:"simple-use-case-an-imageservice"},"Simple use case: An ",(0,i.kt)("inlineCode",{parentName:"h2"},"ImageService")),(0,i.kt)("p",null,"Let's assume that we have various modules in our application: An ",(0,i.kt)("strong",{parentName:"p"},"email module"),", an ",(0,i.kt)("strong",{parentName:"p"},"address book")," and a ",(0,i.kt)("strong",{parentName:"p"},"SignIn-Manager"),'. Each module has the functionality to show an image that is associated with a person - a profile picture. Now, each module understands the entity "person" in a different way:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the email module, persons are identified by the information found in the from-header"),(0,i.kt)("li",{parentName:"ul"},"The address book identifies a person by contact-information stored in various fields: firstname, lastname, address and so on. Of course, an address book's user-entry also has an email address."),(0,i.kt)("li",{parentName:"ul"},'The SignIn-Manager identifies a person (a "user") by an username and a password. For our use-case, the username must be the user\'s email-address')),(0,i.kt)("p",null,'So while all modules are aware of an entity representing a "person", each module models this entity in a different way. However, each module requires the functionality to show a profile picture associated with a person.\nOf help is a common identifier that is usually unique for a person - the email address.\nThe modules do not know where a profile picture for a person comes from. What they do know is\na profile picture can be uniquely associated with an email-address (1:1)\nhow to render a profile picture on the screen\nthat a Service Locator exists for querying services'),(0,i.kt)("p",null,"The common functionality for retrieving image data associated with an email address is given by the following interface:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/400/1*00C7YHORdIUpE0VIdsyY3g.png",alt:null})),(0,i.kt)("p",{parentName:"div"},"The interface ImageService provides a contract for retrieving image data: The public method getImage() returns an object providing arbitrary key/value-pairs representing image-information (src, various attributes such as height, width\u2026) when fed with resolvable search criteria."))),(0,i.kt)("p",null,"The interface ImageService provides a contract for retrieving image data: The public method ",(0,i.kt)("inlineCode",{parentName:"p"},"getImage()")," returns an object providing arbitrary key/value-pairs representing image-information (",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", various attributes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),"\u2026) when fed with resolvable search criteria.Using JavaScript and coon.js, the implementation of a Service Locator is toned down compared to strongly typed languages, such as Java. It follows the same purpose however, and implementing APIs can add or remove abstractions and type checking as they like.\nFor our purpose, the final implementation in each module would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const criteria = {emailAddress: "user@domain.com"};\nreturn coon.core.ServiceLocator\n        .resolve("ImageService")\n        .getImage(criteria);\n')),(0,i.kt)("p",null,"Our search criteria is an object the ImageService understands, and we expect the coon.core.ServiceLocator to correctly resolve from ImageService to a concrete instance implementing this interface, properly responding to our API-calls when requesting image data.\nThe question that remains is: How do we configure the Service Locator so that it resolves to a concrete instance for a given abstract - in our case, a concrete of ImageService?"),(0,i.kt)("h2",{id:"configuring-services"},"Configuring Services"),(0,i.kt)("p",null,"Without the help of a DI Container, the scaffolding of services is done in the application configuration file - mapping class names of abstracts to their concrete representants; building up on the previous article about configuration of application instances, you might remember similar approaches regarding plugins, where class names of plugins are specified that get later on created during runtime. Thus, we are now introducing the services property for the application configuration file.\nThe following code block is part of an application configuration. The services-key denotes the section where abstracts are mapped to concretes - along with additional arguments that will be passed to the constructor of the service. Each service defined in here is treated as a shared instance - that means, for all modules across the application, the ServiceLocator will return one and the same instance of this class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"services": {\n    "coon.core.service.UserImageService": {\n        "xclass": "coon.core.service.GravatarService",\n        "args":   [{\n            "parameters" :  {"d":  "blank"}\n        }]\n    }\n}\n')),(0,i.kt)("p",null,"In the given example, the application registers coon.core.service.GravatarService - a specific of ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.service.Service")," for abstracts of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.service.UserImageService"),". Whenever the ServiceLocator needs to resolve coon.core.service.UserImageService  , one and the same instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"coon.core.service.GravatarService")," is returned - which was initially created with the constructor arguments ",(0,i.kt)("inlineCode",{parentName:"p"},'{parameters:{d:"blank"}}')," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// registering the GravatarService with the ServiceLocator\ncoon.service.ServiceLocator.register(\n    "coon.core.service.UserImageService",\n    Ext.create(\n        "coon.core.service.GravatarService",\n        {parameters:{d:"blank"}}\n    )\n);\n// later on, the GravatarService is returned for calls to:\nconst imgService = coon.core.ServiceLocator.resolve(\n    "coon.core.service.UserImageService"\n);\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Disadvantages of using Service  Locators"),(0,i.kt)("p",null,"Our code must consider the fact that a service is missing. As a possible solution, the ServiceLocator could provide a concrete default (a ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/specialCase.html"},'"Special Case"'),") of the abstract, where applicabable. On another note, while we can guarantee that services resolved to specific abstracts are of the type of this abstract, the API of those services might not respond to our queries in a way the requesting API can handle the responses properly: Services might become very fine granular with their responses. This could lead to over engineering those services when considering various use cases (our ImageService, for example, might have to provide various binary formats for requested images, or none at all - the src-attribute of an HTML img-tag accepts an URL-string as well as base64-encoded data urls in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"data:[<mediatype>][;base64],<data>"),").")))}u.isMDXComponent=!0}}]);