(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"9mPY":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("9kvl"),c=n("nKUr"),a="8umz";function s(e){var t=e.title,n=e.backTo,s=e.children,i=e.className,o=()=>{void 0===n?r["a"].goBack():r["a"].replace(n)};return Object(c["jsx"])(c["Fragment"],{children:Object(c["jsxs"])("div",{className:"".concat(null!==i&&void 0!==i?i:""," flex justify-between items-center px-2 py-2.5 bg-white border-b"),_nk:"".concat(a,"11"),children:[Object(c["jsx"])("div",{className:"flex flex-1 font-semibold text-base mx-2 ml-auto",onClick:()=>o(),_nk:"".concat(a,"12"),children:Object(c["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",_nk:"".concat(a,"21"),children:Object(c["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7",_nk:"".concat(a,"31")})})}),Object(c["jsx"])("div",{className:"flex justify-center font-semibold text-base flex-nowrap",_nk:"".concat(a,"13"),children:t}),Object(c["jsx"])("div",{className:"flex flex-1 flex-row-reverse",_nk:"".concat(a,"14"),children:s})]})})}},bBYM:function(e,t,n){"use strict";var r=n("55Ip"),c=n("q1tI"),a=n("Wgwc"),s=n.n(a),i=n("NPPy"),o=n("nKUr"),u="jid5";function l(e){var t=e.title,n=e.status,c=e.color,a=e.path,l=e.time,p=e.type,d={blue:"text-blue-400 border-blue-400 bg-blue-100",green:"text-green-400 border-green-400 bg-green-100",red:"text-red-400 border-red-400 bg-red-100",yellow:"text-yellow-400 border-yellow-400 bg-yellow-100"};return Object(o["jsxs"])("div",{className:"flex px-4 py-3 bg-white rounded",_nk:"".concat(u,"11"),children:[Object(o["jsxs"])("div",{className:"flex flex-shrink-0 items-center justify-center h-12 w-10 rounded",_nk:"".concat(u,"12"),children:["task"===p&&Object(o["jsx"])("img",{src:i["task"],_nk:"".concat(u,"21")}),"tips"===p&&Object(o["jsx"])("img",{src:i["tips"],_nk:"".concat(u,"22")}),void 0===p&&Object(o["jsx"])("img",{src:i["news"],_nk:"".concat(u,"23")})]}),Object(o["jsxs"])("div",{className:"flex-grow flex flex-col ml-4",_nk:"".concat(u,"13"),children:[Object(o["jsx"])("span",{className:"text-base font-medium",_nk:"".concat(u,"31"),children:t}),Object(o["jsxs"])("div",{className:"flex items-center justify-between",_nk:"".concat(u,"14"),children:[Object(o["jsx"])("div",{className:"".concat(c?d[c]:d["blue"]," text-sm border rounded-sm px-1"),_nk:"".concat(u,"15"),children:n}),Object(o["jsx"])(r["a"],{to:a||"",_nk:"".concat(u,"41"),children:Object(o["jsx"])("span",{className:"text-blue-400 text-sm ml-2",_nk:"".concat(u,"32"),children:"\u67e5\u770b\u8be6\u60c5"})})]}),Object(o["jsx"])("span",{className:"text-xs",_nk:"".concat(u,"33"),children:s()(l).format("YYYY-MM-DD HH:mm")})]})]})}t["a"]=Object(c["memo"])(l)},imJ3:function(e,t,n){"use strict";n.r(t);var r=n("9og8"),c=n("tJVT"),a=n("WmNS"),s=n.n(a),i=n("q1tI"),o=n("9kvl"),u=n("P52E"),l=n("9mPY"),p=n("bBYM"),d=n("zmV5"),b=n("nKUr"),h="e3u9",j=()=>{var e=Object(o["e"])("@@initialState"),t=e.initialState,n=(e.loading,e.error,e.refresh,e.setInitialState,t),a=Object(i["useState"])({waitApprovest:0,haveApprovest:0,reject:0,lending:0,finish:0}),j=Object(c["a"])(a,2),f=j[0],m=j[1],x=Object(i["useState"])(),v=Object(c["a"])(x,2),w=v[0],O=v[1],k=function(){var e=Object(r["a"])(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["f"])({data:{applicantEmployeeId:n.user.employeeId}});case 3:t=e.sent,t&&t.status&&(O(t.result.list),r={waitApprovest:0,haveApprovest:0,reject:0,lending:0,finish:0},t.result.list.forEach((e=>{switch(e.status){case"\u5f85\u5ba1\u6279":r.waitApprovest+=1;break;case"\u5df2\u5ba1\u6279":r.haveApprovest+=1;break;case"\u9a73\u56de":r.reject+=1;break;case"\u501f\u51fa\u4e2d":r.lending+=1;break;case"\u5df2\u5f52\u8fd8":r.finish+=1;break;default:break}})),m(r)),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(i["useEffect"])((()=>{k()}),[]),Object(u["useActivate"])((()=>{k()})),Object(b["jsxs"])(b["Fragment"],{children:[Object(b["jsx"])("div",{className:"sticky top-0 bg-white z-10",_nk:"".concat(h,"11"),children:Object(b["jsx"])(l["a"],{title:"\u501f\u9605\u7533\u8bf7\u8bb0\u5f55",_nk:"".concat(h,"21")})}),Object(b["jsxs"])("div",{className:"p-2",_nk:"".concat(h,"12"),children:[Object(b["jsxs"])("div",{className:"flex justify-between mt-2 flex-wrap",_nk:"".concat(h,"13"),children:[Object(b["jsxs"])("div",{className:"flex items-center border border-red-500 rounded px-1 py-0.5 mb-2 text-red-500 bg-red-100",_nk:"".concat(h,"14"),children:["\u5f85\u5ba1\u6279: ",f.waitApprovest]}),Object(b["jsxs"])("div",{className:"flex items-center border border-blue-500 rounded px-1 py-0.5 mb-2 text-blue-500 bg-blue-100",_nk:"".concat(h,"15"),children:["\u5df2\u5ba1\u6279\uff1a",f.haveApprovest]}),Object(b["jsxs"])("div",{className:"flex items-center border border-yellow-500 rounded px-1 py-0.5 mb-2 text-yellow-500 bg-yellow-100",_nk:"".concat(h,"16"),children:["\u88ab\u9a73\u56de\uff1a",f.reject]}),Object(b["jsxs"])("div",{className:"flex items-center border border-red-400 rounded px-1 py-0.5 mb-2 text-red-400 bg-red-100",_nk:"".concat(h,"17"),children:["\u501f\u51fa\u4e2d\uff1a",f.lending]}),Object(b["jsxs"])("div",{className:"flex items-center border border-green-500 rounded px-1 py-0.5 mb-2 text-green-500 bg-green-100",_nk:"".concat(h,"18"),children:["\u5df2\u5f52\u8fd8\uff1a",f.finish]})]}),w&&0!==w.length?null===w||void 0===w?void 0:w.map((e=>Object(b["jsx"])(p["a"],{time:e.createdTime,title:e.title,status:e.status,path:"/borrowFile/user/record/detail/".concat(e.pid),_nk:"".concat(h,"31")},e.pid))):Object(b["jsx"])("div",{className:"mx-auto text-xl font-bold text-gray-500 py-8 text-center",_nk:"".concat(h,"19"),children:"\u73b0\u5728\u6ca1\u6709\u5df2\u63d0\u4ea4\u7684\u7533\u8bf7\u5355"})]})]})};t["default"]=Object(i["memo"])((()=>Object(b["jsx"])(u["KeepAlive"],{name:"/BorrowFileReocrd",saveScrollPosition:"screen",_nk:"".concat(h,"41"),children:Object(b["jsx"])(j,{_nk:"".concat(h,"51")})})))},zmV5:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return w})),n.d(t,"a",(function(){return k})),n.d(t,"g",(function(){return y}));var r=n("k1fw"),c=n("9og8"),a=n("WmNS"),s=n.n(a),i=n("9kvl");function o(e){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/archiveApplication",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/queryFormList",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/queryApprovalFormList",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/applicationFormDetails",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/archiveApproval",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return v=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/handleBborrowing",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/handleReturn",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function k(e){return g.apply(this,arguments)}function g(){return g=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/queryBorrowingFormList",Object(r["a"])({method:"GET"},t||{})));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function y(e){return _.apply(this,arguments)}function _(){return _=Object(c["a"])(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/archive/archiveManage/handleBackUp",Object(r["a"])({method:"post"},t||{})));case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}}}]);