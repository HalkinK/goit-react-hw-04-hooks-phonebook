(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={button:"ContactItem_button__1edSg"}},17:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),u=(n(17),n(12)),i=n(2),s=n(4),b=n.n(s),l=n(5),j=n.n(l),d=n(0);var m=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),l=s[0],m=s[1],f=function(){return b.a.generate()},h=function(){return b.a.generate()},O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(d.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),o(""),m("")},children:[Object(d.jsxs)("label",{htmlFor:f,children:["Name",Object(d.jsx)("input",{className:j.a.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O,id:f})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:h,children:["Number",Object(d.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O,id:h})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})},f=n(11),h=n.n(f),O=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{children:[a,": ",c,Object(d.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))};O.defaultProps={name:"",number:"",id:""};var p=O,x=function(t){var e=t.contacts,n=t.deleteContact;return Object(d.jsx)("ul",{children:Object(d.jsx)(p,{contacts:e,deleteContact:n})})},v=n(9),g=n.n(v),C=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})};var _=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(m,{onSubmit:function(t){var e=t.name,a=t.number,r={id:b.a.generate(),name:e,number:a},o=n.find((function(t){return t.name===e})),i=n.find((function(t){return t.number===a})),s=o&&"".concat(e)||i&&"".concat(a);o||i?alert("".concat(s," is already in contacts")):c((function(t){return[r].concat(Object(u.a)(t))}))}}),Object(d.jsx)(C,{value:s,onChange:function(t){l(t.currentTarget.value)}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(x,{contacts:function(){var t=s.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),S()},5:function(t,e,n){t.exports={form:"ContactForm_form__1-oVx",input:"ContactForm_input__1nNeB",button:"ContactForm_button__2Jp0I"}},9:function(t,e,n){t.exports={input:"Filter_input__id4rx",label:"Filter_label__3TifS"}}},[[27,1,2]]]);
//# sourceMappingURL=main.a17ed424.chunk.js.map