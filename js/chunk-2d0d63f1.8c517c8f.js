(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n={class:"container-fluid mt-3 position-relative"};function c(e,t,a,c,r,s){var l=Object(o["resolveComponent"])("Navbar"),i=Object(o["resolveComponent"])("ToastMessages"),u=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(l),Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(i),Object(o["createVNode"])(u)])],64)}a("ac1f"),a("5319");var r=a("cfb9"),s=a("f367"),l={class:"navbar navbar-expand-lg navbar-dark bg-soft"},i={class:"container-fluid"},u=Object(o["createElementVNode"])("a",{class:"navbar-brand",href:"#"},"re.HOUSE",-1),d=Object(o["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},v={class:"navbar-nav"},p=Object(o["createTextVNode"])("產品"),h=Object(o["createTextVNode"])("訂單"),f=Object(o["createTextVNode"])("優惠券");function j(e,t,a,n,c,r){var s=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",l,[Object(o["createElementVNode"])("div",i,[u,d,Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",v,[Object(o["createVNode"])(s,{to:"/dashboard/products",class:"nav-link"},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),Object(o["createVNode"])(s,{to:"/dashboard/orders",class:"nav-link"},{default:Object(o["withCtx"])((function(){return[h]})),_:1}),Object(o["createVNode"])(s,{to:"/dashboard/coupons",class:"nav-link"},{default:Object(o["withCtx"])((function(){return[f]})),_:1}),Object(o["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(){return r.logout&&r.logout.apply(r,arguments)}),["prevent"])),class:"nav-link"},"登出")])])])])}var O={methods:{showAlert:function(){this.$swal.fire({position:"center",icon:"success",title:"您已登出",showConfirmButton:!1,timer:2e3,iconColor:"#236F6B"})},logout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/logout");this.$http.post(t,this.user).then((function(t){t.data.success&&(e.$router.push("/login"),e.showAlert())})).catch((function(e){console.dir(e.response.data.message)}))}}},g=a("6b0d"),m=a.n(g);const k=m()(O,[["render",j]]);var N=k,V={data:function(){return{check:!1}},components:{Navbar:N,ToastMessages:s["a"]},provide:function(){return{emitter:r["a"]}},created:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)jiangsToken\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log(t),this.$http.defaults.headers.common.Authorization=t;var a="".concat("https://vue3-course-api.hexschool.io/v2","/api/user/check");this.$http.post(a,this.user).then((function(t){console.log("user/check",t),t.data.success?e.check=!0:e.$router.push("/login")})).catch((function(t){console.dir(t.response.data.message),e.$router.push("/login")}))}};const w=m()(V,[["render",c]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-2d0d63f1.8c517c8f.js.map