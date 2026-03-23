/*! For license information please see 9567.d0aa6741cb4f448fcf42.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfront_js=globalThis.webpackChunkfront_js||[]).push([[9567],{29567(t,e,a){a.r(e),a.d(e,{W3mWalletReceiveView:()=>C});var i=a(12769),o=a(50832),n=a(75880),r=a(63450),s=a(6056),c=a(21871),l=a(27601),h=a(68996),d=a(74496),w=a(78508),u=a(26742),g=a(70148),v=(a(85999),a(35120)),p=a(54211),b=(a(32565),a(36887),a(18409),a(69807),a(26109)),y=a(43494);const f=v.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var m=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};let $=class extends v.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return v.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return v.qy` <wui-flex class="networks">
      ${t?.map(t=>v.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};$.styles=[b.W5,b.fD,f],m([(0,p.MZ)({type:Array})],$.prototype,"networkImages",void 0),m([(0,p.MZ)()],$.prototype,"text",void 0),$=m([(0,y.E)("wui-compatible-network")],$),a(60310),a(66283),a(45090);var S=a(10152);const k=i.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};let C=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.address=r.U.state.address,this.profileName=r.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.unsubscribe.push(r.U.subscribe(t=>{t.address?(this.address=t.address,this.profileName=t.profileName):c.P.showError("Account not found")}),s.W.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.$.getNetworkImage(this.network);return i.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${g.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${h.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,n.J)(h.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=s.W.getAllRequestedCaipNetworks(),e=s.W.checkIfSmartAccountEnabled(),a=s.W.state.activeCaipNetwork,o=t.filter(t=>t?.chainNamespace===a?.chainNamespace);if((0,d.lj)(a?.chainNamespace)===S.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return a?i.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(a)??""]}
      ></wui-compatible-network>`:null;const n=o?.filter(t=>t?.assets?.imageId)?.slice(0,5),r=n.map(l.$.getNetworkImage).filter(Boolean);return i.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${r}
    ></wui-compatible-network>`}onReceiveClick(){w.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(u.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};C.styles=k,x([(0,o.wk)()],C.prototype,"address",void 0),x([(0,o.wk)()],C.prototype,"profileName",void 0),x([(0,o.wk)()],C.prototype,"network",void 0),C=x([(0,g.EM)("w3m-wallet-receive-view")],C)},75880(t,e,a){a.d(e,{J:()=>o});var i=a(50253);const o=t=>t??i.s6},66283(t,e,a){var i=a(35120),o=a(54211),n=(a(32565),a(36887),a(87583));function r(t,e,a){return t!==e&&(t-e<0?e-t:t-e)<=a+.1}const s={generate({uri:t,size:e,logoSize:a,dotColor:o="#141414"}){const s=[],c=function(t){const e=Array.prototype.slice.call(n.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),a=Math.sqrt(e.length);return e.reduce((t,e,i)=>(i%a===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t),l=e/c.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:t,y:e})=>{const a=(c.length-7)*l*t,n=(c.length-7)*l*e,r=.45;for(let t=0;t<h.length;t+=1){const e=l*(7-2*t);s.push(i.JW`
            <rect
              fill=${2===t?o:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*r:e*r}
              ry= ${0===t?(e-5)*r:e*r}
              stroke=${o}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?n+l*t+2.5:n+l*t}
              y= ${0===t?a+l*t+2.5:a+l*t}
            />
          `)}});const d=Math.floor((a+25)/l),w=c.length/2-d/2,u=c.length/2+d/2-1,g=[];c.forEach((t,e)=>{t.forEach((t,a)=>{if(c[e][a]&&!(e<7&&a<7||e>c.length-8&&a<7||e<7&&a>c.length-8||e>w&&e<u&&a>w&&a<u)){const t=e*l+l/2,i=a*l+l/2;g.push([t,i])}})});const v={};return g.forEach(([t,e])=>{v[t]?v[t]?.push(e):v[t]=[e]}),Object.entries(v).map(([t,e])=>{const a=e.filter(t=>e.every(e=>!r(t,e,l)));return[Number(t),a]}).forEach(([t,e])=>{e.forEach(e=>{s.push(i.JW`<circle cx=${t} cy=${e} fill=${o} r=${l/2.5} />`)})}),Object.entries(v).filter(([t,e])=>e.length>1).map(([t,e])=>{const a=e.filter(t=>e.some(e=>r(t,e,l)));return[Number(t),a]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const a=[];for(const t of e){const e=a.find(e=>e.some(e=>r(t,e,l)));e?e.push(t):a.push([t])}return[t,a.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,a])=>{s.push(i.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${a}
                stroke=${o}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var c=a(26109),l=a(43494);const h=i.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var d=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};let w=class extends i.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,i.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return i.JW`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?i.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};w.styles=[c.W5,h],d([(0,o.MZ)()],w.prototype,"uri",void 0),d([(0,o.MZ)({type:Number})],w.prototype,"size",void 0),d([(0,o.MZ)()],w.prototype,"theme",void 0),d([(0,o.MZ)()],w.prototype,"imageSrc",void 0),d([(0,o.MZ)()],w.prototype,"alt",void 0),d([(0,o.MZ)()],w.prototype,"color",void 0),d([(0,o.MZ)({type:Boolean})],w.prototype,"arenaClear",void 0),d([(0,o.MZ)({type:Boolean})],w.prototype,"farcaster",void 0),w=d([(0,l.E)("wui-qr-code")],w)},32565(t,e,a){var i=a(35120),o=a(54211),n=a(12242),r=a(31186),s=a(55511);class c{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class l{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var h=a(52894);const d=t=>!(0,r.sO)(t)&&"function"==typeof t.then,w=1073741823;class u extends s.Kq{constructor(){super(...arguments),this._$Cwt=w,this._$Cbt=[],this._$CK=new c(this),this._$CX=new l}render(...t){return t.find(t=>!d(t))??n.c0}update(t,e){const a=this._$Cbt;let i=a.length;this._$Cbt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const n=e[t];if(!d(n))return this._$Cwt=t,n;t<i&&n===a[t]||(this._$Cwt=w,i=0,Promise.resolve(n).then(async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const a=e._$Cbt.indexOf(n);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}}))}return n.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const g=(0,h.u$)(u),v=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var p=a(26109),b=a(43494);const y=i.AH`
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
`;var f=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};const m={add:async()=>(await a.e(1476).then(a.bind(a,61476))).addSvg,allWallets:async()=>(await a.e(3723).then(a.bind(a,76104))).allWalletsSvg,arrowBottomCircle:async()=>(await a.e(6717).then(a.bind(a,16717))).arrowBottomCircleSvg,appStore:async()=>(await a.e(9236).then(a.bind(a,89236))).appStoreSvg,apple:async()=>(await a.e(1979).then(a.bind(a,41979))).appleSvg,arrowBottom:async()=>(await a.e(5776).then(a.bind(a,35776))).arrowBottomSvg,arrowLeft:async()=>(await a.e(6426).then(a.bind(a,6426))).arrowLeftSvg,arrowRight:async()=>(await a.e(5133).then(a.bind(a,35133))).arrowRightSvg,arrowTop:async()=>(await a.e(6040).then(a.bind(a,56040))).arrowTopSvg,bank:async()=>(await a.e(261).then(a.bind(a,80261))).bankSvg,browser:async()=>(await a.e(787).then(a.bind(a,50787))).browserSvg,bin:async()=>(await a.e(6958).then(a.bind(a,6958))).binSvg,bitcoin:async()=>(await a.e(7861).then(a.bind(a,37861))).bitcoinSvg,card:async()=>(await a.e(1029).then(a.bind(a,71029))).cardSvg,checkmark:async()=>(await a.e(9390).then(a.bind(a,79390))).checkmarkSvg,checkmarkBold:async()=>(await a.e(1824).then(a.bind(a,31824))).checkmarkBoldSvg,chevronBottom:async()=>(await a.e(5214).then(a.bind(a,42833))).chevronBottomSvg,chevronLeft:async()=>(await a.e(5664).then(a.bind(a,45664))).chevronLeftSvg,chevronRight:async()=>(await a.e(2387).then(a.bind(a,72387))).chevronRightSvg,chevronTop:async()=>(await a.e(9146).then(a.bind(a,39146))).chevronTopSvg,chromeStore:async()=>(await a.e(2565).then(a.bind(a,2565))).chromeStoreSvg,clock:async()=>(await a.e(1837).then(a.bind(a,41837))).clockSvg,close:async()=>(await a.e(5943).then(a.bind(a,5943))).closeSvg,compass:async()=>(await a.e(2011).then(a.bind(a,92011))).compassSvg,coinPlaceholder:async()=>(await a.e(6929).then(a.bind(a,76929))).coinPlaceholderSvg,copy:async()=>(await a.e(4554).then(a.bind(a,24554))).copySvg,cursor:async()=>(await a.e(2161).then(a.bind(a,62161))).cursorSvg,cursorTransparent:async()=>(await a.e(5518).then(a.bind(a,95518))).cursorTransparentSvg,circle:async()=>(await a.e(7703).then(a.bind(a,27703))).circleSvg,desktop:async()=>(await a.e(6355).then(a.bind(a,76355))).desktopSvg,disconnect:async()=>(await a.e(4953).then(a.bind(a,94953))).disconnectSvg,discord:async()=>(await a.e(7243).then(a.bind(a,57243))).discordSvg,download:async()=>(await a.e(1067).then(a.bind(a,81067))).downloadSvg,ethereum:async()=>(await a.e(438).then(a.bind(a,10438))).ethereumSvg,etherscan:async()=>(await a.e(70).then(a.bind(a,60070))).etherscanSvg,extension:async()=>(await a.e(6618).then(a.bind(a,6618))).extensionSvg,externalLink:async()=>(await a.e(877).then(a.bind(a,60877))).externalLinkSvg,facebook:async()=>(await a.e(279).then(a.bind(a,30279))).facebookSvg,farcaster:async()=>(await a.e(5426).then(a.bind(a,15426))).farcasterSvg,filters:async()=>(await a.e(4052).then(a.bind(a,84052))).filtersSvg,github:async()=>(await a.e(1496).then(a.bind(a,11496))).githubSvg,google:async()=>(await a.e(9624).then(a.bind(a,59624))).googleSvg,helpCircle:async()=>(await a.e(6561).then(a.bind(a,88942))).helpCircleSvg,image:async()=>(await a.e(8842).then(a.bind(a,88842))).imageSvg,id:async()=>(await a.e(4778).then(a.bind(a,84778))).idSvg,infoCircle:async()=>(await a.e(4748).then(a.bind(a,84748))).infoCircleSvg,lightbulb:async()=>(await a.e(6828).then(a.bind(a,76828))).lightbulbSvg,mail:async()=>(await a.e(2688).then(a.bind(a,92688))).mailSvg,mobile:async()=>(await a.e(9385).then(a.bind(a,69385))).mobileSvg,more:async()=>(await a.e(4230).then(a.bind(a,94230))).moreSvg,networkPlaceholder:async()=>(await a.e(2901).then(a.bind(a,22901))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a.e(5410).then(a.bind(a,35410))).nftPlaceholderSvg,off:async()=>(await a.e(2658).then(a.bind(a,12658))).offSvg,playStore:async()=>(await a.e(7469).then(a.bind(a,77469))).playStoreSvg,plus:async()=>(await a.e(1035).then(a.bind(a,11035))).plusSvg,qrCode:async()=>(await a.e(2016).then(a.bind(a,72016))).qrCodeIcon,recycleHorizontal:async()=>(await a.e(4987).then(a.bind(a,84987))).recycleHorizontalSvg,refresh:async()=>(await a.e(5452).then(a.bind(a,85452))).refreshSvg,search:async()=>(await a.e(8127).then(a.bind(a,38127))).searchSvg,send:async()=>(await a.e(4725).then(a.bind(a,74725))).sendSvg,swapHorizontal:async()=>(await a.e(6780).then(a.bind(a,16780))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a.e(1975).then(a.bind(a,51975))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a.e(3967).then(a.bind(a,43967))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a.e(6188).then(a.bind(a,86188))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a.e(1538).then(a.bind(a,31538))).swapVerticalSvg,solana:async()=>(await a.e(6183).then(a.bind(a,66183))).solanaSvg,telegram:async()=>(await a.e(2692).then(a.bind(a,92692))).telegramSvg,threeDots:async()=>(await a.e(5420).then(a.bind(a,65420))).threeDotsSvg,twitch:async()=>(await a.e(4736).then(a.bind(a,54736))).twitchSvg,twitter:async()=>(await a.e(2931).then(a.bind(a,92931))).xSvg,twitterIcon:async()=>(await a.e(4477).then(a.bind(a,34477))).twitterIconSvg,user:async()=>(await a.e(7252).then(a.bind(a,57252))).userSvg,verify:async()=>(await a.e(2026).then(a.bind(a,82026))).verifySvg,verifyFilled:async()=>(await a.e(4067).then(a.bind(a,44067))).verifyFilledSvg,wallet:async()=>(await a.e(6530).then(a.bind(a,6530))).walletSvg,walletConnect:async()=>(await a.e(5806).then(a.bind(a,65806))).walletConnectSvg,walletConnectLightBrown:async()=>(await a.e(5806).then(a.bind(a,65806))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a.e(5806).then(a.bind(a,65806))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a.e(4714).then(a.bind(a,74714))).walletPlaceholderSvg,warningCircle:async()=>(await a.e(6348).then(a.bind(a,76348))).warningCircleSvg,x:async()=>(await a.e(2931).then(a.bind(a,92931))).xSvg,info:async()=>(await a.e(5823).then(a.bind(a,55823))).infoSvg,exclamationTriangle:async()=>(await a.e(5179).then(a.bind(a,95179))).exclamationTriangleSvg,reown:async()=>(await a.e(1978).then(a.bind(a,91978))).reownSvg,"x-mark":async()=>(await a.e(3481).then(a.bind(a,23481))).xMarkSvg,dollar:async()=>(await a.e(2005).then(a.bind(a,12005))).dollarSvg};let $=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,i.qy`${g(async function(t){if(v.has(t))return v.get(t);const e=(m[t]??m.copy)();return v.set(t,e),e}(this.name),i.qy`<div class="fallback"></div>`)}`}};$.styles=[p.W5,p.ck,y],f([(0,o.MZ)()],$.prototype,"size",void 0),f([(0,o.MZ)()],$.prototype,"name",void 0),f([(0,o.MZ)()],$.prototype,"color",void 0),f([(0,o.MZ)()],$.prototype,"aspectRatio",void 0),$=f([(0,b.E)("wui-icon")],$)},36887(t,e,a){var i=a(35120),o=a(54211),n=a(26109),r=a(43494);const s=i.AH`
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
`;var c=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[n.W5,n.ck,s],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,r.E)("wui-image")],l)},85999(t,e,a){var i=a(35120),o=a(54211),n=(a(32565),a(36887),a(18409),a(26109)),r=a(43494);const s=i.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var c=function(t,e,a,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,a,r):o(e,a))||r);return n>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return i.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        ${this.icon?i.qy`<wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};l.styles=[n.W5,n.fD,s],c([(0,o.MZ)()],l.prototype,"variant",void 0),c([(0,o.MZ)()],l.prototype,"imageSrc",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"text",void 0),l=c([(0,r.E)("wui-chip-button")],l)},55511(t,e,a){a.d(e,{Kq:()=>d});var i=a(31186),o=a(52894);const n=(t,e)=>{const a=t._$AN;if(void 0===a)return!1;for(const t of a)t._$AO?.(e,!1),n(t,e);return!0},r=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===a?.size)},s=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),h(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,a=0){const i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)n(i[t],!1),r(i[t]);else null!=i&&(n(i,!1),r(i));else n(this,t)}const h=t=>{t.type==o.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),r(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},31186(t,e,a){a.d(e,{Rt:()=>r,sO:()=>n});var i=a(12242);const{I:o}=i.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings}}]);