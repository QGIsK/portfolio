(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("Snackbar"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"z-index":"10"}},[a("v-toolbar",{staticStyle:{cursor:"pointer",background:"transparent","z-index":"10"},attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"headline",staticStyle:{"margin-left":"7.5vh"},on:{click:function(e){return t.redirect("/")}}},[t._v("Demiann")]),a("v-spacer"),a("v-toolbar-items",{staticStyle:{"margin-right":"7.5vh"}},[a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{text:"",rounded:""}},[t._v("Home")]),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#footer",expression:"'#footer'"}],attrs:{text:"",rounded:""}},[t._v("Contact")])],1)],1)],1)},i=[],c={name:"Navbar",methods:{redirect:function(t){this.$router.push(t)}}},l=c,u=a("2877"),d=a("6544"),m=a.n(d),v=a("8336"),f=a("2fa4"),p=a("71d9"),h=a("2a7f"),b=Object(u["a"])(l,s,i,!1,null,null,null),g=b.exports;m()(b,{VBtn:v["a"],VSpacer:f["a"],VToolbar:p["a"],VToolbarItems:h["a"],VToolbarTitle:h["b"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-snackbar",{attrs:{color:t.type,right:"right",timeout:t.timeout,top:"top"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(" "+t._s(t.text)+" "),a("v-btn",{attrs:{color:"",text:""},on:{click:t.toggleSnackBar}},[t._v("Close")])],1)],1)],1)},k=[],x={name:"snackbar",data:function(){return{timeout:3e3}},computed:{show:{get:function(){return this.$store.getters.snackbarActive},set:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}},text:{get:function(){return this.$store.getters.snackbarText}},type:{get:function(){return this.$store.getters.snackbarType}}},methods:{toggleSnackBar:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}}},w=x,_=a("b0af"),S=a("2db4"),V=Object(u["a"])(w,y,k,!1,null,null,null),C=V.exports;m()(V,{VBtn:v["a"],VCard:_["a"],VSnackbar:S["a"]});var T={name:"App",components:{Navbar:g,Snackbar:C},data:function(){return{}}},O=T,$=(a("034f"),a("7496")),j=Object(u["a"])(O,r,o,!1,null,null,null),B=j.exports;m()(j,{VApp:$["a"]});var M=a("bc3a"),D=a.n(M),P=a("5c51"),A=a("f13c"),E=a.n(A),z=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},["loading"==t.status?a("div"):a("div",[a("Header"),a("Portfolio"),a("Contact"),a("Footer")],1)])},I=[],N=a("5530"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("particles-bg",{staticStyle:{"z-index":"1","max-height":"90vh"},attrs:{type:"cobweb",bg:!0,num:"100",color:t.white}}),a("v-container",{attrs:{"my-5":""}},[a("v-row",[a("v-col",{attrs:{cols:t.$vuetify.breakpoint.sm?6:12}},[a("v-card",{staticClass:"ml-5",staticStyle:{"z-index":"2","margin-top":"27.5vh","margin-bottom":"15vh",background:"transparent","font-size":"2em","line-height":"1.5em"},attrs:{flat:""}},[t._v(" I'm a "),a("b",[t._v("Web Developer")]),a("br"),t._v("Based in "),a("b",[t._v("The Netherlands")])])],1)],1)],1)],1)},R=[],H={name:"Header",data:function(){return{white:null}}},J=H,L=a("62ad"),U=a("a523"),q=a("0fd9"),Y=Object(u["a"])(J,W,R,!1,null,null,null),G=Y.exports;m()(Y,{VCard:_["a"],VCol:L["a"],VContainer:U["a"],VRow:q["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",staticStyle:{"margin-top":"17.5vh"}},[a("v-container",{staticClass:"my-5 fill-height"},[a("v-fade-transition",{attrs:{mode:"out-in",appear:""}},[a("v-row",{staticStyle:{"margin-top":"-17.5vh"}},t._l(t.items,(function(e,n){return a("v-col",{key:n,staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh","z-index":"6"},attrs:{cols:t.$vuetify.breakpoint.mdAndDown?""+e.size.mdDown:""+e.size.mdUp}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:e.image,alt:e.name}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:e.url,target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!0)}),a("v-card-title",[t._v(t._s(e.name))]),a("v-card-text",{domProps:{innerHTML:t._s(e.about)}})],1)],1)})),1)],1)],1)],1)},Q=[],X=a("2f62"),Z={name:"Portfolio",data:function(){return{portfolioItems:[{name:"Bassen Met Lasse",about:"Website for Bassen Met Lasse, Made with VueJS and NodeJS",mdDown:10,mdUp:8,link:"https://www.bassenmetlasse.nl",image:"https://api.demiann.dev/static/images/BassenMetLasse.WebP"},{name:"Reviews by Me",about:"Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB",mdDown:10,mdUp:7,link:"https://reviewsbyme.demiann.dev",image:"https://api.demiann.dev/static/images/ReviewsByMe.WebP"},{name:"Shadow bot",about:"Website for the Shadow Discord bot <br />Made with Vue and NodeJS",mdDown:10,mdUp:4,link:"https://shadow.demiann.dev",image:"https://api.demiann.dev/static/images/ShadowBot.WebP"},{name:"Template One",about:"Is Made with Vue, Express, NodeJS and MongoDB",mdDown:10,mdUp:8,link:"https://template-one.demiann.dev",image:"https://api.demiann.dev/static/images/TemplateOne.WebP"}]}},computed:Object(N["a"])({},Object(X["b"])({items:"items"}))},tt=Z,et=a("99d9"),at=a("0789"),nt=a("ce87"),rt=a("adda"),ot=a("a797"),st=Object(u["a"])(tt,K,Q,!1,null,null,null),it=st.exports;m()(st,{VBtn:v["a"],VCard:_["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:L["a"],VContainer:U["a"],VFadeTransition:at["b"],VHover:nt["a"],VImg:rt["a"],VOverlay:ot["a"],VRow:q["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("v-container",[a("v-row",[t.contacted?a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",text:""}},[a("v-card",{staticStyle:{background:"transparent","margin-top":"25vh","margin-bottom":"25vh"},attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"mx-auto headline"},[a("h2",{staticClass:"mx-auto"},[t._v("Thanks for Contacting me.")])]),a("v-card-text",{staticClass:"text-center"},[t._v("I'll get back to you as soon as I can.")])],1)],1):a("v-col",{staticClass:"mx-auto",attrs:{cols:t.$vuetify.breakpoint.mdAndDown?12:8}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[t._v("Contact")])]),t.show?a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"What's your name?",hint:"Your first name",rules:[function(){return!!t.from||"This field is required"}],required:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("v-text-field",{ref:"email",attrs:{rules:[function(){return!!t.email||"This field is required"}],label:"How do I contact you?",hint:"Your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{label:"Tell me about your project",counter:"",maxlength:"500","single-line":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),a("v-subheader",{staticStyle:{"margin-left":"-1.5vh"}},[t._v("What's your deadline like?")]),a("v-slider",{attrs:{"tick-labels":t.$vuetify.breakpoint.mdAndDown?t.smallTicks:t.timeTicks,max:4,step:"1",ticks:"always","tick-size":"4"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1):t._e(),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.resetForm}},[t._v("Reset form")]),a("v-spacer"),t.from&&t.email&&t.body?a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.submit}},[t._v("Send")]):a("v-btn",{attrs:{color:"primary",disabled:"",text:""},on:{click:t.submit}},[t._v("Send")])],1)],1)],1)],1)],1)],1)},lt=[],ut={name:"Contact",components:{},data:function(){return{show:!0,timeTicks:["7 Days","1 Month","3 Months","6 Months","1 Year"],smallTicks:["7D","1M","3M","6M","1Y"],contacted:!1,white:null,time:0,from:"",email:"",subject:"",body:""}},methods:{toggle:function(){this.show=!this.show,this.about=!this.about},resetForm:function(){var t=this;this.from="",this.email="",this.subject="",this.body="",this.time="7d",this.show=!1,this.$nextTick((function(){t.show=!0}))},submit:function(){var t=this,e={from:this.from,email:this.email,time:this.timeTicks[this.time],body:this.body};this.$http({url:"/contact",data:e,method:"POST"}).then((function(){t.resetForm();var e={type:"green",text:"Message has been send!"};t.$store.dispatch("toggleSnackBar",e),t.show=!1,t.contacted=!0})).catch((function(){var e={type:"red",text:"Please check all fields and try again."};t.$store.dispatch("toggleSnackBar",e)}))}}},dt=ut,mt=a("ce7e"),vt=a("ba0d"),ft=a("e0c7"),pt=a("8654"),ht=a("a844"),bt=Object(u["a"])(dt,ct,lt,!1,null,null,null),gt=bt.exports;m()(bt,{VBtn:v["a"],VCard:_["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:L["a"],VContainer:U["a"],VDivider:mt["a"],VRow:q["a"],VSlider:vt["a"],VSpacer:f["a"],VSubheader:ft["a"],VTextField:pt["a"],VTextarea:ht["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",attrs:{id:"footer"}},[a("v-footer",{staticClass:"mt-3",attrs:{color:"transparent",padless:""}},[a("v-row",{staticClass:"mt-4",attrs:{justify:"center","no-gutters":""}},[a("v-btn",{staticClass:"my-2 mr-1",attrs:{color:"white",text:"",rounded:"",rel:"noreferrer",target:"_blank",href:"https://github.com/qgisk"}},[t._v("Github")]),a("v-hover",{attrs:{"close-delay":"175","open-delay":"175"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[a("v-expand-transition",[n?a("div",{staticClass:"d-flex darken-2 white--text",staticStyle:{height:"100%"}},[t._v(" Demian#6666 ")]):a("div",[t._v("Discord")])])],1)]}}])}),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Instagram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Telegram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Linkedin")]),a("v-col",{staticClass:"lighten-2 my-3 py-4 text-center white--text",attrs:{cols:"12"}},[a("strong",[t._v(" Demiann © "+t._s((new Date).getFullYear())+" ")])])],1)],1)],1)},kt=[],xt={name:"Footer"},wt=xt,_t=a("553a"),St=Object(u["a"])(wt,yt,kt,!1,null,null,null),Vt=St.exports;m()(St,{VBtn:v["a"],VCol:L["a"],VExpandTransition:at["a"],VFooter:_t["a"],VHover:nt["a"],VRow:q["a"]});var Ct={name:"home",data:function(){return{}},components:{Header:G,Portfolio:it,Contact:gt,Footer:Vt},created:function(){this.$store.dispatch("getGeneralSettings")},computed:Object(N["a"])({},Object(X["b"])({status:"status",items:"items"}))},Tt=Ct,Ot=Object(u["a"])(Tt,F,I,!1,null,null,null),$t=Ot.exports;n["a"].use(z["a"]);var jt=[{path:"/",name:"home",component:$t}],Bt=new z["a"]({routes:jt}),Mt=Bt;a("d3b7");n["a"].use(X["a"]);var Dt=new X["a"].Store({state:{snackbarActive:!1,snackbarText:"",snackbarType:"",status:"",items:[]},actions:{toggleSnackBar:function(t,e){var a=t.commit,n=e.type,r=e.text;a("toggleSnackBar",{type:n,text:r})},getGeneralSettings:function(t){var e=t.commit;e("setStatus","loading"),D.a.get("/general-settings").then((function(t){e("setSettings",{items:t.data.portfolioItems})})).finally((function(){return e("setStatus","")}))}},mutations:{setStatus:function(t,e){t.status=e},setSettings:function(t,e){var a=e.items;t.items=a},toggleSnackBar:function(t,e){var a=e.type,n=e.text;t.snackbarActive=!t.snackbarActive,t.snackbarText=n,t.snackbarType=a}},getters:{snackbarActive:function(t){return t.snackbarActive},snackbarText:function(t){return t.snackbarText},snackbarType:function(t){return t.snackbarType},status:function(t){return t.status},items:function(t){return t.items}}}),Pt=a("f309");n["a"].use(Pt["a"]);var At=new Pt["a"]({theme:{dark:!0}});a("5363");n["a"].config.productionTip=!1,n["a"].use(P["a"]),n["a"].use(E.a,{container:"body",duration:750,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n["a"].prototype.$http=D.a,n["a"].prototype.$http.defaults.headers.common["Content-Type"]="application/json",n["a"].prototype.$http.defaults.baseURL="https://api.demiann.dev/",new n["a"]({store:Dt,router:Mt,vuetify:At,render:function(t){return t(B)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.cde12685.js.map