if (self.CavalryLogger) { CavalryLogger.start_js(["alxUa"]); }

__d("MessengerThreadlistRow.react",["cx","fbt","ix","Bootloader","FBRTCCore","Image.react","immutable","ImmutableObject","LinkWithHiddenURLBar.react","mercuryBlockedParticipantsRe","MercuryConfig","MercuryIDs","MercuryMessageInfo","MercuryThreadActions","MercuryThreadSnippet.react","mercuryThreadTimestampReact","MercuryThreadTitle.react","MercuryTimestamp","MessagingTag","MessengerActions","MessengerAdminGroupUtils","messengerButtonReact","messengerDialogsRe","MessengerPresenceStatusUtils","MessengerMessageRequestsTypedLogger","messengerThreadImageReact","messengerThreadlistRowActionsReact","messengerThreadlistRowSeenHeadReact","MessengerStateStore","messengerURIUtilsRe","MNAdsMessageUtils","React","ReactDOM","RTCCallState","RTCConfig","FBRTCLogger","UserAgent","CurrentUser","getPageIDFromThreadID","gkx","joinClasses","messengerRTLClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("mercuryBlockedParticipantsRe").get(),n=c("mercuryThreadTimestampReact").jsComponent,o=c("messengerButtonReact").jsComponent,p=c("messengerThreadImageReact").jsComponent,q=c("messengerThreadlistRowActionsReact").jsComponent,r=c("messengerThreadlistRowSeenHeadReact").jsComponent,s=c("FBRTCLogger").Trigger,t=c("React").PropTypes,u=50,v=j("86913"),w=j("86914"),x=function x(z){var A=void 0;switch(z){case"pending":case"other":case"inbox":case"thread":A=z;break;default:A=null}return A};k=babelHelpers.inherits(y,c("React").PureComponent);l=k&&k.prototype;function y(){__p&&__p();var z,A;for(var B=arguments.length,C=Array(B),D=0;D<B;D++)C[D]=arguments[D];return A=(z=l.constructor).call.apply(z,[this].concat(C)),this.state={actionsOpen:false},this.$MessengerThreadlistRow1=0,this.$MessengerThreadlistRow2=null,this.$MessengerThreadlistRow15=function(){__p&&__p();var E=c("CurrentUser").getID(),F=c("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,E);c("MercuryThreadActions").get()["delete"](this.props.thread.thread_id);if(this.props.isActive)c("MessengerActions").selectThread(null);if(this.props.showAggregation){var G=c("MessengerStateStore").getState().threadIDs;if(G){var H=G.filter(function(I){return this.props.thread.thread_id!==I}.bind(this));c("MessengerActions").selectAggregation(H)}}new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setSurface(x(this.props.folder)).setFolderType("pending").setThreadKey(F).setEntryPoint("inbox_banner").log()}.bind(this),this.$MessengerThreadlistRow16=function(E){var F=c("CurrentUser").getID(),G=c("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,F);if(!E){c("messengerDialogsRe").removeDialog();new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setSurface(x(this.props.folder)).setFolderType("pending").setThreadKey(G).setEntryPoint("inbox_banner").log()}}.bind(this),this.$MessengerThreadlistRow3=function(E){E.preventDefault();this.props.onFocus(this.props.thread.thread_id)}.bind(this),this.$MessengerThreadlistRow4=function(E){this.$MessengerThreadlistRow1++;if(this.$MessengerThreadlistRow2)return;this.$MessengerThreadlistRow2=setTimeout(function(){this.props.onSelect&&this.props.onSelect();this.$MessengerThreadlistRow1=0;this.$MessengerThreadlistRow2=null}.bind(this),1e3)}.bind(this),this.$MessengerThreadlistRow5=function(E){this.$MessengerThreadlistRow1--;if(this.$MessengerThreadlistRow1===0){clearTimeout(this.$MessengerThreadlistRow2);this.$MessengerThreadlistRow2=null}}.bind(this),this.$MessengerThreadlistRow7=function(E){this.props.onSelect()}.bind(this),this.$MessengerThreadlistRow8=function(E){if(this.props.logClickHandler){var F=this.props.thread.is_canonical?c("MercuryIDs").getUserIDFromThreadID(this.props.thread.thread_id)||"0":this.props.thread.thread_fbid;this.props.logClickHandler&&this.props.logClickHandler(F)}}.bind(this),this.$MessengerThreadlistRow14=function(E){this.setState({actionsOpen:E})}.bind(this),this.$MessengerThreadlistRow17=function(E){E.preventDefault();E.stopPropagation();var F=window.callWindow&&!window.callWindow.closed&&window.callWindow.focus;if(F)window.callWindow.focus();else{var G=this.props.thread,H=G.rtc_call_data,I=G.thread_fbid;c("FBRTCCore").startGroupCall({conferenceName:"GROUP:"+I,hasVideo:true,serverInfoData:H.server_info_data,trigger:s.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON})}}.bind(this),A}y.prototype.componentDidUpdate=function(z){if(this.props.isFocused)if(!z.isFocused)if(this.props.isActionsFocused)c("ReactDOM").findDOMNode(this.refs.actions.refs.button).focus();else c("ReactDOM").findDOMNode(this.refs.link).focus();else if(!z.isActionsFocused&&this.props.isActionsFocused)c("ReactDOM").findDOMNode(this.refs.actions.refs.button).focus();else if(z.isActionsFocused&&!this.props.isActionsFocused)c("ReactDOM").findDOMNode(this.refs.link).focus()};y.prototype.render=function(){var z=this.props,A=z.isActive,B=z.isActionsFocused,C=z.isTabbable,D=z.participants,E=z.thread,F=z.viewer,G=E.unread_count>0,H=c("messengerURIUtilsRe").getURIForThreadID(E.thread_id);return c("React").createElement("li",{"aria-live":G?"polite":null,"aria-relevant":A||G?"additions text":null,onFocus:this.$MessengerThreadlistRow3,className:"_5l-3 _1ht1"+(E.folder===c("MessagingTag").PENDING?" _4as3":"")+(this.props.isActive?" _1ht2":"")+(G?" _1ht3":"")+(this.state.actionsOpen?" _13aa":"")+(this.props.isMuted?" _569x":"")+(this.props.isFocused?" _23_m":"")+(G&&c("UserAgent").isBrowser("Chrome")&&c("UserAgent").isPlatform("Mac")?" _5fx8":""),onDragEnter:A?null:this.$MessengerThreadlistRow4,onDragLeave:A?null:this.$MessengerThreadlistRow5,role:"row",ref:function(I){return I&&this.props.registerThreadRefs&&this.props.registerThreadRefs(I)}.bind(this),tabIndex:-1},c("React").createElement("div",{className:"_5l-3 _1ht5",id:this.$MessengerThreadlistRow6(E.thread_id),role:"gridcell",tabIndex:-1},c("React").createElement(c("LinkWithHiddenURLBar.react"),{href:H.toString(),onClick:this.$MessengerThreadlistRow7,onAllClicks:this.$MessengerThreadlistRow8,className:"_1ht5 _2il3 _5l-3 _3itx",s:"true",ref:"link",role:"link",tabIndex:C&&!B?0:-1},c("React").createElement("div",{"aria-hidden":true,className:"_1qt3 _5l-3"},c("React").createElement(p,{participants:D,size:u,thread:E,viewer:F})),c("React").createElement("div",{className:"_1qt4 _5l-m"},c("React").createElement("div",{className:"_1qt5 _5l-3"},c("React").createElement(c("MercuryThreadTitle.react"),{className:"_1ht6",showUnreadCount:false,thread:E,useShortName:false,viewer:F}),c("React").createElement("div",null,c("MNAdsMessageUtils").isAdsMessageRequest(E)?c("MNAdsMessageUtils").renderAdsMessageRequestStatus():this.$MessengerThreadlistRow9(E))),c("React").createElement("div",{className:"_1qt5 _5l-3"},c("React").createElement(c("MercuryThreadSnippet.react"),{className:c("joinClasses")("_1htf",c("messengerRTLClasses")(E.snippet,true)),participants:D,shouldRenderYou:true,thread:E,viewer:F})),this.$MessengerThreadlistRow10(),this.$MessengerThreadlistRow11()))),this.$MessengerThreadlistRow12())};y.prototype.$MessengerThreadlistRow12=function(){if(this.props.showActions===false)return null;var z=this.props,A=z.isActionsFocused,B=z.isTabbable,C=z.participants,D=z.thread,E=z.viewer,F=c("MessengerPresenceStatusUtils").getStatusFromCanonicalThread(this.props.participants,D),G=F&&F.contact,H=m.isMessageBlocked(D),I=c("MessengerAdminGroupUtils").isJoinableThread(D),J=c("MessengerAdminGroupUtils").isGroupChat(D),K=D.unread_count>0;return c("React").createElement("div",{role:"gridcell"},c("React").createElement("div",{"aria-describedby":this.$MessengerThreadlistRow6(D.thread_id),"aria-haspopup":"true","aria-label":i._("Actions"),className:"_2j6 _5l-3",tabIndex:B&&A?0:-1,role:"button"},c("React").createElement(r,{className:"_5bli",isHidden:this.state.actionsOpen,lastMessage:this.props.lastMessage,participants:C,readReceipts:this.props.readReceipts,thread:D,viewer:E}),this.$MessengerThreadlistRow13(),c("React").createElement(q,{contact:G,isGroupChat:J,isJoinableThread:I,isMuted:this.props.isMuted,isOpen:this.state.actionsOpen,isUnread:K,isBlocked:H,onArchive:this.props.onArchiveSetting,onDelete:this.props.onDelete,onLeaveGroup:this.props.onLeaveGroup,onMarkRead:this.props.onMarkRead,onMarkSpam:this.props.onMarkSpam,onMarkUnread:this.props.onMarkUnread,onMute:this.props.onMute,onToggle:this.$MessengerThreadlistRow14,onUnmute:this.props.onUnmute,onIgnore:this.props.onIgnore,onBlock:this.props.onBlock,onUnblock:this.props.onUnblock,showLeaveGroup:this.props.showLeaveGroup,showMute:true,showIgnoreGroup:c("gkx")("AT4mycXtTvfXJMAqrd_BSmI0_EEB-8pOs_AaNI2VArui1ThGLeffrrAudIg_2uctK6Ji6Zom3olu5BpcCU5_nD4U"),showBlock:D.is_canonical_user&&D.other_user_fbid&&E!==D.other_user_fbid,showReport:c("getPageIDFromThreadID")(this.props.thread.thread_id),tabIndex:-1,thread:D,ref:"actions"}),c("React").createElement("div",{className:"_56ck"})))};y.prototype.$MessengerThreadlistRow13=function(){var z=this.props.lastMessage;if(this.state.actionsOpen||!z)return null;var A=c("MercuryMessageInfo").isSending(z),B=c("MercuryMessageInfo").hasError(z);if(!A&&!B)return null;return c("React").createElement(c("Image.react"),{className:"_wtw"+(A?" _3qh2":""),src:A?w:v})};y.prototype.$MessengerThreadlistRow9=function(z){return c("React").createElement(n,{className:"_1ht7",time:z.timestamp,title:c("MercuryTimestamp").getAbsoluteTimestamp(z.timestamp),text:c("MercuryTimestamp").getRelativeTimestamp(z.timestamp)})};y.prototype.$MessengerThreadlistRow10=function(){__p&&__p();if(this.props.thread.folder!==c("MessagingTag").PENDING||!c("MercuryConfig").EPB)return null;var z=c("CurrentUser").getID(),A=c("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,z);return c("React").createElement("div",{className:"_5l-3"},c("React").createElement(o,{className:"_3yvh",type:"primary",label:i._("Accept"),onClick:function(B){__p&&__p();B.preventDefault();B.stopPropagation();if(this.props.showAggregation){var C=c("MessengerStateStore").getState().threadIDs;if(C){var D=C.filter(function(E){return this.props.thread.thread_id!==E}.bind(this));c("MessengerActions").selectAggregation(D)}}c("MercuryThreadActions").get().changeFolder(this.props.thread.thread_id,c("MessagingTag").INBOX);new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_accept_request").setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setSurface(x(this.props.folder)).setFolderType("pending").setThreadKey(A).setEntryPoint("inbox_banner").log()}.bind(this)}),c("React").createElement(o,{className:"_3yvh _1d-z",type:"faded",label:i._("Decline"),onClick:function(B){B.preventDefault();B.stopPropagation();c("Bootloader").loadModules(["messengerDeclineDialogReact"],function(C){var D=C.jsComponent,E=c("MercuryIDs").isGroupChat(this.props.thread.thread_id);c("messengerDialogsRe").showDialog(function(){return c("React").createElement(D,{onBlock:this.props.onBlock,onDelete:this.$MessengerThreadlistRow15,onToggle:this.$MessengerThreadlistRow16,isGroupChat:E})}.bind(this));new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_attempt").setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(this.props.thread.thread_id)).setSurface(x(this.props.folder)).setFolderType("pending").setThreadKey(A).setEntryPoint("inbox_banner").log()}.bind(this),"MessengerThreadlistRow.react")}.bind(this)}))};y.prototype.$MessengerThreadlistRow11=function(){if(!c("RTCConfig").RtcConferencingGK||!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state===c("RTCCallState").NO_ONGOING_CALL)return null;var z=window.callWindow&&!window.callWindow.closed?i._("Return to Call"):i._("Join Call");return c("React").createElement(o,{className:"_4ry5",label:z,onClick:this.$MessengerThreadlistRow17,type:"primary"})};y.prototype.$MessengerThreadlistRow6=function(z){return"row_header_id_"+z};y.propTypes={isActive:t.bool.isRequired,isActionsFocused:t.bool,isFocused:t.bool,isMuted:t.bool.isRequired,lastMessage:t.instanceOf(c("ImmutableObject")),logClickHandler:t.func,onArchive:t.func.isRequired,onArchiveSetting:t.func.isRequired,onDelete:t.func.isRequired,onMarkRead:t.func.isRequired,onMarkSpam:t.func.isRequired,onMarkUnread:t.func.isRequired,onMute:t.func.isRequired,onSelect:t.func.isRequired,onUnmute:t.func.isRequired,onIgnore:t.func.isRequired,onBlock:t.func.isRequired,onUnblock:t.func.isRequired,participants:t.instanceOf(c("immutable").Map).isRequired,readReceipts:t.instanceOf(c("immutable").OrderedMap).isRequired,registerThreadRefs:t.func,showAggregation:t.bool,thread:t.instanceOf(c("ImmutableObject")).isRequired,viewer:t.string.isRequired};f.exports=y}),null);