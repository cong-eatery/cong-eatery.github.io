(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10],{290:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("1930a9a0",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);var r={name:"LogoComponent",data:function(){return{hover:!1}}},o=(n(297),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cong-logo"},[n("img",{staticClass:"px-6",attrs:{src:t.hover?"/octofool.jpg":"/octodrunk.jpg"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}})])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";var r=n(291);n.d(e,"a",(function(){return r.l})),n.d(e,"b",(function(){return r.m})),n.d(e,"c",(function(){return r.o})),n.d(e,"d",(function(){return r.p})),n.d(e,"e",(function(){return r.r})),n.d(e,"f",(function(){return r.t}))},296:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("42bf1c40",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(290)},298:function(t,e,n){var r=n(109)(!1);r.push([t.i,".cong-logo{min-height:400px;height:100%}.cong-logo,.cong-logo img{max-height:400px}@-webkit-keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}",""]),t.exports=r},300:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(22),n(295)),l=n(293),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(o.c)(),t.prev=1,t.next=4,Object(o.d)(Object(o.e)(n,e));case 4:if(data=t.sent,!(r=data.items[0])){t.next=16;break}return t.prev=7,t.next=10,Object(o.b)(Object(o.e)(n,r.fullPath));case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(7);case 16:t.next=20;break;case 18:t.prev=18,t.t1=t.catch(1);case 20:return t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[1,18],[7,14]])})));return function(e){return t.apply(this,arguments)}}(),f={name:"NavigationComponent",components:{Logo:l.default},data:function(){return{lunchLink:"",dinnerLink:""}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/food");case 2:return t.lunchLink=e.sent,e.next=5,c("/drink");case 5:t.dinnerLink=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{openLink:function(base){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(base);case 2:(e=t.sent)&&window.open(e);case 4:case"end":return t.stop()}}),t)})))()}}},m=(n(303),n(52)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-2"},[n("div",{staticClass:"justify-center text-center overflow-hidden"},[n("a",{attrs:{href:"/"}},[n("h1",{staticClass:"text-8xl ms:text-9xl font-bold mb-7 uppercase title"},[t._v("\n                cong\n            ")]),t._v(" "),n("h2",{staticClass:"text-3xl ms:text-4xl mb-7 font-bold uppercase"},[t._v("\n                Vietnamese street food\n            ")]),t._v(" "),n("Logo",{staticClass:"flex justify-center items-center mb-5"})],1),t._v(" "),n("ul",{staticClass:"text-2xl"},[n("li",{staticClass:"inline-block underline mr-2 cursor-pointer"},[n("a",{attrs:{href:t.lunchLink,target:"_blank"}},[t._v("Lunch")])]),t._v(" "),n("li",{staticClass:"inline-block underline mr-2 cursor-pointer"},[n("a",{attrs:{href:t.dinnerLink}},[t._v("Dinner")])]),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"inline-block underline"},[n("a",{attrs:{href:"https://goo.gl/maps/khezqsjxGnsNzqx6A",target:"_blank"}},[t._v("Find us")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(293).default})},303:function(t,e,n){"use strict";n(296)},304:function(t,e,n){var r=n(109)(!1);r.push([t.i,'.title{font-family:"Matter SQ Bold"}@-webkit-keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}',""]),t.exports=r},309:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutComponent",components:{Navigation:n(300).default}},o=n(52),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex items-top justify-center min-h-screen border"},[n("div",{staticClass:"w-full flex flex-col"},[t._m(0),t._v(" "),n("Navigation",{staticClass:"my-10 flex-grow flex justify-center items-center"}),t._v(" "),n("content",{staticClass:"flex-grow flex justify-center items-center"},[n("div",{staticClass:"max-w-xl mb-10"},[t._t("default")],2)]),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex w-full flex-row-reverse border-b px-3 sm:px-3"},[n("ul",{staticClass:"flex my-2 gap-2 list-discs"},[n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"https://instagram.com/congstockholm/",target:"_blank"}},[t._v("insta")])]),t._v(" "),n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"https://www.facebook.com/congstockholm",target:"_blank"}},[t._v("fb")])]),t._v(" "),n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"https://www.tiktok.com/@congstockholm",target:"_blank"}},[t._v("tiktok")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"w-full md:flex md:justify-between uppercase border-t"},[n("ul",{staticClass:"py-7 md:py-2 text-l md:text-xl px-3 sm:pl-3"},[n("li",{staticClass:"mr-3"},[n("strong",[n("u",[t._v("OPENING HOURS")])])]),t._v(" "),n("li",{staticClass:"lg:inline-block mr-3"},[n("strong",[t._v("TUE-THU:")]),t._v(" 11:00-22:00\n                ")]),t._v(" "),n("li",{staticClass:"lg:inline-block mr-3"},[n("strong",[t._v("FRI:")]),t._v(" 11:00-23:00\n                ")]),t._v(" "),n("li",{staticClass:"lg:inline-block mr-3"},[n("strong",[t._v("SAT:")]),t._v(" 12:00-23:00\n                ")]),t._v(" "),n("li",{staticClass:"lg:inline-block mr-3"},[n("strong",[t._v("SUN-MON:")]),t._v(" CLOSED\n                ")])]),t._v(" "),n("ul",{staticClass:"py-7 md:py-2 uppercase text-l md:text-xl px-3 sm:pr-3 border-t md:border-none"},[n("li",{staticClass:"font-bold"},[n("a",{attrs:{href:"https://goo.gl/maps/EgkvLDNcH7Gb2SBdA",target:"_blank"}},[t._v("Stockholm, Kornhamnstorg 51, 111 27")])]),t._v(" "),n("li",[n("a",{attrs:{href:"mailto:hello@cong.se"}},[t._v("hello@cong.se")])]),t._v(" "),n("li",{staticClass:"font-bold"},[n("a",{attrs:{href:"tel:+468233210"}},[t._v("08-23 32 10")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(300).default})}}]);