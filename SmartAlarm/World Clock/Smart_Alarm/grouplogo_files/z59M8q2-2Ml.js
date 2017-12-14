if (self.CavalryLogger) { CavalryLogger.start_js(["w9nhF"]); }

__d("MessengerSearchContainer.react",["cx","fbt","Link.react","MessengerActions","MessengerSpinner.react","messengerThreadlistReact","MessengerThreadSearchActions","MessengerThreadSearchStore","MessengerView","React","StoreAndPropBasedStateMixin","emptyFunction"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("messengerThreadlistReact").jsComponent,k=c("React").PropTypes,l=c("React").createClass({displayName:"MessengerSearchContainer",mixins:[c("StoreAndPropBasedStateMixin")(c("MessengerThreadSearchStore"))],propTypes:{activeThreadID:k.string,filter:k.string.isRequired,folder:k.string.isRequired,isComposing:k.bool,isLoaded:k.bool,isLoading:k.bool,isNewMessageActive:k.bool,viewer:k.string.isRequired},statics:{calculateState:function m(n){var o=c("MessengerThreadSearchStore").getState();return{threads:o.threads?o.threads.toArray():[],threadsExhausted:o.threadsExhausted,loading:o.loading,query:o.query}}},_subscriptions:null,render:function m(){return c("React").createElement(j,babelHelpers["extends"]({},this.props,{clearQuery:this._handleClear,isLoaded:!this.state.loading&&!!this.state.threads,isLoading:this.state.loading,isSearching:false,newMessageRequestThreads:[],onLoadMoreRequest:c("MessengerThreadSearchActions").loadMoreThreads,onQuery:c("MessengerActions").changeQueryAll,onSearchResults:c("emptyFunction"),p2pJewelBannerContainer:null,queryString:this.state.query,renderLoadMore:this._renderLoadMoreLink,threads:this.state.threads}))},_renderLoadMoreLink:function m(){if(this.state.threadsExhausted)return c("React").createElement("div",{className:"_19hf"},c("React").createElement(c("Link.react"),{href:"#",onClick:this._handleClear},i._("No conversations found")));if(this.state.loading)return c("React").createElement("div",{className:"_19hf"},c("React").createElement(c("MessengerSpinner.react"),null));return c("React").createElement("div",{className:"_19hf"},c("React").createElement(c("Link.react"),{href:"#",onClick:c("MessengerThreadSearchActions").loadMoreThreads,tabIndex:-1},i._("Load More")))},_handleClear:function m(){c("MessengerActions").changeMasterView(c("MessengerView").MASTER.RECENT)}});f.exports=l}),null);