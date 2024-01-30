Ext.define('conjoon.dev.cn_mailsim.data.EmailBaseSim',{extend:'Ext.ux.ajax.JsonSimlet',inheritableStatics:{required:{simletAdapter:'conjoon.dev.cn_mailsim.data.SimletAdapter'}},uriToUrl:function uriToUrl(b){var a;try{a=new URL(a)}catch(c){a=new URL(a,window.location)}return a},exec:function exec(c){var b=this,a=b.simletAdapter.validateRequest(c);if(a!==null){return a}return b.callParent(arguments)}});Ext.define('conjoon.dev.cn_mailsim.data.table.AttachmentTable',{singleton:!0,attachments:null,largestAttachmentId:0,getRandom:function getRandom(a,b){return Math.floor(Math.random()*(b-a+1))+a},moveAttachments:function moveAttachments(g,h,f,c){var a=this,d=[g,h,f].join('-'),b=[g,c.mailFolderId?c.mailFolderId:h,c.parentMessageItemId?c.parentMessageItemId:f].join('-');if(d===b){return}var i;if(!a.attachments){a.attachments={}}if(!a.attachments[d]){return}if(a.attachments[b]){Ext.raise('Unexpected error: attachments existing for '+b)}i=a.attachments[d];delete a.attachments[d];a.attachments[b]=i;for(var e in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],e)){continue}if(c.mailFolderId){a.attachments[b][e]['mailFolderId']=c.mailFolderId}if(c.parentMessageItemId){a.attachments[b][e]['parentMessageItemId']=c.parentMessageItemId}}return a.attachments[b]},createAttachment:function createAttachment(e,f,c,d){var a=this,g=e+'-'+f+'-'+c;if(!a.attachments){a.attachments={}}if(!a.attachments[g]){a.attachments[g]=[]}d.id=++a.largestAttachmentId;a.attachments[g].push(d);var b=conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(e,f,c,{},!0);if(!b){debugger}a.moveAttachments(e,f,c,{parentMessageItemId:b.id});return Ext.apply(d,{mailAccountId:b.mailAccountId,mailFolderId:b.mailFolderId,parentMessageItemId:b.id})},deleteAttachment:function deleteAttachment(e,f,d,k){if(arguments.length<4){Ext.raise('Unexpected missing arguments.')}var a=this,h=0;if(!a.attachments){a.attachments={}}for(var i in a.attachments){var g=a.attachments[i];for(var j in g){var c=g[j];if(c.parentMessageItemId===d&&c.mailFolderId===f&&c.mailAccountId===e&&c.id+''===k+''){h=1;delete a.attachments[i][j];break}}}if(h>0){var b=conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(e,f,d,{},!0);a.moveAttachments(e,f,d,{parentMessageItemId:b.id});return {parentMessageItemId:b.id,mailAccountId:b.mailAccountId,mailFolderId:b.mailFolderId}}return !1},getAttachments:function getAttachments(f,g,e){var a=this;if(!a.attachments){a.attachments={}}var d=null;for(var b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(var c in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],c)){continue}if(a.attachments[b][c].mailAccountId===f&&a.attachments[b][c].mailFolderId===g&&a.attachments[b][c].parentMessageItemId+''===e+''){if(d===null){d=[]}d.push(a.attachments[b][c])}}}return d},createRandomAttachments:function createRandomAttachments(e,f,c){var a=this,b=[e,f,c].join('-');var i=['IMG3701','documents','Shipping Info','images','document.draft'],d=[{type:'application/pdf',extension:'pdf'},{type:'image/jpg',extension:'jpg'},{type:'application/x-rar-compressed',extension:'rar'},{type:'application/zip',extension:'zip'},{type:'text/plain',extension:'txt'}],j=['24233','323556','6588668','23434','463373'],g;if(!a.attachments){a.attachments={}}for(var h=0,k=a.getRandom(0,5);h<k;h++){if(!a.attachments[b]){a.attachments[b]=[]}g={id:++a.largestAttachmentId,parentMessageItemId:c,mailFolderId:f,mailAccountId:e,text:i[a.getRandom(0,4)]+'.'+d[a.getRandom(0,4)].extension,type:d[a.getRandom(0,4)].type,size:j[a.getRandom(0,4)]};a.attachments[b].push(g)}return a.attachments[b]},getAttachmentAt:function getAttachmentAt(e){var a=this;var c=0;for(var b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(var d in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],d)){continue}if(c===e){return a.attachments[b][d]}c++}}return null},getAttachment:function getAttachment(e,g,d,f){var a=this;if(!a.attachments){a.attachments={}}for(var b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(var c in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],c)){continue}}if(a.attachments[b][c].mailAccountId===e&&a.attachments[b][c].mailFolderId===g&&a.attachments[b][c].parentMessageItemId+''===d+''&&a.attachments[b][c].id+''===f){return a.attachments[b][c]}}return null},resetAll:function resetAll(){var a=this;a.attachments=null;a.largestAttachmentId=0}});Ext.define('conjoon.dev.cn_mailsim.data.table.MessageFactory',{singleton:!0,messages:null,rawMessages:null,requires:['coon.core.Environment'],getMessage:function getMessage(b){var a=this;if(!a.messages){a.messages={}}if(!a.messages[b]){a.messages[b]=Ext.Ajax.request({async:!1,url:coon.core.Environment.getPathForResource('resources/templates/email_'.concat(b,'.html'),'extjs-dev-webmailsim')}).responseText}return a.messages[b]},getRawMessage:function getRawMessage(b){var a=this;if(!a.rawMessages){a.rawMessages={}}if(!a.rawMessages[b]){a.rawMessages[b]=Ext.Ajax.request({async:!1,url:coon.core.Environment.getPathForResource('resources/templates/email_'.concat(b,'.txt'),'extjs-dev-webmailsim')}).responseText}return a.rawMessages[b]}});Ext.define('conjoon.dev.cn_mailsim.data.table.MessageTable',{singleton:!0,requires:['conjoon.dev.cn_mailsim.data.table.AttachmentTable','conjoon.dev.cn_mailsim.data.table.MessageFactory'],ITEM_LENGTH:1000,messageBodies:null,messageItems:null,baseMessageItems:null,DRAFT_KEY:0,recentId:10000000,invokeMessageFactory:function invokeMessageFactory(){var b=this,a=conjoon.dev.cn_mailsim.data.table.MessageFactory;if(!b.messages){b.messages=[a.getMessage(1),a.getMessage(2),a.getMessage(3),a.getMessage(4),a.getMessage(5),a.getMessage(6)]}if(!b.rawMessages){b.rawMessages=[a.getRawMessage(1),a.getRawMessage(2),a.getRawMessage(3),a.getRawMessage(4),a.getRawMessage(5),a.getRawMessage(6)]}},buildRandomNumber:function buildRandomNumber(a,b){return Math.floor(Math.random()*(b-a+1))+a},buildRandomSizeInBytes:function buildRandomSizeInBytes(){var a=this;return a.buildRandomNumber(1,10000000)},buildPreviewText:function buildPreviewText(b,c,d){var e=this;var a=e.getMessageBody(b,c,d).textPlain;return a?a.substring(0,200):''},buildRandomDate:function buildRandomDate(){var c=this,a=new Date(),d=c.buildRandomNumber(2007,a.getFullYear()),e=c.buildRandomNumber(1,d===a.getFullYear()?a.getMonth()+1:12),f=c.buildRandomNumber(1,d===a.getFullYear()&&e-1===a.getMonth()?a.getDate():31),g=c.buildRandomNumber(0,d===a.getFullYear()&&e-1===a.getMonth()&&f===a.getDate()?a.getHours():23),h=c.buildRandomNumber(0,d===a.getFullYear()&&e-1===a.getMonth()&&f===a.getDate()?a.getMinutes():59),b=function b(a){return a<10?'0'+a:a};return Ext.String.format('{0}-{1}-{2} {3}:{4}:00 +0000',d,b(e),b(f),b(g),b(h))},buildAddresses:function buildAddresses(a,b){if(b+''===1+''&&a!=='to'){return []}return [{name:'John Doe',address:'john.doe@domain.tld'},{name:'Mary Tyler Moore',address:'mr.ty.m@weezer.com'}]},remove:function remove(c){var d=this;var a=d.messageItems;console.log('REMOVING',c.getId());for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b].id+''===c.getId()+''){delete a[b];console.log('REMOVED');return}}},createMessageBody:function createMessageBody(d,e,f){if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}var a=this,c=Ext.id(),b=0;a.getMessageItems();if(!a.messageBodies){a.messageBodies={}}for(var h in a.messageBodies){var g=parseInt(a.messageBodies[h].id,10);b=Math.max(g,b)}a.messageBodies[c]=Ext.applyIf({id:++b,mailAccountId:d,mailFolderId:e},f);return a.messageBodies[c]},updateMessageBody:function updateMessageBody(d,c,e,a){var j=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;if(arguments.length<4){Ext.raise('Unexpected missing arguments')}var b=this,f=b.getMessageBody(d,c,e);if(a.mailFolderId&&c!==a.mailFolderId){var g;for(var i in b.messageBodies){var h=b.messageBodies[i];if(h.mailAccountId===d&&h.mailFolderId===c&&h.id+''===e+''){g=i;break}}if(!g){Ext.raise('no MessageBody found!')}delete b.messageBodies[g];b.messageBodies[Ext.id()]=f}delete a.id;if(!a.textPlain&&a.textHtml){a.textPlain=Ext.util.Format.stripTags(a.textHtml)}Ext.apply(f,a);if(j!==!0){var k=b.updateAllItemData(d,c,e,{},!0);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(d,c,e,{parentMessageItemId:k.id})}return f},peekMessageBody:function peekMessageBody(a,b,c){var d=this;if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}return d.getMessageBody(a,b,c,!1)!==null},getMessageBody:function getMessageBody(c,d,g){var j=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;if(arguments.length<3){Ext.raise('Unexpected missing arguments')}var a=this,i=Ext.id(),h;a.invokeMessageFactory();if(!a.messageBodies){a.messageBodies={}}for(var b in a.messageBodies){if(!Object.prototype.hasOwnProperty.call(a.messageBodies,b)){continue}if(a.messageBodies[b]['mailAccountId']===c&&a.messageBodies[b]['mailFolderId']===d&&a.messageBodies[b]['id']+''===g+''){return a.messageBodies[b]}}if(j===!1){return null}var f=a.buildRandomNumber(0,a.messages.length-1),e=a.getMessageItem(c,d,g,!1);if(e&&e.subject&&e.subject.indexOf('eyeworkers')!==-1){f=5}h=this.messages[f];a.messageBodies[i]={id:g,mailFolderId:d,mailAccountId:c,textHtml:h,textPlain:this.rawMessages[f]};return a.messageBodies[i]},getNextMessageDraftKey:function getNextMessageDraftKey(){var a=this,e=a.getMessageDrafts(),f=a.getMessageItems(),g=this.DRAFT_KEY,c=0,d=0;for(var b in e){if(!Object.prototype.hasOwnProperty.call(e,b)){continue}c++}for(b in f){if(!Object.prototype.hasOwnProperty.call(f,b)){continue}d++}g=Math.max(c,d,a.ITEM_LENGTH,this.DRAFT_KEY);this.DRAFT_KEY=++g;return this.DRAFT_KEY+''},getMessageDraft:function getMessageDraft(c,d,e){if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}var f=this,a=f.getMessageDrafts();for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b]['mailAccountId']===c&&a[b]['mailFolderId']===d&&a[b]['id']+''===e+''){return a[b]}}return null},getMessageDrafts:function getMessageDrafts(){var a=this,c=[],e=a.buildBaseMessageItems(),d=a.getSender();if(a.messageDrafts){return a.messageDrafts}for(var b in a.baseMessageItems){if(!Object.prototype.hasOwnProperty.call(a.baseMessageItems,b)){continue}var f=a.buildAddresses('bcc',b);c[Ext.id()]=Ext.apply({bcc:f,replyTo:b!==0&&a.buildRandomNumber(0,1)?d[a.buildRandomNumber(0,d.length-1)]:undefined},e[b])}a.messageDrafts=c;return a.messageDrafts},updateMessageDraft:function updateMessageDraft(a,b,d,f){var e=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;if(arguments.length<3){Ext.raise('Unexpected missing arguments')}var g=this;var c=g.updateAllItemData(a,b,d,f,e);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(a,b,d,{parentMessageItemId:c.id});return c},updateMessageItem:function updateMessageItem(a,b,d,f){var e=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;if(arguments.length<4){Ext.raise('Unexpected missing arguments')}var g=this;var c=g.updateAllItemData(a,b,d,f,e);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(a,b,d,{parentMessageItemId:c.id});return c},createMessageDraft:function createMessageDraft(c,d,e){if(arguments.length!==3){Ext.raise('Unexpected missing argument')}var b=this,f=Ext.id(),a=b.getNextMessageDraftKey(),h=b.getMessageDrafts(),j=b.getMessageItems(),g=Ext.util.Format.date(new Date(),'Y-m-d H:i:s')+' +0000';conjoon.dev.cn_mailsim.data.table.AttachmentTable.attachments[a]=null;var i=b.getMessageBody(c,d,a);i.textPlain='';i.textHtml='';h[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});j[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});b.baseMessageItems[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});b.getMessageItems();b.getMessageDrafts();return h[a]},updateAllItemData:function updateAllItemData(d,e,g,a){var m=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;if(arguments.length<4){Ext.raise('Unexpected missing arguments')}var h=this,q=h.getMessageDraft(d,e,g),j=h.getMessageItem(d,e,g),l=[q,j],i=!1;var b=[];for(var o in a){if(!Object.prototype.hasOwnProperty.call(a,o)){continue}b.push(o)}if(b.indexOf('mailAccountId')!==-1&&b.indexOf('id')!==-1&&b.indexOf('mailFolderId')!==-1){if(b.length===4||b.length===5&&(b.indexOf('seen')!==-1||b.indexOf('flagged')!==-1||b.indexOf('answered')!==-1)){i=!0}}if(b.length===1&&b.indexOf('answered')!==-1){i=!0}if(a.mailFolderId&&a.mailFolderId!==e){m=!0;var n=conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(d,e,g,{mailFolderId:a.mailFolderId});a.hasAttachments=n&&n.length?1:0;h.updateMessageBody(d,e,g,{mailFolderId:a.mailFolderId},!0)}for(var k=0,r=l.length;k<r;k++){var f=l[k];if(!f){continue}if(i===!1){f['date']=Ext.util.Format.date(new Date(),'Y-m-d H:i:s')+' +0000'}for(var c in a){if(!Object.prototype.hasOwnProperty.call(f,c)){}switch(c){case 'to':case 'cc':case 'bcc':case 'from':case 'replyTo':if(Ext.isString(a[c])){f[c]=Ext.JSON.decode(a[c])};break;case 'date':break;default:f[c]=a[c];break;}}}if(m){var p=h.getNextMessageDraftKey();h.changeIdFor(d,j.mailFolderId,g,p)}return j},changeIdFor:function changeIdFor(h,i,j,c){if(!h||!i||!j||!c){Ext.raise('missing or invalid argument!')}var k=this;var g=k.getMessageItems(),f=k.getMessageDrafts(),e=k.messageBodies,b,a,d;for(b in g){if(!Object.prototype.hasOwnProperty.call(g,b)){continue}a=g[b];if(a['mailAccountId']===h&&a['mailFolderId']===i&&a['id']+''===j+''){delete g[b];a['id']=c;g[c]=a;break}}for(b in f){if(!Object.prototype.hasOwnProperty.call(f,b)){continue}a=f[b];if(a['mailAccountId']===h&&a['mailFolderId']===i&&a['id']+''===j+''){delete f[b];a['id']=c;f[c]=a;break}}for(b in e){if(!Object.prototype.hasOwnProperty.call(e,b)){continue}d=e[b];if(d['mailAccountId']===h&&d['mailFolderId']===i&&d['id']+''===j+''){delete e[b];d['id']=c;e[c]=d;break}}},getMessageItemAt:function getMessageItemAt(b){var c=this,a=c.getMessageItems();var e=0;for(var d in a){if(e++===b){return a[d]}}return null},getMessageItem:function getMessageItem(e,f,h){var g=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!0;if(arguments.length<3){Ext.raise('Unexpected missing arguments')}var d=this,a=g!==!1?d.getMessageItems():d.messageItems||[],c=null;for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b]['mailAccountId']===e&&a[b]['mailFolderId']===f&&a[b]['id']+''===h+''){c=a[b];break}}return c},getMessageItems:function getMessageItems(){var a=this,e=conjoon.dev.cn_mailsim.data.table.AttachmentTable,c=a.buildBaseMessageItems(),d=[];if(a.messageItems){for(var b in a.messageItems){if(!Object.prototype.hasOwnProperty.call(a.messageItems,b)){continue}a.messageItems[b].previewText=a.buildPreviewText(a.messageItems[b].mailAccountId,a.messageItems[b].mailFolderId,a.messageItems[b].id)}return a.messageItems}for(b in c){d[Ext.id()]=Ext.apply({hasAttachments:e.createRandomAttachments(c[b].mailAccountId,c[b].mailFolderId,c[b].id)?1:0,size:a.buildRandomSizeInBytes(),previewText:a.buildPreviewText(c[b].mailAccountId,c[b].mailFolderId,c[b].id)},c[b])}a.messageItems=d;return a.messageItems},addRecentItems:function addRecentItems(d,c){var a=this;if(!a.messageItems){return}var e=Ext.Date.format(new Date(),'Y-m-d H:i:s')+' +0000';var b=0;Object.values(a.messageItems).some(function(g){if(b===d){return !0}var f=Object.assign({},g);f.recent=!0;f.id=''+a.recentId;f.mailFolderId=c;f.date=e;a.messageItems[Ext.id()]=f;a.recentId++;b++})},getSender:function getSender(){return [{address:'kontakt@eyeworkers.de',name:'eyeworkers GmbH'},{address:'tsuckow@conjoon.org',name:'tsuckow@conjoon.org'},{address:'ts@siteartwork.de',name:'Thorsten'},{address:'demo@conjoon.org',name:'conjoon demo'},{address:'info@conjoon.org',name:'info@conjoon.org'},{address:'thorsten@suckow-homberg.de',name:'ThorstenSuckow'}]},getSubjects:function getSubjects(){return ['Die eyeworkers GmbH lädt Sie ein!','Come travel with us! 🏝️','🥡 The best food in town just got better! ','Have you ever thought of building React Native Apps? Now is the time!','Introducing: 10 tips to become a better Barista! ☕ Yum!','An instant classic: React Native Apps and why Docusaurus 🦖 rules. Roar! ']},buildBaseMessageItems:function buildBaseMessageItems(){var a=this;if(a.baseMessageItems){return a.baseMessageItems}var f=a.getSender(),i=a.getSubjects(),g=[];var c,h=['dev_sys_conjoon_org','mail_account'],j=['INBOX','INBOX.Sent Messages','INBOX.Junk','INBOX.Drafts','INBOX.Trash'],e,d;for(var b=0;b<a.ITEM_LENGTH;b++){c=j[b%5];e=i[a.buildRandomNumber(0,i.length-1)];if(e.indexOf('eyeworkers')!==-1){d=f[0]}else {d=f[a.buildRandomNumber(1,f.length-1)]}var k={id:b+1+'',date:a.buildRandomDate(b<100),subject:e,from:b===0?'john.smith@awesomewebsite.com':d,to:a.buildAddresses('to',b),cc:a.buildAddresses('cc',b),mailFolderId:c,mailAccountId:b>=a.ITEM_LENGTH/2?h[1]:h[0],testProp:b,messageId:Ext.id(),seen:b===0?!1:a.buildRandomNumber(0,1)?!0:!1,draft:c==='INBOX.Drafts'?!0:!1};g.push(k)}a.baseMessageItems=g;return a.baseMessageItems},resetAll:function resetAll(){var a=this;a.messageDrafts=a.baseMessageItems=a.messageItems=a.messageBodies=null;conjoon.dev.cn_mailsim.data.table.AttachmentTable.resetAll()}});Ext.define('conjoon.dev.cn_mailsim.data.AttachmentSim',{extend:'conjoon.dev.cn_mailsim.data.EmailBaseSim',requires:['conjoon.dev.cn_mailsim.data.table.AttachmentTable','conjoon.dev.cn_mailsim.data.table.MessageTable'],doDelete:function doDelete(f){var g=conjoon.dev.cn_mailsim.data.table.AttachmentTable;console.log('DELETE Attachment',f.xhr.options);var e=this,d=e.extractCompoundKey(f.url),b={},a,c;if(a!==!1){a=g.deleteAttachment(d.mailAccountId,d.mailFolderId,d.parentMessageItemId,d.id)}if(a===!1){c={success:!1}}else {c={success:!0,data:{id:a.parentMessageItemId,mailAccountId:a.mailAccountId,mailFolderId:a.mailFolderId}}}b.responseText=Ext.JSON.encode(c);Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});if(!c.success){b.status=500}console.log('DELETING ATTACHMENT, response: ',b);return b},doPost:function doPost(b){var e=this,h=conjoon.dev.cn_mailsim.data.table.AttachmentTable;var c=e.extractCompoundKey(b.url),g={},a={},d={};console.log('POST Attachment',c,b.xhr.options.records[0].data);for(var f in b.xhr.options.records[0].data){if(!Object.prototype.hasOwnProperty.call(b.xhr.options.records[0].data,f)){continue}g[f]=b.xhr.options.records[0].data[f]}a=h.createAttachment(c.mailAccountId,c.mailFolderId,c.parentMessageItemId,g);conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(a.mailAccountId,a.mailFolderId,a.parentMessageItemId,{hasAttachments:1});Ext.Array.forEach(e.responseProps,function(a){if(a in e){d[a]=e[a]}});var i={data:{id:a.id,parentMessageItemId:a.parentMessageItemId,mailAccountId:a.mailAccountId,mailFolderId:a.mailFolderId,success:!0}};d.responseText=Ext.JSON.encode(i);console.log('POSTED Attachment, response: ',d);return d},data:function data(c){var g=this,e=conjoon.dev.cn_mailsim.data.table.AttachmentTable;var a=g.extractCompoundKey(c.url);var d=a.id,b=c.params;if(d){console.log('GET','Attachment',c,d,b.mailAccountId,b.mailFolderId,b.originalMessageItemId,new Date());return e.getAttachment(a.mailAccountId,a.mailFolderId,a.parentMessageItemId,a.id)}else if(!d){var f=e.getAttachments(a.mailAccountId,a.mailFolderId,a.parentMessageItemId);console.log('GET','Attachments for Message id',a.mailAccountId,a.mailFolderId,a.parentMessageItemId,new Date(),f);return f}else {return [{text:'NOT SUPPORTED'}]}},extractCompoundKey:function extractCompoundKey(f){var a=f.split('/'),c=a.pop().split('?')[0],d,e,b;if(c==='Attachments'){c=undefined;a.push('foo')}d=a.pop();d=a.pop();e=a.pop();e=a.pop();b=a.pop();b=a.pop();b=decodeURIComponent(b);if(this.simletAdapter.validateMailAccountId(b)!==!0){throw new Error('mailAccountId url/header mismatch')}return {mailAccountId:b,mailFolderId:decodeURIComponent(e),parentMessageItemId:decodeURIComponent(d),id:c?decodeURIComponent(c):undefined}}});Ext.define('conjoon.dev.cn_mailsim.data.MailAccountSim',{extend:'conjoon.dev.cn_mailsim.data.EmailBaseSim',getMockAccounts:function getMockAccounts(){return [{id:'dev_sys_conjoon_org',name:'conjoon developer',from:{name:'John Smith',address:'dev@conjoon.org'},replyTo:{name:'John Smith',address:'dev@conjoon.org'},inbox_type:'IMAP',inbox_address:'sfsffs.ffssf.sffs',inbox_port:993,inbox_user:'inboxuser',inbox_password:'inboxpassword',inbox_ssl:!0,outbox_address:'sfsffs.ffssf.sffs',outbox_port:993,outbox_user:'outboxuser',outbox_password:'outboxpassword',outbox_secure:['tls','ssl'][Math.floor(Math.random()*(1-0+1))+0],subscriptions:['INBOX']},{id:'mail_account',name:'google mail',from:{name:'Peter Parker',address:'demo@googlemail.com'},replyTo:{name:'Peter Parker',address:'demo@googlemail.com'},inbox_type:'IMAP',outbox_secure:['tls','ssl'][Math.floor(Math.random()*(1-0+1))+0],subscriptions:['INBOX','[Gmail]']}]},doGet:function doGet(d){var b=this,c=b.getMockAccounts();var a={};a.responseText=Ext.JSON.encode({success:!0,data:c});Ext.Array.forEach(b.responseProps,function(c){if(c in b){a[c]=b[c]}});console.log('GET MailAccounts',a);return a},doPatch:function doPatch(f){var c=this;var b={},a=f.xhr.options.jsonData,h=a.id,e=c.getMockAccounts();if(a.name==='FAILURE'){b.responseText=Ext.JSON.encode({success:!1})}else {for(var d=0,g=e.length;d<g;d++){if(e[d].id===h){if(a.from){a.from=Ext.decode(a.from)}if(a.replyTo){a.replyTo=Ext.decode(a.replyTo)}Ext.apply(e[d],a)}}b.responseText=Ext.JSON.encode({success:!0,data:a})}Ext.Array.forEach(c.responseProps,function(a){if(a in c){b[a]=c[a]}});return b}});Ext.define('conjoon.dev.cn_mailsim.data.MailFolderSim',{extend:'conjoon.dev.cn_mailsim.data.EmailBaseSim',getMockFolder:function getMockFolder(){return [{id:'INBOX',name:'Inbox',unreadCount:3787,folderType:'INBOX',data:[{id:'INBOX.Today',name:'Today',unreadCount:2,data:[],folderType:'FOLDER',mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Last Week',name:'Last Week',data:[],unreadCount:0,folderType:'FOLDER',mailAccountId:'dev_sys_conjoon_org'}],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Sent Messages',name:'Sent',unreadCount:0,folderType:'SENT',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Junk',name:'Junk',unreadCount:0,folderType:'JUNK',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Drafts',name:'Drafts',unreadCount:0,folderType:'DRAFT',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Trash',name:'Trash',unreadCount:5,folderType:'TRASH',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX',name:'Inbox',unreadCount:3787,folderType:'INBOX',data:[],mailAccountId:'mail_account'},{id:'INBOX.Sent Messages',name:'Sent',unreadCount:0,folderType:'SENT',data:[],mailAccountId:'mail_account'},{id:'INBOX.Junk',name:'Junk',unreadCount:0,folderType:'JUNK',data:[],mailAccountId:'mail_account'},{id:'INBOX.Drafts',name:'Drafts',unreadCount:0,folderType:'DRAFT',data:[],mailAccountId:'mail_account'},{id:'INBOX.Trash',name:'Trash',unreadCount:5,folderType:'TRASH',data:[],mailAccountId:'mail_account'}]},doGet:function doGet(c){var a=this,f=a.extractCompoundKey(c.url),d=f.mailAccountId;var b={};console.log('GET MailFolders',c);var e=Ext.Array.filter(a.getMockFolder(),function(a){return a.mailAccountId===''+d});b.responseText=Ext.JSON.encode({data:e});Ext.Array.forEach(a.responseProps,function(d){if(d in a){b[d]=a[d]}});return b},extractCompoundKey:function extractCompoundKey(b){var e=this;var c=b.split('/'),a;c.pop();a=decodeURIComponent(c.pop());var d=this.uriToUrl(b).toString();if(!d.endsWith('/MailAccounts')){if(e.simletAdapter.validateMailAccountId(a)!==!0){throw new Error('mailAccountId url mismatch')}}return {mailAccountId:a}}});function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}function _unsupportedIterableToArray(a,c){if(!a){return}if(typeof a==='string'){return _arrayLikeToArray(a,c)}var b=Object.prototype.toString.call(a).slice(8,-1);if(b==='Object'&&a.constructor){b=a.constructor.name}if(b==='Map'||b==='Set'){return Array.from(a)}if(b==='Arguments'||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)){return _arrayLikeToArray(a,c)}}function _arrayLikeToArray(c,a){if(a==null||a>c.length){a=c.length}for(var b=0,d=new Array(a);b<a;b++){d[b]=c[b]}return d}function _iterableToArrayLimit(b,j){var a=null==b?null:'undefined'!=typeof Symbol&&b[Symbol.iterator]||b['@@iterator'];if(null!=a){var h,g,i,e,d=[],c=!0,f=!1;try{if(i=(a=a.call(b)).next,0===j){if(Object(a)!==a){return}c=!1}else {for(;!(c=(h=i.call(a)).done)&&(d.push(h.value),d.length!==j);c=!0){}}}catch(k){f=!0,g=k}finally{try{if(!c&&null!=a['return']&&(e=a['return'](),Object(e)!==e)){return}}finally{if(f){throw g}}}return d}}function _arrayWithHoles(a){if(Array.isArray(a)){return a}}Ext.define('conjoon.dev.cn_mailsim.data.MessageItemSim',{extend:'conjoon.dev.cn_mailsim.data.EmailBaseSim',requires:['conjoon.dev.cn_mailsim.data.table.MessageTable'],doDelete:function doDelete(l){var a=this,b=a.extractCompoundKey(l.url),j=conjoon.dev.cn_mailsim.data.table.MessageTable;console.log('DELETE MessageItem - ',b);var c={},f=!1,g=b.id,i=b.mailAccountId,k=b.mailFolderId;if(!g){console.log('DELETE MessageItem - no numeric id specified.');return {status:400,success:!1}}var e=j.getMessageItems(),d;for(var h in e){d=e[h];if(d.id===g&&d.mailFolderId===k&&d.mailAccountId===i){delete e[h];f=!0;break}}if(!f){return {status:404,success:!1}}Ext.Array.forEach(a.responseProps,function(b){if(b in a){c[b]=a[b]}});c.responseText=Ext.JSON.encode({success:!0});Ext.apply(a,c);return c},doPost:function doPost(b){var e=b.params.target;if(!e){if(b.url.indexOf('/MessageBody?')!==-1){e='MessageBodyDraft'}else if(b.url.indexOf('/MessageDraft?')!==-1){e='MessageDraft'}else if(b.url.indexOf('/MessageItem?')!==-1){e='MessageItem'}else if(b.url.indexOf('/MessageItems/')!==-1){return this.sendMessage(b)}}if(e==='MessageItem'){console.error('POSTing MessageItem - this should only happen in tests');return}if(Object.keys(b.xhr.options.jsonData.data.attributes).includes('textHtml')||Object.keys(b.xhr.options.jsonData.data.attributes).includes('textPlain')){return this.postMessageBody(b)}console.log('POST MessageDraft - this should only happen in tests',b,b.xhr.options.jsonData);var f=this,a={},c={},g=conjoon.dev.cn_mailsim.data.table.MessageTable;a=f.extractValues(b.xhr.options.jsonData);for(var d in a){if(d==='to'||d==='cc'||d==='bcc'||d==='replyTo'){a[d]=Ext.JSON.decode(a[d])}}if(a.subject==='TESTFAIL'){c.status=500;c.responseText=Ext.JSON.encode({success:!1});return c}a=g.createMessageDraft(a.mailAccountId,a.mailFolderId,a);Ext.Array.forEach(f.responseProps,function(a){if(a in f){c[a]=f[a]}});c.responseText=Ext.JSON.encode({success:!0,data:{id:a.id,mailFolderId:a.mailFolderId,mailAccountId:a.mailAccountId}});return c},doPatch:function doPatch(d){var e=this,c=e.extractCompoundKey(d.url),b={},h=conjoon.dev.cn_mailsim.data.table.MessageTable,a={},g,f=d.params.target;if(!f){if(d.url.indexOf('/MessageBody?')!==-1){f='MessageBodyDraft'}else if(d.url.indexOf('/MessageDraft?')!==-1){f='MessageDraft'}else if(d.url.indexOf('/MessageItem?')!==-1){f='MessageItem'}}if(['MessageBodyDraft','MessageItem'].indexOf(f)!==-1){a=e.extractValues(d.xhr.options.jsonData);console.log('PATCH '+f,a);if(f==='MessageBodyDraft'){g=h.updateMessageBody(c.mailAccountId,c.mailFolderId,c.id,a)}else {g=h.updateMessageItem(c.mailAccountId,c.mailFolderId,c.id,a);g=Object.fromEntries(Object.entries(g).filter(function(b){return !!a[b[0]]}))}Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});g.recent=!1;var l={success:!0,data:g};b.responseText=Ext.JSON.encode(l);console.log('PATCH '+f+',',d.url,', response: ',b);return b}console.log('PATCH MessageDraft',d.xhr.options.jsonData);b={};h=conjoon.dev.cn_mailsim.data.table.MessageTable;a={};c=e.extractCompoundKey(d.url);a=e.extractValues(d.xhr.options.jsonData);if(a.subject==='TESTFAIL'){b.status=500;b.responseText=Ext.JSON.encode({success:!1});return b}var i=h.updateMessageDraft(c.mailAccountId,c.mailFolderId,c.id,a,!0);var k=h.getMessageDraft(i.mailAccountId,i.mailFolderId,i.id);delete a.localId;for(var j in a){if(k[j]){a[j]=k[j]}}Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});b.responseText=Ext.JSON.encode({success:!0,data:a});console.log('PATCH MessageDraft, response: ',a);return b},data:function data(a){var f=this,b=f.extractCompoundKey(a.url),e,q=conjoon.dev.cn_mailsim.data.table.MessageTable,d=q.getMessageItems(),v={},p,r,h=a.params.attributes?a.params.attributes.split(','):[],k=[];if(a.params.messageItemIds){throw new Error('unexpected param messageItemIds')}var c=null;if(a.params.filter){c=JSON.parse(a.params.filter);if(c){c.some(function(b){if(b.property==='id'){c=c[0].property==='id'?c[0].value:[];k=c;return !0}})}}var l=[],m=[];if(h.indexOf('*')!==-1){l=h.filter(function(b){return b!=='*'})}else if(h.length){m=['mailAccountId','mailFolderId','id'].concat(h)}if(a.url.indexOf('/MessageBody')!==-1){console.log('GET MessageBody/MessageBodyDraft ',a.url,b);return this.getMessageBody(b.mailAccountId,b.mailFolderId,b.id,!0)}if(a.params.attributes==='*,previewText,hasAttachments,size'){console.log('GET MessageDraft ',a.url);var n=f.extractCompoundKey(a.url);p=n.mailAccountId;r=n.mailFolderId;e=n.id;var t=q.getMessageDraft(p,r,e);Ext.Array.forEach(f.responseProps,function(b){if(b in f){v[b]=f[b]}});var i=null;if(!t){i={success:!1}}else {i={success:!0,data:t}}console.log('GET MessageDraft, response ',i);return i}if(b.id){e=b.id;var j;for(var x in d){var g=d[x];if(g.mailAccountId===b.mailAccountId&&g.mailFolderId===b.mailFolderId&&g.id===''+e){j=g;break}}if(!j){return {status:404,success:!1}}console.log('GET MessageItem ',j);return {data:j}}else if(!e){console.log('GET MessageItems ',a,b);var o=[];var s=function s(f){var c=d[f];if(c.mailAccountId===b.mailAccountId&&c.mailFolderId===b.mailFolderId){if(k.length){if(!k.includes(c.id)){return 'continue'}}if(l.length){l.forEach(function(b){delete c[b]})}else if(m.length){var e={};m.forEach(function(b){e[b]=c[b]});c=e}o.push(c)}};for(var w in d){var u=s(w);if(u==='continue'){continue}}console.log('GET MessageItems response',o);if(!a.xhr.options.proxy){a.xhr.options.proxy={getReader:function getReader(){return {getTotalProperty:function getTotalProperty(){return 'count'},rootProperty:'data',getRootProperty:function getRootProperty(){return 'data'}}}}}return o}else {return d}},doGet:function doGet(b){var c=this,a=conjoon.dev.cn_mailsim.data.table.MessageTable;if(a.buildRandomNumber(0,1)===1&&b.url.indexOf('/MessageItems?')!==-1&&b.params.filter){a.addRecentItems(a.buildRandomNumber(0,2),c.extractCompoundKey(b.url).mailFolderId)}return c.callParent(arguments)},getMessageBody:function getMessageBody(b,c,d){var a;if(conjoon.dev.cn_mailsim.data.table.MessageTable.peekMessageBody(b,c,d)){a={success:!0,data:conjoon.dev.cn_mailsim.data.table.MessageTable.getMessageBody(b,c,d)};var e='MessageBodyDraft/MessageBody';console.log('GET '+e+', response, ',a);return a}a={success:!1};console.log('GET MessageBody, response, ',a);return a},postMessageBody:function postMessageBody(d){console.log('POST MessageBodyDraft',d.xhr.options.jsonData);var f=conjoon.dev.cn_mailsim.data.table.MessageTable;var c=this,a={},e={},b;a=c.extractValues(d.xhr.options.jsonData);delete a.attributes;if(!a.textPlain&&a.textHtml){a.textPlain=Ext.util.Format.stripTags(a.textHtml)}else if(!a.textHtml){a.textHtml=a.textPlain}var h=f.createMessageDraft(a.mailAccountId,a.mailFolderId,{});b=f.updateMessageBody(a.mailAccountId,a.mailFolderId,h.id,{textPlain:a.textPlain,textHtml:a.textHtml});Ext.Array.forEach(c.responseProps,function(a){if(a in c){e[a]=c[a]}});var g={success:!0,data:{id:b.id,mailFolderId:b.mailFolderId,mailAccountId:b.mailAccountId,textPlain:b.textPlain,textHtml:b.textHtml}};e.responseText=Ext.JSON.encode(g);console.log('POSTED MessageBodyDraft',d.url,g);return e},extractValues:function extractValues(b){var a=Object.assign({},b.data,b.data.attributes);delete a.type;delete a.attributes;return a},extractCompoundKey:function extractCompoundKey(e){var a=e.split('/'),b=a.pop().split('?')[0],d,c;if(b==='MessageItems'){b=undefined;a.push('foo')}if(['MessageBody','MessageDraft','MessageItem'].includes(b)){b=a.pop()}a.pop();d=a.pop();a.pop();c=a.pop();c=decodeURIComponent(c);if(this.simletAdapter.validateMailAccountId(c)!==!0){throw new Error('mailAccountId url/header mismatch')}return {mailAccountId:c,mailFolderId:decodeURIComponent(d),id:b?decodeURIComponent(b):undefined}},sendMessage:function sendMessage(i){console.log('POST SendMessage',i.xhr.options);var d=this,c={},e=conjoon.dev.cn_mailsim.data.table.MessageTable;var h=d.extractCompoundKey(i.url),p=h.id,j=h.mailAccountId,k=h.mailFolderId,g=e.getMessageDraft(j,k,p);if(g.xCnDraftInfo){var l=Ext.decode(atob(g.xCnDraftInfo)),f=_slicedToArray(l,3),m=f[0],n=f[1],o=f[2];var a=e.getMessageItems();for(var b in a){if(a[b].mailAccountId===m&&a[b].id===o&&a[b].mailFolderId===n){e.updateAllItemData(a[b].mailAccountId,a[b].mailFolderId,a[b].id,{answered:!0});break}}}if(g.subject==='SENDFAIL'){c.responseText=Ext.JSON.encode({success:!1});return c}Ext.Array.forEach(d.responseProps,function(a){if(a in d){c[a]=d[a]}});c.responseText=Ext.JSON.encode({success:!0});return c}});function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}function _unsupportedIterableToArray(a,c){if(!a){return}if(typeof a==='string'){return _arrayLikeToArray(a,c)}var b=Object.prototype.toString.call(a).slice(8,-1);if(b==='Object'&&a.constructor){b=a.constructor.name}if(b==='Map'||b==='Set'){return Array.from(a)}if(b==='Arguments'||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)){return _arrayLikeToArray(a,c)}}function _arrayLikeToArray(c,a){if(a==null||a>c.length){a=c.length}for(var b=0,d=new Array(a);b<a;b++){d[b]=c[b]}return d}function _iterableToArrayLimit(b,j){var a=null==b?null:'undefined'!=typeof Symbol&&b[Symbol.iterator]||b['@@iterator'];if(null!=a){var h,g,i,e,d=[],c=!0,f=!1;try{if(i=(a=a.call(b)).next,0===j){if(Object(a)!==a){return}c=!1}else {for(;!(c=(h=i.call(a)).done)&&(d.push(h.value),d.length!==j);c=!0){}}}catch(k){f=!0,g=k}finally{try{if(!c&&null!=a['return']&&(e=a['return'](),Object(e)!==e)){return}}finally{if(f){throw g}}}return d}}function _arrayWithHoles(a){if(Array.isArray(a)){return a}}Ext.define('conjoon.dev.cn_mailsim.app.PackageController',{extend:'coon.core.app.PackageController',requires:['Ext.ux.ajax.SimManager','conjoon.dev.cn_mailsim.data.AttachmentSim','conjoon.dev.cn_mailsim.data.MailAccountSim','conjoon.dev.cn_mailsim.data.MailFolderSim','conjoon.dev.cn_mailsim.data.MessageItemSim'],init:function init(b){var c=this,a=b.getPackageConfig(c);Object.entries({'conjoon.dev.cn_mailsim.data.AttachmentSim':a.attachment,'conjoon.dev.cn_mailsim.data.MessageItemSim':a.messageItem,'conjoon.dev.cn_mailsim.data.MailFolderSim':a.mailFolder,'conjoon.dev.cn_mailsim.data.MailAccountSim':a.mailAccount}).forEach(function(d){var c=_slicedToArray(d,2),e=c[0],a=c[1];if(a.enabled){Ext.ux.ajax.SimManager.register(Ext.create(e,{url:new RegExp(a.url,'im'),delay:a.delay}))}})}});Ext.define('conjoon.dev.cn_mailsim.data.SimletAdapter',{validateMailAccountId:function validateMailAccountId(a){return !0},validateRequest:function validateRequest(a){return null}});