(this.webpackJsonpignat=this.webpackJsonpignat||[]).push([[0],{11:function(e,t,a){e.exports={message:"Message_message__8WR15",wrapper:"Message_wrapper__2wTya",time:"Message_time__HOFTG",insideWrapper:"Message_insideWrapper__2cK_I",messageWrapper:"Message_messageWrapper__1DRDM",avatar:"Message_avatar__3FT3j",name:"Message_name__Tzmp0"}},15:function(e,t,a){e.exports={hw4_checkbox:"SuperCheckbox_hw4_checkbox__nEkYC",hw4_input:"SuperCheckbox_hw4_input__21Ewi",checkbox:"SuperCheckbox_checkbox__Imn1x",SpanName:"SuperCheckbox_SpanName__371Aw"}},18:function(e,t,a){e.exports={errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",form__field:"SuperInputText_form__field__qvh33",field:"SuperInputText_field__3HWDj"}},20:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},24:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},27:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},30:function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(26),c=a.n(s),i=(a(36),a(27)),j=a.n(i),o=a(10),l=a(9),d=a.n(l),b=a(0);var u=function(){return Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsx)(o.b,{to:"/pre-junior",className:d.a.linkClass,activeClassName:d.a.activeLinkClass,children:"Pre-junior"}),Object(b.jsx)(o.b,{to:"/junior",className:d.a.linkClass,activeClassName:d.a.activeLinkClass,children:"Junior"}),Object(b.jsx)(o.b,{to:"/juniorPlus",className:d.a.linkClass,activeClassName:d.a.activeLinkClass,children:"Junior+"}),Object(b.jsx)("div",{className:d.a.square,children:"\u2630"})]})},h=a(2),x=a(11),O=a.n(x);var _=function(e){return Object(b.jsxs)("div",{className:O.a.wrapper,children:[Object(b.jsx)("div",{className:O.a.avatar,children:Object(b.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(b.jsx)("div",{className:O.a.messageWrapper,children:Object(b.jsxs)("div",{className:O.a.insideWrapper,children:[Object(b.jsx)("div",{className:O.a.name,children:e.name}),Object(b.jsx)("div",{className:O.a.message,children:e.message}),Object(b.jsx)("div",{className:O.a.time,children:e.time})]})})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Pupsik",p="Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:) ",v="22:00";var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(_,{avatar:m,name:f,message:p,time:v}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=a(7),g=a(8),N=a.n(g);var w=function(e){var t=N.a.task2name+" "+N.a[e.affair.priority];return Object(b.jsxs)("div",{className:N.a.task2wrapper,children:[Object(b.jsx)("div",{className:N.a.task2name,children:e.affair.name}),Object(b.jsx)("div",{className:t,children:e.affair.priority}),Object(b.jsx)("button",{className:N.a.task2deletebtn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(b.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(r.useState)(y),t=Object(C.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)("all"),c=Object(C.a)(s,2),i=c[0],j=c[1],o=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(a,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(S,{data:o,setFilter:j,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},T=a(31),H=a(30),W=a.n(H),M=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,s=e.totalUsers,c=n?W.a.error:"";return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:a,className:c}),Object(b.jsx)("span",{children:n}),Object(b.jsx)("button",{onClick:function(){return r(t)},children:"add"}),Object(b.jsx)("span",{children:s})]})},B=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),s=Object(C.a)(n,2),c=s[0],i=s[1],j=Object(r.useState)(!1),o=Object(C.a)(j,2),l=o[0],d=o[1],u=t.length;return Object(b.jsx)(M,{name:c,setNameCallback:function(e){i(e.currentTarget.value),d(!1)},addUser:function(e){""!==e?(alert("Hello ".concat(e,"!")),a(e),i(""),d(!1)):d(!0)},error:l,totalUsers:u})},P=a(45);var E=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(B,{users:a,addUserCallback:function(e){n([{_id:Object(P.a)(),name:e}].concat(Object(T.a)(a)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},I=a(13),F=a(14),G=a(18),J=a.n(G),L=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],R=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,j=Object(F.a)(e,L),o="".concat(J.a.error," ").concat(i||""),l=" ".concat(s?J.a.errorInput:J.a.form__field," ").concat(c);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:J.a.field,children:Object(b.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:l,placeholder:"Your text",name:"name",id:"name",required:!0},j))}),s&&Object(b.jsx)("span",{className:o,children:s})]})},U=a(24),q=a.n(U),K=a(20),X=a.n(K),z=["red","className"],D=function(e){var t=e.red,a=e.className,r=Object(F.a)(e,z),n="".concat(t?X.a.red+" "+X.a.default:X.a.default," ").concat(a);return Object(b.jsx)("button",Object(I.a)({className:n},r))},Y=a(15),Z=a.n(Y),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),s=Object(F.a)(e,Q),c="".concat(Z.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{className:Z.a.hw4_checkbox,children:[Object(b.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c+" "+Z.a.hw4_input},s)),Object(b.jsx)("span",{className:Z.a.checkbox}),n&&Object(b.jsx)("span",{className:Z.a.SpanName,children:n})]})};var V=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),a=t[0],n=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),j=Object(C.a)(i,2),o=j[0],l=j[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:q.a.column,children:[Object(b.jsx)(R,{value:a,onChangeText:n,onEnter:c,error:s}),Object(b.jsx)(R,{className:q.a.blue}),Object(b.jsx)(D,{onClick:c,children:"default"}),Object(b.jsx)(D,{red:!0,children:"delete "}),Object(b.jsx)(D,{disabled:!0,children:"disabled"}),Object(b.jsx)($,{checked:o,onChangeChecked:l,children:"some text "}),Object(b.jsx)($,{checked:o,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ee=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(A,{}),Object(b.jsx)(E,{}),Object(b.jsx)(V,{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var ae=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"lalala"})})},re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(A,{}),Object(b.jsx)(E,{}),Object(b.jsx)(V,{}),Object(b.jsx)(je,{})]})},ne="/pre-junior",se="/junior",ce="/juniorPlus";var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(h.a,{to:ne})}}),Object(b.jsx)(h.b,{path:ne,render:function(){return Object(b.jsx)(ee,{})}}),Object(b.jsx)(h.b,{path:se,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(h.b,{path:ce,render:function(){return Object(b.jsx)(re,{})}}),"// add routes",Object(b.jsx)(h.b,{render:function(){return Object(b.jsx)(te,{})}})]})})};var je=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(ie,{})]})})};var oe=function(){return Object(b.jsxs)("div",{className:j.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(je,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={task2wrapper:"Affairs_task2wrapper__3OERp",task2name:"Affairs_task2name__1iPkG",low:"Affairs_low__1RrbR",middle:"Affairs_middle__1oKMT",high:"Affairs_high__3bfAG",task2BtnSet:"Affairs_task2BtnSet__khfrM",task2deletebtn:"Affairs_task2deletebtn__1Z3-k"}},9:function(e,t,a){e.exports={linkClass:"header_linkClass__2C2zX",activeLinkClass:"header_activeLinkClass__1uPHS",container:"header_container__22Pks",square:"header_square__3o9py"}}},[[43,1,2]]]);
//# sourceMappingURL=main.536a1bee.chunk.js.map