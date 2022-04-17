Ext.define('conjoon.dev.cn_mailsim.data.table.AttachmentTable',{singleton:!0,attachments:null,largestAttachmentId:0,getRandom:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},moveAttachments:function(g,h,f,c){const a=this,d=[g,h,f].join('-'),b=[g,c.mailFolderId?c.mailFolderId:h,c.parentMessageItemId?c.parentMessageItemId:f].join('-');if(d===b){return}let i;if(!a.attachments){a.attachments={}}if(!a.attachments[d]){return}if(a.attachments[b]){Ext.raise('Unexpected error: attachments existing for '+b)}i=a.attachments[d];delete a.attachments[d];a.attachments[b]=i;for(var e in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],e)){continue}if(c.mailFolderId){a.attachments[b][e]['mailFolderId']=c.mailFolderId}if(c.parentMessageItemId){a.attachments[b][e]['parentMessageItemId']=c.parentMessageItemId}}return a.attachments[b]},createAttachment:function(e,f,c,d){var a=this,g=e+'-'+f+'-'+c;if(!a.attachments){a.attachments={}}if(!a.attachments[g]){a.attachments[g]=[]}d.id=++a.largestAttachmentId;a.attachments[g].push(d);let b=conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(e,f,c,{},!0);if(!b){debugger}a.moveAttachments(e,f,c,{parentMessageItemId:b.id});return Ext.apply(d,{mailAccountId:b.mailAccountId,mailFolderId:b.mailFolderId,parentMessageItemId:b.id})},deleteAttachment:function(c,d,b,g){if(arguments.length<4){Ext.raise('Unexpected missing arguments.')}let a=this,e=0;if(!a.attachments){a.attachments={}}for(let f in a.attachments){let h=a.attachments[f];for(let i in h){let j=h[i];if(j.parentMessageItemId===b&&j.mailFolderId===d&&j.mailAccountId===c&&j.id+''===g+''){e=1;delete a.attachments[f][i];break}}}if(e>0){let e=conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(c,d,b,{},!0);a.moveAttachments(c,d,b,{parentMessageItemId:e.id});return {parentMessageItemId:e.id,mailAccountId:e.mailAccountId,mailFolderId:e.mailFolderId}}return !1},getAttachments:function(f,g,e){const a=this;if(!a.attachments){a.attachments={}}let d=null;for(var b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(var c in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],c)){continue}if(a.attachments[b][c].mailAccountId===f&&a.attachments[b][c].mailFolderId===g&&a.attachments[b][c].parentMessageItemId+''===e+''){if(d===null){d=[]}d.push(a.attachments[b][c])}}}return d},createRandomAttachments:function(e,f,c){const a=this,b=[e,f,c].join('-');let i=['IMG3701','documents','REPOSITORYPARTSTUFF_packed.type.full7897','images','architecture_draft'],d=[{type:'application/pdf',extension:'pdf'},{type:'image/jpg',extension:'jpg'},{type:'application/x-rar-compressed',extension:'rar'},{type:'application/zip',extension:'zip'},{type:'text/plain',extension:'txt'}],j=['24233','23532553253','6588668','23434','46337773'],g;if(!a.attachments){a.attachments={}}for(var h=0,k=a.getRandom(0,5);h<k;h++){if(!a.attachments[b]){a.attachments[b]=[]}g={id:++a.largestAttachmentId,parentMessageItemId:c,mailFolderId:f,mailAccountId:e,text:i[a.getRandom(0,4)]+'.'+d[a.getRandom(0,4)].extension,type:d[a.getRandom(0,4)].type,size:j[a.getRandom(0,4)]};a.attachments[b].push(g)}return a.attachments[b]},getAttachmentAt:function(d){const a=this;let c=0;for(let b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(let e in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],e)){continue}if(c===d){return a.attachments[b][e]}c++}}return null},getAttachment:function(e,g,d,f){const a=this;if(!a.attachments){a.attachments={}}for(var b in a.attachments){if(!Object.prototype.hasOwnProperty.call(a.attachments,b)){continue}for(var c in a.attachments[b]){if(!Object.prototype.hasOwnProperty.call(a.attachments[b],c)){continue}}if(a.attachments[b][c].mailAccountId===e&&a.attachments[b][c].mailFolderId===g&&a.attachments[b][c].parentMessageItemId+''===d+''&&a.attachments[b][c].id+''===f){return a.attachments[b][c]}}return null},resetAll:function(){const a=this;a.attachments=null;a.largestAttachmentId=0}});Ext.define('conjoon.dev.cn_mailsim.data.table.MessageTable',{singleton:!0,requires:['conjoon.dev.cn_mailsim.data.table.AttachmentTable'],ITEM_LENGTH:1000,messageBodies:null,messageItems:null,baseMessageItems:null,DRAFT_KEY:0,recentId:10000000,buildRandomNumber:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},buildRandomSizeInBytes:function(){var a=this;return a.buildRandomNumber(1,10000000)},buildPreviewText:function(a,b,c){var d=this;return d.getMessageBody(a,b,c).textPlain.substring(0,200)},buildRandomDate:function(){var b=this,a=new Date(),c=b.buildRandomNumber(2007,a.getFullYear()),e=b.buildRandomNumber(1,c===a.getFullYear()?a.getMonth()+1:12),f=b.buildRandomNumber(1,c===a.getFullYear()&&e-1===a.getMonth()?a.getDate():31),g=b.buildRandomNumber(0,c===a.getFullYear()&&e-1===a.getMonth()&&f===a.getDate()?a.getHours():23),h=b.buildRandomNumber(0,c===a.getFullYear()&&e-1===a.getMonth()&&f===a.getDate()?a.getMinutes():59),d=function(a){return a<10?'0'+a:a};return Ext.String.format('{0}-{1}-{2} {3}:{4}:00 +0000',c,d(e),d(f),d(g),d(h))},buildAddresses:function(a,b){if(b+''===1+''&&a!=='to'){return []}return [{name:'Firstname Lastname'+a,address:'name'+a+'@domain.tld'},{name:'Firstname 1 Lastname 2'+a,address:'name1'+a+'@domain1.tld'}]},remove:function(c){const d=this;let a=d.messageItems;console.log('REMOVING',c.getId());for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b].id+''===c.getId()+''){delete a[b];console.log('REMOVED');return}}},createMessageBody:function(d,e,f){if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}var a=this,c=Ext.id(),b=0;a.getMessageItems();if(!a.messageBodies){a.messageBodies={}}for(var h in a.messageBodies){var g=parseInt(a.messageBodies[h].id,10);b=Math.max(g,b)}a.messageBodies[c]=Ext.applyIf({id:++b,mailAccountId:d,mailFolderId:e},f);return a.messageBodies[c]},updateMessageBody:function(d,c,e,a,g=!1){if(arguments.length<4){Ext.raise('Unexpected missing arguments')}const b=this,f=b.getMessageBody(d,c,e);if(a.mailFolderId&&c!==a.mailFolderId){let h;for(let i in b.messageBodies){let f=b.messageBodies[i];if(f.mailAccountId===d&&f.mailFolderId===c&&f.id+''===e+''){h=i;break}}if(!h){Ext.raise('no MessageBody found!')}delete b.messageBodies[h];b.messageBodies[Ext.id()]=f}delete a.id;if(!a.textPlain&&a.textHtml){a.textPlain=Ext.util.Format.stripTags(a.textHtml)}Ext.apply(f,a);if(g!==!0){let f=b.updateAllItemData(d,c,e,{},!0);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(d,c,e,{parentMessageItemId:f.id})}return f},messages:["<ul><li><img /><div style='background:black'>testmeclickyo</div>Blindtext <a href='mailto:dev@conjoon.org'><b> mail me @ conjoon</b></a> - Lorem <a href='http://www.conjoon.org'><b>conjoon</b></a> ipsum dolor sit amet, consectetuer adipiscing  elit. Aenean commodo ligula eget dolor. Aenean massa.</li><li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br />pretium quis, sem.</li> <li>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</li> <li>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</li></ul>",'<p>Text <a href=\'mailto:dev@conjoon.org\'><b> mail me @ conjoon</b></a> here: Lorem ipsum dolor sit amet, <br />consectetuer <a href=\'http://www.conjoon.org\'><b>conjoon</b></a> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, <br />aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede <a class="external ext" href="#">link</a> mollis pretium. Integer tincidunt. <br />Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, <br />porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>','<blockquote><img />Following <a href=\'mailto:dev@conjoon.org\'><b> mail me@conjoon.com</b></a> news! <a href=\'http://www.conjoon.org\'><b>https://conjoon.org</b></a> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat <br />massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In <em>em</em> enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam <a class="external ext" href="#">link</a> dictum felis eu <br />pede mollis pretium. </blockquote>'],peekMessageBody:function(a,b,c){const d=this;if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}return d.getMessageBody(a,b,c,!1)!==null},getMessageBody:function(d,e,g,h=!0){if(arguments.length<3){Ext.raise('Unexpected missing arguments')}var a=this,f=Ext.id(),c;if(!a.messageBodies){a.messageBodies={}}for(let b in a.messageBodies){if(!Object.prototype.hasOwnProperty.call(a.messageBodies,b)){continue}if(a.messageBodies[b]['mailAccountId']===d&&a.messageBodies[b]['mailFolderId']===e&&a.messageBodies[b]['id']+''===g+''){return a.messageBodies[b]}}if(h===!1){return null}c=this.messages[a.buildRandomNumber(0,2)];a.messageBodies[f]={id:g,mailFolderId:e,mailAccountId:d,textHtml:c,textPlain:Ext.util.Format.stripTags(c.replace(/<br \/>/g,'\n'))};return a.messageBodies[f]},getNextMessageDraftKey:function(){var a=this,e=a.getMessageDrafts(),f=a.getMessageItems(),g=this.DRAFT_KEY,c=0,d=0;for(var b in e){if(!Object.prototype.hasOwnProperty.call(e,b)){continue}c++}for(b in f){if(!Object.prototype.hasOwnProperty.call(f,b)){continue}d++}g=Math.max(c,d,a.ITEM_LENGTH,this.DRAFT_KEY);this.DRAFT_KEY=++g;return this.DRAFT_KEY+''},getMessageDraft:function(c,d,e){if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}var f=this,a=f.getMessageDrafts();for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b]['mailAccountId']===c&&a[b]['mailFolderId']===d&&a[b]['id']+''===e+''){return a[b]}}return null},getMessageDrafts:function(){var a=this,c=[],d=a.buildBaseMessageItems();if(a.messageDrafts){return a.messageDrafts}for(var b in a.baseMessageItems){if(!Object.prototype.hasOwnProperty.call(a.baseMessageItems,b)){continue}var e=a.buildAddresses('bcc',b);c[Ext.id()]=Ext.apply({bcc:e,replyTo:b!==0&&a.buildRandomNumber(0,1)?a.getSender()[a.buildRandomNumber(0,5)]:undefined},d[b])}a.messageDrafts=c;return a.messageDrafts},updateMessageDraft:function(a,b,d,f,e=!1){if(arguments.length<3){Ext.raise('Unexpected missing arguments')}var g=this;let c=g.updateAllItemData(a,b,d,f,e);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(a,b,d,{parentMessageItemId:c.id});return c},updateMessageItem:function(a,b,d,f,e=!1){if(arguments.length<4){Ext.raise('Unexpected missing arguments')}var g=this;let c=g.updateAllItemData(a,b,d,f,e);conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(a,b,d,{parentMessageItemId:c.id});return c},createMessageDraft:function(c,d,e){if(arguments.length!==3){Ext.raise('Unexpected missing argument')}var b=this,f=Ext.id(),a=b.getNextMessageDraftKey(),h=b.getMessageDrafts(),j=b.getMessageItems(),g=Ext.util.Format.date(new Date(),'Y-m-d H:i:s')+' +0000';conjoon.dev.cn_mailsim.data.table.AttachmentTable.attachments[a]=null;var i=b.getMessageBody(c,d,a);i.textPlain='';i.textHtml='';h[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});j[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});b.baseMessageItems[a]=Ext.apply(e,{messageId:f,id:a,mailFolderId:d,mailAccountId:c,date:g});b.getMessageItems();b.getMessageDrafts();return h[a]},updateAllItemData:function(d,e,g,b,m=!1){if(arguments.length<4){Ext.raise('Unexpected missing arguments')}var h=this,o=h.getMessageDraft(d,e,g),j=h.getMessageItem(d,e,g),l=[o,j],i=!1;let a=[];for(let n in b){if(!Object.prototype.hasOwnProperty.call(b,n)){continue}a.push(n)}if(a.indexOf('localId')!==-1&&a.indexOf('mailAccountId')!==-1&&a.indexOf('id')!==-1&&a.indexOf('mailFolderId')!==-1){if(a.length===4||a.length===5&&(a.indexOf('seen')!==-1||a.indexOf('flagged')!==-1||a.indexOf('answered')!==-1)){i=!0}}if(a.length===1&&a.indexOf('answered')!==-1){i=!0}if(b.mailFolderId&&b.mailFolderId!==e){m=!0;let a=conjoon.dev.cn_mailsim.data.table.AttachmentTable.moveAttachments(d,e,g,{mailFolderId:b.mailFolderId});b.hasAttachments=a&&a.length?1:0;h.updateMessageBody(d,e,g,{mailFolderId:b.mailFolderId},!0)}for(var k=0,p=l.length;k<p;k++){var f=l[k];if(!f){continue}if(i===!1){f['date']=Ext.util.Format.date(new Date(),'Y-m-d H:i:s')+' +0000'}for(var c in b){if(!Object.prototype.hasOwnProperty.call(f,c)){}switch(c){case 'to':case 'cc':case 'bcc':case 'from':if(Ext.isString(b[c])){f[c]=Ext.JSON.decode(b[c])};break;case 'date':break;default:f[c]=b[c];break;}}}if(m){let a=h.getNextMessageDraftKey();h.changeIdFor(d,j.mailFolderId,g,a)}return j},changeIdFor:function(h,i,j,c){if(!h||!i||!j||!c){Ext.raise('missing or invalid argument!')}const k=this;let g=k.getMessageItems(),f=k.getMessageDrafts(),e=k.messageBodies,b,a,d;for(b in g){if(!Object.prototype.hasOwnProperty.call(g,b)){continue}a=g[b];if(a['mailAccountId']===h&&a['mailFolderId']===i&&a['id']+''===j+''){delete g[b];a['id']=c;g[c]=a;break}}for(b in f){if(!Object.prototype.hasOwnProperty.call(f,b)){continue}a=f[b];if(a['mailAccountId']===h&&a['mailFolderId']===i&&a['id']+''===j+''){delete f[b];a['id']=c;f[c]=a;break}}for(b in e){if(!Object.prototype.hasOwnProperty.call(e,b)){continue}d=e[b];if(d['mailAccountId']===h&&d['mailFolderId']===i&&d['id']+''===j+''){delete e[b];d['id']=c;e[c]=d;break}}},getMessageItemAt:function(b){const c=this,a=c.getMessageItems();let e=0;for(var d in a){if(e++===b){return a[d]}}return null},getMessageItem:function(d,e,f){if(arguments.length!==3){Ext.raise('Unexpected missing arguments')}var g=this,a=g.getMessageItems(),c=null;for(var b in a){if(!Object.prototype.hasOwnProperty.call(a,b)){continue}if(a[b]['mailAccountId']===d&&a[b]['mailFolderId']===e&&a[b]['id']+''===f+''){c=a[b];break}}return c},getMessageItems:function(){var a=this,e=conjoon.dev.cn_mailsim.data.table.AttachmentTable,c=a.buildBaseMessageItems(),d=[];if(a.messageItems){for(var b in a.messageItems){if(!Object.prototype.hasOwnProperty.call(a.messageItems,b)){continue}a.messageItems[b].previewText=a.buildPreviewText(a.messageItems[b].mailAccountId,a.messageItems[b].mailFolderId,a.messageItems[b].id)}return a.messageItems}for(b in c){d[Ext.id()]=Ext.apply({hasAttachments:e.createRandomAttachments(c[b].mailAccountId,c[b].mailFolderId,c[b].id)?1:0,size:a.buildRandomSizeInBytes(),previewText:a.buildPreviewText(c[b].mailAccountId,c[b].mailFolderId,c[b].id)},c[b])}a.messageItems=d;return a.messageItems},addRecentItems(d,c){const a=this;if(!a.messageItems){return}const e=Ext.Date.format(new Date(),'Y-m-d H:i:s')+' +0000';let b=0;Object.values(a.messageItems).some(g=>{if(b===d){return !0}let f=Object.assign({},g);f.recent=!0;f.id=''+a.recentId;f.mailFolderId=c;f.date=e;a.messageItems[Ext.id()]=f;a.recentId++;b++})},getSender(){return [{address:'tsuckow@conjoon.org',name:'conjoonadmin'},{address:'service@booking.com',name:'Booking.com'},{address:'info@ebay.de',name:'ebay Verkäufer Team'},{address:'mailer@mtb-news.de',name:'MTB News'},{address:'service@otto.de',name:'Otto GmbH'},{address:'info@amazon.de',name:'Amazon'}]},getSubjects(){return ['Welcome to conjoon','Re: Ihre Buchung in der Unterkunft','Achtung! DVBT Antennen sind bald nutzlos, Thorsten Suckow-Homberg','Verbindliche Bestellung Banshee Headbadge','Vielen Dank für Ihre Bestellung','Monte Walsh [Blu Ray] und mehr aus DVD & Blu Ray Klassiker']},buildBaseMessageItems:function(){const a=this;if(a.baseMessageItems){return a.baseMessageItems}const h=a.getSender(),g=a.getSubjects(),d=[];let c,e='dev_sys_conjoon_org',f=['INBOX','INBOX.Sent Messages','INBOX.Junk','INBOX.Drafts','INBOX.Trash'];for(var b=0;b<a.ITEM_LENGTH;b++){c=f[b%5];let i={id:b+1+'',date:a.buildRandomDate(b<100),subject:g[a.buildRandomNumber(0,5)],from:b===0?'from@domain.tld':h[a.buildRandomNumber(0,5)],to:a.buildAddresses('to',b),cc:a.buildAddresses('cc',b),mailFolderId:c,mailAccountId:e,testProp:b,messageId:Ext.id(),seen:b===0?!1:a.buildRandomNumber(0,1)?!0:!1,draft:c==='INBOX.Drafts'?!0:b===0?!1:a.buildRandomNumber(0,1)?!0:!1};d.push(i)}a.baseMessageItems=d;return a.baseMessageItems},resetAll:function(){const a=this;a.messageDrafts=a.baseMessageItems=a.messageItems=a.messageBodies=null;conjoon.dev.cn_mailsim.data.table.AttachmentTable.resetAll()}});Ext.define('conjoon.dev.cn_mailsim.data.AttachmentSim',{extend:'Ext.ux.ajax.JsonSimlet',requires:['conjoon.dev.cn_mailsim.data.table.AttachmentTable','conjoon.dev.cn_mailsim.data.table.MessageTable'],doDelete:function(f){const g=conjoon.dev.cn_mailsim.data.table.AttachmentTable;console.log('DELETE Attachment',f.xhr.options);let e=this,d=e.extractCompoundKey(f.url),b={},a,c;if(a!==!1){a=g.deleteAttachment(d.mailAccountId,d.mailFolderId,d.parentMessageItemId,d.id)}if(a===!1){c={success:!1}}else {c={success:!0,data:{id:a.parentMessageItemId,mailAccountId:a.mailAccountId,mailFolderId:a.mailFolderId}}}b.responseText=Ext.JSON.encode(c);Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});if(!c.success){b.status=500}console.log('DELETING ATTACHMENT, response: ',b);return b},doPost:function(b){const e=this,h=conjoon.dev.cn_mailsim.data.table.AttachmentTable;let c=e.extractCompoundKey(b.url),g={},a={},d={};console.log('POST Attachment',c,b.xhr.options.records[0].data);for(var f in b.xhr.options.records[0].data){if(!Object.prototype.hasOwnProperty.call(b.xhr.options.records[0].data,f)){continue}g[f]=b.xhr.options.records[0].data[f]}a=h.createAttachment(c.mailAccountId,c.mailFolderId,c.parentMessageItemId,g);conjoon.dev.cn_mailsim.data.table.MessageTable.updateAllItemData(a.mailAccountId,a.mailFolderId,a.parentMessageItemId,{hasAttachments:1});Ext.Array.forEach(e.responseProps,function(a){if(a in e){d[a]=e[a]}});let i={data:{id:a.id,parentMessageItemId:a.parentMessageItemId,mailAccountId:a.mailAccountId,mailFolderId:a.mailFolderId,success:!0}};d.responseText=Ext.JSON.encode(i);console.log('POSTED Attachment, response: ',d);return d},data:function(c){const f=this,e=conjoon.dev.cn_mailsim.data.table.AttachmentTable;let a=f.extractCompoundKey(c.url);var d=a.id,b=c.params;if(d){console.log('GET','Attachment',c,d,b.mailAccountId,b.mailFolderId,b.originalMessageItemId,new Date());return e.getAttachment(a.mailAccountId,a.mailFolderId,a.parentMessageItemId,a.id)}else {if(!d){let b=e.getAttachments(a.mailAccountId,a.mailFolderId,a.parentMessageItemId);console.log('GET','Attachments for Message id',a.mailAccountId,a.mailFolderId,a.parentMessageItemId,new Date(),b);return b}else {return [{text:'NOT SUPPORTED'}]}}},extractCompoundKey:function(f){let a=f.split('/'),b=a.pop().split('?')[0],c,e,d;if(b==='Attachments'){b=undefined;a.push('foo')}c=a.pop();c=a.pop();e=a.pop();e=a.pop();d=a.pop();d=a.pop();return {mailAccountId:decodeURIComponent(d),mailFolderId:decodeURIComponent(e),parentMessageItemId:decodeURIComponent(c),id:b?decodeURIComponent(b):undefined}}});Ext.define('conjoon.dev.cn_mailsim.data.MailAccountSim',{extend:'Ext.ux.ajax.JsonSimlet',getMockAccounts:()=>[{id:'dev_sys_conjoon_org',name:'conjoon developer',from:{name:'John Smith',address:'dev@conjoon.org'},replyTo:{name:'John Smith',address:'dev@conjoon.org'},inbox_type:'IMAP',inbox_address:'sfsffs.ffssf.sffs',inbox_port:993,inbox_user:'inboxuser',inbox_password:'inboxpassword',inbox_ssl:!0,outbox_address:'sfsffs.ffssf.sffs',outbox_port:993,outbox_user:'outboxuser',outbox_password:'outboxpassword',outbox_ssl:!0},{id:'mail_account',name:'google mail',from:{name:'Peter Parker',address:'demo@googlemail.com'},replyTo:{name:'Peter Parker',address:'demo@googlemail.com'},inbox_type:'IMAP'}],doGet:function(d){const b=this,c=b.getMockAccounts();let a={};a.responseText=Ext.JSON.encode({success:!0,data:c});Ext.Array.forEach(b.responseProps,function(c){if(c in b){a[c]=b[c]}});console.log('GET MailAccounts',a);return a},doPut:function(e){const c=this;let b={},a=e.xhr.options.jsonData,f=a.id,d=c.getMockAccounts();if(a.name==='FAILURE'){b.responseText=Ext.JSON.encode({success:!1})}else {for(let c=0,g=d.length;c<g;c++){if(d[c].id===f){if(a.from){a.from=Ext.decode(a.from)}if(a.replyTo){a.replyTo=Ext.decode(a.replyTo)}Ext.apply(d[c],a)}}b.responseText=Ext.JSON.encode({success:!0,data:a})}Ext.Array.forEach(c.responseProps,function(a){if(a in c){b[a]=c[a]}});return b}});Ext.define('conjoon.dev.cn_mailsim.data.MailFolderSim',{extend:'Ext.ux.ajax.JsonSimlet',getMockFolder:()=>[{id:'INBOX',name:'Inbox',unreadCount:3787,folderType:'INBOX',data:[{id:'INBOX.MyStuff',name:'MyStuff',unreadCount:3787,folderType:'INBOX',mailAccountId:'dev_sys_conjoon_org',data:[{id:'INBOX.MyStuff.Deeper',name:'Deeper',unreadCount:2,data:[],folderType:'INBOX',mailAccountId:'dev_sys_conjoon_org'}]}],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Sent Messages',name:'Sent',unreadCount:0,folderType:'SENT',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Junk',name:'Junk',unreadCount:0,folderType:'JUNK',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Drafts',name:'Drafts',unreadCount:0,folderType:'DRAFT',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX.Trash',name:'Trash',unreadCount:5,folderType:'TRASH',data:[],mailAccountId:'dev_sys_conjoon_org'},{id:'INBOX',name:'Inbox',unreadCount:3787,folderType:'INBOX',data:[],mailAccountId:'mail_account'},{id:'INBOX.Sent Messages',name:'Sent',unreadCount:0,folderType:'SENT',data:[],mailAccountId:'mail_account'},{id:'INBOX.Junk',name:'Junk',unreadCount:0,folderType:'JUNK',data:[],mailAccountId:'mail_account'},{id:'INBOX.Drafts',name:'Drafts',unreadCount:0,folderType:'DRAFT',data:[],mailAccountId:'mail_account'},{id:'INBOX.Trash',name:'Trash',unreadCount:5,folderType:'TRASH',data:[],mailAccountId:'mail_account'}],doGet:function(f){const a=this,e=a.extractCompoundKey(f.url),c=e.mailAccountId;let b={};let d=Ext.Array.filter(a.getMockFolder(),function(a){return a.mailAccountId===''+c});b.responseText=Ext.JSON.encode({data:d});Ext.Array.forEach(a.responseProps,function(c){if(c in a){b[c]=a[c]}});return b},extractCompoundKey:function(c){let b=c.split('/'),a;b.pop();a=b.pop();return {mailAccountId:decodeURIComponent(a)}}});Ext.define('conjoon.dev.cn_mailsim.data.MessageItemSim',{extend:'Ext.ux.ajax.JsonSimlet',requires:['conjoon.dev.cn_mailsim.data.table.MessageTable'],doDelete:function(h){const a=this,b=a.extractCompoundKey(h.url),f=h.params.target,l=conjoon.dev.cn_mailsim.data.table.MessageTable;if(f==='MessageBody'){Ext.raise('Not implemented')}console.log('DELETE MessageItem - ',f,b);let c={},g=!1,i=b.id,k=b.mailAccountId,m=b.mailFolderId;if(!i){console.log('DELETE MessageItem - no numeric id specified.');return {status:400,success:!1}}let e=l.getMessageItems(),d;for(var j in e){d=e[j];if(d.id===i&&d.mailFolderId===m&&d.mailAccountId===k){delete e[j];g=!0;break}}if(!g){return {status:404,success:!1}}Ext.Array.forEach(a.responseProps,function(b){if(b in a){c[b]=a[b]}});c.responseText=Ext.JSON.encode({success:!0});Ext.apply(a,c);return c},doPost:function(a){let g=a.params.target;if(g==='MessageItem'){console.error('POSTing MessageItem - this should only happen in tests');return}if(a.params.target==='MessageBodyDraft'){return this.postMessageBody(a)}if(a.params.target!=='MessageDraft'){Ext.raise('Invalid target parameter: '+a.params.target)}console.log('POST MessageDraft',a,a.xhr.options.jsonData);var e=this,b={},d={},f=conjoon.dev.cn_mailsim.data.table.MessageTable;for(var c in a.xhr.options.jsonData){if(!Object.prototype.hasOwnProperty.call(a.xhr.options.jsonData,c)){continue}if(c==='to'||c==='cc'||c==='bcc'){b[c]=Ext.JSON.decode(a.xhr.options.jsonData[c])}else {b[c]=a.xhr.options.jsonData[c]}}if(b.subject==='TESTFAIL'){d.status=500;d.responseText=Ext.JSON.encode({success:!1});return d}b=f.createMessageDraft(b.mailAccountId,b.mailFolderId,b);Ext.Array.forEach(e.responseProps,function(b){if(b in e){d[b]=e[b]}});d.responseText=Ext.JSON.encode({success:!0,data:{id:b.id,mailFolderId:b.mailFolderId,mailAccountId:b.mailAccountId}});return d},doPut:function(d){var e=this,c=e.extractCompoundKey(d.url),b={},h=conjoon.dev.cn_mailsim.data.table.MessageTable,a={},i,g=d.params.target;if(['MessageBodyDraft','MessageItem','MessageDraft'].indexOf(g)===-1){Ext.raise('Invalid target parameter: '+g)}if(['MessageBodyDraft','MessageItem'].indexOf(g)!==-1){for(let f in d.xhr.options.jsonData){if(!Object.prototype.hasOwnProperty.call(d.xhr.options.jsonData,f)){continue}a[f]=d.xhr.options.jsonData[f]}console.log('PUT '+g,a);if(g==='MessageBodyDraft'){i=h.updateMessageBody(c.mailAccountId,c.mailFolderId,c.id,a)}else {i=h.updateMessageItem(c.mailAccountId,c.mailFolderId,c.id,a)}Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});i.recent=!1;let j={success:!0,data:i};b.responseText=Ext.JSON.encode(j);console.log('PUT '+g+', response: ',b);return b}console.log('PUT MessageDraft',d.xhr.options.jsonData);b={};h=conjoon.dev.cn_mailsim.data.table.MessageTable;a={};c=e.extractCompoundKey(d.url);for(let f in d.xhr.options.jsonData){if(!Object.prototype.hasOwnProperty.call(d.xhr.options.jsonData,f)){continue}a[f]=d.xhr.options.jsonData[f]}if(a.subject==='TESTFAIL'){b.status=500;b.responseText=Ext.JSON.encode({success:!1});return b}let j=h.updateMessageDraft(c.mailAccountId,c.mailFolderId,c.id,a,!0);let k=h.getMessageDraft(j.mailAccountId,j.mailFolderId,j.id);delete a.localId;for(let f in a){if(k[f]){a[f]=k[f]}}Ext.Array.forEach(e.responseProps,function(a){if(a in e){b[a]=e[a]}});b.responseText=Ext.JSON.encode({success:!0,data:a});console.log('PUT MessageDraft, response: ',a);return b},data:function(a){let e=this,b=e.extractCompoundKey(a.url),d,j=conjoon.dev.cn_mailsim.data.table.MessageTable,c=j.getMessageItems(),m={},i,k,l=a.params.attributes?a.params.attributes.split(','):[],g=a.params.messageItemIds?a.params.messageItemIds.split(','):[];let h=[];if(l.indexOf('*')!==-1){h=l.filter(b=>b!=='*')}if(['MessageBodyDraft','MessageItem','MessageBody','MessageDraft'].indexOf(a.params.target)===-1){Ext.raise('Invalid target parameter: '+a.params.target)}if(a.params.target==='MessageBody'){console.log('GET MessageBody ',a.url,b);return this.getMessageBody(b.mailAccountId,b.mailFolderId,b.id)}if(a.params.target==='MessageBodyDraft'){console.log('GET MessageBodyDraft ',a.url,b);return this.getMessageBody(b.mailAccountId,b.mailFolderId,b.id,!0)}if(a.params.target==='MessageDraft'){console.log('GET MessageDraft ',a.url);let c=e.extractCompoundKey(a.url);i=c.mailAccountId;k=c.mailFolderId;d=c.id;let f=j.getMessageDraft(i,k,d);Ext.Array.forEach(e.responseProps,function(b){if(b in e){m[b]=e[b]}});let b=null;if(!f){b={success:!1}}else {b={success:!0,data:f}}console.log('GET MessageDraft, response ',a.url);return b}if(b.id){d=b.id;let e;for(let f in c){let g=c[f];if(g.mailAccountId===b.mailAccountId&&g.mailFolderId===b.mailFolderId&&g.id===''+d){e=g;break}}if(!e){return {status:404,success:!1}}return {data:e}}else {if(!d){console.log('GET MessageItems ',a,b);var f=[];for(let d in c){let e=c[d];if(e.mailAccountId===b.mailAccountId&&e.mailFolderId===b.mailFolderId){if(g.length){if(!g.includes(e.id)){continue}}h.forEach(b=>delete e[b]);f.push(e)}}console.log('GET MessageItems response',f);if(!a.xhr.options.proxy){a.xhr.options.proxy={getReader:()=>({getTotalProperty:()=>'count',rootProperty:'data',getRootProperty:()=>'data'})}}return f}else {return c}}},doGet(a){const c=this,b=conjoon.dev.cn_mailsim.data.table.MessageTable;if(a.params.target==='MessageItem'&&a.params.filter){b.addRecentItems(b.buildRandomNumber(0,2),c.extractCompoundKey(a.url).mailFolderId)}return c.callParent(arguments)},getMessageBody:function(b,c,d,e=!1){let a;if(conjoon.dev.cn_mailsim.data.table.MessageTable.peekMessageBody(b,c,d)){a={success:!0,data:conjoon.dev.cn_mailsim.data.table.MessageTable.getMessageBody(b,c,d)};let f=e?'MessageBodyDraft':'MessageBody';console.log('GET '+f+', response, ',a);return a}a={success:!1};console.log('GET MessageBody, response, ',a);return a},postMessageBody:function(c){console.log('POST MessageBodyDraft',c.xhr.options.jsonData);const g=conjoon.dev.cn_mailsim.data.table.MessageTable;var e=this,a={},d={},b;for(var f in c.xhr.options.jsonData){if(!Object.prototype.hasOwnProperty.call(c.xhr.options.jsonData,f)){continue}a[f]=c.xhr.options.jsonData[f]}if(!a.textPlain&&a.textHtml){a.textPlain=Ext.util.Format.stripTags(a.textHtml)}else {if(!a.textHtml){a.textHtml=a.textPlain}}let i=g.createMessageDraft(a.mailAccountId,a.mailFolderId,{});b=g.updateMessageBody(a.mailAccountId,a.mailFolderId,i.id,{textPlain:a.textPlain,textHtml:a.textHtml});Ext.Array.forEach(e.responseProps,function(a){if(a in e){d[a]=e[a]}});let h={success:!0,data:{id:b.id,mailFolderId:b.mailFolderId,mailAccountId:b.mailAccountId,textPlain:b.textPlain,textHtml:b.textHtml}};d.responseText=Ext.JSON.encode(h);console.log('POSTED MessageBodyDraft',h);return d},extractCompoundKey:function(e){let a=e.split('/'),b=a.pop().split('?')[0],d,c;if(b==='MessageItems'){b=undefined;a.push('foo')}a.pop();d=a.pop();a.pop();c=a.pop();return {mailAccountId:decodeURIComponent(c),mailFolderId:decodeURIComponent(d),id:b?decodeURIComponent(b):undefined}}});Ext.define('conjoon.dev.cn_mailsim.data.SendMessageSim',{extend:'Ext.ux.ajax.JsonSimlet',requires:['conjoon.dev.cn_mailsim.data.table.MessageTable'],doPost:function(b){console.log('POST SendMessage',b.xhr.options);var e=this,a={},c=conjoon.dev.cn_mailsim.data.table.MessageTable,h=b.xhr.options.params.id,f=b.xhr.options.params.mailAccountId,g=b.xhr.options.params.mailFolderId,d=c.getMessageDraft(f,g,h);if(d.xCnDraftInfo){let [f,g,h]=Ext.decode(atob(d.xCnDraftInfo));let a=c.getMessageItems();for(let e in a){if(a[e].mailAccountId===f&&a[e].id===h&&a[e].mailFolderId===g){c.updateAllItemData(a[e].mailAccountId,a[e].mailFolderId,a[e].id,{answered:!0});break}}}if(d.subject==='SENDFAIL'){a.responseText=Ext.JSON.encode({success:!1});return a}Ext.Array.forEach(e.responseProps,function(c){if(c in e){a[c]=e[c]}});a.responseText=Ext.JSON.encode({success:!0});return a}});Ext.define('conjoon.dev.cn_mailsim.app.PackageController',{extend:'coon.core.app.PackageController',requires:['Ext.ux.ajax.SimManager','conjoon.dev.cn_mailsim.data.AttachmentSim','conjoon.dev.cn_mailsim.data.MailAccountSim','conjoon.dev.cn_mailsim.data.MailFolderSim','conjoon.dev.cn_mailsim.data.MessageItemSim','conjoon.dev.cn_mailsim.data.SendMessageSim'],init(b){const c=this,a=b.getPackageConfig(c);Object.entries({'conjoon.dev.cn_mailsim.data.AttachmentSim':a.attachment,'conjoon.dev.cn_mailsim.data.MessageItemSim':a.messageItem,'conjoon.dev.cn_mailsim.data.MailFolderSim':a.mailFolder,'conjoon.dev.cn_mailsim.data.MailAccountSim':a.mailAccount,'conjoon.dev.cn_mailsim.data.SendMessageSim':a.sendMessage}).forEach(c=>{const [cls,a]=c;if(a.enabled){Ext.ux.ajax.SimManager.register(Ext.create(cls,{url:new RegExp(a.url,'im'),delay:a.delay}))}})}});