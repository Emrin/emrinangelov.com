(window.webpackJsonp=window.webpackJsonp||[]).push([[67,29,30,57],{311:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("236b8461",content,!0,{sourceMap:!1})},313:function(t,e,n){n(6),n(4),n(7),n(10),n(11);var r=n(32),o=n(35),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-meteor fa-w-16",f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"meteor","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 512 512"},x)},w),m.concat([n("g",{staticClass:"fa-group"},[n("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M491.14.7C452.44 12.3 379.34 35 303.44 62c-2.1-7-4-13.5-5.6-18.6a16.06 16.06 0 0 0-20-10.69 16.6 16.6 0 0 0-2.86 1.19C232.54 56 122.14 116.5 60.54 176.4c-1.1 1-2.5 2-3.5 3C-19 255.5-19 378.87 57.09 455s199.48 76 275.55-.1c1-1 2-2.4 3-3.5C395.44 389.8 456 279.3 478.14 237a16.05 16.05 0 0 0-6.64-21.72 15.52 15.52 0 0 0-2.86-1.18c-5.2-1.6-11.6-3.5-18.6-5.6 27-76 49.7-149 61.3-187.7A16.17 16.17 0 0 0 491.14.7zM191.94 448a128 128 0 1 1 128-128 128 128 0 0 1-128 128z",opacity:".4"}}),n("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M191.94 192a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm-32 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"}})])]))}}},315:function(t,e,n){n(213)("Float32",4,(function(t){return function(data,e,n){return t(this,data,e,n)}}))},316:function(t,e,n){"use strict";n(311)},317:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"#webgl[data-v-6a62de86]{\n  outline:none;\n  width:320px;\n  height:320px;\n  opacity:0;\n  transition:opacity 1s ease\n}",""]),r.locals={},t.exports=r},318:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("d0e75b98",content,!0,{sourceMap:!1})},319:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("2fe675d6",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(25),n(315),{data:function(){return{ready:!1}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,m,f,h,v,y,x,w,C,_,O,S,k,j,P,z,M,D,E,animate,$;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $=function(){var time=.001*Date.now();d.rotation.y=.1*time,v.render(h,f)},animate=function(){for(var t=0,e=0,n=0,i=0;i<k;i++)m[i].numConnections=0;for(var r=0;r<k;r++){var o=m[r];if(_[3*r]+=o.velocity.x,_[3*r+1]+=o.velocity.y,_[3*r+2]+=o.velocity.z,(_[3*r+1]<-P||_[3*r+1]>P)&&(o.velocity.y=-o.velocity.y),(_[3*r]<-P||_[3*r]>P)&&(o.velocity.x=-o.velocity.x),(_[3*r+2]<-P||_[3*r+2]>P)&&(o.velocity.z=-o.velocity.z),!(z.limitConnections&&o.numConnections>=z.maxConnections))for(var c=r+1;c<k;c++){var l=m[c];if(!(z.limitConnections&&l.numConnections>=z.maxConnections)){var d=_[3*r]-_[3*c],f=_[3*r+1]-_[3*c+1],h=_[3*r+2]-_[3*c+2],v=Math.sqrt(d*d+f*f+h*h);if(v<z.minDistance){o.numConnections++,l.numConnections++;var w=1-v/z.minDistance;y[t++]=_[3*r],y[t++]=_[3*r+1],y[t++]=_[3*r+2],y[t++]=_[3*c],y[t++]=_[3*c+1],y[t++]=_[3*c+2],x[e++]=w,x[e++]=w,x[e++]=w,x[e++]=w,x[e++]=w,x[e++]=w,n++}}}}O.geometry.setDrawRange(0,2*n),O.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.color.needsUpdate=!0,C.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(animate),$()},E=function(){(f=new r.PerspectiveCamera(45,M.width/M.height,1,4e3)).position.z=1750;var t=new c(f,l);t.minDistance=1e3,t.maxDistance=3e3,h=new r.Scene,d=new r.Group,h.add(d);var e=new r.BoxHelper(new r.Mesh(new r.BoxGeometry(j,j,j)));e.material.color.setHex(D.edges),e.material.blending=r.AdditiveBlending,e.material.transparent=!0,d.add(e);var n=S*S;y=new Float32Array(3*n),x=new Float32Array(3*n);var o=new r.PointsMaterial({color:D.particles,blending:r.AdditiveBlending,transparent:!0,size:42});w=new r.BufferGeometry,_=new Float32Array(3*S);for(var i=0;i<S;i++){var P=Math.random()*j-j/2,z=Math.random()*j-j/2,E=Math.random()*j-j/2;_[3*i]=P,_[3*i+1]=z,_[3*i+2]=E,m.push({velocity:new r.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),numConnections:0})}w.setDrawRange(0,k),w.setAttribute("position",new r.BufferAttribute(_,3).setUsage(r.DynamicDrawUsage)),C=new r.Points(w,o),d.add(C);var $=new r.BufferGeometry;$.setAttribute("position",new r.BufferAttribute(y,3).setUsage(r.DynamicDrawUsage)),$.setAttribute("color",new r.BufferAttribute(x,3).setUsage(r.DynamicDrawUsage)),$.computeBoundingSphere(),$.setDrawRange(0,0);var A=new r.LineBasicMaterial({vertexColors:!0,color:D.lines,blending:r.AdditiveBlending,transparent:!0});O=new r.LineSegments($,A),d.add(O),(v=new r.WebGLRenderer({antialiasing:!0,container:l,alpha:!0})).setPixelRatio(window.devicePixelRatio),v.setSize(M.width,M.height),v.outputEncoding=r.sRGBEncoding,l.appendChild(v.domElement)},e.next=5,n.e(4).then(n.bind(null,405)).then((function(t){return t.default||t}));case 5:return r=e.sent,e.next=8,Promise.all([n.e(4),n.e(59)]).then(n.bind(null,412)).then((function(t){return t.default||t}));case 8:o=e.sent,c=o.OrbitControls,l=document.getElementById("webgl"),m=[],S=300,k=50,P=(j=777)/2,z={showDots:!0,showLines:!0,minDistance:150,limitConnections:!1,maxConnections:20,particleCount:50},M={width:320,height:320},D={edges:55807,particles:42751,lines:42751},"#00d9ff",E(),t.ready=!0,animate();case 23:case"end":return e.stop()}}),e)})))()}}),c=o,l=(n(316),n(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{opacity:t.ready?1:0},attrs:{id:"webgl"}})}),[],!1,null,"6a62de86",null);e.default=component.exports},327:function(t,e,n){n(6),n(4),n(7),n(10),n(11);var r=n(32),o=n(35),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["nui-svg nui-svg-gh",f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512"},x)},w),m.concat([n("path",{attrs:{fill:"currentColor",d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}})]))}}},328:function(t,e,n){"use strict";n(318)},329:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,".company .original[data-v-44193c06],.company .preview[data-v-44193c06]{\n  filter:grayscale(100%);\n  opacity:.5;\n  transition:all .25s ease\n}\n.company:hover .preview[data-v-44193c06]{\n  opacity:0\n}\n.company:hover .original[data-v-44193c06]{\n  filter:grayscale(0);\n  opacity:1\n}",""]),r.locals={},t.exports=r},330:function(t,e,n){n(6),n(4),n(7),n(10),n(11);var r=n(32),o=n(35),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-snowflake fa-w-14",f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"snowflake","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},x)},w),m.concat([n("g",{staticClass:"fa-group"},[n("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M138.08 441.66a15.87 15.87 0 0 0 .16 22.44l11.3 11.3a16.06 16.06 0 0 0 22.6 0l19.7-19.7.06-67.86-53.66 53.66zM91.37 83.9l-14.9 4a15.46 15.46 0 0 0-10.9 18.9l7 26 56.67 32.74-19-70.74a15.47 15.47 0 0 0-18.87-10.9zM65.45 405.3a15.46 15.46 0 0 0 10.9 18.9l14.9 4a15.47 15.47 0 0 0 18.89-10.9l19-70.73-56.69 32.73zm355-167.2a15.48 15.48 0 0 0 18.9-10.9l4-14.9a15.47 15.47 0 0 0-10.9-18.9l-26-7-56.7 32.73zM8.67 227.2a15.47 15.47 0 0 0 18.9 10.9l70.77-19-56.72-32.8-25.95 7a15.51 15.51 0 0 0-11 19zm18.87 46.7a15.47 15.47 0 0 0-18.9 10.9l-4 14.9a15.46 15.46 0 0 0 10.9 18.9l26 7 56.76-32.71zm122.2-237.2L138.34 48a1.21 1.21 0 0 0-.16.16 15.87 15.87 0 0 0 .16 22.44L192 124.3V56.4l-19.7-19.7a16.06 16.06 0 0 0-22.56 0zm293.7 263.1l-4-14.9a15.48 15.48 0 0 0-18.9-10.9l-70.67 19 56.69 32.73 26-7a15.47 15.47 0 0 0 10.88-18.93zm-60.9-193a15.47 15.47 0 0 0-10.9-18.9l-14.9-4a15.45 15.45 0 0 0-18.9 10.9l-19 70.74 56.69-32.74zm-7 272.4l-56.67-32.73 19 70.73a15.46 15.46 0 0 0 18.89 10.9l14.9-4a15.47 15.47 0 0 0 10.9-18.9zM256 387.7l-.16 67.94 19.66 19.66a16.06 16.06 0 0 0 22.6 0l11.3-11.3a16.07 16.07 0 0 0 0-22.6zm42.4-351a16.06 16.06 0 0 0-22.6 0L256 56.4v67.9l53.71-53.7a16.07 16.07 0 0 0 0-22.6z",opacity:".4"}}),n("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M446 366.05l-.09.15-15.47 26.8a15.42 15.42 0 0 1-21.06 5.72L256 310.2l-.2 185.8a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16l.1-185.7-153.25 88.5a15.51 15.51 0 0 1-21.1-5.7L2 366.3a15.51 15.51 0 0 1 5.7-21.1L162.16 256 7.87 166.8a15.43 15.43 0 0 1-5.73-21.06L17.67 119a15.41 15.41 0 0 1 21-5.72h.05L192 201.8V16a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v185.8l153.3-88.5a15.51 15.51 0 0 1 21.1 5.7l15.5 26.8a15.51 15.51 0 0 1-5.7 21.1L285.85 256l154.49 89.2a15.29 15.29 0 0 1 5.66 20.85z"}})])]))}}},331:function(t,e,n){n(6),n(4),n(7),n(10),n(11);var r=n(32),o=n(35),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-fire-alt fa-w-14",f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"fire-alt","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},x)},w),m.concat([n("g",{staticClass:"fa-group"},[n("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z",opacity:".4"}}),n("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z"}})])]))}}},332:function(t,e,n){"use strict";n(319)},333:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,".sponsor img{\n  filter:grayscale(100%);\n  opacity:.75;\n  transition:all .5s\n}\n.sponsor:hover img{\n  filter:grayscale(0);\n  opacity:1\n}\n#sponsor-img{\n  shape-outside:circle(49.5% at 90px 95px)\n}",""]),r.locals={},t.exports=r},353:function(t,e,n){"use strict";n.r(e);var r=n(313),o=n.n(r),c=n(327),l=n.n(c),d={components:{MeteorIcon:o.a,GithubIcon:l.a}},m=n(12),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-light-elevatedSurface\n    dark:bg-dark-elevatedSurface\n    shadow-nuxt\n    relative\n  "},[n("div",{staticClass:"container mx-auto px-4"},[n("div",{staticClass:"flex justify-between align-content-center py-16 sm:py-24"},[n("div",{staticClass:"w-full lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0"},[n("i18n",{staticClass:"\n            text-4xl\n            xl:text-5xl\n            text-light-onSurfacePrimary\n            dark:text-dark-onSurfacePrimary\n            font-medium\n            tracking-normal\n            leading-tight\n            mb-6\n          ",attrs:{path:"homepage.welcome.title",tag:"h1"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0},{key:"part1",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$t("homepage.welcome.title_part1")))])]},proxy:!0},{key:"part2",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$t("homepage.welcome.title_part2")))])]},proxy:!0},{key:"part3",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$t("homepage.welcome.title_part3")))])]},proxy:!0}])}),t._v(" "),n("i18n",{staticClass:"\n            xl:text-lg\n            text-light-onSurfaceSecondary\n            dark:text-dark-onSurfaceSecondary\n            font-medium\n            leading-relaxed\n            mb-6\n          ",attrs:{path:"homepage.welcome.description",tag:"h2"}}),t._v(" "),n("div",{staticClass:"flex flex-col sm:block py-4"},[n("AppButton",{staticClass:"sm:mr-4 py-3 px-6 text-base mb-4",attrs:{to:t.localePath("contact"),variant:"primary","data-cy":"get-started"}},[n("MeteorIcon",{staticClass:"h-5 -mb-1 mr-1",attrs:{slot:"icon"},slot:"icon"}),t._v("\n            "+t._s(t.$t("homepage.welcome.get_started"))+"\n          ")],1),t._v(" "),n("AppButton",{staticClass:"sm:mr-4 py-3 px-6 text-base",attrs:{to:t.localePath("cv"),variant:"secondary","data-cy":"github-stars"}},[n("GithubIcon",{staticClass:"inline-block h-6 -mt-1 mr-1",attrs:{slot:"icon"},slot:"icon"}),t._v("\n            "+t._s(t.$t("homepage.welcome.previous_work"))+"\n          ")],1)],1)],1),t._v(" "),n("figure",{staticClass:"hidden lg:block lg:w-1/2"},[n("div",{staticClass:"h-full flex justify-center items-center"},[n("ThreeHyperCube",{staticClass:"m-auto"})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:n(306).default,ThreeHyperCube:n(323).default})},354:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{expertise:[{name:"dev",set:[{name:"Vue",img:"vue.png",url:"https://vuejs.org/",class:"h-12"},{name:"React",img:"react.png",url:"https://reactjs.org/",class:"h-12"},{name:"NuxtJS",img:"nuxtjs.png",url:"",class:"h-12"},{name:"NextJS",img:"nextjs.png",url:"",class:"h-12"},{name:"JavaScript",img:"js.png",url:"",class:"h-12"},{name:"TypeScript",img:"typescript.png",url:"",class:"h-12"},{name:"Python",img:"python.png",url:"",class:"h-12"},{name:"HTML",img:"html5.png",url:"",class:"h-12"},{name:"CSS",img:"css3.png",url:"",class:"h-12"},{name:"WordPress",img:"wordpress.png",url:"",class:"h-12"},{name:"Stripe",img:"stripe.png",url:"https://stripe.com/",class:"h-16"},{name:"ElasticSearch",img:"es.png",url:"https://www.elastic.co/",class:"h-12"},{name:"NodeJS",img:"node.png",url:"https://nodejs.org/en/",class:"h-10"}]},{name:"ops",set:[{name:"Google Cloud Platform",img:"gcp.png",url:"https://cloud.google.com/",class:"h-16"},{name:"Amazon Web Services",img:"aws.png",url:"https://aws.amazon.com/",class:"h-12"},{name:"GitHub",img:"GitHub_Logo.png",url:"https://github.com/Emrin/",class:"h-12"},{name:"Kubernetes",img:"kubernetes.png",url:"https://kubernetes.io/",class:"h-12"},{name:"Docker",img:"docker.png",url:"https://www.docker.com/",class:"h-10"},{name:"Firebase",img:"firebase.png",url:"https://firebase.google.com/",class:"h-10"}]},{name:"lead",set:[]}]}}},o=(n(328),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt relative"},[n("div",{staticClass:"container mx-auto px-4 py-24"},[n("section",[n("i18n",{staticClass:"text-3xl font-medium text-center pb-8 mb-12",attrs:{path:"homepage.companies.title",tag:"h2"},scopedSlots:t._u([{key:"expertise",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[t._v("Expertise")])]},proxy:!0}])},[t._v("\n        "+t._s(t.$t("homepage.companies.title"))+"\n        ")]),t._v(" "),t._l(t.expertise,(function(e,i){return n("div",{key:i,staticClass:"pb-8 text-center"},[n("h2",{staticClass:"pb-8 font-medium transition-colors duration-300 ease-linear text text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[n("span",{staticClass:"pb-2 leading-10 sm:leading-3 border-b-2 border-nuxt-lightgreen"},[t._v("\n            "+t._s(t.$t("homepage.companies."+e.name))+"\n          ")])]),t._v(" "),t._l(e.set,(function(e,r){return n("a",{key:r,staticClass:"inline-block m-4 company relative",attrs:{href:e.url+"?ref=emrinangelov",target:"_blank",rel:"noopener nofollow",title:e.name}},[n("ClientOnly",[n("img",{staticClass:"original inline-block",class:[e.class,"dark"===t.$colorMode.value?"absolute top-0 left-0 opacity-0":""],attrs:{src:"/img/companies/original/"+e.img,alt:e.name,loading:"lazy"}}),t._v(" "),"dark"===t.$colorMode.value?n("img",{staticClass:"preview inline-block",class:e.class,attrs:{src:"/img/companies/preview/"+e.img,alt:e.name,loading:"lazy"}}):t._e()])],1)}))],2)})),t._v(" "),n("div",{staticClass:"text-center"},[n("i18n",{attrs:{path:"homepage.companies.contact",tag:"p"},scopedSlots:t._u([{key:"contact",fn:function(){return[n("NuxtLink",{staticClass:"border-b-2 border-nuxt-lightgreen",attrs:{to:t.localePath("contact")}},[t._v("\n              "+t._s(t.$t("homepage.companies.c"))+"\n            ")])]},proxy:!0}])})],1)],2)])])}),[],!1,null,"44193c06",null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var r=n(330),o=n.n(r),c=n(331),l=n.n(c),d={components:{SnowIcon:o.a,FireIcon:l.a}},m=n(12),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light-surface dark:bg-dark-surface"},[n("div",{staticClass:"container mx-auto px-4 pb-12"},[n("section",{staticClass:"rounded py-6 sm:p-6"},[n("i18n",{staticClass:"text-3xl text-center pt-10 font-medium",attrs:{path:"homepage.modes.title",tag:"h2"},scopedSlots:t._u([{key:"offer",fn:function(){return[n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$t("homepage.modes.offer")))])]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"lg:w-1/2 p-4 lg:p-8"},[n("FireIcon",{staticClass:"text-nuxt-green dark:text-nuxt-lightgreen mx-auto my-8 w-32"}),t._v(" "),n("h4",{staticClass:"text-center uppercase text-2xl pt-8 pb-4 font-medium"},[t._v("\n            "+t._s(t.$t("homepage.modes.craftsmanship.title"))+"\n          ")]),t._v(" "),n("i18n",{staticClass:"leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary",attrs:{path:"homepage.modes.craftsmanship.description",tag:"p"},scopedSlots:t._u([{key:"break",fn:function(){return[n("br"),t._v(" "),n("br")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"lg:w-1/2 p-4 lg:p-8"},[n("SnowIcon",{staticClass:"mx-auto my-8 w-32"}),t._v(" "),n("h4",{staticClass:"text-center uppercase text-2xl pt-8 pb-4 font-medium"},[t._v("\n            "+t._s(t.$t("homepage.modes.solidification.title"))+"\n          ")]),t._v(" "),n("i18n",{staticClass:"leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary",attrs:{path:"homepage.modes.solidification.description",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n.r(e);var r=n(313),o={components:{GithubIcon:n.n(r).a}},c=(n(332),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition-colors duration-300 ease-linear bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt"},[n("div",{staticClass:"container px-4 py-12 mx-auto text-centshadow-nuxter"},[n("section",{staticClass:"px-4"},[n("h1",{staticClass:"mb-2 text-3xl font-medium uppercase sm:mb-0"},[t._v("\n        "+t._s(t.$t("homepage.sponsors.title"))+"\n      ")]),t._v(" "),n("ClientOnly",[n("img",{staticClass:"inline-block float-right lg:ml-4 rounded-full w-full sm:w-1/2 md:1/3 lg:w-1/4",attrs:{src:"/icon.png",alt:"Emrin Angelov",loading:"lazy"}})]),t._v(" "),n("div",{staticClass:"pt-6 pb-12 leading-loose text-left transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},[n("i18n",{attrs:{path:"homepage.sponsors.description"},scopedSlots:t._u([{key:"break",fn:function(){return[n("br")]},proxy:!0},{key:"diploma",fn:function(){return[n("span",[n("a",{attrs:{href:"/diplome.pdf",download:""}},[t._v(t._s(t.$t("homepage.sponsors.diploma")))])])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"text-center"},[n("AppButton",{staticClass:"px-6 py-3 text-base",attrs:{to:t.localePath({name:"contact"}),"data-cy":"sponsors"}},[n("GithubIcon",{staticClass:"inline-block h-5 mr-1 -mt-1",attrs:{slot:"icon"},slot:"icon"}),t._v("\n          "+t._s(t.$t("homepage.sponsors.become_a_sponsor"))+"\n        ")],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:n(306).default})},419:function(t,e,n){"use strict";n.r(e);var r={head:function(){var title=this.$i18n.t("homepage.meta.title"),t=this.$i18n.t("homepage.meta.description");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t}]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HomeWelcome"),t._v(" "),n("HomeWhy"),t._v(" "),n("HomeExpertise"),t._v(" "),n("HomeModes"),t._v(" "),n("HomeSponsors")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeWelcome:n(353).default,HomeWhy:n(407).default,HomeExpertise:n(354).default,HomeModes:n(355).default,HomeSponsors:n(356).default})}}]);