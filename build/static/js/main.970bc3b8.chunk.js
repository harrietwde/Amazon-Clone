(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),i=(a(59),a(47)),o=a(3),s=(a(60),a(61),a(48)),m=a.n(s),u=a(49),d=a.n(u),p=a(11),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.intialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},c)},g=function(){return Object(n.useContext)(E)},h=a(30),v=a.n(h),f=v.a.initializeApp({apiKey:"AIzaSyCKp3LTTRZ95JvN89dgPG4PIqQDtbdJE3w",authDomain:"clone-3716b.firebaseapp.com",projectId:"clone-3716b",storageBucket:"clone-3716b.appspot.com",messagingSenderId:"507696645230",appId:"1:507696645230:web:c357ff0e60d8ecaf2b927f",measurementId:"G-PB05331NCQ"}).firestore(),b=v.a.auth();var N=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",className:"header__logo"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign in"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header_basketCount"},null===n||void 0===n?void 0:n.length)))))};a(77),a(78);var O=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,i=g(),s=Object(o.a)(i,2),m=(s[0],s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return r.a.createElement("span",{role:"img","aria-label":"star"},"\u2b50")})))),r.a.createElement("img",{src:n}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:c,rating:l}})}},"Add to Basket"))};var S=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"banner",className:"home__image"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"493184",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),r.a.createElement(O,{id:"450958",title:"New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray",price:20.99,image:"https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"5498540",title:"Samsung LC49Rg90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg",rating:3}),r.a.createElement(O,{id:"9418504985",title:"Amazon echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",rating:5}),r.a.createElement(O,{id:"495849058",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128FB) - Silver (4th Generation)",price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"49580768658",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.99,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg",rating:4})))},k=(a(79),a(80),a(21)),y=a.n(k),j=a(34),C=a(17),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(j.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cannot remove product (id: ".concat(t.id,") as it's not in the basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}},P=a(5);var B=function(){var e=g(),t=Object(o.a)(e,2),a=t[0].basket,n=(t[1],Object(P.f)());return r.a.createElement("div",{className:"subtotal"},r.a.createElement(y.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",a.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:A(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(e){return n.push("/payment")}},"Proceed to Checkout"))};a(82);var w=function(e){var t=e.id,a=e.image,n=e.title,c=e.price,l=e.rating,i=e.hideButton,s=g(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:a}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"star"},"\u2b50"))}))),!i&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove From Basket")))};var I=function(){var e=g(),t=Object(o.a)(e,2),a=t[0].basket;return t[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"advertisement",className:"checkout__ad"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),a.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,rating:e.rating,price:e.price})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(B,null)))};a(83);var L=function(){var e=Object(P.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"Amazon Logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"login_signInButton",onClick:function(t){t.preventDefault(),b.signInWithEmailAndPassword(c,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),r.a.createElement("p",null,"By signing in you agree to this Amazon clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice"),r.a.createElement("button",{className:"login_registerButton",onClick:function(t){t.preventDefault(),b.createUserWithEmailAndPassword(c,m).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))}},"Create your Amazon Account")))},x=a(23),z=a.n(x),R=a(33),D=(a(85),a(20)),M=a(50),G=a.n(M).a.create({baseURL:"https://us-central1-clone-3716b.cloudfunctions.net/api"});var U=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],c=a.basket,l=a.user,i=t[1],s=Object(P.f)(),m=Object(D.useStripe)(),u=Object(D.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],h=E[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),N=b[0],O=b[1],S=Object(n.useState)(null),k=Object(o.a)(S,2),j=k[0],C=k[1],T=Object(n.useState)(!0),B=Object(o.a)(T,2),I=B[0],L=B[1],x=Object(n.useState)(!0),M=Object(o.a)(x,2),U=M[0],F=M[1];Object(n.useEffect)((function(){(function(){var e=Object(R.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G({method:"post",url:"/payments/create?total=".concat(100*A(c))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",l);var Y=function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,m.confirmCardPayment(U,{payment_method:{card:u.getElement(D.CardElement)}}).then((function(e){var t=e.paymentIntent;f.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:c,amount:t.amount,created:t.created}),h(!0),C(null),O(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"123 React Lane"),r.a.createElement("p",null,"Los Angeles, CA"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:Y},r.a.createElement(D.CardElement,{onChange:function(e){L(e.empty),C(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(y.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:A(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:N||I||_},r.a.createElement("span",null,N?r.a.createElement("p",null,"Processing"):"Buy Now"))),j&&r.a.createElement("div",null,j))))))},F=a(51),Y=(a(103),a(104),a(52)),H=a.n(Y);var K=function(e){var t,a=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,H.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(y.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var W=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],c=(a.basket,a.user),l=(t[1],Object(n.useState)([])),i=Object(o.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){c?f.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(K,{order:e})}))))};var X=function(){var e=g(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1],c=Object(F.a)("pk_test_51IFPJTI4ICBf5QdTrbLOwmiB5AMaDPOq81Oi9UDcT2mS1x2SngOxzkyyURDXLBt9kZrO78Lk4MqiW2ubVh4h5k1700C9oQHz73");return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/orders"},r.a.createElement(N,null),r.a.createElement(W,null)),r.a.createElement(P.a,{path:"/login"},r.a.createElement(L,null)),r.a.createElement(P.a,{path:"/checkout"},r.a.createElement(N,null),r.a.createElement(I,null)),r.a.createElement(P.a,{path:"/payment"},r.a.createElement(N,null),r.a.createElement(D.Elements,{stripe:c},r.a.createElement(U,null))),r.a.createElement(P.a,{path:"/"},r.a.createElement(N,null),r.a.createElement(S,null)))))},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{intialState:{basket:[],user:null},reducer:T},r.a.createElement(X,null))),document.getElementById("root")),$()},54:function(e,t,a){e.exports=a(107)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.970bc3b8.chunk.js.map