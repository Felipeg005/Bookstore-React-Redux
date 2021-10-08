(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(17),a=n.n(o),s=(n(35),n(16)),i=n(3),u=n(8),l=n(20),b=n(26),j=n(27),d=n.n(j),O=n(9),h=n.n(O),p=n(24),m=n(19),f=n(30),x="bookStore/books/ADD_BOOK",k="bookStore/books/REMOVE_BOOK",v="bookStore/books/GET_BOOKS",y="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books",g=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=[].concat(Object(f.a)(e),[t.payload]);return n;case k:var c=e.filter((function(e){return e.id!==Number(t.payload.item_id)}));return window.location.reload(),c;case v:return t.state;default:return e}},S=Object(l.b)({booksReducer:N}),C=Object(l.c)(S,Object(l.a)(d.a,b.a)),w=n(11),E=n(12),B=n(14),R=n(13),T=n(28),_=n(1),D=function(){var e=Object(u.b)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{className:"form-title",children:"Add New"}),Object(_.jsxs)("form",{className:"form",onSubmit:function(t){var n=JSON.parse(localStorage.getItem("bookStorage"));n||(n=[]);var c,r={item_id:Object(T.uuid)(),title:t.target[0].value,category:t.target[1].value};e((c=r,function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y,{method:"POST",body:new URLSearchParams(c)});case 2:t({type:x,payload:c});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(_.jsx)("input",{type:"text",required:!0,maxLength:"30",placeholder:"Title"}),Object(_.jsx)("label",{for:"Categories",children:"Category"}),Object(_.jsxs)("select",{name:"Categories",children:[Object(_.jsx)("option",{value:"Action",children:"Action"}),Object(_.jsx)("option",{value:"Drama",children:"Drama"}),Object(_.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(_.jsx)("option",{value:"Terror",children:"Terror"}),Object(_.jsx)("option",{value:"Psy-Fy",children:"Psy-Fy"})]}),Object(_.jsx)("button",{type:"submit",children:"Submit"})]})]})},F=function(e){var t=e.bookId,n=e.bookTitle,c=e.category,r=e.bookClassName,o=Object(u.b)();return Object(_.jsxs)("li",{id:t,className:r,children:[Object(_.jsx)("h2",{className:"books-title",children:n}),Object(_.jsx)("h3",{className:"books-author",children:c}),Object(_.jsx)("button",{id:t,className:"delete-button",onClick:function(e){var t,n={item_id:e.target.id};o((t=n,function(){var e=Object(m.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books/".concat(t.item_id),{method:"DELETE"});case 2:n({type:k,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:"Delete"})]})},A=function(){var e=Object(u.b)();Object(c.useEffect)((function(){e(function(){var e=Object(m.a)(h.a.mark((function e(t){var n,c,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r=Object.keys(c),o=[],r.forEach((function(e){o.push(Object(p.a)(Object(p.a)({},c[e][0]),{},{item_id:e}))})),t({type:v,state:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(u.c)((function(e){return e}));return Object(_.jsx)("div",{className:"list-container",children:Object(_.jsx)("ul",{className:"list-elements",children:t.booksReducer.map((function(e){return Object(_.jsx)(F,{bookId:e.item_id,bookTitle:e.title,category:e.category,bookClassName:"book-container"},e.item_id)}))})})},P=function(e){Object(B.a)(n,e);var t=Object(R.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{}),Object(_.jsx)(D,{})]})}}]),n}(r.a.Component),I=P,J=function(e){Object(B.a)(n,e);var t=Object(R.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{children:"Under Construction"})})}}]),n}(r.a.Component),L=J,K=function(e){Object(B.a)(n,e);var t=Object(R.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("nav",{className:this.props.class,children:[Object(_.jsx)("h1",{className:"logo",children:"BookStore"}),Object(_.jsxs)("ul",{className:"menu-container",children:[Object(_.jsx)(s.b,{to:"/Bookstore-React-Redux/",children:Object(_.jsx)("li",{className:"menu-li",children:"Home"})}),Object(_.jsx)(s.b,{to:"/Bookstore-React-Redux/categories",children:Object(_.jsx)("li",{className:"menu-li",children:"Categories"})})]})]})}}]),n}(r.a.Component),M=K;var U=function(){return Object(_.jsx)(u.a,{store:C,children:Object(_.jsxs)(s.a,{children:[Object(_.jsx)(M,{class:"nav-menu"}),Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{path:"/Bookstore-React-Redux/",exact:!0,component:I}),Object(_.jsx)(i.a,{path:"/Bookstore-React-Redux/categories",component:L})]})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(U,{})}),document.getElementById("root")),Z()}},[[47,1,2]]]);
//# sourceMappingURL=main.9815880b.chunk.js.map