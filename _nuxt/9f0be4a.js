(window.webpackJsonp=window.webpackJsonp||[]).push([[22,49,50],{308:function(t,e,l){"use strict";l.r(e);var n=l(5),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,l){"use strict";l.r(e);var n=l(5),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,l){"use strict";l.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},section:{type:String,required:!0}}},r=l(5),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-between items-center"},[t.prev?l("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pl-0",attrs:{to:t.localePath({name:"section-slug",params:{slug:t.prev.slug,section:t.section}})}},[l("IconArrowLeft",{staticClass:"w-4 h-4 mr-1"}),t._v("\n    "+t._s(t.prev.title)+"\n  ")],1):l("span",[t._v(" ")]),t._v(" "),t.next?l("NuxtLink",{staticClass:"text-primary-base font-bold hover:underline flex items-center p-2 pr-0",attrs:{to:t.localePath({name:"section-slug",params:{slug:t.next.slug,section:t.section}})}},[t._v("\n    "+t._s(t.next.title)+"\n    "),l("IconArrowRight",{staticClass:"w-4 h-4 ml-1"})],1):l("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:l(308).default,IconArrowRight:l(309).default})}}]);