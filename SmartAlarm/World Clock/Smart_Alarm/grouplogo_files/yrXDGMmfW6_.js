if (self.CavalryLogger) { CavalryLogger.start_js(["lKzmM"]); }

__d("MessengerRTCUnavailableDialog.react",["fbt","messengerDialogsRe","MessengerDialog.react","messengerDialogBodyReact","MessengerDialogButton.react","MessengerDialogFooter.react","MessengerDialogHeader.react","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("messengerDialogBodyReact").jsComponent,l=c("React").PropTypes;i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;m.prototype.render=function(){return c("React").createElement(c("MessengerDialog.react"),{onToggle:this.$MessengerRTCUnavailableDialog1},c("React").createElement(c("MessengerDialogHeader.react"),null,h._("Can't Make Call")),c("React").createElement(k,null,this.$MessengerRTCUnavailableDialog2()),c("React").createElement(c("MessengerDialogFooter.react"),null,c("React").createElement(c("MessengerDialogButton.react"),{action:"cancel",label:h._("OK"),type:"primary"})))};m.prototype.$MessengerRTCUnavailableDialog2=function(){return c("React").createElement("div",null,h._("{name} is not available right now.",[h.param("name",this.props.name)]))};m.prototype.$MessengerRTCUnavailableDialog1=function(n){if(!n)c("messengerDialogsRe").removeDialog()};function m(){i.apply(this,arguments)}m.propTypes={name:l.string.isRequired};f.exports=m}),null);