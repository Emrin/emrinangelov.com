(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{470:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(25),r(15),{data:function(){return{email:"",subscribedEmail:"",pending:!1,subscribed:!1,error:null}},methods:{subscribe:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.email.trim()){t.next=2;break}return t.abrupt("return");case 2:if(e.error=null,e.pending=!0,!e.pending){t.next=9;break}return e.subscribedEmail=e.email,e.subscribed=!0,e.pending=!1,t.abrupt("return");case 9:return t.prev=9,t.next=12,new Promise((function(e){return setTimeout(e,400)}));case 12:return t.next=14,e.$http.$post("".concat("https://api.emrinangelov.com","/newsletter"),{email:e.email});case 14:e.subscribedEmail=e.email,e.subscribed=!0,e.pending=!1,t.next=31;break;case 19:if(t.prev=19,t.t0=t.catch(9),e.pending=!1,!t.t0.response){t.next=30;break}return t.next=25,t.t0.response.json();case 25:if(r=t.sent,"member-exists"!==r.code){t.next=30;break}return e.error="You are already registered.",t.abrupt("return");case 30:e.error="Unknown error";case 31:case"end":return t.stop()}}),t,null,[[9,19]])})))()}}}),l=r(12),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppContainer",{staticClass:"px-4"},[r("section",{staticClass:"px-3 py-8 -mx-4 text-center rounded-t-lg lg:mx-0",attrs:{id:"subscribe-to-newsletter"}},[r("i18n",{staticClass:"mb-2 text-3xl font-medium transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary",attrs:{path:"homepage.newsletter.title",tag:"h2"},scopedSlots:e._u([{key:"fun",fn:function(){return[r("span",{staticClass:"text-nuxt-lightgreen"},[e._v(e._s(e.$t("homepage.newsletter.title2")))])]},proxy:!0}])}),e._v(" "),r("p",{staticClass:"mb-6 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},[e._v("\n      "+e._s(e.$t("homepage.newsletter.description"))+"\n    ")]),e._v(" "),r("form",{staticClass:"flex flex-row justify-center mb-2",attrs:{"data-cy":"newsletter"},on:{submit:function(t){return t.preventDefault(),e.subscribe.apply(null,arguments)}}},[r("div",[r("label",{staticClass:"hidden",attrs:{for:"news-email"}},[e._v("\n            "+e._s(e.$t("homepage.newsletter.form.email"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-48 px-4 py-3 font-medium border border-r-0 rounded rounded-r-none outline-none md:w-64 bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base",attrs:{id:"news-email",type:"email",required:"",placeholder:e.$t("homepage.newsletter.form.email"),"aria-label":"Newsletter"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("input",{staticClass:"inline-block px-4 py-2 text-sm text-base font-medium text-white uppercase rounded rounded-l-none shadow cursor-pointer bg-primary-base hover:bg-primary-light hover:shadow-md",class:[e.pending?"bg-nuxt-green":""],attrs:{type:"submit",name:"subscribe"},domProps:{value:e.pending?e.$t("homepage.newsletter.form.subscribing"):e.$t("homepage.newsletter.form.subscribe")}})]),e._v(" "),e.subscribed?r("p",{staticClass:"py-1 text-nuxt-green"},[e._v("\n        "+e._s(e.$t("homepage.newsletter.form.subscribed_messages.pre"))+"\n        "+e._s(e.subscribedEmail)+"\n        "+e._s(e.$t("homepage.newsletter.form.subscribed_messages.post"))+"\n      ")]):e._e(),e._v(" "),e.error?r("p",{staticClass:"py-1 text-red-600"},[e._v("\n        "+e._s(e.error)+"\n      ")]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppContainer:r(213).default})}}]);