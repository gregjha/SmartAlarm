if (self.CavalryLogger) { CavalryLogger.start_js(["jV16L"]); }

__d("messengerInfoPanelThreadOptionsContainerReact",["fbt","bs_curry","WorkGKs","CurrentUser","ReasonReact","bs_js_primitive","MercuryThreadActions","MessengerAdminGroupUtils","messengerInfoPanelEmojiReact","messengerInfoPanelSearchReact","messengerInfoPanelSectionReact","messengerInfoPanelNicknamesReact","messengerMuteButtonContainerReact","MessagingThreadCustomizationSource","messengerInfoPanelCustomColorReact","messengerInfoPanelManageReviewReact","messengerInfoPanelManageMessagesReact"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("ReasonReact").statelessComponent("MessengerInfoPanelThreadOptionsContainerReact");function j(l,m,n,o,p,q){__p&&__p();var r=function r(v,q){c("MercuryThreadActions").getForFBID(o).changeThreadColor(n.thread_id,v,c("MessagingThreadCustomizationSource").SETTINGS);return 0},s=function s(v,q){c("MercuryThreadActions").getForFBID(o).changeThreadEmoji(n.thread_id,v,c("MessagingThreadCustomizationSource").SETTINGS);return 0},t=function t(v,q){c("MercuryThreadActions").getForFBID(o).changeThreadNicknames(n.thread_id,v[0],v[1],c("MessagingThreadCustomizationSource").SETTINGS);return 0},u=i.slice();u[9]=function(v){if(n.is_subscribed){var w=+c("CurrentUser").isWorkUser(),x=+c("MessengerAdminGroupUtils").canUpdateThreadCustomization(n,o),y=x&&(1-w||+c("WorkGKs").workchat_thread_color_customization),z=y!==0?c("ReasonReact").element(0,0,c("messengerInfoPanelCustomColorReact").make(n,c("bs_curry")._1(v[0],r),[])):null,A=x&&(1-w||+c("WorkGKs").workchat_thread_emoji_customization),B=A!==0?c("ReasonReact").element(0,0,c("messengerInfoPanelEmojiReact").make(n,o,c("bs_curry")._1(v[0],s),[])):null,C=c("ReasonReact").element(0,0,c("messengerInfoPanelSearchReact").make(n,[])),D=1-w||+c("WorkGKs").workchat_thread_nickname_customization,E=D!==0?c("ReasonReact").element(0,0,c("messengerInfoPanelNicknamesReact").make(m,n,o,c("bs_curry")._1(v[0],t),[])):null,F=c("ReasonReact").element(0,0,c("messengerInfoPanelManageMessagesReact").make(n,o,[])),G=c("ReasonReact").element(0,0,c("messengerInfoPanelManageReviewReact").make(n,o,[])),H=c("ReasonReact").element(0,0,c("messengerMuteButtonContainerReact").make(n,o,[]));return c("ReasonReact").element(0,0,c("messengerInfoPanelSectionReact").make(c("bs_js_primitive").null_undefined_to_opt(n.custom_color),[1],[l],[p],[h._("Options")],[C,E,z,B,F,G,H]))}else return null};return u}var k=c("ReasonReact").wrapReasonForJs(i,function(l){return j(+l.isCollapsed,l.participants,l.thread,l.viewer,l.onToggle,[])});g.component=i;g.make=j;g.jsComponent=k}),null);