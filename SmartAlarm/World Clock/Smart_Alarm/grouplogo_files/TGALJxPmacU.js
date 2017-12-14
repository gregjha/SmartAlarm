if (self.CavalryLogger) { CavalryLogger.start_js(["Z\/RpG"]); }

__d("UFIPagerLabel",["fbt","NumberFormat","intlList"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(k){return c("NumberFormat").formatInteger(k.count)}var j={VIEW_ONE:"view_one",VIEW_ONE_MORE:"view_one_more",VIEW_ALL:"view_all",VIEW_MORE_EXPLICIT:"view_more_explicit",VIEW_MORE:"view_more",VIEW_PREVIOUS:"view_previous",VIEW_PREVIOUS_EXPLICIT:"view_previous_explicit",_getReplyLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 reply");case j.VIEW_ONE_MORE:return h._("View 1 more reply");case j.VIEW_ALL:return h._({"*":"View all {count} replies"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more replies","_1":"View {count} more reply"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more replies");case j.VIEW_PREVIOUS:return h._("View previous replies");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous replies","_1":"View {count} previous reply"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);default:return null}},_getCommentLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 comment");case j.VIEW_ONE_MORE:return h._("View 1 more comment");case j.VIEW_ALL:return h._({"*":"View all {count} comments"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more comments","_1":"View {count} more comment"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more comments");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous comments","_1":"View {count} previous comment"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_PREVIOUS:return h._("View previous comments");default:return null}},_getCommentLabelWithCommentSentence:function k(l,m){__p&&__p();var n=c("intlList")(m.commenters),o=m.othersCount,p=c("NumberFormat").formatInteger(o);switch(l){case j.VIEW_ONE:return h._("View 1 comment from {names}",[h.param("names",n)]);case j.VIEW_ONE_MORE:return h._("View 1 more comment from {names}",[h.param("names",n)]);case j.VIEW_ALL:switch(o){case 0:return h._({"*":"View all {count} comments from {names}"},[h.param("count",i(m),[0,m.count]),h.param("names",n)]);case 1:return h._({"*":"View all {count} comments from {names} and 1 other person"},[h.param("count",i(m),[0,m.count]),h.param("names",n)]);default:return h._({"*":{"*":"View all {count} comments from {names} and {othersCount} others"}},[h.param("count",i(m),[0,m.count]),h.param("names",n),h.param("othersCount",p,[0,o])])}case j.VIEW_MORE_EXPLICIT:case j.VIEW_MORE:switch(o){case 0:return h._("View more comments from {names}",[h.param("names",n)]);case 1:return h._("View more comments from {names} and 1 other person",[h.param("names",n)]);default:return h._({"*":"View more comments from {names} and {othersCount} others"},[h.param("names",n),h.param("othersCount",p,[0,o])])}case j.VIEW_PREVIOUS:case j.VIEW_PREVIOUS_EXPLICIT:switch(o){case 0:return h._("View previous comments from {names}",[h.param("names",n)]);case 1:return h._("View previous comments from {names} and 1 other person",[h.param("names",n)]);default:return h._({"*":"View previous comments from {names} and {othersCount} others"},[h.param("names",n),h.param("othersCount",p,[0,o])])}default:return null}},_getQuestionLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 question");case j.VIEW_ONE_MORE:return h._("View 1 more question");case j.VIEW_ALL:return h._({"*":"View all {count} questions"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more questions","_1":"View {count} more question"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more questions");case j.VIEW_PREVIOUS:return h._("View previous questions");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous questions","_1":"View {count} previous question"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);default:return null}},_getAnswerLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 answer");case j.VIEW_ONE_MORE:return h._("View 1 more answer");case j.VIEW_ALL:return h._({"*":"View all {count} answers"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more answers","_1":"View {count} more answer"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more answers");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous answers","_1":"View {count} previous answer"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_PREVIOUS:return h._("View previous answers");default:return null}},getLabel:function k(l,m,n,o,p){__p&&__p();if(m)return j._getReplyLabel(l,p);else if(n)return j._getQuestionLabel(l,p);else if(o)return j._getAnswerLabel(l,p);else{if(p.commenters)return this._getCommentLabelWithCommentSentence(l,p);return j._getCommentLabel(l,p)}}};f.exports=j}),null);