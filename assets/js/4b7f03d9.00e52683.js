"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[3254,6011],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(o,".").concat(f)]||u[f]||c[f]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6961:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(6872),s=["components"],o={},d=void 0,p={type:"mdx",permalink:"/json-api/ext/relfield",source:"@site/src/pages/json-api/ext/relfield.md",frontMatter:{}},c=[],u={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.default,{mdxType:"PartialExample"}))}f.isMDXComponent=!0},6872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"relfield",title:"\ud83e\udde9 JSON:API relfield",slug:"relfield"},o=void 0,d={unversionedId:"rest-api/relfield",id:"rest-api/relfield",title:"\ud83e\udde9 JSON:API relfield",description:"This extension is currently in draft state.",source:"@site/docs/rest-api/relfield.md",sourceDirName:"rest-api",slug:"/rest-api/relfield",permalink:"/docs/rest-api/relfield",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/rest-api/relfield.md",tags:[],version:"current",frontMatter:{id:"relfield",title:"\ud83e\udde9 JSON:API relfield",slug:"relfield"},sidebar:"api",previous:{title:"\ud83d\udcde rest-api-email",permalink:"/docs/api/rest-api/@conjoon/rest-api-description/rest-api-email"},next:{title:"\ud83d\udce6 create-conjoon",permalink:"/docs/api/misc/@conjoon/create-conjoon"}},p={},c=[{value:"URI",id:"uri",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Example data for this document",id:"example-data-for-this-document",level:2},{value:"<code>article</code> Entity (type: <code>article</code>)",id:"article-entity-type-article",level:3},{value:"Sample Data",id:"sample-data",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Default fields for the <code>article</code> resource object",id:"default-fields-for-the-article-resource-object",level:4},{value:"Optional fields for the <code>article</code> resource object",id:"optional-fields-for-the-article-resource-object",level:4},{value:"Sparse Fieldsets with the JSON:API as per specification",id:"sparse-fieldsets-with-the-jsonapi-as-per-specification",level:2},{value:"Sparse Fieldsets with the <code>relfied</code>-extension",id:"sparse-fieldsets-with-the-relfied-extension",level:2},{value:"Additional fields",id:"additional-fields",level:3},{value:"Excluded fields",id:"excluded-fields",level:3},{value:"Wildcard Queries",id:"wildcard-queries",level:3},{value:"Processing",id:"processing",level:2},{value:"Compliance with base specifications for fieldsets",id:"compliance-with-base-specifications-for-fieldsets",level:3},{value:"Redundancy of fields",id:"redundancy-of-fields",level:3},{value:"Mutual exclusivity of <code>relfield:fields[TYPE]</code>- and <code>fields[TYPE]</code>-parameter",id:"mutual-exclusivity-of-relfieldfieldstype--and-fieldstype-parameter",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Inaccessible fields",id:"inaccessible-fields",level:4},{value:"Examples",id:"examples",level:2},{value:"<code>article</code> includes all default fields and the <code>version</code> field",id:"article-includes-all-default-fields-and-the-version-field",level:3},{value:"Excluding <code>text</code> and <code>teaser</code> from the list of default fields of an <code>article</code>",id:"excluding-text-and-teaser-from-the-list-of-default-fields-of-an-article",level:3},{value:"Using sparse fieldsets with this extension for a different <code>TYPE</code>",id:"using-sparse-fieldsets-with-this-extension-for-a-different-type",level:3},{value:"<code>400 Bad Request</code>: Using sparse fieldsets with this extension for the same <code>TYPE</code>",id:"400-bad-request-using-sparse-fieldsets-with-this-extension-for-the-same-type",level:3},{value:"<code>400 Bad Request</code>: Omitting prefixes with this extension for field values",id:"400-bad-request-omitting-prefixes-with-this-extension-for-field-values",level:3},{value:"Requesting fields with inaccessible fields excluded",id:"requesting-fields-with-inaccessible-fields-excluded",level:3},{value:"<code>403 Bad Request</code>: Requesting inaccessible fields",id:"403-bad-request-requesting-inaccessible-fields",level:3},{value:"Wildcard Queries",id:"wildcard-queries-1",level:3},{value:"Requesting all fields for an <code>article</code>",id:"requesting-all-fields-for-an-article",level:4},{value:"Requesting all fields for an <code>article</code>, excluding <code>version</code> and <code>teaser</code>",id:"requesting-all-fields-for-an-article-excluding-version-and-teaser",level:4},{value:"Similar API implementations",id:"similar-api-implementations",level:2}],u={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This extension is currently in ",(0,r.kt)("strong",{parentName:"p"},"draft")," state.\nWe encourage you to participate in finalising this extension by providing your feedback at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThorstenSuckow/relfield"},"extension's official\nrepository")))),(0,r.kt)("h1",{id:"relfield"},"relfield"),(0,r.kt)("p",null,"This extension provides query-syntax and -semantics for inclusion and exclusion of fields for requested resource objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Note: \nJSON:API defines itself to be always backwards compatible.For this reason, any mentioning of the JSON:API in this document won't refer to a specific version.\n\nThe following examples show unencoded [ and ] and : characters in query strings simply for readability. In practice, these characters must be percent-encoded, per the requirements in RFC 3986.\n")),(0,r.kt)("h2",{id:"uri"},"URI"),(0,r.kt)("p",null,"This extension has the URI ",(0,r.kt)("a",{parentName:"p",href:"https://conjoon.org/json-api/ext/relfield"},(0,r.kt)("inlineCode",{parentName:"a"},"https://conjoon.org/json-api/ext/relfield")),"."),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"This extension uses the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"relfield"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Note: JSON:API extensions can only introduce new document \nmembers using a reserved namespace as a prefix.\n")),(0,r.kt)("h2",{id:"example-data-for-this-document"},"Example data for this document"),(0,r.kt)("p",null,"This document uses the following data for demonstrating behavior specified by the JSON:API, and for demonstrating behavior introduced with this extension:"),(0,r.kt)("h3",{id:"article-entity-type-article"},(0,r.kt)("inlineCode",{parentName:"h3"},"article")," Entity (type: ",(0,r.kt)("inlineCode",{parentName:"h3"},"article"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique id of the article."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The title for the article."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the article's author."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The date the article was edited."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"teaser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A teaser text for the article."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The complete text of the article."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The article's version."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secretfield")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A field with a value that is a mystery to everyone."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"sample-data"},"Sample Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "title": "Lorem ipsum",\n    "author": "Jo Vongoe The",\n    "date": "2022-06-25 18:00:00",\n    "teaser": "Lorem ipsum dolor sit amet!"\n    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, [...]",\n    "version": "v1.0",\n    "secretfield": "?"\n}\n')),(0,r.kt)("h3",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"articles/{articleId}")),(0,r.kt)("p",null,"Example for requesting an ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /articles/1 HTTP/1.1\nAccept: application/vnd.api+json\n")),(0,r.kt)("h4",{id:"default-fields-for-the-article-resource-object"},"Default fields for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"article")," resource object"),(0,r.kt)("p",null,"The endpoint defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"default fields")," returned with each ",(0,r.kt)("inlineCode",{parentName:"p"},"article"),". If no ",(0,r.kt)("inlineCode",{parentName:"p"},"fields[article]")," parameter was specified, the server guarantees to make the following fields available with a resource object of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"article"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"author")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"teaser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text"))),(0,r.kt)("h4",{id:"optional-fields-for-the-article-resource-object"},"Optional fields for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"article")," resource object"),(0,r.kt)("p",null,"The optional fields for the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," resource object are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretfield"))),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," resource object will only have the default fields and optional fields included with a response if the client requests them explicitly by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields[article]")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /articles/1?fields[article]=title,author,date,teaser,text,version HTTP/1.1\nAccept: application/vnd.api+json\n")),(0,r.kt)("p",null,"gives the response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json\n\n{\n    "data": {\n        "id": 1,\n        "type": "article",\n        "attributes": {\n            "title": "Lorem ipsum",\n            "author": "Jo Vongoe The",\n            "date": "2022-06-25 18:00:00",\n            "teaser": "Lorem ipsum dolor sit amet!"\n            "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, [...]",\n            "version": "v1.0"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In this example,  ",(0,r.kt)("inlineCode",{parentName:"p"},"secretfield")," is not readable by the client. Trying to access it would result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"403 Forbidden")," response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /articles/1?fields[article]=secretfield HTTP/1.1\nAccept: application/vnd.api+json\n")),(0,r.kt)("p",null,"gives the response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 403 Forbidden\nContent-Type: application/vnd.api+json\n")),(0,r.kt)("h2",{id:"sparse-fieldsets-with-the-jsonapi-as-per-specification"},"Sparse Fieldsets with the JSON:API as per specification"),(0,r.kt)("p",null,"Clients ",(0,r.kt)("strong",{parentName:"p"},"MAY")," request that an endpoint includes only specific fields in the response in a per-type basis by including a ",(0,r.kt)("inlineCode",{parentName:"p"},"fields[TYPE]")," parameter."),(0,r.kt)("p",null,"The following is specified:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the client uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields[TYPE]")," parameter and leaves its value empty, the endpoint should not return any fields for resource objects with the given type in its response (please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/json-api/json-api/pull/1636"},"this discussion")," for clarifications on the wording with this paragraph).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a client requests a restricted set of fields for a given resource type, an endpoint ",(0,r.kt)("strong",{parentName:"p"},"MUST NOT")," include any additional fields in resource objects of that type in its response.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a client does not specify the set of fields for a given resource type, the server ",(0,r.kt)("strong",{parentName:"p"},"MAY")," send all fields, a subset of fields, or no fields for that resource type."))),(0,r.kt)("h2",{id:"sparse-fieldsets-with-the-relfied-extension"},"Sparse Fieldsets with the ",(0,r.kt)("inlineCode",{parentName:"h2"},"relfied"),"-extension"),(0,r.kt)("p",null,"This extension adds new semantics and syntax for querying fieldsets. It introduces two new characters as possible prefixes for fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+ (U+002B PLUS SIGN, \u201c+\u201d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"- (U+002D HYPHEN-MINUS, \u201c-\u201c)"))),(0,r.kt)("p",null,"When they are used as the first character in front of a field name provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"relfield:fields[TYPE]"),"-parameter, they describe ",(0,r.kt)("strong",{parentName:"p"},"additional")," (",(0,r.kt)("inlineCode",{parentName:"p"},"+"),") and ",(0,r.kt)("strong",{parentName:"p"},"excluded")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),") fields."),(0,r.kt)("p",null,"This extension also introduces a wildcard character ",(0,r.kt)("inlineCode",{parentName:"p"},"* (U+002A ASTERISK, \u201c*\u201d)")," for inclusion (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") of whole sets of fields of a resource."),(0,r.kt)("h3",{id:"additional-fields"},"Additional fields"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional fields")," are fields that are ",(0,r.kt)("strong",{parentName:"p"},"added")," to the list of ",(0,r.kt)("strong",{parentName:"p"},"default fields")," that should be included with the response object, and prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"+ (U+002B PLUS SIGN, \u201c+\u201d)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /articles/1?relfield:fields[article]=+version HTTP/1.1\nAccept: application/vnd.api+json;ext=https://conjoon.org/json-api/ext/relfield\n")),(0,r.kt)("p",null,"returns all the default fields, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field."),(0,r.kt)("h3",{id:"excluded-fields"},"Excluded fields"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Excluded fields")," are fields that should be ",(0,r.kt)("strong",{parentName:"p"},"excluded")," from the list of ",(0,r.kt)("strong",{parentName:"p"},"default fields")," returned with the response object and prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"- (U+002D HYPHEN-MINUS, \u201c-\u201c)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=-text,-teaser HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"includes the default fields for the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," resource object, without the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"teaser"),"."),(0,r.kt)("h3",{id:"wildcard-queries"},"Wildcard Queries"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"* (U+002A ASTERISK, \u201c*\u201d)"),"-character serves as a wildcard for requesting all accessible fields - ",(0,r.kt)("strong",{parentName:"p"},"default")," and ",(0,r.kt)("strong",{parentName:"p"},"optional")," - for a specific resource type and serves mainly for reducing visual complexity of otherwise large queries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=* HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"returns the resource object with ",(0,r.kt)("strong",{parentName:"p"},"all")," (default & optional) fields available."),(0,r.kt)("p",null,"Wildcards represent all fields of a resource object. Additional fields specified with the query and mandatory prefixed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"+ (U+002B PLUS SIGN, \u201c+\u201d)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"- (U+002D HYPHEN-MINUS, \u201c-\u201c)")," are computed relative against the list of ",(0,r.kt)("strong",{parentName:"p"},"all")," (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") fields of a resource object. Thus, including a wildcard with a ",(0,r.kt)("inlineCode",{parentName:"p"},"relfielf:fields[TYPE]")," query makes sense if the client wants to explixitly exclude fields."),(0,r.kt)("h2",{id:"processing"},"Processing"),(0,r.kt)("p",null,"There are no restrictions to the methods used with the HTTP requests sent with this extension."),(0,r.kt)("p",null,"If any operation in a request with this extension fails, the server ",(0,r.kt)("strong",{parentName:"p"},"MUST")," respond as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://jsonapi.org/"},"base specification")," of the JSON:API. An array of one or more ",(0,r.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#errors"},"error objects")," ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," be returned, each with a source member that contains a pointer to the source of the problem in the request document."),(0,r.kt)("h3",{id:"compliance-with-base-specifications-for-fieldsets"},"Compliance with base specifications for fieldsets"),(0,r.kt)("p",null,"If a client uses the additional prefixes for identifying fields as ",(0,r.kt)("strong",{parentName:"p"},"additional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"+ (U+002B PLUS SIGN, \u201c+\u201d)")," and/or ",(0,r.kt)("strong",{parentName:"p"},"excluded")," ",(0,r.kt)("inlineCode",{parentName:"p"},"- (U+002D HYPHEN-MINUS, \u201c-\u201c)")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"relfield:fields[TYPE]")," parameter, omitting such a character for any field-identifier ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be responded with a ",(0,r.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=version,-title HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"responds with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 400 Bad Request\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("h3",{id:"redundancy-of-fields"},"Redundancy of fields"),(0,r.kt)("p",null,"There is ",(0,r.kt)("strong",{parentName:"p"},"no")," specific treatment for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fields requested as ",(0,r.kt)("strong",{parentName:"li"},"additional"),", that are already part of the default list of fields of the resource object"),(0,r.kt)("li",{parentName:"ul"},"fields requested as ",(0,r.kt)("strong",{parentName:"li"},"excluded"),", that are already missing from the default list of fields of the resource object")),(0,r.kt)("h3",{id:"mutual-exclusivity-of-relfieldfieldstype--and-fieldstype-parameter"},"Mutual exclusivity of ",(0,r.kt)("inlineCode",{parentName:"h3"},"relfield:fields[TYPE]"),"- and ",(0,r.kt)("inlineCode",{parentName:"h3"},"fields[TYPE]"),"-parameter"),(0,r.kt)("p",null,"If a client sends a request containing both ",(0,r.kt)("inlineCode",{parentName:"p"},"relfield:fields[TYPE]"),"- and ",(0,r.kt)("inlineCode",{parentName:"p"},"fields[TYPE]"),"-parameter, where ",(0,r.kt)("inlineCode",{parentName:"p"},"TYPE")," refers to the same type of resource object, the server ",(0,r.kt)("strong",{parentName:"p"},"MUST")," respond with a ",(0,r.kt)("inlineCode",{parentName:"p"},"400 Bad Request"),"."),(0,r.kt)("p",null,"If the client refers to different types of resource objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"TYPE")," and each fieldset specified with the query string, the server ",(0,r.kt)("strong",{parentName:"p"},"MUST")," treat the requested fieldsets as per their specifications."),(0,r.kt)("h3",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The response ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," include a document with a top-level error member that contains one or more error objects providing further details on the fields that caused the error. If a prefix for a field is missing, this field ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," appear in the error object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [{\n        "code": "123",\n        "source": {"parameter": "relfield:fields[article]"},\n        "title": "Bad Request",\n        "detail": "Missing prefix for field \'version\'."\n    }]\n}\n')),(0,r.kt)("h4",{id:"inaccessible-fields"},"Inaccessible fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the client requests an ",(0,r.kt)("strong",{parentName:"p"},"additional")," field that is not readable by the client, the server ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," respond with a ",(0,r.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),". The response ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," include a document with a top-level error member that contains one or more error objects providing further details on the inaccessible field.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the client issues a request that ",(0,r.kt)("strong",{parentName:"p"},"excludes")," a field that is usually not readable by the client, the server ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," treat the request as valid and proceed with its response according to its implementation. A ",(0,r.kt)("inlineCode",{parentName:"p"},"403 Forbidden")," response ",(0,r.kt)("strong",{parentName:"p"},"MAY")," be sent for very restrictive systems."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"article-includes-all-default-fields-and-the-version-field"},(0,r.kt)("inlineCode",{parentName:"h3"},"article")," includes all default fields and the ",(0,r.kt)("inlineCode",{parentName:"h3"},"version")," field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /articles/1?relfield:fields[article]=+version HTTP/1.1\nAccept: application/vnd.api+json;ext=https://conjoon.org/json-api/ext/relfield\n")),(0,r.kt)("p",null,"responds with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n\n{\n    "data": {\n        "id": 1,\n        "type": "article",\n        "attributes": {\n            "title": "Lorem ipsum",\n            "author": "Jo Vongoe The",\n            "date": "2022-06-25 18:00:00",\n            "teaser": "Lorem ipsum dolor sit amet!"\n            "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, [...]",\n            "version": "v1.0"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"excluding-text-and-teaser-from-the-list-of-default-fields-of-an-article"},"Excluding ",(0,r.kt)("inlineCode",{parentName:"h3"},"text")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"teaser")," from the list of default fields of an ",(0,r.kt)("inlineCode",{parentName:"h3"},"article")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=-text,-teaser HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"responds with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n\n{\n    "data": {\n        "id": 1,\n        "type": "article",\n        "attributes": {\n            "title": "Lorem ipsum",\n            "author": "Jo Vongoe The",\n            "date": "2022-06-25 18:00:00",\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"using-sparse-fieldsets-with-this-extension-for-a-different-type"},"Using sparse fieldsets with this extension for a different ",(0,r.kt)("inlineCode",{parentName:"h3"},"TYPE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=+version&fields[comment]=author HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"In this example, the fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," must be computed as per ",(0,r.kt)("inlineCode",{parentName:"p"},"relfield")," specifications, and the fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"comment")," must be computed as per ",(0,r.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sparse-fieldsets"},"base specifications"),"."),(0,r.kt)("h3",{id:"400-bad-request-using-sparse-fieldsets-with-this-extension-for-the-same-type"},(0,r.kt)("inlineCode",{parentName:"h3"},"400 Bad Request"),": Using sparse fieldsets with this extension for the same ",(0,r.kt)("inlineCode",{parentName:"h3"},"TYPE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=+version&fields[article]=title HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MUST")," respond with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 400 Bad Request\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("h3",{id:"400-bad-request-omitting-prefixes-with-this-extension-for-field-values"},(0,r.kt)("inlineCode",{parentName:"h3"},"400 Bad Request"),": Omitting prefixes with this extension for field values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=version,-title HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MUST")," respond with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 400 Bad Request\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("h3",{id:"requesting-fields-with-inaccessible-fields-excluded"},"Requesting fields with inaccessible fields excluded"),(0,r.kt)("p",null,"The client issues a request that ",(0,r.kt)("strong",{parentName:"p"},"excludes")," ",(0,r.kt)("inlineCode",{parentName:"p"},"secretfield"),", which is not redable for the client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=-secretfield HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SHOULD")," respond with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("h3",{id:"403-bad-request-requesting-inaccessible-fields"},(0,r.kt)("inlineCode",{parentName:"h3"},"403 Bad Request"),": Requesting inaccessible fields"),(0,r.kt)("p",null,"The client requests ",(0,r.kt)("inlineCode",{parentName:"p"},"secretfield"),", which is not readable for this client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=+secretfield HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SHOULD")," respond with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 403 Forbidden\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"and ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," include"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [{\n        "code": "123",\n        "source": {"pointer": "/data/attributes/secretfield"},\n        "title": "Access forbidden",\n        "detail": "secretfield may not be accessed."\n    }]\n}\n')),(0,r.kt)("h3",{id:"wildcard-queries-1"},"Wildcard Queries"),(0,r.kt)("h4",{id:"requesting-all-fields-for-an-article"},"Requesting all fields for an ",(0,r.kt)("inlineCode",{parentName:"h4"},"article")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=* HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SHOULD")," respond with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n\n{\n    "data": {\n        "id": 1,\n        "type": "article",\n        "attributes": {\n            "title": "Lorem ipsum",\n            "author": "Jo Vongoe The",\n            "date": "2022-06-25 18:00:00",\n            "teaser": "Lorem ipsum dolor sit amet!"\n            "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, [...]",\n            "version": "1.0"\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"requesting-all-fields-for-an-article-excluding-version-and-teaser"},"Requesting all fields for an ",(0,r.kt)("inlineCode",{parentName:"h4"},"article"),", excluding ",(0,r.kt)("inlineCode",{parentName:"h4"},"version")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"teaser")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'GET /articles/1?relfield:fields[article]=*,-version,-teaser HTTP/1.1\nAccept: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n')),(0,r.kt)("p",null,"responds with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/vnd.api+json;ext="https://conjoon.org/json-api/ext/relfield"\n\n{\n    "data": {\n        "id": 1,\n        "type": "article",\n        "attributes": {\n            "title": "Lorem ipsum",\n            "author": "Jo Vongoe The",\n            "date": "2022-06-25 18:00:00",      \n            "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, [...]"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"similar-api-implementations"},"Similar API implementations"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"bitbucket")," API of Atlassian provides similar behavior with their use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields paramter")," with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/bitbucket/rest/intro/#partial-response"},"partial responses"),"."))}f.isMDXComponent=!0}}]);