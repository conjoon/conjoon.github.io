"use strict";(self.webpackChunkconjoon=self.webpackChunkconjoon||[]).push([[5361],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"lumen-app-email",title:"\ud83d\udeaa lumen-app-email",slug:"/api/backends/@conjoon/lumen-app-email"},p=void 0,s={unversionedId:"backends/lumen-app-email",id:"backends/lumen-app-email",title:"\ud83d\udeaa lumen-app-email",description:"lumen-app-email is a PHP application built with Lumen requiring minimal setup. It provides the REST API implementation according to rest-api-email and serves as a lightweight backend providing functionality for reading, writing and sending email messages.",source:"@site/docs/backends/lumen-app-email.md",sourceDirName:"backends",slug:"/api/backends/@conjoon/lumen-app-email",permalink:"/docs/api/backends/@conjoon/lumen-app-email",draft:!1,editUrl:"https://github.com/conjoon/conjoon.github.io/edit/main/docs/backends/lumen-app-email.md",tags:[],version:"current",frontMatter:{id:"lumen-app-email",title:"\ud83d\udeaa lumen-app-email",slug:"/api/backends/@conjoon/lumen-app-email"},sidebar:"api",previous:{title:"Backends",permalink:"/docs/api/backends"},next:{title:"\ud83d\udeaa ddev-ms-email",permalink:"/docs/api/backends/@conjoon/ddev-ms-email"}},m={},d=[{value:"Use Case",id:"use-case",level:2},{value:"Supported REST API",id:"supported-rest-api",level:2},{value:"REST Examples",id:"rest-examples",level:3},{value:"Installation",id:"installation",level:2},{value:"Using GIT &amp; composer",id:"using-git--composer",level:3},{value:"Using Docker (DDEV)",id:"using-docker-ddev",level:3},{value:"From Scratch",id:"from-scratch",level:3},{value:"Configuration",id:"configuration",level:2},{value:".env - Environment Variables",id:"env---environment-variables",level:3},{value:"Configuring CORS",id:"configuring-cors",level:3},{value:"Options",id:"options",level:4},{value:"IMAP server configurations",id:"imap-server-configurations",level:3},{value:"Entry Details",id:"entry-details",level:4},{value:"Example for <code>match</code>",id:"example-for-match",level:4},{value:"Example for <code>root</code>",id:"example-for-root",level:4},{value:"Additional Resources",id:"additional-resources",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"lumen-app-email")," is a PHP application built with ",(0,i.kt)("a",{parentName:"p",href:"https://lumen.laravel.com"},"Lumen")," requiring minimal setup. It provides the REST API implementation according to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/rest-api/@conjoon/rest-api-description/rest-api-email"},"rest-api-email")," and serves as a lightweight backend providing functionality for reading, writing and sending email messages."),(0,i.kt)("h2",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"lumen-app-email")," follows a service oriented approach. Implementations are easily replaceable with the help of upfront DI configurations and related bindings."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use lumen-app-email, if you...")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"need a fully functional middleware for communicating with IMAP / SMTP server"),(0,i.kt)("li",{parentName:"ul"},"want to provide webmail solutions with domain-specific sign-in to IMAP accounts"),(0,i.kt)("li",{parentName:"ul"},"are looking for a distribution with minimal footprint and easy setup"),(0,i.kt)("li",{parentName:"ul"},"require a headless, microservice oriented architecture with your infrastructure")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"do not use lumen-app-email, if you...")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"are looking for a stateful, session based webmail backend"),(0,i.kt)("li",{parentName:"ul"},"need baked-in caching")),(0,i.kt)("h2",{id:"supported-rest-api"},"Supported REST API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rest-api-email"),"\nFor the list of endpoints this microservice provides, please refer to the openAPI documentation of ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/rest-api/@conjoon/rest-api-description/rest-api-email"},"rest-api-email"),".")),(0,i.kt)("h3",{id:"rest-examples"},"REST Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'# Return a list of available MailAccounts for the requesting client\nGET /rest-api-email/api/v0/MailAccounts HTTP/1.1\nContent-Type: application/json\nAuthorization: Basic Y29uam9vbjpIZWxsb1dvcmxk\nHost: hostname\n\n# Return the envelope data of the first 50 MessageItems w/o previewText of the INBOX mailbox\n# for the MailAccount identified by "gmail"\nGET /rest-api-email/api/v0/MailAccounts/gmail/MailFolders/INBOX/MessageItems?start=0&limit=50&attributes=*,previewText HTTP/1.1\nContent-Type: application/json\nAuthorization: Basic Y29uam9vbjpIZWxsb1dvcmxk\nHost: hostname\n\n# Return the email identified with the uid 4356 of the INBOX mailbox for the MailAccount identified by "gmail"\nGET /rest-api-email/api/v0/MailAccounts/gmail/MailFolders/INBOX/MessageItems/4356 HTTP/1.1\nContent-Type: application/json\nAuthorization: Basic Y29uam9vbjpIZWxsb1dvcmxk\nHost: hostname\n')),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"using-git--composer"},"Using GIT & composer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/conjoon/lumen-app-email\n$ cd ./lumen-app-email\n$ composer i\n")),(0,i.kt)("h3",{id:"using-docker-ddev"},"Using Docker (DDEV)"),(0,i.kt)("p",null,"For a quick start, we suggest to use a pre-configured container for running the backend: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conjoon/ddev-ms-email"},"conjoon/ddev-ms-email")," provides a `.",(0,i.kt)("strong",{parentName:"p"},"Docker (DDEV)")," configuration for a container running ",(0,i.kt)("strong",{parentName:"p"},"lumen-app-email")," out-of-the-box and is easy to install."),(0,i.kt)("h3",{id:"from-scratch"},"From Scratch"),(0,i.kt)("p",null,"Since ",(0,i.kt)("strong",{parentName:"p"},"lumen-app-webmail")," is a Lumen/Laravel application, detailed information on how to set up a webserver for it can be found in the official ",(0,i.kt)("a",{parentName:"p",href:"https://lumen.laravel.com/docs/"},"Lumen","-","documentation"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"env---environment-variables"},".env - Environment Variables"),(0,i.kt)("p",null,"The root directory of the project contains a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vlucas/phpdotenv"},"dotenv-configuration")," file (",(0,i.kt)("inlineCode",{parentName:"p"},".env.example"),").\nSettings may be adjusted on your own to match your desired configuration for the environment the microservice runs in. Copy and rename this file to ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," and configure away!"),(0,i.kt)("h3",{id:"configuring-cors"},"Configuring CORS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"lumen-app-email")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fruitcake/laravel-cors"},"fruitcake/laravel-cors")," for enabling\n",(0,i.kt)("a",{parentName:"p",href:"http://enable-cors.org/"},"Cross-Origin Resource Sharing"),"."),(0,i.kt)("p",null,"A configuration template can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/cors.php.example"),"."),(0,i.kt)("p",null,"Copy this file to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/cors.php"),", and adjust the settings to your needs. The example configuration works well with development environments, but you might want to add more strict options for production, auch as the settings for ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),"."),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("p",null,"The options available for the cors configuration are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paths"),(0,i.kt)("td",{parentName:"tr",align:null},"You can enable CORS for 1 or multiple paths, eg. ",(0,i.kt)("inlineCode",{parentName:"td"},"['api/*'] ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowed_origins"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches the request origin. Wildcards can be used, eg. ",(0,i.kt)("inlineCode",{parentName:"td"},"*.mydomain.com")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"mydomain.com:*")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['*']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowed_origins_patterns"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches the request origin with ",(0,i.kt)("inlineCode",{parentName:"td"},"preg_match"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowed_methods"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches the request method."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['*']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowed_headers"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the Access-Control-Allow-Headers response header."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['*']"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exposed_headers"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the Access-Control-Expose-Headers response header."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_age"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the Access-Control-Max-Age response header."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"supports_credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the Access-Control-Allow-Credentials header."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h3",{id:"imap-server-configurations"},"IMAP server configurations"),(0,i.kt)("p",null,"In order for users to authenticate against IMAP servers, ",(0,i.kt)("inlineCode",{parentName:"p"},"lumen-app-email")," provides a template-configuration file in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/imapserver.php.example"),".\nCopy this file to ",(0,i.kt)("inlineCode",{parentName:"p"},"imapserver.php")," and specify an array of mail server configurations. Each entry represents a mail server to which a connection may be established, for both sending and receiving messages."),(0,i.kt)("h4",{id:"entry-details"},"Entry Details"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'    [\n        "id"              => "Google_Mail",\n        "inbox_type"      => "IMAP",\n        "inbox_address"   => \'imap.gmail.com\',\n        "inbox_port"      => 993,\n        "inbox_ssl"       => true,\n        "outbox_address"  => "smtp.gmail.com",\n        "outbox_port"     => 465,\n        "outbox_secure"   => "ssl",\n        "root"            => ["INBOX"],\n        "match"           => ["/\\@(googlemail.)(com)$/mi"]\n    ]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id"),":",(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"required for identifying the mail account. ",(0,i.kt)("strong",{parentName:"td"},"MUST")," be unique in the configuration file. Will be refered to as ",(0,i.kt)("inlineCode",{parentName:"td"},"mailAccountId")," throughout ",(0,i.kt)("a",{parentName:"td",href:"https://conjoon.stoplight.io/docs/rest-api-description"},"rest-api-email"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"IMAP Settings"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inbox_type"),":",(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"the protocol used with the server for receiving messages. Right now, only ",(0,i.kt)("strong",{parentName:"td"},"IMAP")," is supported.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inbox_address"),":",(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"(ip-)address of the server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inbox_port"),":",(0,i.kt)("em",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:null},"port that should be used with ",(0,i.kt)("inlineCode",{parentName:"td"},"inbox_address")," for server communication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inbox_ssl"),":",(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"use encrypted communication with the server. ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),": use ",(0,i.kt)("strong",{parentName:"td"},"SSL")," for encryption, ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),": use no encryption")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"SMTP Settings"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"outbox_address"),":",(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"(ip-)address of the server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"outbox_port"),":",(0,i.kt)("em",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:null},"port that should be used with ",(0,i.kt)("inlineCode",{parentName:"td"},"outbox_address")," for server communication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"outbox_secure"),":",(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"the encryption protocol to use with SMTP. Use ",(0,i.kt)("inlineCode",{parentName:"td"},"ssl")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"tls")," here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Account Settings"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"match"),":",(0,i.kt)("em",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:null},"a regular expression that matches an email-address to ",(0,i.kt)("strong",{parentName:"td"},"THIS")," server configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"root"),":",(0,i.kt)("em",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:null},"an array of mailbox names that serve as root folders to display for this account. Leave the array empty if all mailboxes should be read out and send to the client.")))),(0,i.kt)("h4",{id:"example-for-match"},"Example for ",(0,i.kt)("inlineCode",{parentName:"h4"},"match")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'["/\\@(googlemail.)(com)$/mi"]')),(0,i.kt)("p",null,'A client authenticates with the username "name@',(0,i.kt)("strong",{parentName:"p"},"googlemail.com"),'". ',(0,i.kt)("inlineCode",{parentName:"p"},"lumen-app-email")," will query through the configurations of ",(0,i.kt)("inlineCode",{parentName:"p"},"imapserver.php")," and test ",(0,i.kt)("strong",{parentName:"p"},"this")," username against regular expression defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". In this example, the above regular expression matches the username (i.e. email address). The configuration where the regular expression is specified will be used for subsequent operations requested by the client."),(0,i.kt)("h4",{id:"example-for-root"},"Example for ",(0,i.kt)("inlineCode",{parentName:"h4"},"root")),(0,i.kt)("p",null,"A common mailbox layout of IMAP servers looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INBOX\nINBOX.Drafts\nINBOX.Sent\nINBOX.Junk\nINBOX.Trash\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"-configuration is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'["INBOX"]'),", the following mailboxes will be returned to the client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INBOX\nDrafts\nSent\nJunk\nTrash\n")),(0,i.kt)("p",null,'Multiple root entries will be considered. This is useful with Google Mail, where root mailboxes (in gmail terms: "labels") can either be ',(0,i.kt)("inlineCode",{parentName:"p"},"[Google Mail]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"[Gmail]"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},'["[Google Mail]", "[Gmail]"]')," in this case."),(0,i.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("p",null,"The documentation of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/rest-api/@conjoon/rest-api-description/rest-api-email"},"rest-api-email")," provides information about querying available mailboxes for an authenticated client."))}c.isMDXComponent=!0}}]);