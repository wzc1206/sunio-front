(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[56],{1501:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(5),r=n(0),s=n(3),u=n(21),o=n(2),i=n(16),l=n.n(i),b=n(716),p=n(1320),d=n(189),j=n(112),O=n(620),f=n(168),v=n(57),x=n(127),h=n(26),m=n(6),k=n(15),g=n(1),w=n(1323),y=n(649),L=n(663),S=(n(735),n(654)),U=n(765),_=n.n(U),B=n(9),N=m.a.usdcPools,I=m.a.thrSunPools,D=m.a.usdcPoolKeys,C=m.a.thrSunPoolKeys,P=m.a.usdcContracts,A=m.a.usdcInfo,T=m.a.tokens,F=A.ALL_FEE,Y=T.thrsunlp.token,q="3SUN LP",K=T.thrsunlp.symbol,H=P.USDCDepositer,E=P.usdcSwap,V="---",z="CUSTOM",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={};return D.map((function(n){t[n]=e})),t};t.default=function(e){var t=Object(o.useState)(),n=Object(u.a)(t,2),i=n[0],m=void 0===i?J("--"):i,U=n[1],P=Object(o.useState)("100.00"),A=Object(u.a)(P,2),T=A[0],G=A[1],M=Object(o.useState)(.2),Q=Object(u.a)(M,2),R=Q[0],W=Q[1],X=Object(o.useState)(""),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useState)(!0),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],re=Object(o.useState)(!1),se=Object(u.a)(re,2),ue=se[0],oe=se[1],ie=Object(o.useState)("--"),le=Object(u.a)(ie,2),be=le[0],pe=le[1],de=Object(o.useState)(!1),je=Object(u.a)(de,2),Oe=je[0],fe=je[1],ve=Object(o.useState)(),xe=Object(u.a)(ve,2),he=xe[0],me=void 0===he?J(!1):he,ke=xe[1],ge=Object(o.useState)(!1),we=Object(u.a)(ge,2),ye=we[0],Le=we[1],Se=Object(o.useState)(!1),Ue=Object(u.a)(Se,2),_e=Ue[0],Be=Ue[1],Ne=Object(o.useState)(D),Ie=Object(u.a)(Ne,2),De=Ie[0],Ce=Ie[1],Pe=Object(o.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={};return C.map((function(n){t[n]=e})),t}("--")),Ae=Object(u.a)(Pe,2),Te=Ae[0],Fe=Ae[1],Ye=Object(v.d)((function(){return x.a.system})),qe=Object(v.d)((function(){return x.a.usdcPool})),Ke=Object(v.d)((function(){return x.a.network})),He=Object(v.d)((function(){return x.a.thrSunPool})),Ee=null,Ve=null;Object(o.useEffect)(Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e&&ze();case 1:case"end":return e.stop()}}),e)}))),[m,T,R,$,me]),Object(o.useEffect)((function(){lt(m,ue)}),[m]),Object(o.useEffect)((function(){bt(Te,ue)}),[Te]);var ze=function(){return T!==V&&Object(g.Y)(T).gt(100)?(Le(l.a.get("error.e3")),!0):function(){for(var e in m)if(Object(g.Y)(m[e]).gt(0)||"--"===m[e])return!1;return!0}()?(Le(l.a.get("error.e4")),!0):R===z&&(Qe()||T===V)&&(Object(g.a)($).lt(.1)||Object(g.a)($).gt(50)||Object(g.a)($).isNaN())?(Le(l.a.get("error.e5")),!0):(Le(!1),!1)},Je=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a,c,s,u,o,i,l,b,p,d,j,O,f,v;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.length,c=t.map((function(e){return e.inputValue.isNaN()?0:e.inputValue._toIntegerDown()._toHex()}))||[],!Oe){e.next=29;break}return e.next=6,Object(k.l)(c,!1);case 6:if((s=e.sent).success){e.next=9;break}return e.abrupt("return");case 9:if(u=s.value,o=u.times(Object(g.a)(1).plus(Object(g.a)(F).times(a).div(4*(a-1)).div(1e10))),i=Object(g.a)(100).plus(n).div(100),o=o.times(i)._toIntegerDown(),Object(g.a)(o).gt(qe.swapBalanceInfo.userUsdcLpBalance)&&(o=qe.swapBalanceInfo.userUsdcLpBalance),!ae||!Object(g.a)(qe.userLpAllowance).lt(o)){e.next=23;break}return e.next=17,Ye.approveToken(Y,E,{title:"deposit.approve_token",obj:{value:q},continuous:!0},[["thrSunPool/getUserLp"]]);case 17:if(!e.sent){e.next=22;break}ce(!1),e.next=23;break;case 22:return e.abrupt("return");case 23:return l=o._toHex(),b={title:"actions.remove",obj:{detail:Object(g.z)(Te,"sun3")}},e.next=27,Ye.removeLiqImBalanceSUN3(c,l,b,[["thrSunPool/updateCurrencyData"]]);case 27:return e.sent,e.abrupt("return");case 29:return e.next=31,Object(k.h)(c,!1);case 31:if((p=e.sent).success){e.next=34;break}return e.abrupt("return");case 34:if(d=p.value,j=d.times(Object(g.a)(1).plus(Object(g.a)(F).times(a).div(4*(a-1)).div(1e10))),O=Object(g.a)(100).plus(n).div(100),j=j.times(O)._toIntegerDown(),Object(g.a)(j).gt(qe.swapBalanceInfo.userUsdcLpBalance)&&(j=qe.swapBalanceInfo.userUsdcLpBalance),!ae||!Object(g.a)(qe.userLpAllowance).lt(j)){e.next=48;break}return e.next=42,Ye.approveToken(Y,H,{title:"deposit.approve_token",obj:{value:K},continuous:!0},[["usdcPool/getUserLp"]]);case 42:if(!e.sent){e.next=47;break}ce(!1),e.next=48;break;case 47:return e.abrupt("return");case 48:return f=j._toHex(),v={title:"actions.remove",obj:{detail:Object(g.z)(m,"usdc")}},e.next=52,Ye.removeLiqImBalanceUSDC(c,f,v,[["usdcPool/updateCurrencyData"]]);case 52:e.sent,e.next=58;break;case 55:e.prev=55,e.t0=e.catch(0),console.log(e.t0);case 58:case"end":return e.stop()}}),e,null,[[0,55]])})));return function(t,n){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a,c,s,u,o,i,l,b,p,d,j,O,f,v;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Oe){e.next=25;break}return e.next=4,$e(n,t,T);case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return");case 7:if(c=a.userLpBalance,s=a.userLpAllowanceUsdcSwap,u=a.minAmounts,o=Object(g.Y)(T).div(100).times(c)._toIntegerDown(),!ae||!Object(g.a)(s).lt(o._toIntegerDown())){e.next=18;break}return e.next=12,Ye.approveToken(Y,E,{title:"deposit.approve_token",obj:{value:q},continuous:!0},[["thrSunPool/getUserLp"]]);case 12:if(!e.sent){e.next=17;break}ce(!1),e.next=18;break;case 17:return e.abrupt("return");case 18:return i={title:"actions.remove",obj:{detail:Object(g.z)(Te,"sun3")}},l=o._toHex(),e.next=22,Ye.removeLiquiditySUN3(l,u,i,[["thrSunPool/updateCurrencyData"]]);case 22:e.sent,e.next=46;break;case 25:return e.next=27,Ze(n,t,T);case 27:if(b=e.sent){e.next=30;break}return e.abrupt("return");case 30:if(p=b.userLpBalance,d=b.userLpAllowance,j=b.minAmounts,O=Object(g.Y)(T).div(100).times(p)._toIntegerDown(),!ae||!Object(g.a)(d).lt(O._toIntegerDown())){e.next=41;break}return e.next=35,Ye.approveToken(Y,H,{title:"deposit.approve_token",obj:{value:K},continuous:!0},[["usdcPool/getUserLp"]]);case 35:if(!e.sent){e.next=40;break}ce(!1),e.next=41;break;case 40:return e.abrupt("return");case 41:return f={title:"actions.remove",obj:{detail:Object(g.z)(m,"usdc")}},v=O._toHex(),e.next=45,Ye.removeLiquidityUSDC(v,j,f,[["usdcPool/updateCurrencyData"]]);case 45:e.sent;case 46:e.next=51;break;case 48:e.prev=48,e.t0=e.catch(0),console.log(e.t0);case 51:case"end":return e.stop()}}),e,null,[[0,48]])})));return function(t,n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n,a){var c,s,u,o,i,l,b,p,d,j,O,f,v,x,h,w,y,L,S,U,_,B,D,C,P,A,V,z,J,G,M,Q,R,W,X,Z,$,ee;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Oe){e.next=37;break}return e.next=4,Object(k.ob)(n,t);case 4:if((c=e.sent).success){e.next=7;break}return e.abrupt("return");case 7:if(s=c.balances3pool,u=c.balancesUsdc,o=c.sun3LpBalance,i=c.sun3TotalSupply,l=c.usdcLpTotalSupply,b=c.userLpAllowance,p=c.userUsdcLpBalance,Xe({balances3pool:s,balancesUsdc:u,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:l,userLpAllowance:b,userUsdcLpBalance:p,coins:t}),d=Object(g.Y)(T).div(100).times(p)._toIntegerDown(),!ae||!Object(g.a)(b).lt(d._toIntegerDown())){e.next=19;break}return e.next=13,Ye.approveToken(Y,E,{title:"deposit.approve_token",obj:{value:q},continuous:!0},[["thrSunPool/getUserLp"]]);case 13:if(!e.sent){e.next=18;break}ce(!1),e.next=19;break;case 18:return e.abrupt("return");case 19:for(f in j=d._toHex(),O=!1,me)!0===me[f]&&(O=I[f].index);return e.next=24,Object(k.q)(j,O);case 24:if((v=e.sent).success){e.next=27;break}return e.abrupt("return");case 27:return x=v.value,h=t.length,w=x.times(Object(g.a)(1).minus(Object(g.a)(F).times(h).div(4*(h-1)).div(1e10))),y=Object(g.a)(100).div(Object(g.a)(100).plus(a)),L=w.times(y)._toIntegerDown()._toHex(),S={title:"actions.remove",obj:{detail:Object(g.z)(Te,"sun3")}},e.next=35,Ye.removeLiqOneCoinSUN3(j,O,L,S,[["thrSunPool/updateCurrencyData"]]);case 35:return e.sent,e.abrupt("return");case 37:return e.next=39,Object(k.ob)(n,t);case 39:if((U=e.sent).success){e.next=42;break}return e.abrupt("return");case 42:if(_=U.balances3pool,B=U.balancesUsdc,D=U.sun3LpBalance,C=U.sun3TotalSupply,P=U.usdcLpTotalSupply,A=U.userLpAllowance,V=U.userUsdcLpBalance,We({balances3pool:_,balancesUsdc:B,sun3LpBalance:D,sun3TotalSupply:C,usdcLpTotalSupply:P,userLpAllowance:A,userUsdcLpBalance:V,coins:t}),z=Object(g.Y)(T).div(100).times(V)._toIntegerDown(),!ae||!Object(g.a)(A).lt(z._toIntegerDown())){e.next=54;break}return e.next=48,Ye.approveToken(Y,H,{title:"deposit.approve_token",obj:{value:K},continuous:!0},[["usdcPool/getUserLp"]]);case 48:if(!e.sent){e.next=53;break}ce(!1),e.next=54;break;case 53:return e.abrupt("return");case 54:for(M in J=z._toHex(),G=!1,me)!0===me[M]&&(G=N[M].index);return e.next=59,Object(k.t)(J,G);case 59:if((Q=e.sent).success){e.next=62;break}return e.abrupt("return");case 62:return R=Q.value,W=t.length,X=R.times(Object(g.a)(1).minus(Object(g.a)(F).times(W).div(4*(W-1)).div(1e10))),Z=Object(g.a)(100).div(Object(g.a)(100).plus(a)),$=X.times(Z)._toIntegerDown()._toHex(),ee={title:"actions.remove",obj:{detail:Object(g.z)(m,"usdc")}},e.next=70,Ye.removeLiqOneCoinUSDC(J,G,$,ee,[["usdcPool/updateCurrencyData"]]);case 70:e.sent,e.next=76;break;case 73:e.prev=73,e.t0=e.catch(0),console.log(e.t0);case 76:case"end":return e.stop()}}),e,null,[[0,73]])})));return function(t,n,a){return e.apply(this,arguments)}}(),Qe=function(){for(var e in me)if(me[e])return e;return!1},Re=function(){var t=Object(s.a)(Object(r.a)().mark((function t(n){var a,s,u,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Ke.defaultAccount){t.next=3;break}return t.abrupt("return");case 3:if(!_e&&Be(!0),ye){t.next=8;break}if(!ze(n)){t.next=8;break}return t.abrupt("return");case 8:if(!ye){t.next=10;break}return t.abrupt("return");case 10:if(a=Ke.defaultAccount,s=[],Oe?C.map((function(e){s.push(Object(c.a)(Object(c.a)({},I[e]),{},{inputValue:Object(g.Y)(n[e]).times(I[e].precision)}))})):D.map((function(e){s.push(Object(c.a)(Object(c.a)({},N[e]),{},{inputValue:Object(g.Y)(n[e]).times(N[e].precision)}))})),u=s.sort((function(e,t){return e.index-t.index})),o=R===z?$:R,e.onSubmit&&e.onSubmit(),!ue){t.next=20;break}return t.next=19,Me(u,a,o);case 19:return t.abrupt("return",t.sent);case 20:if(T===V){t.next=24;break}return t.next=23,Ge(u,a);case 23:return t.abrupt("return",t.sent);case 24:return t.next=26,Je(u,o);case 26:return t.abrupt("return",t.sent);case 29:t.prev=29,t.t0=t.catch(0),console.log(t.t0);case 32:case"end":return t.stop()}}),t,null,[[0,29]])})));return function(e){return t.apply(this,arguments)}}(),We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.balances3pool,n=e.balancesUsdc,a=e.sun3LpBalance,c=e.sun3TotalSupply,r=e.usdcLpTotalSupply,s=(e.userLpAllowance,e.userUsdcLpBalance),u=e.coins;try{var o=[],i=Object(g.a)(s).div(r),l=Object(g.a)(i).times(n),b=Object(g.a)(i).times(a),p=b.div(c);return u.map((function(e){var n=e.index,a=e.precision,c=(e.symbol,e.id),r=Object(g.a)(0);r="usdc"===c?l.div(a):p.times(t[c]).div(a),o[n]=r||Object(g.a)(0)})),o}catch(d){return console.log(d),[]}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.balances3pool,e.balancesUsdc),n=e.sun3LpBalance,a=(e.sun3TotalSupply,e.usdcLpTotalSupply),c=(e.userLpAllowance,e.userUsdcLpBalance),r=e.coins;try{var s=[],u=Object(g.a)(c).div(a),o=Object(g.a)(u).times(t),i=Object(g.a)(u).times(n);return r.map((function(e){var t=e.index,n=e.precision,a=(e.symbol,e.id),c=Object(g.a)(0);c="usdc"===a?o.div(n):i.div(n),s[t]=c||Object(g.a)(0)})),s}catch(l){return console.log(l),[]}},Ze=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n,a){var c,s,u,o,i,l,b,p,d,j,O,f,v=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=v.length>3&&void 0!==v[3]&&v[3],e.prev=1,e.next=4,Object(k.ob)(t,n);case 4:if((s=e.sent).success){e.next=7;break}return e.abrupt("return");case 7:return u=s.balances3pool,o=s.balancesUsdc,i=s.sun3LpBalance,l=s.sun3TotalSupply,b=s.usdcLpTotalSupply,p=s.userLpAllowance,d=s.userUsdcLpBalance,j=We({balances3pool:u,balancesUsdc:o,sun3LpBalance:i,sun3TotalSupply:l,usdcLpTotalSupply:b,userLpAllowance:p,userUsdcLpBalance:d,coins:n}),O=[],f={},n.map((function(e){var t=e.index,n=e.id,r=e.decimal,s=(e.precision,Object(g.Y)(a).div(100).times(j[t]));c||(s=Object(g.a)(.98).times(s)),O[t]=s._toIntegerDown()._toHex(),f[n]=Object(g.c)(s._toFixed(r,1))})),e.abrupt("return",{balances:j,userLpAllowance:p,minAmounts:O,amountsStr:f,userLpBalance:d});case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),$e=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n,a){var c,s,u,o,i,l,b,p,d,j,O,f,v,x=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=x.length>3&&void 0!==x[3]&&x[3],e.prev=1,e.next=4,Object(k.ob)(t,n);case 4:if((s=e.sent).success){e.next=7;break}return e.abrupt("return");case 7:return u=s.balances3pool,o=s.balancesUsdc,i=s.sun3LpBalance,l=s.sun3TotalSupply,b=s.usdcLpTotalSupply,p=s.userLpAllowance,d=s.userUsdcLpBalance,j=s.userLpAllowanceUsdcSwap,O=Xe({balances3pool:u,balancesUsdc:o,sun3LpBalance:i,sun3TotalSupply:l,usdcLpTotalSupply:b,userLpAllowance:p,userUsdcLpBalance:d,coins:n}),f=[],v={},n.map((function(e){var t=e.index,n=e.id,r=e.decimal,s=(e.precision,Object(g.Y)(a).div(100).times(O[t]));c||(s=Object(g.a)(.98).times(s)),f[t]=s._toIntegerDown()._toHex(),v[n]=s._toFixed(r,1)})),e.abrupt("return",{balances:O,userLpAllowance:p,minAmounts:f,amountsStr:v,userLpBalance:d,userLpAllowanceUsdcSwap:j});case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),et=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a,c,s,u,o,i,l,b,p,d;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,qe.getUserLp();case 3:return a=qe.swapBalanceInfo.userUsdcLpBalance,c=N[t],s=c.precision,u=c.decimal,o=Object(g.Y)(n).div(100).times(a)._toIntegerDown(),i=N[t].index,l=o._toHex(),e.next=10,Object(k.t)(l,i);case 10:if((b=e.sent).success){e.next=13;break}return e.abrupt("return",!1);case 13:return p=b.value,d=Object(g.a)(p).div(s)._toFixed(u,1),e.abrupt("return",d);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),tt=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a,c,s,u,o,i,l,b,p,d;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,He.getUserLp();case 3:return a=He.swapBalanceInfo.userUsdcLpBalance,c=I[t],s=c.precision,u=c.decimal,o=Object(g.Y)(n).div(100).times(a)._toIntegerDown(),i=I[t].index,l=o._toHex(),e.next=10,Object(k.q)(l,i);case 10:if((b=e.sent).success){e.next=13;break}return e.abrupt("return",!1);case 13:return p=b.value,d=Object(g.a)(p).div(s)._toFixed(u,1),e.abrupt("return",d);case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),nt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?(He.getSwapBalance(),He.getVirtualPriceUSDC(),He.getVolData()):(qe.getSwapBalance(),qe.getVirtualPriceUSDC(),qe.getVolData())},at=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length>0&&void 0!==a[0]&&a[0]){e.next=9;break}return e.next=4,Promise.all([qe.getUserLp(),qe.getBalanceInfo()]);case 4:t={},D.map((function(e){var n=qe.poolData[e],a=n.userSwapBalance,c=n.decimal;t[e]=Object(g.c)(Object(g.a)(a)._toFixed(c,1))})),U(t),e.next=14;break;case 9:return e.next=11,Promise.all([He.getSwapBalance(),He.getUserLp(),He.getBalanceInfo()]);case 11:n={},C.map((function(e){var t=He.poolData[e],a=t.userSwapBalance,c=t.decimal;n[e]=Object(g.c)(Object(g.a)(a)._toFixed(c,1))})),Fe(n);case 14:!_e&&Be(!0),Ee||(Ee=setInterval(Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return nt(!1),e.next=3,qe.getUserLp();case 3:case"end":return e.stop()}}),e)}))),Ke.defaultIntervalSec));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!Ve&&Oe&&(Ve=setInterval(Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return nt(!0),e.next=3,He.getUserLp();case 3:case"end":return e.stop()}}),e)}))),Ke.defaultIntervalSec))}),[Oe]),Object(o.useEffect)((function(){return at(),nt(),function(){clearInterval(Ee),clearInterval(Ve)}}),[]);var ct=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var s,u,o,i,l,b,p,d,j;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_e&&Be(!0),s=T,u=t.target.checked,o={},i={},l={},!Oe){e.next=23;break}if(!u){e.next=19;break}for(b in oe(!0),Te)b!==n&&(o[b]=!1,l[b]=0);return ke(Object(c.a)(Object(c.a)(Object(c.a)({},Te),o),{},Object(a.a)({},n,u))),(T===V||Object(g.Y)(T).lte(0))&&G(s="100.00"),Object(g.Y)(s).gt(100)&&(s=100),e.next=15,tt(n,s);case 15:(p=e.sent)&&Fe(Object(c.a)(Object(c.a)(Object(c.a)({},Te),l),{},Object(a.a)({},n,Object(g.c)(p)))),e.next=22;break;case 19:G(V),oe(!1),ke(Object(c.a)(Object(c.a)({},me),{},Object(a.a)({},n,u)));case 22:return e.abrupt("return");case 23:if(!u){e.next=35;break}for(d in oe(!0),me)d!==n&&(o[d]=!1,i[d]=0);return ke(Object(c.a)(Object(c.a)(Object(c.a)({},me),o),{},Object(a.a)({},n,u))),(T===V||Object(g.Y)(T).lte(0))&&G(s="100.00"),Object(g.Y)(s).gt(100)&&(s=100),e.next=31,et(n,s);case 31:(j=e.sent)&&U(Object(c.a)(Object(c.a)(Object(c.a)({},m),i),{},Object(a.a)({},n,Object(g.c)(j)))),e.next=38;break;case 35:G(V),oe(!1),ke(Object(c.a)(Object(c.a)({},me),{},Object(a.a)({},n,u)));case 38:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),rt=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var s,u,o,i,l,b,p,d,j,O,f,v;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_e&&Be(!0),!Oe){e.next=11;break}for(b in s=I[n].decimal,u=Object(g.P)((""+t.target.value).replace(/,/g,""),s),o=u.valid,i=u.str,o&&Fe(Object(c.a)(Object(c.a)({},Te),{},Object(a.a)({},n,Object(g.c)(i)))),G(V),oe(!1),l={},me)l[b]=!1;return ke(l),e.abrupt("return");case 11:for(v in p=N[n].decimal,d=Object(g.P)((""+t.target.value).replace(/,/g,""),p),j=d.valid,O=d.str,j&&U(Object(c.a)(Object(c.a)({},m),{},Object(a.a)({},n,Object(g.c)(O)))),G(V),oe(!1),f={},me)f[v]=!1;ke(f);case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),st=function(){var e={},t={};D.map((function(n){e[n]=0,t[0]=!1})),U(e),ke(me),G(0)},ut=function(){var e={},t={};C.map((function(n){e[n]=0,t[0]=!1})),Fe(e),ke(me),G(0)},ot=function(){var e={};D.map((function(t){e[t]=0})),U(e)},it=function(){var e={};C.map((function(t){e[t]=0})),Fe(e)},lt=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe.calcInclPrice(t,!1,n);case 2:a=e.sent,pe(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),bt=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He.calcInclPrice(t,!1,n);case 2:a=e.sent,pe(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pt=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var n,s,u,o,i,l,b,p,d,j,O,f,v,x,h,k,w,y,L,S,_;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_e&&Be(!0),s=t.target.value,u=s.split("."),(null===(n=u[1])||void 0===n?void 0:n.length)>2&&(s="".concat(u[0]+"."+u[1].substr(0,2))),!Object(g.a)(s).gt(100)){e.next=6;break}return e.abrupt("return");case 6:if(o=Object(g.P)(s,10),i=o.valid,l=o.str,T!==V){e.next=9;break}return e.abrupt("return",Oe?ut():st());case 9:if(""!==s){e.next=12;break}return G(""),e.abrupt("return",Oe?it():ot());case 12:if(!i){e.next=50;break}if(G(l),!(b=Object(g.a)(l).gt(100)?Object(g.a)(100):Object(g.a)(l)).isNaN()){e.next=17;break}return e.abrupt("return");case 17:if(Ke.defaultAccount){e.next=19;break}return e.abrupt("return");case 19:if(p=Ke.defaultAccount,d=Qe(),!Oe){e.next=37;break}if(!d){e.next=27;break}return e.next=25,tt(d,b);case 25:return j=e.sent,e.abrupt("return",j&&Fe(Object(c.a)(Object(c.a)({},Te),{},Object(a.a)({},d,Object(g.c)(j)))));case 27:if(l===V){e.next=36;break}return O=[],C.map((function(e){O.push(Object(c.a)({},I[e]))})),f=O.sort((function(e,t){return e.index-t.index})),e.next=33,$e(p,f,l,!0);case 33:v=e.sent,x=v.amountsStr,h=void 0===x?{}:x,v&&Fe(h);case 36:return e.abrupt("return");case 37:if(!d){e.next=42;break}return e.next=40,et(d,b);case 40:return k=e.sent,e.abrupt("return",k&&U(Object(c.a)(Object(c.a)({},m),{},Object(a.a)({},d,Object(g.c)(k)))));case 42:if(l===V){e.next=50;break}return w=[],D.map((function(e){w.push(Object(c.a)({},N[e]))})),y=w.sort((function(e,t){return e.index-t.index})),e.next=48,Ze(p,y,l,!0);case 48:L=e.sent,s===t.target.value&&(S=L.amountsStr,_=void 0===S?{}:S,L&&U(_));case 50:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),dt=function(e){return Qe()||T===V?Object(B.jsxs)("div",{className:"flex start mobile-block",children:[Object(B.jsx)("div",{className:"pc-adjust",children:l.a.get("withdraw.slippage")}),Object(B.jsx)("div",{className:"flex max-slippage",children:Object(B.jsxs)(b.a.Group,{className:"ad-radios",onChange:function(e){return function(e){!_e&&Be(!0);var t=e.target.value;W(t),t!==V&&ee("")}(e)},value:e,children:[Object(B.jsx)(b.a,{className:"ad-radio",value:.2,children:"0.2%"}),Object(B.jsx)(b.a,{className:"ad-radio",value:3,children:"3%"}),Object(B.jsx)(b.a,{className:"ad-radio",value:z,children:Object(B.jsx)(p.a,{className:"input",value:$,onChange:function(e){return function(e){var t=Object(g.P)(e,10),n=t.valid,a=t.str;if(n)if(""===a)ee("");else if(Object(g.a)(a).lte(100)){var c,r=a,s=a.split(".");(null===(c=s[1])||void 0===c?void 0:c.length)>2&&(r="".concat(s[0]+"."+s[1].substr(0,2))),ee(r)}}(e.target.value)},disabled:e!==z,suffix:"%"})})]})})]}):Object(B.jsx)(B.Fragment,{})};return Object(B.jsx)(v.a,{children:function(){return Object(B.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(y.a,{routeName:"usdc/withdraw",mountedActions:at,instantActions:nt}),Object(B.jsx)(L.a,{title:l.a.get("buysell.usdc_pool")+" "+l.a.get("banner.title_withdraw"),desc:l.a.get("banner.desc_withdraw")}),Object(B.jsx)(S.a,{})]}):null,Ke.isConnected&&Object(B.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(B.jsxs)("div",{className:"add-liq withdraw-liq",children:[Object(B.jsxs)("fieldset",{className:"percentage",children:[Object(B.jsx)("legend",{children:l.a.get("withdraw.share_of_liq")}),Object(B.jsx)(p.a,{className:"mt-15",placeholder:"100.00",value:T,onChange:pt})]}),Object(B.jsxs)("fieldset",{className:"currencies mt-35",children:[Object(B.jsx)("legend",{children:l.a.get("deposit.currencies")}),Object(B.jsx)("ul",{children:De.map((function(e){var t=(Oe?I[e]:N[e]).symbol,n=void 0===t?"":t;return Object(B.jsxs)("li",{children:[Object(B.jsx)("div",{className:"cur-label",children:Object(B.jsxs)("span",{className:"icon",children:[Object(B.jsx)("img",{src:h.a[e]?h.a[e]:f.default,alt:"",className:"token-logo"}),n]})}),Object(B.jsx)("div",{className:"cur-input",children:Object(B.jsx)(p.a,{placeholder:"0",value:Oe?Te[e]:m[e],onChange:function(t){rt(t,e)}})})]},e)}))})]}),Object(B.jsxs)("fieldset",{children:[Object(B.jsxs)("legend",{className:"flex aic jcs pt20",children:[l.a.get("withdraw.withdraw_text"),Object(B.jsx)(d.a,{title:l.a.get("withdraw.tip"),children:Object(B.jsx)(O.a,{})})]}),Object(B.jsx)("div",{className:"withdraw-one",children:De.map((function(e){var t=(Oe?I[e]:N[e]).symbol,n=void 0===t?"":t;return Object(B.jsx)("div",{children:Object(B.jsxs)(_.a,{checked:me[e],onChange:function(t){return ct(t,e)},children:[Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)("img",{src:h.a[e]?h.a[e]:f.default,alt:"",className:"token-logo"})}),n]})},"checkbox_"+e)}))}),Object(B.jsx)("div",{className:"switch3sun",children:Object(B.jsx)(_.a,{checked:Oe,onChange:function(e){return function(e){G("100"),e.target.checked?(Ce(C),clearInterval(Ee)):(Ce(D),clearInterval(Ve)),fe(e.target.checked),oe(!1),ke(J(!1)),nt(e.target.checked),at(e.target.checked)}(e)},children:l.a.get("withdraw.as_3sun")})})]}),dt(R),ye&&Object(B.jsx)("div",{className:"error-content",children:Object(B.jsx)("div",{className:"red-error error-tip",children:ye})}),Object(B.jsx)("div",{className:"sell-submit-wrapper with-bottom-margin",children:Object(B.jsx)(j.a,{className:"tab-btn",onClick:function(){return Re(Oe?Te:m)},disabled:ye,children:l.a.get("withdraw.action")})}),Object(g.U)(be)]})}),Object(B.jsx)(w.a,{type:Oe?"sun3":"usdc",className:Ke.isConnected?null:"window-for-tabs-pane"})]})}})}},711:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(12),r=n(45),s=n(5),u=n(10),o=n(11),i=n(18),l=n(19),b=n(2),p=n.n(b),d=n(27),j=n.n(d),O=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:Object(s.a)(Object(s.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return Object(o.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.className,u=t.style,o=t.name,i=t.id,l=t.type,b=t.disabled,d=t.readOnly,O=t.tabIndex,f=t.onClick,v=t.onFocus,x=t.onBlur,h=t.onKeyDown,m=t.onKeyPress,k=t.onKeyUp,g=t.autoFocus,w=t.value,y=t.required,L=Object(r.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),S=Object.keys(L).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=L[t]),e}),{}),U=this.state.checked,_=j()(n,s,(e={},Object(c.a)(e,"".concat(n,"-checked"),U),Object(c.a)(e,"".concat(n,"-disabled"),b),e));return p.a.createElement("span",{className:_,style:u},p.a.createElement("input",Object(a.a)({name:o,id:i,type:l,required:y,readOnly:d,disabled:b,tabIndex:O,className:"".concat(n,"-input"),checked:!!U,onClick:f,onFocus:v,onBlur:x,onKeyUp:k,onKeyDown:h,onKeyPress:m,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:w},S)),p.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(s.a)(Object(s.a)({},t),{},{checked:e.checked}):null}}]),n}(b.Component);O.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.default=O}}]);