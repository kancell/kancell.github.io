(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{AbPv:function(e,t,a){"use strict";var c=a("tJVT"),n=a("q1tI"),r=a("nKUr"),i="tomp";function s(e){var t,a=e.applyData,s=Object(n["useState"])(new Array(5).fill(!1)),l=Object(c["a"])(s,2),o=l[0],d=(l[1],null===a||void 0===a||null===(t=a.vehicleUsageRecordList)||void 0===t?void 0:t.map(((e,t)=>{var a;return Object(r["jsxs"])("div",{className:"p-4 border rounded-md border-r-gray-200 bg-white my-1",_nk:"".concat(i,"11"),children:[Object(r["jsxs"])("div",{className:"flex items-center justify-between",_nk:"".concat(i,"12"),children:[Object(r["jsxs"])("div",{className:"flex items-center justify-between",_nk:"".concat(i,"13"),children:[Object(r["jsx"])("span",{className:"inline-block p-2 text-blue-500 bg-blue-100 rounded-md",_nk:"".concat(i,"21"),children:Object(r["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",_nk:"".concat(i,"31"),children:Object(r["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",_nk:"".concat(i,"41")})})}),Object(r["jsxs"])("div",{className:"mx-4 mt-0",_nk:"".concat(i,"14"),children:[Object(r["jsx"])("p",{className:"text-base font-medium text-gray-700 capitalize",_nk:"".concat(i,"51"),children:e.driverName}),Object(r["jsx"])("p",{className:"text-xs text-gray-700",_nk:"".concat(i,"52"),children:e.driverMobile})]})]}),Object(r["jsxs"])("div",{className:"text-gray-400",_nk:"".concat(i,"15"),children:["\u8f66\u724c\uff1a",Object(r["jsx"])("span",{className:"border border-blue-400 bg-white text-blue-400 rounded px-1",_nk:"".concat(i,"22"),children:e.vehicleInfo})]})]}),Object(r["jsxs"])("ul",{className:"flex items-center justify-center gap-x-1 p-4 py-2 my-1.5",_nk:"".concat(i,"61"),children:[Object(r["jsx"])("li",{_nk:"".concat(i,"71"),children:"\u51fa\u884c\u4f53\u9a8c\u6253\u5206\uff1a"}),o.map(((t,a)=>Object(r["jsx"])("li",{_nk:"iAr".concat(i,"72"),children:Object(r["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-yellow-500 ".concat(e.evaluationScore>a?"fill-current":""),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",_nk:"".concat(i,"32"),children:Object(r["jsx"])("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",_nk:"".concat(i,"42")})})},a)))]}),Object(r["jsx"])("div",{_nk:"".concat(i,"16"),children:Object(r["jsx"])("textarea",{disabled:!0,value:null!==(a=e.evaluationContent)&&void 0!==a?a:"",className:"w-full py-2 px-4 border focus:border-blue-400 text-sm rounded text-gray-800 bg-gray-100",_nk:"".concat(i,"81")})})]},t)})));return Object(r["jsx"])(r["Fragment"],{children:0!==a.vehicleUsageRecordList.length&&"\u5df2\u5b8c\u6210"===a.vehicleApplicationForm.status?Object(r["jsxs"])("div",{className:"m-2",_nk:"".concat(i,"17"),children:[Object(r["jsx"])("div",{className:"text-gray-400 text-base mb-1",_nk:"".concat(i,"18"),children:"\u8bc4\u4ef7\u4fe1\u606f"}),d]}):Object(r["jsx"])("div",{className:"mx-auto text-lg font-bold text-gray-500 py-2 my-1 text-center",_nk:"".concat(i,"19"),children:"\u6682\u65e0\u7528\u8f66\u8bc4\u4ef7"})})}t["a"]=Object(n["memo"])(s)},BuJn:function(e,t,a){"use strict";var c=a("k1fw"),n=a("9og8"),r=a("tJVT"),i=a("WmNS"),s=a.n(i),l=a("q1tI"),o=a("5Ftn"),d=a("pf/J"),u=a("D3E4"),b=a("pAFO"),j=a("nKUr"),v="LJFf",m=e=>{var t=e.data,a=e.setData,i=e.departName,m=e.phoneNumber,p=Object(l["useState"])(0),h=Object(r["a"])(p,2),x=h[0],O=h[1],k=Object(l["useState"])(),f=Object(r["a"])(k,2),w=f[0],N=f[1],g=Object(l["useState"])(),_=Object(r["a"])(g,2),y=_[0],S=_[1],T=function(){var e=Object(n["a"])(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b["n"])({data:{pageNum:1,pageSize:100,admin:m}});case 3:t=e.sent,t&&t.status&&(a=[],t.result.list.forEach((e=>{var t={value:e.licensePlate,label:Object(j["jsxs"])("div",{_nk:"".concat(v,"11"),children:[e.licensePlate,"(",e.department,",",e.seatNum,"\u5ea7)-",e.status]}),info:{driverName:e.driverName,driverMobile:e.driverMobile}};a.push(t)})),O(a.length),N(a)),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(n["a"])(s.a.mark((function e(){var t,a,c;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b["o"])({data:{department:i,pageNum:1,pageSize:1e3}});case 3:t=e.sent,t&&t.status&&(a=[],c=[...t.result.list],c.forEach((e=>{var t={value:"".concat(e.name," ").concat(e.phoneNumber),label:"".concat(e.name,"\uff08").concat(e.department,"\uff09").concat(e.phoneNumber)};a.push(t)})),S(a)),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l["useEffect"])((()=>{T(),D()}),[]);var F=Object(l["useState"])([null]),M=Object(r["a"])(F,2),A=M[0],L=M[1];return Object(j["jsxs"])("div",{className:"m-2",_nk:"".concat(v,"12"),children:[Object(j["jsxs"])("div",{className:"flex justify-between",_nk:"".concat(v,"13"),children:[Object(j["jsx"])("div",{className:"text-gray-400 text-base mb-1",_nk:"".concat(v,"14"),children:"\u6d3e\u8f66"}),Object(j["jsxs"])("div",{className:"flex items-center",_nk:"".concat(v,"15"),children:[Object(j["jsx"])("div",{onClick:()=>{var e=[...A];e.length>=x?d["a"].show("\u60a8\u7684\u8f66\u8f86\u5df2\u5168\u90e8\u6dfb\u52a0"):(e.push(null),L(e))},className:"bg-blue-100 rounded border border-blue-400 text-blue-400 px-1 mx-1",_nk:"".concat(v,"16"),children:"\u6dfb\u52a0\u8f66\u8f86"}),Object(j["jsx"])("div",{onClick:()=>{var e=[...A];1!==e.length?(t.pop(),a(t),e.pop(),L(e)):d["a"].show("\u81f3\u5c11\u6dfb\u52a0\u4e00\u8f86\u8f66")},className:"bg-red-100 rounded border border-red-400 text-red-400 px-1 mx-1",_nk:"".concat(v,"17"),children:"\u5220\u51cf\u8f66\u8f86"})]})]}),A.map(((e,n)=>{var r,i,s,l,b;return Object(j["jsxs"])("div",{_nk:"iAr".concat(v,"18"),children:[Object(j["jsx"])(o["a"],{title:"\u8f66\u8f86".concat(n+1,"\u9009\u62e9"),_nk:"".concat(v,"21"),children:Object(j["jsx"])(u["a"],{dataSource:w,value:t&&(null===(r=t[n])||void 0===r?void 0:r.vehicle),onOk:e=>{var c=[...t||[]];c[n]={driverMobile:e[0].info.driverMobile,driverName:e[0].info.driverName,vehicle:e[0].value},a(c)},_nk:"".concat(v,"31")})}),Object(j["jsx"])(o["a"],{title:"\u53f8\u673a".concat(n+1,"\u9009\u62e9"),_nk:"".concat(v,"22"),children:Object(j["jsx"])(u["a"],{dataSource:y,value:null!==t&&void 0!==t&&null!==(i=t[n])&&void 0!==i&&i.driverName&&null!==(s=t[n])&&void 0!==s&&s.driverMobile?"".concat(null===(l=t[n])||void 0===l?void 0:l.driverName," ").concat(null===(b=t[n])||void 0===b?void 0:b.driverMobile):void 0,onOk:e=>{var r,i;if(null===t||void 0===t||!t[n])return d["a"].show("\u8bf7\u5148\u9009\u62e9\u8f66\u8f86\uff01"),!1;var s=[...t||[]];s[n]=Object(c["a"])(Object(c["a"])({},s[n]),{},{driverName:null===(r=e[0])||void 0===r?void 0:r.value.split(" ")[0],driverMobile:null===(i=e[0])||void 0===i?void 0:i.value.split(" ")[1]}),a(s)},_nk:"".concat(v,"32")})})]},n)}))]})};t["a"]=m},"SSz/":function(e,t,a){"use strict";var c=a("k1fw"),n=a("tJVT"),r=a("q1tI"),i=a("VsxY"),s=a("nKUr"),l="wsHj",o=e=>{var t=e.loading,a=e.status,o=e.onSubmit,d=e.onWithDraw,u=e.editTag,b=e.onModify,j=e.onEditEnd,v=Object(r["useState"])({all:!0,withDraw:!1,modify:!1,submit:!1}),m=Object(n["a"])(v,2),p=m[0],h=m[1],x=p.all,O=p.withDraw,k=p.modify,f=p.submit;return Object(r["useEffect"])((()=>{switch(a){case"\u5ba1\u6279\u901a\u8fc7":h(Object(c["a"])(Object(c["a"])({},p),{},{all:!0,submit:!0,withDraw:!0}));break;case"\u6d3e\u8f66\u6210\u529f":h(Object(c["a"])(Object(c["a"])({},p),{},{all:!0,modify:!0,withDraw:!0}));break;case"\u5df2\u63d0\u4ea4":case"\u5ba1\u6279\u4e2d":case"\u9a73\u56de":case"\u7ba1\u7406\u5458\u64a4\u56de":case"\u51fa\u884c\u4e2d":case"\u5f85\u8bc4\u4ef7":case"\u5df2\u5b8c\u6210":h(Object(c["a"])(Object(c["a"])({},p),{},{all:!1}));break;default:h(Object(c["a"])(Object(c["a"])({},p),{},{all:!1}));break}}),[a]),x?Object(s["jsxs"])("div",{className:"sticky bottom-20 mb-8 flex divide-x rounded-full divide-blue-300 text-center py-2 mx-4 my-4 text-blue-500 text-base bg-gradient-to-r from-blue-100 to-blue-200",_nk:"".concat(l,"11"),children:[O&&d&&Object(s["jsx"])("div",{onClick:()=>{i["a"].confirm({title:"\u786e\u8ba4\u9a73\u56de\u8fd9\u6761\u7533\u8bf7\u5417",onCancel:()=>{},onOk:()=>d()})},className:"flex-1",_nk:"".concat(l,"12"),children:t?"\u5904\u7406\u4e2d":"\u9a73\u56de\u7533\u8bf7"}),f&&o&&Object(s["jsx"])("div",{onClick:()=>{i["a"].confirm({title:"\u786e\u8ba4\u6d3e\u8f66\u5417",onCancel:()=>{},onOk:()=>o()})},className:"flex-1",_nk:"".concat(l,"13"),children:t?"\u5904\u7406\u4e2d":"\u6d3e\u8f66"}),k&&b&&Object(s["jsx"])("div",{onClick:()=>{i["a"].confirm({title:u?"\u786e\u8ba4\u53d6\u6d88\u4fee\u6539\u5417":"\u786e\u8ba4\u4fee\u6539\u5417",onCancel:()=>{},onOk:()=>b()})},className:"flex-1",_nk:"".concat(l,"14"),children:u?"\u53d6\u6d88\u4fee\u6539":"\u4fee\u6539\u7533\u8bf7"}),u&&j&&Object(s["jsx"])("div",{onClick:()=>{i["a"].confirm({title:"\u786e\u8ba4\u7ed3\u675f\u4fee\u6539\u5417",onCancel:()=>{},onOk:()=>j()})},className:"flex-1",_nk:"".concat(l,"15"),children:"\u63d0\u4ea4\u4fee\u6539"})]}):Object(s["jsx"])(s["Fragment"],{})};t["a"]=o},ZR5f:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var c=a("9og8"),n=a("k1fw"),r=a("tJVT"),i=a("WmNS"),s=a.n(i),l=a("q1tI"),o=a("9mPY"),d=a("Ty5D"),u=a("9kvl"),b=a("pAFO"),j=a("sda0"),v=a("tU6r"),m=a("B16J"),p=a("5Ipf"),h=a("AbPv"),x=a("SSz/"),O=a("pf/J"),k=a("BuJn"),f=a("nKUr"),w="1PcK";function N(){var e,t=Object(d["h"])(),a=t,i=Object(u["e"])("@@initialState"),N=i.initialState,g=N,_=Object(l["useState"])(),y=Object(r["a"])(_,2),S=y[0],T=y[1],D=Object(l["useState"])({}),F=Object(r["a"])(D,2),M=F[0],A=F[1],L=e=>{A(Object(n["a"])(Object(n["a"])({},M),{},{driverList:e}))},C=function(){var e=Object(c["a"])(s.a.mark((function e(){var t,c,r,i;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["b"])({params:{id:a.id}});case 2:t=e.sent,t&&t.status&&(T(t.result),A(Object(n["a"])(Object(n["a"])({},M),{},{applicationFormId:a.id,arrivalTime:null===(c=t.result)||void 0===c?void 0:c.vehicleApplicationForm.arrivalTime,assignorName:g.user.userName,assignorMobile:g.user.phoneNumber,departureTime:null===(r=t.result)||void 0===r?void 0:r.vehicleApplicationForm.departureTime,remark:null===(i=t.result)||void 0===i?void 0:i.vehicleApplicationForm.remark})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l["useEffect"])((()=>{C()}),[]);var J=Object(l["useState"])(!1),E=Object(r["a"])(J,2),z=E[0],I=E[1],P=function(){var e=Object(c["a"])(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!z){e.next=2;break}return e.abrupt("return");case 2:return I(!0),e.prev=3,e.next=6,Object(b["l"])({data:{id:a.id}});case 6:t=e.sent,t&&t.status?(O["a"].show("".concat(t.message,", \u5373\u5c06\u56de\u5230\u4e0a\u4e00\u9875")),setTimeout((()=>{u["a"].goBack()}),3e3)):I(!1),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),I(!1);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),B=Object(l["useState"])(!1),U=Object(r["a"])(B,2),W=U[0],K=U[1],V=function(){var e=Object(c["a"])(s.a.mark((function e(){var t,c,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=!0,n=[],null===(t=M.driverList)||void 0===t||t.forEach((e=>{e.vehicle&&e.driverName&&e.driverMobile?n.push(Object(b["p"])({data:{applicationId:a.id,arrivalTime:M.arrivalTime,departureTime:M.departureTime,licensePlate:e.vehicle}})):c=!1})),c){e.next=6;break}return O["a"].show("\u8bf7\u9009\u62e9\u8f66\u8f86\u4e0e\u5bf9\u5e94\u53f8\u673a"),e.abrupt("return");case 6:Promise.all(n).then((e=>{var t=e.every((e=>e&&e.status));t&&q()}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(c["a"])(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!z){e.next=2;break}return e.abrupt("return");case 2:return I(!0),e.prev=3,e.next=6,Object(b["h"])({data:M});case 6:t=e.sent,t&&t.status?(O["a"].show("".concat(t.message,", \u5373\u5c06\u56de\u5230\u4e0a\u4e00\u9875")),setTimeout((()=>{u["a"].goBack()}),3e3)):I(!1),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),I(!1);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),R="\u6d3e\u8f66\u6210\u529f"===(null===S||void 0===S?void 0:S.vehicleApplicationForm.status)&&W?Object(f["jsx"])(k["a"],{data:M.driverList,setData:L,departName:g.user.deptName,phoneNumber:g.user.phoneNumber,_nk:"".concat(w,"11")}):Object(f["jsx"])(f["Fragment"],{children:S&&Object(f["jsx"])(p["a"],{applyData:S,_nk:"".concat(w,"21")})});return Object(f["jsxs"])(f["Fragment"],{children:[Object(f["jsx"])("div",{className:"sticky top-0 bg-white z-10",_nk:"".concat(w,"31"),children:Object(f["jsx"])(o["a"],{title:"\u8ba2\u8f66\u8be6\u60c5",_nk:"".concat(w,"41")})}),Object(f["jsx"])("div",{className:"m-2",_nk:"".concat(w,"32"),children:Object(f["jsxs"])("div",{className:"text-gray-400 text-base mb-1",_nk:"".concat(w,"33"),children:["\u6d41\u7a0b\u72b6\u6001\uff1a",Object(f["jsx"])("span",{className:"border border-blue-400 bg-white text-blue-400 rounded px-1",_nk:"".concat(w,"51"),children:null===S||void 0===S?void 0:S.vehicleApplicationForm.status})]})}),S&&Object(f["jsx"])(j["a"],{applyData:S,_nk:"".concat(w,"61")}),S&&Object(f["jsx"])(v["a"],{applyData:S,_nk:"".concat(w,"71")}),S&&Object(f["jsx"])(m["a"],{applyData:S,_nk:"".concat(w,"81")}),S&&R,S&&Object(f["jsx"])(h["a"],{applyData:S,_nk:"".concat(w,"91")}),Object(f["jsx"])(x["a"],{status:null!==(e=null===S||void 0===S?void 0:S.vehicleApplicationForm.status)&&void 0!==e?e:"",loading:z,onWithDraw:P,editTag:W,onModify:()=>{K(!W)},onEditEnd:V,_nk:"".concat(w,"a1")})]})}}}]);