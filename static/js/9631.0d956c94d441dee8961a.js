"use strict";(globalThis.webpackChunkfront_js=globalThis.webpackChunkfront_js||[]).push([[9631],{89631(t,e,i){i.r(e),i.d(e,{W3mDepositFromExchangeView:()=>S});var o=i(12769),r=i(50832),n=i(6056),a=i(83215),s=i(31896),c=i(74496),u=i(26742),d=i(75910),l=i(42733);const p={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class h extends Error{}async function g(t,e){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${l.H.getSnapshot().projectId}&source=fund-wallet`,{sdkType:o,sdkVersion:r,projectId:n}=l.H.getSnapshot(),a={jsonrpc:"2.0",id:1,method:t,params:{...e||{},st:o,sv:r,projectId:n}},s=await fetch(i,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}),c=await s.json();if(c.error)throw new h(c.error.message);return c}function m(t,e){const{chainNamespace:i,chainId:o}=d.C.parseCaipNetworkId(t),r=p[i];if(!r)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let n=r.native.assetNamespace,a=r.native.assetReference;return"native"!==e&&(n=r.defaultTokenNamespace,a=e),`${i}:${o}/${n}:${a}`}var w=i(63450),y=i(75595),b=i(90184),v=i(21871);const x={paymentAsset:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},amount:0,tokenAmount:0,tokenPrice:null,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:""},f=(0,a.BX)(x),k={state:f,subscribe:t=>(0,a.B1)(f,()=>t(f)),subscribeKey:(t,e)=>(0,s.u$)(f,t,e),resetState(){Object.assign(f,{...x})},async fetchTokenPrice(){f.priceLoading=!0;const t=(0,c.K1)(),e=await y.T.fetchTokenPrice({addresses:[t]});f.tokenPrice=e.fungibles?.[0]?.price||null,f.priceLoading=!1},getTokenAmount(){if(!f.tokenPrice)throw new Error("Cannot get token price");const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:4}).format(f.amount/f.tokenPrice);return Number(t)},setAmount(t){f.amount=t,f.tokenPrice&&(f.tokenAmount=this.getTokenAmount())},setPaymentAsset(t){f.paymentAsset=t},async fetchExchanges(){try{f.isLoading=!0;const t=await async function(t){return(await g("reown_getExchanges",t)).result}({page:0,asset:m(f.paymentAsset.network,f.paymentAsset.asset),amount:f.amount.toString()});f.exchanges=t.exchanges.slice(0,2)}catch(t){throw v.P.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{f.isLoading=!1}},async getPayUrl(t,e){try{const i=Number(e.amount),o=await async function(t){return(await g("reown_getExchangePayUrl",t)).result}({exchangeId:t,asset:m(e.network,e.asset),amount:i.toString(),recipient:`${e.network}:${e.recipient}`});return b.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:t},source:"fund-from-exchange",headless:!1}}),o}catch(t){if(t instanceof Error&&t.message.includes("is not supported"))throw new Error("Asset not supported");throw new Error(t.message)}},async handlePayWithExchange(t){try{if(!w.U.state.address)throw new Error("No account connected");f.isPaymentInProgress=!0,f.paymentId=crypto.randomUUID(),f.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:i}=f.paymentAsset,o={network:e,asset:i,amount:f.tokenAmount,recipient:w.U.state.address},r=await this.getPayUrl(t,o);if(!r)throw new Error("Unable to initiate payment");f.currentPayment.sessionId=r.sessionId,f.currentPayment.status="IN_PROGRESS",f.currentPayment.exchangeId=t,u.w.openHref(r.url,"_blank","popup=yes,width=480,height=720,noopener,noreferrer")}catch(t){f.error="Unable to initiate payment",v.P.showError(f.error)}},async waitUntilComplete({exchangeId:t,sessionId:e,paymentId:i,retries:o=20}){const r=await this.getBuyStatus(t,e,i);if("SUCCESS"===r.status||"FAILED"===r.status)return r;if(0===o)throw new Error("Unable to get deposit status");return await new Promise(t=>{setTimeout(t,5e3)}),this.waitUntilComplete({exchangeId:t,sessionId:e,paymentId:i,retries:o-1})},async getBuyStatus(t,e,i){try{if(!f.currentPayment)throw new Error("No current payment");const o=await async function(t){return(await g("reown_getExchangeBuyStatus",t)).result}({sessionId:e,exchangeId:t});return f.currentPayment.status=o.status,"SUCCESS"!==o.status&&"FAILED"!==o.status||(f.currentPayment.result=o.txHash,f.isPaymentInProgress=!1,b.E.sendEvent({type:"track",event:"SUCCESS"===o.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:i,configuration:{network:f.paymentAsset.network,asset:f.paymentAsset.asset,recipient:w.U.state.address||"",amount:f.amount},currentPayment:{type:"exchange",exchangeId:f.currentPayment?.exchangeId,sessionId:f.currentPayment?.sessionId,result:o.txHash}}})),o}catch(t){return{status:"UNKNOWN",txHash:""}}},reset(){f.currentPayment=void 0,f.isPaymentInProgress=!1,f.paymentId="",f.paymentAsset={network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},f.amount=0,f.tokenAmount=0,f.tokenPrice=null,f.priceLoading=!1,f.error=null,f.exchanges=[],f.isLoading=!1}};var P=i(27601),I=i(78508),$=i(70148);i(58461),i(60310),i(64865),i(93516),i(26509),i(35090),i(45090);const E=o.AH`
  .amount-input-container {
    border-radius: var(--wui-border-radius-m);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-bg-100);
  }

  .container {
    background-color: var(--wui-color-bg-125);
  }
`;var A=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const j=[10,50,100];let S=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=n.W.state.activeCaipNetwork,this.exchanges=k.state.exchanges,this.isLoading=k.state.isLoading,this.amount=k.state.amount,this.tokenAmount=k.state.tokenAmount,this.priceLoading=k.state.priceLoading,this.isPaymentInProgress=k.state.isPaymentInProgress,this.currentPayment=k.state.currentPayment,this.paymentId=k.state.paymentId,this.unsubscribe.push(k.subscribe(t=>{this.exchanges=t.exchanges,this.isLoading=t.isLoading,this.amount=t.amount,this.tokenAmount=t.tokenAmount,this.priceLoading=t.priceLoading,this.paymentId=t.paymentId,this.isPaymentInProgress=t.isPaymentInProgress,this.currentPayment=t.currentPayment,t.isPaymentInProgress&&t.currentPayment?.exchangeId&&t.currentPayment?.sessionId&&t.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),k.reset()}firstUpdated(){k.fetchExchanges(),k.fetchTokenPrice()}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        gap="xs"
        .padding=${["xs","s","s","s"]}
        class="exchanges-container"
      >
        ${this.exchanges.map(t=>o.qy`<wui-list-item
              @click=${()=>this.onExchangeClick(t)}
              chevron
              variant="image"
              imageSrc=${t.imageUrl}
              ?loading=${this.isLoading}
              ?disabled=${!this.amount}
            >
              <wui-text variant="paragraph-500" color="fg-200">
                Deposit from ${t.name}
              </wui-text>
            </wui-list-item>`)}
      </wui-flex>
    `}amountInputTemplate(){return o.qy`
      <wui-flex flexDirection="column" gap="s" .padding=${["0","s","s","s"]} class="amount-input-container">
        <wui-flex justifyContent="space-between">
          <wui-text variant="paragraph-500" color="fg-200">Asset</wui-text>
          <wui-chip-button
            data-testid="deposit-from-exchange-asset-button"
            text=${this.network?.nativeCurrency.symbol||""}
            imageSrc=${P.$.getNetworkImage(this.network)}
            size="sm"
            variant="gray"
            icon=${null}
          ></wui-chip-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="4xs">
            <wui-text variant="2xl-500" color="fg-200">${this.amount}</wui-text>
            <wui-text variant="paragraph-500" color="fg-200">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="xs">
            ${j.map(t=>o.qy`<wui-button @click=${()=>this.onPresetAmountClick(t)} variant=${this.amount===t?"accent":"shade"} size="sm" fullWidth>$${t}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?o.qy`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:o.qy`
      <wui-text variant="paragraph-500" color="fg-200">
        ${this.tokenAmount} ${this.network?.nativeCurrency.symbol}
      </wui-text>
    `}async onExchangeClick(t){this.amount&&await k.handlePayWithExchange(t.id)}handlePaymentInProgress(){this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(v.P.showLoading("Deposit in progress..."),I.I.replace("Account"),k.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?v.P.showSuccess("Deposit completed"):"FAILED"===t.status&&v.P.showError("Deposit failed")}))}onPresetAmountClick(t){k.setAmount(t)}};S.styles=E,A([(0,r.wk)()],S.prototype,"network",void 0),A([(0,r.wk)()],S.prototype,"exchanges",void 0),A([(0,r.wk)()],S.prototype,"isLoading",void 0),A([(0,r.wk)()],S.prototype,"amount",void 0),A([(0,r.wk)()],S.prototype,"tokenAmount",void 0),A([(0,r.wk)()],S.prototype,"priceLoading",void 0),A([(0,r.wk)()],S.prototype,"isPaymentInProgress",void 0),A([(0,r.wk)()],S.prototype,"currentPayment",void 0),A([(0,r.wk)()],S.prototype,"paymentId",void 0),S=A([(0,$.EM)("w3m-deposit-from-exchange-view")],S)},64865(t,e,i){i(7068)},93516(t,e,i){i(36887)},26509(t,e,i){var o=i(35120),r=i(54211),n=i(43121),a=(i(32565),i(36887),i(20880),i(18409),i(69807),i(26109)),s=i(43494);i(12851);const c=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var u=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return o.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,n.J)(this.iconVariant)}
        tabindex=${(0,n.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return o.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return o.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:o.qy``}chevronTemplate(){return this.chevron?o.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};d.styles=[a.W5,a.fD,c],u([(0,r.MZ)()],d.prototype,"icon",void 0),u([(0,r.MZ)()],d.prototype,"iconSize",void 0),u([(0,r.MZ)()],d.prototype,"tabIdx",void 0),u([(0,r.MZ)()],d.prototype,"variant",void 0),u([(0,r.MZ)()],d.prototype,"iconVariant",void 0),u([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,r.MZ)()],d.prototype,"imageSrc",void 0),u([(0,r.MZ)()],d.prototype,"alt",void 0),u([(0,r.MZ)({type:Boolean})],d.prototype,"chevron",void 0),u([(0,r.MZ)({type:Boolean})],d.prototype,"loading",void 0),d=u([(0,s.E)("wui-list-item")],d)},35090(t,e,i){i(41497)},36887(t,e,i){var o=i(35120),r=i(54211),n=i(26109),a=i(43494);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};u.styles=[n.W5,n.ck,s],c([(0,r.MZ)()],u.prototype,"src",void 0),c([(0,r.MZ)()],u.prototype,"alt",void 0),c([(0,r.MZ)()],u.prototype,"size",void 0),c([(0,r.MZ)()],u.prototype,"objectFit",void 0),u=c([(0,a.E)("wui-image")],u)},41497(t,e,i){var o=i(35120),r=i(54211),n=i(43494);const a=o.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var s=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,o.qy`<slot></slot>`}};c.styles=[a],s([(0,r.MZ)()],c.prototype,"width",void 0),s([(0,r.MZ)()],c.prototype,"height",void 0),s([(0,r.MZ)()],c.prototype,"borderRadius",void 0),s([(0,r.MZ)()],c.prototype,"variant",void 0),c=s([(0,n.E)("wui-shimmer")],c)},7068(t,e,i){var o=i(35120),r=i(54211),n=(i(32565),i(26109)),a=i(43494);const s=o.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let t="",e="";switch(this.size){case"lg":t="--wui-border-radius-xs",e="--wui-spacing-1xs";break;case"sm":t="--wui-border-radius-3xs",e="--wui-spacing-xxs";break;default:t="--wui-border-radius-xxs",e="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n    `,o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};u.styles=[n.W5,n.fD,n.ck,s],c([(0,r.MZ)()],u.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.MZ)()],u.prototype,"icon",void 0),c([(0,r.MZ)()],u.prototype,"iconColor",void 0),u=c([(0,a.E)("wui-icon-link")],u)}}]);