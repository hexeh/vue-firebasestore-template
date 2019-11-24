(function(t){function e(e){for(var r,o,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("1356"),s=a.n(r);s.a},1356:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{app:"",flat:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push({name:"main"})}}},[a("span",[t._v("Auth")]),a("span",{staticClass:"font-weight-light"},[t._v("Firebase")])]),a("v-spacer"),t.$store.getters.isAuthorized?a("user-menu"):t._e()],1),a("v-content",[t.indicatorMain?a("v-layout",{attrs:{"fill-height":"",column:"","align-center":"","justify-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"blue accent-3",size:"32",width:"1"}})],1):t._e(),a("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.indicatorMain,expression:"!indicatorMain"}]})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-end":""}},[a("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-avatar",t._g({staticStyle:{cursor:"pointer"},attrs:{size:"36px"}},r),[a("img",{attrs:{src:t.$store.getters.avatar}})])]}}])},[a("v-layout",{attrs:{column:""}},[a("v-card",{attrs:{tile:"",flat:""}},[a("v-card-text",{staticClass:"px-3 py-2"},[a("v-layout",{attrs:{"d-flex":"",row:"","align-center":"","align-content-center":"","justify-center":"","px-2":""}},[a("v-avatar",{attrs:{size:"36px"}},[a("img",{attrs:{src:t.$store.getters.avatar}})]),a("v-flex",{staticClass:"caption black--text",attrs:{"ml-2":""}},[a("div",[t._v(t._s(t.$store.state.user.displayName))]),a("div",{staticClass:"font-weight-light"},[t._v(t._s(t.$store.state.user.email))])])],1)],1)],1),a("v-divider"),a("v-card",{attrs:{tile:"",flat:""}},[a("v-card-text",{staticClass:"px-3 py-2"},[a("v-btn",{attrs:{block:"",text:""},on:{click:function(e){t.dialogs.provider=!0}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-account-card-details-outline")]),t._v("\n\t\t\t\t\t\t\tAuth Providers\n\t\t\t\t\t\t")],1),a("v-btn",{attrs:{block:"",color:"error",text:""},on:{click:function(e){return t.$store.dispatch("signOut")}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-location-exit")]),t._v("\n\t\t\t\t\t\t\tExit\n\t\t\t\t\t\t")],1)],1)],1)],1)],1),a("providers",{attrs:{initialState:t.dialogs.provider}})],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticStyle:{flex:"0 0 auto !important"}},[a("v-dialog",{attrs:{origin:"top center"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[a("v-card",{staticClass:"pt-0 mt-0",attrs:{flat:"",dense:""}},[a("v-card-title",{staticClass:"font-weight-light display-1"},[t._v("User auth providers")]),a("v-card-text",{staticClass:"pb-0"},[a("extend")],1),a("v-card-actions",{staticClass:"pa-0 pb-1"},[a("v-btn",{attrs:{block:"",text:""},on:{click:function(e){t.visibility=!1}}},[t._v("Close")])],1)],1)],1)],1)},c=[],d={data:()=>({rules:{required:t=>!!t||"This field is required",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Wrong e-mail."},safe:t=>{const e=/^[a-zA-Z0-9_]*$/;return e.test(t)||"Wrong format"},password:t=>{const e=/^(?=.*[a-zA-Z])(?=.{6,})/;return e.test(t)||"Password must be 6 characters or more and include lowercase and uppercase characters"}}})},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("span",[t._v("You have "+t._s(t.authProviders.length)+" connected auth providers")]),r("v-list",{attrs:{"two-line":""}},[t._l(t.supportedProviders,(function(e){return[r("v-list-item",{key:e.key},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))]),Object.keys(t.dictProviders).includes(e.key)?r("v-list-item-subtitle",[t._v("\n\t\t\t\t\t\tConnected as "+t._s(t.dictProviders[e.key].email)+"\n\t\t\t\t\t")]):t._e()],1),Object.keys(t.dictProviders).includes(e.key)?[r("v-list-item-action",[r("v-btn",{attrs:{disabled:t.authProviders.length<2,loading:t.indicator,text:"",color:"error"},on:{click:function(a){return t.$store.dispatch("unlinkProvider",e.key)}}},[t._v("Disconnect")])],1),r("v-list-item-avatar",[r("v-img",{attrs:{src:t.dictProviders[e.key].photoURL||a("b71e")}})],1)]:["password"==e.key?r("v-text-field",{staticStyle:{"max-width":"350px"},attrs:{dense:"",label:"Password",hint:"Please create a strong password",autocomplete:"password",rules:[t.rules.required,t.rules.password],"append-icon":t.showPassword?"mdi-eye-off":"mdi-eye",type:t.showPassword?"text":"password","validate-on-blur":""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}):t._e(),r("v-list-item-action",[r("v-btn",{attrs:{text:"",loading:t.indicator,color:"success"},on:{click:function(a){t.user.password&&t.user.password.length?t.$store.dispatch(e.action,t.user.password):t.$store.dispatch(e.action)}}},[t._v("Connect")])],1)]],2),r("v-divider",{attrs:{inset:""}})]}))],2),r("login",{attrs:{initialState:t.showLogin,callback:t.connectPasswordProvider}})],1)},p=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticStyle:{flex:"0 0 auto !important"}},[a("v-dialog",{attrs:{origin:"top center",width:"320px"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[a("signin")],1)],1)},v=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"my-1",staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{"min-width":"320px","max-width":"400px",flat:""}},[a("v-card-title",{staticClass:"font-weight-light display-1"},[t._v("Sign in here")]),a("v-card-text",{staticClass:"mt-5 pb-0"},[a("v-form",{staticClass:"my-2",model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-text-field",{attrs:{outlined:"",label:"Email",hint:"Please enter a valid email address",autocomplete:"username",rules:[t.rules.required,t.rules.email],"validate-on-blur":""},on:{blur:function(e){return t.$store.commit("flushErrors")}},model:{value:t.user.login,callback:function(e){t.$set(t.user,"login",e)},expression:"user.login"}}),a("v-text-field",{attrs:{outlined:"",label:"Password",hint:"Please provide a password",autocomplete:"password",rules:[t.rules.required,t.rules.password],"append-icon":t.showPassword?"mdi-eye-off":"mdi-eye",type:t.showPassword?"text":"password",error:t.$store.state.errors.login&&t.$store.state.errors.login.code&&t.$store.state.errors.login.code.length>0,"error-messages":t.loginErrors,"validate-on-blur":""},on:{blur:function(e){return t.$store.commit("flushErrors")},"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),a("v-card-actions",{staticClass:"px-4 pb-4 pt-0"},[a("v-btn",{staticClass:"white--text",attrs:{large:"","min-width":"60%",depressed:"",color:"blue lighten-1"},on:{click:function(e){return t.$store.dispatch("authByPassword",t.user)}}},[t._v("Continue")]),a("v-spacer"),a("v-btn",{attrs:{large:"",icon:""},on:{click:function(e){return t.$store.dispatch("authByGithub")}}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-github-circle")])],1),a("v-btn",{staticClass:"ml-0",attrs:{large:"",icon:""},on:{click:function(e){return t.$store.dispatch("authByGoogle")}}},[a("v-icon",{attrs:{color:"#4D87EC"}},[t._v("mdi-google")])],1)],1)],1)},g=[],y=a("2f62"),f={name:"Signin",mixins:[d],data:()=>({formValid:!1,showPassword:!1,user:{}}),computed:{...Object(y["b"])(["loginErrors"])}},b=f,w=a("2877"),x=a("6544"),k=a.n(x),V=a("8336"),C=a("b0af"),_=a("99d9"),P=a("4bd4"),$=a("132d"),S=a("2fa4"),I=a("8654"),j=Object(w["a"])(b,m,g,!1,null,null,null),D=j.exports;k()(j,{VBtn:V["a"],VCard:C["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VForm:P["a"],VIcon:$["a"],VSpacer:S["a"],VTextField:I["a"]});var E={name:"Login",props:["initialState","callback"],mixins:[d],components:{Signin:D},data(){return{visibility:this.initialState,indicator:!1}},watch:{initialState(t){this.visibility=t},visibility(t){this.$root.$emit("signinDialogVisiblityChanged",t)},indicatorMain(t,e){!t&&e&&null===this.loginErrors&&(this.callback&&this.callback(),this.visibility=!1)}},computed:{...Object(y["b"])(["indicatorMain","loginErrors"])},methods:{}},L=E,T=a("169a"),O=a("a722"),A=Object(w["a"])(L,h,v,!1,null,null,null),B=A.exports;k()(A,{VDialog:T["a"],VLayout:O["a"]});var G={name:"Extend",components:{Login:B},data:()=>({user:{},showPassword:!1,showLogin:!1,supportedProviders:[{key:"google.com",title:"Google Account",icon:"mdi-google",action:"linkGoogleCredentials"},{key:"github.com",title:"Github Account",icon:"mdi-github-circle",action:"linkGithubCredentials"},{key:"password",title:"Email / Password",icon:"mdi-at",action:"linkPasswordCredentials"}]}),mixins:[d],watch:{updateErrors(t){t&&"auth/requires-recent-login"==t.code&&(this.showLogin=!0)}},computed:{indicator(){return this.$store.state.linkIndicator},dictProviders(){let t={};for(let e of this.authProviders)t[e.providerId]=e;return t},...Object(y["b"])(["authProviders","updateErrors"])},methods:{connectPasswordProvider(){this.$store.dispatch("linkPasswordCredentials",this.user.password)}},mounted(){this.$root.$on("signinDialogVisiblityChanged",t=>{this.showLogin=t})}},U=G,M=a("ce7e"),q=a("adda"),R=a("8860"),z=a("da13"),W=a("1800"),F=a("8270"),N=a("5d23"),Z=Object(w["a"])(U,u,p,!1,null,null,null),Y=Z.exports;k()(Z,{VBtn:V["a"],VDivider:M["a"],VIcon:$["a"],VImg:q["a"],VLayout:O["a"],VList:R["a"],VListItem:z["a"],VListItemAction:W["a"],VListItemAvatar:F["a"],VListItemContent:N["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VTextField:I["a"]});var J={name:"Providers",props:["initialState"],mixins:[d],components:{Extend:Y},data(){return{visibility:this.initialState,indicator:!1}},watch:{initialState(t){this.visibility=t},visibility(t){this.$root.$emit("providersDialogVisiblityChanged",t)}},methods:{}},H=J,K=Object(w["a"])(H,l,c,!1,null,null,null),Q=K.exports;k()(K,{VBtn:V["a"],VCard:C["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:T["a"],VLayout:O["a"]});var X={name:"UserMenu",components:{Providers:Q},data:()=>({dialogs:{provider:!1}}),mounted(){this.$root.$on("providersDialogVisiblityChanged",t=>{this.dialogs.provider=t})}},tt=X,et=a("8212"),at=a("0e8f"),rt=a("e449"),st=Object(w["a"])(tt,o,n,!1,null,null,null),it=st.exports;k()(st,{VAvatar:et["a"],VBtn:V["a"],VCard:C["a"],VCardText:_["b"],VDivider:M["a"],VFlex:at["a"],VIcon:$["a"],VLayout:O["a"],VMenu:rt["a"]});var ot={components:{UserMenu:it},name:"App",data:()=>({}),computed:{...Object(y["b"])(["indicatorMain"])},mounted(){this.$store.dispatch("setObservations")}},nt=ot,lt=(a("034f"),a("7496")),ct=a("40dc"),dt=a("a75b"),ut=a("490a"),pt=a("2a7f"),ht=Object(w["a"])(nt,s,i,!1,null,null,null),vt=ht.exports;k()(ht,{VApp:lt["a"],VAppBar:ct["a"],VContent:dt["a"],VLayout:O["a"],VProgressCircular:ut["a"],VSpacer:S["a"],VToolbarTitle:pt["a"]});var mt=a("8c4f"),gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.getters.isAuthorized?a("v-layout",{attrs:{column:"","fill-height":"","align-center":"","justify-start":"","ma-2":""}},[a("user-data")],1):a("v-layout",{attrs:{column:"","fill-height":"","align-center":"","justify-center":"","ma-2":""}},[a("v-row",[a("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[a("v-card",{staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{flat:"","min-width":"320px"}},[a("v-card-title",{staticClass:"font-weight-light display-2"},[t._v("Hello there!")]),a("v-card-text",[a("v-layout",{staticClass:"black--text body-1",attrs:{column:""}},[a("span",[t._v("To inspect app features please sign in/up.")])])],1),a("v-card-actions",{staticClass:"mx-2"},[a("v-btn",{staticClass:"white--text my-2",attrs:{large:"",block:"",depressed:"",color:"blue lighten-1",to:"auth"}},[t._v("Continue")])],1)],1)],1)],1)],1)},yt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?4:12}},[a("v-card",{staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)","word-break":"inherit"},attrs:{flat:""}},[a("v-card-title",{staticClass:"font-weight-light display-2"},[t._v("Welcome back, "),a("b",[t._v(t._s(t.userGreeting))]),t._v("!")]),a("v-card-text",[t.dataLoading?a("v-layout",{staticClass:"mx-0 my-1",attrs:{column:""}},[a("v-skeleton-loader",{attrs:{type:"heading",tile:""}})],1):a("v-layout",{staticClass:"mx-0 title font-weight-regular",attrs:{column:""}},[void 0===t.userData||0==Object.keys(t.userData).length?a("span",[t._v("You don't have any stored data")]):a("span",[t._v("You have stored data")])])],1)],1)],1),a("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?4:12}},[a("v-tooltip",{attrs:{bottom:"","allow-overflow":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-card",t._g({staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)",height:"100%"},attrs:{flat:"",disabled:t.userData&&Object.keys(t.userData).length>=10,"min-height":"64px"},on:{click:t.setTestData}},r),[a("v-layout",{staticClass:"black--text",attrs:{"fill-height":"",row:"","align-center":"","justify-center":""}},[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("mdi-shape-square-plus")]),a("span",{staticClass:"font-weight-light display-2"},[t._v("Add Data")])],1)],1)]}}])},[a("span",[t._v("You can store up to 10 properties")])])],1)],1),t.dataLoading?a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-card",{staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{flat:""}},[a("v-card-text",[a("v-skeleton-loader",{attrs:{type:"chip",tile:""}})],1)],1)],1)],1):t._l(t.userData,(function(e,r,s){return a("v-row",{key:s,attrs:{justify:"center"}},[a("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?4:12}},[a("v-card",{staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{flat:""}},[a("v-card-text",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(r))]),a("v-list-item-subtitle",[t._v(t._s(e))])],1),a("v-list-item-action",[a("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.dropProperty(r)}}},[t._v("Drop")])],1)],1)],1)],1)],1)],1)}))],2)},bt=[],wt={name:"Data",data:()=>({}),methods:{setTestData(){let t=new Date,e={["test"+t.getTime()]:String(t)};this.$store.dispatch("updateStoredData",e)},dropProperty(t){let e=this.$store.state.stored;delete e[t],this.$store.dispatch("setStoredData",e)}},computed:{dataLoading(){return this.$store.state.storeIndicator},userData(){return this.$store.state.stored},userGreeting(){const t=this.$store.state.user.displayName;return t&&t.split(" ")[0]||t||"User"},...Object(y["b"])(["authProviders"])},mounted(){this.$dataLayer.addEvent("dataRequest",{})}},xt=wt,kt=a("62ad"),Vt=a("a523"),Ct=a("0fd9"),_t=a("3129"),Pt=a("3a2f"),$t=Object(w["a"])(xt,ft,bt,!1,null,null,null),St=$t.exports;k()($t,{VBtn:V["a"],VCard:C["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:kt["a"],VContainer:Vt["a"],VIcon:$["a"],VLayout:O["a"],VListItem:z["a"],VListItemAction:W["a"],VListItemContent:N["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VRow:Ct["a"],VSkeletonLoader:_t["a"],VTooltip:Pt["a"]});var It={name:"Main",components:{"user-data":St},data:()=>({}),methods:{setTestData(){let t=new Date,e={["test"+t.getTime()]:String(t)};this.$store.dispatch("updateStoredData",e)},dropProperty(t){let e=this.$store.state.stored;delete e[t],this.$store.dispatch("setStoredData",e)}},computed:{...Object(y["b"])(["authProviders"])}},jt=It,Dt=Object(w["a"])(jt,gt,yt,!1,null,null,null),Et=Dt.exports;k()(Dt,{VBtn:V["a"],VCard:C["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:kt["a"],VLayout:O["a"],VRow:Ct["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"fill-height":"",column:"","align-center":"","justify-center":""}},[a("v-scale-transition",{directives:[{name:"show",rawName:"v-show",value:!t.create,expression:"!create"}],key:"0",attrs:{mode:"in-out","leave-absolute":""}},[t.create?t._e():[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("signin"),a("span",{staticClass:"caption"},[t._v("Don't have an account? "),a("v-btn",{attrs:{"x-small":"",text:""},on:{click:function(e){t.create=!0}}},[t._v("Create it now")])],1)],1)]],2),a("v-scale-transition",{directives:[{name:"show",rawName:"v-show",value:t.create,expression:"create"}],key:"0",attrs:{mode:"in-out","leave-absolute":""}},[t.create?[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("signup"),a("span",{staticClass:"caption"},[t._v("Already registered? "),a("v-btn",{attrs:{"x-small":"",text:""},on:{click:function(e){t.create=!1}}},[t._v("Sign in now")])],1)],1)]:t._e()],2)],1)},Tt=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"my-1",staticStyle:{"box-shadow":"0 0 60px 10px rgba(200,200,200,0.5)"},attrs:{"min-width":"320px","max-width":"400px",flat:""}},[a("v-card-title",{staticClass:"font-weight-light display-1"},[t._v("Sign up here")]),a("v-card-text",{staticClass:"mt-5 pb-0"},[a("v-form",{staticClass:"my-2",model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-text-field",{attrs:{outlined:"",label:"Email",hint:"Please enter a valid email address",autocomplete:"username",rules:[t.rules.required,t.rules.email],"validate-on-blur":""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{outlined:"",label:"Name",hint:"Please specify your name",rules:[t.rules.required,t.rules.safe]},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("v-text-field",{attrs:{outlined:"",label:"Lastname",hint:"Please specify your lastname",rules:[t.rules.safe]},model:{value:t.user.lastname,callback:function(e){t.$set(t.user,"lastname",e)},expression:"user.lastname"}}),a("v-text-field",{attrs:{outlined:"",label:"Password",hint:"Please create a strong password",autocomplete:"password",rules:[t.rules.required,t.rules.password],"append-icon":t.showPassword?"mdi-eye-off":"mdi-eye",type:t.showPassword?"text":"password","validate-on-blur":""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),a("v-card-actions",{staticClass:"px-4 pb-4 pt-0"},[a("v-btn",{staticClass:"white--text",attrs:{large:"","min-width":"60%",depressed:"",color:"blue lighten-1"},on:{click:function(e){return t.$store.dispatch("createUserByPassword",t.user)}}},[t._v("Create User")]),a("v-spacer"),a("v-btn",{attrs:{large:"",icon:""},on:{click:function(e){return t.$store.dispatch("authByGithub")}}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-github-circle")])],1),a("v-btn",{staticClass:"ml-0",attrs:{large:"",icon:""},on:{click:function(e){return t.$store.dispatch("authByGoogle")}}},[a("v-icon",{attrs:{color:"#4D87EC"}},[t._v("mdi-google")])],1)],1)],1)},At=[],Bt={name:"Signup",mixins:[d],data:()=>({formValid:!1,showPassword:!1,user:{}})},Gt=Bt,Ut=Object(w["a"])(Gt,Ot,At,!1,null,null,null),Mt=Ut.exports;k()(Ut,{VBtn:V["a"],VCard:C["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VForm:P["a"],VIcon:$["a"],VSpacer:S["a"],VTextField:I["a"]});var qt={name:"Auth",components:{Signin:D,Signup:Mt},data:()=>({create:!1})},Rt=qt,zt=a("0789"),Wt=Object(w["a"])(Rt,Lt,Tt,!1,null,null,null),Ft=Wt.exports;k()(Wt,{VBtn:V["a"],VLayout:O["a"],VScaleTransition:zt["c"]}),r["a"].use(mt["a"]);var Nt=new mt["a"]({mode:"history",base:"",routes:[{path:"/",name:"main",component:Et,meta:{authClaims:!1}},{path:"/auth",name:"auth",component:Ft,meta:{authClaims:!1}}]}),Zt=(a("0e44"),a("59ca")),Yt=(a("ea7b"),a("e71f"),{signOut:t=>{Zt["auth"]().signOut().then(()=>{t.commit("authChanged",{})}),"auth"!=Nt.currentRoute.name&&Nt.push({name:"auth"})},authByPassword:async(t,e)=>{t.state.authIndicator=!0;await Zt["auth"]().signInWithEmailAndPassword(e.login,e.password).catch(e=>{t.commit("applyErrors",{...e,type:"login"})})},authByGoogle:async t=>{t.state.authIndicator=!0;let e=new Zt["auth"].GoogleAuthProvider;e.setCustomParameters({prompt:"consent"});await Zt["auth"]().signInWithPopup(e).catch(e=>{t.commit("applyErrors",{...e,type:"login"})})},authByGithub:async t=>{t.state.authIndicator=!0;let e=new Zt["auth"].GithubAuthProvider;await Zt["auth"]().signInWithPopup(e).catch(e=>{t.commit("applyErrors",{...e,type:"login"})})},createUserByPassword:(t,e)=>{t.state.authIndicator=!0,Zt["auth"]().createUserWithEmailAndPassword(e.login,e.password).then(a=>{t.getters.user.updateProfile({displayName:e.name+" "+e.lastname}).then(a=>{t.dispatch("authByPassword",e)},t=>{console.error(t)})},e=>{t.commit("applyErrors",{...e,type:"create"})})}}),Jt={linkPasswordCredentials:async(t,e)=>{t.state.linkIndicator=!0;let a=Zt["auth"].EmailAuthProvider.credential(t.state.user.email,e);await Zt["auth"]().currentUser.linkWithCredential(a).then(e=>{t.commit("setProviders",e.user.providerData),t.state.linkIndicator=!1}).catch(e=>{t.state.linkIndicator=!1,t.commit("applyErrors",{...e,type:"update"})})},linkGoogleCredentials:async t=>{t.state.linkIndicator=!0;let e=new Zt["auth"].GoogleAuthProvider;await Zt["auth"]().currentUser.linkWithPopup(e).then(e=>{t.commit("setProviders",e.user.providerData),t.state.linkIndicator=!1}).catch(e=>{t.state.linkIndicator=!1,t.commit("applyErrors",{...e,type:"update"})})},linkGithubCredentials:async t=>{t.state.linkIndicator=!0;let e=new Zt["auth"].GithubAuthProvider;await Zt["auth"]().currentUser.linkWithPopup(e).then(e=>{t.state.linkIndicator=!1,t.commit("setProviders",e.user.providerData)}).catch(e=>{t.state.linkIndicator=!1,t.commit("applyErrors",{...e,type:"update"})})},unlinkProvider:async(t,e)=>{t.state.linkIndicator=!0;await Zt["auth"]().currentUser.unlink(e).then(()=>{let e=t.state.user.providerData;e.filter(t=>{t.providerId}),t.commit("setProviders",e),t.state.linkIndicator=!1}).catch(e=>{t.state.linkIndicator=!1,t.commit("applyErrors",{...e,type:"unlink"})})}},Ht={getStoredData:async t=>{t.state.storeIndicator=!0;const e=await Zt["firestore"]().collection("users").doc(t.state.user.uid).get();t.commit("updateStoredData",e.data()),t.state.storeIndicator=!1},setStoredData:async(t,e)=>{const a=await Zt["firestore"]().collection("users").doc(t.state.user.uid);a.set(e),t.dispatch("getStoredData")},updateStoredData:async(t,e)=>{const a=await Zt["firestore"]().collection("users").doc(t.state.user.uid);a.update(e),t.dispatch("getStoredData")}},Kt={...Yt,...Jt,...Ht,setObservations:t=>{const e={apiKey:"AIzaSyBZopJrjm-I8SqzL15vZc4_ByUBPLaxhBo",authDomain:"test-gcloud-app-h.firebaseapp.com",databaseURL:"https://test-gcloud-app-h.firebaseio.com",projectId:"test-gcloud-app-h",storageBucket:"test-gcloud-app-h.appspot.com",messagingSenderId:"259460111098",appId:"1:259460111098:web:c7e20ece59b18218d44743",measurementId:"G-1FTRVS974G"};Zt["apps"].length||(Zt["initializeApp"](e),Zt["auth"]().onIdTokenChanged(e=>{console.log("auth state changed:",e),e&&e.getIdTokenResult?e.getIdTokenResult().then(a=>{t.commit("authChanged",{user:e,idToken:a}),t.commit("setProviders",e.providerData),t.dispatch("getStoredData"),Nt.currentRoute.query.redirect?Nt.push(Nt.currentRoute.query.redirect):"auth"==Nt.currentRoute.name&&Nt.push("/")}).catch(e=>{t.commit("applyErrors",{...e,type:"token"})}):(t.commit("authChanged",{user:null,idToken:null}),Nt.currentRoute.meta.authClaims&&Nt.push({name:"auth",query:{redirect:Nt.currentRoute.query.redirect||"/"}}))}))},reloadUser:async t=>{await t.state.user.reload(),console.log("reload complete")}},Qt={authChanged:(t,e)=>{t.user=e.user,t.idToken=e.idToken,t.authIndicator=!1},applyErrors:(t,e)=>{t.errors[e.type]=e,t.authIndicator=!1},setProviders:(t,e)=>{t.providers=e},updateStoredData:(t,e)=>{t.stored=e},flushErrors:t=>{t.errors={login:null,update:null,unlink:null,create:null}}},Xt=(a("000b"),{avatar:t=>{return t.user&&t.user.photoURL||a("b71e")},isAuthorized:t=>{return t.user&&t.user.refreshToken&&t.user.refreshToken.length>0},authProviders:t=>{return t.providers},loginErrors:t=>{return t.errors.login&&t.errors.login.message},updateErrors:t=>{return t.errors.update},createErrors:t=>{return t.errors.create&&t.errors.create.message},indicatorMain:t=>{return t.authIndicator}});r["a"].use(y["a"]);var te=new y["a"].Store({state:{user:{},providers:[],idToken:{},stored:{},preferences:{},authIndicator:!0,storeIndicator:!1,linkIndicator:!1,errors:{login:null,update:null,unlink:null,create:null}},getters:Xt,actions:Kt,mutations:Qt}),ee=a("f309");r["a"].use(ee["a"]);var ae=new ee["a"]({icons:{iconfont:"mdi"}}),re={name:"DataLayerHandler",data:()=>({lastMessage:{}}),computed:{dataLayer(){return window.dataLayer||[]}},created(){window.hasOwnProperty("dataLayer")||(window.dataLayer=window.dataLayer||[])},watch:{lastMessage:{handler:function(t,e){if(t&&Object.keys(t).length&&t!==e){let e=window.dataLayer||[];e.push(t)}},deep:!0}},methods:{pushObject(t){this.lastMessage=t},addEvent(t,e){this.lastMessage={event:t,...e}}}};r["a"].config.productionTip=!1,r["a"].prototype.$errorsBus=new r["a"],r["a"].prototype.$dataLayer=new r["a"](re),new r["a"]({router:Nt,store:te,vuetify:ae,render:t=>t(vt)}).$mount("#app")},b71e:function(t,e,a){t.exports=a.p+"img/account-circle.8001576d.svg"}});
//# sourceMappingURL=app.0d7c9786.js.map