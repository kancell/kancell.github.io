(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"+7SR":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return v}));var n=c("9og8"),a=c("tJVT"),s=c("WmNS"),r=c.n(s),i=c("q1tI"),o=c("9mPY"),l=c("9kvl"),d=c("Wgwc"),u=c.n(d),b=c("uzmA"),m=c("NPPy"),j=c("LQih"),p=c("nKUr"),x="jUmT";function v(){var e=Object(l["e"])("@@initialState"),t=e.initialState,c=(e.loading,e.error,e.refresh,e.setInitialState,t),s=Object(l["d"])(),d=m,v=sessionStorage.getItem("topicid"),h=Object(i["useState"])(),f=Object(a["a"])(h,2),O=f[0],k=f[1],g=Object(i["useState"])(),w=Object(a["a"])(g,2),y=w[0],N=w[1],_=Object(i["useState"])(),S=Object(a["a"])(_,2),C=(S[0],S[1],Object(i["useState"])()),Y=Object(a["a"])(C,2),M=Y[0],I=Y[1],T=Object(i["useState"])(),D=Object(a["a"])(T,2),J=D[0],z=D[1],H=function(){var e=Object(n["a"])(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j["D"])({data:{topicid:v}});case 3:t=e.sent,void 0!=t&&(c=t.result,console.log(c+" result result"),N(c)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(n["a"])(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["I"])({data:{topicid:v,regid:c.user.id}});case 2:t=e.sent,void 0!=t&&(n=t.result,k(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n["a"])(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["w"])({data:{id:v,module:10}});case 2:t=e.sent,void 0!=t&&(c=t.result,I(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(n["a"])(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["J"])({data:{topicid:v,regid:c.user.id}});case 2:t=e.sent,void 0!=t&&(n=t.result,z(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i["useEffect"])((()=>{H(),A(),U(),E()}),[]);var P=function(){var e=Object(n["a"])(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=a){e.next=10;break}return e.next=3,Object(j["B"])({data:{regid:c.user.id,topicid:v,replyid:t}});case 3:return e.sent,n=(null===y||void 0===y?void 0:y.replynum)+1,e.next=7,Object(j["M"])({data:{id:null===y||void 0===y?void 0:y.pid,replycount:n}});case 7:e.sent,e.next=17;break;case 10:return n=(null===y||void 0===y?void 0:y.replynum)-1,e.next=13,Object(j["M"])({data:{id:null===y||void 0===y?void 0:y.pid,replycount:n}});case 13:return e.sent,e.next=16,Object(j["g"])({data:{regid:c.user.id,replyid:t}});case 16:e.sent;case 17:H(),E();case 19:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),V=Object(i["useState"])(""),q=Object(a["a"])(V,2),K=q[0],R=q[1],W=function(){var e=Object(n["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0==K.length){e.next=12;break}return e.prev=1,e.next=4,Object(j["G"])({data:{regid:c.user.id,topicid:v,replycontent:K,Uname:c.user.userName,img:c.user.wxHeadImage}});case 4:e.sent,R(""),U(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(n["a"])(r.a.mark((function e(t){var c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["H"])({data:{replyid:t}});case 2:return e.sent,c=(null===y||void 0===y?void 0:y.replynum)-1,e.prev=4,e.next=7,Object(j["M"])({data:{id:null===y||void 0===y?void 0:y.pid,replycount:c}});case 7:e.sent,H(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log(e.t0);case 14:U();case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p["jsxs"])("div",{className:"min-h-screen bg-white",_nk:"".concat(x,"11"),children:[Object(p["jsx"])(o["a"],{className:"sticky top-0 z-10",title:"\u8bdd\u9898\u5185\u5bb9",backTo:"/stuffVoice/user/home/union/uniontopic",_nk:"".concat(x,"21")}),Object(p["jsxs"])("div",{className:"bg-white min-h-screen max-w-full p-4",_nk:"".concat(x,"12"),children:[Object(p["jsxs"])("div",{className:"w-full flex",_nk:"".concat(x,"13"),children:[Object(p["jsx"])("div",{className:"flex w-1/5",_nk:"".concat(x,"14"),children:Object(p["jsx"])("img",{className:"rounded-full h-16 w-16",src:null===y||void 0===y?void 0:y.img,alt:"\u5934\u50cf",_nk:"".concat(x,"31")})}),Object(p["jsxs"])("div",{className:"pl-5 w-4/5",_nk:"".concat(x,"15"),children:[Object(p["jsxs"])("div",{className:"flex",_nk:"".concat(x,"16"),children:[Object(p["jsx"])("span",{className:"font-bold text-sm",_nk:"".concat(x,"41"),children:null===y||void 0===y?void 0:y.name}),Object(p["jsx"])("span",{className:"font-bold text-sm",_nk:"".concat(x,"42"),children:null===y||void 0===y?void 0:y.department}),Object(p["jsx"])("p",{className:"text-gray-500 mt-1",_nk:"".concat(x,"51"),children:u()(null===y||void 0===y?void 0:y.createdTime).format("YYYY-MM-DD")}),Object(p["jsxs"])("div",{className:"mt-1 flex justify-end items-center",_nk:"".concat(x,"17"),children:[Object(p["jsx"])("img",{className:"rounded-full w-10 h-10 border border-white",src:J?d["thumbsdown"]:d["thumbs"],alt:"\u70b9\u8d5e",onClick:()=>P(0,1,J),_nk:"".concat(x,"32")}),Object(p["jsx"])("div",{className:"text-base text-gray-500 font-semibold",_nk:"".concat(x,"18"),children:null===y||void 0===y?void 0:y.replynum})]})]}),Object(p["jsx"])("p",{className:"py-2 text-base my-2 text-gray-600",_nk:"".concat(x,"52"),children:null===y||void 0===y?void 0:y.topiccontent})]})]}),Object(p["jsx"])("div",{className:"p-4 flex",_nk:"".concat(x,"19"),children:null===M||void 0===M?void 0:M.map(((e,t)=>Object(p["jsx"])(b["a"],{className:"w-24 mx-1",src:e.base64,alt:"",_nk:"".concat(x,"61")},t)))}),Object(p["jsx"])("div",{className:"mt-4",_nk:"".concat(x,"1a"),children:Object(p["jsx"])("div",{className:"space-y-4 flex-col bg-white",_nk:"".concat(x,"1b"),children:null===O||void 0===O?void 0:O.map(((e,t)=>Object(p["jsxs"])("div",{className:"bg-gray-100 flex ml-5 rounded-md shadow",_nk:"".concat(x,"1c"),children:[Object(p["jsx"])("div",{className:"flex-shrink-0 ml-3",_nk:"".concat(x,"1d"),children:Object(p["jsx"])("img",{className:"mt-2 rounded-full w-10 h-10",src:e.img,alt:"\u5934\u50cf",_nk:"".concat(x,"33")})}),Object(p["jsxs"])("div",{className:"w-full rounded-md pl-4 pt-2 pb-1 pr-1 leading-relaxed",_nk:"".concat(x,"1e"),children:[Object(p["jsxs"])("div",{className:"flex justify-between",_nk:"".concat(x,"1f"),children:[Object(p["jsx"])("strong",{className:"text-base",_nk:"".concat(x,"71"),children:e.name}),Object(p["jsx"])("span",{className:"text-sm text-gray-400",_nk:"".concat(x,"43"),children:u()(e.createdTime).format("YYYY-MM-DD HH:mm:ss")})]}),Object(p["jsxs"])("div",{_nk:"".concat(x,"1g"),children:[Object(p["jsx"])("p",{className:"text-base text-gray-500",_nk:"".concat(x,"53"),children:e.replycontent}),Object(p["jsx"])("div",{className:"mt-1 flex justify-end items-center",_nk:"".concat(x,"1h"),children:Object(p["jsx"])("button",{className:s.topicAdmin?"bg-blue-300  text-white text-base font-semibold rounded-full shadow hover:bg-indigo-600 px-4 py-1":"hidden",type:"submit",onClick:()=>B(e.pid),_nk:"".concat(x,"81"),children:"\u5220\u9664"})})]})]})]},e.pid)))})}),Object(p["jsxs"])("div",{className:"w-full flex justify-center items-center bg-white sticky bottom-2 my-4",_nk:"".concat(x,"1i"),children:[Object(p["jsx"])("input",{className:"w-3/4 rounded-l-full shadow px-4 py-2 focus:outline-none border",type:"text",placeholder:"\u8bf4\u70b9\u4ec0\u4e48\u5427\uff01",value:K,onChange:e=>R(e.target.value),_nk:"".concat(x,"91")}),Object(p["jsx"])("button",{className:"w-1/4 bg-blue-600 text-white text-base font-semibold rounded-r-full shadow hover:bg-indigo-600 py-2",onClick:()=>W(),_nk:"".concat(x,"82"),children:"\u53d1\u8868"})]})]})]})}},uzmA:function(e,t,c){"use strict";var n=c("tJVT"),a=c("q1tI"),s=c("i8i4"),r=c.n(s),i=c("nKUr"),o="x4MR";function l(e){var t=Object(a["useState"])(!1),c=Object(n["a"])(t,2),s=c[0],l=c[1];return Object(a["useEffect"])((()=>{var t=document.createElement("div");s&&(r.a.render(Object(i["jsx"])("div",{onClick:()=>{l(!s),document.body.removeChild(t)},className:"".concat(s?"":"hidden"," z-50 top-0 left-0 fixed w-screen h-screen flex items-center justify-center bg-opacity-60 bg-gray-800"),_nk:"".concat(o,"11"),children:Object(i["jsx"])("img",{src:e.src,className:"w-auto h-auto",_nk:"".concat(o,"21")})}),t),document.body.appendChild(t))}),[s]),Object(i["jsxs"])(i["Fragment"],{children:["bg"===e.type&&Object(i["jsx"])("div",{className:"".concat(e.className?e.className:""," bg-cover bg-center cursor-pointer border"),style:{backgroundImage:"url(".concat(e.src,")")},onClick:()=>l(!0),_nk:"".concat(o,"12")}),(!e.type||"img"===e.type)&&Object(i["jsx"])("img",{src:e.src,className:"".concat(e.className?e.className:""," cursor-pointer border"),onClick:()=>l(!0),_nk:"".concat(o,"22")})]})}t["a"]=Object(a["memo"])(l)}}]);