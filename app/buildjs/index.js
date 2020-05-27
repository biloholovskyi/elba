!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){var o=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});e.exports=s},function(e,n,t){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function r(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],a=0;a<e.length;a++){var i=e[a],c=n.base?i[0]+n.base:i[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var f=r(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(s[f].references++,s[f].updater(p)):s.push({identifier:d,updater:g(p,n),references:1}),o.push(d)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,f=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(n,a);else{var i=document.createTextNode(a),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function m(e,n,t){var o=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var u=null,h=0;function g(e,n){var t,o,a;if(n.singleton){var i=h++;t=u||(u=l(n)),o=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=l(n),o=m.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var a=r(t[o]);s[a].references--}for(var i=c(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=(s=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}var s,r,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n){$(document).ready((function(){$("#factory-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#blog-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#single-owl").owlCarousel({margin:10,loop:!0,nav:!1,items:1})}))},function(e,n){function t(){$("#accordeon .hidden").not($(this).next()),$(this).next().toggleClass("active")}$(document).ready((function(){$("#accordeon .head").on("click",t)}))},function(e,n){$(document).ready((function(){$(".modalOpen").on("click",(function(){$(".catalog-overlay").show().css("display","flex"),$("body").css({overflow:"hidden"})})),$(".img-block .small-img").on("click",(function(){var e=$(this).attr("src");$(".img-main ").css("background-image","url("+e+")")})),$(".catalog-close").on("click",(function(){$(".catalog-overlay").hide(),$("body").css({overflow:"visible"})}))})),$(document).on("click",(function(e){var n=$(".catalog-modal"),t=$(".modalOpen");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||$(".catalog-overlay").hide()}))},function(e,n){$(document).ready((function(){$(".search-btn").on("click",(function(){var e=$(".search-inp").val();$(".inner-inp").html(e),$(".visability-title").css("display","none"),$(".hidden-title").fadeIn("slow").css("display","block"),$(".hidden-title-mobile").fadeIn("slow").css("display","block")})),$(".reset").bind("click",(function(){$("input[type=text]").val(""),$(".visability-title").css("display","block"),$(".hidden-title").fadeOut("slow").css("display","none"),$(".hidden-title-mobile").fadeOut("slow").css("display","none")}))}))},function(e,n){$(document).ready((function(){$(".acc-btn").on("click",(function(){$(this).toggleClass("active")})),$(".color-btn").on("click",(function(){$(this).toggleClass("active")}))}))},function(e,n,t){"use strict";t.r(n);t(0);var o=function(){if(!($(".fullPage__box").length<1)){var e=document.querySelectorAll(".fullPage"),n=0,t=0;e.forEach((function(e,o){var a=e.getBoundingClientRect().height.toString();t+=+a,n+=+a,e.setAttribute("data-height",n),document.querySelector("body").style.height=t+"px"}))}},a=function(){var e=$(".event__video-block");e.length>0&&e.css("height",e.width()+"px")},i=function(){$(".modal-menu").toggleClass("modal-menu--active"),$(".header__mobile .menu").toggleClass("menu--show"),$("body").toggleClass("stop-scroll")},s=(t(4),function(e){e.preventDefault();var n=$(".conf-modal"),t=$(".header");n.toggleClass("conf-modal--show"),n.hasClass("conf-modal--show")?t.css("z-index","1"):t.css("z-index","60")}),r=(t(5),t(6),t(7),t(8),function(){var e=$(".fullPage"),n=+e.eq(0).attr("data-height");if($(window).width()>1060||pageYOffset<7*n?$(".fullPage-wrapper").removeClass("fullPage-wrapper--active"):$(".fullPage-wrapper").addClass("fullPage-wrapper--active"),pageYOffset<n?$("header").addClass("header--white"):$("header").removeClass("header--white"),pageYOffset<n)c(e),e.eq(0).css({"z-index":"51",opacity:"1"});else if(pageYOffset<2*n){c(e);var t=$(".home-text__title"),o=$(".home-text__desc");e.eq(1).css({"z-index":"51",opacity:"1"});var a=100*(pageYOffset-n)/n,i="0.".concat((3*a).toFixed(0));+(3*a).toFixed(0)>99&&(i=1),+(3*a).toFixed(0)<10&&(i=.1);var s=100-(2*a).toFixed(0),r=.7*s;+(2*a).toFixed(0)>100&&(s=0),r<0&&(r=0),a>50&&(i="0.".concat((100-a).toFixed(0)),(100-a).toFixed(0)<10&&(i=.1),r=.7*(s=(50-a).toFixed(0))),t.css({opacity:i,transform:"translateY("+s+"px)"}),o.css({opacity:i,transform:"translateY("+r+"px)"})}else if(pageYOffset<3*n){c(e),e.eq(2).css({"z-index":"51",opacity:"1"});var l=$(".image-text__img--1"),d=$(".image-text__img--2"),f=$(".image-text__img--3"),p=$(".image-text__title"),m=$(".image-text__desc");l.css("opacity","0"),d.css("opacity","0"),f.css("opacity","0"),p.css({transform:"translateY(100px)"}),m.css({transform:"translateY(100px)"});var u=100*(pageYOffset-2*n)/n,h="0.".concat((2.5*u).toFixed(0));(2.5*u).toFixed(0)>99&&(h=1),u>10&&(l.css("opacity",h),d.css("opacity",h),f.css("opacity",h));var g="0.".concat((3*u).toFixed(0));+(3*u).toFixed(0)>99&&(g=1),+(3*u).toFixed(0)<10&&(g=.1);var y=100-(2*u).toFixed(0),x=.6*y;+(2*u).toFixed(0)>100&&(y=0),x<0&&(x=0),u>50&&(g="0.".concat((100-u).toFixed(0)),(100-u).toFixed(0)<10&&(g=.1),x=.6*(y=(50-u).toFixed(0))),p.css({transform:"translateY("+y+"px)",opacity:g}),m.css({transform:"translateY("+x+"px)",opacity:g})}else if(pageYOffset<4*n){c(e),e.eq(3).css({"z-index":"51",opacity:"1"});var v=$(".image-text__img--4"),b=$(".image-text__title"),w=$(".image-text__desc");v.css("opacity","0"),b.css({transform:"translateY(100px)"}),w.css({transform:"translateY(100px)"});var _=100*(pageYOffset-3*n)/n,F="0.".concat((2.5*_).toFixed(0));(2.5*_).toFixed(0)>99&&(F=1),_>10&&v.css("opacity",F);var C="0.".concat((3*_).toFixed(0));+(3*_).toFixed(0)>99&&(C=1),+(3*_).toFixed(0)<10&&(C=.1);var q=100-(2*_).toFixed(0),k=.6*q;+(2*_).toFixed(0)>100&&(q=0),k<0&&(k=0),_>50&&(C="0.".concat((100-_).toFixed(0)),(100-_).toFixed(0)<10&&(C=.1),k=.6*(q=(50-_).toFixed(0))),b.css({transform:"translateY("+q+"px)",opacity:C}),w.css({transform:"translateY("+k+"px)",opacity:C})}else if(pageYOffset<5*n){c(e),e.eq(4).css({"z-index":"51",opacity:"1"});var Y=$(".shape__text"),z=$(".shape__img"),O=$(".shape__circle");z.each((function(){$(this).css("opacity","0"),$(this).css("transform","rotate(0)")})),O.each((function(){$(this).css("opacity","0")})),Y.css("opacity","0");var S=100*(pageYOffset-4*n)/n;S>2.5?z.eq(0).css({opacity:"1",transform:"rotate(0)"}):z.eq(0).css({opacity:"0",transform:"rotate(0)"}),S>5?z.eq(1).css({opacity:"1",transform:"rotate(-22.5deg)"}):z.eq(1).css({opacity:"0",transform:"rotate(0)"}),S>7.5?z.eq(2).css({opacity:"1",transform:"rotate(-45deg)"}):z.eq(2).css({opacity:"0",transform:"rotate(0)"}),S>10?z.eq(3).css({opacity:"1",transform:"rotate(-67.5deg)"}):z.eq(3).css({opacity:"0",transform:"rotate(0)"}),S>12.5?z.eq(4).css({opacity:"1",transform:"rotate(-90deg)"}):z.eq(4).css({opacity:"0",transform:"rotate(0)"}),S>15?z.eq(5).css({opacity:"1",transform:"rotate(-112.5deg)"}):z.eq(5).css({opacity:"0",transform:"rotate(0)"}),S>17.5?z.eq(6).css({opacity:"1",transform:"rotate(-135deg)"}):z.eq(6).css({opacity:"0",transform:"rotate(0)"}),S>20?z.eq(7).css({opacity:"1",transform:"rotate(-157.5deg)"}):z.eq(7).css({opacity:"0",transform:"rotate(0)"}),S>22.5?O.eq(0).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>25?O.eq(1).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>27.5?O.eq(2).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>30?O.eq(3).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>32.5?O.eq(4).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>35?O.eq(5).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>37.5?O.eq(6).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>40?O.eq(7).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>42.5?O.eq(8).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>45?O.eq(9).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>47.5?O.eq(10).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>50?O.eq(11).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>52.5?O.eq(12).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>55?O.eq(13).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>57.5?O.eq(14).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>60?O.eq(15).css({opacity:"1"}):O.eq(0).css({opacity:"0"}),S>62.5?O.eq(16).css({opacity:"1"}):O.eq(0).css({opacity:"0"});var E=$(".shape__text p"),I=$(".shape__padding");Y.css({opacity:"0","max-height":$(window).height()+"px"}),I.css("height",R+"px");var R=$(window).height(),j=$(window).height()/2-60,T=1;E.each((function(){$(this).css("opacity",T),T=T>0?T-.3:0})),S>75?($(window).width()>1060?$(".shape__imgs").css("margin-left","calc(100% - 581px)"):$(".shape__imgs").css("margin-left","0"),Y.css("overflow","auto"),Y.css("transition","all .3s"),Y.css("opacity","1"),I.css({transition:"all .6s",height:j+"px"})):$(".shape__imgs").css("margin-left","0")}else if(pageYOffset<6*n){c(e),e.eq(5).css({"z-index":"51",opacity:"1"});var A=$(".collections .collect__nav-box .title"),M=$(".collect-slider__item");A.css({transform:"translateY(100px)"}),M.each((function(){$(this).css({transform:"translateY(100px)"})}));var P=100*(pageYOffset-5*n)/n;"0.".concat((2.5*P).toFixed(0));(2.5*P).toFixed(0)>99&&1;var N="0.".concat((3*P).toFixed(0));+(3*P).toFixed(0)>99&&(N=1),+(3*P).toFixed(0)<10&&(N=.1);var B=100-(2*P).toFixed(0),L=.6*B;+(2*P).toFixed(0)>100&&(B=0),L<0&&(L=0),P>50&&(N="0.".concat((100-P).toFixed(0)),(100-P).toFixed(0)<10&&(N=.1),B=(50-P).toFixed(0),L=.6*B),A.css({transform:"translateY("+B+"px)",opacity:N}),M.each((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(L=B*(e+=3.5))<0&&(L=0),$(this).css({transform:"translateY("+L+"px)",opacity:N})}))}else if(pageYOffset<7*n){c(e),e.eq(6).css({"z-index":"51",opacity:"1"});var U=$(".list__col"),D=$(".list__text");D.css({transform:"translateY(100px)"}),U.each((function(){$(this).css({transform:"translateY(100px)"})}));var W=100*(pageYOffset-6*n)/n,H=100-(2*W).toFixed(0),J=.6*H;+(2*W).toFixed(0)>100&&(H=0),J<0&&(J=0),W>50&&(H=(50-W).toFixed(0),J=.6*H),D.css({transform:"translateY("+H+"px)"}),U.each((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(J=H*(e+=3.5/W))<0&&(J=0),$(this).css({transform:"translateY("+J+"px)"})}))}else if(pageYOffset<8*n){if(c(e),e.eq(7).css({"z-index":"51",opacity:"1"}),$(window).width()>1060){var G=$(".event__title"),K=$(".event__desc"),Q=$(".text__bottom .arrow-link");G.css({transform:"translateY(100px)"}),K.css({transform:"translateY(100px)"}),Q.css({transform:"translateY(100px)"});var V=100*(pageYOffset-7*n)/n,X=100-(2*V).toFixed(0),Z=.6*X;+(2*V).toFixed(0)>100&&(X=0),Z<0&&(Z=0);var ee="0.".concat((3*V).toFixed(0));+(3*V).toFixed(0)>99&&(ee=1),+(3*V).toFixed(0)<10&&(ee=.1);var ne=100-(2*V).toFixed(0),te=.6*ne,oe=.6*te;+(2*V).toFixed(0)>100&&(ne=0),te<0&&(te=0),oe<0&&(oe=0),V>50&&(ee="0.".concat((100-V).toFixed(0)),(100-V).toFixed(0)<10&&(ee=.1),oe=.6*(te=.6*(ne=(50-V).toFixed(0)))),G.css({transform:"translateY("+ne+"px)",opacity:ee}),K.css({transform:"translateY("+te+"px)",opacity:ee}),Q.css({transform:"translateY("+oe+"px)",opacity:ee}),V>80?$(".event__video-block").css({transform:"translateY("+2*ne+"px)",transition:"all .3s"}):$(".event__video-block").css({transform:"translateY(0px)",transition:"all .3s"})}}else if(pageYOffset<9*n){if(c(e),e.eq(8).css({"z-index":"51",opacity:"1"}),$(window).width()>1060){var ae=$(".blog__title"),ie=$(".blog__list .list__row .item");ae.css({transform:"translateY(100px)"}),ie.each((function(){$(this).css({transform:"translateY(100px)"})}));var se=100*(pageYOffset-8*n)/n;"0.".concat((2.5*se).toFixed(0));(2.5*se).toFixed(0)>99&&1;var re="0.".concat((3*se).toFixed(0));+(3*se).toFixed(0)>99&&(re=1),+(3*se).toFixed(0)<10&&(re=.1);var ce=100-(2*se).toFixed(0),le=.6*ce;+(2*se).toFixed(0)>100&&(ce=0),le<0&&(le=0),se>50&&(re="0.".concat((100-se).toFixed(0)),(100-se).toFixed(0)<10&&(re=.1),ce=(50-se).toFixed(0),le=.6*ce),ae.css({transform:"translateY("+ce+"px)",opacity:re}),ie.each((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;re=re/(e+=3.5/se)*1.5,(le=ce*e)<0&&(le=0),$(this).css({transform:"translateY("+le+"px)",opacity:re})}))}}else if(pageYOffset<10*n){c(e),e.eq(9).css({"z-index":"51",opacity:"1"});$(".home-about__col .coll__top"),$(".home-about__col .coll__center"),$(".home-about__col .coll__bottom");var de=100*(pageYOffset-9*n)/n;"0.".concat((2.5*de).toFixed(0));(2.5*de).toFixed(0)>99&&1;(2*de).toFixed(0);+(2*de).toFixed(0)>100&&0}else c(e)}),c=function(e){e.css({opacity:"0","z-index":"50"})};$(document).ready((function(){o(),a(),$(".collections__slider").owlCarousel({margin:16,autoWidth:!0,loop:!1,nav:!0,navText:"",responsive:{0:{autoWidth:!1,items:1},650:{autoWidth:!0}}}),$(".blog__slider").owlCarousel({margin:12,loop:!1,nav:!1,items:1}),document.addEventListener("scroll",(function(){r()})),$(".fullPage__box").length>0&&r(),$(".header__mobile .menu").on("click",i),$(".option--visible").on("click",(function(e){!function(e){$(e.currentTarget).toggleClass("option--hidden")}(e)})),$(".order-new-element--material .new-material").on("click",(function(e){!function(e){$(".order-new-element--material .new-material").removeClass("new-material--active"),$(e.currentTarget).addClass("new-material--active")}(e)})),$(".order-buttons .item--add, .order-buttons .item--cancel").on("click",(function(e){var n,t;n=$(".order-new-element--main"),t=$("#order-title"),n.toggleClass("order-new-element--show"),n.hasClass("order-new-element--show")?t.html("New element"):t.html("Your order")})),$(".order-new-element--main .new-item").on("click",(function(e){!function(e){switch($(".order-new-element").removeClass("order-new-element--show"),$(e.currentTarget).attr("data-type")){case"body":$(".order-new-element--body").addClass("order-new-element--show");break;case"shape":$(".order-new-element--tabs").addClass("order-new-element--show");break;case"straps":$(".order-new-element--straps").addClass("order-new-element--show")}}(e)})),$(".order-tabs .item").on("click",(function(e){!function(e){var n=$(".order-new-element--tabs .order-list");n.removeClass("order-list--show"),$(".order-tabs .item").removeClass("item--active"),$(e.currentTarget).addClass("item--active"),n.eq($(e.currentTarget).index()).addClass("order-list--show")}(e)})),$(".configurator__main .conf__main-top .links .link, .conf-modal__close").on("click",(function(e){return s(e)})),$(document).on("click",(function(e){var n=$(".configurator__main .conf__main-top .links .link, .conf-modal__close"),t=$(".conf-modal__body");n.is(e.target)||t.is(e.target)||0!==t.has(e.target).length||$(".conf-modal").hasClass("conf-modal--show")&&s(e)}))})),$(window).resize((function(){a(),o(),r()}));document.getElementsByClassName(".catalog-btn");for(var l=document.getElementsByClassName(".acc-btn"),d=0;d<l.length;d++)l[d].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}]);