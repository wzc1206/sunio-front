(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[51],{1003:function(e,t,a){e.exports={warning_img:"style_warning_img__1coIz",box:"style_box__mzd6y",checkbox_info:"style_checkbox_info__3Beyk"}},1030:function(e,t,a){},1090:function(e,t,a){"use strict";a.p},1168:function(e,t,a){"use strict";var c=a(82),n=a(1),s=a(11),l=a.n(s),i=(a(991),a(1090),a(5)),o=a(80),r=a(0),j=(a(1023),a(3));var d=a(1011),b=a(1009);const{usdcInfo:u,usdtPools:p,currencyKeys:O}=i.default,{Fee:h,A:v,ADMIN_FEE:f}=u;t.a=e=>{const t=Object(c.d)((()=>o.default.network)),a=Object(c.d)((()=>o.default.usdcPool)),s=Object(c.d)((()=>o.default.thrSunPool)),[u,p]=Object(n.useState)(a);Object(n.useEffect)((()=>{p("sun3"===e.type?s:a)}));const g=(e,t)=>{const a=Object(r.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(r.u)(a,2)},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(r.a)(0);for(let c in e){const{userSwapBalance:n,priceKey:s}=e[c],l=t?t[s]:"--";a=a.plus(Object(r.a)(n).times(l))}return Object(r.u)(a)}catch(a){return console.log(a),"--"}},x=window.localStorage.getItem("lang"),m=O.map((e=>u.currencyData[e])).filter((e=>e)),y="".concat("en-US"===x?"USDCOLD Old":"Old USDCOLD"," ").concat(l.a.get("pool.pool_contract")),P="USDC3SUN ".concat(l.a.get("pool.token_contract2")),B=u.volData?u.volData.usdcpvol24Hours:"";return Object(j.jsx)(c.a,{children:()=>Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{curveLPSymbol:"sun3",poolTokens:m,totalSwapBalance:u.totalSwapBalance,adminFee:f,fee:h,virtualPrice:u.virtualPrice,dailyVol:B,poolContract:i.default.usdcContracts.usdcSwap,poolName:y,lpTokenAddress:i.default.tokens.thrsunlp.token,lpTokenName:P,aValue:v}),t.isConnected&&Object(r.a)(u.sharePer).gt(0)&&Object(j.jsx)(b.a,{sharePer:u.sharePer,usdBalance:w(u.poolData,u.volData),avgUsdBalance:g(u.swapBalanceInfo.userUsdcLpBalance,u.virtualPrice),userTotalBalance:u.swapBalanceInfo.userTotalBalance,myPoolTokens:m})]})})}},1460:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(11),s=a.n(n),l=a(82),i=a(1457),o=a(1459),r=a(1568),j=a(315),d=(a(1030),a(991),a(26)),b=a(0),u=a(5),p=a(80),O=a(963),h=a(977),v=(a(985),a(1168)),f=a(970),g=a(965),w=a(6),x=a(968),m=a(964),y=a(967),P=a(979),B=a(988),S=a(360),A=a(3);const{usdcPools:D,usdcPoolKeys:N,usdcInfo:H,defaultSlippage:L,usdcContracts:k,pools:z,thrSunPoolKeys:F,thrSunPools:C,tokens:I}=u.default,T=I.thrsunlp.symbol,{ALL_FEE:U}=H,{USDCDepositer:V,usdcSwap:J}=k,R=e=>{const t={};return e.map((e=>{t[e]=""})),t};t.default=e=>{const{tabPaneKey:t,pageList:a}=e,n=Object(l.d)((()=>p.default.network)),H=Object(l.d)((()=>p.default.system)),k=Object(l.d)((()=>p.default.usdcPool)),I=Object(l.d)((()=>p.default.thrSunPool)),[E,Z]=Object(c.useState)(!1),[Y,X]=Object(c.useState)(!0),[W,G]=Object(c.useState)(!1),[K,q]=Object(c.useState)(!1),[M,Q]=Object(c.useState)("--"),[_,$]=Object(c.useState)("--"),[ee,te]=Object(c.useState)(!1),[ae,ce]=Object(c.useState)(!1),[ne,se]=Object(c.useState)(!1),[le,ie]=Object(c.useState)(k),[oe,re]=Object(c.useState)(N),[je,de]=Object(c.useState)(D),[be,ue]=Object(c.useState)((()=>R(N))),[pe,Oe]=Object(c.useState)((()=>R(F))),[he,ve]=Object(c.useState)(be);let fe=null,ge=null,we=window.localStorage.getItem("lang");Object(c.useEffect)((()=>{W?(ie(I),re(F),ve(pe),de(C)):(ie(k),re(N),ve(be),de(D))}),[W]),Object(c.useEffect)((async()=>{await Promise.all([De(he),ye()]),ee&&Se(he)}),[he]);const xe=async()=>{if(W)return{success:!0,value:he.sun3?Object(b.ib)(he.sun3).times(je.sun3.precision):Object(b.a)(0)};try{const e=[];for(let t in z){const{index:a,precision:c}=z[t];e[a]=Object(b.ib)(he[t]).isNaN()?0:Object(b.ib)(he[t]).times(c)._toIntegerDown()._toHex()}return await Object(w.e)(e)}catch(e){return{success:!1}}},me=async t=>{try{e.onSubmit&&e.onSubmit();const a=[];oe.map((e=>{a.push({...le.poolData[e],inputValue:t[e]?Object(b.ib)(t[e]).times(je[e].precision):Object(b.a)(0)})}));let c="usdcPool/getBalanceInfo",n=V;W&&(c="thrSunPool/getBalanceInfo",n=J);for(let e=0;e<a.length;e++){const{allowance:t=Object(b.a)(0),inputValue:s,token:l,symbol:i,approveStatus:o,id:r}=a[e];if(Object(b.a)(t).lt(s)&&!o){if(!await H.approveToken(l,n,{title:"deposit.approve_token",obj:{value:i},continuous:!0},[[c]]))return;le.poolData[r].approveStatus=2}}const s=a.sort(((e,t)=>e.index-t.index)),l=s.length,i=s.map((e=>e.inputValue._toIntegerDown()._toHex()))||[];let o=null;if(le.lpTotalSupply.lte(0)&&await le.getSwapBalance(),le.lpTotalSupply.lte(0)){const e=await xe();if(!e.success)return;o=e.value.div(1e18).plus(Object(b.ib)(t.usdc))}else{let e={};if(e=W?await Object(w.o)(i):await Object(w.l)(i),!e.success)return;o=e.value}o=o.times(Object(b.a)(1).minus(Object(b.a)(U).times(l).div(Object(b.a)(4).times(l-1)).div(1e10)));const r=o.times(1-L)._toIntegerDown()._toHex();let j;if(W){const e={title:"actions.addLiq",obj:{detail:Object(b.D)(t,"sun3")},forTransitionModal:{title:"banner.title_deposit",symbols:Object(b.D)(t,"sun3")}};j=await H.addLiquidityUsdcBySun3(i,r,e,[["thrSunPool/updateCurrencyData"]])}else{const e={title:"actions.addLiq",obj:{detail:Object(b.D)(t,"usdc")},forTransitionModal:{title:"banner.title_deposit",symbols:Object(b.D)(t,"usdc")}};j=await H.addLiquidityUsdc(i,r,e,[["usdcPool/updateCurrencyData"]])}j&&ze()}catch(a){console.log("deposit err: ",a)}},ye=async()=>{try{const e=[];let t=!1;for(let c in he){const{index:a,precision:n}=je[c];e[a]=Object(b.ib)(he[c]).isNaN()?0:Object(b.ib)(he[c]).times(n)._toIntegerDown()._toHex(),Object(b.a)(e[a]).gt(0)&&(t=!0)}if(!t)return void $(Object(b.a)(0));let a=null;if(le.lpTotalSupply.lte(0)&&await le.getSwapBalance(),le.lpTotalSupply.lte(0)){const e=await xe();if(!e.success)return;a=e.value.div(1e18).plus(Object(b.ib)(he.usdc))}else{let t={};if(t=W?await Object(w.o)(e):await Object(w.l)(e),!t.success)return;a=t.value.div(1e18)}$(a)}catch(e){console.log(e)}},Pe=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(I.getSwapBalance(),I.getVirtualPriceUSDC(),I.getVolData()):(k.getSwapBalance(),k.getVirtualPriceUSDC(),k.getVolData())},Be=async function(){const e={};arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(await I.getSwapBalance(),I.getUserLp(),await I.getBalanceInfo(),F.map((t=>{const{precision:a,balance:c,decimal:n}=I.poolData[t];e[t]=Object(b.c)(Object(b.a)(c).div(a)._toFixed(n,1))})),Oe(e)):(await k.getSwapBalance(),k.getUserLp(),await k.getBalanceInfo(),N.map((t=>{const{precision:a,balance:c,decimal:n}=k.poolData[t];e[t]=Object(b.c)(Object(b.a)(c).div(a)._toFixed(n,1))})),ue(e)),ve(e),!ee&&te(!0),fe||(fe=setInterval((async()=>{Pe(),k.getUserLp()}),n.defaultIntervalSec))};Object(c.useEffect)((()=>{!ge&&W&&(ge=setInterval((async()=>{Pe(!0),await I.getUserLp()}),n.defaultIntervalSec))}),[W]),Object(c.useEffect)((()=>(Be(),Pe(),()=>{clearInterval(fe),clearInterval(ge)})),[]);const Se=e=>{const t=Object.keys(e),a=t.length;if(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),a=t.filter((t=>Object(b.ib)(e[t]).eq(0)||!e[t]));return t.length===a.length}(e))return q(s.a.get("error.e1")),!0;for(let c=0;c<a;c++){const a=t[c],n=e[a];if(!n&&(E||Y))return q(s.a.get("error.e1")),!0;if(le.poolData[a]){const{balance:e,precision:t,symbol:c}=le.poolData[a];if(Object(b.a)(e).div(t).lt(Object(b.ib)(n)))return q(s.a.get("error.e2",{token:c})),!0}}return q(!1),!1},Ae=e=>{se(e.target.checked)},De=async e=>{const t=await le.calcInclPrice(e);Q(t)},Ne=async(e,t)=>{try{const a=t,c={};c[e]=Object(b.c)(a);const{precision:n,swapBalance:s,balance:l}=le.poolData[e],{sun3LpBalance:i,sun3TotalSupply:o,balancesUsdc:r}=le.swapBalanceInfo,j=Object(b.ib)(a).div(s).isNaN()?Object(b.a)(0):Object(b.ib)(a).div(s);if("usdc"===e){if(W){const{swapBalance:e,decimal:t}=le.poolData.sun3;return c.sun3=Object(b.c)(e.times(j)._toFixed(t,1)),ve(c)}const t=oe.filter((t=>t!==e)),a=j.times(i).div(o);return t.map((e=>{const{balance:t=Object(b.a)(0),swapBalance:n,precision:s,decimal:l}=le.poolData[e];c[e]=Object(b.c)(a.times(n)._toFixed(l,1)),t.div(s).lt(Object(b.ib)(c[e]))&&(c[e]=Object(b.c)(t.div(s)._toFixed(l,1)))})),ve(c)}const d=oe.filter((t=>t!==e&&"usdc"!==t)),p={[e]:Object(b.c)(a)};d.map((e=>{const{balance:t=Object(b.a)(0),swapBalance:a,precision:c,decimal:n}=le.poolData[e];p[e]=Object(b.c)(j.times(a)._toFixed(n,1)),t.div(c).lt(p[e])&&(p[e]=Object(b.c)(t.div(c)._toFixed(n,1)))}));let O=Object(b.a)(0);if(W)t&&(O=Object(b.ib)(t).times(je.sun3.precision));else{const e=[];for(let a in p){const{index:t,precision:c}=z[a];e[t]=Object(b.ib)(p[a]).isNaN()?0:Object(b.ib)(p[a]).times(c)._toIntegerDown()._toHex()}const t=await Object(w.e)(e);if(!t.success)return;O=t.value}const h=Object(b.a)(O).div(Object(b.a)(i).times(u.default.defaultVotePrecision)),v=le.poolData.usdc,f=h.isNaN()?0:h.times(r)._toFixed(v.decimal,1);c.usdc=v.balance.div(v.precision).lt(f)?Object(b.c)(v.balance.div(v.precision)._toFixed(v.decimal,1)):Object(b.c)(f),ve({...c,...p})}catch(a){console.log(a)}},He=async e=>{try{const t=e.target.checked;Z(t),Y&&X(!t),t&&Ne(oe[0],Object(b.ib)(he[oe[0]]))}catch(t){console.log(t)}},Le=async e=>{try{const t=e.target.checked;X(t),E&&Z(!t);const a={};oe.map((e=>{const{balance:t=Object(b.a)(0),precision:c,decimal:n}=le.poolData[e];a[e]=Object(b.a)(t).isNaN()?0:Object(b.c)(t.div(c)._toFixed(n,1))})),ve(a)}catch(t){console.log(t)}},ke=async e=>{try{const t=e.target.checked;G(t),Z(!1),X(!0),e.target.checked?clearInterval(fe):clearInterval(ge),Pe(e.target.checked),Be(e.target.checked)}catch(t){console.log(t)}},ze=()=>{se(!1),ce(!1)},Fe=Object(S.b)();return Object(A.jsx)(l.a,{children:()=>Object(A.jsxs)(i.a,{...x.a.row,children:[Object(A.jsxs)(o.a,{...x.a.colLeft,children:[Object(A.jsx)(m.a,{list:a,activeKey:t[0]}),Object(A.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(O.a,{routeName:"usdc/deposit",mountedActions:Be,instantActions:Pe}),Object(A.jsx)(h.a,{title:s.a.get("buysell.usdc_pool")+" "+s.a.get("banner.title_deposit"),desc:s.a.get("banner.desc_deposit")}),Object(A.jsx)(f.a,{})]}):null,n.isConnected?Object(A.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(A.jsxs)("div",{className:"add-liq",children:[Object(A.jsx)("fieldset",{className:"currencies",children:Object(A.jsx)("ul",{children:oe.map((e=>{let{symbol:t="",balance:a="--",precision:c,decimal:n}=le.poolData[e];return a=Object(b.a)(a).div(c),Object(A.jsxs)("li",{children:[Object(A.jsxs)("div",{className:"cur-label",children:[Object(A.jsxs)("span",{className:"icon",children:[Object(A.jsx)("img",{src:d.c[e]?d.c[e]:j.default,alt:"",className:"token-logo"})," ",t]}),Object(A.jsx)("span",{className:"token-max",children:s.a.getHTML("deposit.token_max",{balance:Object(b.u)(a)})})]}),Object(A.jsx)(P.a,{value:he[e],onChange:t=>((e,t)=>{Y&&X(!1);const{decimal:a}=je[t],{valid:c,str:n}=Object(b.Z)((""+e.target.value).replace(/,/g,""),a);c&&(ve({...he,[t]:Object(b.c)(n)}),E&&Ne(t,n))})(t,e),onMaxClick:()=>{((e,t,a)=>{if(Object(b.a)(t).isNaN())return;const c=Object(b.a)(t)._toFixed(a,1);ve({...he,[e]:Object(b.c)(c)}),E&&Ne(e,c)})(e,a,n)}})]},e)}))})}),!Object(b.a)(M).isNaN()&&Object(b.db)(M,!0),Object(A.jsxs)("div",{className:"deposit-check",children:[Object(A.jsx)(r.a,{checked:E,onChange:He,children:s.a.get("deposit.ch1")}),Object(A.jsx)("br",{}),Object(A.jsx)(r.a,{checked:Y,onChange:Le,children:s.a.get("deposit.ch2")}),Object(A.jsx)("br",{}),Object(A.jsx)(r.a,{checked:W,onChange:ke,children:s.a.get("deposit.ch3")})]}),K?Object(A.jsx)(g.a,{styleName:"mt-40",type:"single",disabled:!0,info:s.a.get("deposit.action")}):Object(A.jsx)(g.a,{styleName:"mt-40",type:"single",info:Fe?s.a.get("not_available"):s.a.get("deposit.action"),onClick:()=>(async e=>{try{if(!K&&Se(e))return;if(K)return;if(Object(b.a)(M).abs().gt(10))return ce(!0);await me(e)}catch(t){console.log(t)}})(he),disabled:Fe}),K&&Object(A.jsx)("div",{className:"error-content mt-12",children:Object(A.jsx)("div",{className:"error-tip",children:K})}),Object(b.a)(_).gt(0)&&Object(A.jsxs)("div",{className:"error-content mt-12",children:[Object(A.jsxs)("div",{className:"error-tip",children:[s.a.getHTML("deposit.swap_detail",{value:Object(b.u)(_,2),symbol:"en_US"===we?T:"Old USDCOLD LP"})," "]}),Object(A.jsx)("div",{className:"error-tip",children:s.a.get("deposit.exchange_rate",{value:Object(b.u)(le.virtualPrice,6),symbol:"en_US"===we?T:"Old USDCOLD LP"})})]})]})}):Object(A.jsx)(y.a,{}),Object(A.jsx)(B.a,{confirmSlippageCheck:ne,onChangeConfirmSlippageCheck:Ae,open:ae,closable:!0,onCancel:ze,onOk:()=>me(be),value:Object(b.u)(Object(b.a)(M).abs(),3),okText:s.a.get("deposit.anyway")})]})]}),Object(A.jsx)(o.a,{...x.a.colRight,children:Object(A.jsx)(v.a,{type:W?"sun3":"usdc",className:n.isConnected?null:"window-for-tabs-pane"})})]})})}},964:function(e,t,a){"use strict";a(981);var c=a(17),n=a.n(c),s=a(3);t.a=e=>Object(s.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(s.jsx)("div",{className:n()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},968:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var c=a(11),n=a.n(c);const s={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:n.a.get("banner.title_deposit"),content:n.a.get("banner.desc_deposit"),tabTitle:n.a.get("header.deposit")},2:{title:n.a.get("banner.title_withdraw"),content:n.a.get("banner.desc_withdraw"),tabTitle:n.a.get("header.withdraw")},3:{title:n.a.get("banner.title_1"),content:n.a.get("banner.desc_1"),tabTitle:n.a.get("header.swap")}},i=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},981:function(e,t,a){},988:function(e,t,a){"use strict";var c=a(1),n=a(11),s=a.n(n),l=a(1568),i=a(155),o=a(1003),r=a.n(o),j=a(3);const d=e=>{const{onCancel:t,open:a,value:c,confirmSlippageCheck:n,onChangeConfirmSlippageCheck:o,onOk:d,okText:b}=e;return Object(j.jsxs)(i.a,{title:s.a.get("deposit.high_slippage_title"),open:a,closable:!0,icon:null,onCancel:t,width:440,onOk:t,okText:s.a.get("cancel"),cancelText:b,cancelButtonProps:{disabled:!n,onClick:d},children:[Object(j.jsx)("div",{className:r.a.warning_img,children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(j.jsxs)("div",{className:r.a.box,children:[Object(j.jsx)("div",{children:s.a.get("deposit.high_tip1")}),Object(j.jsx)("div",{children:s.a.get("deposit.high_tip2",{value:c})})]}),Object(j.jsx)(l.a,{checked:n,onChange:o,children:Object(j.jsx)("span",{className:r.a.checkbox_info,children:s.a.get("deposit.confirm_slippage",{value:c})})})]})};d.defaultProps={};t.a=Object(c.memo)(d)}}]);