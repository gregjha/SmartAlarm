if (self.CavalryLogger) { CavalryLogger.start_js(["mkCpM"]); }

__d("mercuryIgnoredParticipantsRe",["Set","bs_array","utilsRe","MercuryIDs","bs_js_primitive","MercuryDispatcher","mercurySingletonProviderRe","MercuryIgnoredBlockedParticipantsRe"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(l){__p&&__p();var m=new(c("Set"))(),n=c("MercuryDispatcher").getForFBID(l);n.subscribe("update-ignored-users",function(o,p){__p&&__p();var q=p.message_ignored_ids;if(!(q==null))c("bs_array").iter(function(s){m.add(s);return 0},q);var r=c("utilsRe").$pipe$unknown(c("bs_js_primitive").null_undefined_to_opt(p.participants),[]);r.forEach(function(s){__p&&__p();var q=c("utilsRe").nullUndefinedBooleanToOptionBool(s.is_messenger_ignored),t=s.fbid;if(q)if(q[0]!==0)if(t==null)return 0;else{m.add(c("MercuryIDs").getParticipantIDFromUserID(t));return 0}else if(t==null)return 0;else{+m["delete"](c("MercuryIDs").getParticipantIDFromUserID(t));return 0}else return 0});return 0});return{findIntersection:function o(p){return c("MercuryIgnoredBlockedParticipantsRe").findIntersection(l,m,p)},isPresentInGroupThread:function o(p){return c("MercuryIgnoredBlockedParticipantsRe").isPresentInGroupThread(l,m,p)},ignoredParticipantsInGroupThread:function o(p){return c("MercuryIgnoredBlockedParticipantsRe").participantsInGroupThread(l,m,p)},isMessageIgnored:function o(p){return c("MercuryIgnoredBlockedParticipantsRe").qualifiesAs(l,m,p)},__fbid:l}}var i=c("mercurySingletonProviderRe").Provider([h]),j=i[0],k=i[1];g.getForFBID=j;g.get=k}),null);