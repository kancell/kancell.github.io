(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[84],{"4maU":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("YS25"),r={basename:"/"};window.routerBase&&(r.basename=window.routerBase);var o=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(a["b"])(r)},"73G7":function(e,t,n){e.exports=n.p+"static/banner2.5795a5d0.png"},"8xVO":function(e,t,n){"use strict";n("ryPu"),n("73G7");var a=n("d0yd"),r=n.n(a);n.d(t,"a",(function(){return r.a}));var o=n("BKbo"),c=n.n(o);n.d(t,"c",(function(){return c.a}));var i=n("oLrZ"),s=n.n(i);n.d(t,"b",(function(){return s.a}))},BKbo:function(e,t,n){e.exports=n.p+"static/header.0be6eb6a.png"},aup7:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n("pVnL"),r=n.n(a),o=n("QILm"),c=n.n(o),i=n("lwsE"),s=n.n(i),l=n("W8MJ"),u=n.n(l),f=n("7W2i"),d=n.n(f),p=n("a1gu"),m=n.n(p),h=n("Nsbk"),v=n.n(h),g=n("q1tI"),b=n.n(g),w=n("b0zN"),y=n("lSNA"),E=n.n(y),j=n("E2Kl"),k=n.n(j);function x(e){var t=O();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var N=function(e){d()(n,e);var t=x(n);function n(e){var a;return s()(this,n),a=t.call(this,e),a.onClick=function(e){var t=a.props,n=t.hasArrow,r=t.onClick;n&&"function"===typeof r&&r(e)},a.onClose=function(){a.setState({visible:!1})},a.state={visible:!0},a}return u()(n,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.theme,o=t.size,c=t.icon,i=t.hasArrow,s=t.closable,l=t.children,u=this.state.visible,f=k()(n,a,(e={},E()(e,"".concat(n,"--").concat(r),!!r),E()(e,"".concat(n,"--").concat(o),!!o),E()(e,"".concat(n,"--link"),!!i),e)),d=c&&b.a.createElement("div",{className:"".concat(n,"__icon")},c),p=s&&b.a.createElement(w["Close"],{onClick:this.onClose}),m=i&&b.a.createElement(w["ArrowRight"],null),h=!s&&!i;return u&&b.a.createElement("div",{className:f,onClick:this.onClick},b.a.createElement("div",{className:"".concat(n,"__header")},d),b.a.createElement("div",{className:"".concat(n,"__body")},l),!h&&b.a.createElement("div",{className:"".concat(n,"__footer")},m,p))}}]),n}(g["PureComponent"]);N.defaultProps={prefixCls:"za-message",theme:"primary",hasArrow:!1,closable:!1};var S=function(e,t){return"\n  @-webkit-keyframes ".concat(e," {\n    ").concat(t,"\n  }\n  @keyframes ").concat(e," {\n    ").concat(t,"\n  }\n")},T=function(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)},_=function(e,t){var n=document.createElement("style");n.id=e,n.type="text/css",n.innerHTML=S(e,t),document.getElementsByTagName("head")[0].appendChild(n)},C=function(e){var t=document.getElementById(e);return!!t};function D(e){var t=P();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var R="za-notice-bar-scrolling",L=function(e){d()(n,e);var t=D(n);function n(){var e;s()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.wrapper=null,e.content=null,e.state={animationDuration:0},e}return u()(n,[{key:"componentDidMount",value:function(){this.updateScrolling()}},{key:"componentDidUpdate",value:function(){this.updateScrolling()}},{key:"updateScrolling",value:function(){var e=this.props,t=e.speed,n=e.delay,a=this.wrapper.getBoundingClientRect().width,r=this.content.getBoundingClientRect().width;if(r>a){var o=Math.round(2*n+r/t*1e3),c=Math.round(100*n/o);C(R)&&T(R),_(R,"\n        0%, ".concat(c,"% {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n        }\n\n        ").concat(100-c,"%, 100% {\n          -webkit-transform: translate3d(").concat(-(r-a),"px, 0, 0);\n          transform: translate3d(").concat(-(r-a),"px, 0, 0);\n        }\n      ")),this.setState({animationDuration:o})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.children,o=c()(t,["prefixCls","children"]),i=this.state.animationDuration;return b.a.createElement(N,r()({},o,{size:"lg"}),b.a.createElement("div",{className:n,ref:function(t){e.wrapper=t}},b.a.createElement("div",{className:"".concat(n,"__body"),ref:function(t){e.content=t},style:i>0?{WebkitAnimation:"".concat(R," ").concat(i,"ms linear infinite"),animation:"".concat(R," ").concat(i,"ms linear infinite")}:void 0},a)))}}]),n}(g["PureComponent"]);L.displayName="NoticeBar",L.defaultProps={prefixCls:"za-notice-bar",theme:"warning",icon:b.a.createElement(w["Volume"],null),hasArrow:!1,closable:!1,speed:50,delay:2e3}},bdvc:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n("gGBh"),r="D1F47B856585C2806FA854DC3E78E4F5";function o(e){var t="";return e&&(t=a["sm4"].encrypt(e,r)),t}function c(e){return void 0!==e&&null!==e}function i(e){return/^\d+(\.\d+)?$/.test(e)}function s(e){if(c(e))return e=String(e),i(e)?"".concat(e,"px"):e}},d0yd:function(e,t,n){e.exports=n.p+"static/foodBanner.06733e7f.jpg"},oLrZ:function(e,t,n){e.exports=n.p+"static/formBg.eb909ae4.png"},ofcV:function(e,t,n){"use strict";n.r(t);n("9og8"),n("tJVT"),n("WmNS");var a,r,o=n("q1tI"),c=n.n(o),i=n("lSNA"),s=n.n(i),l=n("lwsE"),u=n.n(l),f=n("W8MJ"),d=n.n(f),p=n("7W2i"),m=n.n(p),h=n("a1gu"),v=n.n(h),g=n("Nsbk"),b=n.n(g),w=n("E2Kl"),y=n.n(w),E=n("b0zN");(function(e){e[e["normal"]=0]="normal",e[e["pull"]=1]="pull",e[e["drop"]=2]="drop",e[e["loading"]=3]="loading",e[e["success"]=4]="success",e[e["failure"]=5]="failure"})(a||(a={})),function(e){e[e["normal"]=0]="normal",e[e["abort"]=1]="abort",e[e["loading"]=2]="loading",e[e["success"]=3]="success",e[e["failure"]=4]="failure",e[e["complete"]=5]="complete"}(r||(r={}));var j=n("kuXg"),k=void 0,x=function(e,t){var n,a=Date.now();return function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var i=Date.now(),s=t-(i-a);clearTimeout(n),s<=0?(e.apply(k,o),a=i):n=window.setTimeout((function(){e.apply(k,o),a=Date.now()}),s)}},O=x,N=n("6c3C"),S=n("aa3T"),T=n("cv5m");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=P();return function(){var n,a=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var R=function(e){m()(n,e);var t=D(n);function n(e){var o;return u()(this,n),o=t.call(this,e),o.pull=void 0,o.wrap=void 0,o.throttledScroll=void 0,o.wrapTouchstartY=void 0,o.mounted=!0,o.getScrollContainer=function(){return o.scrollContainer},o.wrapTouchstart=function(e){var t=e.touches[0];o.wrapTouchstartY=t.pageY},o.wrapTouchmove=function(e){var t=e.touches[0],n=t.pageY;n-o.wrapTouchstartY>0&&e.cancelable&&0===o.scrollTop&&e.preventDefault()},o.wrapTouchEnd=function(){o.wrapTouchstartY=0,o.setState({animationDuration:o.props.animationDuration})},o.addEvent=function(){o.wrap!==o.scrollContainer&&(o.wrap&&o.removeEvent(),o.wrap=o.scrollContainer,j["a"].on(o.wrap,"scroll",o.throttledScroll),j["a"].on(o.wrap,"touchstart",o.wrapTouchstart),j["a"].on(o.wrap,"touchmove",o.wrapTouchmove),j["a"].on(o.wrap,"touchend",o.wrapTouchEnd))},o.removeEvent=function(){j["a"].off(o.wrap,"scroll",o.throttledScroll),j["a"].off(o.wrap,"touchstart",o.wrapTouchstart),j["a"].off(o.wrap,"touchmove",o.wrapTouchmove),j["a"].off(o.wrap,"touchend",o.wrapTouchEnd)},o.onScroll=function(){var e=o.state,t=e.refreshState,c=e.loadState,i=o.wrap,s=i.scrollHeight,l=void 0===s?document.body.clientHeight:s,u=i.clientHeight,f=void 0===u?document.documentElement.clientHeight:u,d=C(C({},n.defaultProps.load),o.props.load),p=d.handler,m=d.distance;"function"!==typeof p||t!==a.normal||c!==r.normal||l<=f||l-o.scrollTop-m>f||p()},o.onDragMove=function(e,t){var r=t.offsetY,c=o.props.refresh,i=c.handler;if(!i||r<=0||r>0&&o.scrollTop>0||o.state.refreshState>=a.loading)return!1;j["a"].supportsPassiveEvents||e.preventDefault();var s=C(C({},n.defaultProps.refresh),o.props.refresh),l=s.startDistance,u=s.distance,f=r/3,d=f-l<u?a.pull:a.drop;return o.doRefreshAction(d,f),!0},o.onDragEnd=function(e,t){var n=t.offsetY;if(n){var r=o.state.refreshState;if(r!==a.pull){var c=o.props.refresh,i=c.handler;"function"===typeof i&&i()}else o.doRefreshAction(a.normal)}},o.doTransition=function(e){var t=e.offsetY,n=e.animationDuration;o.setState({offsetY:t,animationDuration:n})},o.doRefreshAction=function(e,t){var n=o.props,c=n.animationDuration,i=n.stayTime;switch(o.setState({refreshState:e}),e){case a.pull:case a.drop:o.doTransition({offsetY:t,animationDuration:0});break;case a.loading:o.doTransition({offsetY:"auto",animationDuration:c});break;case a.success:case a.failure:o.doTransition({offsetY:"auto",animationDuration:c}),setTimeout((function(){o.mounted&&(o.doRefreshAction(a.normal),o.doLoadAction(r.normal))}),i);break;default:o.doTransition({offsetY:0,animationDuration:c})}},o.doLoadAction=function(e){var t=o.props.stayTime;switch(o.setState({loadState:e}),e){case r.success:o.doLoadAction(r.normal);break;case r.failure:setTimeout((function(){o.mounted&&o.doLoadAction(r.abort)}),t);break;default:}},o.renderRefresh=function(){var e=C(C({},n.defaultProps.refresh),o.props.refresh),t=e.startDistance,r=e.distance,i=e.render,s=o.state,l=s.refreshState,u=s.offsetY,f=0;if(u>=t&&(f=100*(u-t<r?u-t:r)/r),"function"===typeof i)return i(l,f);var d=o.props,p=d.prefixCls,m=d.locale,h="".concat(p,"__control");switch(l){case a.pull:return c.a.createElement("div",{className:h},c.a.createElement(T["a"],{loading:!1,percent:f}),c.a.createElement("span",null,m.pullText));case a.drop:return c.a.createElement("div",{className:h},c.a.createElement(T["a"],{loading:!1,percent:100}),c.a.createElement("span",null,m.dropText));case a.loading:return c.a.createElement("div",{className:h},c.a.createElement(T["a"],{type:"spinner"}),c.a.createElement("span",null,m.loadingText));case a.success:return c.a.createElement("div",{className:h},c.a.createElement(E["SuccessCircle"],{theme:"success"}),c.a.createElement("span",null,m.successText));case a.failure:return c.a.createElement("div",{className:h},c.a.createElement(E["WarningCircle"],{theme:"danger"}),c.a.createElement("span",null,m.failureText));default:}},o.renderLoad=function(){var e=C(C({},n.defaultProps.load),o.props.load),t=e.render,a=o.state.loadState;if("function"===typeof t)return t(a);var i=o.props,s=i.prefixCls,l=i.locale,u="".concat(s,"__control");switch(a){case r.loading:return c.a.createElement("div",{className:u},c.a.createElement(T["a"],{type:"spinner"}),c.a.createElement("span",null,l.loadingText));case r.failure:return c.a.createElement("div",{className:u},c.a.createElement(E["WarningCircle"],{theme:"danger"}),c.a.createElement("span",null,l.failureText));case r.complete:return c.a.createElement("div",{className:u},c.a.createElement("span",null,l.completeText));default:}},o.state={offsetY:0,animationDuration:0,refreshState:e.refresh.state,loadState:e.load.state},o.throttledScroll=O(o.onScroll,250),o}return d()(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.addEvent()}},{key:"componentDidUpdate",value:function(e){this.addEvent();var t=this.props,n=t.load,a=t.refresh;e.load.state!==n.state&&this.doLoadAction(n.state),e.refresh.state!==a.state&&this.doRefreshAction(a.state)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.removeEvent()}},{key:"scrollContainer",get:function(){var e=function(e){while(e&&e.parentNode&&e.parentNode!==document.body){var t=window.getComputedStyle(e);if((["scroll","auto"].indexOf(t.overflowY)>-1||["scroll","auto"].indexOf(t.overflow)>-1)&&(parseInt(t.height,10)>0||parseInt(t.maxHeight,10)>0))return e;e=e.parentNode}}(this.pull)||window;return e}},{key:"scrollTop",get:function(){return Object(N["c"])(this.wrap)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.className,i=t.style,l=t.children,u=this.state,f=u.offsetY,d=u.animationDuration,p=u.refreshState,m=u.loadState,h=y()(n,o),v=y()("".concat(n,"__load"),s()({},"".concat(n,"__load--show"),m>=r.loading)),g={WebkitTransition:"all ".concat(d,"ms"),transition:"all ".concat(d,"ms")};return p<=a.drop&&(g.WebkitTransform="translate3d(0, ".concat(f,"px, 0)"),g.transform="translate3d(0, ".concat(f,"px, 0)")),c.a.createElement(S["a"],{onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},c.a.createElement("div",{className:h,style:i},c.a.createElement("div",{className:"".concat(n,"__content"),style:g,ref:function(t){e.pull=t}},c.a.createElement("div",{className:"".concat(n,"__refresh")},this.renderRefresh()),c.a.createElement("div",{className:"".concat(n,"__body")},l),c.a.createElement("div",{className:v},this.renderLoad()))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.load,a=e.refresh,r=t.prevLoad,o=void 0===r?{}:r,c=t.prevRefresh,i=void 0===c?{}:c;return"load"in e&&n.state!==o.state?{loadState:n.state,prevLoad:n}:"refresh"in e&&a.state!==i.state?{refreshState:a.state,prevRefresh:a}:null}}]),n}(o["PureComponent"]);R.defaultProps={prefixCls:"za-pull",refresh:{state:a.normal,startDistance:30,distance:30},load:{state:r.normal,distance:0},animationDuration:400,stayTime:1e3};var L=n("YEjf"),A=(Object(L["a"])("Pull")(R),n("9mPY")),B=(n("55Ip"),n("9kvl"),n("LQih"),n("Wgwc"),n("uzmA"),n("NPPy"),n("4maU"),n("VsxY"),n("atPe"),n("aup7"),n("P52E"),n("8xVO"),n("nKUr")),Y="iQhr";t["default"]=Object(o["memo"])((()=>Object(B["jsxs"])("div",{_nk:"".concat(Y,"1l"),children:[Object(B["jsx"])(A["a"],{className:"sticky top-0 z-10",title:"\u52b3\u52a8\u7ade\u8d5b\u5b9e\u65f6\u64ad\u62a5",_nk:"".concat(Y,"82")}),Object(B["jsx"])("div",{className:"mx-auto text-lg mt-16 text-center",_nk:"".concat(Y,"1m"),children:"\u5df2\u7ed3\u675f"})]})))},ryPu:function(e,t,n){e.exports=n.p+"static/banner1.f197b063.png"},uzmA:function(e,t,n){"use strict";var a=n("tJVT"),r=n("k1fw"),o=n("q1tI"),c=n("i8i4"),i=n.n(c),s=n("+DUQ"),l=n("bdvc"),u=n("nKUr"),f="x4MR",d=e=>{var t=e.src,n=e.className,c=e.alt,d=void 0===c?"":c,p=e.fit,m=void 0===p?"fill":p,h=e.position,v=void 0===h?"center":h,g=e.preview,b=void 0===g||g,w=e.showLoading,y=void 0===w||w,E=e.loadingIcon,j=e.showError,k=void 0===j||j,x=e.errorIcon,O=(e.iconSize,e.style),N=e.width,S=e.height,T=e.onLoad,_=e.onError,C=e.onClick,D=Object(o["useMemo"])((()=>{var e=Object(r["a"])({},O);return Object(l["b"])(N)&&(e.width=Object(l["a"])(N)),Object(l["b"])(S)&&(e.height=Object(l["a"])(S)),e}),[O]),P="w-full h-full object-".concat(m," object-").concat(v),R=Object(o["useRef"])(null),L=Object(o["useState"])({loading:!0,error:!1}),A=Object(a["a"])(L,2),B=A[0],Y=A[1],M=()=>{T&&T(),Y({loading:!1,error:!1})},z=()=>{_&&_(),Y({loading:!1,error:!0})},W=()=>{B.loading||B.error||(C&&C(),b&&F(!0))},I=()=>B.error||!t?null:Object(u["jsx"])("img",{src:t,ref:R,alt:d,className:P,onLoad:M,onError:z,onClick:W,_nk:"".concat(f,"11")}),V=()=>x?"string"===typeof x?Object(u["jsx"])("img",{src:x,alt:d,className:P,_nk:"".concat(f,"12")}):x:Object(u["jsx"])("div",{className:"w-full h-full flex justify-center items-center bg-gray-200 text-white",_nk:"".concat(f,"21"),children:Object(u["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,_nk:"".concat(f,"31"),children:Object(u["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",_nk:"".concat(f,"41")})})}),H=()=>E?"string"===typeof E?Object(u["jsx"])("img",{src:E,alt:d,className:P,_nk:"".concat(f,"13")}):E:Object(u["jsx"])("div",{className:"w-full h-full flex justify-center items-center bg-gray-200",_nk:"".concat(f,"22"),children:Object(u["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,_nk:"".concat(f,"32"),children:Object(u["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",_nk:"".concat(f,"42")})})}),U=()=>B.loading&&y?H():B.error&&k?V():null,J=Object(o["useState"])(!1),K=Object(a["a"])(J,2),q=K[0],F=K[1],Q=Object(s["useTransition"])(q,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{tension:400,friction:50}}),G=Object(o["useCallback"])((e=>{e&&e.querySelector("img")&&e.querySelector("img").getBoundingClientRect().height<document.documentElement.clientHeight&&e.classList.add("flex","items-center","justify-center")}),[]),Z=()=>{var e=Object(u["jsx"])("div",{onClick:e=>{e.stopPropagation(),F(!1)},style:{zIndex:999},className:"top-0 left-0 fixed w-screen h-screen bg-black",_nk:"".concat(f,"23"),children:Object(u["jsx"])("div",{ref:G,className:"w-screen h-screen overflow-y-auto",_nk:"".concat(f,"24"),children:Object(u["jsx"])("img",{src:t,className:"w-full",_nk:"".concat(f,"14")})})});return i.a.createPortal(Q(((t,n)=>n&&Object(u["jsx"])(s["animated"].div,{style:t,_nk:"".concat(f,"51"),children:e}))),document.body)};return Object(u["jsxs"])("div",{style:D,className:"".concat(null!==n&&void 0!==n?n:""),_nk:"".concat(f,"25"),children:[I(),U(),Z()]})};t["a"]=Object(o["memo"])(d)}}]);