if (self.CavalryLogger) { CavalryLogger.start_js(["ZFVgN"]); }

__d("MercuryDelayedRoger",["ArbiterMixin","LiveTimer","MercuryActionStatus","MercuryConfig","MercuryMessages","mercuryRogerRe","MercurySingletonProvider","MercuryThreadInformer","MercuryThreads","mixin","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("MercuryConfig")["roger.seen_delay"];h=babelHelpers.inherits(k,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;k.getForFBID=function(m){"use strict";return l.getForFBID(m)};k.get=function(){"use strict";return l.get()};function k(m){"use strict";__p&&__p();i.constructor.call(this);this.$MercuryDelayedRoger9=function(event,n){var o={};for(var p in n)if(this.$MercuryDelayedRoger11(p))o[p]=true;Object.keys(o).forEach(function(q){return this.$MercuryDelayedRoger12(o)}.bind(this))}.bind(this);this.$MercuryDelayedRoger1=m;this.$MercuryDelayedRoger2=c("mercuryRogerRe").getForFBID(m);this.$MercuryDelayedRoger4={};this.$MercuryDelayedRoger5={};this.$MercuryDelayedRoger2.subscribe("change",function(n,o){for(var p in o)!this.$MercuryDelayedRoger5[p]&&this.$MercuryDelayedRoger8(p)}.bind(this));this.$MercuryDelayedRoger3=c("MercuryThreadInformer").getForFBID(m);this.$MercuryDelayedRoger6=c("MercuryMessages").getForFBID(m);this.$MercuryDelayedRoger7=c("MercuryThreads").getForFBID(m);this.$MercuryDelayedRoger3.subscribe("messages-received",this.$MercuryDelayedRoger9);this.$MercuryDelayedRoger3.subscribe("messages-reordered",this.$MercuryDelayedRoger9);this.$MercuryDelayedRoger3.subscribe("messages-updated",this.$MercuryDelayedRoger9)}k.prototype.getSeenBy=function(m,n){"use strict";if(this.$MercuryDelayedRoger5[m])return[];return this.$MercuryDelayedRoger2.getSeenBy(this.$MercuryDelayedRoger10(m),n)};k.prototype.wasSeenByAll=function(m){"use strict";if(this.$MercuryDelayedRoger5[m])return false;return this.$MercuryDelayedRoger2.wasSeenByAll(this.$MercuryDelayedRoger10(m))};k.prototype.$MercuryDelayedRoger10=function(m){"use strict";if(!this.$MercuryDelayedRoger4[m]){var n=this.$MercuryDelayedRoger7.getThreadMetaNow(m);if(n)this.$MercuryDelayedRoger4[m]={thread_id:m,author:n.participants[0],timestamp:n.timestamp}}return this.$MercuryDelayedRoger4[m]};k.prototype.$MercuryDelayedRoger11=function(m){"use strict";__p&&__p();var n=false;this.$MercuryDelayedRoger6.getThreadMessagesRange(m,0,1,function(o){__p&&__p();var p=o[0];if(!p)return;var q=p.timestamp;if(p.status===c("MercuryActionStatus").SUCCESS)q-=c("LiveTimer").getServerTimeOffset();var r=this.getSeenBy(m);if(this.$MercuryDelayedRoger5[m]){clearTimeout(this.$MercuryDelayedRoger5[m]);delete this.$MercuryDelayedRoger5[m]}var s=q+j,t=s-Date.now();if(t>0)this.$MercuryDelayedRoger5[m]=c("setTimeoutAcrossTransitions")(function(){delete this.$MercuryDelayedRoger5[m];this.$MercuryDelayedRoger8(m)}.bind(this),t);this.$MercuryDelayedRoger4[m]=p;var u=this.getSeenBy(m);if(r.length||u.length)n=true}.bind(this));return n};k.prototype.$MercuryDelayedRoger8=function(m){"use strict";var n={};n[m]=true;this.$MercuryDelayedRoger12(n)};k.prototype.$MercuryDelayedRoger12=function(m){"use strict";this.inform("state-changed",m);this.inform("change")};var l=new(c("MercurySingletonProvider"))(k);f.exports=k}),null);