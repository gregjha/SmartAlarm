if (self.CavalryLogger) { CavalryLogger.start_js(["MlZB4"]); }

__d("messengerMakeAsOwnerDialogReact",["bs_curry","bs_js_boolean","ReasonReact","bs_js_primitive","messengerDialogReact","MessengerAdminGroupUtils","messengerDialogBodyReact"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("ReasonReact").statelessComponent("MessengerMakeAsOwnerDialogReact");function i(k,l,m,n,o){var p=function p(r){c("bs_curry")._1(l,false);if(k)return c("bs_curry")._1(k[0],r);else return 0},q=h.slice();q[9]=function(){var r=c("bs_js_boolean").to_js_boolean(n),s=c("MessengerAdminGroupUtils").getMakeOwnerTitleText(r,m),t=c("MessengerAdminGroupUtils").getMakeOwnerBodyText(r,m),u=c("MessengerAdminGroupUtils").getMakeOwnerButtonText(r,m);return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](0,l,0,0,0,0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,s)),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(0,[t])),c("ReasonReact").element(0,0,c("messengerDialogReact").Footer[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").CancelButton[0](0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0](0,[u],0,["danger"],[p],[0],0,0,[]))]))]))};return q}var j=c("ReasonReact").wrapReasonForJs(h,function(k){return i(c("bs_js_primitive").null_undefined_to_opt(k.onMakeOwner),k.onToggle,k.name,+k.isUserViewer,[])});g.component=h;g.make=i;g.jsComponent=j}),null);