(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{364:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(15),n(25),{data:function(){return{email:"",subject:"",message:"",pending:!1,sent:!1,error:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0),e.error="ReCaptcha Error. Refresh the page and try again.";case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},beforeDestroy:function(){this.$recaptcha.destroy()},methods:{send_form:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.message.trim()){t.next=2;break}return t.abrupt("return");case 2:return e.error=null,e.pending=!0,t.prev=4,t.next=7,e.$recaptcha.execute("submit");case 7:return n=t.sent,t.next=10,new Promise((function(e){return setTimeout(e,400)}));case 10:return t.next=12,e.$http.$post("https://h9s5036w93.execute-api.eu-central-1.amazonaws.com/default/fun1",{email:e.email,subject:e.subject,message:e.message,token:n});case 12:e.sent=!0,e.pending=!1,t.next=20;break;case 16:t.prev=16,t.t0=t.catch(4),e.pending=!1,e.error="Error. Refresh the page and try again.";case 20:case"end":return t.stop()}}),t,null,[[4,16]])})))()}}}),c=n(12),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-light-surface dark:bg-dark-surface"},[n("div",{staticClass:"container mx-auto px-4 pb-12"},[n("section",{staticClass:"px-3 py-8 -mx-4 text-center rounded-t-lg lg:mx-0",attrs:{id:"contact-form"}},[n("i18n",{staticClass:"\n          mb-2\n          text-3xl\n          font-medium\n          transition-colors\n          duration-300\n          ease-linear\n          text-light-onSurfacePrimary\n          dark:text-dark-onSurfacePrimary\n        ",attrs:{path:"contact.message",tag:"h2"},scopedSlots:e._u([{key:"message",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[e._v(e._s(e.$t("contact.a2")))])]},proxy:!0},{key:"break",fn:function(){return[n("br")]},proxy:!0}])}),e._v(" "),n("i18n",{staticClass:"\n          mb-6\n          transition-colors\n          duration-300\n          ease-linear\n          text-light-onSurfaceSecondary\n          dark:text-dark-onSurfaceSecondary\n        ",attrs:{path:"contact.anon",tag:"p"},scopedSlots:e._u([{key:"break",fn:function(){return[n("br")]},proxy:!0}])}),e._v(" "),e.sent?e._e():n("form",{staticClass:"justify-center",attrs:{"data-cy":"contact"},on:{submit:function(t){return t.preventDefault(),e.send_form.apply(null,arguments)}}},[n("div",{staticClass:"p-3"},[n("label",{staticClass:"hidden",attrs:{for:"contact-email"}},[e._v(e._s(e.$t("contact.form.email")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"\n              w-full\n              md:w-2/3\n              lg:w-1/2\n              px-4\n              py-3\n              font-medium\n              border\n              rounded\n              outline-none\n              bg-light-elevatedSurface\n              text-light-onSurfacePrimary\n              focus:border-primary-base\n            ",attrs:{id:"contact-email",type:"email",placeholder:e.$t("contact.form.email"),"aria-label":"Contact email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"p-3 hidden"},[n("label",{staticClass:"hidden",attrs:{for:"contact-subject"}},[e._v(e._s(e.$t("contact.form.subject")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],staticClass:"\n              w-full\n              md:w-2/3\n              lg:w-1/2\n              px-4\n              py-3\n              font-medium\n              border\n              rounded\n              outline-none\n              bg-light-elevatedSurface\n              text-light-onSurfacePrimary\n              focus:border-primary-base\n            ",attrs:{id:"contact-subject",type:"text",placeholder:e.$t("contact.form.subject"),"aria-label":"Contact email"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"p-3"},[n("label",{staticClass:"hidden",attrs:{for:"contact-message"}},[e._v(e._s(e.$t("contact.form.message")))]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"\n              w-full\n              md:w-2/3\n              lg:w-1/2\n              h-48\n              px-4\n              py-3\n              font-medium\n              border\n              rounded\n              outline-none\n              bg-light-elevatedSurface\n              text-light-onSurfacePrimary\n              focus:border-primary-base\n            ",attrs:{id:"contact-message",type:"text",required:"",placeholder:e.$t("contact.form.message"),"aria-label":"Contact message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("input",{staticClass:"\n            inline-block\n            px-4\n            py-2\n            text-sm text-base\n            font-medium\n            text-white\n            uppercase\n            rounded\n            shadow\n            cursor-pointer\n            bg-primary-base\n            hover:bg-primary-light hover:shadow-md\n          ",class:[e.pending?"bg-nuxt-green":""],attrs:{type:"submit",name:"send-message"},domProps:{value:e.pending?e.$t("contact.form.sending"):e.$t("contact.form.send")}})]),e._v(" "),e.sent?n("p",{staticClass:"\n          text-3xl\n          font-medium\n          transition-colors\n          duration-300\n          ease-linear\n          text-nuxt-lightgreen\n        "},[e._v("\n        "+e._s(e.$t("contact.form.sent"))+"\n      ")]):e._e(),e._v(" "),e.error?n("p",{staticClass:"py-1 text-red-600"},[e._v("\n        "+e._s(e.error)+"\n      ")]):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);