(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{"4maU":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("YS25"),r={basename:"/"};window.routerBase&&(r.basename=window.routerBase);var c=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(a["b"])(r)},"6Sfb":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("9og8"),r=n("tJVT"),c=n("WmNS"),s=n.n(c),l=n("q1tI"),o=n("4maU"),i=n("9mPY"),u=n("LQih"),b=n("9kvl"),d=n("nKUr"),p="Qnun";function j(){var e=Object(b["e"])("@@initialState"),t=e.initialState,n=(e.loading,e.error,e.refresh,e.setInitialState,t),c=n.user.id;console.log(c+"  userid ");var j=Object(l["useState"])(""),m=Object(r["a"])(j,2),x=m[0],h=m[1],f=function(){var e=Object(a["a"])(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=x.length&&""!=x&&null!=x){e.next=5;break}alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u540d\u5b57\uff01\uff01"),h(""),e.next=26;break;case 5:return e.prev=5,e.next=8,Object(u["e"])({data:{name:x}});case 8:if(t=e.sent,n=t.result,console.log(n+" result 11 "),null!=n){e.next=20;break}return e.next=14,Object(u["b"])({data:{name:x,wid:c}});case 14:a=e.sent,r=a.result,console.log(r+"  result  result"),null!=r&&o["a"].push("/stuffVoice/user/home/"),e.next=21;break;case 20:alert("\u7528\u6237\u540d\u5df2\u88ab\u4f7f\u7528\uff01\uff01");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](5),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(){return e.apply(this,arguments)}}();return Object(d["jsxs"])("div",{className:"",_nk:"".concat(p,"11"),children:[Object(d["jsx"])(i["a"],{title:"\u533f\u540d\u8d26\u53f7",_nk:"".concat(p,"21")}),Object(d["jsx"])("div",{className:"h-screen flex justify-center items-center bg-gray-100",_nk:"".concat(p,"12"),children:Object(d["jsxs"])("div",{className:"p-4 m-4 bg-white flex justify-center items-center flex-col shadow-md",_nk:"".concat(p,"13"),children:[Object(d["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-20 h-20 text-gray-600 mb-2",viewBox:"0 0 20 20",fill:"currentColor",_nk:"".concat(p,"31"),children:Object(d["jsx"])("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",_nk:"".concat(p,"41")})}),Object(d["jsx"])("p",{className:"mb-5 text-3xl uppercase text-gray-600",_nk:"".concat(p,"51"),children:"\u533f\u540d\u8d26\u53f7"}),Object(d["jsx"])("input",{type:"text",className:"mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none",placeholder:"\u65b0\u540d\u5b57",onChange:e=>h(e.target.value.trim()),_nk:"".concat(p,"61")}),Object(d["jsx"])("button",{className:"bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80",onClick:f,_nk:"".concat(p,"71"),children:"\u533f\u540d"})]})})]})}}}]);