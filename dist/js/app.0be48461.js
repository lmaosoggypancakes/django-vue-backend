(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"acb4b969","chunk-4ad59e50":"96d9b7c8","chunk-608d37e0":"7d1a2749"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4ad59e50":1,"chunk-608d37e0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-4ad59e50":"3c2dd051","chunk-608d37e0":"b1cc4f11"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],b.parentNode.removeChild(b),n(o)},b.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1090:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var s=Object(a["x"])("Navbar"),i=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])(s,{is_auth:c.is_user,onIs_user:o.login,user:c.user,onUpdate:o.update},null,8,["is_auth","onIs_user","user","onUpdate"]),Object(a["h"])(i,{onIs_user:o.login,onUpdate:o.login_from_reg},null,8,["onIs_user","onUpdate"])])}n("d3b7");var c=Object(a["F"])("data-v-d534cd6e");Object(a["t"])("data-v-d534cd6e");var o={class:"navbar",role:"navigation","aria-label":"main navigation"},s=Object(a["h"])("div",{class:"navbar-brand"},[Object(a["h"])("a",{class:"navbar-item",href:"/"},[Object(a["h"])("i",{class:"fas fa-bullhorn"})]),Object(a["h"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(a["h"])("span",{"aria-hidden":"true"}),Object(a["h"])("span",{"aria-hidden":"true"}),Object(a["h"])("span",{"aria-hidden":"true"})])],-1),i={id:"navbarBasicExample",class:"navbar-menu"},u={class:"navbar-start"},l={class:"navbar-item"},d=Object(a["f"])('<div class="navbar-item has-dropdown is-hoverable" data-v-d534cd6e><a class="navbar-link" data-v-d534cd6e> More </a><div class="navbar-dropdown" data-v-d534cd6e><a class="navbar-item" data-v-d534cd6e> About </a><a class="navbar-item" data-v-d534cd6e> Jobs </a><a class="navbar-item" data-v-d534cd6e> Contact </a><hr class="navbar-divider" data-v-d534cd6e><a class="navbar-item" data-v-d534cd6e> Report an issue </a></div></div>',1),b={class:"navbar-end"},h={class:"navbar-item"},f={class:"buttons"};Object(a["r"])();var p=c((function(e,t,n,r,c,p){return Object(a["q"])(),Object(a["d"])("nav",o,[s,Object(a["h"])("div",i,[Object(a["h"])("div",u,[Object(a["h"])("a",{class:"navbar-item",onClick:t[1]||(t[1]=function(t){return e.$router.push("/")})}," Home "),Object(a["h"])("a",l,Object(a["z"])(n.user.username),1),d]),Object(a["h"])("div",b,[Object(a["h"])("div",h,[Object(a["h"])("div",f,[!0===n.is_auth?(Object(a["q"])(),Object(a["d"])("a",{key:0,class:"button is-light",onClick:t[2]||(t[2]=function(e){return p.logout()})}," Log out ")):Object(a["e"])("",!0),!1===n.is_auth?(Object(a["q"])(),Object(a["d"])("a",{key:1,class:"button is-light",onClick:t[3]||(t[3]=function(t){return e.$router.push("/login")})}," Login ")):Object(a["e"])("",!0),!1===n.is_auth?(Object(a["q"])(),Object(a["d"])("a",{key:2,class:"button is-light",onClick:t[4]||(t[4]=function(t){return e.$router.push("/register")})}," Register ")):Object(a["e"])("",!0)])])])])])})),v={name:"Navbar",props:{is_auth:Boolean,user:Object},methods:{logout:function(){window.localStorage.setItem("user",""),this.$router.push("/login"),this.$emit("is_user",!1),this.$emit("update","")}}};n("a5e5");v.render=p,v.__scopeId="data-v-d534cd6e";var m=v,O={name:"app",mounted:function(){this.ValidateUser()},methods:{login_from_reg:function(e){this.user=JSON.parse(e),this.is_user=!0},update:function(e){console.log("updated"),this.user=e},login:function(e){this.is_user=e,console.log("event received")},ValidateUser:function(){var e,t=this;try{e=JSON.parse(window.localStorage.getItem("user"))}catch(n){e={username:"",password:""}}null===e&&(e={username:"",password:""}),console.log(e),this.user=e,fetch("https:/api-josefmacera.herokuapp.com/api/login",{method:"POST",body:JSON.stringify({username:e.username,password:e.password})}).then((function(e){return e.json()})).then((function(n){JSON.stringify(n.user)!==JSON.stringify(e)?(t.$router.push("login"),t.is_user=!1,console.log("not logged in")):(t.is_user=!0,console.log("yes logged in"))}))}},components:{Navbar:m},data:function(){return{is_user:!1,user:Object}}};n("df00");O.render=r;var g=O,j=n("6c02"),y={class:"columns"},_=Object(a["h"])("div",{class:"column"},null,-1),w={class:"column"},k=Object(a["h"])("div",{class:"column"},null,-1);function S(e,t,n,r,c,o){var s=Object(a["x"])("Post");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("div",y,[_,Object(a["h"])("div",w,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(c.listings,(function(e){return Object(a["q"])(),Object(a["d"])(s,{i:e,key:e},null,8,["i"])})),128))]),k])])}var P=n("bc3a"),x=n.n(P),N=Object(a["F"])("data-v-19cfc1e2");Object(a["t"])("data-v-19cfc1e2");var C={class:"card"},E={class:"card-image"},q={class:"image is-4by3"},I={class:"card-content"},A={class:"media"},J={class:"media-left"},L={class:"image is-48x48"},T={class:"media-content"},$={class:"title is-4"},U={class:"subtitle is-6"},B={class:"content"},z=Object(a["h"])("a",null,"@bulmaio",-1),M=Object(a["g"])(". "),H=Object(a["h"])("br",null,null,-1),F=Object(a["h"])("hr",null,null,-1),R=Object(a["h"])("button",{class:"button is-primary"},"View Post",-1),V=Object(a["h"])("hr",null,null,-1);Object(a["r"])();var D=N((function(e,t,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("div",C,[Object(a["h"])("div",E,[Object(a["h"])("figure",q,[Object(a["h"])("img",{src:n.i.image,alt:"Placeholder image"},null,8,["src"])])]),Object(a["h"])("div",I,[Object(a["h"])("div",A,[Object(a["h"])("div",J,[Object(a["h"])("figure",L,[Object(a["h"])("img",{src:n.i.host.image,alt:"Placeholder image"},null,8,["src"])])]),Object(a["h"])("div",T,[Object(a["h"])("p",$,Object(a["z"])(n.i.title),1),Object(a["h"])("p",U,Object(a["z"])(n.i.host.username),1)])]),Object(a["h"])("div",B,[Object(a["g"])(Object(a["z"])(n.i.desc),1),z,M,H,Object(a["h"])("time",null,"Ends at "+Object(a["z"])(n.i.end),1),F,R])])]),V])})),K={name:"Post",props:{i:Object}};n("9f11");K.render=D,K.__scopeId="data-v-19cfc1e2";var G=K,Q={name:"Home",data:function(){return{username:"",password:"",listings:[],user:{}}},mounted:function(){console.log(window.localStorage.getItem("user")),""===window.localStorage.getItem("user")&&this.$router.push("/login"),this.getAuctions()},methods:{getAuctions:function(){var e=this;x.a.get("https:/api-josefmacera.herokuapp.com/api/all").then((function(t){console.log(t),e.listings=t.data}))}},components:{Post:G}};Q.render=S;var W=Q,X=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-4ad59e50").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-608d37e0").then(n.bind(null,"73cf"))}}],Y=Object(j["a"])({history:Object(j["b"])("/"),routes:X}),Z=Y;Object(a["c"])(g).use(Z).mount("#app")},9268:function(e,t,n){},"9f11":function(e,t,n){"use strict";n("a48f")},a48f:function(e,t,n){},a5e5:function(e,t,n){"use strict";n("1090")},df00:function(e,t,n){"use strict";n("9268")}});
//# sourceMappingURL=app.0be48461.js.map