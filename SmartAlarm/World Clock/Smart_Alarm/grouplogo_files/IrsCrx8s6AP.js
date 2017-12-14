if (self.CavalryLogger) { CavalryLogger.start_js(["cGW0P"]); }

__d("messengerMasterViewHeaderReact",["cx","fbt","bs_curry","React","linkReact","CurrentUser","ReasonReact","MessagingTag","MercuryConfig","MessengerView","MessengerActions","messengerDirectRe","MessengerURIConstants","messengerSettingsMenuReact","messengerDeleteAllMenuBootloaderReact"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact").statelessComponent("MessengerMasterViewHeaderReact");function k(o){o.preventDefault();c("MessengerActions").changeDetailView(c("MessengerView").DETAIL.COMPOSE);return 0}function l(o){o.preventDefault();c("MessengerActions").changeFolder(c("MessagingTag").PENDING);return 0}function m(o,p,q,r,s,t,u,v){__p&&__p();var w=+c("MercuryConfig").RTCR,x=w!==0?i._("Back to Connection Requests"):i._("Back to Message Requests"),y=function y(F){F.preventDefault();if(q!==c("MessengerView").MASTER.RECENT)c("MessengerActions").changeMasterView(c("MessengerView").MASTER.RECENT);if(s)c("bs_curry")._1(t,0);c("MessengerActions").changeFolder(c("MessagingTag").INBOX);return 0},z=function z(){var F=s||+(p===c("MessagingTag").PENDING||p===c("MessagingTag").ACTION_ARCHIVED||q!==c("MessengerView").MASTER.RECENT),G=F!==0?y:l,H=F!==0?i._("Back to Recent Messages"):x;return c("ReasonReact").element(0,0,c("linkReact").make([H],["_30yy _2oc9"],0,0,0,0,0,[G],0,0,["button"],0,0,0,[H],[]))},A=function A(){__p&&__p();if(p===c("MessagingTag").PENDING||s){var w=+c("MercuryConfig").RTCR;if(w!==0)return i._("Connection Requests");else return i._("Back to Message Requests")}else if(p===c("MessagingTag").OTHER)return i._("Filtered Requests");else if(q===c("MessengerView").MASTER.PEOPLE)return i._("Active Now");else if(c("CurrentUser").isWorkUser())return i._("Workplace Chat");else return i._("Messenger")},B=function B(){return c("React").createElement("div",{className:"_4kzu"},c("ReasonReact").element(0,0,c("messengerSettingsMenuReact").make(o,p,q,r,[])))},C=function C(){return c("React").createElement("div",{className:"_4kzu"},c("ReasonReact").element(0,0,c("messengerDeleteAllMenuBootloaderReact").make(o,p,r,u,s,[])))},D=function D(){var F=i._("New Message");return c("ReasonReact").element(0,0,c("linkReact").make([F],["_30yy _2oc8"],0,0,0,0,[c("MessengerURIConstants").COMPOSE_SUBPATH],[k],0,0,["button"],0,0,0,[F],[]))},E=j.slice();E[9]=function(){var w=s||+(p!==c("MessagingTag").INBOX||q!==c("MessengerView").MASTER.RECENT),F=w!==0?z(0):B(0),G=(s||+(p===c("MessagingTag").PENDING||p===c("MessagingTag").OTHER))&&+c("MercuryConfig").MessengerInboxRequests,H=G!==0?C(0):D(0);return c("React").createElement("div",{className:"_36ic _5l-3",role:"banner"},F,c("ReasonReact").element(0,0,c("bs_curry")._2(c("messengerDirectRe").make,r,[])),c("React").createElement("div",{className:"_1tqi"},A(0)),H)};return E}var n=c("ReasonReact").wrapReasonForJs(j,function(o){return m(o.filter,o.folder,o.view,o.viewer,+o.aggregationView,o.onBackToRecent,o.threadIDs,[])});g.component=j;g.handleAddClick=k;g.handleFilteredRequestsBackArrowClick=l;g.make=m;g.jsComponent=n}),null);