(window.webpackJsonp=window.webpackJsonp||[]).push([[28,13],{280:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("29d38398",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";r(280)},285:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,".lazy-loaded[data-v-a4c51004]{\n  opacity:1\n}",""]),n.locals={},t.exports=n},287:function(t,e,r){"use strict";r.r(e);r(6),r(3),r(7),r(10),r(11);var n=r(9),o=(r(56),r(70));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{src:{type:String,default:null},alt:{type:String,default:null},ratio:{type:String,default:null},sizes:{type:String,default:null}},data:function(){return{show:!1,loaded:!1}},computed:c(c({},Object(o.b)({host:function(t){return t.host},isDev:function(t){return t.isDev},isTest:function(t){return t.isTest},isProd:function(t){return t.isProd}})),{},{intristicRatio:function(){if(this.ratio){var t=this.ratio.split(":");return t[1]/t[0]}return 0},intristicRatioStyle:function(){return{"padding-bottom":"".concat(100*this.intristicRatio,"%")}}}),methods:{lazyLoadImage:function(t,e){var r=this;t&&(this.show=!0,this.$nextTick((function(){var t=r.$refs.img;t.addEventListener("load",(function(){t.classList.add("lazy-loaded"),r.loaded=!0})),t.addEventListener("error",(function(){t.classList.add("lazy-load-error")}))})))}}},f=(r(284),r(5)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.lazyLoadImage,throttle:250,once:!0},expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true\n  }"}],staticClass:"relative overflow-hidden light:bg-light-surface dark:bg-dark-surface",style:[t.intristicRatioStyle]},[r("div"),t._v(" "),[t.show?r("img",{ref:"img",staticClass:"\n        object-cover\n        w-full\n        h-full\n        transition-opacity\n        duration-500\n        opacity-0\n      ",class:[t.ratio&&"absolute top-0 left-0"],attrs:{src:"/"+t.src,alt:t.alt}}):t._e()]],2)}),[],!1,null,"a4c51004",null);e.default=component.exports},333:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object,required:!0}},methods:{formatDateByLocale:function(t){var e=this.$i18n.locale||"en";return new Date(t).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear",attrs:{to:t.localePath({name:"blog-slug",params:{slug:t.post.slug}})}},[r("div",{staticClass:"w-full lg:w-2/3 flex flex-col justify-between pr-4"},[r("div",{staticClass:"mb-2"},[r("h2",{staticClass:"mb-4 inline-block leading-tight light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-2xl md:text-3xl transition-colors duration-300 ease-linear"},[t._v("\n          "+t._s(t.post.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"mb-4"},[r("p",{staticClass:"truncate-multiline-3 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])]),t._v(" "),r("div",{staticClass:"flex flex-row flex-wrap justify-start mb-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},t._l(t.post.tags,(function(e,n){return r("span",{key:n,staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row text-sm"},[r("div",{staticClass:"mb-4 lg:mb-0 flex items-center"},t._l(t.post.authors,(function(e,n){return r("span",{key:n,staticClass:"flex items-center mr-4"},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full mr-2",attrs:{src:e.avatarUrl,alt:""}}),t._v(" "),r("span",{staticClass:"leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"},[t._v("\n              "+t._s(e.name)+"\n            ")])])})),0),t._v(" "),r("div",{staticClass:"flex w-full lg:w-auto items-center justify-between leading-none"},[r("span",{staticClass:"hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n            •\n          ")]),t._v(" "),r("span",{staticClass:"light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.formatDateByLocale(t.post.date))+"\n          ")]),t._v(" "),r("span",{staticClass:"hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n            •\n          ")]),t._v(" "),r("span",{staticClass:"light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[t._v("\n             "+t._s(t.post.readingTime.text)+"\n          ")])])])]),t._v(" "),r("div",{staticClass:"w-full lg:w-1/3 mb-6 lg:mb-0 rounded overflow-hidden"},[r("AppImage",{attrs:{src:t.post.imgUrl,ratio:"16:9"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppImage:r(287).default})}}]);