(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[42],{1039:function(e,t,a){"use strict";var c=a(74),s=a(1),n=a(11),l=a.n(n),o=(a(911),a(964),a(4)),i=a(103),r=a(0),b=(a(946),a(3));var d=a(926),j=a(924);const{usdcInfo:u,usdtPools:p,currencyKeys:O}=o.a,{Fee:g,A:m,ADMIN_FEE:h}=u;t.a=e=>{const t=Object(c.d)((()=>i.a.network)),a=Object(c.d)((()=>i.a.usdcPool)),n=Object(c.d)((()=>i.a.thrSunPool)),[u,p]=Object(s.useState)(a);Object(s.useEffect)((()=>{p("sun3"===e.type?n:a)}));const f=(e,t)=>{const a=Object(r.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(r.u)(a,2)},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(r.a)(0);for(let c in e){const{userSwapBalance:s,priceKey:n}=e[c],l=t?t[n]:"--";a=a.plus(Object(r.a)(s).times(l))}return Object(r.u)(a)}catch(a){return console.log(a),"--"}},x=window.localStorage.getItem("lang"),w=O.map((e=>u.currencyData[e])).filter((e=>e)),y="".concat("en-US"===x?"USDC Old":"Old USDC"," ").concat(l.a.get("pool.pool_contract")),S="USDC3SUN ".concat(l.a.get("pool.token_contract2")),N=u.volData?u.volData.usdcpvol24Hours:"";return Object(b.jsx)(c.a,{children:()=>Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{curveLPSymbol:"sun3",poolTokens:w,totalSwapBalance:u.totalSwapBalance,adminFee:h,fee:g,virtualPrice:u.virtualPrice,dailyVol:N,poolContract:o.a.usdcContracts.usdcSwap,poolName:y,lpTokenAddress:o.a.tokens.thrsunlp.token,lpTokenName:S,aValue:m}),t.isConnected&&Object(r.a)(u.sharePer).gt(0)&&Object(b.jsx)(j.a,{sharePer:u.sharePer,usdBalance:v(u.poolData,u.volData),avgUsdBalance:f(u.swapBalanceInfo.userUsdcLpBalance,u.virtualPrice),userTotalBalance:u.swapBalanceInfo.userTotalBalance,myPoolTokens:w})]})})}},1260:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(11),n=a.n(s),l=a(74),o=a(1257),i=a(1259),r=a(1365),b=a(875),d=a(185),j=a(257),u=(a(941),a(911),a(18)),p=a(0),O=a(4),g=a(103),m=a(890),h=a(900),f=(a(908),a(1039)),v=a(299),x=a(899),w=a(892),y=a(8),S=a(895),N=a(891),_=a(894),k=a(903),D=a(297),P=a(3);const{usdcPools:B,usdcPoolKeys:C,usdcInfo:I,defaultSlippage:T,usdcContracts:U,pools:L,thrSunPoolKeys:F,thrSunPools:V,tokens:E}=O.a,A=E.thrsunlp.symbol,{ALL_FEE:H}=I,{USDCDepositer:K,usdcSwap:q}=U,M=e=>{const t={};return e.map((e=>{t[e]=""})),t};t.default=e=>{const{tabPaneKey:t,pageList:a}=e,s=Object(l.d)((()=>g.a.network)),I=Object(l.d)((()=>g.a.system)),U=Object(l.d)((()=>g.a.usdcPool)),E=Object(l.d)((()=>g.a.thrSunPool)),[J,R]=Object(c.useState)(!1),[z,G]=Object(c.useState)(!0),[Q,W]=Object(c.useState)(!1),[X,Y]=Object(c.useState)(!1),[Z,$]=Object(c.useState)("--"),[ee,te]=Object(c.useState)("--"),[ae,ce]=Object(c.useState)(!1),[se,ne]=Object(c.useState)(!1),[le,oe]=Object(c.useState)(!1),[ie,re]=Object(c.useState)(U),[be,de]=Object(c.useState)(C),[je,ue]=Object(c.useState)(B),[pe,Oe]=Object(c.useState)((()=>M(C))),[ge,me]=Object(c.useState)((()=>M(F))),[he,fe]=Object(c.useState)(pe);let ve=null,xe=null,we=window.localStorage.getItem("lang");Object(c.useEffect)((()=>{Q?(re(E),de(F),fe(ge),ue(V)):(re(U),de(C),fe(pe),ue(B))}),[Q]),Object(c.useEffect)((async()=>{await Promise.all([Be(he),Ne()]),ae&&De(he)}),[he]);const ye=async()=>{if(Q)return{success:!0,value:he.sun3?Object(p.fb)(he.sun3).times(je.sun3.precision):Object(p.a)(0)};try{const e=[];for(let t in L){const{index:a,precision:c}=L[t];e[a]=Object(p.fb)(he[t]).isNaN()?0:Object(p.fb)(he[t]).times(c)._toIntegerDown()._toHex()}return await Object(y.e)(e)}catch(e){return{success:!1}}},Se=async t=>{try{e.onSubmit&&e.onSubmit();const a=[];be.map((e=>{a.push({...ie.poolData[e],inputValue:t[e]?Object(p.fb)(t[e]).times(je[e].precision):Object(p.a)(0)})}));let c="usdcPool/getBalanceInfo",s=K;Q&&(c="thrSunPool/getBalanceInfo",s=q);for(let e=0;e<a.length;e++){const{allowance:t=Object(p.a)(0),inputValue:n,token:l,symbol:o,approveStatus:i,id:r}=a[e];if(Object(p.a)(t).lt(n)&&!i){if(!await I.approveToken(l,s,{title:"deposit.approve_token",obj:{value:o},continuous:!0},[[c]]))return;ie.poolData[r].approveStatus=2}}const n=a.sort(((e,t)=>e.index-t.index)),l=n.length,o=n.map((e=>e.inputValue._toIntegerDown()._toHex()))||[];let i=null;if(ie.lpTotalSupply.lte(0)&&await ie.getSwapBalance(),ie.lpTotalSupply.lte(0)){const e=await ye();if(!e.success)return;i=e.value.div(1e18).plus(Object(p.fb)(t.usdc))}else{let e={};if(e=Q?await Object(y.o)(o):await Object(y.l)(o),!e.success)return;i=e.value}i=i.times(Object(p.a)(1).minus(Object(p.a)(H).times(l).div(Object(p.a)(4).times(l-1)).div(1e10)));const r=i.times(1-T)._toIntegerDown()._toHex();let b;if(Q){const e={title:"actions.addLiq",obj:{detail:Object(p.A)(t,"sun3")}};b=await I.addLiquidityUsdcBySun3(o,r,e,[["thrSunPool/updateCurrencyData"]])}else{const e={title:"actions.addLiq",obj:{detail:Object(p.A)(t,"usdc")}};b=await I.addLiquidityUsdc(o,r,e,[["usdcPool/updateCurrencyData"]])}b&&Le()}catch(a){console.log("deposit err: ",a)}},Ne=async()=>{try{const e=[];let t=!1;for(let c in he){const{index:a,precision:s}=je[c];e[a]=Object(p.fb)(he[c]).isNaN()?0:Object(p.fb)(he[c]).times(s)._toIntegerDown()._toHex(),Object(p.a)(e[a]).gt(0)&&(t=!0)}if(!t)return void te(Object(p.a)(0));let a=null;if(ie.lpTotalSupply.lte(0)&&await ie.getSwapBalance(),ie.lpTotalSupply.lte(0)){const e=await ye();if(!e.success)return;a=e.value.div(1e18).plus(Object(p.fb)(he.usdc))}else{let t={};if(t=Q?await Object(y.o)(e):await Object(y.l)(e),!t.success)return;a=t.value.div(1e18)}te(a)}catch(e){console.log(e)}},_e=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(E.getSwapBalance(),E.getVirtualPriceUSDC(),E.getVolData()):(U.getSwapBalance(),U.getVirtualPriceUSDC(),U.getVolData())},ke=async function(){const e={};arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(await E.getSwapBalance(),E.getUserLp(),await E.getBalanceInfo(),F.map((t=>{const{precision:a,balance:c,decimal:s}=E.poolData[t];e[t]=Object(p.c)(Object(p.a)(c).div(a)._toFixed(s,1))})),me(e)):(await U.getSwapBalance(),U.getUserLp(),await U.getBalanceInfo(),C.map((t=>{const{precision:a,balance:c,decimal:s}=U.poolData[t];e[t]=Object(p.c)(Object(p.a)(c).div(a)._toFixed(s,1))})),Oe(e)),fe(e),!ae&&ce(!0),ve||(ve=setInterval((async()=>{_e(),U.getUserLp()}),s.defaultIntervalSec))};Object(c.useEffect)((()=>{!xe&&Q&&(xe=setInterval((async()=>{_e(!0),await E.getUserLp()}),s.defaultIntervalSec))}),[Q]),Object(c.useEffect)((()=>(ke(),_e(),()=>{clearInterval(ve),clearInterval(xe)})),[]);const De=e=>{const t=Object.keys(e),a=t.length;if(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),a=t.filter((t=>Object(p.fb)(e[t]).eq(0)||!e[t]));return t.length===a.length}(e))return Y(n.a.get("error.e1")),!0;for(let c=0;c<a;c++){const a=t[c],s=e[a];if(!s&&(J||z))return Y(n.a.get("error.e1")),!0;if(ie.poolData[a]){const{balance:e,precision:t,symbol:c}=ie.poolData[a];if(Object(p.a)(e).div(t).lt(Object(p.fb)(s)))return Y(n.a.get("error.e2",{token:c})),!0}}return Y(!1),!1},Pe=e=>{oe(e.target.checked)},Be=async e=>{const t=await ie.calcInclPrice(e);$(t)},Ce=async(e,t)=>{try{const a=t,c={};c[e]=Object(p.c)(a);const{precision:s,swapBalance:n,balance:l}=ie.poolData[e],{sun3LpBalance:o,sun3TotalSupply:i,balancesUsdc:r}=ie.swapBalanceInfo,b=Object(p.fb)(a).div(n).isNaN()?Object(p.a)(0):Object(p.fb)(a).div(n);if("usdc"===e){if(Q){const{swapBalance:e,decimal:t}=ie.poolData.sun3;return c.sun3=Object(p.c)(e.times(b)._toFixed(t,1)),fe(c)}const t=be.filter((t=>t!==e)),a=b.times(o).div(i);return t.map((e=>{const{balance:t=Object(p.a)(0),swapBalance:s,precision:n,decimal:l}=ie.poolData[e];c[e]=Object(p.c)(a.times(s)._toFixed(l,1)),t.div(n).lt(Object(p.fb)(c[e]))&&(c[e]=Object(p.c)(t.div(n)._toFixed(l,1)))})),fe(c)}const d=be.filter((t=>t!==e&&"usdc"!==t)),j={[e]:Object(p.c)(a)};d.map((e=>{const{balance:t=Object(p.a)(0),swapBalance:a,precision:c,decimal:s}=ie.poolData[e];j[e]=Object(p.c)(b.times(a)._toFixed(s,1)),t.div(c).lt(j[e])&&(j[e]=Object(p.c)(t.div(c)._toFixed(s,1)))}));let u=Object(p.a)(0);if(Q)t&&(u=Object(p.fb)(t).times(je.sun3.precision));else{const e=[];for(let a in j){const{index:t,precision:c}=L[a];e[t]=Object(p.fb)(j[a]).isNaN()?0:Object(p.fb)(j[a]).times(c)._toIntegerDown()._toHex()}const t=await Object(y.e)(e);if(!t.success)return;u=t.value}const g=Object(p.a)(u).div(Object(p.a)(o).times(O.a.defaultVotePrecision)),m=ie.poolData.usdc,h=g.isNaN()?0:g.times(r)._toFixed(m.decimal,1);c.usdc=m.balance.div(m.precision).lt(h)?Object(p.c)(m.balance.div(m.precision)._toFixed(m.decimal,1)):Object(p.c)(h),fe({...c,...j})}catch(a){console.log(a)}},Ie=async e=>{try{const t=e.target.checked;R(t),z&&G(!t),t&&Ce(be[0],Object(p.fb)(he[be[0]]))}catch(t){console.log(t)}},Te=async e=>{try{const t=e.target.checked;G(t),J&&R(!t);const a={};be.map((e=>{const{balance:t=Object(p.a)(0),precision:c,decimal:s}=ie.poolData[e];a[e]=Object(p.a)(t).isNaN()?0:Object(p.c)(t.div(c)._toFixed(s,1))})),fe(a)}catch(t){console.log(t)}},Ue=async e=>{try{const t=e.target.checked;W(t),R(!1),G(!0),e.target.checked?clearInterval(ve):clearInterval(xe),_e(e.target.checked),ke(e.target.checked)}catch(t){console.log(t)}},Le=()=>{oe(!1),ne(!1)},Fe=Object(D.b)();return Object(P.jsx)(l.a,{children:()=>Object(P.jsxs)(o.a,{...S.a.row,children:[Object(P.jsxs)(i.a,{...S.a.colLeft,children:[Object(P.jsx)(N.a,{list:a,activeKey:t[0]}),Object(P.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(m.a,{routeName:"usdc/deposit",mountedActions:ke,instantActions:_e}),Object(P.jsx)(h.a,{title:n.a.get("buysell.usdc_pool")+" "+n.a.get("banner.title_deposit"),desc:n.a.get("banner.desc_deposit")}),Object(P.jsx)(x.a,{})]}):null,s.isConnected?Object(P.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(P.jsxs)("div",{className:"add-liq",children:[Object(P.jsxs)("fieldset",{className:"currencies",children:[Object(P.jsx)("legend",{children:n.a.get("deposit.currencies")}),Object(P.jsx)("ul",{children:be.map((e=>{let{symbol:t="",balance:a="--",precision:c,decimal:s}=ie.poolData[e];return a=Object(p.a)(a).div(c),Object(P.jsxs)("li",{children:[Object(P.jsxs)("div",{className:"cur-label",children:[Object(P.jsxs)("span",{className:"icon",children:[Object(P.jsx)("img",{src:u.b[e]?u.b[e]:j.default,alt:"",className:"token-logo"})," ",t]}),Object(P.jsx)("span",{className:"token-max",children:n.a.getHTML("deposit.token_max",{balance:Object(p.u)(a)})})]}),Object(P.jsx)(k.a,{value:he[e],onChange:t=>((e,t)=>{z&&G(!1);const{decimal:a}=je[t],{valid:c,str:s}=Object(p.V)((""+e.target.value).replace(/,/g,""),a);c&&(fe({...he,[t]:Object(p.c)(s)}),J&&Ce(t,s))})(t,e),onMaxClick:()=>{((e,t,a)=>{if(Object(p.a)(t).isNaN())return;const c=Object(p.a)(t)._toFixed(a,1);fe({...he,[e]:Object(p.c)(c)}),J&&Ce(e,c)})(e,a,s)}})]},e)}))})]}),!Object(p.a)(Z).isNaN()&&Object(p.ab)(Z,!0),Object(P.jsxs)("div",{className:"deposit-check",children:[Object(P.jsx)(r.a,{checked:J,onChange:Ie,children:n.a.get("deposit.ch1")}),Object(P.jsx)("br",{}),Object(P.jsx)(r.a,{checked:z,onChange:Te,children:n.a.get("deposit.ch2")}),Object(P.jsx)("br",{}),Object(P.jsx)(r.a,{checked:Q,onChange:Ue,children:n.a.get("deposit.ch3")})]}),X?Object(P.jsx)(w.a,{styleName:"mt-40",type:"single",disabled:!0,info:n.a.get("deposit.action")}):Object(P.jsx)(w.a,{styleName:"mt-40",type:"single",info:Fe?n.a.get("not_available"):n.a.get("deposit.action"),onClick:()=>(async e=>{try{if(!X&&De(e))return;if(X)return;if(Object(p.a)(Z).abs().gt(10))return ne(!0);await Se(e)}catch(t){console.log(t)}})(he),disabled:Fe}),X&&Object(P.jsx)("div",{className:"error-content mt-12",children:Object(P.jsx)("div",{className:"error-tip",children:X})}),Object(p.a)(ee).gt(0)&&Object(P.jsxs)("div",{className:"error-content mt-12",children:[Object(P.jsxs)("div",{className:"error-tip",children:[n.a.getHTML("deposit.swap_detail",{value:Object(p.u)(ee,2),symbol:"en_US"===we?A:"Old USDC LP"})," "]}),Object(P.jsx)("div",{className:"error-tip",children:n.a.get("deposit.exchange_rate",{value:Object(p.u)(ie.virtualPrice,6),symbol:"en_US"===we?A:"Old USDC LP"})})]})]})}):Object(P.jsx)(_.a,{}),Object(P.jsx)(v.a,{}),Object(P.jsx)(b.a,{title:n.a.get("deposit.high_slippage_title"),open:se,closable:!0,icon:null,onCancel:Le,footer:null,width:400,className:"common-modal common-bg slippage-modal",children:Object(P.jsxs)("div",{className:"center",children:[Object(P.jsxs)("div",{className:"common-err-bg",children:[Object(P.jsx)("div",{children:n.a.get("deposit.high_tip1")}),Object(P.jsx)("div",{children:n.a.get("deposit.high_tip2",{value:Object(p.u)(Object(p.a)(Z).abs(),3)})})]}),Object(P.jsx)(r.a,{checked:le,onChange:Pe,children:n.a.get("deposit.confirm_slippage",{value:Object(p.u)(Object(p.a)(Z).abs(),3)})}),Object(P.jsx)("br",{}),Object(P.jsxs)("div",{className:"btns flex",children:[Object(P.jsx)(d.a,{onClick:()=>ne(!1),type:"primary",children:n.a.get("cancel")}),Object(P.jsx)(d.a,{onClick:()=>Se(he),disabled:!le,children:n.a.get("deposit.anyway")})]})]})})]})]}),Object(P.jsx)(i.a,{...S.a.colRight,children:Object(P.jsx)(f.a,{type:Q?"sun3":"usdc",className:s.isConnected?null:"window-for-tabs-pane"})})]})})}},891:function(e,t,a){"use strict";a(904);var c=a(17),s=a.n(c),n=a(3);t.a=e=>Object(n.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(n.jsx)("div",{className:s()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},895:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var c=a(11),s=a.n(c);const n={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:s.a.get("banner.title_deposit"),content:s.a.get("banner.desc_deposit"),tabTitle:s.a.get("header.deposit")},2:{title:s.a.get("banner.title_withdraw"),content:s.a.get("banner.desc_withdraw"),tabTitle:s.a.get("header.withdraw")},3:{title:s.a.get("banner.title_1"),content:s.a.get("banner.desc_1"),tabTitle:s.a.get("header.swap")}},o=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},904:function(e,t,a){},941:function(e,t,a){},964:function(e,t,a){"use strict";a.p}}]);