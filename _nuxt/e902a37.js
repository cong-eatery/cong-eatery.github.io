(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{290:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("1930a9a0",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);var r={name:"LogoComponent",data:function(){return{hover:!1}}},o=(n(297),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cong-logo"},[n("img",{staticClass:"px-6",attrs:{src:t.hover?"/octofool.jpg":"/octodrunk.jpg"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}})])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";var r=n(291);n.d(e,"a",(function(){return r.l})),n.d(e,"b",(function(){return r.m})),n.d(e,"c",(function(){return r.o})),n.d(e,"d",(function(){return r.p})),n.d(e,"e",(function(){return r.r})),n.d(e,"f",(function(){return r.t}))},296:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("42bf1c40",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(290)},298:function(t,e,n){var r=n(109)(!1);r.push([t.i,".cong-logo{min-height:400px;height:100%}.cong-logo,.cong-logo img{max-height:400px}@-webkit-keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}",""]),t.exports=r},300:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(22),n(295)),c=n(293),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(o.c)(),t.prev=1,t.next=4,Object(o.d)(Object(o.e)(n,e));case 4:if(data=t.sent,!(r=data.items[0])){t.next=16;break}return t.prev=7,t.next=10,Object(o.b)(Object(o.e)(n,r.fullPath));case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(7);case 16:t.next=20;break;case 18:t.prev=18,t.t1=t.catch(1);case 20:return t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[1,18],[7,14]])})));return function(e){return t.apply(this,arguments)}}(),f={name:"NavigationComponent",components:{Logo:c.default},data:function(){return{foodLink:"",drinkLink:""}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/food");case 2:return t.foodLink=e.sent,e.next=5,l("/drink");case 5:t.drinkLink=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{openLink:function(base){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(base);case 2:(e=t.sent)&&window.open(e);case 4:case"end":return t.stop()}}),t)})))()}}},d=(n(303),n(52)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-2"},[n("div",{staticClass:"justify-center text-center overflow-hidden"},[n("a",{attrs:{href:"/"}},[n("h1",{staticClass:"text-8xl ms:text-9xl font-bold mb-7 uppercase title"},[t._v("\n                cong\n            ")]),t._v(" "),n("h2",{staticClass:"text-3xl ms:text-4xl mb-7 font-bold uppercase"},[t._v("\n                Vietnamese street food\n            ")]),t._v(" "),n("Logo",{staticClass:"flex justify-center items-center mb-5"})],1),t._v(" "),n("ul",{staticClass:"text-2xl"},[n("li",{staticClass:"inline-block underline mr-2 cursor-pointer"},[n("a",{attrs:{href:t.foodLink,target:"_blank"}},[t._v("Menu")])]),t._v(" "),n("li",{staticClass:"inline-block underline mr-2 cursor-pointer"},[n("a",{attrs:{href:t.drinkLink}},[t._v("Drink")])]),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"inline-block underline"},[n("a",{attrs:{href:"https://goo.gl/maps/khezqsjxGnsNzqx6A",target:"_blank"}},[t._v("Find us")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(293).default})},303:function(t,e,n){"use strict";n(296)},304:function(t,e,n){var r=n(109)(!1);r.push([t.i,'.title{font-family:"Matter SQ Bold"}@-webkit-keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}',""]),t.exports=r}}]);