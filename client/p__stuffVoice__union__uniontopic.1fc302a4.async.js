(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{"4maU":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("YS25"),a={basename:"/"};window.routerBase&&(a.basename=window.routerBase);var r=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(c["b"])(a)},tP0r:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var c=n("9og8"),a=n("tJVT"),r=n("WmNS"),s=n.n(r),i=n("q1tI"),o=n.n(i),l=n("9mPY"),u=n("55Ip"),d=n("9kvl"),f=n("LQih"),m=n("uk8H"),h=n.n(m),p=n("Wgwc"),b=n.n(p),x=n("NPPy"),j=n("4maU"),v=n("pVnL"),k=n.n(v),w=n("QILm"),y=n.n(w),g=n("lwsE"),O=n.n(g),N=n("W8MJ"),_=n.n(N),E=n("7W2i"),C=n.n(E),S=n("a1gu"),R=n.n(S),B=n("Nsbk"),I=n.n(B),P=n("b0zN"),A=n("lSNA"),D=n.n(A),V=n("E2Kl"),z=n.n(V);function M(e){var t=T();return function(){var n,c=I()(e);if(t){var a=I()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return R()(this,n)}}function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var H=function(e){C()(n,e);var t=M(n);function n(e){var c;return O()(this,n),c=t.call(this,e),c.onClick=function(e){var t=c.props,n=t.hasArrow,a=t.onClick;n&&"function"===typeof a&&a(e)},c.onClose=function(){c.setState({visible:!1})},c.state={visible:!0},c}return _()(n,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,c=t.className,a=t.theme,r=t.size,s=t.icon,i=t.hasArrow,l=t.closable,u=t.children,d=this.state.visible,f=z()(n,c,(e={},D()(e,"".concat(n,"--").concat(a),!!a),D()(e,"".concat(n,"--").concat(r),!!r),D()(e,"".concat(n,"--link"),!!i),e)),m=s&&o.a.createElement("div",{className:"".concat(n,"__icon")},s),h=l&&o.a.createElement(P["Close"],{onClick:this.onClose}),p=i&&o.a.createElement(P["ArrowRight"],null),b=!l&&!i;return d&&o.a.createElement("div",{className:f,onClick:this.onClick},o.a.createElement("div",{className:"".concat(n,"__header")},m),o.a.createElement("div",{className:"".concat(n,"__body")},u),!b&&o.a.createElement("div",{className:"".concat(n,"__footer")},p,h))}}]),n}(i["PureComponent"]);H.defaultProps={prefixCls:"za-message",theme:"primary",hasArrow:!1,closable:!1};var Y=function(e,t){return"\n  @-webkit-keyframes ".concat(e," {\n    ").concat(t,"\n  }\n  @keyframes ").concat(e," {\n    ").concat(t,"\n  }\n")},L=function(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)},W=function(e,t){var n=document.createElement("style");n.id=e,n.type="text/css",n.innerHTML=Y(e,t),document.getElementsByTagName("head")[0].appendChild(n)},J=function(e){var t=document.getElementById(e);return!!t};function U(e){var t=K();return function(){var n,c=I()(e);if(t){var a=I()(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return R()(this,n)}}function K(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var F="za-notice-bar-scrolling",Q=function(e){C()(n,e);var t=U(n);function n(){var e;O()(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),e.wrapper=null,e.content=null,e.state={animationDuration:0},e}return _()(n,[{key:"componentDidMount",value:function(){this.updateScrolling()}},{key:"componentDidUpdate",value:function(){this.updateScrolling()}},{key:"updateScrolling",value:function(){var e=this.props,t=e.speed,n=e.delay,c=this.wrapper.getBoundingClientRect().width,a=this.content.getBoundingClientRect().width;if(a>c){var r=Math.round(2*n+a/t*1e3),s=Math.round(100*n/r);J(F)&&L(F),W(F,"\n        0%, ".concat(s,"% {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n        }\n\n        ").concat(100-s,"%, 100% {\n          -webkit-transform: translate3d(").concat(-(a-c),"px, 0, 0);\n          transform: translate3d(").concat(-(a-c),"px, 0, 0);\n        }\n      ")),this.setState({animationDuration:r})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,c=t.children,a=y()(t,["prefixCls","children"]),r=this.state.animationDuration;return o.a.createElement(H,k()({},a,{size:"lg"}),o.a.createElement("div",{className:n,ref:function(t){e.wrapper=t}},o.a.createElement("div",{className:"".concat(n,"__body"),ref:function(t){e.content=t},style:r>0?{WebkitAnimation:"".concat(F," ").concat(r,"ms linear infinite"),animation:"".concat(F," ").concat(r,"ms linear infinite")}:void 0},c)))}}]),n}(i["PureComponent"]);Q.displayName="NoticeBar",Q.defaultProps={prefixCls:"za-notice-bar",theme:"warning",icon:o.a.createElement(P["Volume"],null),hasArrow:!1,closable:!1,speed:50,delay:2e3};var q=n("nKUr"),G="+622";function X(){var e=Object(d["e"])("@@initialState"),t=e.initialState,n=(e.loading,e.error,e.refresh,e.setInitialState,t),r=Object(d["d"])(),o=Object(i["useState"])(),m=Object(a["a"])(o,2),p=m[0],v=m[1],k=x,w=Object(i["useState"])(0),y=Object(a["a"])(w,2),g=y[0],O=y[1],N=function(){var e=Object(c["a"])(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["F"])();case 3:t=e.sent,void 0!=t&&(n=t.result,v(n)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(i["useEffect"])((()=>{N(),C()}),[]);var _=function(){var e=Object(c["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:j["a"].push("/stuffVoice/user/home/union/new");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["L"])({data:{topicid:t}});case 2:e.sent,N(),C();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(c["a"])(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["K"])({data:{topicid:1}});case 3:t=e.sent,void 0!==t&&(n=t.result,O(n)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=e=>{sessionStorage.setItem("topicid",e.toString())};return Object(q["jsx"])(q["Fragment"],{children:Object(q["jsxs"])("div",{className:"min-h-screen bg-white",_nk:"".concat(G,"11"),children:[Object(q["jsx"])(l["a"],{className:"sticky top-0 z-10",title:"\u52b3\u52a8\u7ade\u8d5b\u5b9e\u65f6\u64ad\u62a5",backTo:"/stuffVoice/user/home",_nk:"".concat(G,"21")}),Object(q["jsx"])(Q,{_nk:"".concat(G,"31"),children:"\u52c7\u5f53\u6392\u5934\u5175\uff0c\u8a93\u593a\u5f00\u95e8\u7ea2\uff0c\u5f81\u7a3f\u8bc4\u9009\u6d3b\u52a8\u706b\u70ed\u8fdb\u884c\u4e2d\uff01\uff01\uff01"}),Object(q["jsxs"])("div",{className:"bg-white max-w-full p-4",_nk:"".concat(G,"12"),children:[Object(q["jsxs"])("div",{className:"h-24 w-full px-4 bg-center bg-no-repeat rounded-md flex justify-between items-center mb-4",style:{backgroundImage:"url('".concat(h.a,"')")},_nk:"".concat(G,"13"),children:[Object(q["jsxs"])("div",{className:"flex",_nk:"".concat(G,"14"),children:[Object(q["jsx"])("div",{className:"flex justify-center items-center pr-4",_nk:"".concat(G,"15"),children:Object(q["jsx"])("img",{className:"object-cover h-16 w-16 rounded-full",src:n.user.wxHeadImage,alt:"\u5934\u50cf",_nk:"".concat(G,"41")})}),Object(q["jsxs"])("div",{className:"flex flex-col justify-center",_nk:"".concat(G,"16"),children:[Object(q["jsx"])("h1",{className:"text-white font-semibold text-xl",_nk:"".concat(G,"51"),children:n.user.userName}),Object(q["jsx"])("h1",{className:"text-white text-base",_nk:"".concat(G,"52"),children:n.user.deptName})]})]}),Object(q["jsx"])("div",{className:"flex justify-center",_nk:"".concat(G,"17"),children:Object(q["jsxs"])("div",{className:"flex flex-col justify-center items-center flex-1",_nk:"".concat(G,"18"),children:[Object(q["jsx"])("div",{className:"text-2xl font-semibold text-white",_nk:"".concat(G,"19"),children:g}),Object(q["jsx"])("div",{className:"text-white",_nk:"".concat(G,"1a"),children:"\u8bdd\u9898\u6570"})]})})]}),Object(q["jsx"])("div",{className:"flex flex-col h-auto bg-white space-y-5",_nk:"".concat(G,"1b"),children:null===p||void 0===p?void 0:p.map((e=>Object(q["jsxs"])("div",{className:"w-full",_nk:"".concat(G,"1c"),children:[Object(q["jsx"])(u["a"],{to:"/stuffVoice/user/home/union/content",onClick:()=>S(e.pid),_nk:"".concat(G,"61"),children:Object(q["jsxs"])("div",{className:"py-3 w-full bg-white flex items-start shadow rounded-md",_nk:"".concat(G,"1d"),children:[Object(q["jsx"])("div",{className:"m-2 w-1/5",_nk:"".concat(G,"1e"),children:Object(q["jsx"])("img",{alt:"\u5934\u50cf",className:"h-full w-full rounded-full",src:e.img,_nk:"".concat(G,"42")})}),Object(q["jsxs"])("div",{className:"ml-2 w-full",_nk:"".concat(G,"1f"),children:[Object(q["jsxs"])("div",{className:"flex justify-between",_nk:"".concat(G,"1g"),children:[Object(q["jsx"])("p",{className:"text-base  text-gray-400",_nk:"".concat(G,"71"),children:e.name}),Object(q["jsx"])("p",{className:"text-base  text-gray-400",_nk:"".concat(G,"72"),children:e.department}),Object(q["jsxs"])("div",{className:"flex justify-center items-center mr-4",_nk:"".concat(G,"1h"),children:[Object(q["jsx"])("img",{alt:"\u8bdd\u9898\u5ea6",className:"h-6 w-6 flex",src:k["hot"],_nk:"".concat(G,"43")}),Object(q["jsx"])("p",{className:"text-lg font-normal ml-2",_nk:"".concat(G,"73"),children:e.replynum})]})]}),Object(q["jsx"])("p",{className:"text-gray-700 font-bold text-base mr-2",_nk:"".concat(G,"74"),children:e.topiccontent}),Object(q["jsx"])("p",{className:"text-md font-normal text-gray-400",_nk:"".concat(G,"75"),children:b()(e.createdTime).format("YYYY-MM-DD HH:mm:ss")})]})]})}),Object(q["jsx"])("div",{className:"w-1/5 flex",_nk:"".concat(G,"1i"),children:Object(q["jsx"])("button",{className:r.topicAdmin?"bg-blue-600 text-white text-base font-semibold rounded-full shadow hover:bg-indigo-600 px-4 py-1":"hidden",type:"submit",onClick:()=>E(e.pid),_nk:"".concat(G,"81"),children:"\u5220\u9664"})})]},e.pid)))}),Object(q["jsx"])("div",{className:"flex h-16 w-full justify-center items-center bg-white sticky bottom-0 border-t",_nk:"".concat(G,"1j"),children:Object(q["jsx"])("button",{className:"bg-blue-600 text-white text-base font-semibold rounded-full shadow hover:bg-indigo-600 px-4 py-1 sticky bottom-8",type:"submit",onClick:()=>_(),_nk:"".concat(G,"82"),children:"\u6211\u8981\u53d1\u8868"})})]})]})})}},uk8H:function(e,t,n){e.exports=n.p+"static/hotTopicBG.d1c3cc4a.png"}}]);