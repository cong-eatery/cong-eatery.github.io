(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{284:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("1930a9a0",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n.r(e);var l={name:"Logo",data:function(){return{hover:!1}}},o=(n(287),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cong-logo"},[n("img",{staticClass:"px-6",attrs:{src:t.hover?"/octopot.jpg":"/octofool.jpg"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}})])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("42bf1c40",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(284)},288:function(t,e,n){var l=n(107)(!1);l.push([t.i,".cong-logo img{overflow:hidden;max-height:400px;height:100%;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:none}}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:none}}",""]),t.exports=l},289:function(t,e,n){"use strict";n.r(e);var l={name:"Navigation",components:[n(285).default]},o=(n(290),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-2 gap-28"},[n("div",{staticClass:"font-mono justify-center text-center"},[n("h1",{staticClass:"text-8xl ms:text-9xl font-sans font-bold mb-7 uppercase title"},[t._v("\n            cong\n        ")]),t._v(" "),n("Logo",{staticClass:"flex justify-center items-center mb-5"}),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"text-2xl"},[n("li",{staticClass:"inline-block underline mr-2"},[n("a",{attrs:{href:"#"}},[t._v("Food")])]),t._v(" "),n("li",{staticClass:"inline-block underline mr-2"},[n("a",{attrs:{href:"#"}},[t._v("Drink")])]),t._v(" "),n("li",{staticClass:"inline-block underline"},[n("a",{attrs:{href:"https://goo.gl/maps/EgkvLDNcH7Gb2SBdA",target:"_blank"}},[t._v("Find us")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(285).default})},290:function(t,e,n){"use strict";n(286)},291:function(t,e,n){var l=n(107)(!1);l.push([t.i,".title{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:fadeInLeft;animation-name:fadeInRight}@-webkit-keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}",""]),t.exports=l},292:function(t,e,n){"use strict";n.r(e);var l={name:"Start",components:[n(289).default]},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex items-top justify-center min-h-screen border"},[n("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",rel:"stylesheet"}}),t._v(" "),n("div",{staticClass:"w-full relative flex flex-col"},[t._m(0),t._v(" "),n("content",{staticClass:"flex-grow flex justify-center items-center"},[n("Navigation")],1),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex sticky top-0 w-full flex-row-reverse border-b px-3 sm:px-3"},[n("ul",{staticClass:"flex my-2 gap-2 list-discs"},[n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"https://instagram.com/congstockholm/",target:"_blank"}},[t._v("insta")])]),t._v(" "),n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"#FACEBOOK"}},[t._v("fb")])]),t._v(" "),n("li",{staticClass:"flex-1"},[n("a",{attrs:{href:"#TIKTOK"}},[t._v("tiktok")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"w-full md:flex md:justify-between uppercase"},[n("ul",{staticClass:"py-7 md:py-2 text-l md:text-2xl border-t px-3 sm:pl-3"},[n("li",{staticClass:"md:inline-block mr-3"},[n("strong",[t._v("MON:")]),t._v(" ZzZ\n                ")]),t._v(" "),n("li",{staticClass:"md:inline-block mr-3"},[n("strong",[t._v("TUE-THU:")]),t._v(" 17:00 - 23:00\n                ")]),t._v(" "),n("li",{staticClass:"md:inline-block mr-3"},[n("strong",[t._v("FRI:")]),t._v(" 17:00-00:30\n                ")])]),t._v(" "),n("p",{staticClass:"py-7 md:py-2 uppercase text-l md:text-2xl font-bold border-t px-3 sm:pr -3"},[n("a",{attrs:{href:"https://goo.gl/maps/EgkvLDNcH7Gb2SBdA",target:"_blank"}},[t._v("Stockholm, Kornhamnstorg 51, 111 27")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(289).default})}}]);