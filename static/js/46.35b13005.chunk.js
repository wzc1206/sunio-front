(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[46],{1025:function(e,t,a){},1034:function(e,t,a){"use strict";var n=a(1),s=a(11),c=a.n(s),l=a(1413),i=a(1415),o=a(276),r=a(941),b=a(273),u=a(64),d=a(61),p=a(18),j=a(4),_=a(8),g=a(0),m=a(985),O=a(958),h=a(970),w=(a(978),a(965)),v=(a(36),a(966)),f=a(960),x=a(967),y=a(963),S=a(959),k=a(962),N=a(973),C=a(3);const{pools:L,poolKeys:T,stableLp:P,ALL_FEE:D,stablePool:B,tokens:I}=j.default,A="---",U="CUSTOM",E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={};return T.map((a=>{t[a]=e})),t};t.a=e=>{const{pageList:t,tabPaneKey:a}=e,[s=E("--"),j]=Object(n.useState)(),[F,H]=Object(n.useState)("100.00"),[M,V]=Object(n.useState)(.2),[q,K]=Object(n.useState)(""),[z,J]=Object(n.useState)(!0),[G,Y]=Object(n.useState)(!1),[Q,R]=Object(n.useState)("--"),[Z=E(!1),X]=Object(n.useState)(),[W,$]=Object(n.useState)(!1),[ee,te]=Object(n.useState)(!1),ae=Object(u.d)((()=>d.default.system)),ne=Object(u.d)((()=>d.default.pool)),se=Object(u.d)((()=>d.default.network));let ce=null;Object(n.useEffect)((async()=>{ee&&le()}),[s,F,M,q,Z]),Object(n.useEffect)((()=>{ge(s,G)}),[s]);const le=()=>F!==A&&Object(g.hb)(F).gt(100)?($(c.a.get("error.e3")),!0):(()=>{for(let e in s)if(Object(g.hb)(s[e]).gt(0)||"--"===s[e])return!1;return!0})()?($(c.a.get("error.e4")),!0):M===U&&(be()||F===A)&&(Object(g.a)(q).lt(.1)||Object(g.a)(q).gt(50)||Object(g.a)(q).isNaN())?($(c.a.get("error.e5")),!0):($(!1),!1),ie=async(e,t)=>{try{const a=e.length,n=e.map((e=>e.inputValue.isNaN()?0:e.inputValue._toIntegerDown()._toHex()))||[],c=await Object(_.e)(n,!1);if(!c.success)return;let l=c.value.times(Object(g.a)(1).plus(Object(g.a)(D).times(a).div(4*(a-1))));const i=Object(g.a)(100).plus(t).div(100);if(l=l.times(i)._toIntegerDown(),z&&Object(g.a)(ne.userLpAllowance).lt(l)){if(!await ae.approveToken(P,B,{title:"deposit.approve_token",obj:{value:I.thrpoollp.symbol},continuous:!0},[["pool/getUserLp"]]))return;J(!1)}const o=l._toHex(),r={title:"actions.remove",obj:{detail:Object(g.C)(s)},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s)}};await ae.removeLiqImBalance(n,o,r,[["pool/updateCurrencyData"]])}catch(a){console.log(a)}},oe=async(e,t)=>{try{const a=await ue(t,e,Object(g.hb)(F));if(!a)return;const{userLpBalance:n,lpTotalSupply:c,balances:l,userLpAllowance:i,minAmounts:o}=a,r=Object(g.hb)(F).div(100).times(n)._toIntegerDown();if(z&&Object(g.a)(i).lt(r._toIntegerDown())){if(!await ae.approveToken(P,B,{title:"deposit.approve_token",obj:{value:I.thrpoollp.symbol},continuous:!0},[["pool/getUserLp"]]))return;J(!1)}const b={title:"actions.remove",obj:{detail:Object(g.C)(s)},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s)}},u=r._toHex();await ae.removeLiquidity(u,o,b,[["pool/updateCurrencyData"]])}catch(a){console.log(a)}},re=async(e,t,a)=>{try{const n=await Object(_.ub)(t,e);if(!n.success)return;const{userLpBalance:c,userLpAllowance:l}=n,i=Object(g.hb)(F).div(100).times(c)._toIntegerDown();if(z&&Object(g.a)(l).lt(i._toIntegerDown())){if(!await ae.approveToken(P,B,{title:"deposit.approve_token",obj:{value:I.thrpoollp.symbol},continuous:!0},[["pool/getUserLp"]]))return;J(!1)}const o=i._toHex();let r=!1;for(let e in Z)!0===Z[e]&&(r=L[e].index);const b=await Object(_.q)(o,r);if(!b.success)return;const u=b.value,d=e.length,p=u.times(Object(g.a)(1).minus(Object(g.a)(D).times(d).div(4*(d-1)).div(1e10))),j=Object(g.a)(100).div(Object(g.a)(100).plus(a)),m=p.times(j)._toIntegerDown()._toHex(),O={title:"actions.remove",obj:{detail:Object(g.C)(s)},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s)}};await ae.removeLiqOneCoin(o,r,m,O,[["pool/updateCurrencyData"]])}catch(n){console.log(n)}},be=()=>{for(let e in Z)if(Z[e])return e;return!1},ue=async function(e,t,a){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{const s=await Object(_.ub)(e,t);if(!s.success)return;const{userLpBalance:c,lpTotalSupply:l,balances:i,userLpAllowance:o}=s,r=[],b={};return t.map((e=>{const{index:t,id:s,decimal:o,precision:u}=e;let d=Object(g.hb)(a).div(100).times(i[t]);n||(d=Object(g.a)(.98).times(d)),r[t]=d.times(c).div(l)._toIntegerDown()._toHex(),b[s]=Object(g.c)(d.times(c).div(l).div(u)._toFixed(o,1))})),{userLpBalance:c,lpTotalSupply:l,balances:i,userLpAllowance:o,minAmounts:r,amountsStr:b}}catch(s){console.log(s)}},de=async(e,t)=>{try{await ne.getUserLp();const{userLpBalance:a}=ne,{precision:n,decimal:s}=L[e],c=Object(g.hb)(t).div(100).times(a)._toIntegerDown(),l=L[e].index,i=c._toHex(),o=await Object(_.q)(i,l);if(!o.success)return!1;const r=o.value;return Object(g.a)(r).div(n)._toFixed(s,1)}catch(a){console.log(a)}},pe=()=>{ne.getSwapBalance(),ne.getVirtualPrice(),ne.getVolData()},je=async()=>{await Promise.all([ne.getUserLp(),ne.getBalanceInfo()]);const e={};T.map((t=>{const{userSwapBalance:a,decimal:n}=ne.poolData[t];e[t]=Object(g.c)(Object(g.a)(a)._toFixed(n,1))})),j(e),ce||(ce=setInterval((async()=>{pe(),await ne.getUserLp()}),se.defaultIntervalSec))};Object(n.useEffect)((()=>(je(),pe(),()=>{clearInterval(ce)})),[]);const _e=async(e,t)=>{!ee&&te(!0);let a=Object(g.hb)(F);const n={},c={};if(e){Y(!0);for(let e in Z)e!==t&&(n[e]=!1,c[e]=0);X({...Z,...n,[t]:e}),(F===A||Object(g.hb)(F).lte(0))&&(a="100.00",H(a)),Object(g.a)(a).gt(100)&&(a=100);const l=await de(t,a);l&&j({...s,...c,[t]:Object(g.c)(l)})}else H(A),Y(!1),X({...Z,[t]:e})},ge=async(e,t)=>{const a=await ne.calcInclPrice(e,!1,t);R(a)},me=async e=>{var t;!ee&&te(!0);let a=e.target.value,n=a.split(".");if((null===(t=n[1])||void 0===t?void 0:t.length)>2&&(a="".concat(n[0]+"."+n[1].substr(0,2))),Object(g.a)(a).gt(100))return;const{valid:c,str:l}=Object(g.Y)(a,10);if(F===A)return(()=>{const e={},t={};T.map((a=>{e[a]=0,t[0]=!1})),j(e),X(Z),H(0)})();if(""===a)return H(""),(()=>{const e={};T.map((t=>{e[t]=0})),j(e)})();if(c){H(Object(g.c)(l));const t=Object(g.a)(l).gt(100)?Object(g.a)(100):Object(g.a)(l);if(t.isNaN())return;if(!se.defaultAccount)return;const n=se.defaultAccount,c=be();if(c){const e=await de(c,t);return e&&j({...s,[c]:Object(g.c)(e)})}if(l!==A){const t=[];T.map((e=>{t.push({...L[e]})}));const s=t.sort(((e,t)=>e.index-t.index)),c=await ue(n,s,l,!0);if(a===e.target.value){const{amountsStr:e={}}=c;c&&j(e)}}}},Oe=e=>{!ee&&te(!0),V(e),e!==A&&K("")},he=e=>{const{valid:t,str:a}=Object(g.Y)(e,10);if(t)if(""===a)K("");else if(Object(g.a)(a).lte(100)){var n;let e=a,t=a.split(".");(null===(n=t[1])||void 0===n?void 0:n.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),K(e)}},we=e=>be()||F===A?Object(C.jsx)("div",{className:"flex start mt-20",children:Object(C.jsx)(x.a,{slippage:e,customSlippage:q,CUSTOM_SLIPPAGE:U,onChangeSlippage:Oe,onChangeCustomSlippage:he})}):Object(C.jsx)(C.Fragment,{});return Object(C.jsx)(u.a,{children:()=>Object(C.jsxs)(l.a,{...y.a.row,children:[Object(C.jsxs)(i.a,{...y.a.colLeft,children:[Object(C.jsx)(S.a,{list:t,activeKey:a[0]}),Object(C.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(O.a,{routeName:"3pool/withdraw",mountedActions:je,instantActions:pe}),Object(C.jsx)(h.a,{title:"3pool "+c.a.get("banner.title_withdraw"),desc:c.a.get("banner.desc_withdraw")}),Object(C.jsx)(w.a,{})]}):null,se.isConnected?Object(C.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(C.jsxs)("div",{className:"add-liq withdraw-liq",children:[Object(C.jsxs)("div",{className:"flex",children:[c.a.get("withdraw.share_of_liq"),Object(C.jsx)(N.a,{className:"flex-1 ml-20",showMax:!1,placeholder:"100.00",value:F,onChange:me})]}),Object(C.jsxs)("fieldset",{className:"currencies mt-35",children:[Object(C.jsx)("legend",{children:c.a.get("deposit.currencies")}),Object(C.jsx)("ul",{children:T.map((e=>{const t=L[e],{symbol:a=""}=t;return Object(C.jsxs)("li",{children:[Object(C.jsx)("div",{className:"cur-label",children:Object(C.jsxs)("span",{className:"icon",children:[Object(C.jsx)("img",{src:p.c[e]?p.c[e]:b.default,alt:"",className:"token-logo"}),a]})}),Object(C.jsx)(N.a,{showMax:!1,value:s[e],onChange:t=>{(async(e,t)=>{!ee&&te(!0);const{decimal:a}=L[t],{valid:n,str:c}=Object(g.Y)((""+e.target.value).replace(/,/g,""),a);n&&j({...s,[t]:Object(g.c)(c)}),H(A),Y(!1);const l={};for(let s in Z)l[s]=!1;X(l)})(t,e)}})]},e)}))})]}),Object(g.cb)(Q),Object(C.jsxs)("fieldset",{children:[Object(C.jsxs)("legend",{className:"flex aic jcs pt20",children:[Object(C.jsx)("span",{className:"mr-10",children:c.a.get("withdraw.withdraw_text")}),Object(C.jsx)(o.a,{title:c.a.get("withdraw.tip"),children:Object(C.jsx)(r.a,{})})]}),Object(C.jsx)("div",{className:"withdraw-one",children:T.map((e=>{const{symbol:t=""}=L[e];return Object(C.jsx)(v.a,{id:e,checked:Z[e],tokenLogo:p.c[e]?p.c[e]:b.default,symbol:t,onChange:_e})}))})]}),we(M),W?Object(C.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:c.a.get("withdraw.action")}):Object(C.jsx)(f.a,{styleName:"mt-40",type:"single",info:c.a.get("withdraw.action"),onClick:()=>(async t=>{try{if(!se.defaultAccount)return;if(!ee&&te(!0),!W&&le(t))return;if(W)return;const a=se.defaultAccount,n=[];T.map((e=>{n.push({...L[e],inputValue:Object(g.hb)(t[e]).times(L[e].precision)})}));const s=n.sort(((e,t)=>e.index-t.index)),c=M===U?q:M;return e.onSubmit&&e.onSubmit(),G?await re(s,a,c):F!==A?await oe(s,a):await ie(s,c)}catch(a){console.log(a)}})(s),disabled:W}),W&&Object(C.jsx)("div",{className:"error-content mt-12",children:Object(C.jsx)("div",{className:"error-tip",children:W})})]})}):Object(C.jsx)(k.a,{})]})]}),Object(C.jsx)(i.a,{...y.a.colRight,children:Object(C.jsx)(m.a,{className:se.isConnected?null:"window-for-tabs-pane"})})]})})}},2194:function(e,t,a){"use strict";a.r(t);a(1),a(958),a(1025),a(986);var n=a(1034),s=a(3);t.default=()=>Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(n.a,{isSinglePage:!0})})},959:function(e,t,a){"use strict";a(975);var n=a(15),s=a.n(n),c=a(3);t.a=e=>Object(c.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(c.jsx)("div",{className:s()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},963:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(11),s=a.n(n);const c={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:s.a.get("banner.title_deposit"),content:s.a.get("banner.desc_deposit"),tabTitle:s.a.get("header.deposit")},2:{title:s.a.get("banner.title_withdraw"),content:s.a.get("banner.desc_withdraw"),tabTitle:s.a.get("header.withdraw")},3:{title:s.a.get("banner.title_1"),content:s.a.get("banner.desc_1"),tabTitle:s.a.get("header.swap")}},i=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},966:function(e,t,a){"use strict";var n=a(15),s=a.n(n),c=a(997),l=a(3);t.a=e=>{const{checked:t,tokenLogo:a,symbol:n="",onChange:i,id:o=""}=e;return Object(l.jsxs)("div",{className:s()({[c.sun_check_button]:!0,[c.sun_check_active_button]:t}),onClick:()=>{i&&i(!t,o)},children:[a&&Object(l.jsx)("img",{src:a,alt:"",className:"token-logo"}),Object(l.jsx)("span",{children:n})]})}},967:function(e,t,a){"use strict";var n=a(11),s=a.n(n),c=a(15),l=a.n(c),i=a(2179),o=a(977),r=a(3);const b=[{key:.2,label:"0.2%"},{key:3,label:"3%"}],u=[{key:.005,label:"0.5%"},{key:.01,label:"1%"}];t.a=e=>{const{slippage:t,customSlippage:a,CUSTOM_SLIPPAGE:n,type:c="withdraw"}=e,d="withdraw"===c?b:u;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"mr-10",children:s.a.get("withdraw.slippage")}),Object(r.jsxs)("div",{className:l()(o.setting_btns),children:[Object(r.jsx)("div",{className:o.setting_btn_wrap,children:d.map((a=>Object(r.jsx)("span",{className:l()(o.setting_item,t===a.key?o.active:""),onClick:()=>{return t=a.key,void(e.onChangeSlippage&&e.onChangeSlippage(t));var t},children:a.label})))}),Object(r.jsx)(i.a,{className:l()(o.setting_input,o.module_important,["ml-20"]),suffix:"%",value:a,onFocus:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(n)},onBlur:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(String(d[0].key))},onChange:t=>{e.onChangeCustomSlippage&&e.onChangeCustomSlippage(t.target.value)}})]})]})}},975:function(e,t,a){},977:function(e,t,a){e.exports={"page-head":"style_page-head__1vdv7",link:"style_link__1gfSr","gradient-title":"style_gradient-title__UDoMs",animateTitle:"style_animateTitle__2zU_Z","dim-content":"style_dim-content__1LeiT",uppercase:"style_uppercase__Jhzo4","window-for-tabs-pane":"style_window-for-tabs-pane__3E-mr","dark-btn":"style_dark-btn__2vZ_n","purple-btn":"style_purple-btn__3V5jL","cur-input":"style_cur-input__2s9we","max-btn":"style_max-btn__32jEQ",setting_wrap:"style_setting_wrap__L7ld9",setting_label:"style_setting_label__3qQrG",setting_btns:"style_setting_btns__zH_61",setting_btn_wrap:"style_setting_btn_wrap__uxT1B",setting_item:"style_setting_item__1VwnL",setting_input:"style_setting_input__kvJzs",active:"style_active__10VTC",module_important:"style_module_important__PuwNO",info_text:"style_info_text__3K73H",setting_minutes:"style_setting_minutes__1mIXw",flex_right:"style_flex_right__3aanL"}},985:function(e,t,a){"use strict";a(1);var n=a(11),s=a.n(n),c=a(64),l=a(4),i=a(61),o=a(0),r=(a(986),a(1006)),b=a(1004),u=a(3);const{Fee:d,A:p,ADMIN_FEE:j,poolKeys:_,pools:g}=l.default;t.a=e=>{const t=Object(c.d)((()=>i.default.pool)),a=Object(c.d)((()=>i.default.network)),n=(e,t)=>{const a=Object(o.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(o.u)(a,2)},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(o.a)(0);for(let n in e){const{userSwapBalance:s,priceKey:c}=e[n],l=t?t[c]:"--";a=a.plus(Object(o.a)(s).times(l))}return Object(o.u)(a)}catch(a){return console.log(a),"--"}},m=_.map((e=>t.poolData[e])).filter((e=>e)),O=t.volData?t.volData["3pvol24Hours"]:"",h="Old 3Pool ".concat(s.a.get("pool.pool2_contract")),w="3SUN ".concat(s.a.get("pool.token_contract2"));return Object(u.jsx)(c.a,{children:()=>Object(u.jsxs)("div",{children:[Object(u.jsx)(r.a,{poolTokens:m,totalSwapBalance:t.totalSwapBalance,adminFee:j,fee:d,virtualPrice:t.virtualPrice,dailyVol:O,poolContract:l.default.stablePool,poolName:h,lpTokenAddress:l.default.stableLp,lpTokenName:w,aValue:p}),a.isConnected&&Object(o.a)(t.sharePer).gt(0)&&Object(u.jsx)(b.a,{sharePer:t.sharePer,usdBalance:g(t.poolData,t.volData),avgUsdBalance:n(t.userLpBalance,t.virtualPrice),userTotalBalance:t.userTotalBalance,myPoolTokens:m})]})})}},997:function(e,t,a){e.exports={sun_check_button:"style_sun_check_button__5diEB",sun_check_active_button:"style_sun_check_active_button__28IzL"}}}]);