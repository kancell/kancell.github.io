(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"9mPY":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("9kvl"),r=n("nKUr"),a="8umz";function s(e){var t=e.title,n=e.backTo,s=e.children,i=e.className,o=()=>{void 0===n?c["a"].goBack():c["a"].replace(n)};return Object(r["jsx"])(r["Fragment"],{children:Object(r["jsxs"])("div",{className:"".concat(null!==i&&void 0!==i?i:""," flex justify-between items-center px-2 py-2.5 bg-white border-b"),_nk:"".concat(a,"11"),children:[Object(r["jsx"])("div",{className:"flex flex-1 font-semibold text-base mx-2 ml-auto",onClick:()=>o(),_nk:"".concat(a,"12"),children:Object(r["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",_nk:"".concat(a,"21"),children:Object(r["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7",_nk:"".concat(a,"31")})})}),Object(r["jsx"])("div",{className:"flex justify-center font-semibold text-base flex-nowrap",_nk:"".concat(a,"13"),children:t}),Object(r["jsx"])("div",{className:"flex flex-1 flex-row-reverse",_nk:"".concat(a,"14"),children:s})]})})}},IqKm:function(e,t,n){"use strict";n.r(t);var c=n("9og8"),r=n("tJVT"),a=n("WmNS"),s=n.n(a),i=n("9mPY"),o=n("q1tI"),u=n("Ty5D"),l=n("bzZe"),b=n("nKUr"),d="6an+",p=()=>{var e=Object(u["h"])(),t=e,n=Object(o["useState"])(),a=Object(r["a"])(n,2),p=a[0],f=a[1],j=function(){var e=Object(c["a"])(s.a.mark((function e(t){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["a"])({params:{newsId:t}});case 3:n=e.sent,n&&n.status&&f(n.result),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o["useEffect"])((()=>{t.id&&j(t.id)}),[]),Object(o["useEffect"])((()=>{var e=document.getElementById("content");p&&e&&(e.innerHTML=p.text)}),[p]),Object(b["jsxs"])("div",{_nk:"".concat(d,"11"),children:[Object(b["jsx"])(i["a"],{title:"\u6587\u7ae0\u8be6\u60c5",_nk:"".concat(d,"21")}),Object(b["jsx"])("div",{className:"m-2 py-2 px-4 bg-white whitespace-pre-wrap",_nk:"".concat(d,"12"),children:Object(b["jsx"])("div",{id:"content",_nk:"".concat(d,"13")})})]})};t["default"]=p},bzZe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var c=n("k1fw"),r=n("9og8"),a=n("WmNS"),s=n.n(a),i=n("9kvl");function o(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/news/getArticle",Object(c["a"])({method:"GET"},t||{})));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/news/getArticleList-fuzzy",Object(c["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}}}]);