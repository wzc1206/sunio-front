/*! For license information please see 3875.8b0d777f6804e8e2d682.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfront_js=globalThis.webpackChunkfront_js||[]).push([[3875],{3875(t,e,i){i.r(e),i.d(e,{W3mPayLoadingView:()=>Pe,W3mPayView:()=>be,arbitrumUSDC:()=>je,arbitrumUSDT:()=>qe,baseETH:()=>Ue,baseSepoliaETH:()=>Re,baseUSDC:()=>Oe,ethereumUSDC:()=>ze,ethereumUSDT:()=>Le,getExchanges:()=>ke,getIsPaymentInProgress:()=>Ne,getPayError:()=>Te,getPayResult:()=>Ie,openPay:()=>_e,optimismUSDC:()=>De,optimismUSDT:()=>Ze,pay:()=>Ce,polygonUSDC:()=>We,polygonUSDT:()=>Be,solanaSOL:()=>Fe,solanaUSDC:()=>He,solanaUSDT:()=>Ve});const n=globalThis,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}}const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,r)},l=(t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=n.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:u,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:m}=Object,f=globalThis,y=f.trustedTypes,v=y?y.emptyScript:"",b=f.reactiveElementPolyfillSupport,x=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},A=(t,e)=>!u(t,e),E={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&d(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??E}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...g(t),...w(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=n;const r=s.fromAttribute(e,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const r=this.constructor;if(!1===n&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??A)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,b?.({ReactiveElement:S}),(f.reactiveElementVersions??=[]).push("2.1.2");const P=globalThis,_=t=>t,C=P.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,I="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+T,M=`<${N}>`,U=document,O=()=>U.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,D="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,H=/>/g,L=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,q=/"/g,B=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=V(1),G=(V(2),V(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),K=new WeakMap,J=U.createTreeWalker(U,129);function X(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,n=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=j;for(let e=0;e<i;e++){const i=t[e];let o,c,l=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===j?"!--"===c[1]?a=W:void 0!==c[1]?a=H:void 0!==c[2]?(B.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=L):void 0!==c[3]&&(a=L):a===L?">"===c[0]?(a=s??j,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?L:'"'===c[3]?q:Z):a===q||a===Z?a=L:a===W||a===H?a=j:(a=L,s=void 0);const u=a===L&&t[e+1].startsWith("/>")?" ":"";r+=a===j?i+M:l>=0?(n.push(o),i.slice(0,l)+I+i.slice(l)+T+u):i+T+(-2===l?e:u)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class tt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const a=t.length-1,o=this.parts,[c,l]=Q(t,e);if(this.el=tt.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=J.nextNode())&&o.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(I)){const e=l[r++],i=n.getAttribute(t).split(T),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?rt:"?"===a[1]?at:"@"===a[1]?ot:st}),n.removeAttribute(t)}else t.startsWith(T)&&(o.push({type:6,index:s}),n.removeAttribute(t));if(B.test(n.tagName)){const t=n.textContent.split(T),e=t.length-1;if(e>0){n.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],O()),J.nextNode(),o.push({type:2,index:++s});n.append(t[e],O())}}}else if(8===n.nodeType)if(n.data===N)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(T,t+1));)o.push({type:7,index:s}),t+=T.length-1}s++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,n){if(e===G)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const r=R(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=et(t,s._$AS(t,e.values),s,n)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??U).importNode(e,!0);J.currentNode=n;let s=J.nextNode(),r=0,a=0,o=i[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new nt(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new ct(s,this,t)),this._$AV.push(e),o=i[++a]}r!==o?.index&&(s=J.nextNode(),r++)}return J.currentNode=U,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),R(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tt.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new it(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new tt(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new nt(this.O(O()),this.O(O()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=_(t).nextSibling;_(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(void 0===s)t=et(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const n=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=et(this,n[i+a],e,a),o===G&&(o=this._$AH[a]),r||=!R(o)||o!==this._$AH[a],o===Y?t=Y:t!==Y&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}r&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class at extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class ot extends st{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??Y)===G)return;const i=this._$AH,n=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Y&&(i===Y||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const lt=P.litHtmlPolyfillSupport;lt?.(tt,nt),(P.litHtmlVersions??=[]).push("3.3.2");const ht=globalThis;class ut extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new nt(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ut._$litElement$=!0,ut.finalized=!0,ht.litElementHydrateSupport?.({LitElement:ut});const dt=ht.litElementPolyfillSupport;dt?.({LitElement:ut}),(ht.litElementVersions??=[]).push("4.2.2");const pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:A},gt=(t=pt,e,i)=>{const{kind:n,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};function wt(t){return function(t){return(e,i)=>"object"==typeof i?gt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}const mt=t=>t??Y;var ft=i(63450),yt=i(6056),vt=i(96396),bt=i(26742),xt=i(21871),$t=i(31211),At=i(70148);i(58461),i(60310),i(51636),i(84293),i(64865),i(93516),i(26509),i(93373),i(52619),i(55618),i(45090),i(41684),Symbol();const Et=Symbol(),St=Object.getPrototypeOf,Pt=new WeakMap,_t=t=>"object"==typeof t&&null!==t,Ct=new WeakMap,kt=new WeakSet,It=new WeakMap,Tt=[1,1],Nt=new WeakMap;let Mt=Object.is,Ut=(t,e,i,n)=>({deleteProperty(t,e){const s=Reflect.get(t,e);i(e);const r=Reflect.deleteProperty(t,e);return r&&n(["delete",[e],s]),r},set(s,r,a,o){const c=!t()&&Reflect.has(s,r),l=Reflect.get(s,r,o);if(c&&(Mt(l,a)||Nt.has(a)&&Mt(l,Nt.get(a))))return!0;var h;i(r),_t(a)&&(a=(t=>t&&(Pt.has(t)?Pt.get(t):St(t)===Object.prototype||St(t)===Array.prototype))(h=a)&&h[Et]||a);const u=!Ct.has(a)&&(t=>_t(t)&&!kt.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)&&!(t instanceof Promise))(a)?Ot(a):a;return e(r,u),Reflect.set(s,r,u,o),n(["set",[r],a,l]),!0}});function Ot(t={}){if(!_t(t))throw new Error("object required");const e=Nt.get(t);if(e)return e;let i=Tt[0];const n=new Set,s=(t,e=++Tt[0])=>{i!==e&&(i=e,n.forEach(i=>i(t,e)))};let r=Tt[1];const a=t=>(e,i)=>{const n=[...e];n[1]=[t,...n[1]],s(n,i)},o=new Map;let c=!0;const l=Ut(()=>c,(t,e)=>{const i=!kt.has(e)&&Ct.get(e);if(i){if(o.has(t))throw new Error("prop listener already exists");if(n.size){const e=i[2](a(t));o.set(t,[i,e])}else o.set(t,[i])}},t=>{var e;const i=o.get(t);i&&(o.delete(t),null==(e=i[1])||e.call(i))},s),h=((t,e)=>new Proxy(t,e))(t,l);Nt.set(t,h);const u=[t,(t=++Tt[1])=>(r===t||n.size||(r=t,o.forEach(([e])=>{const n=e[1](t);n>i&&(i=n)})),i),t=>(n.add(t),1===n.size&&o.forEach(([t,e],i)=>{if(e)throw new Error("remove already exists");const n=t[2](a(i));o.set(i,[t,n])}),()=>{n.delete(t),0===n.size&&o.forEach(([t,e],i)=>{e&&(e(),o.set(i,[t]))})})];return Ct.set(h,u),Reflect.ownKeys(t).forEach(e=>{const i=Object.getOwnPropertyDescriptor(t,e);"value"in i&&i.writable&&(h[e]=t[e])}),c=!1,h}function Rt(t,e,i){const n=Ct.get(t);let s;n||console.warn("Please use proxy object");const r=[],a=n[2];let o=!1;const c=a(t=>{r.push(t),i?e(r.splice(0)):s||(s=Promise.resolve().then(()=>{s=void 0,o&&e(r.splice(0))}))});return o=!0,()=>{o=!1,c()}}function zt(){return{proxyStateMap:Ct,refSet:kt,snapCache:It,versionHolder:Tt,proxyCache:Nt}}Symbol();const{proxyStateMap:Dt,snapCache:jt}=zt(),{proxyStateMap:Wt,snapCache:Ht}=zt();var Lt=i(24376),Zt=i(75910),qt=i(90184),Bt=i(78508),Vt=i(86807);const Ft="INVALID_PAYMENT_CONFIG",Gt="INVALID_RECIPIENT",Yt="INVALID_ASSET",Kt="INVALID_AMOUNT",Jt="UNKNOWN_ERROR",Xt="UNABLE_TO_INITIATE_PAYMENT",Qt="INVALID_CHAIN_NAMESPACE",te="GENERIC_PAYMENT_ERROR",ee="UNABLE_TO_GET_EXCHANGES",ie="ASSET_NOT_SUPPORTED",ne="UNABLE_TO_GET_PAY_URL",se="UNABLE_TO_GET_BUY_STATUS",re={[Ft]:"Invalid payment configuration",[Gt]:"Invalid recipient address",[Yt]:"Invalid asset specified",[Kt]:"Invalid payment amount",[Jt]:"Unknown payment error occurred",[Xt]:"Unable to initiate payment",[Qt]:"Invalid chain namespace",[te]:"Unable to process payment",[ee]:"Unable to get exchanges",[ie]:"Asset not supported by the selected exchange",[ne]:"Unable to get payment URL",[se]:"Unable to get buy status"};class ae extends Error{get message(){return re[this.code]}constructor(t,e){super(re[t]),this.name="AppKitPayError",this.code=t,this.details=e,Error.captureStackTrace&&Error.captureStackTrace(this,ae)}}var oe=i(42733);class ce extends Error{}async function le(t,e){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${oe.H.getSnapshot().projectId}`,{sdkType:n,sdkVersion:s,projectId:r}=oe.H.getSnapshot(),a={jsonrpc:"2.0",id:1,method:t,params:{...e||{},st:n,sv:s,projectId:r}},o=await fetch(i,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}),c=await o.json();if(c.error)throw new ce(c.error.message);return c}async function he(t){return(await le("reown_getExchanges",t)).result}const ue=["eip155","solana"],de={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function pe(t,e){const{chainNamespace:i,chainId:n}=Zt.C.parseCaipNetworkId(t),s=de[i];if(!s)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let r=s.native.assetNamespace,a=s.native.assetReference;return"native"!==e&&(r=s.defaultTokenNamespace,a=e),`${i}:${n}/${r}:${a}`}var ge=i(36210);const we="unknown",me=Ot({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),fe={state:me,subscribe:t=>Rt(me,()=>t(me)),subscribeKey:(t,e)=>function(t,e,i){let n=t[e];return Rt(t,()=>{const s=t[e];Object.is(n,s)||i(n=s)},void 0)}(me,t,e),async handleOpenPay(t){this.resetState(),this.setPaymentConfig(t),this.subscribeEvents(),this.initializeAnalytics(),me.isConfigured=!0,qt.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:me.exchanges,configuration:{network:me.paymentAsset.network,asset:me.paymentAsset.asset,recipient:me.recipient,amount:me.amount}}}),await vt.W.open({view:"Pay"})},resetState(){me.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},me.recipient="0x0",me.amount=0,me.isConfigured=!1,me.error=null,me.isPaymentInProgress=!1,me.isLoading=!1,me.currentPayment=void 0},setPaymentConfig(t){if(!t.paymentAsset)throw new ae(Ft);try{me.paymentAsset=t.paymentAsset,me.recipient=t.recipient,me.amount=t.amount,me.openInNewTab=t.openInNewTab??!0,me.redirectUrl=t.redirectUrl,me.payWithExchange=t.payWithExchange,me.error=null}catch(t){throw new ae(Ft,t.message)}},getPaymentAsset:()=>me.paymentAsset,getExchanges:()=>me.exchanges,async fetchExchanges(){try{me.isLoading=!0;const t=await he({page:0,asset:pe(me.paymentAsset.network,me.paymentAsset.asset),amount:me.amount.toString()});me.exchanges=t.exchanges.slice(0,2)}catch(t){throw xt.P.showError(re.UNABLE_TO_GET_EXCHANGES),new ae(ee)}finally{me.isLoading=!1}},async getAvailableExchanges(t){try{const e=t?.asset&&t?.network?pe(t.network,t.asset):void 0;return await he({page:t?.page??0,asset:e,amount:t?.amount?.toString()})}catch(t){throw new ae(ee)}},async getPayUrl(t,e,i=!1){try{const n=Number(e.amount),s=await async function(t){return(await le("reown_getExchangePayUrl",t)).result}({exchangeId:t,asset:pe(e.network,e.asset),amount:n.toString(),recipient:`${e.network}:${e.recipient}`});return qt.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:t},headless:i}}),i&&(this.initiatePayment(),qt.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:me.paymentId||we,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:t}}})),s}catch(t){if(t instanceof Error&&t.message.includes("is not supported"))throw new ae(ie);throw new Error(t.message)}},async openPayUrl(t,e,i=!1){try{const n=await this.getPayUrl(t.exchangeId,e,i);if(!n)throw new ae(ne);const s=t.openInNewTab??1?"_blank":"_self";return bt.w.openHref(n.url,s),n}catch(t){throw me.error=t instanceof ae?t.message:re.GENERIC_PAYMENT_ERROR,new ae(ne)}},subscribeEvents(){me.isConfigured||($t.x.subscribeKey("connections",t=>{t.size>0&&this.handlePayment()}),ft.U.subscribeKey("caipAddress",t=>{const e=$t.x.hasAnyConnection(Lt.o.CONNECTOR_ID.WALLET_CONNECT);t&&(e?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){me.currentPayment={type:"wallet",status:"IN_PROGRESS"};const t=ft.U.state.caipAddress;if(!t)return;const{chainId:e,address:i}=Zt.C.parseCaipAddress(t),n=yt.W.state.activeChain;if(!i||!e||!n)return;if(!Vt.A.getProvider(n))return;const s=yt.W.state.activeCaipNetwork;if(s&&!me.isPaymentInProgress)try{this.initiatePayment();const t=yt.W.getAllRequestedCaipNetworks(),e=yt.W.getAllApprovedCaipNetworkIds();switch(await async function(t){const{paymentAssetNetwork:e,activeCaipNetwork:i,approvedCaipNetworkIds:n,requestedCaipNetworks:s}=t,r=bt.w.sortRequestedNetworks(n,s).find(t=>t.caipNetworkId===e);if(!r)throw new ae(Ft);if(r.caipNetworkId===i.caipNetworkId)return;const a=yt.W.getNetworkProp("supportsAllNetworks",r.chainNamespace);if(!n?.includes(r.caipNetworkId)&&!a)throw new ae(Ft);try{await yt.W.switchActiveNetwork(r)}catch(t){throw new ae(te,t)}}({paymentAssetNetwork:me.paymentAsset.network,activeCaipNetwork:s,approvedCaipNetworkIds:e,requestedCaipNetworks:t}),await vt.W.open({view:"PayLoading"}),n){case Lt.o.CHAIN.EVM:"native"===me.paymentAsset.asset&&(me.currentPayment.result=await async function(t,e,i){if(e!==Lt.o.CHAIN.EVM)throw new ae(Qt);if(!i.fromAddress)throw new ae(Ft,"fromAddress is required for native EVM payments.");const n="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(n))throw new ae(Ft);const s=t.metadata?.decimals??18,r=$t.x.parseUnits(n.toString(),s);if("bigint"!=typeof r)throw new ae(te);return await $t.x.sendTransaction({chainNamespace:e,to:i.recipient,address:i.fromAddress,value:r,data:"0x"})??void 0}(me.paymentAsset,n,{recipient:me.recipient,amount:me.amount,fromAddress:i})),me.paymentAsset.asset.startsWith("0x")&&(me.currentPayment.result=await async function(t,e){if(!e.fromAddress)throw new ae(Ft,"fromAddress is required for ERC20 EVM payments.");const i=t.asset,n=e.recipient,s=Number(t.metadata.decimals),r=$t.x.parseUnits(e.amount.toString(),s);if(void 0===r)throw new ae(te);return await $t.x.writeContract({fromAddress:e.fromAddress,tokenAddress:i,args:[n,r],method:"transfer",abi:ge.v.getERC20Abi(i),chainNamespace:Lt.o.CHAIN.EVM})??void 0}(me.paymentAsset,{recipient:me.recipient,amount:me.amount,fromAddress:i})),me.currentPayment.status="SUCCESS";break;case Lt.o.CHAIN.SOLANA:me.currentPayment.result=await async function(t,e){if(t!==Lt.o.CHAIN.SOLANA)throw new ae(Qt);if(!e.fromAddress)throw new ae(Ft,"fromAddress is required for Solana payments.");const i="string"==typeof e.amount?parseFloat(e.amount):e.amount;if(isNaN(i)||i<=0)throw new ae(Ft,"Invalid payment amount.");try{if(!Vt.A.getProvider(t))throw new ae(te,"No Solana provider available.");const n=await $t.x.sendTransaction({chainNamespace:Lt.o.CHAIN.SOLANA,to:e.recipient,value:i,tokenMint:e.tokenMint});if(!n)throw new ae(te,"Transaction failed.");return n}catch(t){if(t instanceof ae)throw t;throw new ae(te,`Solana payment failed: ${t}`)}}(n,{recipient:me.recipient,amount:me.amount,fromAddress:i,tokenMint:"native"===me.paymentAsset.asset?void 0:me.paymentAsset.asset}),me.currentPayment.status="SUCCESS";break;default:throw new ae(Qt)}}catch(t){me.error=t instanceof ae?t.message:re.GENERIC_PAYMENT_ERROR,me.currentPayment.status="FAILED",xt.P.showError(me.error)}finally{me.isPaymentInProgress=!1}},getExchangeById:t=>me.exchanges.find(e=>e.id===t),validatePayConfig(t){const{paymentAsset:e,recipient:i,amount:n}=t;if(!e)throw new ae(Ft);if(!i)throw new ae(Gt);if(!e.asset)throw new ae(Yt);if(null==n||n<=0)throw new ae(Kt)},handlePayWithWallet(){const t=ft.U.state.caipAddress;if(!t)return void Bt.I.push("Connect");const{chainId:e,address:i}=Zt.C.parseCaipAddress(t),n=yt.W.state.activeChain;i&&e&&n?this.handlePayment():Bt.I.push("Connect")},async handlePayWithExchange(t){try{me.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:i}=me.paymentAsset,n={network:e,asset:i,amount:me.amount,recipient:me.recipient},s=await this.getPayUrl(t,n);if(!s)throw new ae(Xt);return me.currentPayment.sessionId=s.sessionId,me.currentPayment.status="IN_PROGRESS",me.currentPayment.exchangeId=t,this.initiatePayment(),{url:s.url,openInNewTab:me.openInNewTab}}catch(t){return me.error=t instanceof ae?t.message:re.GENERIC_PAYMENT_ERROR,me.isPaymentInProgress=!1,xt.P.showError(me.error),null}},async getBuyStatus(t,e){try{const i=await async function(t){return(await le("reown_getExchangeBuyStatus",t)).result}({sessionId:e,exchangeId:t});return"SUCCESS"!==i.status&&"FAILED"!==i.status||qt.E.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"pay",paymentId:me.paymentId||we,configuration:{network:me.paymentAsset.network,asset:me.paymentAsset.asset,recipient:me.recipient,amount:me.amount},currentPayment:{type:"exchange",exchangeId:me.currentPayment?.exchangeId,sessionId:me.currentPayment?.sessionId,result:i.txHash}}}),i}catch(t){throw new ae(se)}},async updateBuyStatus(t,e){try{const i=await this.getBuyStatus(t,e);me.currentPayment&&(me.currentPayment.status=i.status,me.currentPayment.result=i.txHash),"SUCCESS"!==i.status&&"FAILED"!==i.status||(me.isPaymentInProgress=!1)}catch(t){throw new ae(se)}},initiatePayment(){me.isPaymentInProgress=!0,me.paymentId=crypto.randomUUID()},initializeAnalytics(){me.analyticsSet||(me.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",t=>{if(me.currentPayment?.status&&"UNKNOWN"!==me.currentPayment.status){const t={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[me.currentPayment.status];qt.E.sendEvent({type:"track",event:t,properties:{source:"pay",paymentId:me.paymentId||we,configuration:{network:me.paymentAsset.network,asset:me.paymentAsset.asset,recipient:me.recipient,amount:me.amount},currentPayment:{type:me.currentPayment.type,exchangeId:me.currentPayment.exchangeId,sessionId:me.currentPayment.sessionId,result:me.currentPayment.result}}})}}))}},ye=c`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var ve=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let be=class extends ut{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=fe.state.exchanges,this.isLoading=fe.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=ft.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(fe.subscribeKey("exchanges",t=>this.exchanges=t)),this.unsubscribe.push(fe.subscribeKey("isLoading",t=>this.isLoading=t)),this.unsubscribe.push(ft.U.subscribe(t=>this.connectedWalletInfo=t.connectedWalletInfo)),fe.fetchExchanges()}get isWalletConnected(){return"connected"===ft.U.state.status}render(){return F`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const t=fe.getPaymentAsset();this.networkName=t.network,this.tokenSymbol=t.metadata.symbol,this.amount=fe.state.amount.toString()}renderPayWithWallet(){return function(t){const{chainNamespace:e}=Zt.C.parseCaipNetworkId(t);return ue.includes(e)}(this.networkName)?F`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:F``}renderPaymentHeader(){let t=this.networkName;if(this.networkName){const e=yt.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===this.networkName);e&&(t=e.name)}return F`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${t?F`
                  <wui-text variant="small-500" color="fg-200"> on ${t} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const t=this.connectedWalletInfo?.name||"connected wallet";return F`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${mt(this.connectedWalletInfo?.icon)}
            name=${mt(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${t}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return F`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?F`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?F`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(t=>F`
        <wui-list-item
          @click=${()=>this.onExchangePayment(t.id)}
          data-testid="exchange-option-${t.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===t.id?F`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:F`<wui-wallet-image
                  size="sm"
                  imageSrc=${mt(t.imageUrl)}
                  name=${t.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${t.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){fe.handlePayWithWallet()}async onExchangePayment(t){try{this.loadingExchangeId=t;const e=await fe.handlePayWithExchange(t);e&&(await vt.W.open({view:"PayLoading"}),bt.w.openHref(e.url,e.openInNewTab?"_blank":"_self"))}catch(t){console.error("Failed to pay with exchange",t),xt.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(t){t.stopPropagation();try{await $t.x.disconnect()}catch{console.error("Failed to disconnect"),xt.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}};be.styles=ye,ve([wt()],be.prototype,"amount",void 0),ve([wt()],be.prototype,"tokenSymbol",void 0),ve([wt()],be.prototype,"networkName",void 0),ve([wt()],be.prototype,"exchanges",void 0),ve([wt()],be.prototype,"isLoading",void 0),ve([wt()],be.prototype,"loadingExchangeId",void 0),ve([wt()],be.prototype,"connectedWalletInfo",void 0),be=ve([(0,At.EM)("w3m-pay-view")],be);var xe=i(68996),$e=i(36010),Ae=i(27601);i(92983);const Ee=c`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var Se=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Pe=class extends ut{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=fe.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return F`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===fe.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===fe.state.currentPayment?.type&&(this.exchangeSubscription=setInterval(async()=>{const t=fe.state.currentPayment?.exchangeId,e=fe.state.currentPayment?.sessionId;t&&e&&(await fe.updateBuyStatus(t,e),"SUCCESS"===fe.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){fe.subscribeKey("isPaymentInProgress",t=>{t||"in-progress"!==this.paymentState||(fe.state.error||!fe.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==$t.x.state.status&&vt.W.close()},3e3))}),fe.subscribeKey("error",t=>{t&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const t=xe.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4,i=this.getPaymentIcon();return F`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${i?F`<wui-wallet-image size="lg" imageSrc=${i}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){const t=fe.state.currentPayment;if(t){if("exchange"===t.type){const e=t.exchangeId;if(e){const t=fe.getExchangeById(e);return t?.imageUrl}}if("wallet"===t.type){const t=ft.U.state.connectedWalletInfo?.icon;if(t)return t;const e=yt.W.state.activeChain;if(!e)return;const i=$e.a.getConnectorId(e);if(!i)return;const n=$e.a.getConnectorById(i);if(!n)return;return Ae.$.getConnectorImage(n)}}}successTemplate(){return F`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return F`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};async function _e(t){return fe.handleOpenPay(t)}async function Ce(t,e=3e5){if(e<=0)throw new ae(Ft,"Timeout must be greater than 0");try{await _e(t)}catch(t){if(t instanceof ae)throw t;throw new ae(Xt,t.message)}return new Promise((t,i)=>{let n=!1;const s=setTimeout(()=>{n||(n=!0,l(),i(new ae(te,"Payment timeout")))},e);function r(){if(n)return;const e=fe.state.currentPayment,i=fe.state.error,r=fe.state.isPaymentInProgress;return"SUCCESS"===e?.status?(n=!0,l(),clearTimeout(s),void t({success:!0,result:e.result})):"FAILED"===e?.status?(n=!0,l(),clearTimeout(s),void t({success:!1,error:i||"Payment failed"})):void(!i||r||e||(n=!0,l(),clearTimeout(s),t({success:!1,error:i})))}const a=Me("currentPayment",r),o=Me("error",r),c=Me("isPaymentInProgress",r),l=(h=[a,o,c],()=>{h.forEach(t=>{try{t()}catch{}})});var h;r()})}function ke(){return fe.getExchanges()}function Ie(){return fe.state.currentPayment?.result}function Te(){return fe.state.error}function Ne(){return fe.state.isPaymentInProgress}function Me(t,e){return fe.subscribeKey(t,e)}Pe.styles=Ee,Se([wt()],Pe.prototype,"loadingMessage",void 0),Se([wt()],Pe.prototype,"subMessage",void 0),Se([wt()],Pe.prototype,"paymentState",void 0),Pe=Se([(0,At.EM)("w3m-pay-loading-view")],Pe);const Ue={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Oe={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Re={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ze={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},De={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},je={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},We={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},He={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Le={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ze={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},qe={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Be={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ve={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Fe={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},60310(t,e,i){i(69807)},84293(t,e,i){var n=i(35120),s=i(54211),r=(i(32565),i(26109)),a=i(43494);const o=n.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return n.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};l.styles=[r.W5,r.fD,o],c([(0,s.MZ)()],l.prototype,"text",void 0),c([(0,s.MZ)()],l.prototype,"icon",void 0),l=c([(0,a.E)("wui-icon-button")],l)},64865(t,e,i){i(7068)},51636(t,e,i){i(32565)},93516(t,e,i){i(36887)},26509(t,e,i){var n=i(35120),s=i(54211),r=i(43121),a=(i(32565),i(36887),i(20880),i(18409),i(69807),i(26109)),o=i(43494);i(12851);const c=n.AH`
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
`;var l=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends n.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return n.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,r.J)(this.iconVariant)}
        tabindex=${(0,r.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return n.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return n.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return n.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?n.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:n.qy``}chevronTemplate(){return this.chevron?n.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};h.styles=[a.W5,a.fD,c],l([(0,s.MZ)()],h.prototype,"icon",void 0),l([(0,s.MZ)()],h.prototype,"iconSize",void 0),l([(0,s.MZ)()],h.prototype,"tabIdx",void 0),l([(0,s.MZ)()],h.prototype,"variant",void 0),l([(0,s.MZ)()],h.prototype,"iconVariant",void 0),l([(0,s.MZ)({type:Boolean})],h.prototype,"disabled",void 0),l([(0,s.MZ)()],h.prototype,"imageSrc",void 0),l([(0,s.MZ)()],h.prototype,"alt",void 0),l([(0,s.MZ)({type:Boolean})],h.prototype,"chevron",void 0),l([(0,s.MZ)({type:Boolean})],h.prototype,"loading",void 0),h=l([(0,o.E)("wui-list-item")],h)},93373(t,e,i){i(20880)},92983(t,e,i){var n=i(35120),s=i(54211),r=i(26109),a=i(43494);const o=n.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,s=245+e,r=360+1.75*e;return n.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${s}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};l.styles=[r.W5,o],c([(0,s.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,a.E)("wui-loading-thumbnail")],l)},52619(t,e,i){i(25981)},55618(t,e,i){var n=i(35120),s=i(54211),r=(i(18409),i(26109)),a=i(43494);const o=n.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.text=""}render(){return n.qy`${this.template()}`}template(){return this.text?n.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[r.W5,o],c([(0,s.MZ)()],l.prototype,"text",void 0),l=c([(0,a.E)("wui-separator")],l)},45090(t,e,i){i(18409)},41684(t,e,i){i(91383)},27512(t,e,i){i.d(e,{a:()=>n});const n=i(35120).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},36887(t,e,i){var n=i(35120),s=i(54211),r=i(26109),a=i(43494);const o=n.AH`
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
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,n.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r.W5,r.ck,o],c([(0,s.MZ)()],l.prototype,"src",void 0),c([(0,s.MZ)()],l.prototype,"alt",void 0),c([(0,s.MZ)()],l.prototype,"size",void 0),c([(0,s.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,a.E)("wui-image")],l)},18409(t,e,i){var n=i(35120),s=i(54211),r=i(79498),a=i(26109),o=i(43494);const c=n.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var l=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.qy`<slot class=${(0,r.H)(t)}></slot>`}};h.styles=[a.W5,c],l([(0,s.MZ)()],h.prototype,"variant",void 0),l([(0,s.MZ)()],h.prototype,"color",void 0),l([(0,s.MZ)()],h.prototype,"align",void 0),l([(0,s.MZ)()],h.prototype,"lineClamp",void 0),h=l([(0,o.E)("wui-text")],h)},7068(t,e,i){var n=i(35120),s=i(54211),r=(i(32565),i(26109)),a=i(43494);const o=n.AH`
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
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let t="",e="";switch(this.size){case"lg":t="--wui-border-radius-xs",e="--wui-spacing-1xs";break;case"sm":t="--wui-border-radius-3xs",e="--wui-spacing-xxs";break;default:t="--wui-border-radius-xxs",e="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n    `,n.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[r.W5,r.fD,r.ck,o],c([(0,s.MZ)()],l.prototype,"size",void 0),c([(0,s.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,s.MZ)()],l.prototype,"icon",void 0),c([(0,s.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,a.E)("wui-icon-link")],l)},25981(t,e,i){var n=i(35120),s=i(54211);const r=n.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var a=i(27512);const o=n.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(32565),i(36887);var c=i(26109),l=i(43494);const h=n.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var u=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let d=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:o,md:a.a,lg:r},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,n.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};d.styles=[c.W5,h],u([(0,s.MZ)()],d.prototype,"size",void 0),u([(0,s.MZ)()],d.prototype,"name",void 0),u([(0,s.MZ)({type:Object})],d.prototype,"networkImagesBySize",void 0),u([(0,s.MZ)()],d.prototype,"imageSrc",void 0),u([(0,s.MZ)({type:Boolean})],d.prototype,"selected",void 0),u([(0,s.MZ)({type:Boolean})],d.prototype,"round",void 0),d=u([(0,l.E)("wui-network-image")],d)},91383(t,e,i){var n=i(35120),s=i(54211),r=(i(32565),i(36887),i(69807),i(26109)),a=i(43494);i(12851);const o=n.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var c=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),n.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?n.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?n.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:n.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};l.styles=[r.fD,r.W5,o],c([(0,s.MZ)()],l.prototype,"size",void 0),c([(0,s.MZ)()],l.prototype,"name",void 0),c([(0,s.MZ)()],l.prototype,"imageSrc",void 0),c([(0,s.MZ)()],l.prototype,"walletIcon",void 0),c([(0,s.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,s.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,a.E)("wui-wallet-image")],l)},69807(t,e,i){var n=i(35120),s=i(54211),r=i(26109),a=i(63612),o=i(43494);const c=n.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends n.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};h.styles=[r.W5,c],l([(0,s.MZ)()],h.prototype,"flexDirection",void 0),l([(0,s.MZ)()],h.prototype,"flexWrap",void 0),l([(0,s.MZ)()],h.prototype,"flexBasis",void 0),l([(0,s.MZ)()],h.prototype,"flexGrow",void 0),l([(0,s.MZ)()],h.prototype,"flexShrink",void 0),l([(0,s.MZ)()],h.prototype,"alignItems",void 0),l([(0,s.MZ)()],h.prototype,"justifyContent",void 0),l([(0,s.MZ)()],h.prototype,"columnGap",void 0),l([(0,s.MZ)()],h.prototype,"rowGap",void 0),l([(0,s.MZ)()],h.prototype,"gap",void 0),l([(0,s.MZ)()],h.prototype,"padding",void 0),l([(0,s.MZ)()],h.prototype,"margin",void 0),h=l([(0,o.E)("wui-flex")],h)},52894(t,e,i){i.d(e,{OA:()=>n,WL:()=>r,u$:()=>s});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},54211(t,e,i){i.d(e,{MZ:()=>a,wk:()=>o});var n=i(85364);const s={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},r=(t=s,e,i)=>{const{kind:n,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};function a(t){return(e,i)=>"object"==typeof i?r(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function o(t){return a({...t,state:!0,attribute:!1})}},79498(t,e,i){i.d(e,{H:()=>r});var n=i(12242),s=i(52894);const r=(0,s.u$)(class extends s.WL{constructor(t){if(super(t),t.type!==s.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.c0}})}}]);