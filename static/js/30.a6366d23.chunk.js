(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[30],{1059:function(e,t,a){"use strict";a(1072);var c=a(15),s=a.n(c),n=a(2);t.a=e=>Object(n.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(n.jsx)("div",{className:s()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},1063:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var c=a(8),s=a.n(c);const n={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:s.a.get("banner.title_deposit"),content:s.a.get("banner.desc_deposit"),tabTitle:s.a.get("header.deposit")},2:{title:s.a.get("banner.title_withdraw"),content:s.a.get("banner.desc_withdraw"),tabTitle:s.a.get("header.withdraw")},3:{title:s.a.get("banner.title_1"),content:s.a.get("banner.desc_1"),tabTitle:s.a.get("header.swap")}},i=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},1064:function(e,t,a){"use strict";var c=a(15),s=a.n(c),n=a(1086),l=a(2);t.a=e=>{const{checked:t,tokenLogo:a,symbol:c="",onChange:i,id:o=""}=e;return Object(l.jsxs)("div",{className:s()({[n.sun_check_button]:!0,[n.sun_check_active_button]:t}),onClick:()=>{i&&i(!t,o)},children:[a&&Object(l.jsx)("img",{src:a,alt:"",className:"token-logo"}),Object(l.jsx)("span",{children:c})]})}},1065:function(e,t,a){"use strict";var c=a(8),s=a.n(c),n=a(15),l=a.n(n),i=a(1930),o=a(1075),r=a(2);const b=[{key:.2,label:"0.2%"},{key:3,label:"3%"}],j=[{key:.005,label:"0.5%"},{key:.01,label:"1%"}];t.a=e=>{const{slippage:t,customSlippage:a,CUSTOM_SLIPPAGE:c,type:n="withdraw"}=e,d="withdraw"===n?b:j;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"mr-10",children:s.a.get("withdraw.slippage")}),Object(r.jsxs)("div",{className:l()(o.setting_btns),children:[Object(r.jsx)("div",{className:o.setting_btn_wrap,children:d.map((a=>Object(r.jsx)("button",{className:l()(t===a.key?o.active:""),onClick:()=>{return t=a.key,void(e.onChangeSlippage&&e.onChangeSlippage(t));var t},children:a.label})))}),Object(r.jsx)(i.a,{className:l()(o.setting_input,o.module_important,["ml-20"]),suffix:"%",value:a,onFocus:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(c)},onBlur:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(String(d[0].key))},onChange:t=>{e.onChangeCustomSlippage&&e.onChangeCustomSlippage(t.target.value)}})]})]})}},1069:function(e,t,a){"use strict";var c=a(1),s=a(15),n=a.n(s),l=a(1073),i=a(2);const o=e=>{const{title:t,subTitle:a,isRevert:c}=e,s="string"===typeof t;return Object(i.jsxs)("div",{className:l.page_title_wrap,children:[c&&a&&Object(i.jsx)("div",{className:l.page_title_sub,children:a}),t&&Object(i.jsx)("div",{className:n()({[l.page_title]:!0,[l.page_title_revert]:c,[l.page_title_ele]:!s}),children:s?t.split("").map(((e,t)=>Object(i.jsx)("span",{className:l.page_title_ele,children:e},t))):t}),a&&!c&&Object(i.jsx)("div",{className:l.page_title_sub,children:a})]})};t.a=Object(c.memo)(o)},1072:function(e,t,a){},1073:function(e,t,a){e.exports={page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}},1075:function(e,t,a){e.exports={setting_wrap:"style_setting_wrap__L7ld9",setting_label:"style_setting_label__3qQrG",setting_btns:"style_setting_btns__zH_61",setting_btn_wrap:"style_setting_btn_wrap__uxT1B",setting_input:"style_setting_input__kvJzs",active:"style_active__10VTC",module_important:"style_module_important__PuwNO",info_text:"style_info_text__3K73H",setting_minutes:"style_setting_minutes__1mIXw"}},1077:function(e,t,a){},1080:function(e,t,a){},1081:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA/JJREFUWEfVWctqFUEQPeX7/X5tXIkIouBa/AkxgkYXgrhwIQiufaCuxYXoQsSNGkHFnxDXgiKIuHJlTIwmMYmJ8ci5Voe+k3tneuaOIVMwhCTT3aerTlWdnjb0YCQNwHIAKwEsA7AEwFL/qZn/AJj1n78B/AIwY2asuqwWLG0kBXCVPwJZxrSJKT1mpg2UslKASa4AsMG9GhaSBwVgJuNR/T/2uCKhTSoCwTRm1MymU1EnASapcK/3BUOoJ9xLWjTZSAbgayLqaMNjZiba5FohYA//ZgB6V9z7qcfMFNrKRlLeX+tPmHukiCa5gElqQlFAJi8ofKJAbUZSFNEaootMa8gpHa0rYJIbAShssnE9vWR33g692qwDoEc2YWY/Oo3pCDjj2e9mNlmbS3MmIrkawKY8T88D7Jzd4oMWDGzYRwb0tyyn2wB7NdjmCSYKjC2EZ7NrkFRFEj2U5ENx9cgCVjUQ+ZVg8m6pjkTyMIA9AAZSSlQ3ZzinRY0WFjMbCe/OAfamsNV39bVMNSCp5LwN4JxPfMPMrvQSHa8e2z3aw6G5xIBFBRX1UlQgeRDAUwD7I4A9A9ZcETWkP4b0txbgKNHUDOTdpKZA8jyAW1EN1XQDAM7WUVm8ucjLajKtBAyAxReVlCTvkhTXHwA4GnlVxf6CmT3shQo5CdiqzeYE3+G7UEbmagOSRwA8AbA7mvwNgBNm9qFOsB590VR0VdQHBVgKTMk2a2aDBR3pMoCrGcWljnTPtW4VvB/lgLyKRFIOVQsfFuBQ8yRoRnNKzTEAz6sgShhz2swe56wtrSFdMy7AofbmdjWSfQCeJSxe5ZUiwKFlTwmw6CBazGuDHRJAoA9UQZQzJoUSOuFILkwLcOCHylmhgK4ZbNJ0LhlU3mYFeJfX4y+p9TdplRpf8nq8Uy2jkYAbR4mkpPMG0w9gb43R1lTvzCy3XEbSoZV0qWXtFIBHNYMN0x3PAx2J+lZZS20c/xNwn5m9SG0cSa25Bkqolkrd6XAbTCfwa2Z2s0AStLVmKbZk8VOFEiT3uWY+FI3/DKDfzF4VgG0XP66IwpE+SV6WAU3yDIA7rgXC0JeumeeOPjl0CJT9Jy8dcGh9pQR8gWfU/6WZT0bv6ax4yczupmy6q4B30JWOSDmeuQ5AcjTYe9fMb1PAOqbg3fYjkv8zJJ9OyqUOoZ0AkIwB3wdw0cz0ATHJCg+hDrqnY36MxAWL6PDJzF4nofSXko75DlifVZvzISWTgPp1cX+qCmFr1MfACHRzPrd28fTi/qAdgVZTacaVQQS6OZcymdrajGuvbNH3E4C0guhS5WJRF4qTRTdGnZpN4bVXgcBZ8Kvbv7gRNO3rhp7CAAAAAElFTkSuQmCC"},1082:function(e,t,a){"use strict";var c=a(56);t.a=e=>{let{childPage:t}=e;const a=["deposit","withdraw","swap"],s=function(e,s){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const l=a[e-1],i=c.g[s?"".concat(s,"_").concat(l):l];i&&Object(c.a)({action:i(t),event_category:t,...n})};return{tabChangeLog:e=>s(e,"tab"),tabSubmitLog:(e,t)=>s(e,null,t)}}},1083:function(e,t,a){"use strict";var c=a(1),s=a(0),n=a(2);t.a=e=>{let{name:t,cb:a,valueFlag:l}=e;return Object(c.useEffect)((()=>{const e=Object(s.G)(t),c="withdraw"===e?"2":"1";if(console.log("====cbIndex===",c),e){a&&a(l?{value:c}:c)}}),[]),Object(n.jsx)(n.Fragment,{})}},1086:function(e,t,a){e.exports={sun_check_button:"style_sun_check_button__5diEB",sun_check_active_button:"style_sun_check_active_button__28IzL"}},1100:function(e,t,a){"use strict"},1131:function(e,t,a){"use strict";a.p},1985:function(e,t,a){"use strict";a.r(t),a.d(t,"renderTab",(function(){return ge})),a.d(t,"usePoolTab",(function(){return he}));var c=a(1973),s=a(1947),n=a(1949),l=a(70),i=a(1),o=a(8),r=a.n(o),b=(a(1077),a(1080),a(98)),j=a(1058),d=(a(1513),a(1930)),u=(a(1100),a(268)),p=a(1081),O=a(3),g=a(5),m=a(17),h=a(0),x=a(1064),v=a(1065),f=a(1060),_=a(270),w=a(2);function y(e){const[t,a]=Object(i.useState)(2),[c,s]=Object(i.useState)(1),[n,o]=Object(i.useState)(0),[j,y]=Object(i.useState)(1),[S,N]=Object(i.useState)(-1),[C,A]=Object(i.useState)(1),[k,P]=Object(i.useState)(.005),[T,D]=Object(i.useState)(""),[L,I]=Object(i.useState)(!0),[F,B]=Object(i.useState)(""),[V,U]=Object(i.useState)(!1),{usddPools:E,usddPoolIndex:K,usddPoolKeys:M,usddContracts:R}=O.a,{stablePool:H}=R,q=Object(l.d)((()=>b.a.network)),J=Object(l.d)((()=>b.a.system)),Z=Object(l.d)((()=>b.a.usddPool)),[Q,W]=Object(i.useState)(!1);Object(i.useEffect)((()=>{z({i:t,j:n,dx:c})}),[]);const G=e=>{let{...t}=e;U(!V),X({...t,exchangeFlags:!V})},z=async e=>{let{...a}=e;try{let e=void 0===a.i?t:a.i,s=void 0===a.j?n:a.j,l=void 0===a.dx?Object(h.fb)(c):Object(h.fb)(a.dx);if(!Object(h.a)(l).gt(0))return void y(0);let i=Object(h.a)(l).times(E[K[e]].precision)._toIntegerDown()._toHex(),o=null;if(o=await Object(g.T)(e,s,i),o.success){let e=Object(h.a)(o.value).div(E[K[s]].precision);y(Object(h.c)(Object(h.a)(e)._toFixed(E[K[s]].decimal,1))),A(Object(h.a)(o.value))}else y(0),A(1);a.notChangeRate||X({i:e,j:s,dx:l})}catch(s){console.log("getDyData: ",s)}},X=async e=>{let{...a}=e;try{let e=void 0===a.i?t:a.i,s=void 0===a.j?n:a.j,l=void 0===a.dx?Object(h.fb)(c):Object(h.fb)(a.dx),i=void 0===a.exchangeFlags?V:a.exchangeFlags,o=Object(h.a)(l).times(E[K[e]].precision)._toIntegerDown()._toHex(),r=null;if(!Object(h.a)(l).gt(0))return;if(r=await Object(g.T)(e,s,o),r.success){let e=Object(h.a)(r.value).div(E[K[s]].precision).div(l);N(i?Object(h.a)(1).div(Object(h.a)(e)._toFixed(4,1))._toFixed(4,1):e._toFixed(4,1))}}catch(s){console.log("getRateData: ",s)}},Y=e=>{let l=n;Number(e)!==Number(t)&&(l=t),a(l),o(e);let i=Object(h.fb)(c)._toFixed(E[K[l]].decimal,1);s(Object(h.c)(i)),z({j:e,i:l,dx:i})},$=e=>{!Q&&W(!0);const{valid:a,str:c}=Object(h.V)((""+e).replace(/,/g,""),E[K[t]].decimal);let n=Z.poolData&&Object(h.a)(Z.poolData[K[t]].balance).div(E[K[t]].precision)._toFixed(2,1);if(a){if(Object(h.a)(c).lte(0))return s(Object(h.c)(c)),y(0),void B(r.a.get("buysell.error_msg_1"));Object(h.a)(c).gt(n)&&B(r.a.get("buysell.error_msg_2")),s(Object(h.c)(c)),z({dx:c})}},ee=e=>{let a="--";return a=Z.poolData[K[t]].balance,a=Object(h.a)(a).isNaN()?"--":Z.poolData[K[t]].balance.div(Z.poolData[K[t]].precision),Object(w.jsx)("span",{children:Z.poolData&&Object(h.u)(a)})},te=()=>{let{precision:e,balance:a,symbol:s}=Z.poolData[K[t]];return a=Object(h.a)(a).div(e),Object(h.fb)(c).eq(0)||Object(h.fb)(c).isNaN()?(B(r.a.get("error.e1")),!0):Object(h.fb)(c).gt(a)?(B(r.a.get("error.e2",{token:s})),!0):2===k&&(!T||Number(T)<.1||Number(T)>50)?(B(r.a.get("error.e5")),!0):(B(""),!1)};Object(i.useEffect)((()=>{Q&&te()}),[t,n,c,k,T]);const ae=()=>{let e=Z.poolData&&Object(h.a)(Z.poolData[K[t]].balance).div(E[K[t]].precision);$(e)},ce=e=>{!Q&&W(!0),P(e),2!==e&&D("")},se=e=>{!Q&&W(!0);const{valid:t,str:a}=Object(h.V)(e,10);if(t)if(""===a)D("");else if(Object(h.a)(a).lte(100)){var c;let e=a,t=a.split(".");(null===(c=t[1])||void 0===c?void 0:c.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),D(e)}},ne=()=>{const e=()=>{let e=t,a=n;return V&&([e,a]=[a,e]),Object(w.jsx)(w.Fragment,{children:K[e].toUpperCase()+"/"+K[a].toUpperCase()})};return Object(w.jsxs)("p",{className:"exchang-rate-text mt-20",children:[Object(w.jsxs)("span",{className:"en-US"===window.localStorage.getItem("lang")?"er-en":"",children:[r.a.get("buysell.exchange_rate",{symbol:"3pool LP"})+" ",Object(w.jsx)(e,{})]}),Object(w.jsx)("img",{style:{cursor:"pointer",margin:"0 6px"},className:"exchange-img",alt:"",src:p.a,onClick:G}),Object(w.jsxs)("span",{children:["(",r.a.get("buysell.including_fees"),"): ",-1===S?r.a.get("buysell.not_available"):S]})]})},le=()=>{const a=async()=>{if(!F)try{let a=2!==k?k:T?Object(h.a)(T).div(100):0,s=Object(h.a)(C).times(Object(h.a)(1).minus(Object(h.a)(a)))._toIntegerDown()._toHex(),l=t,i=n,o=Object(h.fb)(c).times(E[K[l]].precision)._toIntegerDown()._toHex();const r={title:"notification.tip1",title2:"notification.tip1",title3:"notification.tip1",title4:"notification.tip1",obj:{fromValue:Object(h.u)(Object(h.fb)(c)),fromToken:K[l].toUpperCase(),toValue:Object(h.u)(Object(h.fb)(j)),toToken:K[i].toUpperCase()}};let b=await J.toExchange(l,i,o,s,r,[["usddPool/updateCurrencyData"]],H);b&&(setTimeout((()=>{Z.getBalanceInfo()}),5e3),e.onSubmit&&e.onSubmit(b))}catch(a){console.log("sellSubmit: ",a)}};return Object(w.jsx)(w.Fragment,{children:F?Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("sell_btn")}):Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",info:r.a.get("sell_btn"),onClick:async()=>{if(q.isConnected){if(!Q&&W(!0),!F){if(te())return}if(!F)try{let e=(await Object(g.Sb)(window.defaultAccount,[E[K[t]].token],[H]))[H].allowance;const{approveStatus:c}=Z.poolData[K[t]];if(e.gt(0)||c)a();else{const e={action:"approve",title:"deposit.approve_token",obj:{value:M[t].toUpperCase()},continuous:!0};if(!await J.approveToken(E[K[t]].token,H,e,[["usddPool/getBalanceInfo"]]))return;Z.poolData[K[t]].approveStatus=2,a()}}catch(e){console.log("exchangeBefore: ",e)}}else B(r.a.get("buysell.error_msg_3"))}})})},ie=e=>{let{direction:l="left"}=e,i=M,r=E;return Object(w.jsx)("div",{className:"flex start mb-16 pc-input-box",children:i.map((e=>{const i=m.a[e]||u.default,b="left"===l?t:n;return Object(w.jsx)(x.a,{id:e,checked:b===r[e].index,tokenLogo:i,symbol:r[e].symbol,onChange:(i,b)=>{"left"===l?(e=>{let l=t;Number(e)!==Number(n)&&(l=n),o(l),a(e);let i=Object(h.fb)(c)._toFixed(E[K[e]].decimal,1);s(Object(h.c)(i)),z({i:e,j:l,dx:i})})(r[e].index):Y(r[e].index)}})}))})},oe=()=>Object(w.jsx)("span",{className:"exchange-alt",onClick:()=>(()=>{!Q&&W(!0);let e=t,c=n,l=j;e!==c&&(a(c),o(e),s(l),z({i:c,j:e,dx:l,notChangeRate:!0}),X({no:1,i:c,j:e,dx:l}))})()}),re=Object(_.a)(_.b);return Object(w.jsx)(l.a,{children:()=>Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"exchange-box",children:[Object(w.jsx)(ie,{direction:"left"},"left"),Object(w.jsxs)("div",{className:"input-block",children:[Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)("div",{className:"input-number",children:Object(w.jsx)(d.a,{className:"input",value:c,onChange:e=>$(e.target.value)})}),Object(w.jsx)("span",{className:"max-btn",onClick:ae,children:r.a.get("sunSwapV3.swap.input_from_max")})]}),Object(w.jsxs)("div",{className:"mt-12 input-bottom-usd",children:[Object(w.jsx)("span",{children:r.a.get("sunSwapV3.swap.input_from_balance")})," ",ee(Z.poolData)]})]}),Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)(oe,{}),!re&&Object(w.jsx)("div",{className:"flex start",children:Object(w.jsx)(v.a,{type:"exchange",slippage:k,customSlippage:T,CUSTOM_SLIPPAGE:2,onChangeSlippage:e=>{ce(Number(e))},onChangeCustomSlippage:e=>{P(2),se(e)}})})]}),Object(w.jsx)(ie,{direction:"right"},"right"),Object(w.jsxs)("div",{className:"input-block",children:[Object(w.jsx)("div",{className:"input-number",children:Object(w.jsx)(d.a,{disabled:!0,className:"input",value:j})}),Object(w.jsxs)("div",{className:"mt-12 input-bottom-usd",children:[Object(w.jsx)("span",{children:r.a.get("sunSwapV3.swap.input_from_balance")})," ",ee(Z.poolData)]})]}),Object(w.jsx)(ne,{}),re&&Object(w.jsx)("div",{className:"flex start",children:Object(w.jsx)(v.a,{type:"exchange",slippage:k,customSlippage:T,CUSTOM_SLIPPAGE:2,onChangeSlippage:e=>{ce(Number(e))},onChangeCustomSlippage:e=>{P(2),se(e)}})})]}),Object(w.jsx)(le,{}),F&&Object(w.jsx)("div",{className:"error-content mt-12",children:Object(w.jsx)("div",{className:"error-tip",children:F})})]})})}a(1079),a(1131),a(1113);var S=a(1094),N=a(1092);const{Fee:C,A:A,ADMIN_FEE:k,usddPoolKeys:P,usddPools:T}=O.a;var D=e=>{const t=Object(l.d)((()=>b.a.usddPool)),a=Object(l.d)((()=>b.a.network)),c=(e,t)=>{const a=Object(h.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(h.u)(a,2)},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(h.a)(0);for(let c in e){const{userSwapBalance:s,priceKey:n}=e[c],l=t?t[n]:"--";a=a.plus(Object(h.a)(s).times(l))}return Object(h.u)(a)}catch(a){return console.log(a),"--"}};let n="";e.className?n=e.className:(n="cur-reserve-container",e.myClass&&(n+=e.myClass)),n+=" flex wrap top";const i=P.map((e=>t.poolData[e])).filter((e=>e)),o="3Pool ".concat(r.a.get("pool.pool2_contract")),j="3USD ".concat(r.a.get("pool.token_contract2")),d=t.volData?t.volData.usddpvol24Hours:"";return Object(w.jsx)(l.a,{children:()=>Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{poolTokens:i,totalSwapBalance:t.totalSwapBalance,adminFee:k,fee:C,virtualPrice:t.virtualPrice,dailyVol:d,poolContract:O.a.usddContracts.stablePool,poolName:o,lpTokenAddress:O.a.stable3USD,lpTokenName:j,aValue:A}),a.isConnected&&Object(h.a)(t.sharePer).gt(0)&&Object(w.jsx)(N.a,{sharePer:t.sharePer,usdBalance:s(t.poolData,t.volData),avgUsdBalance:c(t.userLpBalance,t.virtualPrice),userTotalBalance:t.userTotalBalance,myPoolTokens:i})]})})},L=a(1517),I=a(1043),F=a(188),B=a(1068),V=(a(1076),a(324)),U=a(1067),E=a(1063),K=a(1059),M=a(1062),R=a(1071),H=a(322);const{usddPools:q,usddPoolKeys:J,ALL_FEE:Z,defaultSlippage:Q,usddContracts:W}=O.a,{stablePool:G}=W;var z=e=>{const{tabPaneKey:t,pageList:a}=e,c=Object(l.d)((()=>b.a.network)),o=Object(l.d)((()=>b.a.system)),d=Object(l.d)((()=>b.a.usddPool)),[p,O]=Object(i.useState)((()=>{const e={};return J.map((t=>{e[t]=""})),e})()),[x,v]=Object(i.useState)(!1),[_,y]=Object(i.useState)(!0),[S,N]=Object(i.useState)(!1),[C,A]=Object(i.useState)("--"),[k,P]=Object(i.useState)("--"),[T,W]=Object(i.useState)(!1),[z,X]=Object(i.useState)(!1),[Y,$]=Object(i.useState)(!1);let ee=null;Object(i.useEffect)((async()=>{await Promise.all([ie(p),ae()]),T&&ne(p)}),[p]);const te=async t=>{try{const a=[];e.onSubmit&&e.onSubmit(),J.map((e=>{a.push({...d.poolData[e],inputValue:t[e]?Object(h.fb)(t[e]).times(q[e].precision):Object(h.a)(0)})}));for(let e=0;e<a.length;e++){const{allowance:t=Object(h.a)(0),inputValue:c,token:s,symbol:n,approveStatus:l,id:i}=a[e];if(Object(h.a)(t).lt(c)&&!l){if(!await o.approveToken(s,G,{title:"deposit.approve_token",obj:{value:n},continuous:!0},[["usddPool/getBalanceInfo"]]))return;d.poolData[i].approveStatus=2}}const c=a.sort(((e,t)=>e.index-t.index)),s=c.length,n=c.map((e=>e.inputValue._toIntegerDown()._toHex()))||[];let l=null;if(d.lpTotalSupply.lte(0)&&await d.getUserLp(),d.lpTotalSupply.lte(0))l=Object(h.a)(1);else{const e=await Object(g.o)(n);if(!e.success)return;l=e.value}l=l.times(Object(h.a)(1).minus(Object(h.a)(Z).times(s).div(Object(h.a)(4).times(s-1)).div(1e10)));const i=l.times(1-Q)._toFixed(0,1),r={title:"actions.addLiq",obj:{detail:Object(h.A)(t,"usdd")}};await o.addLiquidityUSDD(n,i,r,[["usddPool/updateCurrencyData"]])&&je()}catch(a){console.log("deposit err: ",a)}},ae=async()=>{const e=[];for(let a in p){const{index:t,precision:c}=q[a],s=p[a].replace(/,/g,"");e[t]=Object(h.a)(s).isNaN()?0:Object(h.a)(s).times(c)._toIntegerDown()._toHex()}let t=null;if(d.lpTotalSupply.lte(0)&&await d.getUserLp(),d.lpTotalSupply.lte(0))t=Object(h.a)(1);else{const a=await Object(g.o)(e);if(!a.success)return;t=a.value.div(1e18)}P(t)},ce=async()=>{await Promise.all([d.getSwapBalance(),d.getVirtualPrice(),d.getVolData()])},se=async()=>{await Promise.all([d.getUserLp(),d.getBalanceInfo()]);const e={};J.map((t=>{const{precision:a,balance:c,decimal:s}=d.poolData[t];e[t]=Object(h.c)(Object(h.a)(c).div(a)._toFixed(s,1))})),O(e),!T&&W(!0),ee||(ee=setInterval((async()=>{ce(),d.getUserLp()}),c.defaultIntervalSec))};Object(i.useEffect)((async()=>(await Promise.all([se(),ce()]),()=>{clearInterval(ee)})),[c.defaultAccount]);const ne=e=>{const t=Object.keys(e),a=t.length;if(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),a=t.filter((t=>Object(h.fb)(e[t]).eq(0)||!e[t]));return t.length===a.length}(e))return N(r.a.get("error.e1")),!0;for(let c=0;c<a;c++){const a=t[c],s=e[a];if(!s&&(x||_))return N(r.a.get("error.e1")),!0;const{balance:n,precision:l,symbol:i}=d.poolData[a];if(Object(h.a)(n).div(l).lt(Object(h.fb)(s)))return N(r.a.get("error.e2",{token:i})),!0}return N(!1),!1},le=e=>{$(e.target.checked)},ie=async e=>{const t=await d.calcInclPrice(e);A(t)},oe=(e,t)=>{const a=t,c={};c[e]=Object(h.c)(String(a).replace(/,/g,""));const{precision:s,swapBalance:n,balance:l}=d.poolData[e],i=Object(h.fb)(a).div(n).isNaN()?Object(h.a)(0):Object(h.fb)(a).div(n);J.filter((t=>t!==e)).map((e=>{const{balance:t=Object(h.a)(0),swapBalance:a,precision:s,decimal:n}=d.poolData[e];c[e]=Object(h.c)(i.times(a)._toFixed(n,1)),t.div(s).lt(Object(h.fb)(c[e]))&&(c[e]=Object(h.c)(t.div(s)._toFixed(n,1)))})),O(c)},re=async e=>{try{const t=e.target.checked;v(t),_&&y(!t),t&&oe(J[0],p[J[0]])}catch(t){console.log(t)}},be=async e=>{try{const t=e.target.checked;y(t),x&&v(!t);const a={};J.map((e=>{const{balance:t,precision:c,decimal:s}=d.poolData[e];a[e]=Object(h.a)(t).isNaN()?0:Object(h.c)(t.div(c)._toFixed(s,1))})),O(a)}catch(t){console.log(t)}},je=()=>{$(!1),X(!1)},de=Object(H.b)();return Object(w.jsx)(l.a,{children:()=>Object(w.jsxs)(s.a,{...E.a.row,children:[Object(w.jsxs)(n.a,{...E.a.colLeft,children:[Object(w.jsx)(K.a,{list:a,activeKey:t[0]}),Object(w.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{routeName:"3pool/deposit",mountedActions:se,instantActions:ce}),Object(w.jsx)(B.a,{title:"3pool "+r.a.get("banner.title_deposit"),desc:r.a.get("banner.desc_deposit")}),Object(w.jsx)(U.a,{})]}):null,c.isConnected?Object(w.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(w.jsxs)("div",{className:"add-liq",children:[Object(w.jsxs)("fieldset",{className:"currencies",children:[Object(w.jsx)("legend",{children:r.a.get("deposit.currencies")}),Object(w.jsx)("ul",{children:J.map((e=>{let{symbol:t="",balance:a="--",precision:c,decimal:s}=d.poolData[e];return a=Object(h.a)(a).div(c),Object(w.jsxs)("li",{children:[Object(w.jsxs)("div",{className:"cur-label",children:[Object(w.jsxs)("span",{className:"icon",children:[Object(w.jsx)("img",{src:m.a[e]?m.a[e]:u.default,alt:"",className:"token-logo"})," ",t]}),Object(w.jsx)("span",{className:"token-max",children:r.a.getHTML("deposit.token_max",{balance:Object(h.u)(a)})})]}),Object(w.jsx)(R.a,{value:p[e],onChange:t=>((e,t)=>{_&&y(!1);const{decimal:a}=q[t],{valid:c,str:s}=Object(h.V)((""+e.target.value).replace(/,/g,""),a);c&&(O({...p,[t]:Object(h.c)(s)}),x&&oe(t,s))})(t,e),onMaxClick:()=>{((e,t,a)=>{if(Object(h.a)(t).isNaN())return;const c=Object(h.a)(t)._toFixed(a,1);O({...p,[e]:Object(h.c)(c)}),x&&oe(e,c)})(e,a,s)}})]},e)}))})]}),!Object(h.a)(C).isNaN()&&Object(h.ab)(C,!0),Object(w.jsxs)("div",{className:"deposit-check",children:[Object(w.jsx)(L.a,{checked:x,onChange:re,children:r.a.get("deposit.ch1")}),Object(w.jsx)("br",{}),Object(w.jsx)(L.a,{checked:_,onChange:be,children:r.a.get("deposit.ch2")})]}),S?Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("deposit.action")}):Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",info:de?r.a.get("not_available"):r.a.get("deposit.action"),onClick:()=>(async e=>{try{if(!S&&ne(e))return;if(S)return;if(Object(h.a)(C).abs().gt(10))return X(!0);await te(e)}catch(t){console.log(t)}})(p),disabled:de}),S&&Object(w.jsx)("div",{className:"error-content mt-12",children:Object(w.jsx)("div",{className:"error-tip",children:S})}),Object(h.a)(k).gt(0)&&Object(w.jsxs)("div",{className:"error-content mt-12",children:[Object(w.jsxs)("div",{className:"error-tip",children:[r.a.getHTML("deposit.swap_detail",{value:Object(h.u)(k,2),symbol:"3pool LP"})," "]}),Object(w.jsx)("div",{className:"error-tip",children:r.a.get("deposit.exchange_rate",{value:Object(h.u)(d.virtualPrice,6),symbol:"3pool LP"})})]})]})}):Object(w.jsx)(M.a,{}),Object(w.jsx)(V.a,{}),Object(w.jsx)(I.a,{title:r.a.get("deposit.high_slippage_title"),open:z,closable:!0,icon:null,onCancel:je,footer:null,width:400,className:"common-modal common-bg slippage-modal",children:Object(w.jsxs)("div",{className:"center",children:[Object(w.jsxs)("div",{className:"common-err-bg",children:[Object(w.jsx)("div",{children:r.a.get("deposit.high_tip1")}),Object(w.jsx)("div",{children:r.a.get("deposit.high_tip2",{value:Object(h.u)(Object(h.a)(C).abs(),3)})})]}),Object(w.jsx)(L.a,{checked:Y,onChange:le,children:r.a.get("deposit.confirm_slippage",{value:Object(h.u)(Object(h.a)(C).abs(),3)})}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"btns flex",children:[Object(w.jsx)(F.a,{onClick:()=>X(!1),type:"primary",children:r.a.get("cancel")}),Object(w.jsx)(F.a,{onClick:()=>te(p),disabled:!Y,children:r.a.get("deposit.anyway")})]})]})})]})]}),Object(w.jsx)(n.a,{...E.a.colRight,children:Object(w.jsx)(D,{className:c.isConnected?null:"window-for-tabs-pane"})})]})})},X=a(329),Y=a(1041);const{usddPools:$,usddPoolKeys:ee,ALL_FEE:te,usddContracts:ae,tokens:ce}=O.a,{stablePool:se,stableLp:ne}=ae,le="---",ie="CUSTOM",oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={};return ee.map((a=>{t[a]=e})),t};var re=e=>{const{tabPaneKey:t,pageList:a}=e,[c=oe("--"),o]=Object(i.useState)(),[d,p]=Object(i.useState)("100.00"),[O,_]=Object(i.useState)(.2),[y,S]=Object(i.useState)(""),[N,C]=Object(i.useState)(!0),[A,k]=Object(i.useState)(!1),[P,T]=Object(i.useState)("--"),[L=oe(!1),I]=Object(i.useState)(),[F,V]=Object(i.useState)(!1),[H,q]=Object(i.useState)(!1),J=Object(l.d)((()=>b.a.system)),Z=Object(l.d)((()=>b.a.usddPool)),Q=Object(l.d)((()=>b.a.network));let W=null;Object(i.useEffect)((async()=>{H&&G()}),[c,d,O,y,L]),Object(i.useEffect)((()=>{Oe(c,A)}),[c]);const G=()=>d!==le&&Object(h.fb)(d).gt(100)?(V(r.a.get("error.e3")),!0):(()=>{for(let e in c)if(Object(h.fb)(c[e]).gt(0)||"--"===c[e])return!1;return!0})()?(V(r.a.get("error.e4")),!0):O===ie&&(re()||d===le)&&(Object(h.a)(y).lt(.1)||Object(h.a)(y).gt(50)||Object(h.a)(y).isNaN())?(V(r.a.get("error.e5")),!0):(V(!1),!1),z=async(e,t)=>{try{const a=e.length,s=e.map((e=>e.inputValue.isNaN()?0:e.inputValue._toIntegerDown()._toHex()))||[],n=await Object(g.o)(s,!1);if(!n.success)return;let l=n.value.times(Object(h.a)(1).plus(Object(h.a)(te).times(a).div(4*(a-1))));const i=Object(h.a)(100).plus(t).div(100);if(l=l.times(i)._toIntegerDown(),N&&Object(h.a)(Z.userLpAllowance).lt(l)){if(!await J.approveToken(ne,se,{title:"deposit.approve_token",obj:{value:"3pool LP"},continuous:!0},[["usddPool/getUserLp"]]))return;C(!1)}const o=l._toHex(),r={title:"actions.remove",obj:{detail:Object(h.A)(c,"usdd")}};await J.removeLiqImBalanceUSDD(s,o,r,[["usddPool/updateCurrencyData"]])}catch(a){console.log(a)}},ae=async(e,t)=>{try{const a=await be(t,e,Object(h.fb)(d));if(!a)return;const{userLpBalance:s,lpTotalSupply:n,balances:l,userLpAllowance:i,minAmounts:o}=a,r=Object(h.fb)(d).div(100).times(s)._toIntegerDown();if(N&&Object(h.a)(i).lt(r._toIntegerDown())){if(!await J.approveToken(ne,se,{title:"deposit.approve_token",obj:{value:"3pool LP"},continuous:!0},[["usddPool/getUserLp"]]))return;C(!1)}const b={title:"actions.remove",obj:{detail:Object(h.A)(c,"usdd")}},j=r._toHex();await J.removeLiquidityUSDD(j,o,b,[["usddPool/updateCurrencyData"]])}catch(a){console.log(a)}},ce=async(e,t,a)=>{try{const s=await Object(g.wb)(t,e);if(!s.success)return;const{userLpBalance:n,userLpAllowance:l}=s,i=Object(h.fb)(d).div(100).times(n)._toIntegerDown();if(N&&Object(h.a)(l).lt(i._toIntegerDown())){if(!await J.approveToken(ne,se,{title:"deposit.approve_token",obj:{value:"3pool LP"},continuous:!0},[["usddPool/getUserLp"]]))return;C(!1)}const o=i._toHex();let r=!1;for(let e in L)!0===L[e]&&(r=$[e].index);const b=await Object(g.v)(o,r);if(!b.success)return;const j=b.value,u=e.length,p=j.times(Object(h.a)(1).minus(Object(h.a)(te).times(u).div(4*(u-1)).div(1e10))),O=Object(h.a)(100).div(Object(h.a)(100).plus(a)),m=p.times(O)._toIntegerDown()._toHex(),x={title:"actions.remove",obj:{detail:Object(h.A)(c,"usdd")}};await J.removeLiqOneCoinUSDD(o,r,m,x,[["usddPool/updateCurrencyData"]])}catch(s){console.log(s)}},re=()=>{for(let e in L)if(L[e])return e;return!1},be=async function(e,t,a){let c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{const s=await Object(g.wb)(e,t);if(!s.success)return;const{userLpBalance:n,lpTotalSupply:l,balances:i,userLpAllowance:o}=s,r=[],b={};return t.map((e=>{const{index:t,id:s,decimal:o,precision:j}=e;let d=Object(h.fb)(a).div(100).times(i[t]);c||(d=Object(h.a)(.98).times(d)),r[t]=d.times(n).div(l)._toIntegerDown()._toHex(),b[s]=Object(h.c)(d.times(n).div(l).div(j)._toFixed(o,1))})),{userLpBalance:n,lpTotalSupply:l,balances:i,userLpAllowance:o,minAmounts:r,amountsStr:b}}catch(s){console.log(s)}},je=async(e,t)=>{try{await Z.getUserLp();const{userLpBalance:a}=Z,{precision:c,decimal:s}=$[e],n=Object(h.fb)(t).div(100).times(a)._toIntegerDown(),l=$[e].index,i=n._toHex(),o=await Object(g.v)(i,l);if(!o.success)return!1;const r=o.value;return Object(h.a)(r).div(c)._toFixed(s,1)}catch(a){console.log(a)}},de=()=>{Z.getSwapBalance(),Z.getVirtualPrice(),Z.getVolData()},ue=async()=>{await Promise.all([Z.getUserLp(),Z.getBalanceInfo()]);const e={};ee.map((t=>{const{userSwapBalance:a,decimal:c}=Z.poolData[t];e[t]=Object(h.c)(Object(h.a)(a)._toFixed(c,1))})),o(e),W||(W=setInterval((async()=>{de(),await Z.getUserLp()}),Q.defaultIntervalSec))};Object(i.useEffect)((()=>(ue(),de(),()=>{clearInterval(W)})),[]);const pe=async(e,t)=>{!H&&q(!0);let a=Object(h.fb)(d);const s={},n={};if(e){k(!0);for(let e in L)e!==t&&(s[e]=!1,n[e]=0);I({...L,...s,[t]:e}),(d===le||Object(h.fb)(d).lte(0))&&(a="100.00",p(a)),Object(h.a)(a).gt(100)&&(a=100);const l=await je(t,a);l&&o({...c,...n,[t]:Object(h.c)(l)})}else p(le),k(!1),I({...L,[t]:e})},Oe=async(e,t)=>{const a=await Z.calcInclPrice(e,!1,t);T(a)},ge=async e=>{var t;!H&&q(!0);let a=e.target.value,s=a.split(".");if((null===(t=s[1])||void 0===t?void 0:t.length)>2&&(a="".concat(s[0]+"."+s[1].substr(0,2))),Object(h.a)(a).gt(100))return;const{valid:n,str:l}=Object(h.V)(a,10);if(d===le)return(()=>{const e={},t={};ee.map((a=>{e[a]=0,t[0]=!1})),o(e),I(L),p(0)})();if(""===a)return p(""),(()=>{const e={};ee.map((t=>{e[t]=0})),o(e)})();if(n){p(Object(h.c)(l));const t=Object(h.a)(l).gt(100)?Object(h.a)(100):Object(h.a)(l);if(t.isNaN())return;if(!Q.defaultAccount)return;const s=Q.defaultAccount,n=re();if(n){const e=await je(n,t);return e&&o({...c,[n]:Object(h.c)(e)})}if(l!==le){const t=[];ee.map((e=>{t.push({...$[e]})}));const c=t.sort(((e,t)=>e.index-t.index)),n=await be(s,c,l,!0);if(a===e.target.value){const{amountsStr:e={}}=n;n&&o(e)}}}},me=e=>{!H&&q(!0),_(e),e!==le&&S("")},he=e=>{const{valid:t,str:a}=Object(h.V)(e,10);if(t)if(""===a)S("");else if(Object(h.a)(a).lte(100)){var c;let e=a,t=a.split(".");(null===(c=t[1])||void 0===c?void 0:c.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),S(e)}},xe=e=>re()||d===le?Object(w.jsx)("div",{className:"flex start mt-20",children:Object(w.jsx)(v.a,{slippage:e,customSlippage:y,CUSTOM_SLIPPAGE:ie,onChangeSlippage:me,onChangeCustomSlippage:he})}):Object(w.jsx)(w.Fragment,{});return Object(w.jsx)(l.a,{children:()=>Object(w.jsxs)(s.a,{...E.a.row,children:[Object(w.jsxs)(n.a,{...E.a.colLeft,children:[Object(w.jsx)(K.a,{list:a,activeKey:t[0]}),Object(w.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{routeName:"3pool/withdraw",mountedActions:ue,instantActions:de}),Object(w.jsx)(B.a,{title:"3pool "+r.a.get("banner.title_withdraw"),desc:r.a.get("banner.desc_withdraw")}),Object(w.jsx)(U.a,{})]}):null,Q.isConnected?Object(w.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(w.jsxs)("div",{className:"add-liq withdraw-liq",children:[Object(w.jsxs)("div",{className:"flex",children:[r.a.get("withdraw.share_of_liq"),Object(w.jsx)(R.a,{showMax:!1,className:"flex-1 ml-20",placeholder:"100.00",value:d,onChange:ge})]}),Object(w.jsxs)("fieldset",{className:"currencies mt-35",children:[Object(w.jsx)("legend",{children:r.a.get("deposit.currencies")}),Object(w.jsx)("ul",{children:ee.map((e=>{const t=$[e],{symbol:a=""}=t;return Object(w.jsxs)("li",{children:[Object(w.jsx)("div",{className:"cur-label",children:Object(w.jsxs)("span",{className:"icon",children:[Object(w.jsx)("img",{src:m.a[e]?m.a[e]:u.default,alt:"",className:"token-logo"}),a]})}),Object(w.jsx)(R.a,{showMax:!1,value:c[e],onChange:t=>{(async(e,t)=>{!H&&q(!0);const{decimal:a}=$[t],{valid:s,str:n}=Object(h.V)((""+e.target.value).replace(/,/g,""),a);s&&o({...c,[t]:Object(h.c)(n)}),p(le),k(!1);const l={};for(let c in L)l[c]=!1;I(l)})(t,e)}})]},e)}))})]}),Object(h.ab)(P),Object(w.jsxs)("fieldset",{children:[Object(w.jsxs)("legend",{className:"flex aic jcs pt20",children:[Object(w.jsx)("span",{className:"mr-10",children:r.a.get("withdraw.withdraw_text")}),Object(w.jsx)(X.a,{title:r.a.get("withdraw.tip"),children:Object(w.jsx)(Y.a,{})})]}),Object(w.jsx)("div",{className:"withdraw-one mt-10",children:ee.map((e=>{const{symbol:t=""}=$[e];return Object(w.jsx)(x.a,{id:e,checked:L[e],tokenLogo:m.a[e]?m.a[e]:u.default,symbol:t,onChange:pe})}))})]}),xe(O),F?Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("withdraw.action")}):Object(w.jsx)(f.a,{styleName:"mt-40",type:"single",info:r.a.get("withdraw.action"),onClick:()=>(async t=>{try{if(!Q.defaultAccount)return;if(!H&&q(!0),!F&&G(t))return;if(F)return;const a=Q.defaultAccount,c=[];ee.map((e=>{c.push({...$[e],inputValue:Object(h.fb)(t[e]).times($[e].precision)})}));const s=c.sort(((e,t)=>e.index-t.index)),n=O===ie?y:O;return e.onSubmit&&e.onSubmit(),A?await ce(s,a,n):d!==le?await ae(s,a):await z(s,n)}catch(a){console.log(a)}})(c),disabled:F}),F&&Object(w.jsx)("div",{className:"error-content mt-12",children:Object(w.jsx)("div",{className:"error-tip",children:F})})]})}):Object(w.jsx)(M.a,{})]})]}),Object(w.jsx)(n.a,{...E.a.colRight,children:Object(w.jsx)(D,{className:Q.isConnected?null:"window-for-tabs-pane"})})]})})},be=a(1082),je=a(56),de=a(1069),ue=a(1083);const{tabChangeLog:pe,tabSubmitLog:Oe}=Object(be.a)({childPage:je.h.liquidity_3pool}),ge=e=>Object(w.jsx)("span",{children:me[e].tabTitle}),me={1:{title:r.a.get("banner.title_deposit"),content:r.a.get("banner.desc_deposit"),tabTitle:r.a.get("header.deposit")},2:{title:r.a.get("banner.title_withdraw"),content:r.a.get("banner.desc_withdraw"),tabTitle:r.a.get("header.withdraw")},3:{title:r.a.get("banner.title_1"),content:r.a.get("banner.desc_1"),tabTitle:r.a.get("header.swap")}},he=()=>{let e=window.location.hash,[,t,a]=e.split("/");return t.includes("usdd")&&(t="3pool"),e.indexOf("tab=swap")>-1?{title:t,tabKey:["3"]}:{title:t,tabKey:[{deposit:"1",withdraw:"2",swap:"3"}[a]||"1"]}};t.default=()=>{const{title:e,tabKey:t}=he(),[a,o]=Object(i.useState)(t);let d=null;const u=Object(l.d)((()=>b.a.usddPool)),p=Object(l.d)((()=>b.a.network)),O=()=>{u.getSwapBalance(),u.getVirtualPrice(),u.getVolData()};Object(i.useEffect)((()=>()=>{clearInterval(d)}),[]);const g=Object(i.useCallback)((e=>{let{value:t}=e;o(t),pe(t)}),[]),m=()=>{const e=window.localStorage.getItem("lang")||r.a.options.currentLocale,t=window.location.origin+window.location.pathname;window.location.href=t+"?lang=".concat(e,"#/sunCurve")},h=Object(i.useMemo)((()=>({shouldScroll:!0,navRightMoreShow:!0,navRightMoreClick:m})),[]),x=Object(i.useMemo)((()=>E.b.map((e=>({...e,handler:g})))),[g]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{mountedActions:async()=>{u.getUserLp(),await u.getBalanceInfo(),d||(d=setInterval((async()=>{O(),u.getUserLp(),await u.getBalanceInfo()}),p.defaultIntervalSec))},instantActions:O,subNavProps:h}),Object(w.jsxs)("div",{className:"main-page-content",children:[Object(w.jsx)(de.a,{title:"".concat(e," ").concat(me[a[0]].title),subTitle:me[a[0]].content}),Object(w.jsxs)("div",{className:"pool-tabs",children:[Object(w.jsxs)(c.a,{activeKey:a[0],centered:!0,renderTabBar:()=>null,children:[Object(w.jsx)(c.a.TabPane,{tab:ge("1"),children:Object(w.jsx)(z,{onSubmit:()=>Oe("1"),pageList:x,tabPaneKey:a})},"1"),Object(w.jsx)(c.a.TabPane,{tab:ge("2"),children:Object(w.jsx)(re,{onSubmit:()=>Oe("2"),pageList:x,tabPaneKey:a})},"2"),Object(w.jsx)(c.a.TabPane,{tab:ge("3"),children:Object(w.jsxs)(s.a,{...E.a.row,children:[Object(w.jsxs)(n.a,{...E.a.colLeft,children:[Object(w.jsx)(K.a,{list:x,activeKey:a[0]}),p.isConnected?Object(w.jsx)("div",{className:" window-for-tabs-pane",children:Object(w.jsx)(y,{onSubmit:e=>Oe("3",{event_label:e,txid:e})})}):Object(w.jsx)(M.a,{})]}),Object(w.jsx)(n.a,{...E.a.colRight,children:Object(w.jsx)(D,{})})]})},"3")]}),Object(w.jsx)(ue.a,{name:"type",cb:g,valueFlag:!0})]})]})]})}}}]);