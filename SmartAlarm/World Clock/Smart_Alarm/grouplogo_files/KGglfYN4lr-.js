if (self.CavalryLogger) { CavalryLogger.start_js(["aTIJ1"]); }

__d("MessengerBugNub.react",["cx","fbt","ix","AsyncRequest","Image.react","Link.react","MessengerEnvironment","MessengerMenu.react","MessengerPopoverMenu.react","React","Tooltip","URI","WorkModeConfig","XSettingsEmployeeBetaController","goURI"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=j("86836"),n=j("86835"),o=j("86837"),p=c("React").PropTypes,q=c("MessengerMenu.react").Item,r=c("MessengerMenu.react").Separator;k=babelHelpers.inherits(s,c("React").PureComponent);l=k&&k.prototype;s.prototype.render=function(){return c("React").createElement("div",{className:"_4_xe"},this.$MessengerBugNub1(),c("React").createElement(c("Link.react"),babelHelpers["extends"]({href:"#",ajaxify:"/ajax/bugs/employee_report",className:"_1fr8",rel:"dialog"},c("Tooltip").propsFor(i._("Report a bug"))),c("React").createElement("div",{className:"_1gng"},c("React").createElement(c("Image.react"),{src:m}))))};s.prototype.$MessengerBugNub1=function(){var t=this.props.isBetaEnabled?n:o,u=i._("Internal preferences");return c("React").createElement(c("MessengerPopoverMenu.react"),babelHelpers["extends"]({className:"_1fr8",menu:this.$MessengerBugNub2()},c("Tooltip").propsFor(u)),c("React").createElement(c("Link.react"),{"aria-haspopup":"true","aria-label":u,className:"_1gng",href:"#",role:"button"},c("React").createElement(c("Image.react"),{src:t})))};s.prototype.$MessengerBugNub2=function(){__p&&__p();var t,u=this,v=null;if(this.props.unixName)(function(){var w=u.props.unixName+".sb";v=c("React").createElement(q,{label:"Sandbox",onclick:function(){return this.$MessengerBugNub3(w)}.bind(u)})})();return c("React").createElement(c("MessengerMenu.react"),null,c("React").createElement(q,{label:"Public",onclick:function(){return this.$MessengerBugNub4(false)}.bind(this)}),c("React").createElement(q,{label:"Beta",onclick:function(){return this.$MessengerBugNub4(true)}.bind(this)}),c("React").createElement(r,null),c("React").createElement(q,{label:"C1 (trunkstable)",onclick:function(){return this.$MessengerBugNub3()}.bind(this)}),c("React").createElement(q,{label:"Intern",onclick:function(){return this.$MessengerBugNub3("intern")}.bind(this)}),c("React").createElement(q,{label:"Production",onclick:function(){return this.$MessengerBugNub3("prod")}.bind(this)}),v)};s.prototype.$MessengerBugNub4=function(t){var u=c("XSettingsEmployeeBetaController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(u).setData({enabled:t}).setMethod("POST").setAllowCrossPageTransition(true).send()};s.prototype.$MessengerBugNub3=function(t){var u=c("MessengerEnvironment").facebookdotcom?".facebook.com":".messenger.com",v=c("WorkModeConfig").company_subdomain,w=v?v:"www",x=w+(t?"."+t:"")+u;c("goURI")(c("URI").getRequestURI().getQualifiedURI().setDomain(x))};function s(){k.apply(this,arguments)}s.propTypes={isBetaEnabled:p.bool,unixName:p.string};f.exports=s}),null);