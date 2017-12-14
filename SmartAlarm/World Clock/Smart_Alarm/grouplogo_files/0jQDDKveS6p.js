if (self.CavalryLogger) { CavalryLogger.start_js(["3Dtvr"]); }

__d("MessengerWebViewReactionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:MessengerWebViewReactionsLoggerConfig",this.$MessengerWebViewReactionsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:MessengerWebViewReactionsLoggerConfig",this.$MessengerWebViewReactionsTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$MessengerWebViewReactionsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$MessengerWebViewReactionsTypedLogger1=babelHelpers["extends"]({},this.$MessengerWebViewReactionsTypedLogger1,j);return this};h.prototype.setEmojiGroup=function(j){this.$MessengerWebViewReactionsTypedLogger1.emoji_group=j;return this};h.prototype.setEmojiGroupCount=function(j){this.$MessengerWebViewReactionsTypedLogger1.emoji_group_count=j;return this};h.prototype.setEvent=function(j){this.$MessengerWebViewReactionsTypedLogger1.event=j;return this};h.prototype.setMid=function(j){this.$MessengerWebViewReactionsTypedLogger1.mid=j;return this};h.prototype.setSenderID=function(j){this.$MessengerWebViewReactionsTypedLogger1.sender_id=j;return this};h.prototype.setVC=function(j){this.$MessengerWebViewReactionsTypedLogger1.vc=j;return this};var i={emoji_group:true,emoji_group_count:true,event:true,mid:true,sender_id:true,vc:true};f.exports=h}),null);
__d("MessengerReactionsGroups.react",["cx","fbt","MessengerTextWithEmoticons.react","React"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){__p&&__p();var n=this.props,o=n.reactions,p=n.selectedGroup,q=n.onGroupSelected,r={all:0},s=[],t=Object.values(o);t.forEach(function(w){if(typeof w==="string"){if(!r[w]){r[w]=1;s.push(w)}else r[w]++;r.all++}});var u=false,v=s.sort(function(w,x){return r[x]-r[w]}).map(function(w){var x=p===w;u=u||x;return c("React").createElement("li",{className:x?"selected":"",key:w,onClick:q.bind(this,w),role:"button",tabIndex:"0"},c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:w}),c("React").createElement("span",{className:"_359u"},r[w]))}.bind(this));return c("React").createElement("ol",{className:"_koh _2pit"},c("React").createElement("li",{className:!u?"selected":"",key:"allReactions",onClick:q.bind(this,null),role:"button",tabIndex:"0"},c("React").createElement("span",{className:"_359u"},i._({"*":"All {total reactions}"},[i.param("total reactions",r.all,[0])]))),v)};function m(){j.apply(this,arguments)}m.propTypes={onGroupSelected:l.func.isRequired,reactions:l.object.isRequired,selectedGroup:l.string.isRequired};f.exports=m}),null);
__d("MessengerReactionsList.react",["cx","Image.react","MercuryIDs","MercuryParticipants","messengerProfileImageWrapperReact","MessengerTextWithEmoticons.react","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("messengerProfileImageWrapperReact").jsComponent,l=c("React").PropTypes,m=40;i=babelHelpers.inherits(n,c("React").Component);j=i&&i.prototype;n.prototype.render=function(){__p&&__p();var o=this.props,p=o.participants,q=o.reactions,r=Object.keys(q).map(function(s){__p&&__p();var t=c("MercuryIDs").getParticipantIDFromUserID(s),u=void 0;if(p)u=p.get(t);var v=null;if(!u)u=c("MercuryParticipants").getNow(t);if(u)v=c("React").createElement(c("Image.react"),{alt:"",src:u.image_src,height:m,width:m});var w=u&&u.name,x=q[s];return c("React").createElement("div",{className:"_3s-3 _2pin",key:"profile-reaction-"+s},c("React").createElement(k,{size:m,showBadge:false},v,c("React").createElement("div",{className:"_3s-4"},c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:x}))),c("React").createElement("div",{className:"_3s-8 _3-9b _3-8w"},w))});return c("React").createElement("div",{className:"_5jpi _2pit"},r)};function n(){i.apply(this,arguments)}n.propTypes={participants:l.object,reactions:l.object.isRequired};f.exports=n}),null);
__d("MessengerReactionsOverview.react",["MessengerReactionsGroups.react","MessengerReactionsList.react","MessengerWebViewReactionsTypedLogger","React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes,k="ALL";h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;function l(){__p&&__p();var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.state={selectedGroup:k},this.$MessengerReactionsOverview1=function(r){var s=this.props.message,t=s.reactions,u=void 0;if(!r)u=Object.values(t).length;else u=Object.values(t).filter(function(v){return v===r}).length;new(c("MessengerWebViewReactionsTypedLogger"))().setEvent("select_group").setMid(s.message_id).setSenderID(s.author).setEmojiGroup(r||k).setEmojiGroupCount(u).log();if(!r)this.setState({selectedGroup:k});else this.setState({selectedGroup:r})}.bind(this),n}l.prototype.render=function(){__p&&__p();var m=this.props,n=m.participants,o=m.message,p=o.reactions,q=this.state.selectedGroup;if(!p)return null;var r=void 0;if(q===k)r=p;else{var s=Object.keys(p);r=s.reduce(function(t,u){if(p[u]===q)t[u]=q;return t},{})}return c("React").createElement("div",null,c("React").createElement(c("MessengerReactionsGroups.react"),{onGroupSelected:this.$MessengerReactionsOverview1,reactions:p,selectedGroup:q}),c("React").createElement(c("MessengerReactionsList.react"),{participants:n,reactions:r}))};l.propTypes={isFromViewer:j.bool.isRequired,message:j.object.isRequired,participants:j.object.isRequired};f.exports=l}),null);
__d("messengerReactionsOverviewReact",["bs_js_boolean","ReasonReact","MessengerReactionsOverview.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l){return c("ReasonReact").wrapJsForReason(c("MessengerReactionsOverview.react"),{isFromViewer:c("bs_js_boolean").to_js_boolean(i),message:j,participants:k},l)}g.make=h}),null);
__d("messengerReactionsDialogReact",["fbt","React","ReasonReact","messengerDialogsRe","messengerDialogReact","messengerReactionsOverviewReact"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(n){if(n)return 0;else return c("messengerDialogsRe").removeDialog(0)}function j(){return c("messengerDialogsRe").removeDialog(0)}var k=c("ReasonReact").statelessComponent("MessengerReactionsDialogReact");function l(n,o,p,q){var r=k.slice();r[9]=function(){return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](0,i,0,0,0,["default"],[544],[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Title[0](0,[h._("Message Reactions")])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0](0,[h._("Close")],0,0,[j],[0],0,0,[]))])),c("React").createElement("div",undefined,c("ReasonReact").element(0,0,c("messengerReactionsOverviewReact").make(n,o,p,[])))]))};return r}var m=c("ReasonReact").wrapReasonForJs(k,function(n){return l(+n.isFromViewer,n.message,n.participants,[])});g.handleToggle=i;g.handleDone=j;g.component=k;g.make=l;g.jsComponent=m}),null);