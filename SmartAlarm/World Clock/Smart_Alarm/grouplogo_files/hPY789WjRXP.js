if (self.CavalryLogger) { CavalryLogger.start_js(["v7\/Bz"]); }

__d("messengerBlockedGroupThreadWarningDialogReact",["fbt","bs_curry","ReasonReact","CacheStorage","messengerDialogsRe","messengerDialogReact","messengerDialogBodyReact"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=h._("People you've blocked are in this conversation. If you see this conversation, you'll get each other's messages to the group."),j=h._("See Conversation?"),k=h._("Cancel"),l=h._("Leave Group"),m=h._("See Conversation"),n=new(c("CacheStorage"))("localstorage");function o(v){return"see_blocked_group:"+v}function p(v,w){n.set("see_blocked_group:"+v,w,true);return 0}function q(v){return n.get("see_blocked_group:"+v,false)}var r=c("ReasonReact").statelessComponent("MessengerBlockedGroupThreadWarningDialogReact");function s(v){if(v)return 0;else return c("messengerDialogsRe").removeDialog(0)}function t(v,w,x,y,z){__p&&__p();var A=function A(E){E.stopPropagation();c("bs_curry")._1(v,0);return c("messengerDialogsRe").removeDialog(0)},B=function B(E){E.stopPropagation();c("bs_curry")._1(w,y);return c("messengerDialogsRe").removeDialog(0)},C=function C(E){E.stopPropagation();c("bs_curry")._1(x,y);return c("messengerDialogsRe").removeDialog(0)},D=r.slice();D[9]=function(){return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](0,s,0,0,0,0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,c("ReasonReact").element(0,0,c("messengerDialogReact").Title[0](0,j)))),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(0,[i])),c("ReasonReact").element(0,0,c("messengerDialogReact").Footer[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0]([1],[k],0,0,[C],[1],0,0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0]([1],[l],0,0,[B],[1],0,0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0]([1],[m],0,["danger"],[A],[0],0,0,[]))]))]))};return D}var u=c("ReasonReact").wrapReasonForJs(r,function(v){return t(v.onSee,v.onLeave,v.onCancel,v.prevThreadID,[])});g.bodyText=i;g.titleText=j;g.cancelText=k;g.leaveText=l;g.seeConvoText=m;g.storage=n;g.getSeeConversationCacheKey=o;g.setWantsToSee=p;g.getWantsToSee=q;g.component=r;g.handleToggle=s;g.make=t;g.jsComponent=u}),null);