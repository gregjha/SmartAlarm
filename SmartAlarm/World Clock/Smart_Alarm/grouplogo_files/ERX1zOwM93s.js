if (self.CavalryLogger) { CavalryLogger.start_js(["GPEVS"]); }

__d("messengerRTCVideoCallButtonReact",["fbt","React","ReasonReact"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={height:"32px",width:"32px"};function j(o,p){return{clipRule:"evenodd",fill:"none",fillRule:"evenodd",stroke:o,strokeMiterlimit:"10",strokeWidth:"2"}}var k=j("#888888",0),l=c("ReasonReact").statelessComponent("MessengerRTCVideoCallButtonReact");function m(o,p,q,r){var s=l.slice();s[9]=function(){var t=q!==0?h._("Start a group video chat"):h._("Start a video chat"),u=p!==0?j(o,0):k;return c("React").createElement("div",{style:i,title:t},c("React").createElement("svg",{style:u,viewBox:"0 0 64 64"},c("React").createElement("title",undefined,t),c("React").createElement("g",undefined,c("React").createElement("g",undefined,c("React").createElement("path",{d:"M47,27.8v7.5l9,4.5V23.2L47,27.8z M37.2,17H13.8C10.6,17,8,19.6,8,22.8v17.4c0,3.2,2.6,5.8,5.8,5.8h23.3\nc3.2,0,5.8-2.6,5.8-5.8V22.8C43,19.6,40.4,17,37.2,17z"})))))};return s}var n=c("ReasonReact").wrapReasonForJs(l,function(o){return m(o.customColor,+o.isAvailable,+o.isGroupChat,[])});g.svgWrapperStyle=i;g.svgStyle=j;g.unavailable=k;g.component=l;g.make=m;g.jsComponent=n}),null);