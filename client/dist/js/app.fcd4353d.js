(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],h=0,u=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},i={app:0},n=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"061c":function(e,t,a){},"27f4":function(e,t,a){"use strict";a("061c")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),i=a("bc3a"),n=a.n(i),r=a("5c51"),s=a("f13c"),l=a.n(s),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-card",[a("v-snackbar",{attrs:{color:"blue-grey",shaped:"",timeout:-1,right:"right"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" This website may use cookies. "),a("v-btn",{attrs:{text:"",to:"/policy/cookie-statement"}},[e._v("Read More")]),a("v-btn",{attrs:{color:"",text:""},on:{click:e.toggleSnackBar}},[e._v("Close")])],1)],1),a("Snackbar"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},d=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",[a("v-snackbar",{attrs:{color:e.type,right:"right",timeout:e.timeout,top:"top"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"",text:""},on:{click:e.toggleSnackBar}},[e._v("Close")])],1)],1)],1)},u=[],p={name:"snackbar",data(){return{timeout:3e3}},computed:{show:{get(){return this.$store.getters.snackbarActive},set(){let e={type:"",text:""};this.$store.dispatch("toggleSnackBar",e)}},text:{get(){return this.$store.getters.snackbarText}},type:{get(){return this.$store.getters.snackbarType}}},methods:{toggleSnackBar(){let e={type:"",text:""};this.$store.dispatch("toggleSnackBar",e)}}},m=p,f=a("2877"),v=a("6544"),b=a.n(v),g=a("8336"),y=a("b0af"),w=a("2db4"),k=Object(f["a"])(m,h,u,!1,null,null,null),x=k.exports;b()(k,{VBtn:g["a"],VCard:y["a"],VSnackbar:w["a"]});var S={name:"App",components:{Snackbar:x},data:()=>({show:!0}),methods:{toggleSnackBar(){this.show=!this.show}}},C=S,T=(a("034f"),a("7496")),_=Object(f["a"])(C,c,d,!1,null,null,null),j=_.exports;b()(_,{VApp:T["a"],VBtn:g["a"],VCard:y["a"],VSnackbar:w["a"]});var D=a("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},["loading"==e.status?a("div",[a("particles-bg",{staticStyle:{"z-index":"1","max-height":"100vh"},attrs:{type:"cobweb",bg:!0,num:"100"}}),e._m(0)],1):a("div",[a("Navbar"),a("Header"),a("Portfolio"),a("Contact"),a("Footer")],1)])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sk-cube-grid"},[a("div",{staticClass:"sk-cube sk-cube1"}),a("div",{staticClass:"sk-cube sk-cube2"}),a("div",{staticClass:"sk-cube sk-cube3"}),a("div",{staticClass:"sk-cube sk-cube4"}),a("div",{staticClass:"sk-cube sk-cube5"}),a("div",{staticClass:"sk-cube sk-cube6"}),a("div",{staticClass:"sk-cube sk-cube7"}),a("div",{staticClass:"sk-cube sk-cube8"}),a("div",{staticClass:"sk-cube sk-cube9"})])}],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"z-index":"10"}},[a("v-toolbar",{staticStyle:{cursor:"pointer",background:"transparent","z-index":"10"},attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"headline",staticStyle:{"margin-left":"7.5vh"},on:{click:function(t){return e.redirect("/")}}},[e._v("Demiann")]),a("v-spacer"),a("v-toolbar-items",{staticStyle:{"margin-right":"7.5vh"}},[a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{text:"",rounded:""}},[e._v("Home")]),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#footer",expression:"'#footer'"}],attrs:{text:"",rounded:""}},[e._v("Contact")])],1)],1)],1)},M=[],$={name:"Navbar",methods:{redirect(e){this.$router.push(e)}}},O=$,B=a("2fa4"),I=a("71d9"),q=a("2a7f"),z=Object(f["a"])(O,P,M,!1,null,null,null),Y=z.exports;b()(z,{VBtn:g["a"],VSpacer:B["a"],VToolbar:I["a"],VToolbarItems:q["a"],VToolbarTitle:q["b"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("particles-bg",{staticStyle:{"z-index":"1","max-height":"80vh"},attrs:{type:"cobweb",bg:!0,num:"100"}}),a("v-container",{attrs:{"my-5":""}},[a("v-row",[a("v-col",{attrs:{cols:e.$vuetify.breakpoint.sm?6:12}},[a("v-card",{staticClass:"ml-5",staticStyle:{"z-index":"2","margin-top":"27.5vh","margin-bottom":"15vh",background:"transparent","font-size":"2em","line-height":"1.5em"},attrs:{flat:""}},[e._v(" I'm a "),a("b",[e._v("Web Developer")]),a("br"),e._v("Based in "),a("b",[e._v("The Netherlands")])])],1)],1)],1)],1)},E=[],F={name:"Header",methods:{}},R=F,N=a("62ad"),H=a("a523"),L=a("0fd9"),J=Object(f["a"])(R,W,E,!1,null,null,null),U=J.exports;b()(J,{VCard:y["a"],VCol:N["a"],VContainer:H["a"],VRow:L["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark",staticStyle:{"margin-top":"17.5vh"}},[a("v-container",{staticClass:"my-5 fill-height"},[a("v-fade-transition",{attrs:{mode:"out-in",appear:""}},[a("v-row",{staticStyle:{"margin-top":"-17.5vh"}},e._l(e.items,(function(t,o){return a("v-col",{key:o,staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh","z-index":"6"},attrs:{cols:e.$vuetify.breakpoint.mdAndDown?""+t.size.mdDown:""+t.size.mdUp}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(o){var i=o.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:t.image,alt:t.name}}),a("v-fade-transition",[i?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:t.url,target:"_blank"}},[e._v("View Website")])],1):e._e()],1)],1)]}}],null,!0)}),a("v-card-title",[e._v(e._s(t.name))]),a("v-card-text",{domProps:{innerHTML:e._s(t.about)}})],1)],1)})),1)],1)],1)],1)},K=[],Z=a("2f62"),Q={name:"Portfolio",data:()=>({portfolioItems:[{name:"Bassen Met Lasse",about:"Website for Bassen Met Lasse, Made with VueJS and NodeJS",mdDown:10,mdUp:8,link:"https://www.bassenmetlasse.nl",image:"https://api.demiann.dev/static/images/BassenMetLasse.WebP"},{name:"Reviews by Me",about:"Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB",mdDown:10,mdUp:7,link:"https://reviewsbyme.demiann.dev",image:"https://api.demiann.dev/static/images/ReviewsByMe.WebP"},{name:"Shadow bot",about:"Website for the Shadow Discord bot <br />Made with Vue and NodeJS",mdDown:10,mdUp:4,link:"https://shadow.demiann.dev",image:"https://api.demiann.dev/static/images/ShadowBot.WebP"},{name:"Template One",about:"Is Made with Vue, Express, NodeJS and MongoDB",mdDown:10,mdUp:8,link:"https://template-one.demiann.dev",image:"https://api.demiann.dev/static/images/TemplateOne.WebP"}]}),computed:{...Object(Z["b"])({items:"items"})}},X=Q,ee=a("99d9"),te=a("0789"),ae=a("ce87"),oe=a("adda"),ie=a("a797"),ne=Object(f["a"])(X,G,K,!1,null,null,null),re=ne.exports;b()(ne,{VBtn:g["a"],VCard:y["a"],VCardText:ee["b"],VCardTitle:ee["c"],VCol:N["a"],VContainer:H["a"],VFadeTransition:te["c"],VHover:ae["a"],VImg:oe["a"],VOverlay:ie["a"],VRow:L["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"contact"}},[a("v-container",[a("v-row",[e.contacted?a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",text:""}},[a("v-card",{staticStyle:{background:"transparent","margin-top":"25vh","margin-bottom":"25vh"},attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"mx-auto headline"},[a("h2",{staticClass:"mx-auto"},[e._v("Thanks for Contacting me.")])]),a("v-card-text",{staticClass:"text-center"},[e._v("I'll get back to you as soon as I can.")])],1)],1):a("v-col",{staticClass:"mx-auto",attrs:{cols:e.$vuetify.breakpoint.mdAndDown?12:8}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[e._v("Contact")])]),e.show?a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"What's your name?",hint:"Your first name",rules:[function(){return!!e.from||"This field is required"}],required:""},model:{value:e.from,callback:function(t){e.from=t},expression:"from"}}),a("v-text-field",{ref:"email",attrs:{rules:[function(){return!!e.email||"This field is required"}],label:"How do I contact you?",hint:"Your email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-textarea",{attrs:{label:"Tell me about your project",counter:"",maxlength:"500","single-line":""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("v-subheader",{staticStyle:{"margin-left":"-1.5vh"}},[e._v("What's your deadline like?")]),a("v-slider",{attrs:{"tick-labels":e.$vuetify.breakpoint.mdAndDown?e.smallTicks:e.timeTicks,max:4,step:"1",ticks:"always","tick-size":"4"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1):e._e(),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:e.resetForm}},[e._v("Reset form")]),a("v-spacer"),e.from&&e.email&&e.text?a("v-btn",{attrs:{color:"primary",text:"",disabled:e.sending},on:{click:e.submit}},[e._v("Send")]):a("v-btn",{attrs:{color:"primary",disabled:"",text:""},on:{click:e.submit}},[e._v("Send")])],1)],1)],1)],1)],1)],1)},le=[];const ce=e=>{const t="; "+document.cookie,a=t.split(`; ${e}=`);return 2===a.length&&a.pop().split(";").shift()},de=(e,t,a)=>document.cookie=`${e}=${t}; path=/; max-age=${a}; secure; samesite=strict;`,he="contacted";var ue={name:"Contact",components:{},data:()=>({show:!0,timeTicks:["7 Days","1 Month","3 Months","6 Months","1 Year","More than 1 Year"],smallTicks:["7D","1M","3M","6M","1Y","1Y+"],time:"7 Days",contacted:!1,from:"",email:"",subject:"",text:"",sending:!1}),mounted(){const e=ce(he);this.contacted=!!e},methods:{toggle(){this.show=!this.show,this.about=!this.about},resetForm(){this.from="",this.email="",this.subject="",this.text="",this.time=this.timeTicks[0],this.show=!1,this.$nextTick(()=>{this.show=!0})},submit(){this.sending=!0;const e={from:this.from,email:this.email,time:this.timeTicks[this.time],text:this.text};this.$http({url:"/contact",data:e,method:"POST"}).then(()=>{this.resetForm();let e={type:"green",text:"Message has been send!"};de(he,!0,604800),this.$store.dispatch("toggleSnackBar",e),this.show=!1,this.contacted=!0}).catch(()=>{let e={type:"red",text:"Please check all fields and try again."};this.$store.dispatch("toggleSnackBar",e),this.sending=!1})}}},pe=ue,me=a("ce7e"),fe=a("ba0d"),ve=a("e0c7"),be=a("8654"),ge=a("a844"),ye=Object(f["a"])(pe,se,le,!1,null,null,null),we=ye.exports;b()(ye,{VBtn:g["a"],VCard:y["a"],VCardActions:ee["a"],VCardText:ee["b"],VCardTitle:ee["c"],VCol:N["a"],VContainer:H["a"],VDivider:me["a"],VRow:L["a"],VSlider:fe["a"],VSpacer:B["a"],VSubheader:ve["a"],VTextField:be["a"],VTextarea:ge["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark",attrs:{id:"footer"}},[a("v-footer",{staticClass:"mt-3",attrs:{color:"transparent",padless:""}},[a("v-row",{staticClass:"mt-4",attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{cols:"12"}},[a("v-hover",{attrs:{"close-delay":"175","open-delay":"175"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[a("v-expand-transition",[o?a("div",{staticClass:"d-flex darken-2 white--text",staticStyle:{height:"100%"}},[e._v("Demian#6666")]):a("div",[e._v("Discord")])])],1)]}}])}),e._l(e.socialLinks,(function(t){return a("v-btn",{key:t.name,staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:t.path}},[e._v(e._s(t.name))])}))],2),a("v-col",{staticClass:"lighten-2 my-3 py-4 text-center white--text",attrs:{cols:"12"}},[a("strong",[e._v(" Demiann © "+e._s((new Date).getFullYear())+" ")])]),a("v-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{cols:"12"}},e._l(e.legalLinks,(function(t){return a("v-btn",{key:t.name,staticClass:"my-2 mr-1",attrs:{color:"white",text:"",rounded:"",to:t.path}},[e._v(e._s(t.name))])})),1)],1)],1)],1)},xe=[],Se={name:"Footer",data(){return{socialLinks:[{name:"Github",path:"https://github.com/qgisk"},{name:"Instagram",path:"#"},{name:"Telegram",path:"#"},{name:"LinkedIn",path:"#"}],legalLinks:[{name:"Cookie Statement",path:"/policy/cookie-statement"},{name:"Disclaimer",path:"/policy/disclaimer"},{name:"Privacy Policy",path:"/policy/privacy-policy"}]}}},Ce=Se,Te=a("553a"),_e=Object(f["a"])(Ce,ke,xe,!1,null,null,null),je=_e.exports;b()(_e,{VBtn:g["a"],VCol:N["a"],VExpandTransition:te["a"],VFooter:Te["a"],VHover:ae["a"],VRow:L["a"]});var De={name:"home",data:()=>({}),components:{Navbar:Y,Header:U,Portfolio:re,Contact:we,Footer:je},created(){this.$store.dispatch("getGeneralSettings")},computed:{...Object(Z["b"])({status:"status",items:"items"})}},Ve=De,Ae=(a("27f4"),Object(f["a"])(Ve,V,A,!1,null,"f5e567dc",null)),Pe=Ae.exports,Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("ReadMe",{attrs:{title:e.title,data:e.data}})],1)},$e=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container mt-5vh",staticStyle:{position:"relative"}},[a("FloatingHomeBTN"),a("h2",{staticClass:"display-2"},[e._v(" "+e._s(e.title)+" ")]),a("div",{staticClass:"mt-5vh readme-container",domProps:{innerHTML:e._s(e.data)}})],1)])},Be=[],Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-fab-transition",[a("v-btn",{attrs:{color:"white",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:function(t){return e.redirect("/")}}},[a("i",{staticClass:"fa fa-home fa-2x",staticStyle:{color:"black"}})])],1)],1)},qe=[],ze={name:"FloatingHomeBTN",methods:{redirect(e){this.$router.push(e)}}},Ye=ze,We=Object(f["a"])(Ye,Ie,qe,!1,null,null,null),Ee=We.exports;b()(We,{VBtn:g["a"],VFabTransition:te["b"]});var Fe={name:"Readme",components:{FloatingHomeBTN:Ee},props:["title","data"]},Re=Fe,Ne=(a("c098"),Object(f["a"])(Re,Oe,Be,!1,null,null,null)),He=Ne.exports,Le=a("a9be"),Je=a.n(Le),Ue={name:"CookieStatement",components:{ReadMe:He},data(){return{title:"Cookie Verklaring",data:""}},created(){this.data=Je.a}},Ge=Ue,Ke=Object(f["a"])(Ge,Me,$e,!1,null,null,null),Ze=Ke.exports;b()(Ke,{VApp:T["a"]});var Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("ReadMe",{attrs:{title:e.title,data:e.data}})],1)},Xe=[],et=a("6514"),tt=a.n(et),at={name:"Disclaimer",components:{ReadMe:He},data(){return{title:"Disclaimer",data:""}},created(){this.data=tt.a}},ot=at,it=Object(f["a"])(ot,Qe,Xe,!1,null,null,null),nt=it.exports;b()(it,{VApp:T["a"]});var rt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("ReadMe",{attrs:{title:e.title,data:e.data}})],1)},st=[],lt=a("95f3"),ct=a.n(lt),dt={name:"PrivacyPolicy",components:{ReadMe:He},data(){return{title:"Privacy Policy",data:""}},created(){this.data=ct.a}},ht=dt,ut=Object(f["a"])(ht,rt,st,!1,null,null,null),pt=ut.exports;b()(ut,{VApp:T["a"]}),o["a"].use(D["a"]);const mt=[{path:"/",name:"home",component:Pe},{path:"/policy/cookie-statement",name:"CookieStatement",component:Ze},{path:"/policy/disclaimer",name:"Disclaimer",component:nt},{path:"/policy/privacy-policy",name:"PrivacyPolicy",component:pt},{path:"*",name:"404",redirect:"/"}],ft=new D["a"]({mode:"history",routes:mt});var vt=ft;o["a"].use(Z["a"]);var bt=new Z["a"].Store({state:{snackbarActive:!1,snackbarText:"",snackbarType:"",status:"",items:[]},actions:{toggleSnackBar({commit:e},{type:t,text:a}){e("toggleSnackBar",{type:t,text:a})},getGeneralSettings({commit:e}){e("setStatus","loading"),n.a.get("/settings").then(t=>{e("setSettings",{items:t.data.items}),e("setStatus","success")}).catch(()=>{e("toggleSnackBar",{type:"red",text:"An error has occured while loading, Please try again later."})})}},mutations:{setStatus(e,t){e.status=t},setSettings(e,{items:t}){e.items=t},toggleSnackBar(e,{type:t,text:a}){e.snackbarActive=!e.snackbarActive,e.snackbarText=a,e.snackbarType=t}},getters:{snackbarActive:e=>e.snackbarActive,snackbarText:e=>e.snackbarText,snackbarType:e=>e.snackbarType,status:e=>e.status,items:e=>e.items}}),gt=a("f309");o["a"].use(gt["a"]);var yt=new gt["a"]({theme:{dark:!0}});a("5363");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].use(l.a,{container:"body",duration:750,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),o["a"].prototype.$http=n.a,o["a"].prototype.$http.defaults.headers.common["Content-Type"]="application/json",o["a"].prototype.$http.defaults.baseURL="/api",new o["a"]({store:bt,router:vt,vuetify:yt,render:e=>e(j)}).$mount("#app")},6514:function(e,t){var a="<h2 id=disclaimer>DISCLAIMER</h2> <p>Op het gebruik van deze website (demiann.dev) zijn onderstaande gebruiksvoorwaarden van toepassing. Door gebruik te maken van deze website, wordt u geacht kennis te hebben genomen van de gebruiksvoorwaarden en deze te hebben aanvaard.</p> <h1 id=gebruik-van-informatie>Gebruik van informatie</h1> <p>Demian streeft ernaar op deze website altijd juiste en actuele informatie aan te bieden. Hoewel deze informatie met de grootst mogelijke zorgvuldigheid is samengesteld, staat Demian niet in voor de volledigheid, juistheid of actualiteit van de informatie. De juridische informatie op de website is van algemene aard en kan niet worden beschouwd als een vervanging van juridisch advies.</p> <p>Aan de informatie kunnen geen rechten worden ontleend. Demian aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit het gebruik van de informatie of de website en evenmin voor het niet goed functioneren van de website. Op basis van het verzenden en ontvangen van informatie via de website of via e-mail kan niet zonder meer een relatie tussen Demian en de gebruiker van de website ontstaan.</p> <h1 id=e-mail>E-mail</h1> <p>Demian garandeert niet dat e-mails die aan Demian worden verzonden (tijdig) worden ontvangen of verwerkt, omdat tijdige ontvangst van e-mails niet kan worden gegarandeerd. Ook de veiligheid van het e-mailverkeer kan niet volledig worden gegarandeerd door de hieraan verbonden veiligheidsrisico’s. Door zonder encryptie of wachtwoordbeveiliging per e-mail met Demian te corresponderen, accepteert u dit risico.</p> <h1 id=hyperlinks>Hyperlinks</h1> <p>Deze website kan hyperlinks bevatten naar websites van derden. Demian heeft geen invloed op websites van derden en is niet verantwoordelijk voor de beschikbaarheid of inhoud daarvan. Demian aanvaardt dan ook geen aansprakelijkheid voor schade die voortvloeit uit het gebruik van websites van derden.</p> <h1 id=intellectuele-eigendomsrechten>Intellectuele eigendomsrechten</h1> <p>Alle publicaties en uitingen van Demian zijn beschermd door auteursrecht en andere intellectuele eigendomsrechten. Behalve voor persoonlijk en niet-commercieel gebruik, mag niets uit deze publicaties en uitingen op welke manier dan ook verveelvoudigd, gekopieerd of op een andere manier openbaar worden gemaakt, zonder dat Demian daar vooraf schriftelijke toestemming voor heeft gegeven.</p> <h1 id=toeschrijving>Toeschrijving</h1> <p>Deze disclaimer is gemaakt met behulp van Rocket Lawyer (https://www.rocketlawyer.com/nl/nl).</p> ";e.exports=a},"85ec":function(e,t,a){},"95f3":function(e,t){var a="<h2 id=privacy-policy>PRIVACY POLICY</h2> <p>Demian Mooibroek respects the privacy of its website visitors, in particular their rights regarding the automatic processing of personal data. We have therefore formulated and implemented a policy on complete transparency with our customers regarding the processing of personal data, its purpose(s) and the possibilities to exercise your legal rights in the best possible way.</p> <p>If you require any additional information about the protection of personal data, please visit the website of the Dutch Data Protection Authority (Autoriteit Persoonsgegevens): https://autoriteitpersoonsgegevens.nl/nl.</p> <p>Until you accept the use of cookies and other tracking devices, we will not place any non-anonymised analytical cookies and / or tracking cookies on your computer, mobile phone or tablet. With the continued visit of this website you accept these terms of use and you accept the use of cookies and other tracking systems, unless we have provided for another method of accepting cookies on our website.</p> <p>The current available version of this privacy policy is the only version that applies while visiting our website until a new version replaces the current version.</p> <h1 id=article-1---definitions>Article 1 - Definitions</h1> <ol> <li>Website (hereinafter: &quot;Website&quot;) Demiann.</li> <li>Party responsible for processing personal data (hereinafter: &quot;the controller&quot;): Demian Mooibroek, residing at Verlengde Meeuwerderweg 85, 9723ZM Groningen, The Netherlands .</li> </ol> <h1 id=article-2---access-to-the-website>Article 2 - Access to the website</h1> <p>Access to and use of the website are strictly personal. You will refrain from using the data and information of this website for your own commercial, political or advertising purposes, as well as for any commercial offers, in particular unsolicited electronic offers.</p> <h1 id=article-3---website-content>Article 3 - Website content</h1> <p>All brands, images, texts, comments, illustrations (animated) images, video images, sounds and all the technical applications that can be used to operate this website and more generally all the components used on this website, are protected by the laws on intellectual property. Any reproduction, repetition, use or modification, by any means whatsoever, of all or just part of it, including technical applications, without the prior written permission of the controller, is strictly prohibited. The fact that the controller may not take immediate action against any infringement, cannot be considered as a tacit consent, nor of a waiver of any right to prosecute the infringing party.</p> <h1 id=article-4---management-of-the-website>Article 4 - Management of the website</h1> <p>For the purpose of proper management of the site, the controller may at any time: · suspend, interrupt, reduce or decline the access to the website for a particular category of visitors · delete all information that may disrupt the functioning of the website or conflicts with national or international laws or is contrary to internet etiquette · make the website temporarily unavailable in order to perform updates</p> <h1 id=article-5---responsibilities>Article 5 - Responsibilities</h1> <ol> <li>The controller is not liable for any failure, disturbances, difficulties or interruptions in the functioning of the website, causing the (temporary) inaccessibility of the website or of any of its functionalities. You, yourself, are responsible for the way you seek connection to our website. You need to take all appropriate steps to protect your equipment and data against hazards such as virus attacks on the Internet. Furthermore, you are responsible for which websites you visit and what information you seek.</li> <li>The controller is not liable for any legal proceedings taken against you: · because of the use of the website or services accessible via the Internet · for violating the terms of this privacy policy</li> <li>The controller is not liable for any damages that incur to you or third parties or your equipment, as a result of your connection to or use of the website and you will refrain from any subsequent (legal) action against the controller.</li> <li>If the controller is involved in a dispute because of your (ab)use of this website, he is entitled to (re)claim all subsequent damages from you.</li> </ol> <h1 id=article-6---collection-of-data>Article 6 - Collection of data</h1> <h2 id=contacting>Contacting</h2> <h3 id=what-data-is-collected>What data is collected</h3> <p>After contacting, Demiann.dev may collect and store your name, email address, message and time.</p> <h3 id=how-data-is-used>How Data is Used</h3> <p>We store your contact information so we can get back in touch with you, this includes the given name, email address, message and time.</p> <h3 id=sharing-data>Sharing Data</h3> <p>We use the given data to send an email.</p> <h2 id=analytics>Analytics</h2> <h3 id=plausible-analytics>Plausible Analytics</h3> <p>We use the open source Plausible Analytics self-hosted through our analytics.demiann.dev domain to count website visits, downloads, etc. No cookies are used and no personal data—not even an IP address or browser user agent—is stored. For more information, see the <a href=https://plausible.io/data-policy>Plausible Data Policy</a></p> <h3 id=storing-data>Storing data</h3> <p>The personal data that are collected on the website are used mainly by the controller in order to maintain a (commercial) relationship with you and if applicable in order to process your orders. They are recorded in an (electronic) register.</p> <h1 id=article-7---your-rights-regarding-information>Article 7 - Your rights regarding information</h1> <ol> <li>Pursuant to Article 13 paragraph 2 sub b GDPR each data subject has the right to information on and access to, and rectification, erasure and restriction of processing of his personal data, as well as the right to object to the processing and the right to data portability.</li> <li>You can exercise these rights by contacting us at hello@demiann.dev.</li> <li>Each request must be accompanied by a copy of a valid ID, on which you put your signature and state the address where we can contact you.</li> <li>Within one month of the submitted request, you will receive an answer from us.</li> <li>Depending on the complexity and the number of the requests this period may be extended to two months.</li> </ol> <h1 id=article-8---legal-obligations>Article 8 - Legal obligations</h1> <ol> <li>In case of infringement of any law or regulation, of which a visitor is suspected and for which the authorities require the personal data collected by the controller, they will be provided to them after an explicit and reasoned request of those authorities, after which these personal data do not fall anymore under the protection of the provisions of this Privacy policy.</li> <li>If any information is necessary in order to obtain access to certain features of the website, the controller will indicate the mandatory nature of this information when requesting these data.</li> </ol> <h1 id=article-9---collected-data-and-commercial-offers>Article 9 - Collected data and commercial offers</h1> <ol> <li>You may receive commercial offers from the controller. If you do not wish to receive them (anymore), please send us an email to the following address: hello@demiann.dev.</li> <li>Your personal data will not be used by our partners for commercial purposes.</li> <li>If you encounter any personal data from other data subjects while visiting our website, you are to refrain from collection, any unauthorized use or any other act that constitutes an infringement of the privacy of the data subject(s) in question. The controller is not responsible in these circumstances.</li> </ol> <h1 id=article-10---data-retention>Article 10 - Data retention</h1> <p>The collected data are used and retained for the duration determined by law.</p> <h1 id=article-11---cookies>Article 11 - Cookies</h1> <h2 id=what-is-a-cookie>What is a cookie</h2> <p>A cookie is a small text file placed on the hard drive of your electronic device upon visiting our website. A cookie contains data so you can be recognized as a visitor when you are visiting our website. It enables us to adjust to your needs and it facilitates you to log in on our website. When you visit our website, we inform you about the use of cookies. By continuing to use our website you accept its use, unless we ask permission by other means. Your consent is valid for a period of thirteen months.</p> <h2 id=we-use-the-following-types-of-cookies-on-our-website>We use the following types of cookies on our website:</h2> <h3 id=cloudflare>Cloudflare</h3> <p>Stores cookies to log behavioral elements and analyze potential threats. For more information, see the <a href=https://www.cloudflare.com/privacypolicy/ >Cloudflare Privacy &amp; Security Policy</a></p> <h3 id=functional-cookies>Functional cookies</h3> <p>like session and login cookies to collect session and login information.</p> <p>When you visit our website, cookies from the controller and / or third parties may be installed on your equipment.</p> <h3 id=for-more-information>For more information</h3> <p>about using, managing and deleting cookies for each electronic device we invite you to consult the following <a href=https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/internet-telefoon-tv-en-post/cookies#faq>link</a></p> <h1 id=article-12---imagery-and-products-offered>Article 12 - Imagery and products offered</h1> <p>You cannot derive any rights from the imagery that accompanies any offered product on our website.</p> <h1 id=article-13---applicable-law>Article 13 - Applicable Law</h1> <p>These conditions are governed by Dutch law. The court in the district where the controller has its residency has the sole jurisdiction if any dispute regarding these conditions may arise, save when a legal exception applies.</p> <h1 id=article-14---contact>Article 14 - Contact</h1> <p>For questions, product information or information about the website itself, please contact: Demian, hello@demiann.dev.</p> <h1 id=artikel-15---attribution>Artikel 15 - Attribution</h1> <p>This privacy statement was created using a document from Rocket Lawyer (https://www.rocketlawyer.com/nl/nl).</p> <p>This privacy statement applies since July 8th 2021 until further notice.</p> ";e.exports=a},a9be:function(e,t){var a='<p>COOKIE STATEMENT</p> <h1 id=1-the-use-of-cookies>1. The use of cookies</h1> <p>demiann.dev uses cookies. A cookie is a small file that is sent along with pages from this website and / or Flash applications and stored by your browser on the hard drive of your computer, mobile phone, smartwatch or tablet. The information stored therein can be sent back to our servers on a subsequent visit.</p> <p>The use of cookies is of great importance for the smooth running of our website, but also cookies of which you do not immediately see the effect are very important. Thanks to the (anonymous) input from visitors, we can improve the use of the website and make it more user-friendly.</p> <h1 id=2-permission-for-the-use-of-cookies>2. Permission for the use of cookies</h1> <p>Your permission is required for the use of certain cookies. No permission is required for the cookies we use. We do this by means of a so-called cookie banner.</p> <h1 id=3-the-type-of-cookies-and-their-objectives>3. The type of cookies and their objectives</h1> <h2 id=we-use-the-following-types-of-cookies-on-our-website>We use the following types of cookies on our website:</h2> <h3 id=cloudflare>Cloudflare</h3> <p>Stores cookies to log behavioral elements and analyze potential threats. For more information, see the <a href=https://www.cloudflare.com/privacypolicy/ >Cloudflare Privacy &amp; Security Policy</a></p> <h3 id=functional-cookies>Functional cookies</h3> <p>like session and login cookies to collect session and login information.</p> <p>When you visit our website, cookies from the controller and / or third parties may be installed on your equipment.</p> <h1 id=4-your-rights-with-regard-to-your-data>4. Your rights with regard to your data</h1> <p>You have the right to inspect, rectify, limit and delete personal data. You also have the right to object to the processing of personal data and the right to data portability. You can exercise these rights by sending an e-mail to hello@demiann.dev. To prevent abuse, we may ask you to identify yourself adequately. When it comes to access to personal data linked to a cookie, we ask you to send a copy of the cookie in question. You can find this in the settings of your browser.</p> <h1 id=5-blocking-and-deleting-cookies>5. Blocking and deleting cookies</h1> <p>At any time you can easily block cookies yourself or delete them via your internet browser. You can also set your internet browser so that you receive a message when a cookie is placed. You can also indicate that certain cookies may not be placed. View the help function of your browser for this option. If you delete the cookies in your browser, this may have consequences for the pleasant use of this website. Some tracking cookies are placed by third parties which, among other things, show you advertisements via our website. You can delete these cookies centrally via youronlinechoices.com.</p> <p>Please note that if you don&#39;t want any cookies, we cannot guarantee that our website still works well. Some functions of the site may be lost or you may not be able to visit the website at all. In addition, refusing cookies does not mean that you will no longer see advertisements at all. The advertisements are then no longer tailored to your interests and can therefore be repeated more often.</p> <p>How you can adjust your settings differs per browser. Please refer to the help function of your browsing or click on one of the links below to go directly to the manual of your browser. · <a href=https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox>Firefox</a> · <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=en">Google Chrome</a> · <a href=https://support.microsoft.com/en-gb/kb/278835>Internet Explorer</a> · <a href=https://support.apple.com/en-en/HT201265>Safari on smart phone</a> · <a href=https://support.apple.com/en-gb/guide/safari/sfri11471/mac>Safari on Mac</a></p> <h1 id=6-new-developments-and-unforeseen-cookies>6. New developments and unforeseen cookies</h1> <p>The texts of our website can be adjusted at any time due to continuous developments. This also applies to our cookie statement. Therefore, please read this statement regularly to stay informed of any changes. In blog articles, use can be made of content that is hosted on other sites and made accessible by demiann.dev by means of certain codes (embedded content), as with YouTube videos for example. These codes often use cookies. However, we have no control over what these third parties do with their cookies.</p> <p>It is also possible that cookies are placed via our websites by others, of which we are not always aware. Do you encounter unforeseen cookies on our website that you cannot find in our overview? Please contact hello@demiann.dev. You can also contact the third party directly and ask which cookies they placed, what the reason is, what the lifespan of the cookie is and how they have guaranteed your privacy.</p> <h1 id=7-concluding-remarks>7. Concluding remarks</h1> <p>We will have to adjust these statements from time to time, for example when we adjust our website or change the rules regarding cookies. You can consult this webpage for the latest version.</p> <p>If you have any questions or comments, please contact hello@demiann.dev.</p> <p>This cookie statement was created using a document from Rocket Lawyer (https://www.rocketlawyer.com/nl/nl).</p> <h3 id=08-july-2021>08 July 2021</h3> ';e.exports=a},c098:function(e,t,a){"use strict";a("c4aa")},c4aa:function(e,t,a){}});
//# sourceMappingURL=app.fcd4353d.js.map