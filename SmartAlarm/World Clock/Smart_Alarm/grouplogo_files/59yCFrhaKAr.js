if (self.CavalryLogger) { CavalryLogger.start_js(["dczvD"]); }

__d("MessengerTypingIndicator.react",["cx","Image.react","immutable","MercuryParticipants","MercuryTypingAnimation.react","messengerProfileImageWrapperReact","MessengerBubble.react","ReactComponentWithPureRenderMixin","React","createReactClass_DEPRECATED","StoreAndPropBasedStateMixin"],(function a(b,c,d,e,f,g,h){var i=c("messengerProfileImageWrapperReact").jsComponent,j=c("React").PropTypes,k=32,l=c("createReactClass_DEPRECATED")({displayName:"MessengerTypingIndicator",mixins:[c("ReactComponentWithPureRenderMixin"),c("StoreAndPropBasedStateMixin")(c("MercuryParticipants"))],propTypes:{userID:j.string,showName:j.bool},statics:{calculateState:function m(n){return{author:c("MercuryParticipants").getOrFetch(n.userID)}}},render:function m(){if(!this.state.author)return null;var n=this.state.author;return c("React").createElement("div",{className:"_1t_p _1hbw"},c("React").createElement("div",{className:"_1t_q"},c("React").createElement(i,{className:"_1t_r",isMessengerUser:n.is_messenger_user,size:k,showBadge:true},c("React").createElement(c("Image.react"),{alt:"",src:n.image_src,height:k,width:k}))),c("React").createElement("div",{className:"_41ud"},c("React").createElement("div",{className:"_o46 _3erg _29_7"},c("React").createElement(c("MessengerBubble.react"),{attachments:c("immutable").List([c("React").createElement(c("MercuryTypingAnimation.react"),{key:"animation"})]),body:"",className:"_3058",ref:"bubble"}))))},getBubble:function m(){return this.refs.bubble}});f.exports=l}),null);