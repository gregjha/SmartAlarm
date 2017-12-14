if (self.CavalryLogger) { CavalryLogger.start_js(["ck2np"]); }

__d("MessengerThreadInfoPanel.react",["cx","fbt","CurrentUser","immutable","ImmutableObject","Link.react","MercuryAttachment","MercuryIDs","MercuryThreadInfo","MercuryMessageStore","MessageThreadAssociatedObjectUtils","messengerAddToConversationDialogReact","MessengerAdminGroupUtils","MessengerConfig","MessengerContactAdapters","messengerDialogsRe","messengerDomIDsRe","MessengerInfoPanelAssociatedObjectSection.react","MessengerInfoPanelGroupSection.react","messengerInfoPanelNameSectionReact","MessengerInfoPanelPeopleSection.react","messengerInfoPanelSectionReact","messengerInfoPanelThreadOptionsContainerReact","messengerInfoPanelThreadStatsContainerReact","MessengerSharedLinksContainer.react","MessengerSharedLinksContainerRoute","MessengerSharedPhotosContainer.react","MessengerSharedPhotosContainerRoute","MessengerSharedFilesContainer.react","MessengerSharedFilesContainerRoute","mercuryBlockedParticipantsRe","React","react-relay/classic/container/RelayRootContainer","SubscriptionsHandler","gkx"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("messengerAddToConversationDialogReact").jsComponent,m=c("messengerDomIDsRe").ids,n=c("messengerInfoPanelNameSectionReact").jsComponent,o=c("messengerInfoPanelSectionReact").jsComponent,p=c("messengerInfoPanelThreadOptionsContainerReact").jsComponent,q=c("messengerInfoPanelThreadStatsContainerReact").jsComponent,r=c("mercuryBlockedParticipantsRe").get(),s=c("React").PropTypes;j=babelHelpers.inherits(t,c("React").PureComponent);k=j&&j.prototype;function t(){__p&&__p();var u,v;for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return v=(u=k.constructor).call.apply(u,[this].concat(x)),this.$MessengerThreadInfoPanel2=undefined,this.$MessengerThreadInfoPanel3=false,this.state={sharedPhotoSection:null,sharedFilesSection:null,sharedLinksSection:null},this.$MessengerThreadInfoPanel12=function(){this.$MessengerThreadInfoPanel3=false}.bind(this),this.$MessengerThreadInfoPanel15=function(z,event){this.props.onContactSelect(c("MessengerContactAdapters").fromMercuryParticipant(z))}.bind(this),this.$MessengerThreadInfoPanel14=function(z,A){this.props.onContactAction(z,c("MessengerContactAdapters").fromMercuryParticipant(A))}.bind(this),this.$MessengerThreadInfoPanel13=function(event){event.preventDefault();c("messengerDialogsRe").showDialog(function(){return c("React").createElement(l,{thread:this.props.thread,viewer:this.props.viewer})}.bind(this))}.bind(this),v}t.prototype.componentWillMount=function(){this.subscribeStoreUpdate(this.props.thread.thread_id)};t.prototype.componentWillReceiveProps=function(u){if(u.thread.thread_id!==this.props.thread.thread_id||u.photosSectionCollapsed!==this.props.photosSectionCollapsed||u.filesSectionCollapsed!==this.props.filesSectionCollapsed||u.linksSectionCollapsed!==this.props.linksSectionCollapsed){this.$MessengerThreadInfoPanel2&&this.$MessengerThreadInfoPanel2.release();this.subscribeStoreUpdate(u.thread.thread_id);this.$MessengerThreadInfoPanel3=true;setTimeout(function(){return this.setState({sharedPhotoSection:this.$MessengerThreadInfoPanel4(true),sharedFilesSection:this.$MessengerThreadInfoPanel5(true),sharedLinksSection:this.$MessengerThreadInfoPanel6(true)})}.bind(this),1e3)}};t.prototype.subscribeStoreUpdate=function(u){__p&&__p();this.$MessengerThreadInfoPanel1=new(c("MercuryMessageStore"))(u);this.$MessengerThreadInfoPanel2=new(c("SubscriptionsHandler"))();this.$MessengerThreadInfoPanel2.addSubscriptions(this.$MessengerThreadInfoPanel1.subscribe(function(v){__p&&__p();if(v.messages.length<1)return;var w=v.eventType==c("MercuryMessageStore").MESSAGES_RECEIVED,x=v.eventType==c("MercuryMessageStore").MESSAGES_CHANGED,y=v.messages[v.messages.length-1];if(!w&&!x)return;if(y.has_attachment&&y.attachments.length>0){var z=y.attachments.find(function(A){return c("MercuryAttachment").isPhotoAttachment(A)||c("MercuryAttachment").isVideoAttachment(A)});this.$MessengerThreadInfoPanel3=true;if(z)setTimeout(function(){return this.setState({sharedPhotoSection:this.$MessengerThreadInfoPanel4(true),sharedFilesSection:this.$MessengerThreadInfoPanel5(true)})}.bind(this),1e3)}if(y.attachments&&y.attachments.length>0){this.$MessengerThreadInfoPanel3=true;setTimeout(function(){return this.setState({sharedLinksSection:this.$MessengerThreadInfoPanel6(true)})}.bind(this),1e3)}}.bind(this)))};t.prototype.componentWillUnmount=function(){this.$MessengerThreadInfoPanel2&&this.$MessengerThreadInfoPanel2.release()};t.prototype.componentDidUpdate=function(){if(!this.$MessengerThreadInfoPanel3)this.setState({sharedPhotoSection:null,sharedFilesSection:null,sharedLinksSection:null})};t.prototype.render=function(){var u=this.props,v=u.viewer,w=u.thread,x=c("MercuryIDs").getParticipantIDFromUserID(v),y=w.participants&&w.participants.indexOf(x)!==-1,z=this.$MessengerThreadInfoPanel3?this.state.sharedFilesSection:this.$MessengerThreadInfoPanel5(false),A=this.$MessengerThreadInfoPanel3?this.state.sharedPhotoSection:this.$MessengerThreadInfoPanel4(false),B=this.$MessengerThreadInfoPanel3?this.state.sharedLinksSection:this.$MessengerThreadInfoPanel6(false),C=r.isMessageBlocked(w);return c("React").createElement("div",{className:"_3tkv",id:m.THREAD_INFO_PANEL},c("React").createElement("h3",{className:"accessible_elem"},i._("Conversation Information")),c("React").createElement(n,{contact:this.props.contact,isUnread:this.props.isUnread,isUserActive:this.props.isUserActive,isBlocked:C,lastActive:this.props.lastActive,onArchive:this.props.onArchive,onDelete:this.props.onDelete,onLeaveGroup:this.props.onLeaveGroup,onMarkRead:this.props.onMarkRead,onMarkSpam:this.props.onMarkSpam,onMarkUnread:this.props.onMarkUnread,onMute:this.props.onMute,onThreadNameChange:this.props.onThreadNameChange,onThreadPhotoChange:this.props.onThreadPhotoChange,onUnmute:this.props.onUnmute,onIgnore:this.props.onIgnore,onBlock:this.props.onBlock,onUnblock:this.props.onUnblock,showIgnoreGroup:c("gkx")("AT4mycXtTvfXJMAqrd_BSmI0_EEB-8pOs_AaNI2VArui1ThGLeffrrAudIg_2uctK6Ji6Zom3olu5BpcCU5_nD4U"),showBlock:this.props.showBlock,participants:this.props.participants,platform:this.props.platform,showLeaveGroup:this.props.showLeaveGroup,showReport:this.props.showReport,thread:this.props.thread,viewer:this.props.viewer}),this.$MessengerThreadInfoPanel7(),c("React").createElement(p,{isCollapsed:this.props.threadOptionsSectionCollapsed,participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer,onToggle:this.props.onThreadOptionsSectionToggle}),this.$MessengerThreadInfoPanel8(),c("MessengerAdminGroupUtils").canSeeGroupOptions(y,w,v)?this.$MessengerThreadInfoPanel9():null,this.props.thread.is_canonical?this.$MessengerThreadInfoPanel10():this.$MessengerThreadInfoPanel11(),B,z,A)};t.prototype.$MessengerThreadInfoPanel6=function(u){if(!c("gkx")("AT67ptDj-ZaeW3Tyo9vbms2vYK1iy8t_jMuVqoEuGQXOqT3WIH9DEYXNBElJniUDVETCVboaIbfUes068dlrYLZO"))return null;var v=new(c("MessengerSharedLinksContainerRoute"))({threadFBID:this.props.thread.thread_fbid});return c("React").createElement(c("react-relay/classic/container/RelayRootContainer"),{Component:c("MessengerSharedLinksContainer.react"),renderLoading:function w(){return null},route:v,forceFetch:u,renderFetched:function(w){return c("React").createElement(c("MessengerSharedLinksContainer.react"),babelHelpers["extends"]({},w,{customColor:this.props.thread.custom_color,clearForceFetch:this.$MessengerThreadInfoPanel12,getIsScrolledToBottom:this.props.getIsScrolledToBottom,getScrollableHeight:this.props.getScrollableHeight,isCollapsed:this.props.linksSectionCollapsed,threadFBID:this.props.thread.thread_fbid,onToggle:this.props.onLinksSectionToggle}))}.bind(this)})};t.prototype.$MessengerThreadInfoPanel7=function(){var u=c("MessageThreadAssociatedObjectUtils").shouldRender(this.props.thread.associated_object);if(!u)return null;return c("React").createElement(c("MessengerInfoPanelAssociatedObjectSection.react"),{isCollapsed:this.props.associatedObjectSectionCollapsed,onToggle:this.props.onAssociatedObjectSectionToggle,customColor:this.props.thread.custom_color,associatedObject:this.props.thread.associated_object})};t.prototype.$MessengerThreadInfoPanel9=function(){return c("React").createElement(c("MessengerInfoPanelGroupSection.react"),{isOptionsCollapsed:this.props.groupOptionsSectionCollapsed,onOptionsToggle:this.props.onGroupOptionsSectionToggle,isApprovalsCollapsed:this.props.groupOptionsApprovalsSectionCollapsed,onApprovalToggle:this.props.onGroupApprovalOptionsSectionToggle,onToggle:this.props.onThreadOptionsSectionToggle,participants:this.props.participants,viewer:this.props.viewer,thread:this.props.thread})};t.prototype.$MessengerThreadInfoPanel8=function(){if(c("gkx")("AT5MgEQ2BX9EoYtDecXLd_H4PLe0dbm4AiKTfhaDnASNmsTXiM4GP6YZuoppqRP_9-lprti-5sdwbLUtVdnK9mMY"))return c("React").createElement(q,{isCollapsed:this.props.threadStatsSectionCollapsed,thread:this.props.thread,viewer:this.props.viewer,onToggle:this.props.onThreadStatsSectionToggle});return null};t.prototype.$MessengerThreadInfoPanel4=function(u){var v=this.props,w=v.getIsScrolledToBottom,x=v.getScrollableHeight,y=v.onPhotosSectionToggle,z=v.photosSectionCollapsed,A=v.thread,B=new(c("MessengerSharedPhotosContainerRoute"))({threadFBID:A.thread_fbid});return c("React").createElement(c("react-relay/classic/container/RelayRootContainer"),{Component:c("MessengerSharedPhotosContainer.react"),renderLoading:function C(){return null},route:B,forceFetch:u,renderFetched:function(C){return c("React").createElement(c("MessengerSharedPhotosContainer.react"),babelHelpers["extends"]({},C,{customColor:this.props.thread.custom_color,clearForceFetch:this.$MessengerThreadInfoPanel12,getIsScrolledToBottom:w,getScrollableHeight:x,isCollapsed:z,onToggle:y,threadFBID:A.thread_fbid}))}.bind(this)})};t.prototype.$MessengerThreadInfoPanel5=function(u){var v=this.props,w=v.filesSectionCollapsed,x=v.thread,y=new(c("MessengerSharedFilesContainerRoute"))({threadFBID:x.thread_fbid});return c("React").createElement(c("react-relay/classic/container/RelayRootContainer"),{Component:c("MessengerSharedFilesContainer.react"),renderLoading:function z(){return null},route:y,forceFetch:u,renderFetched:function(z){return c("React").createElement(c("MessengerSharedFilesContainer.react"),babelHelpers["extends"]({},z,{isCollapsed:w,onToggle:this.props.onFilesSectionToggle}))}.bind(this)})};t.prototype.$MessengerThreadInfoPanel11=function(){return c("React").createElement(c("MessengerInfoPanelPeopleSection.react"),{canViewerReply:c("MercuryThreadInfo").canReply(this.props.thread),contactAdapter:c("MessengerContactAdapters").fromMercuryParticipant,isCollapsed:this.props.peopleSectionCollapsed,isViewerSubscribed:this.props.thread.is_subscribed,onAddPeopleClick:this.$MessengerThreadInfoPanel13,onContactAction:this.$MessengerThreadInfoPanel14,onContactSelect:this.$MessengerThreadInfoPanel15,onToggle:this.props.onPeopleSectionToggle,participants:this.props.participants,viewer:this.props.viewer,adminIds:this.props.thread.admin_ids,thread:this.props.thread})};t.prototype.$MessengerThreadInfoPanel10=function(){var u=this.props.contact;if(!u||!u.href||u.fbid.toString()===c("MessengerConfig").MoneyPennyFBID)return null;var v=u.href,w=c("CurrentUser").isWorkUser()?"Workplace":"Facebook",x=u.type==="page"?i._("{productName} Page",[i.param("productName",w)]):i._("{productName} Profile",[i.param("productName",w)]);return c("React").createElement(o,{customColor:this.props.thread.custom_color,title:x},c("React").createElement("div",{className:"_4v0l"},c("React").createElement(c("Link.react"),{className:"_3oh-",style:{color:this.props.thread.custom_color},href:v,target:"_blank"},v.replace("www.",""))))};t.propTypes={contact:s.instanceOf(c("ImmutableObject")),getIsScrolledToBottom:s.func.isRequired,getScrollableHeight:s.func.isRequired,isUserActive:s.bool.isRequired,isBusinessEnabled:s.bool,lastActive:s.string,linksSectionCollapsed:s.bool.isRequired,onArchive:s.func.isRequired,onContactAction:s.func.isRequired,onContactSelect:s.func.isRequired,onDelete:s.func.isRequired,onLeaveGroup:s.func,onLinksSectionToggle:s.func.isRequired,onMarkRead:s.func.isRequired,onMarkSpam:s.func.isRequired,onMarkUnread:s.func.isRequired,onMute:s.func.isRequired,onAssociatedObjectSectionToggle:s.func.isRequired,onPeopleSectionToggle:s.func.isRequired,onPhotosSectionToggle:s.func.isRequired,onFilesSectionToggle:s.func.isRequired,onThreadOptionsSectionToggle:s.func.isRequired,onThreadStatsSectionToggle:s.func.isRequired,onGroupOptionsSectionToggle:s.func.isRequired,onGroupApprovalOptionsSectionToggle:s.func.isRequired,onThreadNameChange:s.func.isRequired,onThreadPhotoChange:s.func.isRequired,onUnmute:s.func.isRequired,onIgnore:s.func.isRequired,onBlock:s.func.isRequired,onUnblock:s.func.isRequired,showBlock:s.bool.isRequired,participants:s.instanceOf(c("immutable").Map).isRequired,associatedObjectSectionCollapsed:s.bool.isRequired,peopleSectionCollapsed:s.bool.isRequired,photosSectionCollapsed:s.bool.isRequired,filesSectionCollapsed:s.bool.isRequired,platform:s.string,prevIsScrolledToBottom:s.bool.isRequired,prevScrollableHeight:s.number.isRequired,showLeaveGroup:s.bool.isRequired,thread:s.instanceOf(c("ImmutableObject")).isRequired,threadOptionsSectionCollapsed:s.bool.isRequired,threadStatsSectionCollapsed:s.bool.isRequired,groupOptionsSectionCollapsed:s.bool.isRequired,groupOptionsApprovalsSectionCollapsed:s.bool.isRequired,viewer:s.string.isRequired};f.exports=t}),null);