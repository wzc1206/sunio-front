(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[4],{1098:function(e,s,a){"use strict";var t=a(17),c=a.n(t),o=a(1),r=a(0),n=(a(1729),a(3));s.a=e=>{const[s,a]=Object(o.useState)(!1),t=()=>{const s=Object(r.I)(e.type);return s&&s.includes(e.address)};return Object(o.useEffect)((()=>{a(t())}),[e]),Object(n.jsx)("div",{className:c()("scan-search-favourite-handle",{"scan-search-favourite-handle-active":s}),onClick:c=>{c.nativeEvent.stopImmediatePropagation(),c.stopPropagation(),(()=>{const c=t(),o=e.address;c?Object(r.g)(e.type,o):Object(r.cb)(e.type,e.address),a(!s)})()}})}},1154:function(e,s,a){"use strict";var t=a(1),c=a.n(t),o=a(11),r=a.n(o),n=a(17),i=a.n(n),l=a(1784),d=a(1788),h=a(53),m=a(36),j=a.n(m),u=a(22),p=a(162),b=a.p+"static/media/ico_scan_search.a6dbfe38.svg",g=(a(1728),a(0)),v=a(872),N=a(938),O=a.p+"static/media/ico_scan_search_white.ad4454ac.svg",x=a(1098),k=a(3);var S=e=>{var s;const[a,c]=Object(t.useState)(!1),o=s=>{(null===e||void 0===e?void 0:e.viewToken)&&e.viewToken(s)},n=e=>{let s=e.version;return"stable"===e.version&&(s="Curve"),s};return Object(k.jsxs)("div",{className:"scan-search-result-token-wrap",children:[Object(k.jsx)("div",{className:i()("scan-search-result-row-main",{"scan-search-result-row-main-active":a}),children:Object(k.jsxs)("div",{className:"scan-search-result-row",onClick:s=>{s.nativeEvent.stopImmediatePropagation(),s.stopPropagation(),1===e.token.versionDataList.length?o(e.token.versionDataList[0]):c(!a)},children:[Object(k.jsxs)("div",{className:"scan-search-result-row-1",children:[Object(k.jsx)("img",{className:"scan-search-result-single",onError:e=>{e.target.onerror=null,e.target.src=p.a},src:e.token.tokenLogo,alt:""}),Object(k.jsx)("span",{className:"scan-search-result-tokenSymbol",children:e.token.tokenSymbol}),e.token.versionDataList.length>1?Object(k.jsx)("img",{className:"scan-search-result-token-more",src:O,alt:""}):Object(k.jsx)("div",{className:i()("scan-search-result-version","scan-search-result-".concat(e.token.versionDataList[0].version)),children:n(e.token.versionDataList[0])}),Object(k.jsx)("div",{className:"scan-search-favourite-wrap",children:Object(k.jsx)(x.a,{address:e.token.tokenAddress,type:"saveTokens"})})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-2",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("scan.chart.volume24_search"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.token.volume24h)})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-3",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("sunCurve.tvl"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.token.liquidity)})]})]})}),(null===(s=e.token.versionDataList)||void 0===s?void 0:s.length)>1&&a?Object(k.jsx)("div",{className:"scan-search-result-row-sub clearfix",children:e.token.versionDataList.map((e=>Object(k.jsx)("div",{className:"scan-search-result-row-sub-item",children:Object(k.jsxs)("div",{className:"scan-search-result-row",onClick:s=>{s.nativeEvent.stopImmediatePropagation(),s.stopPropagation(),o(e)},children:[Object(k.jsx)("div",{className:"scan-search-result-row-1",children:Object(k.jsx)("div",{className:i()("scan-search-result-version","scan-search-result-".concat(e.version)),children:n(e)})}),Object(k.jsxs)("div",{className:"scan-search-result-row-2",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("scan.chart.volume24_search"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.volume24h)})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-3",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("sunCurve.tvl"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.liquidity)})]})]})})))}):""]})};const T=Object(k.jsx)(v.a,{style:{fontSize:20,color:"#fff"},spin:!0});class w extends t.PureComponent{constructor(e){super(e),this.viewToken=e=>{const{version:s,tokenAddress:a}=e;Object(g.mb)("#/scan/tokenDetail?tokenAddress=".concat(a,"&version=").concat(s,"&timestamp=").concat((new Date).getTime()),"_self")},this.viewPair=e=>{const{version:s,pairAddress:a}=e,t="?pairAddress=".concat(a,"&version=").concat(s,"&timestamp=").concat((new Date).getTime());Object(g.mb)("#/scan/pairDetail".concat(t),"_self")},this.getPairName=e=>{let s="".concat(e.token0Symbol,"-").concat(e.token1Symbol);return e.token2Symbol&&(s+="-".concat(e.token2Symbol)),e.token3Symbol&&(s+="-".concat(e.token3Symbol)),s},this.getPoolName=e=>{let s=e.version;if("stable"===e.version){s=(N.a.filter((s=>s.poolAddress===e.pairAddress))[0]||{}).fontName}return s},this.getPoolIcons=e=>{let s=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("img",{className:"scan-search-result-pool-icon",src:e.token0Logo,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""}),Object(k.jsx)("img",{className:"scan-search-result-pool-icon",src:e.token1Logo,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""})]});if("stable"===e.version){const a=N.a.filter((s=>s.poolAddress===e.pairAddress))[0]||{};s=Object(k.jsx)("img",{className:"scan-search-result-pool-icon2",src:a.poolIcon,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""})}return s},this.handlePairLoadMore=()=>{this.state.loading1||this.setState((e=>({pairPageNo:e.pairPageNo+1})),(async()=>{await this.getPairSearchRes(this.state.poolList)}))},this.handleTokenLoadMore=()=>{this.state.loading2||this.setState((e=>({tokenPageNo:e.tokenPageNo+1})),(async()=>{await this.getTokenSearchRes(this.state.tokenList)}))},this.getPairSearchRes=async e=>{try{const s=(new Date).getTime();this.setState({loading2:!0,currentTimeStamp2:s});const a=await Object(u.i)({pageNo:this.state.pairPageNo,pageSize:3,poolList:e,orderBy:"input"});a.searchParams={currentTimeStamp:s,poolList:e},a.searchParams.currentTimeStamp===this.state.currentTimeStamp2&&a.searchParams.poolList===this.state.poolList&&this.setState((e=>({pairHasMore:a.hasMore,pairResult:[...e.pairResult,...a.list],loading2:!1})))}catch(s){return console.log("getPairSearchRes error: ",s),this.setState({loading2:!1}),null}},this.getTokenSearchRes=async e=>{try{const s=(new Date).getTime();this.setState({loading1:!0,currentTimeStamp1:s});const a=await Object(u.A)({pageNo:this.state.tokenPageNo,pageSize:3,tokenList:e,orderBy:"input"});a.searchParams={currentTimeStamp:s,tokenList:e},a.searchParams.currentTimeStamp===this.state.currentTimeStamp1&&a.searchParams.tokenList===this.state.tokenList&&this.setState((e=>({tokenHasMore:a.hasMore,tokenResult:[...e.tokenResult,...a.list],loading1:!1})))}catch(s){return console.log("getTokenSearchRes error: ",s),this.setState({loading1:!1}),null}},this.handleSearchKeyChange=async e=>{const s=Object(g.I)("saveTokens").join(","),a=Object(g.I)("savePools").join(",");this.setState({pairPageNo:1,tokenPageNo:1,poolList:a,tokenList:s,pairResult:[],tokenResult:[]},(async()=>{await Promise.all([this.getPairSearchRes(a),this.getTokenSearchRes(s)])}))},this.handleStorageChange=j.a.debounce(this.handleSearchKeyChange,500,{leading:!1,trailing:!0}),this.searchRef=c.a.createRef(),this.state={pairPageNo:1,tokenPageNo:1,pairResult:[],tokenResult:[],tokenHasMore:!1,pairHasMore:!1,loading1:!1,loading2:!1,currentTimeStamp1:"",currentTimeStamp2:"",poolList:"",tokenList:""}}componentDidMount(){window.addEventListener("setLocalItemEvent",this.handleStorageChange),this.handleSearchKeyChange()}componentWillUnmount(){window.removeEventListener("setLocalItemEvent",this.handleStorageChange)}render(){let{pairResult:e,tokenResult:s,loading1:a,loading2:t,tokenHasMore:c,pairHasMore:o}=this.state;return Object(k.jsxs)("div",{className:"watchList",children:[Object(k.jsxs)("div",{className:"scan-search-table",children:[Object(k.jsx)("div",{className:"scan-search-table-thead scan-search-pc",children:Object(k.jsxs)("div",{className:"scan-search-result-row",children:[Object(k.jsx)("div",{className:"scan-search-result-row-1",children:r.a.get("scan.tokens")}),Object(k.jsx)("div",{className:"scan-search-result-row-2",children:r.a.get("scan.chart.volume24_search")}),Object(k.jsx)("div",{className:"scan-search-result-row-3",children:r.a.get("sunCurve.tvl")})]})}),Object(k.jsx)("div",{className:"scan-search-table-thead-m scan-search-mobile",children:r.a.get("scan.tokens")}),Object(k.jsx)(d.a,{spinning:t,indicator:T,children:(null===s||void 0===s?void 0:s.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"scan-search-table-tbody",children:s.map((e=>Object(k.jsx)(S,{token:e,viewToken:this.viewToken})))}),c?Object(k.jsx)("div",{className:"scan-earch-result-more",children:Object(k.jsxs)("div",{className:"scan-earch-result-more-btn",onClick:e=>{e.nativeEvent.stopImmediatePropagation(),e.stopPropagation(),this.handleTokenLoadMore()},children:[Object(k.jsx)("span",{children:r.a.get("scan.search_more")}),Object(k.jsx)("img",{src:b,alt:""})]})}):""]}):Object(k.jsx)("div",{className:"scan-earch-result-empty",children:t?"--":r.a.get("list.no_token_found")})})]}),Object(k.jsxs)("div",{className:"scan-search-table",style:{marginTop:"10px"},children:[Object(k.jsx)("div",{className:"scan-search-table-thead scan-search-pc",children:Object(k.jsxs)("div",{className:"scan-search-result-row",children:[Object(k.jsx)("div",{className:"scan-search-result-row-1",children:r.a.get("scan.pools")}),Object(k.jsx)("div",{className:"scan-search-result-row-2",children:r.a.get("scan.chart.volume24_search")}),Object(k.jsx)("div",{className:"scan-search-result-row-3",children:r.a.get("sunCurve.tvl")})]})}),Object(k.jsx)("div",{className:"scan-search-table-thead-m scan-search-mobile",style:{borderTop:"4px solid rgba(255, 255, 255, 0.05)",paddingTop:"12px"},children:r.a.get("scan.pool")}),Object(k.jsx)(d.a,{spinning:a,indicator:T,children:(null===e||void 0===e?void 0:e.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"scan-search-table-tbody",children:e.map((e=>Object(k.jsxs)("div",{className:"scan-search-result-row",onClick:s=>{s.nativeEvent.stopImmediatePropagation(),s.stopPropagation(),this.viewPair(e)},children:[Object(k.jsxs)("div",{className:"scan-search-result-row-1",children:[Object(k.jsx)("div",{className:"scan-search-result-pool",children:this.getPoolIcons(e)}),Object(k.jsx)("span",{className:"scan-search-result-name",children:this.getPairName(e)}),Object(k.jsx)("div",{className:i()("scan-search-result-version","scan-search-result-".concat(e.version)),children:this.getPoolName(e)}),"v3"===e.version&&Object(k.jsxs)("div",{className:"scan-search-result-fee",children:[100*e.feeRate,"%"]}),Object(k.jsx)("div",{className:"scan-search-favourite-wrap",children:Object(k.jsx)(x.a,{address:e.pairAddress,type:"savePools"})})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-2",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("scan.chart.volume24_search"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.volume24h)})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-3",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("sunCurve.tvl"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.liquidity)})]})]})))}),o?Object(k.jsx)("div",{className:"scan-earch-result-more",children:Object(k.jsxs)("div",{className:"scan-earch-result-more-btn",onClick:e=>{e.nativeEvent.stopImmediatePropagation(),e.stopPropagation(),this.handlePairLoadMore()},children:[Object(k.jsx)("span",{children:r.a.get("scan.search_more")}),Object(k.jsx)("img",{src:b,alt:""})]})}):""]}):Object(k.jsx)("div",{className:"scan-earch-result-empty",children:a?"--":r.a.get("scan.search.no_results")})})]})]})}}var y=w;const f=Object(k.jsx)(v.a,{style:{fontSize:20,color:"#fff"},spin:!0});class P extends t.PureComponent{constructor(e){super(e),this.changeShow=()=>{this.setState({dropStatus:!1})},this.windowScroll=()=>{this.searchRef},this.getPairSearchRes=async e=>{try{const s=(new Date).getTime();this.setState({loading1:!0,currentTimeStamp2:s});const a=await Object(u.K)({pageNo:this.state.pairPageNo,keyword:e});a.searchParams={currentTimeStamp:s,keywords:e},a.searchParams.currentTimeStamp===this.state.currentTimeStamp2&&a.searchParams.keywords===this.state.keyName&&this.setState((e=>({pairHasMore:a.hasMore,pairResult:[...e.pairResult,...a.list],loading1:!1})))}catch(s){return console.log("getPairSearchRes error: ",s),this.setState({loading1:!1}),null}},this.getTokenSearchRes=async e=>{try{const s=(new Date).getTime();this.setState({loading2:!0,currentTimeStamp1:s});const a=await Object(u.L)({pageNo:this.state.tokenPageNo,keyword:e});a.searchParams={currentTimeStamp:s,keywords:e},a.searchParams.currentTimeStamp===this.state.currentTimeStamp1&&a.searchParams.keywords===this.state.keyName&&this.setState((e=>({tokenHasMore:a.hasMore,tokenResult:[...e.tokenResult,...a.list],loading2:!1})))}catch(s){return console.log("getTokenSearchRes error: ",s),this.setState({loading2:!1}),null}},this.handlePairLoadMore=()=>{this.state.loading1||this.setState((e=>({pairPageNo:e.pairPageNo+1})),(async()=>{await this.getPairSearchRes(this.state.keyName)}))},this.handleTokenLoadMore=()=>{this.state.loading2||this.setState((e=>({tokenPageNo:e.tokenPageNo+1})),(async()=>{await this.getTokenSearchRes(this.state.keyName)}))},this.handleSearchKeyChange=async e=>{this.setState({keyName:e,pairPageNo:1,tokenPageNo:1,pairResult:[],tokenResult:[]},(async()=>{await Promise.all([this.getPairSearchRes(this.state.keyName),this.getTokenSearchRes(this.state.keyName)])}))},this.getOnChangeFunc=j.a.debounce(this.handleSearchKeyChange,500,{leading:!1,trailing:!0}),this.onFocus=()=>{},this.viewToken=e=>{const{version:s,tokenAddress:a}=e;Object(g.mb)("#/scan/tokenDetail?tokenAddress=".concat(a,"&version=").concat(s,"&timestamp=").concat((new Date).getTime()),"_self")},this.viewPair=e=>{const{version:s,pairAddress:a}=e,t="?pairAddress=".concat(a,"&version=").concat(s,"&timestamp=").concat((new Date).getTime());Object(g.mb)("#/scan/pairDetail".concat(t),"_self")},this.getTokenVersionName=e=>{let s=e.version;return"stable"===e.version&&(s="Curve"),s},this.getPairName=e=>{let s="".concat(e.token0Symbol,"/").concat(e.token1Symbol);return e.token2Symbol&&(s+="/".concat(e.token2Symbol)),e.token3Symbol&&(s+="/".concat(e.token3Symbol)),s},this.getPoolName=e=>{let s=e.version;if("stable"===e.version){s=(N.a.filter((s=>s.poolAddress===e.pairAddress))[0]||{}).fontName}return s},this.getPoolIcons=e=>{let s=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("img",{className:"scan-search-result-pool-icon",src:e.token0Logo,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""}),Object(k.jsx)("img",{className:"scan-search-result-pool-icon",src:e.token1Logo,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""})]});if("stable"===e.version){const a=N.a.filter((s=>s.poolAddress===e.pairAddress))[0]||{};s=Object(k.jsx)("img",{className:"scan-search-result-pool-icon2",src:a.poolIcon,onError:e=>{e.target.onerror=null,e.target.src=p.a},alt:""})}return s},this.searchRef=c.a.createRef(),this.state={dropStatus:!1,keyName:"",pairPageNo:1,tokenPageNo:1,pairResult:[],tokenResult:[],tokenHasMore:!1,pairHasMore:!1,loading1:!1,loading2:!1,currentTimeStamp1:"",currentTimeStamp2:"",tabIndex:0}}componentDidMount(){this.getOnChangeFunc(),window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("click",this.changeShow,!1)}componentDidUpdate(e,s,a){}componentWillUnmount(){window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("click",this.changeShow,!1)}handleClickInput(){(window.innerWidth||document.body.clientWidth)<1080?Object(g.mb)("#/scan/search","_self"):this.setState({dropStatus:!0})}setTabIndex(e){this.setState({tabIndex:e})}render(){let{dropStatus:e,pairResult:s,tokenResult:a,loading1:t,loading2:c,tokenHasMore:o,pairHasMore:n,keyName:h,tabIndex:m}=this.state;return Object(k.jsxs)("div",{onClick:e=>{this.handleClickInput(),e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()},className:i()("base-scan-search",{"base-scan-search-active":e||this.props.alwaysShowReult}),children:[Object(k.jsx)(l.a,{className:"base-scan-search-input",size:"large",placeholder:0===m?r.a.get("scan.search.search_place_holder"):"",prefix:Object(k.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANrSURBVHgBvVZNaBNBFJ60WE2iSCQ1VKtWEaUHiYiIelEPQlFvXkv9AX8QEQTrQVBCPWhb8CdQpEop9pJi78Vr8NJIMW2IqaGRpLb5sU2aNG3SND87fgt2mUy3cbdZ+8Gw7Myb97557817Q4gCDAwMGOPx+LVMJmPH8C0DhUJBKJVKdGVlJZ3NZl0Y3aFQ6DLREuFw2AxbLyilSaoQkPenUqm7drt9K6kGCwsL99UY5rG4uOgDkRNELUTmyWTy7XqK4foC3O1PJBJf5ufnPQhBsoJsZmpq6pYqAmD9iVckCAKFRwanp6dbbDabgd/jcrkOgtAjkAnIEUFYrisyjgR7z2/O5/Mjbrf7rJL9IFcDr7RjT5zzRA4kzlfcjCxvE7OaBQj19ff3byMqAWOHisXiT45E1OFw7JHdMDo62gDjQXYDkshOqoDP5zuQy+UinDdfywpD8A538gDu/m5SJTwezyUcTFjVC68IMzMzjXIEypJnYmLiCtEICMcHVvfS0lJXmUAwGDzNCuCKfSUawuv1HhdPzhDwlQlg4iFH4DHRGAjpN9bG5OSkFIYanU53mBUeHx93Eo0Bm0Psf21tbbNEAMPCLjqdzh9EY9TV1UW4KatEANVrF7tiMpmyRGOgtBfZf6PRqJcI6PX63+xifX29iWgM2CjrjKgxyxIBZOgsu2i1Wo8RjQEvl+k0m80eiQDgZxctFksL0RgGg+Ei+x8IBH5JP+hkJ7lC4e/t7d1CNAIq3xlWP4peaI1QOp3+zgrFYrHbRCPA/YNcmX+3Rigajd6j5U0jgWbSQKoE9LZRDpFIpHmNILrhTtRsL8fUPTw83Eg2CLT3U5R70sH9Q+tuALOrPFtclwCINRGVgK5W9P9ZVhdCkf+nLgg84UngmkYxf1OBXTI2NrYXSfyKygA6bEp0iM3po5wC5EUQ78JnyOoLnZ2dO1blUbr3Yb4Vb8k+9P4UXQfwSATP/KOKSEDRG1oBYnvFifKIaYGqQxCjSREJtOUHYB2jG8DfV7QDidwhR0KxJyC4f25urgunzSk1jMT9jD3nVnWgET3n5cRwQOYIUYqenp7tKFY3xPxANo/gmxGNwUsC5v34OpAD7exDgwXWukV5FghjWBWJagHiL3lPVKwL/wOwaWMJwANPyWYD8e/AlS5hiPVC9wdbKGqxVR/jkQAAAABJRU5ErkJggg==",alt:""}),onChange:e=>this.getOnChangeFunc(e.target.value),disabled:1===m}),Object(k.jsxs)("div",{className:"scan-search-result",children:[Object(k.jsxs)("div",{className:"scan-search-tab",children:[Object(k.jsx)("div",{className:i()("scan-search-tab-item",{"scan-search-tab-item-active":0===m}),onClick:()=>this.setTabIndex(0),children:r.a.get("scan.favourite.search")}),Object(k.jsx)("div",{className:i()("scan-search-tab-item",{"scan-search-tab-item-active":1===m}),onClick:()=>this.setTabIndex(1),children:r.a.get("scan.favourite.watchlist")})]}),0===m?Object(k.jsxs)("div",{className:"search-result-wrapper",children:[Object(k.jsxs)("div",{className:"scan-search-table",children:[Object(k.jsx)("div",{className:"scan-search-table-thead scan-search-pc",children:Object(k.jsxs)("div",{className:"scan-search-result-row",children:[Object(k.jsx)("div",{className:"scan-search-result-row-1",children:r.a.get("scan.tokens")}),Object(k.jsx)("div",{className:"scan-search-result-row-2",children:r.a.get("scan.chart.volume24_search")}),Object(k.jsx)("div",{className:"scan-search-result-row-3",children:r.a.get("sunCurve.tvl")})]})}),Object(k.jsx)("div",{className:"scan-search-table-thead-m scan-search-mobile",children:r.a.get("scan.tokens")}),Object(k.jsx)(d.a,{spinning:c,indicator:f,children:(null===a||void 0===a?void 0:a.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"scan-search-table-tbody",children:a.map((e=>Object(k.jsx)(S,{token:e,viewToken:this.viewToken})))}),o?Object(k.jsx)("div",{className:"scan-earch-result-more",children:Object(k.jsxs)("div",{className:"scan-earch-result-more-btn",onClick:e=>{e.nativeEvent.stopImmediatePropagation(),e.stopPropagation(),this.handleTokenLoadMore()},children:[Object(k.jsx)("span",{children:r.a.get("scan.search_more")}),Object(k.jsx)("img",{src:b,alt:""})]})}):""]}):Object(k.jsx)("div",{className:"scan-earch-result-empty",children:c?"--":r.a.get("list.no_token_found")})})]}),Object(k.jsxs)("div",{className:"scan-search-table",style:{marginTop:"10px"},children:[Object(k.jsx)("div",{className:"scan-search-table-thead scan-search-pc",children:Object(k.jsxs)("div",{className:"scan-search-result-row",children:[Object(k.jsx)("div",{className:"scan-search-result-row-1",children:r.a.get("scan.pools")}),Object(k.jsx)("div",{className:"scan-search-result-row-2",children:r.a.get("scan.chart.volume24_search")}),Object(k.jsx)("div",{className:"scan-search-result-row-3",children:r.a.get("sunCurve.tvl")})]})}),Object(k.jsx)("div",{className:"scan-search-table-thead-m scan-search-mobile",style:{borderTop:"4px solid rgba(255, 255, 255, 0.05)",paddingTop:"12px"},children:r.a.get("scan.pool")}),Object(k.jsx)(d.a,{spinning:t,indicator:f,children:(null===s||void 0===s?void 0:s.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"scan-search-table-tbody",children:s.map((e=>Object(k.jsxs)("div",{className:"scan-search-result-row",onClick:s=>{s.nativeEvent.stopImmediatePropagation(),s.stopPropagation(),this.viewPair(e)},children:[Object(k.jsxs)("div",{className:"scan-search-result-row-1",children:[Object(k.jsx)("div",{className:"scan-search-result-pool",children:this.getPoolIcons(e)}),Object(k.jsx)("span",{className:"scan-search-result-name",children:this.getPairName(e)}),Object(k.jsx)("div",{className:i()("scan-search-result-version","scan-search-result-".concat(e.version)),children:this.getPoolName(e)}),"v3"===e.version&&Object(k.jsxs)("div",{className:"scan-search-result-fee",children:[100*e.feeRate,"%"]}),Object(k.jsx)("div",{className:"scan-search-favourite-wrap",children:Object(k.jsx)(x.a,{address:e.pairAddress,type:"savePools"})})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-2",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("scan.chart.volume24_search"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.volume24h)})]}),Object(k.jsxs)("div",{className:"scan-search-result-row-3",children:[Object(k.jsxs)("span",{className:"scan-search-mobile scan-search-result-row-label",children:[r.a.get("sunCurve.tvl"),"\uff1a"]}),Object(k.jsx)("span",{children:Object(g.U)(e.liquidity)})]})]})))}),n?Object(k.jsx)("div",{className:"scan-earch-result-more",children:Object(k.jsxs)("div",{className:"scan-earch-result-more-btn",onClick:e=>{e.nativeEvent.stopImmediatePropagation(),e.stopPropagation(),this.handlePairLoadMore()},children:[Object(k.jsx)("span",{children:r.a.get("scan.search_more")}),Object(k.jsx)("img",{src:b,alt:""})]})}):""]}):Object(k.jsx)("div",{className:"scan-earch-result-empty",children:t?"--":r.a.get("scan.search.no_results")})})]})]}):Object(k.jsx)(y,{})]})]})}}s.a=Object(h.j)(P)},1728:function(e,s,a){},1729:function(e,s,a){},938:function(e,s,a){"use strict";var t=a(445),c=a(443),o=a(442),r=a(444),n=a(450),i=a(446),l=a(452),d=a(454),h=a(448),m=a(455),j=a(451),u=a(453),p=a(449),b=a(447),g=a(52);const v=[{poolAddress:"TS8d3ZrSxiGZkqhJqMzFKHEC1pjaowFMBJ",poolIcon:m.default,fontName:"2pool",poolTokens:["TUSD","USDT"],routeName:"usdt_tusd",stableLp:"TW1UvgYQZdZmHaT3UeWiJ9owNw2xffVnA5",decimals:18,category:g.j.liquidity_usdttusd},{poolAddress:"TLssvTsY4YZeDPwemQvUzLdoqhFCbVxDGo",poolIcon:j.default,fontName:"USDD Pool",poolTokens:["USDD","TUSD","USDT"],routeName:"usdd_usdt_tusd_2pool",stableLp:"THiz24TyXvyUXRjZHW3gW2PMBRzfNLuJdT",decimals:18,category:g.j.liquidity_oldusdc},{poolAddress:"TKBqNLyGJRQbpuMhaT49qG7adcxxmFaVxd",poolIcon:u.default,fontName:"USDJ Pool",poolTokens:["USDJ","TUSD","USDT"],routeName:"usdj_usdt_tusd_2pool",stableLp:"TM9UdzBnK7iETZie4H9moTojDXSBfqi12d",decimals:18,category:g.j.liquidity_oldusdc},{poolAddress:"TE7SB1v9vRbYRe5aJMWQWp9yfE2k9hnn3s",poolIcon:p.default,fontName:"USDC Pool",poolTokens:["USDC","TUSD","USDT"],routeName:"usdc_usdt_tusd_2pool",stableLp:"THPuVJt3oa67Erk6Akg5pjEaSN91FExqMT",decimals:18,category:g.j.liquidity_oldusdc},{poolAddress:"TExeaZuD5YPi747PN5yEwk3Ro9eT2jJfB6",poolIcon:n.default,fontName:"USDC 2pool",poolTokens:["USDC","USDT"],routeName:"usdc_2pool",stableLp:"TYEsj7fELLVwj85ZUMge227Af7iySk11zg",decimals:18,category:g.j.liquidity_usdc2pool},{poolAddress:"TNTfaTpkdd4AQDeqr8SGG7tgdkdjdhbP5c",poolIcon:o.default,fontName:"USDD 2pool",poolTokens:["USDD","USDT"],routeName:"usdd_2pool",stableLp:"TYKoYhjEpqazFLyQzn6BCigLnDL9c8Nhz8",decimals:18,category:g.j.liquidity_2pool},{poolAddress:"TNU9LfegfzLcJo2ZxTQXDYE2uh7JuxZfnP",poolIcon:l.default,fontName:"Old USDD Pool",poolTokens:["USDD","USDC","USDT"],routeName:"usdd_usd_2pool",stableLp:"TXAqvHp8qojeKDkKagGhmB3e9VyEH9qjMj",decimals:18,category:g.j.liquidity_usdd2pool},{poolAddress:"TLZacPrPKfrfbsimu5dDdrgMT16m9cnpL9",poolIcon:h.default,fontName:"Old TUSD Pool",poolTokens:["TUSD","USDC","USDT"],routeName:"tusd_2pool",stableLp:"TVjLZhmYbJ9zJiDL4ti2nWC44149J9toYa",decimals:18,category:g.j.liquidity_tusd2pool},{poolAddress:"TSbahrnT5sJwjCzN6LPa1pE5d9pdVwRQ1E",poolIcon:d.default,fontName:"Old USDJ Pool",poolTokens:["USDJ","USDC","USDT"],routeName:"usdj_2pool",stableLp:"TJxb5j38qc6PexwodjisvRvR7Uo6fJoq9A",decimals:18,category:g.j.liquidity_usdj2pool},{poolAddress:"TGG5AWMNjssDtLgsHg2QSN8CTwVTCHQMF6",poolIcon:i.default,fontName:"Old BUSD Pool",poolTokens:["BUSD","USDC","USDT"],routeName:"busd_2pool",stableLp:"TK5DFyaudUAjKP9iFscf4eNnjUDHSe9umC",decimals:18,category:g.j.liquidity_busd2pool},{poolAddress:"TKcEU8ekq2ZoFzLSGFYCUY6aocJBX9X31b",poolIcon:t.default,fontName:"Old 3pool",poolTokens:["USDJ","TUSD","USDT"],routeName:"3pool",stableLp:"TD3et9gS2pYz46ZC2mkCfYcKQGNwrnBLef",decimals:18,category:g.j.liquidity_old3pool},{poolAddress:"TQx6CdLHqjwVmJ45ecRzodKfVumAsdoRXH",poolIcon:b.default,fontName:"Old USDC",poolTokens:["USDC","USDJ","TUSD","USDT"],routeName:"usdc",stableLp:"TQ4i5sdj1VGYGFcivyqFW9NXqzpaP6X8BA",decimals:18,category:g.j.liquidity_oldusdc},{poolAddress:"TKVsYedAY23WFchBniU7kcx1ybJnmRSbGt",poolIcon:r.default,fontName:"3pool",poolTokens:["USDD","TUSD","USDT"],routeName:"usdd_3pool",stableLp:"TA1TVZdERDRDGi9QXNdLVfPxbymmi8xFyc",decimals:18,category:g.j.liquidity_3pool},{poolAddress:"TAUGwRhmCP518Bm4VBqv7hDun9fg8kYjC4",poolIcon:c.default,fontName:"Old 2pool",poolTokens:["USDD","USDT"],routeName:"usdd_old_2pool",stableLp:"TXcJ6pCEGKeLEYXrVnLhqpCVuKfV6wgsfC",decimals:18,category:g.j.liquidity_old2pool}];m.default,g.j.liquidity_usdttusd,j.default,g.j.liquidity_oldusdc,u.default,g.j.liquidity_oldusdc,p.default,g.j.liquidity_oldusdc,n.default,g.j.liquidity_usdc2pool,o.default,g.j.liquidity_2pool,l.default,g.j.liquidity_usdd2pool,h.default,g.j.liquidity_tusd2pool,d.default,g.j.liquidity_usdj2pool,i.default,g.j.liquidity_busd2pool,t.default,g.j.liquidity_old3pool,b.default,g.j.liquidity_oldusdc,r.default,g.j.liquidity_3pool,c.default,g.j.liquidity_old2pool;let N;N=v,s.a=N}}]);