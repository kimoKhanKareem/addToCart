(this["webpackJsonpadd-to-cart"]=this["webpackJsonpadd-to-cart"]||[]).push([[0],{24:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var i,d,c,a,r,o,l,p,s,j=t(0),x=t.n(j),h=t(15),b=t.n(h),u=(t(24),t(19)),m=t(8),O=t(7),g=t(6),f=t(4),v=t(5),w=t(1),y=function(n){var e=n.cartItems;return Object(w.jsxs)(C,{children:[Object(w.jsx)(T,{children:Object(w.jsx)("h2",{children:Object(w.jsx)(g.b,{to:"/",children:"T&C"})})}),Object(w.jsx)(A,{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(g.b,{to:"/",children:"Home"})}),Object(w.jsx)("li",{children:Object(w.jsx)(g.b,{to:"/",children:"About"})}),Object(w.jsx)("li",{children:Object(w.jsx)(g.b,{to:"/",children:"Contact"})}),Object(w.jsx)("li",{children:Object(w.jsx)(g.b,{to:"/",children:"Video"})})]})}),Object(w.jsx)(P,{children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(g.b,{to:"/",children:Object(w.jsx)("i",{className:"fas fa-user"})})}),Object(w.jsx)("li",{children:Object(w.jsxs)(g.b,{to:"/cart",children:[Object(w.jsx)("i",{className:"fas fa-shopping-cart"}),Object(w.jsx)("span",{children:0===e.length?"0":e.length})]})})]})})]})},C=v.a.div(i||(i=Object(f.a)(["\nposition: fixed;\nbackground-color: red;\nwidth: 100%;\nheight: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n"]))),T=v.a.div(d||(d=Object(f.a)(["\n  h2 {\n    a {\n      text-decoration: none;\n      font-size: 35px;\n      color: white;\n    }\n  }\n"]))),A=v.a.div(c||(c=Object(f.a)(["\n  ul {\n    display: flex;\n    text-decoration: none;\n    li {\n      a {\n        text-decoration: none;\n        padding: 0 15px;\n        font-size: 19px;\n        color: white;\n      }\n      list-style: none;\n    }\n  }\n  @media (max-width: 595px){\n    ul{\n      display: none;\n    }\n}\n\n"]))),P=v.a.div(a||(a=Object(f.a)(["\n  display: flex;\n  ul {\n    display: flex;\n    text-decoration: none;\n    li {\n      list-style: none;\n      a {\n        text-decoration: none;\n        padding: 0 15px;\n        font-size: 18px;\n        i{\n          color: white;\n        }\n        span{\n          padding: 0 3px;\n          color: white;\n        }\n      }\n    }\n  }\n"]))),k=function(n){var e=n.productTime,t=n.handleAddProduct;return Object(w.jsx)(q,{children:e.map((function(n){return Object(w.jsxs)(I,{children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:n.image,alt:"img...."})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("h3",{children:n.title})}),Object(w.jsx)("div",{children:Object(w.jsxs)("p",{children:["$ ",n.price]})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:function(){return t(n)},children:"Add To Cart"})})]})]},n.id)}))})},q=v.a.div(r||(r=Object(f.a)(["\nwidth: 80%;\npadding-top:25px ;\n@media (max-width: 530px){\n    padding-top: 10%;\n}\n@media (max-width: 404px){\n    padding-top: 20%;\n}\n\nmargin:  auto;\ndisplay: flex;\njustify-content: space-around;\nflex-wrap: wrap;\n"]))),I=v.a.div(o||(o=Object(f.a)(["\nwidth: 300px;\nheight: 400px;\npadding: 10px;\nmargin :7% 20px;\ntext-align: center;\n@media (max-width: 416px){\n    padding: 0 !important;\n    margin :0 ;\n}\n@media (max-width: 530px){\n    height: auto;\n}\n@media (max-width: 768px){\n    height: auto;\n}\nimg{\n    width: 100%;\n    object-fit: cover;\n    max-width: 300px;\n    min-height: 400px;\n}\nbutton{\n    padding: 5px 20px;\n    font-weight: 700;\n    font: 18px;\n    background-color: transparent;\n    border:1px solid red;\n    cursor: pointer;\n    margin: 10px 0;\n}\n"]))),B=t(2),E=function(n){var e=n.cartItems,t=n.handleAddProduct,i=n.handleRemoveProduct,d=n.handleCartClear,c=e.reduce((function(n,e){return n+e.quantity*e.price}),0);return Object(w.jsxs)(z,{children:[Object(w.jsx)("h3",{children:"Cart Items"}),Object(w.jsx)("div",{className:"clearbutton",children:e.length>=1&&Object(w.jsx)("button",{onClick:d,children:"Remove All"})}),0===e.length&&Object(w.jsx)("h3",{children:"No items are Added."}),Object(w.jsxs)(G,{children:[e.map((function(n){return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:n.image,alt:"..."}),Object(w.jsx)("h3",{children:n.title}),Object(w.jsxs)("p",{children:["$ ",n.price]}),Object(w.jsx)("button",{onClick:function(){return t(n)},children:"+"}),Object(w.jsx)("button",{onClick:function(){return i(n)},children:"-"}),Object(w.jsxs)("div",{className:"count",children:[n.quantity," * $ ",n.price]})]},n.id)})),Object(w.jsxs)(N,{children:["total price",Object(w.jsxs)("div",{children:["$ ",c]})]})]})]})},z=v.a.div(l||(l=Object(f.a)(["\npadding-top: 10%;\n@media (max-width: 1366px){\n    padding-top: 10%;\n}\n@media (max-width: 1200px){\n    padding-top: 10%;\n}\n@media (max-width: 1024px){\n    padding-top: 12%;\n}\n@media (max-width: 768px){\n    padding-top: 14%;\n}\n@media (max-width: 576px){\n    padding-top: 25%;\n}\n@media (max-width: 480px){\n    padding-top: 25%;\n}\n@media (max-width: 425px){\n    padding-top: 25%;\n}\n@media (max-width: 320px){\n    padding-top: 30%;\n}\n\ntext-align: center;\n.clearbutton{\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 10px;\n    button{\n        padding: 10px;\n        cursor: pointer;\n        margin-right: 20px;\n        border: 1px solid red;\n    }\n}\nh3{\n    padding: 10px 0;\n}\n"]))),G=v.a.div(p||(p=Object(f.a)(["\n    div{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        img{\n            width: 150px;\n            border: 1px solid red;\n            margin-bottom:5px ;\n        }\n        h3{\n            padding: 0 20px;\n        }\n        p{\n            padding: 0 20px;\n            font-size: 20px;\n        }\n        button{\n            padding: 5px 10px;\n            margin: 0 5px ;\n            border: 1px solid red;\n            background-color: transparent;\n            cursor: pointer;\n        }\n        .count{\n            padding: 0 10px;\n            font-size: 18px;\n        }\n    }\n"]))),N=v.a.div(s||(s=Object(f.a)(["\nfont-size: 24px;\n"]))),R=function n(e){var t=e.productTime,i=e.cartItems,d=e.handleAddProduct,c=e.handleRemoveProduct,a=e.handleCartClear;return Object(w.jsx)("div",{children:Object(w.jsxs)(B.c,{children:[Object(w.jsx)(B.a,{path:"/",exact:!0,element:Object(w.jsx)(k,{productTime:t,handleAddProduct:d})}),Object(w.jsx)(B.a,{path:"/about",exact:!0,element:Object(w.jsx)(n,{})}),Object(w.jsx)(B.a,{path:"/contact",exact:!0,element:Object(w.jsx)(n,{})}),Object(w.jsx)(B.a,{path:"/video",exact:!0,element:Object(w.jsx)(n,{})}),Object(w.jsx)(B.a,{path:"/user",exact:!0,element:Object(w.jsx)(n,{})}),Object(w.jsx)(B.a,{path:"/cart",exact:!0,element:Object(w.jsx)(E,{cartItems:i,handleAddProduct:d,handleRemoveProduct:c,handleCartClear:a})})]})})},$={productTime:[{id:1,image:"image/choce_watch1.png",title:"Thermo Ball Etip Gloves",price:45},{id:2,image:"image/choce_watch2.png",title:"Thermo Ball Etip Gloves",price:55},{id:3,image:"image/popular1.png",title:"Thermo Ball Etip Gloves",price:39},{id:4,image:"image/popular2.png",title:"Thermo Ball Etip Gloves",price:62},{id:5,image:"image/popular3.png",title:"Thermo Ball Etip Gloves",price:39},{id:6,image:"image/popular5.png",title:"Thermo Ball Etip Gloves",price:39}]};var J=function(){var n=$.productTime,e=Object(j.useState)([]),t=Object(O.a)(e,2),i=t[0],d=t[1];return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(g.a,{children:[Object(w.jsx)(y,{cartItems:i}),Object(w.jsx)(R,{productTime:n,cartItems:i,handleAddProduct:function(n){var e=i.find((function(e){return e.id===n.id}));d(e?i.map((function(t){return t.id===n.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity+1}):t})):[].concat(Object(u.a)(i),[Object(m.a)(Object(m.a)({},n),{},{quantity:1})]))},handleRemoveProduct:function(n){var e=i.find((function(e){return e.id===n.id}));1===e.quantity?d(i.filter((function(e){return e.id!==n.id}))):d(i.map((function(t){return t.id===n.id?Object(m.a)(Object(m.a)({},e),{},{quantity:e.quantity-1}):t})))},handleCartClear:function(){d([])}})]})})};b.a.render(Object(w.jsx)(x.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c616b12b.chunk.js.map