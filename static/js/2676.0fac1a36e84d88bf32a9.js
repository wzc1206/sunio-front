/*! For license information please see 2676.0fac1a36e84d88bf32a9.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfront_js=globalThis.webpackChunkfront_js||[]).push([[2676],{64951(t,e,i){i.r(e),i.d(e,{W3mTransactionsView:()=>r});var n=i(12769),a=i(70148);i(60310),i(94009);const o=n.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let r=class extends n.WF{render(){return n.qy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};r.styles=o,r=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,a.EM)("w3m-transactions-view")],r)},77616(t,e,i){i(12851)},45101(t,e,i){var n=i(35120),a=i(54211),o=i(43121),r=(i(18409),i(26109)),s=i(43494);const c=n.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends n.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return n.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,o.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};h.styles=[r.W5,r.fD,c],l([(0,a.MZ)()],h.prototype,"tabIdx",void 0),l([(0,a.MZ)({type:Boolean})],h.prototype,"disabled",void 0),l([(0,a.MZ)()],h.prototype,"color",void 0),h=l([(0,s.E)("wui-link")],h)},32565(t,e,i){var n=i(35120),a=i(54211),o=i(12242),r=i(31186),s=i(55511);class c{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class l{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var h=i(52894);const d=t=>!(0,r.sO)(t)&&"function"==typeof t.then,b=1073741823;class w extends s.Kq{constructor(){super(...arguments),this._$Cwt=b,this._$Cbt=[],this._$CK=new c(this),this._$CX=new l}render(...t){return t.find(t=>!d(t))??o.c0}update(t,e){const i=this._$Cbt;let n=i.length;this._$Cbt=e;const a=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!d(o))return this._$Cwt=t,o;t<n&&o===i[t]||(this._$Cwt=b,n=0,Promise.resolve(o).then(async t=>{for(;r.get();)await r.get();const e=a.deref();if(void 0!==e){const i=e._$Cbt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const v=(0,h.u$)(w),g=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var y=i(26109),u=i(43494);const p=n.AH`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var f=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const S={add:async()=>(await i.e(1476).then(i.bind(i,61476))).addSvg,allWallets:async()=>(await i.e(3723).then(i.bind(i,76104))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(6717).then(i.bind(i,16717))).arrowBottomCircleSvg,appStore:async()=>(await i.e(9236).then(i.bind(i,89236))).appStoreSvg,apple:async()=>(await i.e(1979).then(i.bind(i,41979))).appleSvg,arrowBottom:async()=>(await i.e(5776).then(i.bind(i,35776))).arrowBottomSvg,arrowLeft:async()=>(await i.e(6426).then(i.bind(i,6426))).arrowLeftSvg,arrowRight:async()=>(await i.e(5133).then(i.bind(i,35133))).arrowRightSvg,arrowTop:async()=>(await i.e(6040).then(i.bind(i,56040))).arrowTopSvg,bank:async()=>(await i.e(261).then(i.bind(i,80261))).bankSvg,browser:async()=>(await i.e(787).then(i.bind(i,50787))).browserSvg,bin:async()=>(await i.e(6958).then(i.bind(i,6958))).binSvg,bitcoin:async()=>(await i.e(7861).then(i.bind(i,37861))).bitcoinSvg,card:async()=>(await i.e(1029).then(i.bind(i,71029))).cardSvg,checkmark:async()=>(await i.e(9390).then(i.bind(i,79390))).checkmarkSvg,checkmarkBold:async()=>(await i.e(1824).then(i.bind(i,31824))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(5214).then(i.bind(i,42833))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5664).then(i.bind(i,45664))).chevronLeftSvg,chevronRight:async()=>(await i.e(2387).then(i.bind(i,72387))).chevronRightSvg,chevronTop:async()=>(await i.e(9146).then(i.bind(i,39146))).chevronTopSvg,chromeStore:async()=>(await i.e(2565).then(i.bind(i,2565))).chromeStoreSvg,clock:async()=>(await i.e(1837).then(i.bind(i,41837))).clockSvg,close:async()=>(await i.e(5943).then(i.bind(i,5943))).closeSvg,compass:async()=>(await i.e(2011).then(i.bind(i,92011))).compassSvg,coinPlaceholder:async()=>(await i.e(6929).then(i.bind(i,76929))).coinPlaceholderSvg,copy:async()=>(await i.e(4554).then(i.bind(i,24554))).copySvg,cursor:async()=>(await i.e(2161).then(i.bind(i,62161))).cursorSvg,cursorTransparent:async()=>(await i.e(5518).then(i.bind(i,95518))).cursorTransparentSvg,circle:async()=>(await i.e(7703).then(i.bind(i,27703))).circleSvg,desktop:async()=>(await i.e(6355).then(i.bind(i,76355))).desktopSvg,disconnect:async()=>(await i.e(4953).then(i.bind(i,94953))).disconnectSvg,discord:async()=>(await i.e(7243).then(i.bind(i,57243))).discordSvg,download:async()=>(await i.e(1067).then(i.bind(i,81067))).downloadSvg,ethereum:async()=>(await i.e(438).then(i.bind(i,10438))).ethereumSvg,etherscan:async()=>(await i.e(70).then(i.bind(i,60070))).etherscanSvg,extension:async()=>(await i.e(6618).then(i.bind(i,6618))).extensionSvg,externalLink:async()=>(await i.e(877).then(i.bind(i,60877))).externalLinkSvg,facebook:async()=>(await i.e(279).then(i.bind(i,30279))).facebookSvg,farcaster:async()=>(await i.e(5426).then(i.bind(i,15426))).farcasterSvg,filters:async()=>(await i.e(4052).then(i.bind(i,84052))).filtersSvg,github:async()=>(await i.e(1496).then(i.bind(i,11496))).githubSvg,google:async()=>(await i.e(9624).then(i.bind(i,59624))).googleSvg,helpCircle:async()=>(await i.e(6561).then(i.bind(i,88942))).helpCircleSvg,image:async()=>(await i.e(8842).then(i.bind(i,88842))).imageSvg,id:async()=>(await i.e(4778).then(i.bind(i,84778))).idSvg,infoCircle:async()=>(await i.e(4748).then(i.bind(i,84748))).infoCircleSvg,lightbulb:async()=>(await i.e(6828).then(i.bind(i,76828))).lightbulbSvg,mail:async()=>(await i.e(2688).then(i.bind(i,92688))).mailSvg,mobile:async()=>(await i.e(9385).then(i.bind(i,69385))).mobileSvg,more:async()=>(await i.e(4230).then(i.bind(i,94230))).moreSvg,networkPlaceholder:async()=>(await i.e(2901).then(i.bind(i,22901))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(5410).then(i.bind(i,35410))).nftPlaceholderSvg,off:async()=>(await i.e(2658).then(i.bind(i,12658))).offSvg,playStore:async()=>(await i.e(7469).then(i.bind(i,77469))).playStoreSvg,plus:async()=>(await i.e(1035).then(i.bind(i,11035))).plusSvg,qrCode:async()=>(await i.e(2016).then(i.bind(i,72016))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(4987).then(i.bind(i,84987))).recycleHorizontalSvg,refresh:async()=>(await i.e(5452).then(i.bind(i,85452))).refreshSvg,search:async()=>(await i.e(8127).then(i.bind(i,38127))).searchSvg,send:async()=>(await i.e(4725).then(i.bind(i,74725))).sendSvg,swapHorizontal:async()=>(await i.e(6780).then(i.bind(i,16780))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(1975).then(i.bind(i,51975))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(3967).then(i.bind(i,43967))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(6188).then(i.bind(i,86188))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(1538).then(i.bind(i,31538))).swapVerticalSvg,solana:async()=>(await i.e(6183).then(i.bind(i,66183))).solanaSvg,telegram:async()=>(await i.e(2692).then(i.bind(i,92692))).telegramSvg,threeDots:async()=>(await i.e(5420).then(i.bind(i,65420))).threeDotsSvg,twitch:async()=>(await i.e(4736).then(i.bind(i,54736))).twitchSvg,twitter:async()=>(await i.e(2931).then(i.bind(i,92931))).xSvg,twitterIcon:async()=>(await i.e(4477).then(i.bind(i,34477))).twitterIconSvg,user:async()=>(await i.e(7252).then(i.bind(i,57252))).userSvg,verify:async()=>(await i.e(2026).then(i.bind(i,82026))).verifySvg,verifyFilled:async()=>(await i.e(4067).then(i.bind(i,44067))).verifyFilledSvg,wallet:async()=>(await i.e(6530).then(i.bind(i,6530))).walletSvg,walletConnect:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(4714).then(i.bind(i,74714))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(6348).then(i.bind(i,76348))).warningCircleSvg,x:async()=>(await i.e(2931).then(i.bind(i,92931))).xSvg,info:async()=>(await i.e(5823).then(i.bind(i,55823))).infoSvg,exclamationTriangle:async()=>(await i.e(5179).then(i.bind(i,95179))).exclamationTriangleSvg,reown:async()=>(await i.e(1978).then(i.bind(i,91978))).reownSvg,"x-mark":async()=>(await i.e(3481).then(i.bind(i,23481))).xMarkSvg,dollar:async()=>(await i.e(2005).then(i.bind(i,12005))).dollarSvg};let $=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,n.qy`${v(async function(t){if(g.has(t))return g.get(t);const e=(S[t]??S.copy)();return g.set(t,e),e}(this.name),n.qy`<div class="fallback"></div>`)}`}};$.styles=[y.W5,y.ck,p],f([(0,a.MZ)()],$.prototype,"size",void 0),f([(0,a.MZ)()],$.prototype,"name",void 0),f([(0,a.MZ)()],$.prototype,"color",void 0),f([(0,a.MZ)()],$.prototype,"aspectRatio",void 0),$=f([(0,u.E)("wui-icon")],$)},36887(t,e,i){var n=i(35120),a=i(54211),o=i(26109),r=i(43494);const s=n.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var c=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,n.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[o.W5,o.ck,s],c([(0,a.MZ)()],l.prototype,"src",void 0),c([(0,a.MZ)()],l.prototype,"alt",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,r.E)("wui-image")],l)},12851(t,e,i){var n=i(35120),a=i(54211),o=(i(32565),i(26109)),r=i(43494);const s=n.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,a=e?"12%":"16%",o=e?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[o.W5,o.fD,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),c([(0,a.MZ)()],l.prototype,"iconSize",void 0),c([(0,a.MZ)()],l.prototype,"background",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,a.MZ)()],l.prototype,"borderColor",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},55511(t,e,i){i.d(e,{Kq:()=>d});var n=i(31186),a=i(52894);const o=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),o(t,e);return!0},r=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,i=0){const n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)o(n[t],!1),r(n[t]);else null!=n&&(o(n,!1),r(n));else o(this,t)}const h=t=>{t.type==a.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(o(this,t),r(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},31186(t,e,i){i.d(e,{Rt:()=>r,sO:()=>o});var n=i(12242);const{I:a}=n.ge,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},43121(t,e,i){i.d(e,{J:()=>a});var n=i(12242);const a=t=>t??n.s6}}]);