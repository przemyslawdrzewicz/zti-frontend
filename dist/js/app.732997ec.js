(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],u=0,v=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"56654679"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(t);var l=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[r("v-btn",{staticClass:"title",attrs:{outlined:""}},[t._v(" SKLEP INTERNETOWY ")])],1),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/login"}},[t.getLogin?t._e():r("v-btn",{attrs:{text:""}},[t._v(" Zaloguj ")])],1),r("v-spacer"),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/cart"}},[t.getCart&&t.getCart.length>0?r("v-badge",{attrs:{bordered:"",color:"red",content:t.getCart.length,"offset-x":"28",overlap:""}},[r("v-btn",{attrs:{color:"green",text:""}},[r("div",[r("v-icon",[t._v("mdi-cart-outline")]),r("div",[t._v("Koszyk")])],1)])],1):r("v-btn",{attrs:{color:"green",text:""}},[r("div",[r("v-icon",[t._v("mdi-cart-outline")]),r("div",[t._v("Koszyk")])],1)])],1),t.getLogin?r("v-btn",{attrs:{text:""},on:{click:function(e){t.setLogin(!1),t.setUser(null)}}},[t._v(" Wyloguj ")]):t._e()],1),r("v-main",[r("router-view")],1)],1)},o=[],s=r("5530"),c=r("2f62"),i={name:"App",components:{},computed:Object(s["a"])({},Object(c["c"])(["getLogin","getUser","getCart"])),methods:Object(s["a"])({},Object(c["b"])(["setLogin","setUser"])),data:function(){return{}}},l=i,u=r("2877"),d=r("6544"),v=r.n(d),p=r("7496"),f=r("40dc"),g=r("4ca6"),m=r("8336"),b=r("132d"),h=r("f6c4"),y=r("2fa4"),C=Object(u["a"])(l,n,o,!1,null,null,null),w=C.exports;v()(C,{VApp:p["a"],VAppBar:f["a"],VBadge:g["a"],VBtn:m["a"],VIcon:b["a"],VMain:h["a"],VSpacer:y["a"]});r("d3b7");var x=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticStyle:{height:"90vh"},attrs:{justify:"center"}},[r("v-col",{staticClass:"align-self-center justify-center d-flex",staticStyle:{"max-width":"450px"}},[r("div",{staticStyle:{width:"100%"}},[r("v-form",{ref:"form"},[r("v-card",{staticClass:"py-5 px-6",attrs:{outlined:""}},[r("v-text-field",{attrs:{rules:t.rules,label:"Username"},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}}),r("v-text-field",{attrs:{rules:t.rules,label:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("div",{staticClass:"d-flex justify-center mt-2"},[r("v-btn",{attrs:{outlined:"",tile:""},on:{click:function(e){return t.login(t.form.login,t.form.password)}}},[t._v("Zaloguj")])],1)],1)],1)],1)])],1)],1)},j=[],k=(r("96cf"),r("1da1")),O=r("bc3a"),V=r.n(O),S={data:function(){return{form:{login:"",password:""},rules:[function(t){return!!t||"Field is required"}]}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setLogin","setUser"])),{},{login:function(t,e){var r=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!r.$refs.form.validate()){a.next=10;break}return n=new FormData,n.append("login",t),n.append("password",e),a.next=6,V()({method:"post",url:"http://backend-zti.cba.pl/login.php",data:n,headers:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}});case 6:o=a.sent,s=o.data[0],console.log(s),o&&o.data&&s?(r.setLogin(!0),r.setUser(s),r.$router.push("/")):r.setLogin(!1);case 10:case"end":return a.stop()}}),a)})))()}})},P=S,T=r("b0af"),R=r("62ad"),z=r("4bd4"),L=r("0fd9"),U=r("8654"),E=Object(u["a"])(P,_,j,!1,null,null,null),$=E.exports;v()(E,{VBtn:m["a"],VCard:T["a"],VCol:R["a"],VForm:z["a"],VRow:L["a"],VTextField:U["a"]});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"mr-1",attrs:{justify:"end"}},[r("v-col",{attrs:{cols:"4"}},[r("v-autocomplete",{attrs:{items:t.categories,clearable:"","item-text":"name","item-value":"id"},on:{change:function(e){return t.setCategory()}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1),r("v-row",{staticClass:"mt-5"},t._l(t.products,(function(e,a){return r("v-col",{key:a,staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6",md:"4",lg:"2"}},[r("v-card",[r("v-img",{attrs:{src:e.image,width:"200",height:"200"}}),r("v-divider"),r("div",{staticClass:"mx-4 my-2"},[r("v-card-title",{staticStyle:{margin:"0",padding:"0"}},[t._v(t._s(e.name))]),r("div",[r("span",[t._v(t._s("Kategoria: "+e.category_id))])]),r("div",{staticClass:"d-flex",staticStyle:{width:"100%"}},[r("span",{staticClass:"mt-2"},[t._v(t._s(e.price+" zł"))]),r("v-spacer"),r("v-btn",{attrs:{color:"green",icon:""},on:{click:function(r){return t.addToCart(e)}}},[r("v-icon",[t._v("mdi-cart-plus")])],1)],1)],1)],1)],1)})),1),r("v-row",{staticClass:"mt-7",attrs:{justify:"center"}},[r("v-pagination",{attrs:{length:t.count,"total-visible":7},on:{input:t.setPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},A=[],B={data:function(){return{products:[],count:0,limit:10,page:1,category:null,categories:[]}},created:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.get(),t.getCategories();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:Object(s["a"])({},Object(c["c"])(["getCart"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setCart"])),{},{setPage:function(){console.log("changes"),this.get()},getCategories:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("http://backend-zti.cba.pl/categories.php");case 2:r=e.sent,console.log(null===r||void 0===r?void 0:r.data,"categories?.data"),t.categories=(null===r||void 0===r?void 0:r.data)||[];case 5:case"end":return e.stop()}}),e)})))()},setCategory:function(){this.page=1,this.get()},addToCart:function(t){console.log(t,"hm"),this.setCart(t)},get:function(){var t=arguments,e=this;return Object(k["a"])(regeneratorRuntime.mark((function r(){var a,n,o,s,c,i,l,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:e.page,c=t.length>1&&void 0!==t[1]?t[1]:e.limit,i=c*(s-1),l=new FormData,l.append("startAt",i),l.append("perPage",c),e.category&&l.append("category",e.category),r.next=9,V()({method:"post",url:"http://backend-zti.cba.pl/products.php",data:l,headers:{"Content-Type":"multipart/form-data; boundary=".concat(l._boundary)}});case 9:u=r.sent,e.products=(null===u||void 0===u||null===(a=u.data)||void 0===a?void 0:a.products)||[],e.count=null!==u&&void 0!==u&&null!==(n=u.data)&&void 0!==n&&n.count?Math.floor((null===u||void 0===u||null===(o=u.data)||void 0===o?void 0:o.count)/c)+(u.data.count%c===0?0:1):0;case 12:case"end":return r.stop()}}),r)})))()}})},D=B,I=r("c6a6"),F=r("99d9"),M=r("ce7e"),K=r("adda"),N=r("891e"),W=Object(u["a"])(D,q,A,!1,null,null,null),Z=W.exports;v()(W,{VAutocomplete:I["a"],VBtn:m["a"],VCard:T["a"],VCardTitle:F["a"],VCol:R["a"],VDivider:M["a"],VIcon:b["a"],VImg:K["a"],VPagination:N["a"],VRow:L["a"],VSpacer:y["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card-title",[t._v("Twój koszyk")]),r("div",[r("v-card",{attrs:{flat:""}},[r("v-divider"),r("v-row",[r("v-col",{attrs:{cols:"1"}}),r("v-col",{attrs:{cols:"5"}},[t._v(" Nazwa ")]),r("v-col",{attrs:{cols:"3"}},[t._v(" Cena ")]),r("v-col",{attrs:{cols:"3"}},[t._v(" Ilość ")])],1)],1),t._l(t.getCart,(function(e,a){return r("v-card",{key:a,attrs:{flat:""}},[r("v-row",[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[r("v-img",{staticClass:"align-self-center",attrs:{src:e.item.image,"max-width":"40","max-height":"40"}})],1),r("v-col",{staticClass:"d-flex",attrs:{cols:"5"}},[r("div",{staticClass:"align-self-center"},[t._v(t._s(e.item.name))])]),r("v-col",{staticClass:"d-flex",attrs:{cols:"3"}},[r("div",{staticClass:"align-self-center"},[t._v(" "+t._s(e.item.price+" zł")+" ")])]),r("v-col",{staticClass:"d-flex",attrs:{cols:"3"}},[r("div",{staticClass:"align-self-center"},[t._v(t._s(e.quantity))])])],1),r("v-divider",{staticClass:"mt-3"})],1)}))],2)],1),r("v-col",{staticClass:"pl-7",attrs:{cols:"6"}},[t._v("Łączna kwota")]),r("v-col",{staticClass:"d-flex justify-end pr-7",attrs:{cols:"6"}},[t._v(t._s(t.getTotalPrice+" zł"))])],1),r("v-row",{staticClass:"mt-4"},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t.getCart&&t.getCart.length>0&&t.getUser?r("v-btn",{staticStyle:{"border-radius":"20px"},attrs:{color:"black"},on:{click:function(e){return t.order(t.getCart)}}},[r("span",{staticClass:"white--text"},[t._v("Złóż zamówienie")])]):t._e()],1)],1),t.error?r("v-row",{attrs:{justify:"center"}},[r("v-alert",{attrs:{color:"error"}},[t._v("Wystąpił błąd")])],1):t._e()],1)},Y=[],G=(r("4160"),r("25f0"),r("159b"),{data:function(){return{products:[],error:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["getCart","getUser"])),{},{getTotalPrice:function(){var t,e=0;return null===(t=this.getCart)||void 0===t||t.forEach((function(t){e+=t.quantity*(null===t||void 0===t?void 0:t.item.price)})),e}}),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setCart","clearCart"])),{},{order:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function r(){var a,n,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.error=!1,e.getUser&&t&&!(!t.length>0)){r.next=3;break}return r.abrupt("return");case 3:return console.log(e.getUser),a=[],n=[],t.forEach((function(t){a.push(t.item.id),n.push(t.quantity)})),a=a.toString(),n=n.toString(),o=new FormData,o.append("user_id",e.getUser.id),o.append("product_id",a),o.append("quantity",n),r.next=15,V()({method:"post",url:"http://backend-zti.cba.pl/order.php",data:o,headers:{"Content-Type":"multipart/form-data; boundary=".concat(o._boundary)}});case 15:s=r.sent,console.log(s,"response"),"true"===(null===s||void 0===s?void 0:s.data)?(e.clearCart(),e.$router.push("/sum")):e.error=!0;case 18:case"end":return r.stop()}}),r)})))()}})}),H=G,Q=r("0798"),X=Object(u["a"])(H,J,Y,!1,null,null,null),tt=X.exports;v()(X,{VAlert:Q["a"],VBtn:m["a"],VCard:T["a"],VCardTitle:F["a"],VCol:R["a"],VDivider:M["a"],VImg:K["a"],VRow:L["a"]});var et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[t._v("Dodaj kategorię")])],1)],1)],1)],1)},rt=[],at={data:function(){return{}}},nt=at,ot=Object(u["a"])(nt,et,rt,!1,null,null,null),st=ot.exports;v()(ot,{VCard:T["a"],VCardTitle:F["a"],VCol:R["a"],VRow:L["a"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"mt-10"},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[r("div",{staticClass:"green--text"},[t._v("Dziękujemy za zamówienie.")])]),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[r("v-btn",{staticStyle:{"border-radius":"20px"},attrs:{outlined:"",tile:"",color:"black"}},[r("span",{staticClass:"black--text"},[t._v("Strona główna")])])],1)],1)],1)],1)},it=[],lt={},ut=Object(u["a"])(lt,ct,it,!1,null,null,null),dt=ut.exports;v()(ut,{VBtn:m["a"],VCol:R["a"],VRow:L["a"]}),a["a"].use(x["a"]);var vt=[{path:"/",name:"Products",component:Z},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:$},{path:"/cart",name:"Cart",component:tt},{path:"/panel",name:"Panel",component:st},{path:"/sum",name:"Sum",component:dt}],pt=new x["a"]({routes:vt}),ft=pt;r("c740");a["a"].use(c["a"]);var gt=new c["a"].Store({state:{cart:[],logged:!1,user:null},mutations:{clearCart:function(t){t.cart=[]},setCart:function(t,e){var r;if((null===(r=t.cart)||void 0===r?void 0:r.length)<1)t.cart.push({item:e,quantity:1});else{var a,n=t.cart.findIndex((function(t){return t.item.id===e.id}));if(console.log(n,"index"),-1!==n)t.cart[n]={item:e,quantity:(null===(a=t.cart[n])||void 0===a?void 0:a.quantity)+1||1};else t.cart.push({item:e,quantity:1});console.log(t.cart,"cart?")}},setLogin:function(t,e){t.logged=e},setUser:function(t,e){t.user=e}},actions:{clearCart:function(t){var e=t.commit;e("clearCart")},setCart:function(t,e){var r=t.commit;r("setCart",e)},setUser:function(t,e){var r=t.commit;r("setUser",e)},setLogin:function(t,e){var r=t.commit;r("setLogin",e)}},getters:{getCart:function(t){return t.cart},getLogin:function(t){return t.logged},getUser:function(t){return t.user}},modules:{}}),mt=r("f309");a["a"].use(mt["a"]);var bt=new mt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ft,store:gt,vuetify:bt,render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.732997ec.js.map