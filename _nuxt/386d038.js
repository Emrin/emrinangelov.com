(window.webpackJsonp=window.webpackJsonp||[]).push([[18,44,45],{299:function(t,e,n){"use strict";n.r(e);var l=n(5),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);var l=n(5),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,n){"use strict";n.r(e);n(26),n(56);var l={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},section:{type:String,default:""}},computed:{prevBook:function(){if(this.prev){var t=this.prev.dir.split("/").slice(-1);return t[t.length-1]}},nextBook:function(){if(this.next){var t=this.next.dir.split("/");return t[t.length-1]}}}},r=n(5),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center"},[t.prev?n("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pl-0",attrs:{"data-cy":"prev",to:t.localePath({name:"docs-2.x-book-slug",params:{book:t.prevBook,slug:t.prev.slug}})}},[n("IconArrowLeft",{staticClass:"w-4 h-4 mr-1"}),t._v(" "),t.prev.menu?[t._v("\n      "+t._s(t.prev.menu)+"\n    ")]:[t._v("\n      "+t._s(t.prev.title)+"\n    ")]],2):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pr-0",attrs:{"data-cy":"next",to:t.localePath({name:"docs-2.x-book-slug",params:{book:t.nextBook,slug:t.next.slug}})}},[t.next.menu?[t._v("\n      "+t._s(t.next.menu)+"\n    ")]:[t._v("\n      "+t._s(t.next.title)+"\n    ")],t._v(" "),n("IconArrowRight",{staticClass:"w-4 h-4 ml-1"})],2):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(299).default,IconArrowRight:n(300).default})}}]);