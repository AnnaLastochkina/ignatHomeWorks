(this.webpackJsonpignat=this.webpackJsonpignat||[]).push([[0],{10:function(e,t,a){e.exports={message:"Message_message__8WR15",wrapper:"Message_wrapper__2wTya",time:"Message_time__HOFTG",insideWrapper:"Message_insideWrapper__2cK_I",messageWrapper:"Message_messageWrapper__1DRDM",avatar:"Message_avatar__3FT3j",name:"Message_name__Tzmp0"}},14:function(e,t,a){e.exports={hw4_checkbox:"SuperCheckbox_hw4_checkbox__nEkYC",hw4_input:"SuperCheckbox_hw4_input__21Ewi",checkbox:"SuperCheckbox_checkbox__Imn1x",SpanName:"SuperCheckbox_SpanName__371Aw"}},17:function(e,t,a){e.exports={errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",form__field:"SuperInputText_form__field__qvh33",form__label:"SuperInputText_form__label__2pHeD"}},19:function(e,t,a){e.exports={container:"header_container__22Pks",linkClass:"header_linkClass__2C2zX",activeLinkClass:"header_activeLinkClass__1uPHS"}},20:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},24:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},27:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},30:function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(26),s=a.n(c),i=(a(36),a(27)),o=a.n(i),j=a(9),l=a(19),b=a.n(l),d=a(0);var u=function(){return Object(d.jsxs)("div",{className:b.a.container,children:[Object(d.jsx)(j.b,{to:"/pre-junior",className:b.a.linkClass,activeClassName:b.a.activeLinkClass,children:"Pre-junior"}),Object(d.jsx)(j.b,{to:"/junior",children:"Junior"}),Object(d.jsx)(j.b,{to:"/juniorPlus",children:"Junior+"})]})},h=a(2),x=a(10),O=a.n(x);var _=function(e){return Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("div",{className:O.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsx)("div",{className:O.a.messageWrapper,children:Object(d.jsxs)("div",{className:O.a.insideWrapper,children:[Object(d.jsx)("div",{className:O.a.name,children:e.name}),Object(d.jsx)("div",{className:O.a.message,children:e.message}),Object(d.jsx)("div",{className:O.a.time,children:e.time})]})})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Pupsik",p="Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:)Hey hey babies:) ",v="22:00";var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(_,{avatar:m,name:f,message:p,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},g=a(7),C=a(8),N=a.n(C);var w=function(e){var t=N.a.task2name+" "+N.a[e.affair.priority];return Object(d.jsxs)("div",{className:N.a.task2wrapper,children:[Object(d.jsx)("div",{className:N.a.task2name,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{className:N.a.task2deletebtn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:N.a.task2BtnSet,onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(r.useState)(y),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=a(31),H=a(30),W=a.n(H),M=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,c=e.totalUsers,s=n?W.a.error:"";return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:a,className:s}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("button",{onClick:function(){return r(t)},children:"add"}),Object(d.jsx)("span",{children:c})]})},B=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(g.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(!1),j=Object(g.a)(o,2),l=j[0],b=j[1],u=t.length;return Object(d.jsx)(M,{name:s,setNameCallback:function(e){i(e.currentTarget.value),b(!1)},addUser:function(e){""!==e?(alert("Hello ".concat(e,"!")),a(e),i(""),b(!1)):b(!0)},error:l,totalUsers:u})},P=a(45);var E=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(B,{users:a,addUserCallback:function(e){n([{_id:Object(P.a)(),name:e}].concat(Object(T.a)(a)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},I=a(12),F=a(13),G=a(17),J=a.n(G),R=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],U=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,R),j="".concat(J.a.error," ").concat(i||""),l=" ".concat(c?J.a.errorInput:J.a.form__field," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:l,placeholder:"Your text",name:"name",id:"name",required:!0},o)),Object(d.jsx)("label",{htmlFor:"name",className:J.a.form__label,children:"Your text"})]}),c&&Object(d.jsx)("span",{className:j,children:c})]})},K=a(24),L=a.n(K),X=a(20),Y=a.n(X),q=["red","className"],z=function(e){var t=e.red,a=e.className,r=Object(F.a)(e,q),n="".concat(t?Y.a.red+" "+Y.a.default:Y.a.default," ").concat(a);return Object(d.jsx)("button",Object(I.a)({className:n},r))},D=a(14),Z=a.n(D),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(F.a)(e,Q),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{className:Z.a.hw4_checkbox,children:[Object(d.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s+" "+Z.a.hw4_input},c)),Object(d.jsx)("span",{className:Z.a.checkbox}),n&&Object(d.jsx)("span",{className:Z.a.SpanName,children:n})]})};var V=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),o=Object(g.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:L.a.column,children:[Object(d.jsx)(U,{value:a,onChangeText:n,onEnter:s,error:c}),Object(d.jsx)(U,{className:L.a.blue}),Object(d.jsx)(z,{onClick:s,children:"default"}),Object(d.jsx)(z,{red:!0,children:"delete "}),Object(d.jsx)(z,{disabled:!0,children:"disabled"}),Object(d.jsx)($,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)($,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(A,{}),Object(d.jsx)(E,{}),Object(d.jsx)(V,{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var ae=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"lalala"})})},re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(A,{}),Object(d.jsx)(E,{}),Object(d.jsx)(V,{}),Object(d.jsx)(oe,{})]})},ne="/pre-junior",ce="/junior",se="/juniorPlus";var ie=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:ne})}}),Object(d.jsx)(h.b,{path:ne,render:function(){return Object(d.jsx)(ee,{})}}),Object(d.jsx)(h.b,{path:ce,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(h.b,{path:se,render:function(){return Object(d.jsx)(re,{})}}),"// add routes",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(te,{})}})]})})};var oe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(ie,{})]})})};var je=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={task2wrapper:"Affairs_task2wrapper__3OERp",task2name:"Affairs_task2name__1iPkG",low:"Affairs_low__1RrbR",middle:"Affairs_middle__1oKMT",high:"Affairs_high__3bfAG",task2BtnSet:"Affairs_task2BtnSet__khfrM",task2deletebtn:"Affairs_task2deletebtn__1Z3-k"}}},[[43,1,2]]]);
//# sourceMappingURL=main.60bdddc6.chunk.js.map