/*! For license information please see 124.5dd28ad928909aeffd29.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfront_js=globalThis.webpackChunkfront_js||[]).push([[124],{80124(e,t,i){i.r(t),i.d(t,{AppKitModal:()=>se,W3mModal:()=>re,W3mModalBase:()=>ne});var o=i(12769),a=i(50832),n=i(75880),r=i(75910),s=i(24376),c=i(42733),l=i(96396),d=i(6056),h=i(36010),w=i(88249),p=i(31211),u=i(78508),g=i(1122);const b={isUnsupportedChainView:()=>"UnsupportedChain"===u.I.state.view||"SwitchNetwork"===u.I.state.view&&u.I.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await g.U.isSIWXCloseDisabled()?l.W.shake():("DataCapture"!==u.I.state.view&&"DataCaptureOtpConfirm"!==u.I.state.view||p.x.disconnect(),l.W.close())}};var v=i(68996),y=i(21871),m=i(26742),f=i(80171),k=i(70148),x=i(35120),C=i(26109),S=i(43494);const $=x.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;let W=class extends x.WF{render(){return x.qy`<slot></slot>`}};W.styles=[C.W5,$],W=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,S.E)("wui-card")],W),i(60310);var A=i(71655),I=i(54211);i(32565),i(18409),i(69807);const N=x.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var P=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let T=class extends x.WF{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,x.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){A.h.close()}};T.styles=[C.W5,N],P([(0,I.MZ)()],T.prototype,"message",void 0),P([(0,I.MZ)()],T.prototype,"backgroundColor",void 0),P([(0,I.MZ)()],T.prototype,"iconColor",void 0),P([(0,I.MZ)()],T.prototype,"icon",void 0),T=P([(0,S.E)("wui-alertbar")],T);const R=o.AH`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var E=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const O={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let z=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=A.h.state.open,this.onOpen(!0),this.unsubscribe.push(A.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=A.h.state,i=O[t];return o.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};z.styles=R,E([(0,a.wk)()],z.prototype,"open",void 0),z=E([(0,k.EM)("w3m-alertbar")],z);var _=i(63450),B=i(27601),M=i(73337),j=i(90184);i(64865),i(36887),i(12851);const H=x.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var D=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let q=class extends x.WF{constructor(){super(...arguments),this.imageSrc=""}render(){return x.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?x.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:x.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};q.styles=[C.W5,C.fD,C.ck,H],D([(0,I.MZ)()],q.prototype,"imageSrc",void 0),q=D([(0,S.E)("wui-select")],q),i(38253),i(45090);var L=i(41482);const Z=o.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var K=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const U=["SmartSessionList"];function F(){const e=u.I.state.data?.connector?.name,t=u.I.state.data?.wallet?.name,i=u.I.state.data?.network?.name,o=t??e,a=h.a.getConnectors();return{Connect:`Connect ${1===a.length&&"w3m-email"===a[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:_.U.state.socialProvider?_.U.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund wallet",PayWithExchange:"Deposit from an exchange"}}let Y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.heading=F()[u.I.state.view],this.network=d.W.state.activeCaipNetwork,this.networkImage=B.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.I.state.view,this.viewDirection="",this.headerText=F()[u.I.state.view],this.unsubscribe.push(M.j.subscribeNetworkImages(()=>{this.networkImage=B.$.getNetworkImage(this.network)}),u.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=F()[e]},L.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),d.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=B.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){j.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.I.push("WhatIsAWallet")}async onClose(){await b.safeClose()}rightHeaderTemplate(){const e=c.H?.state?.features?.smartSessions;return"Account"===u.I.state.view&&e?o.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>u.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.qy`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=U.includes(this.view);return o.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?o.qy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.I.state,t="Connect"===e,i=c.H.state.enableEmbedded,a="ApproveTransaction"===e,r="ConnectingSiwe"===e,s="Account"===e,l=c.H.state.enableNetworkSwitch,d=a||r||t&&i;return s&&l?o.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,n.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,n.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.qy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(j.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.I.push("Networks"))}isAllowedNetworkSwitch(){const e=d.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=u.I.state;let t=L.o.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=L.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=u.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.I.goBack()}};Y.styles=Z,K([(0,a.wk)()],Y.prototype,"heading",void 0),K([(0,a.wk)()],Y.prototype,"network",void 0),K([(0,a.wk)()],Y.prototype,"networkImage",void 0),K([(0,a.wk)()],Y.prototype,"showBack",void 0),K([(0,a.wk)()],Y.prototype,"prevHistoryLength",void 0),K([(0,a.wk)()],Y.prototype,"view",void 0),K([(0,a.wk)()],Y.prototype,"viewDirection",void 0),K([(0,a.wk)()],Y.prototype,"headerText",void 0),Y=K([(0,k.EM)("w3m-header")],Y),i(20880);const V=x.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var X=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let G=class extends x.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return x.qy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?x.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?x.qy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:x.qy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};G.styles=[C.W5,V],X([(0,I.MZ)()],G.prototype,"backgroundColor",void 0),X([(0,I.MZ)()],G.prototype,"iconColor",void 0),X([(0,I.MZ)()],G.prototype,"icon",void 0),X([(0,I.MZ)()],G.prototype,"message",void 0),X([(0,I.MZ)()],G.prototype,"loading",void 0),X([(0,I.MZ)()],G.prototype,"iconType",void 0),G=X([(0,S.E)("wui-snackbar")],G);const J=o.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Q=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const ee={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let te=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=y.P.state.open,this.unsubscribe.push(y.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:i}=y.P.state,a=ee[t],{icon:n,iconColor:r}=i??a??{};return o.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${a?.backgroundColor}
        iconColor=${r}
        icon=${n}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),y.P.state.autoClose&&(this.timeout=setTimeout(()=>y.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};te.styles=J,Q([(0,a.wk)()],te.prototype,"open",void 0),te=Q([(0,k.EM)("w3m-snackbar")],te),i(56090),i(5105);const ie=o.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var oe=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const ae="scroll-lock";class ne extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=c.H.state.enableEmbedded,this.open=l.W.state.open,this.caipAddress=d.W.state.activeCaipAddress,this.caipNetwork=d.W.state.activeCaipNetwork,this.shake=l.W.state.shake,this.filterByNamespace=h.a.state.filterByNamespace,this.initializeTheming(),w.N.prefetchAnalyticsConfig(),this.unsubscribe.push(l.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),l.W.subscribeKey("shake",e=>this.shake=e),d.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),d.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),c.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),h.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||d.W.getAccountData(e)?.caipAddress||(w.N.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return l.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?o.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,n.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await b.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=v.W.state,i=k.Zv.getColorTheme(t);(0,k.RF)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),y.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=ae,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${ae}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=d.W.state.isSwitchingNamespace,i="ProfileWallets"===u.I.state.view;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:i}):t||this.enableEmbedded||i||l.W.close(),await g.U.initializeIfEnabled(e),this.caipAddress=e,d.W.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;const{chainNamespace:t,chainId:i,address:o}=r.C.parseCaipAddress(e.caipAddress),a=`${t}:${i}`,n=!m.w.getPlainAddress(this.caipAddress),s=await g.U.getSessions({address:o,caipNetworkId:a}),c=!g.U.getSIWX()||s.some(e=>e.data.accountAddress===o),d=e.isSwitchingNamespace&&c&&!this.enableEmbedded,h=this.enableEmbedded&&n;d?u.I.goBack():h&&l.W.close()}onNewNetwork(e){const t=this.caipNetwork,i=t?.caipNetworkId?.toString(),o=t?.chainNamespace,a=e?.caipNetworkId?.toString(),n=e?.chainNamespace,r=i!==a,c=r&&!(o!==n),h=t?.name===s.o.UNSUPPORTED_NETWORK_NAME,w="ConnectingExternal"===u.I.state.view,p="ProfileWallets"===u.I.state.view,g=!d.W.getAccountData(e?.chainNamespace)?.caipAddress,b="UnsupportedChain"===u.I.state.view,v=l.W.state.open;let y=!1;this.enableEmbedded&&"SwitchNetwork"===u.I.state.view&&(y=!0),r&&f.GN.resetState(),!v||w||p||(g?r&&(y=!0):(b||c&&!h)&&(y=!0)),y&&"SIWXSignMessage"!==u.I.state.view&&u.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(w.N.prefetch(),w.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ne.styles=ie,oe([(0,a.MZ)({type:Boolean})],ne.prototype,"enableEmbedded",void 0),oe([(0,a.wk)()],ne.prototype,"open",void 0),oe([(0,a.wk)()],ne.prototype,"caipAddress",void 0),oe([(0,a.wk)()],ne.prototype,"caipNetwork",void 0),oe([(0,a.wk)()],ne.prototype,"shake",void 0),oe([(0,a.wk)()],ne.prototype,"filterByNamespace",void 0);let re=class extends ne{};re=oe([(0,k.EM)("w3m-modal")],re);let se=class extends ne{};se=oe([(0,k.EM)("appkit-modal")],se)},75880(e,t,i){i.d(t,{J:()=>a});var o=i(50253);const a=e=>e??o.s6},32565(e,t,i){var o=i(35120),a=i(54211),n=i(12242),r=i(31186),s=i(55511);class c{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class l{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var d=i(52894);const h=e=>!(0,r.sO)(e)&&"function"==typeof e.then,w=1073741823;class p extends s.Kq{constructor(){super(...arguments),this._$Cwt=w,this._$Cbt=[],this._$CK=new c(this),this._$CX=new l}render(...e){return e.find(e=>!h(e))??n.c0}update(e,t){const i=this._$Cbt;let o=i.length;this._$Cbt=t;const a=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const n=t[e];if(!h(n))return this._$Cwt=e,n;e<o&&n===i[e]||(this._$Cwt=w,o=0,Promise.resolve(n).then(async e=>{for(;r.get();)await r.get();const t=a.deref();if(void 0!==t){const i=t._$Cbt.indexOf(n);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return n.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const u=(0,d.u$)(p),g=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var b=i(26109),v=i(43494);const y=o.AH`
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
`;var m=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const f={add:async()=>(await i.e(1476).then(i.bind(i,61476))).addSvg,allWallets:async()=>(await i.e(3723).then(i.bind(i,76104))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(6717).then(i.bind(i,16717))).arrowBottomCircleSvg,appStore:async()=>(await i.e(9236).then(i.bind(i,89236))).appStoreSvg,apple:async()=>(await i.e(1979).then(i.bind(i,41979))).appleSvg,arrowBottom:async()=>(await i.e(5776).then(i.bind(i,35776))).arrowBottomSvg,arrowLeft:async()=>(await i.e(6426).then(i.bind(i,6426))).arrowLeftSvg,arrowRight:async()=>(await i.e(5133).then(i.bind(i,35133))).arrowRightSvg,arrowTop:async()=>(await i.e(6040).then(i.bind(i,56040))).arrowTopSvg,bank:async()=>(await i.e(261).then(i.bind(i,80261))).bankSvg,browser:async()=>(await i.e(787).then(i.bind(i,50787))).browserSvg,bin:async()=>(await i.e(6958).then(i.bind(i,6958))).binSvg,bitcoin:async()=>(await i.e(7861).then(i.bind(i,37861))).bitcoinSvg,card:async()=>(await i.e(1029).then(i.bind(i,71029))).cardSvg,checkmark:async()=>(await i.e(9390).then(i.bind(i,79390))).checkmarkSvg,checkmarkBold:async()=>(await i.e(1824).then(i.bind(i,31824))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(5214).then(i.bind(i,42833))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5664).then(i.bind(i,45664))).chevronLeftSvg,chevronRight:async()=>(await i.e(2387).then(i.bind(i,72387))).chevronRightSvg,chevronTop:async()=>(await i.e(9146).then(i.bind(i,39146))).chevronTopSvg,chromeStore:async()=>(await i.e(2565).then(i.bind(i,2565))).chromeStoreSvg,clock:async()=>(await i.e(1837).then(i.bind(i,41837))).clockSvg,close:async()=>(await i.e(5943).then(i.bind(i,5943))).closeSvg,compass:async()=>(await i.e(2011).then(i.bind(i,92011))).compassSvg,coinPlaceholder:async()=>(await i.e(6929).then(i.bind(i,76929))).coinPlaceholderSvg,copy:async()=>(await i.e(4554).then(i.bind(i,24554))).copySvg,cursor:async()=>(await i.e(2161).then(i.bind(i,62161))).cursorSvg,cursorTransparent:async()=>(await i.e(5518).then(i.bind(i,95518))).cursorTransparentSvg,circle:async()=>(await i.e(7703).then(i.bind(i,27703))).circleSvg,desktop:async()=>(await i.e(6355).then(i.bind(i,76355))).desktopSvg,disconnect:async()=>(await i.e(4953).then(i.bind(i,94953))).disconnectSvg,discord:async()=>(await i.e(7243).then(i.bind(i,57243))).discordSvg,download:async()=>(await i.e(1067).then(i.bind(i,81067))).downloadSvg,ethereum:async()=>(await i.e(438).then(i.bind(i,10438))).ethereumSvg,etherscan:async()=>(await i.e(70).then(i.bind(i,60070))).etherscanSvg,extension:async()=>(await i.e(6618).then(i.bind(i,6618))).extensionSvg,externalLink:async()=>(await i.e(877).then(i.bind(i,60877))).externalLinkSvg,facebook:async()=>(await i.e(279).then(i.bind(i,30279))).facebookSvg,farcaster:async()=>(await i.e(5426).then(i.bind(i,15426))).farcasterSvg,filters:async()=>(await i.e(4052).then(i.bind(i,84052))).filtersSvg,github:async()=>(await i.e(1496).then(i.bind(i,11496))).githubSvg,google:async()=>(await i.e(9624).then(i.bind(i,59624))).googleSvg,helpCircle:async()=>(await i.e(6561).then(i.bind(i,88942))).helpCircleSvg,image:async()=>(await i.e(8842).then(i.bind(i,88842))).imageSvg,id:async()=>(await i.e(4778).then(i.bind(i,84778))).idSvg,infoCircle:async()=>(await i.e(4748).then(i.bind(i,84748))).infoCircleSvg,lightbulb:async()=>(await i.e(6828).then(i.bind(i,76828))).lightbulbSvg,mail:async()=>(await i.e(2688).then(i.bind(i,92688))).mailSvg,mobile:async()=>(await i.e(9385).then(i.bind(i,69385))).mobileSvg,more:async()=>(await i.e(4230).then(i.bind(i,94230))).moreSvg,networkPlaceholder:async()=>(await i.e(2901).then(i.bind(i,22901))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(5410).then(i.bind(i,35410))).nftPlaceholderSvg,off:async()=>(await i.e(2658).then(i.bind(i,12658))).offSvg,playStore:async()=>(await i.e(7469).then(i.bind(i,77469))).playStoreSvg,plus:async()=>(await i.e(1035).then(i.bind(i,11035))).plusSvg,qrCode:async()=>(await i.e(2016).then(i.bind(i,72016))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(4987).then(i.bind(i,84987))).recycleHorizontalSvg,refresh:async()=>(await i.e(5452).then(i.bind(i,85452))).refreshSvg,search:async()=>(await i.e(8127).then(i.bind(i,38127))).searchSvg,send:async()=>(await i.e(4725).then(i.bind(i,74725))).sendSvg,swapHorizontal:async()=>(await i.e(6780).then(i.bind(i,16780))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(1975).then(i.bind(i,51975))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(3967).then(i.bind(i,43967))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(6188).then(i.bind(i,86188))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(1538).then(i.bind(i,31538))).swapVerticalSvg,solana:async()=>(await i.e(6183).then(i.bind(i,66183))).solanaSvg,telegram:async()=>(await i.e(2692).then(i.bind(i,92692))).telegramSvg,threeDots:async()=>(await i.e(5420).then(i.bind(i,65420))).threeDotsSvg,twitch:async()=>(await i.e(4736).then(i.bind(i,54736))).twitchSvg,twitter:async()=>(await i.e(2931).then(i.bind(i,92931))).xSvg,twitterIcon:async()=>(await i.e(4477).then(i.bind(i,34477))).twitterIconSvg,user:async()=>(await i.e(7252).then(i.bind(i,57252))).userSvg,verify:async()=>(await i.e(2026).then(i.bind(i,82026))).verifySvg,verifyFilled:async()=>(await i.e(4067).then(i.bind(i,44067))).verifyFilledSvg,wallet:async()=>(await i.e(6530).then(i.bind(i,6530))).walletSvg,walletConnect:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(5806).then(i.bind(i,65806))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(4714).then(i.bind(i,74714))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(6348).then(i.bind(i,76348))).warningCircleSvg,x:async()=>(await i.e(2931).then(i.bind(i,92931))).xSvg,info:async()=>(await i.e(5823).then(i.bind(i,55823))).infoSvg,exclamationTriangle:async()=>(await i.e(5179).then(i.bind(i,95179))).exclamationTriangleSvg,reown:async()=>(await i.e(1978).then(i.bind(i,91978))).reownSvg,"x-mark":async()=>(await i.e(3481).then(i.bind(i,23481))).xMarkSvg,dollar:async()=>(await i.e(2005).then(i.bind(i,12005))).dollarSvg};let k=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${u(async function(e){if(g.has(e))return g.get(e);const t=(f[e]??f.copy)();return g.set(e,t),t}(this.name),o.qy`<div class="fallback"></div>`)}`}};k.styles=[b.W5,b.ck,y],m([(0,a.MZ)()],k.prototype,"size",void 0),m([(0,a.MZ)()],k.prototype,"name",void 0),m([(0,a.MZ)()],k.prototype,"color",void 0),m([(0,a.MZ)()],k.prototype,"aspectRatio",void 0),k=m([(0,v.E)("wui-icon")],k)},20880(e,t,i){var o=i(35120),a=i(54211),n=i(26109),r=i(43494);const s=o.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let l=class extends o.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[n.W5,s],c([(0,a.MZ)()],l.prototype,"color",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-loading-spinner")],l)},12851(e,t,i){var o=i(35120),a=i(54211),n=(i(32565),i(26109)),r=i(43494);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,a=t?"12%":"16%",n=t?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[n.W5,n.fD,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),c([(0,a.MZ)()],l.prototype,"iconSize",void 0),c([(0,a.MZ)()],l.prototype,"background",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,a.MZ)()],l.prototype,"borderColor",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},55511(e,t,i){i.d(t,{Kq:()=>h});var o=i(31186),a=i(52894);const n=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),n(e,t);return!0},r=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},s=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),d(t)}};function c(e){void 0!==this._$AN?(r(this),this._$AM=e,s(this)):this._$AM=e}function l(e,t=!1,i=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)n(o[e],!1),r(o[e]);else null!=o&&(n(o,!1),r(o));else n(this,e)}const d=e=>{e.type==a.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class h extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(n(this,e),r(this))}setValue(e){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},31186(e,t,i){i.d(t,{Rt:()=>r,sO:()=>n});var o=i(12242);const{I:a}=o.ge,n=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings}}]);