(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[40],{1779:function(e,t,a){"use strict";a.r(t);a(3),a(899),a(948),a(920);var n=a(952),c=a(10);t.default=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(n.a,{isSinglePage:!0})})}},900:function(e,t,a){"use strict";a(913);var n=a(26),c=a.n(n),r=a(10);t.a=function(e){return Object(r.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((function(t){return Object(r.jsx)("div",{className:c()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:function(){return t.handler(t)},children:t.label},t.value)}))})}},903:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a(20),c=a.n(n),r={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},i={1:{title:c.a.get("banner.title_deposit"),content:c.a.get("banner.desc_deposit"),tabTitle:c.a.get("header.deposit")},2:{title:c.a.get("banner.title_withdraw"),content:c.a.get("banner.desc_withdraw"),tabTitle:c.a.get("header.withdraw")},3:{title:c.a.get("banner.title_1"),content:c.a.get("banner.desc_1"),tabTitle:c.a.get("header.swap")}},s=[{label:i[1].tabTitle,value:"1"},{label:i[2].tabTitle,value:"2"},{label:i[3].tabTitle,value:"3"}]},913:function(e,t,a){},919:function(e,t,a){"use strict";a(3);var n=a(20),c=a.n(n),r=a(84),i=a(6),s=a(115),o=a(1),l=(a(920),a(934)),u=a(931),b=a(10),j=i.a.Fee,p=i.a.A,d=i.a.ADMIN_FEE,O=i.a.poolKeys;i.a.pools;t.a=function(e){var t=Object(r.d)((function(){return s.a.pool})),a=Object(r.d)((function(){return s.a.network})),n=function(e,t){var a=Object(o.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(o.u)(a,2)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var a=Object(o.a)(0);for(var n in e){var c=e[n],r=c.userSwapBalance,i=c.priceKey,s=t?t[i]:"--";a=a.plus(Object(o.a)(r).times(s))}return Object(o.u)(a)}catch(l){return console.log(l),"--"}},v=O.map((function(e){return t.poolData[e]})).filter((function(e){return e})),x=t.volData?t.volData["3pvol24Hours"]:"",h="Old 3Pool ".concat(c.a.get("pool.pool2_contract")),m="3SUN ".concat(c.a.get("pool.token_contract2"));return Object(b.jsx)(r.a,{children:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(l.a,{poolTokens:v,totalSwapBalance:t.totalSwapBalance,adminFee:d,fee:j,virtualPrice:t.virtualPrice,dailyVol:x,poolContract:i.a.stablePool,poolName:h,lpTokenAddress:i.a.stableLp,lpTokenName:m,aValue:p}),a.isConnected&&Object(o.a)(t.sharePer).gt(0)&&Object(b.jsx)(u.a,{sharePer:t.sharePer,usdBalance:f(t.poolData,t.volData),avgUsdBalance:n(t.userLpBalance,t.virtualPrice),userTotalBalance:t.userTotalBalance,myPoolTokens:v})]})}})}},948:function(e,t,a){},952:function(e,t,a){"use strict";var n=a(5),c=a(4),r=a(0),i=a(2),s=a(14),o=a(3),l=a(20),u=a.n(l),b=a(84),j=a(1775),p=a(1777),d=a(1348),O=a(884),f=a(195),v=a(270),x=a(27),h=a(1),m=a(6),g=a(115),k=a(899),w=a(909),y=(a(917),a(919)),N=a(319),_=a(908),S=a(901),P=a(15),T=a(900),D=a(903),L=a(904),C=a(912),B=a(317),F=a(10),I=m.a.pools,A=m.a.poolKeys,V=m.a.ALL_FEE,E=m.a.defaultSlippage,K=m.a.stablePool;t.a=function(e){var t=e.pageList,a=e.tabPaneKey,l=Object(b.d)((function(){return g.a.network})),m=Object(b.d)((function(){return g.a.system})),U=Object(b.d)((function(){return g.a.pool})),H=Object(o.useState)(function(){var e={};return A.map((function(t){e[t]=""})),e}()),q=Object(s.a)(H,2),M=q[0],J=q[1],R=Object(o.useState)(!1),z=Object(s.a)(R,2),G=z[0],Q=z[1],W=Object(o.useState)(!0),X=Object(s.a)(W,2),Y=X[0],Z=X[1],$=Object(o.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Object(o.useState)("--"),ce=Object(s.a)(ne,2),re=ce[0],ie=ce[1],se=Object(o.useState)("--"),oe=Object(s.a)(se,2),le=oe[0],ue=oe[1],be=Object(o.useState)(!1),je=Object(s.a)(be,2),pe=je[0],de=je[1],Oe=Object(o.useState)(!1),fe=Object(s.a)(Oe,2),ve=fe[0],xe=fe[1],he=Object(o.useState)(!1),me=Object(s.a)(he,2),ge=me[0],ke=me[1],we=null;Object(o.useEffect)(Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Le(M),_e()]);case 2:pe&&Te(M);case 3:case"end":return e.stop()}}),e)}))),[M]);var ye=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,te){e.next=5;break}if(!Te(t)){e.next=5;break}return e.abrupt("return");case 5:if(!te){e.next=7;break}return e.abrupt("return");case 7:if(!Object(h.a)(re).abs().gt(10)){e.next=9;break}return e.abrupt("return",xe(!0));case 9:return e.next=11,Ne(t);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var t=Object(i.a)(Object(r.a)().mark((function t(a){var n,i,s,o,l,u,b,j,p,d,O,f,v,x,g,k,w;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n=[],e.onSubmit&&e.onSubmit(),A.map((function(e){n.push(Object(c.a)(Object(c.a)({},U.poolData[e]),{},{inputValue:a[e]?Object(h.fb)(a[e]).times(I[e].precision):Object(h.a)(0)}))})),i=0;case 5:if(!(i<n.length)){t.next=19;break}if(s=n[i],o=s.allowance,l=void 0===o?Object(h.a)(0):o,u=s.inputValue,b=s.token,j=s.symbol,p=s.approveStatus,d=s.id,!Object(h.a)(l).lt(u)||p){t.next=16;break}return t.next=10,m.approveToken(b,K,{title:"deposit.approve_token",obj:{value:j},continuous:!0},[["pool/getBalanceInfo"]]);case 10:if(!t.sent){t.next=15;break}U.poolData[d].approveStatus=2,t.next=16;break;case 15:return t.abrupt("return");case 16:i++,t.next=5;break;case 19:if(O=n.sort((function(e,t){return e.index-t.index})),f=O.length,v=O.map((function(e){return e.inputValue._toIntegerDown()._toHex()}))||[],x=null,!U.lpTotalSupply.lte(0)){t.next=26;break}return t.next=26,U.getUserLp();case 26:if(!U.lpTotalSupply.lte(0)){t.next=30;break}x=Object(h.a)(1),t.next=36;break;case 30:return t.next=32,Object(P.d)(v);case 32:if((g=t.sent).success){t.next=35;break}return t.abrupt("return");case 35:x=g.value;case 36:return x=x.times(Object(h.a)(1).minus(Object(h.a)(V).times(f).div(Object(h.a)(4).times(f-1)).div(1e10))),k=x.times(1-E)._toFixed(0,1),w={title:"actions.addLiq",obj:{detail:Object(h.A)(a)}},t.next=41,m.addLiquidity(v,k,w,[["pool/updateCurrencyData"]]);case 41:t.sent&&Ie(),t.next=48;break;case 45:t.prev=45,t.t0=t.catch(0),console.log("deposit err: ",t.t0);case 48:case"end":return t.stop()}}),t,null,[[0,45]])})));return function(e){return t.apply(this,arguments)}}(),_e=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,a,n,c,i,s,o,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in t=[],M)n=I[a],c=n.index,i=n.precision,s=M[a].replace(/,/g,""),t[c]=Object(h.a)(s).isNaN()?0:Object(h.a)(s).times(i)._toIntegerDown()._toHex();if(o=null,!U.lpTotalSupply.lte(0)){e.next=6;break}return e.next=6,U.getUserLp();case 6:if(!U.lpTotalSupply.lte(0)){e.next=10;break}o=Object(h.a)(1),e.next=16;break;case 10:return e.next=12,Object(P.d)(t);case 12:if((l=e.sent).success){e.next=15;break}return e.abrupt("return");case 15:o=l.value.div(1e18);case 16:ue(o);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([U.getSwapBalance(),U.getVirtualPrice(),U.getVolData()]);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([U.getUserLp(),U.getBalanceInfo()]);case 2:t={},A.map((function(e){var a=U.poolData[e],n=a.precision,c=a.balance,r=a.decimal;t[e]=Object(h.c)(Object(h.a)(c).div(n)._toFixed(r,1))})),J(t),!pe&&de(!0),we||(we=setInterval(Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Se(),U.getUserLp();case 2:case"end":return e.stop()}}),e)}))),l.defaultIntervalSec));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)(Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Pe(),Se()]);case 2:return e.abrupt("return",(function(){clearInterval(we)}));case 3:case"end":return e.stop()}}),e)}))),[l.defaultAccount]);var Te=function(e){var t=Object.keys(e),a=t.length;if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.keys(e),a=t.filter((function(t){return Object(h.fb)(e[t]).eq(0)||!e[t]}));return t.length===a.length}(e))return ae(u.a.get("error.e1")),!0;for(var n=0;n<a;n++){var c=t[n],r=e[c];if(!r&&(G||Y))return ae(u.a.get("error.e1")),!0;var i=U.poolData[c],s=i.balance,o=i.precision,l=i.symbol;if(Object(h.a)(s).div(o).lt(Object(h.fb)(r)))return ae(u.a.get("error.e2",{token:l})),!0}return ae(!1),!1},De=function(e){ke(e.target.checked)},Le=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.calcInclPrice(t);case 2:a=e.sent,ie(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e,t){var a=t,n={};n[e]=Object(h.c)(String(a).replace(/,/g,""));var c=U.poolData[e],r=(c.precision,c.swapBalance),i=(c.balance,Object(h.fb)(a).div(r).isNaN()?Object(h.a)(0):Object(h.fb)(a).div(r));A.filter((function(t){return t!==e})).map((function(e){var t=U.poolData[e],a=t.balance,c=void 0===a?Object(h.a)(0):a,r=t.swapBalance,s=t.precision,o=t.decimal;n[e]=Object(h.c)(i.times(r)._toFixed(o,1)),c.div(s).lt(Object(h.fb)(n[e]))&&(n[e]=Object(h.c)(c.div(s)._toFixed(o,1)))})),J(n)},Be=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=t.target.checked,Q(a),Y&&Z(!a),a&&Ce(A[0],M[A[0]])}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=t.target.checked,Z(a),G&&Q(!a),n={},A.map((function(e){var t=U.poolData[e],a=t.balance,c=t.precision,r=t.decimal;n[e]=Object(h.a)(a).isNaN()?0:Object(h.c)(a.div(c)._toFixed(r,1))})),J(n)}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){ke(!1),xe(!1)},Ae=Object(B.b)();return Object(F.jsx)(b.a,{children:function(){return Object(F.jsxs)(j.a,Object(c.a)(Object(c.a)({},D.a.row),{},{children:[Object(F.jsx)(p.a,Object(c.a)(Object(c.a)({},D.a.colLeft),{},{children:Object(F.jsxs)("div",{className:"pool-deposit",children:[Object(F.jsx)(T.a,{list:t,activeKey:a[0]}),e.isSinglePage?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(k.a,{routeName:"3pool/deposit",mountedActions:Pe,instantActions:Se}),Object(F.jsx)(w.a,{title:"3pool "+u.a.get("banner.title_deposit"),desc:u.a.get("banner.desc_deposit")}),Object(F.jsx)(_.a,{})]}):null,l.isConnected?Object(F.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(F.jsxs)("div",{className:"add-liq",children:[Object(F.jsxs)("fieldset",{className:"currencies",children:[Object(F.jsx)("legend",{children:u.a.get("deposit.currencies")}),Object(F.jsx)("ul",{children:A.map((function(e){var t=U.poolData[e],a=t.symbol,r=void 0===a?"":a,i=t.balance,s=void 0===i?"--":i,o=t.precision,l=t.decimal;return s=Object(h.a)(s).div(o),Object(F.jsxs)("li",{children:[Object(F.jsxs)("div",{className:"cur-label",children:[Object(F.jsxs)("span",{className:"icon",children:[Object(F.jsx)("img",{src:x.a[e]?x.a[e]:v.default,alt:"",className:"token-logo"})," ",r]}),Object(F.jsx)("span",{className:"token-max",children:u.a.getHTML("deposit.token_max",{balance:Object(h.u)(s)})})]}),Object(F.jsx)(C.a,{onMaxClick:function(){!function(e,t,a){if(!Object(h.a)(t).isNaN()){var r=Object(h.a)(t)._toFixed(a,1);J(Object(c.a)(Object(c.a)({},M),{},Object(n.a)({},e,Object(h.c)(r)))),G&&Ce(e,r)}}(e,s,l)},value:M[e],onChange:function(t){return function(e,t){Y&&Z(!1);var a=I[t].decimal,r=Object(h.V)((""+e.target.value).replace(/,/g,""),a),i=r.valid,s=r.str;i&&(J(Object(c.a)(Object(c.a)({},M),{},Object(n.a)({},t,Object(h.c)(s)))),G&&Ce(t,s))}(t,e)}})]},e)}))})]}),!Object(h.a)(re).isNaN()&&Object(h.ab)(re,!0),Object(F.jsxs)("div",{className:"deposit-check",children:[Object(F.jsx)(d.a,{checked:G,onChange:Be,children:u.a.get("deposit.ch1")}),Object(F.jsx)("br",{}),Object(F.jsx)(d.a,{checked:Y,onChange:Fe,children:u.a.get("deposit.ch2")})]}),te?Object(F.jsx)(S.a,{styleName:"mt-40",type:"single",disabled:!0,info:u.a.get("deposit.action")}):Object(F.jsx)(S.a,{styleName:"mt-40",type:"single",info:Ae?u.a.get("not_available"):u.a.get("deposit.action"),onClick:function(){return ye(M)},disabled:Ae}),te&&Object(F.jsx)("div",{className:"error-content mt-12",children:Object(F.jsx)("div",{className:"error-tip",children:te})}),Object(h.a)(le).gt(0)&&Object(F.jsxs)("div",{className:"error-content mt-12",children:[Object(F.jsxs)("div",{className:"error-tip",children:[u.a.getHTML("deposit.swap_detail",{value:Object(h.u)(le,2),symbol:"Old 3pool LP"})," "]}),Object(F.jsx)("div",{className:"error-tip",children:u.a.get("deposit.exchange_rate",{value:Object(h.u)(U.virtualPrice,6),symbol:"Old 3pool LP"})})]})]})}):Object(F.jsx)(L.a,{}),Object(F.jsx)(N.a,{}),Object(F.jsx)(O.a,{title:u.a.get("deposit.high_slippage_title"),open:ve,closable:!0,icon:null,onCancel:Ie,footer:null,width:400,className:"common-modal common-bg slippage-modal",children:Object(F.jsxs)("div",{className:"center",children:[Object(F.jsxs)("div",{className:"common-err-bg",children:[Object(F.jsx)("div",{children:u.a.get("deposit.high_tip1")}),Object(F.jsx)("div",{children:u.a.get("deposit.high_tip2",{value:Object(h.u)(Object(h.a)(re).abs(),3)})})]}),Object(F.jsx)(d.a,{checked:ge,onChange:De,children:u.a.get("deposit.confirm_slippage",{value:Object(h.u)(Object(h.a)(re).abs(),3)})}),Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:"btns flex",children:[Object(F.jsx)(f.a,{onClick:function(){return xe(!1)},type:"primary",children:u.a.get("cancel")}),Object(F.jsx)(f.a,{onClick:function(){return Ne(M)},disabled:!ge,children:u.a.get("deposit.anyway")})]})]})})]})})),Object(F.jsx)(p.a,Object(c.a)(Object(c.a)({},D.a.colRight),{},{children:Object(F.jsx)(y.a,{className:l.isConnected?null:"window-for-tabs-pane"})}))]}))}})}}}]);