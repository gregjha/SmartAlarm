if (self.CavalryLogger) { CavalryLogger.start_js(["pa7wA"]); }

__d("MercuryThreadlistRowContainer.react",["immutable","ImmutableObject","MercuryParticipants","React","StoreAndPropBasedStateMixin","shallowEqual"],(function a(b,c,d,e,f,g){"use strict";var h=c("React").PropTypes,i=c("React").createClass({displayName:"MercuryThreadlistRowContainer",mixins:[c("StoreAndPropBasedStateMixin")(c("MercuryParticipants"))],propTypes:{ChildClass:h.func.isRequired,thread:h.instanceOf(c("ImmutableObject")).isRequired,viewer:h.string.isRequired},statics:{calculateState:function j(k){return{participants:c("immutable").Map(c("immutable").Seq(k.thread.participants).map(function(l){return[l,c("MercuryParticipants").getOrFetch(l)]}))}}},shouldComponentUpdate:function j(k,l){return!c("shallowEqual")(k,this.props)||!c("immutable").is(l.participants,this.state.participants)},render:function j(){var k=this.props,l=k.ChildClass,m=babelHelpers.objectWithoutProperties(k,["ChildClass"]);return c("React").createElement(l,babelHelpers["extends"]({},m,{participants:this.state.participants}))}});f.exports=i}),null);