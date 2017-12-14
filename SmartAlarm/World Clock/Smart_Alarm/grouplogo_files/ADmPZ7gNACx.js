if (self.CavalryLogger) { CavalryLogger.start_js(["ESS2R"]); }

__d("StickerContextualDialog.react",["cx","ContextualLayerAutoFlipHorizontal","ReactAbstractContextualDialog","ReactLayer"],(function a(b,c,d,e,f,g,h){"use strict";var i=7,j=c("ReactLayer").createClass(c("ReactAbstractContextualDialog").createSpec({addedBehaviors:[c("ContextualLayerAutoFlipHorizontal")],displayName:"StickerXUIContextualDialog",theme:{wrapperClassName:"_53ii",arrowDimensions:{offset:i,length:16}}}));j.WIDTH={NORMAL:312,WIDE:400};f.exports=j}),null);
__d("StickersDispatcher",["ExplicitRegistrationDispatcher"],(function a(b,c,d,e,f,g){"use strict";f.exports=new(c("ExplicitRegistrationDispatcher"))({strict:false})}),null);
__d("StickersActions",["StickersDispatcher","keyMirror"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("keyMirror")({ADD_RECENT_STICKER:null,HIDE_FLYOUT:null,LOAD_RECENT_STICKERS:null,SELECT_STORE_PACK:null,SELECT_TRAY_PACK:null,SHOW_FLYOUT:null,TRAY_LOADED:null}),i={Types:h,addRecentSticker:function j(k){c("StickersDispatcher").dispatch({type:h.ADD_RECENT_STICKER,sticker:k})},hideStickerFlyout:function j(){c("StickersDispatcher").dispatch({type:h.HIDE_FLYOUT})},loadRecentStickers:function j(k){c("StickersDispatcher").dispatch({type:h.LOAD_RECENT_STICKERS,stickers:k})},selectStorePack:function j(k){c("StickersDispatcher").dispatch({type:h.SELECT_STORE_PACK,packID:k})},selectTrayPack:function j(k){c("StickersDispatcher").dispatch({type:h.SELECT_TRAY_PACK,packID:k})},showStickerFlyout:function j(k){c("StickersDispatcher").dispatch({type:h.SHOW_FLYOUT,threadID:k})},trayLoaded:function j(){c("StickersDispatcher").dispatch({type:h.TRAY_LOADED})}};f.exports=i}),null);
__d("StickersStateStore",["FluxReduceStore","immutable","StickersActions","StickersConfig","StickersDispatcher"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("FluxReduceStore"));i=h&&h.prototype;j.prototype.getInitialState=function(){return c("immutable").Map({recentStickers:[],recentStickersLoaded:false,showFlyout:false,storePackID:null,threadID:null,trayLoaded:false,trayPackID:null})};j.prototype.reduce=function(k,l){__p&&__p();var m=l,n=c("StickersActions").Types;switch(m.type){case n.ADD_RECENT_STICKER:var o=[m.sticker];k.get("recentStickers").forEach(function(p){if(p.id===m.sticker.id)return;o.push(p)});return k.set("recentStickers",o.splice(0,c("StickersConfig").max_mru_stickers));case n.HIDE_FLYOUT:return k.set("showFlyout",false);case n.LOAD_RECENT_STICKERS:return k.set("recentStickersLoaded",true).set("recentStickers",m.stickers);case n.SELECT_STORE_PACK:return k.set("storePackID",m.packID);case n.SELECT_TRAY_PACK:return k.set("trayPackID",m.packID).set("trayLoaded",true);case n.SHOW_FLYOUT:return k.set("showFlyout",true).set("threadID",m.threadID);case n.TRAY_LOADED:return k.set("trayLoaded",true);default:return k}};function j(){h.apply(this,arguments)}f.exports=new j(c("StickersDispatcher"))}),null);
__d("ChatStickerButton.react",["cx","fbt","BootloadedComponent.react","JSResource","Link.react","React","StickerContextualDialog.react","StickersActions","StickersStateStore","XUISpinner.react","emptyFunction","joinClasses"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes,m=278;j=babelHelpers.inherits(n,c("React").PureComponent);k=j&&j.prototype;function n(o){__p&&__p();k.constructor.call(this,o);this.$ChatStickerButton1=false;this.renderLayers=function(){if(!this.state.shown)return null;var p=this.props.ContextualDialogClass;return c("React").createElement(p,{alignment:this.props.flyoutAlignment,className:"_5e-r",contextRef:function(){return this.refs.link}.bind(this),onBeforeHide:this.$ChatStickerButton5,onBlur:this.$ChatStickerButton3,position:"above",shown:this.state.shown,width:this.props.flyoutWidth,key:"contextualDialog"},c("React").createElement(c("BootloadedComponent.react"),{bootloadPlaceholder:c("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},c("React").createElement(c("XUISpinner.react"),{size:"large"})),bootloadLoader:c("JSResource")("StickersFlyout.react").__setRef("ChatStickerButton.react"),className:this.props.flyoutClassName,onShown:function(q){if(this.props.onFlyoutShown)this.props.onFlyoutShown(q)}.bind(this),onHidden:function(){if(this.props.onFlyoutHidden)this.props.onFlyoutHidden()}.bind(this),onEscKeyDown:this.$ChatStickerButton3,onStickerSelect:this.$ChatStickerButton6,onEmoticonSelect:this.$ChatStickerButton7,shown:this.state.shown}))}.bind(this);this.$ChatStickerButton4=function(){this.$ChatStickerButton1=this.state.shown}.bind(this);this.showFlyout=function(p){p&&p.stopPropagation();if(this.$ChatStickerButton1||this.props.disabled){this.$ChatStickerButton1=false;return}c("StickersActions").showStickerFlyout(this.props.threadID)}.bind(this);this.$ChatStickerButton5=function(){if(this.state.shown)this.$ChatStickerButton3()}.bind(this);this.$ChatStickerButton3=function(){c("StickersActions").hideStickerFlyout()};this.$ChatStickerButton6=function(p){this.props.onStickerSelect(p)}.bind(this);this.$ChatStickerButton7=function(p){this.$ChatStickerButton3();this.props.onEmoticonSelect(p)}.bind(this);this.state={shown:!!o.clicked}}n.prototype.componentDidMount=function(){__p&&__p();this.props.onLoad&&this.props.onLoad(this);this.$ChatStickerButton2=c("StickersStateStore").addListener(function(){__p&&__p();var o=c("StickersStateStore").getState();if(o.get("showFlyout")&&o.get("threadID")===this.props.threadID){if(this.$ChatStickerButton1||this.props.disabled){this.$ChatStickerButton1=false;return}this.setState({shown:true})}else{var p=this.props.getInput&&this.props.getInput();p&&p.focus&&p.focus();this.setState({shown:false})}}.bind(this))};n.prototype.componentWillUnmount=function(){if(this.state.shown)this.$ChatStickerButton3();this.$ChatStickerButton2&&this.$ChatStickerButton2.remove()};n.prototype.render=function(){return c("React").createElement("span",null,c("React").createElement(c("Link.react"),{className:c("joinClasses")(this.props.className,this.state.shown?"open":""),href:"#",onClick:this.showFlyout,onMouseDown:this.$ChatStickerButton4,role:"button",title:i._("Choose a sticker"),ref:"link"}),this.renderLayers())};n.propTypes={className:l.string,clicked:l.bool,ContextualDialogClass:l.func.isRequired,disabled:l.bool,flyoutClassName:l.string,flyoutWidth:l.number,getInput:l.func,onLoad:l.func,onStickerSelect:l.func.isRequired,onEmoticonSelect:l.func.isRequired,onFlyoutShown:l.func,onFlyoutHidden:l.func,threadID:l.string};n.defaultProps={clicked:false,ContextualDialogClass:c("StickerContextualDialog.react"),disabled:false,flyoutWidth:m,onStickerSelect:c("emptyFunction"),onEmoticonSelect:c("emptyFunction")};f.exports=n}),null);