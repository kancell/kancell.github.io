(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"9mPY":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("9kvl"),c=n("nKUr"),a="8umz";function o(e){var t=e.title,n=e.backTo,o=e.children,i=e.className,s=()=>{void 0===n?r["a"].goBack():r["a"].replace(n)};return Object(c["jsx"])(c["Fragment"],{children:Object(c["jsxs"])("div",{className:"".concat(null!==i&&void 0!==i?i:""," flex justify-between items-center px-2 py-2.5 bg-white border-b"),_nk:"".concat(a,"11"),children:[Object(c["jsx"])("div",{className:"flex flex-1 font-semibold text-base mx-2 ml-auto",onClick:()=>s(),_nk:"".concat(a,"12"),children:Object(c["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",_nk:"".concat(a,"21"),children:Object(c["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7",_nk:"".concat(a,"31")})})}),Object(c["jsx"])("div",{className:"flex justify-center font-semibold text-base flex-nowrap",_nk:"".concat(a,"13"),children:t}),Object(c["jsx"])("div",{className:"flex flex-1 flex-row-reverse",_nk:"".concat(a,"14"),children:o})]})})}},KgN1:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return u}));var r=e=>{if(void 0===e)return[];var t=[],n=e.split(",");return a.forEach((e=>{n.includes(e.icon)&&t.push(e)})),t},c=new Map([["tea","\u8336\u6c34"],["tableCard","\u53f0\u724c"],["soundRecording","\u5f55\u97f3"],["projector","\u6295\u5f71\u4eea"],["microphone","\u9ea6\u514b\u98ce"],["camera","\u6444\u50cf\u5934"]]),a=[{icon:"tea",name:"\u8336\u6c34"},{icon:"tableCard",name:"\u53f0\u724c"},{icon:"soundRecording",name:"\u5f55\u97f3"},{icon:"projector",name:"\u6295\u5f71\u4eea"},{icon:"microphone",name:"\u9ea6\u514b\u98ce"},{icon:"camera",name:"\u6444\u50cf\u5934"}],o={"08:00 - 10:00":["08:00:00","10:00:00"],"10:00 - 12:00":["10:00:00","12:00:00"],"12:00 - 14:00":["12:00:00","14:00:00"],"14:00 - 16:00":["14:00:00","16:00:00"],"16:00 - 18:00":["16:00:00","18:00:00"]},i={"10\u4ee5\u4e0b":"0,10","10-25":"10,25","25-50":"25,50","50\u4ee5\u4e0a":"50,100"},s=new Map([["0,10","10\u4ee5\u4e0b"],["10,25","10\u4eba\u523025\u4eba"],["25,50","25\u4eba\u523050\u4eba"],["50,100","50\u4eba\u4ee5\u4e0a"]]),u=new Map([["\u5df2\u63d0\u4ea4",{status:"\u5df2\u63d0\u4ea4",color:"yellow"}],["\u64a4\u56de",{status:"\u64a4\u56de",color:"red"}],["\u9884\u5b9a\u5931\u8d25",{status:"\u9884\u5b9a\u5931\u8d25",color:"red"}],["\u7ba1\u7406\u5458\u64a4\u56de",{status:"\u7ba1\u7406\u5458\u64a4\u56de",color:"green"}],["\u5df2\u8fc7\u671f",{status:"\u5df2\u8fc7\u671f",color:"red"}],["\u9884\u5b9a\u6210\u529f",{status:"\u9884\u5b9a\u6210\u529f",color:"blue"}],["\u5df2\u901a\u77e5",{status:"\u5df2\u901a\u77e5",color:"blue"}],["\u5df2\u5b8c\u6210",{status:"\u5df2\u5b8c\u6210",color:"blue"}],["\u4f1a\u8bae\u4e2d",{status:"\u4f1a\u8bae\u4e2d",color:"blue"}]])},bBYM:function(e,t,n){"use strict";var r=n("55Ip"),c=n("q1tI"),a=n("Wgwc"),o=n.n(a),i=n("NPPy"),s=n("nKUr"),u="jid5";function l(e){var t=e.title,n=e.status,c=e.color,a=e.path,l=e.time,m=e.type,d={blue:"text-blue-400 border-blue-400 bg-blue-100",green:"text-green-400 border-green-400 bg-green-100",red:"text-red-400 border-red-400 bg-red-100",yellow:"text-yellow-400 border-yellow-400 bg-yellow-100"};return Object(s["jsxs"])("div",{className:"flex px-4 py-3 bg-white rounded",_nk:"".concat(u,"11"),children:[Object(s["jsxs"])("div",{className:"flex flex-shrink-0 items-center justify-center h-12 w-10 rounded",_nk:"".concat(u,"12"),children:["task"===m&&Object(s["jsx"])("img",{src:i["task"],_nk:"".concat(u,"21")}),"tips"===m&&Object(s["jsx"])("img",{src:i["tips"],_nk:"".concat(u,"22")}),void 0===m&&Object(s["jsx"])("img",{src:i["news"],_nk:"".concat(u,"23")})]}),Object(s["jsxs"])("div",{className:"flex-grow flex flex-col ml-4",_nk:"".concat(u,"13"),children:[Object(s["jsx"])("span",{className:"text-base",_nk:"".concat(u,"31"),children:t}),Object(s["jsxs"])("div",{className:"flex items-center justify-between",_nk:"".concat(u,"14"),children:[Object(s["jsx"])("div",{className:"".concat(c?d[c]:d["blue"]," text-sm border rounded-sm px-1"),_nk:"".concat(u,"15"),children:n}),Object(s["jsx"])(r["a"],{to:a||"",_nk:"".concat(u,"41"),children:Object(s["jsx"])("span",{className:"text-blue-400 text-sm ml-2",_nk:"".concat(u,"32"),children:"\u67e5\u770b\u8be6\u60c5"})})]}),Object(s["jsx"])("span",{className:"text-xs",_nk:"".concat(u,"33"),children:o()(l).format("YYYY-MM-DD HH:mm")})]})]})}t["a"]=Object(c["memo"])(l)},dKpr:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return v})),n.d(t,"i",(function(){return y}));var r=n("k1fw"),c=n("9og8"),a=n("WmNS"),o=n.n(a),i=n("9kvl");function s(e){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomManage/queryRoomList",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomManage/queryRoomInfoDetail",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/roomReservation",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function b(e){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/queryRoomReservationList",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/queryRoomReservationDetail",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/roomAudit",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return g=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/meetingNoticeRecall",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/meetingNotice",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return N=Object(c["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["c"])("/we/meeting/meetingRoomReservation/JudgeAvailability",Object(r["a"])({method:"POST"},t||{})));case 1:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}},tg5w:function(e,t,n){"use strict";n.r(t);var r=n("9og8"),c=n("tJVT"),a=n("WmNS"),o=n.n(a),i=n("q1tI"),s=n("9kvl"),u=n("P52E"),l=n("9mPY"),m=n("dKpr"),d=n("bBYM"),p=n("crOQ"),b=n("KgN1"),j=n("nKUr"),f="s4Jc",h=()=>{var e=Object(s["e"])("@@initialState"),t=e.initialState,n=t,a=Object(i["useState"])(),h=Object(c["a"])(a,2),x=h[0],O=h[1],w=function(){var e=Object(r["a"])(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["b"])({data:{auditorPhoneNumber:n.user.phoneNumber}});case 2:t=e.sent,t&&t.status&&O(t.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i["useEffect"])((()=>{w()}),[]),Object(u["useActivate"])((()=>{w()}));var g=x?0!==x.length?x.map((e=>{var t;return Object(j["jsx"])(d["a"],{path:"/meeting/manage/approve/record/".concat(e.id),title:"".concat(e.booker,"\u7684").concat(e.changeRoomName?e.changeRoomName+"\uff08\u6709\u53d8\u66f4\uff09":e.roomName,"\u4f7f\u7528\u7533\u8bf7-").concat(e.meetingTheme),status:e.status,color:e.status&&(null===(t=b["f"].get(e.status))||void 0===t?void 0:t.color),time:e.beginTime,_nk:"iAr".concat(f,"11")},e.id)})):Object(j["jsx"])("div",{className:"mx-auto text-2xl font-bold text-gray-500 py-8 text-center",_nk:"".concat(f,"21"),children:"\u6682\u65e0\u5f85\u5ba1\u6279\u8bb0\u5f55"}):Object(j["jsx"])(p["a"],{_nk:"".concat(f,"31")});return Object(j["jsxs"])(j["Fragment"],{children:[Object(j["jsx"])("div",{className:"sticky top-0",_nk:"".concat(f,"22"),children:Object(j["jsx"])(l["a"],{title:"\u4f1a\u8bae\u5ba1\u6279",_nk:"".concat(f,"41")})}),Object(j["jsx"])("div",{className:"p-2",_nk:"".concat(f,"23"),children:g})]})};t["default"]=Object(i["memo"])((()=>Object(j["jsx"])(u["KeepAlive"],{name:"/MeetingApproveList",saveScrollPosition:"screen",_nk:"".concat(f,"51"),children:Object(j["jsx"])(h,{_nk:"".concat(f,"61")})})))}}]);