(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{294:function(e,n,t){"use strict";n.a={data:function(){return{isIntersecting:!1}},mounted:function(){var e=this;if(!window.IntersectionObserver)return console.warn("IntersectionObserver polyfill is required.");this.__observer=new window.IntersectionObserver((function(n){n.forEach((function(n){var t=n.intersectionRatio;n.target;t>0&&(e.isIntersecting=!0,e.__observer.disconnect())}))})),this.__observer.observe(this.$el)},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}}},299:function(e,n,t){var content=t(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(44).default)("49cef9a3",content,!0,{sourceMap:!1})},320:function(e,n,t){"use strict";t(299)},321:function(e,n,t){var r=t(43)((function(i){return i[1]}));r.push([e.i,".nui-media[data-v-a5288a7c]{\n  padding-bottom:56.25%\n}\n.nui-media embed[data-v-a5288a7c],.nui-media iframe[data-v-a5288a7c],.nui-media object[data-v-a5288a7c]{\n  height:100%;\n  left:0;\n  position:absolute;\n  top:0;\n  width:100%\n}\n.nui-media span[data-v-a5288a7c]{\n  color:#fff;\n  font-size:30px;\n  left:50%;\n  line-height:40px;\n  position:absolute;\n  text-align:center;\n  top:50%;\n  transform:translate(-50%,-50%)\n}",""]),r.locals={},e.exports=r},355:function(e,n,t){"use strict";t.r(n);var r={mixins:[t(294).a],props:{src:{type:String,required:!0}}},o=(t(320),t(5)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nui-media h-0 w-full overflow-hidden relative m-0 rounded bg-dark-surface"},[e.isIntersecting&&e.src?t("iframe",{attrs:{src:e.src,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",title:"Responsive video"}}):t("span",[e._v("Loading video...")])])}),[],!1,null,"a5288a7c",null);n.default=component.exports}}]);