(function(t){function e(e){for(var r,i,n=e[0],l=e[1],c=e[2],d=0,u=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var v=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("Snackbar"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"z-index":"10"}},[a("v-toolbar",{staticStyle:{cursor:"pointer",background:"transparent","z-index":"10"},attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"headline",staticStyle:{"margin-left":"7.5vh"},on:{click:function(e){return t.redirect("/")}}},[t._v("Demiann")]),a("v-spacer"),a("v-toolbar-items",{staticStyle:{"margin-right":"7.5vh","z-index":"10"}},[a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticStyle:{"z-index":"10"},attrs:{text:"",rounded:""}},[t._v("Home")]),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#footer",expression:"'#footer'"}],staticStyle:{"z-index":"10"},attrs:{text:"",rounded:""}},[t._v("Contact")])],1)],1)],1)},n=[],l={name:"Navbar",methods:{redirect:function(t){this.$router.push(t).catch((function(){}))}}},c=l,v=a("2877"),d=a("6544"),u=a.n(d),m=a("8336"),f=a("2fa4"),h=a("71d9"),b=a("2a7f"),p=Object(v["a"])(c,i,n,!1,null,null,null),y=p.exports;u()(p,{VBtn:m["a"],VSpacer:f["a"],VToolbar:h["a"],VToolbarItems:b["a"],VToolbarTitle:b["b"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-snackbar",{attrs:{color:t.type,right:"right",timeout:t.timeout,top:"top",vertical:"vertical"===t.mode},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(" "+t._s(t.text)+" "),a("v-btn",{attrs:{color:"",text:""},on:{click:t.toggleSnackBar}},[t._v("Close")])],1)],1)],1)},x=[],_={name:"snackbar",data:function(){return{mode:"",color:"success",timeout:3e3}},computed:{show:{get:function(){return this.$store.getters.snackbarActive},set:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}},text:{get:function(){return this.$store.getters.snackbarText}},type:{get:function(){return this.$store.getters.snackbarType}}},methods:{toggleSnackBar:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}}},k=_,S=a("b0af"),w=a("2db4"),C=Object(v["a"])(k,g,x,!1,null,null,null),V=C.exports;u()(C,{VBtn:m["a"],VCard:S["a"],VSnackbar:w["a"]});var T={name:"App",components:{Navbar:y,Snackbar:V},data:function(){return{}}},M=T,B=(a("034f"),a("7496")),O=Object(v["a"])(M,o,s,!1,null,null,null),W=O.exports;u()(O,{VApp:B["a"]});var j=a("bc3a"),D=a.n(j),$=a("5c51"),P=a("f13c"),z=a.n(P),J=a("58ca"),N=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("Portfolio"),a("Contact"),a("Footer")],1)},I=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("particles-bg",{staticStyle:{"z-index":"1","max-height":"90vh"},attrs:{type:"cobweb",bg:!0,num:"100",color:t.white}}),a("v-container",{attrs:{"my-5":""}},[t.$vuetify.breakpoint.sm?a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card",{staticClass:"ml-5",staticStyle:{"z-index":"6","margin-top":"27.5vh","margin-bottom":"15vh",background:"transparent","font-size":"2em","line-height":"1.5em"},attrs:{flat:""}},[t._v(" I'm a "),a("b",[t._v("Web Developer")]),a("br"),t._v("Based in "),a("b",[t._v("The Netherlands")])])],1)],1):a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"ml-5",staticStyle:{"z-index":"6","margin-top":"27.5vh","margin-bottom":"15vh",background:"transparent","font-size":"2em","line-height":"1.5em"},attrs:{flat:""}},[t._v(" I'm a "),a("b",[t._v("Web Developer")]),a("br"),t._v("Based in "),a("b",[t._v("The Netherlands")])])],1)],1)],1)],1)},R=[],H={name:"Header",data:function(){return{white:null}}},F=H,A=a("62ad"),Y=a("a523"),Q=a("0fd9"),L=Object(v["a"])(F,q,R,!1,null,null,null),G=L.exports;u()(L,{VCard:S["a"],VCol:A["a"],VContainer:Y["a"],VRow:Q["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",staticStyle:{"margin-top":"17.5vh"}},[a("v-container",{staticClass:"my-5 fill-height"},[a("v-fade-transition",{attrs:{mode:"out-in",appear:""}},[t.$vuetify.breakpoint.mdAndDown?a("v-row",{staticStyle:{"margin-top":"-5vh"}},[a("v-col",{staticClass:"mx-auto",staticStyle:{"z-index":"6","margin-bottom":"10vh"},attrs:{id:"portfolio",cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/ReviewsByMe.WebP",alt:"Image of Reviews By Me"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://reviewsbyme.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,1662009896)}),a("v-card-title",[t._v("Reviews by Me")]),a("v-card-text",[t._v("Reviews By Me is a Blog Application "),a("br"),t._v("Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/ShadowBot.WebP",alt:"Image of template one"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://shadow.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,3356387839)}),a("v-card-title",[t._v("Shadow bot")]),a("v-card-text",[t._v("Website for the Shadow Discord bot "),a("br"),t._v(" Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/TemplateOne.WebP",alt:"Image of template one"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://template-one.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,766829387)}),a("v-card-title",[t._v("Template One")]),a("v-card-text",[t._v("Is Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,3909153689)}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,3909153689)}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"10"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}],null,!1,3909153689)}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1)],1):t._e(),a("v-row",{staticStyle:{"margin-top":"-17.5vh"}},[a("v-col",{staticClass:"mx-auto",staticStyle:{"z-index":"6","margin-bottom":"10vh"},attrs:{id:"portfolio",cols:"8"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/ReviewsByMe.WebP",alt:"Image of Reviews By Me"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://reviewsbyme.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Reviews by Me")]),a("v-card-text",[t._v("Reviews By Me is a Blog Application "),a("br"),t._v("Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-5",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"7"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/ShadowBot.WebP",alt:"Image of template one"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://shadow.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Shadow bot")]),a("v-card-text",[t._v("Website for the Shadow Discord bot "),a("br"),t._v(" Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"4"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/TemplateOne.WebP",alt:"Image of template one"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://template-one.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Template One")]),a("v-card-text",[t._v("Is Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"8"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"5"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"6"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1)],1)],1)],1)],1)},K=[],X={name:"Portfolio",data:function(){return{}}},Z=X,tt=a("99d9"),et=a("0789"),at=a("ce87"),rt=a("adda"),ot=a("a797"),st=Object(v["a"])(Z,U,K,!1,null,null,null),it=st.exports;u()(st,{VBtn:m["a"],VCard:S["a"],VCardText:tt["b"],VCardTitle:tt["c"],VCol:A["a"],VContainer:Y["a"],VFadeTransition:et["b"],VHover:at["a"],VImg:rt["a"],VOverlay:ot["a"],VRow:Q["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[t.$vuetify.breakpoint.mdAndDown?a("v-container",[a("v-row",[t.contacted?a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",text:""}},[a("v-card",{staticStyle:{background:"transparent","margin-top":"25vh","margin-bottom":"25vh"},attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"mx-auto headline"},[a("h2",{staticClass:"mx-auto"},[t._v("Thanks for Contacting me.")])]),a("v-card-text",{staticClass:"text-center"},[t._v("I'll get back to you as soon as I can.")])],1)],1):a("v-col",{staticClass:"mx-auto",attrs:{cols:"12"}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[t._v("Contact")])]),t.show?a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"What's your name?",hint:"Your first name",rules:[function(){return!!t.from||"This field is required"}],required:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("v-text-field",{ref:"email",attrs:{rules:[function(){return!!t.email||"This field is required"}],label:"How do I contact you?",hint:"Your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{label:"Tell me about your project",counter:"",maxlength:"500","single-line":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),a("v-subheader",{staticStyle:{"margin-left":"-1.5vh"}},[t._v("What's your deadline like?")]),a("v-slider",{attrs:{"tick-labels":t.smallTicks,max:4,step:"1",ticks:"always","tick-size":"4"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1):t._e(),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.resetForm}},[t._v("Reset form")]),a("v-spacer"),t.from&&t.email&&t.body?a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.submit}},[t._v("Send")]):a("v-btn",{attrs:{color:"primary",disabled:"",text:""},on:{click:t.submit}},[t._v("Send")])],1)],1)],1)],1)],1):a("v-container",[a("v-row",[t.contacted?a("v-col",{staticClass:"mx-auto",attrs:{cols:"12",text:""}},[a("v-card",{staticStyle:{background:"transparent","margin-top":"25vh","margin-bottom":"25vh"},attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"mx-auto headline"},[a("h2",{staticClass:"mx-auto"},[t._v("Thanks for Contacting me.")])]),a("v-card-text",{staticClass:"text-center"},[t._v("I'll get back to you as soon as I can.")])],1)],1):a("v-col",{staticClass:"mx-auto",attrs:{cols:"6"}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[t._v("Contact")])]),t.show?a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"What's your name?",hint:"Your first name",rules:[function(){return!!t.from||"This field is required"}],required:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("v-text-field",{ref:"email",attrs:{rules:[function(){return!!t.email||"This field is required"}],label:"How do I contact you?",hint:"Your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{label:"Tell me about your project",counter:"",maxlength:"500","single-line":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),a("v-subheader",{staticStyle:{"margin-left":"-1.5vh"}},[t._v("What's your deadline like?")]),a("v-slider",{attrs:{"tick-labels":t.timeTicks,max:4,step:"1",ticks:"always","tick-size":"4"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1):t._e(),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.resetForm}},[t._v("Reset form")]),a("v-spacer"),t.from&&t.email&&t.body?a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.submit}},[t._v("Send")]):a("v-btn",{attrs:{color:"primary",disabled:"",text:""},on:{click:t.submit}},[t._v("Send")])],1)],1)],1)],1)],1)],1)},lt=[],ct={name:"Contact",components:{},data:function(){return{show:!0,timeTicks:["7 Days","1 Month","3 Months","6 Months","1 Year"],smallTicks:["7D","1M","3M","6M","1Y"],contacted:!1,white:null,time:0,from:"",email:"",subject:"",body:""}},methods:{toggle:function(){this.show=!this.show,this.about=!this.about},resetForm:function(){var t=this;this.from="",this.email="",this.subject="",this.body="",this.time="7d",this.show=!1,this.$nextTick((function(){t.show=!0}))},submit:function(){var t=this,e={from:this.from,email:this.email,time:this.timeTicks[this.time],body:this.body};this.$http({url:"/contact",data:e,method:"POST"}).then((function(){t.resetForm();var e={type:"green",text:"Message has been send!"};t.$store.dispatch("toggleSnackBar",e),t.show=!1,t.contacted=!0})).catch((function(){var e={type:"red",text:"Please check all fields and try again."};t.$store.dispatch("toggleSnackBar",e)}))}}},vt=ct,dt=a("ce7e"),ut=a("ba0d"),mt=a("e0c7"),ft=a("8654"),ht=a("a844"),bt=Object(v["a"])(vt,nt,lt,!1,null,null,null),pt=bt.exports;u()(bt,{VBtn:m["a"],VCard:S["a"],VCardActions:tt["a"],VCardText:tt["b"],VCardTitle:tt["c"],VCol:A["a"],VContainer:Y["a"],VDivider:dt["a"],VRow:Q["a"],VSlider:ut["a"],VSpacer:f["a"],VSubheader:mt["a"],VTextField:ft["a"],VTextarea:ht["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",attrs:{id:"footer"}},[a("v-footer",{staticClass:"mt-3",attrs:{color:"transparent",padless:""}},[a("v-row",{staticClass:"mt-4",attrs:{justify:"center","no-gutters":""}},[a("v-btn",{staticClass:"my-2 mr-1",attrs:{color:"white",text:"",rounded:"",rel:"noreferrer",target:"_blank",href:"https://github.com/qgisk"}},[t._v("Github")]),a("v-hover",{attrs:{"close-delay":"175","open-delay":"175"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[a("v-expand-transition",[r?a("div",{staticClass:"d-flex darken-2 white--text",staticStyle:{height:"100%"}},[t._v(" Demian#6666 ")]):a("div",[t._v("Discord")])])],1)]}}])}),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Instagram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Telegram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Linkedin")]),a("v-col",{staticClass:"lighten-2 my-3 py-4 text-center white--text",attrs:{cols:"12"}},[a("strong",[t._v(" Demiann © "+t._s((new Date).getFullYear())+" ")])])],1)],1)],1)},gt=[],xt={name:"Footer"},_t=xt,kt=a("553a"),St=Object(v["a"])(_t,yt,gt,!1,null,null,null),wt=St.exports;u()(St,{VBtn:m["a"],VCol:A["a"],VExpandTransition:et["a"],VFooter:kt["a"],VHover:at["a"],VRow:Q["a"]});var Ct={name:"home",data:function(){return{}},components:{Header:G,Portfolio:it,Contact:pt,Footer:wt}},Vt=Ct,Tt=Object(v["a"])(Vt,E,I,!1,null,null,null),Mt=Tt.exports;r["a"].use(N["a"]);var Bt=[{path:"/",name:"home",component:Mt}],Ot=new N["a"]({routes:Bt}),Wt=Ot,jt=a("f309");r["a"].use(jt["a"]);var Dt=new jt["a"]({theme:{dark:!0}});a("d5e8"),a("5363");r["a"].config.productionTip=!1,r["a"].use($["a"]),r["a"].use(J["a"],{refreshOnceOnNavigation:!0}),r["a"].use(z.a,{container:"body",duration:750,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),r["a"].prototype.$http=D.a,r["a"].prototype.$http.defaults.baseURL="https://demiann.xyz/api/",r["a"].prototype.$http.defaults.headers.common["Content-Type"]="application/json",new r["a"]({router:Wt,vuetify:Dt,render:function(t){return t(W)}}).$mount("#app")},"8a23":function(t,e,a){}});
//# sourceMappingURL=app.b2cc3303.js.map