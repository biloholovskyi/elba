!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var s=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};s(a,i);e.exports=a.locals||{}},function(e,t,n){"use strict";var s,a=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function r(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},s=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],l=n[c]||0,f="".concat(c," ").concat(l);n[c]=l+1;var p=r(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(d)):o.push({identifier:f,updater:_(d,t),references:1}),s.push(f)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var a=n.nc;a&&(s.nonce=a)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var f,p=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function d(e,t,n,s){var a=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=p(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var s=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var g=null,h=0;function _(e,t){var n,s,a;if(t.singleton){var i=h++;n=g||(g=l(t)),s=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else n=l(t),s=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var a=r(n[s]);o[a].references--}for(var i=c(e,t),l=0;l<n.length;l++){var f=r(n[l]);0===o[f].references&&(o[f].updater(),o.splice(f,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var a=(o=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),i=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,r,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(s)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);s&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){$(document).ready((function(){$("#factory-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#blog-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#single-owl").owlCarousel({margin:10,loop:!0,nav:!1,items:1})}))},function(e,t){function n(){$("#accordeon .hidden").not($(this).next()),$(this).next().toggleClass("active")}$(document).ready((function(){$("#accordeon .head").on("click",n)}))},function(e,t){$(document).ready((function(){$(".price__quick").on("click",(function(){$(".catalog-overlay").show().css("display","flex"),$("body").css({overflow:"hidden"})})),$(".img-block .small-img").on("click",(function(){var e=$(this).attr("src");$(".img-main ").css("background-image","url("+e+")")})),$(".catalog-close").on("click",(function(){$(".catalog-overlay").hide(),$("body").css({overflow:"visible"})}))})),$(document).on("click",(function(e){var t=$(".catalog-modal"),n=$(".price__quick");n.is(e.target)||0!==n.has(e.target).length||t.is(e.target)||0!==t.has(e.target).length||$(".catalog-overlay").hide()}))},function(e,t){$(document).ready((function(){$(".search-btn").on("click",(function(){var e=$(".search-inp").val();$(".inner-inp").html(e),$(".visability-title").css("display","none"),$(".hidden-title").fadeIn("slow").css("display","block"),$(".hidden-title-mobile").fadeIn("slow").css("display","block")})),$(".reset").bind("click",(function(){$("input[type=text]").val(""),$(".visability-title").css("display","block"),$(".hidden-title").fadeOut("slow").css("display","none"),$(".hidden-title-mobile").fadeOut("slow").css("display","none")}))}))},function(e,t){$(document).ready((function(){$(".acc-btn").on("click",(function(){$(this).toggleClass("active")})),$(".color-btn").on("click",(function(){$(this).toggleClass("active")}))}))},function(e,t,n){"use strict";n.r(t);n(0);var s=function(){var e=$(".event__video-block");e.length>0&&e.css("height",e.width()+"px")},a=function(){$(".modal-menu").toggleClass("modal-menu--active"),$(".header__mobile .menu").toggleClass("menu--show"),$("body").toggleClass("stop-scroll")},i=(n(4),function(e){e.preventDefault();var t=$(".conf-modal"),n=$(".header");t.toggleClass("conf-modal--show"),t.hasClass("conf-modal--show")?(n.css("z-index","1"),$("body").css({overflow:"hidden"})):(n.css("z-index","60"),$("body").css("overflow","visible"))}),o=function(){$(".order-new-element").removeClass("order-new-element--show")},r=function(){$(".order-new-element").removeClass("order-new-element--show"),$(".order-new-element--main").addClass("order-new-element--show")},c=function(){$(".conf-modal").removeClass("conf-modal--show"),$(".header").css("z-index","60"),$("body").css("overflow","visible")},l=(n(5),n(6),n(7),n(8),function(){if(!($(".fullPage__box").length<1)){if(pageYOffset>200?($(".follow-us__link").addClass("follow-us__link--dark"),$(".header").removeClass("header--white")):($(".follow-us__link").removeClass("follow-us__link--dark"),$(".header").addClass("header--white")),0===pageYOffset)$(".home-first").css({opacity:1});if(pageYOffset>0){var e=1-(pageYOffset-1)/199*100/100*1;e<.1&&(e=0),e>.9&&(e=1),$(".home-first").css({opacity:e,"z-index":51})}if(pageYOffset>200){var t=(pageYOffset-200)/202*100,n=t/100*1,s=100-t/100*100;t>99&&(n=1,s=0),t<1&&(n=0,s=100);var a=$(".home-text__title");$(".home-text").eq(0).css({opacity:1,"z-index":52}),a.css({opacity:n,transform:"translateY("+s+"px)"})}else{var i=$(".home-text").eq(0),o=$(".home-text__desc"),r=$(".home-text__title");i.css({opacity:0,"z-index":50}),r.css({transform:"translateY(100px)"}),o.css({opacity:0})}if(pageYOffset>295){var c=(pageYOffset-295)/216*100,l=c/100*1,f=100-c/100*100;c>99&&(l=1,f=0),c<1&&(l=0,f=100),$(".home-text__desc").css({opacity:l,transform:"translateY("+f+"px)"})}else{$(".home-text__desc").css({transform:"translateY(100px)"})}if(pageYOffset>1e3){var p=(pageYOffset-1e3)/200*100,d=1-p/100*1,m=p/100*-100;p>99&&(d=0,m=-100),p<1&&(d=1,m=0),$(".home-text__title").css({opacity:d,transform:"translateY("+m+"px)"})}if(pageYOffset>1100){var g=(pageYOffset-1100)/200*100,h=1-g/100*1,_=g/100*-100;g>99&&(h=0,_=-100),g<1&&(h=1,_=0),$(".home-text__desc").css({opacity:h,transform:"translateY("+_+"px)"})}if(pageYOffset>1400){var u=(pageYOffset-1400)/200*100,v=u/100*1;u>99&&(v=1),u<1&&(v=0);var y=$(".image-text__img--1"),w=$(".image-text__img--2"),x=$(".image-text__img--3");$(".image-text").eq(0).css({opacity:1,"z-index":53}),y.css({opacity:v}),w.css({opacity:v}),x.css({opacity:v})}else{$(".image-text").eq(0).css({opacity:0,"z-index":50})}if(pageYOffset>1850){var Y=(pageYOffset-1850)/200*100,b=60-Y/100*60;Y>99&&(b=0),Y<1&&(b=60),$(".image-text__title").eq(0).children("span").css({transform:"translateY("+b+"px)"})}else{$(".image-text__title").eq(0).children("span").css({transform:"translateY(60px)"})}if(pageYOffset>1945){var O=(pageYOffset-1945)/300*100,C=O/100*1,k=60-O/100*60;O>99&&(k=0,C=1),O<1&&(k=60,C=0),$(".image-text__desc").eq(0).css({transform:"translateY("+k+"px)",opacity:C})}else{$(".image-text__desc").eq(0).css({transform:"translateY(60px)",opacity:0})}if(pageYOffset>2610){var z=(pageYOffset-2610)/200*100,q=z/100*60;z>99&&(q=60),z<1&&(q=0),$(".image-text__title").eq(0).children("span").css({transform:"translateY("+q+"px)"})}if(pageYOffset>3005){var E=(pageYOffset-3005)/200*100,S=1-E/100*1,I=E/100*60;E>99&&(I=60,S=0),E<1&&(I=0,S=1),$(".image-text__desc").eq(0).css({transform:"translateY("+I+"px)",opacity:S})}if(pageYOffset>3205){var T=(pageYOffset-3205)/205*100,R=T/100*1;T>99&&(R=1),T<1&&(R=0);var j=$(".image-text__img--1"),A=$(".image-text__img--2"),M=$(".image-text__img--3"),N=$(".image-text__img--4");$(".image-text").eq(1).css({opacity:1,"z-index":54}),j.css({opacity:0}),A.css({opacity:0}),M.css({opacity:0}),N.css({opacity:R})}else{$(".image-text").eq(1).css({opacity:0,"z-index":50})}if(pageYOffset>3205){var F=$(".image-text__img--4")[0],P=(pageYOffset-3205)/1309*100,L=F.duration,B=L*(P/100);P>99&&(B=L),P<1&&(B=0),F.currentTime=B}if(pageYOffset>3410){var X=(pageYOffset-3410)/185*100,U=60-X/100*60;X>99&&(U=0),X<1&&(U=60),$(".image-text__title").eq(1).children("span").css({transform:"translateY("+U+"px)"})}else{$(".image-text__title").eq(1).children("span").css({transform:"translateY(60px)"})}if(pageYOffset>3505){var W=(pageYOffset-3505)/185*100,D=W/100*1,H=60-W/100*60;W>99&&(H=0,D=1),W<1&&(H=60,D=0),$(".image-text__desc").eq(1).css({transform:"translateY("+H+"px)",opacity:D})}else{$(".image-text__desc").eq(1).css({transform:"translateY(60px)",opacity:0})}if(pageYOffset>4150){var J=(pageYOffset-4150)/176*100,G=J/100*60;J>99&&(G=60),J<1&&(G=0),$(".image-text__title").eq(1).children("span").css({transform:"translateY("+G+"px)"})}if(pageYOffset>4238){var K=(pageYOffset-4238)/176*100,Q=1-K/100*1,V=K/100*60;K>99&&(V=60,Q=0),K<1&&(V=0,Q=1),$(".image-text__desc").eq(1).css({transform:"translateY("+V+"px)",opacity:Q})}if(pageYOffset>4414){var Z=(pageYOffset-4414)/100*100,ee=1-Z/100*1;Z>99&&(ee=0),Z<1&&(ee=1),$(".image-text").eq(1).css({opacity:ee})}if(pageYOffset>4614){var te=(pageYOffset-4614)/100*100,ne=te/100*1;te>99&&(ne=1),te<1&&(ne=0);var se=$(".shape__img--1"),ae=$(".shape__text"),ie=$(".shape");ae.css({transform:"translateY(100%)"}),ie.css({opacity:1,"z-index":55}),se.css({opacity:ne})}else{var oe=$(".shape__img--1");$(".shape").css({opacity:0,"z-index":50}),oe.css({opacity:0})}if(pageYOffset>4714){var re=(pageYOffset-4714)/100*100,ce=re/100*1,le=re/100*-22.5,fe=re/100*-45,pe=re/100*-67.5,de=re/100*-90,me=re/100*-112.5,ge=re/100*-135,he=re/100*-157.5;re>99&&(ce=1,le=-22.5,fe=-45,pe=-67.5,de=-90,me=-112.5,ge=-135,he=-157.5),re<1&&(ce=0,le=0,fe=0,pe=0,de=0,me=0,ge=0,he=0);var _e=$(".shape__img--2"),$e=$(".shape__img--3"),ue=$(".shape__img--4"),ve=$(".shape__img--5"),ye=$(".shape__img--6"),we=$(".shape__img--7"),xe=$(".shape__img--8");_e.css({opacity:ce,transform:"rotate("+le+"deg)"}),$e.css({opacity:ce,transform:"rotate("+fe+"deg)"}),ue.css({opacity:ce,transform:"rotate("+pe+"deg)"}),ve.css({opacity:ce,transform:"rotate("+de+"deg)"}),ye.css({opacity:ce,transform:"rotate("+me+"deg)"}),we.css({opacity:ce,transform:"rotate("+ge+"deg)"}),xe.css({opacity:ce,transform:"rotate("+he+"deg)"})}else{var Ye=$(".shape__img--2"),be=$(".shape__img--3"),Oe=$(".shape__img--4"),Ce=$(".shape__img--5"),ke=$(".shape__img--6"),ze=$(".shape__img--7"),qe=$(".shape__img--8");Ye.css({opacity:0,transform:"rotate(0deg)"}),be.css({opacity:0,transform:"rotate(0deg)"}),Oe.css({opacity:0,transform:"rotate(0deg)"}),Ce.css({opacity:0,transform:"rotate(0deg)"}),ke.css({opacity:0,transform:"rotate(0deg)"}),ze.css({opacity:0,transform:"rotate(0deg)"}),qe.css({opacity:0,transform:"rotate(0deg)"})}if(pageYOffset>4914){var Ee=(pageYOffset-4914)/100*100,Se=Ee/100*1;Ee>99&&(Se=1),Ee<1&&(Se=0),$(".shape__circle--1").css({opacity:Se})}else{$(".shape__circle--1").css({opacity:0})}if(pageYOffset>4934){var Ie=(pageYOffset-4934)/100*100,Te=Ie/100*1;Ie>99&&(Te=1),Ie<1&&(Te=0),$(".shape__circle--2").css({opacity:Te})}else{$(".shape__circle--2").css({opacity:0})}if(pageYOffset>4954){var Re=(pageYOffset-4954)/100*100,je=Re/100*1;Re>99&&(je=1),Re<1&&(je=0),$(".shape__circle--3").css({opacity:je})}else{$(".shape__circle--3").css({opacity:0})}if(pageYOffset>4974){var Ae=(pageYOffset-4974)/100*100,Me=Ae/100*1;Ae>99&&(Me=1),Ae<1&&(Me=0),$(".shape__circle--4").css({opacity:Me})}else{$(".shape__circle--4").css({opacity:0})}if(pageYOffset>4994){var Ne=(pageYOffset-4994)/100*100,Fe=Ne/100*1;Ne>99&&(Fe=1),Ne<1&&(Fe=0),$(".shape__circle--5").css({opacity:Fe})}else{$(".shape__circle--5").css({opacity:0})}if(pageYOffset>5014){var Pe=(pageYOffset-5014)/100*100,Le=Pe/100*1;Pe>99&&(Le=1),Pe<1&&(Le=0),$(".shape__circle--6").css({opacity:Le})}else{$(".shape__circle--6").css({opacity:0})}if(pageYOffset>5034){var Be=(pageYOffset-5034)/100*100,Xe=Be/100*1;Be>99&&(Xe=1),Be<1&&(Xe=0),$(".shape__circle--7").css({opacity:Xe})}else{$(".shape__circle--7").css({opacity:0})}if(pageYOffset>5054){var Ue=(pageYOffset-5054)/100*100,We=Ue/100*1;Ue>99&&(We=1),Ue<1&&(We=0),$(".shape__circle--8").css({opacity:We})}else{$(".shape__circle--8").css({opacity:0})}if(pageYOffset>5074){var De=(pageYOffset-5074)/100*100,He=De/100*1;De>99&&(He=1),De<1&&(He=0),$(".shape__circle--9").css({opacity:He})}else{$(".shape__circle--9").css({opacity:0})}if(pageYOffset>5094){var Je=(pageYOffset-5094)/100*100,Ge=Je/100*1;Je>99&&(Ge=1),Je<1&&(Ge=0),$(".shape__circle--10").css({opacity:Ge})}else{$(".shape__circle--10").css({opacity:0})}if(pageYOffset>5114){var Ke=(pageYOffset-5114)/100*100,Qe=Ke/100*1;Ke>99&&(Qe=1),Ke<1&&(Qe=0),$(".shape__circle--11").css({opacity:Qe})}else{$(".shape__circle--11").css({opacity:0})}if(pageYOffset>5134){var Ve=(pageYOffset-5134)/100*100,Ze=Ve/100*1;Ve>99&&(Ze=1),Ve<1&&(Ze=0),$(".shape__circle--12").css({opacity:Ze})}else{$(".shape__circle--12").css({opacity:0})}if(pageYOffset>5154){var et=(pageYOffset-5154)/100*100,tt=et/100*1;et>99&&(tt=1),et<1&&(tt=0),$(".shape__circle--13").css({opacity:tt})}else{$(".shape__circle--13").css({opacity:0})}if(pageYOffset>5174){var nt=(pageYOffset-5174)/100*100,st=nt/100*1;nt>99&&(st=1),nt<1&&(st=0),$(".shape__circle--14").css({opacity:st})}else{$(".shape__circle--14").css({opacity:0})}if(pageYOffset>5194){var at=(pageYOffset-5194)/100*100,it=at/100*1;at>99&&(it=1),at<1&&(it=0),$(".shape__circle--15").css({opacity:it})}else{$(".shape__circle--15").css({opacity:0})}if(pageYOffset>5214){var ot=(pageYOffset-5214)/100*100,rt=ot/100*1;ot>99&&(rt=1),ot<1&&(rt=0),$(".shape__circle--16").css({opacity:rt})}else{$(".shape__circle--16").css({opacity:0})}if(pageYOffset>5414){var ct=(pageYOffset-5414)/200*100,lt=429;$(window).width()<1501&&(lt=349);var ft=lt*(ct/100);ct>99&&(ft=429,$(window).width()<1501&&(ft=349)),ct<1&&(ft=0);var pt=$(".shape__imgs");pt.css({transform:"translateX("+ft+"px)"}),$(window).width()<1501&&pt.css({transform:"translateX("+ft+"px) scale(.5)"}),$(window).width()<1061&&pt.css({transform:"translateX(0px) scale(.5)"})}else{var dt=$(".shape__imgs");dt.css({transform:"translateX(0)"}),$(window).width()<1501&&dt.css({transform:"translateX(0px) scale(.5)"}),$(window).width()<1061&&dt.css({transform:"translateX(0px) scale(.5)"})}if(pageYOffset>5523){var mt=(pageYOffset-5523)/291*100,gt=100-mt;mt>99&&(gt=0),mt<1&&(gt=100),$(".shape__text").css({transform:"translateY("+gt+"%)"})}else{$(".shape__text").css({transform:"translateY(100%)"})}if(pageYOffset>5814){var ht=(pageYOffset-5814)/200*100,_t=1-ht/100*1;ht>99&&(_t=0),ht<1&&(_t=1),$(".shape").css({opacity:_t})}if(pageYOffset>6114){var $t=(pageYOffset-6114)/206*100,ut=60-$t/100*60,vt=$t/100*1;$t>99&&(vt=1,ut=0),$t<1&&(vt=0,ut=60);var yt=$(".collections"),wt=$(".collections .collect__nav-box .title"),xt=$(".collections__slider .collect-slider__item");yt.css({opacity:1,"z-index":56}),wt.css({opacity:vt,transform:"translateY("+ut+"px"}),xt.css({opacity:0})}else{var Yt=$(".collections"),bt=$(".collections .collect__nav-box .title");Yt.css({opacity:0,"z-index":50}),bt.css({opacity:0,transform:"translateY(60px"})}if(pageYOffset>6221){var Ot=(pageYOffset-6221)/206*100,Ct=Ot/100*1;Ot>99&&(Ct=1),Ot<1&&(Ct=0),$(".collections__slider .owl-nav").css({opacity:Ct})}else{$(".collections__slider .owl-nav").css({opacity:0})}if(pageYOffset>6427){var kt=$(".collections__slider .collect-slider__item"),zt=(kt.length,0);kt.each((function(){var e=118*zt,t=6427+e,n=(pageYOffset-t)/(6671+e-t)*100,s=60-n/100*60,a=n/100*1;n>99&&(a=1,s=0),n<1&&(a=0,s=60),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),zt++}))}else{$(".collections__slider .collect-slider__item").css({opacity:0,transform:"translateY(60px)"})}if(pageYOffset>7700){var qt=(pageYOffset-7700)/205*100,Et=qt/100*-60,St=1-qt/100*1;qt>99&&(St=0,Et=-60),qt<1&&(St=1,Et=0),$(".collections .collect__nav-box .title").css({opacity:St,transform:"translateY("+Et+"px"})}if(pageYOffset>7804){var It=(pageYOffset-7804)/205*100,Tt=1-It/100*1;It>99&&(Tt=0),It<1&&(Tt=1),$(".collections__slider .owl-nav").css({opacity:Tt})}if(pageYOffset>8009){var Rt=$(".collections__slider .collect-slider__item"),jt=0;Rt.each((function(){var e=94*jt,t=8009+e,n=(pageYOffset-t)/(8214+e-t)*100,s=n/100*-60,a=1-n/100*1;n>99&&(a=0,s=-60),n<1&&(a=1,s=0),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),jt++}))}if($(window).width()>760){if(pageYOffset>8414){var At=(pageYOffset-8414)/200*100,Mt=At/100*1;At>99&&(Mt=1),At<1&&(Mt=0);var Nt=$(".list"),Ft=$(".list__col"),Pt=$(".list__text .arrow-link"),Lt=$(".list__text .title span"),Bt=$(".list__text .desc");Nt.css({opacity:1,"z-index":57}),Ft.css({opacity:0}),Lt.css({transform:"translateY(30px)"}),Bt.css({opacity:0}),Ft.eq(0).css({opacity:Mt}),Pt.css({opacity:Mt})}else{var Xt=$(".list"),Ut=$(".list__text .arrow-link");Xt.css({opacity:0,"z-index":50}),Ut.css({opacity:0})}if(pageYOffset>8414){var Wt=(pageYOffset-8414)/1094*100,Dt=$(window).height()-412;$(window).width()<1061&&(Dt=$(window).height()-412);var Ht=Dt-Dt*(Wt/100);Wt>99&&(Ht=0),Wt<1&&(Ht=$(window).height()-412);$(".list");var Jt=$(".list__col");$(".list__text");Jt.eq(0).css({transform:"translateY("+Ht+"px)"})}else{$(".list__col").eq(0).css({transform:"translateY("+$(window).height()-412+"px)"})}if(pageYOffset>9508){var Gt=$(".list__col"),Kt=(pageYOffset-9508)/512*100,Qt=-1*(Gt.eq(0).height()-$(window).height()),Vt=Qt*(Kt/100);Kt>99&&(Vt=Qt),Gt.eq(0).css({transform:"translateY("+Vt+"px)"})}if(pageYOffset>8506){var Zt=(pageYOffset-8506)/213*100,en=Zt/100*1,tn=50-Zt/100*50;Zt>99&&(en=1,tn=0),Zt<1&&(en=0,tn=50),$(".list__text .desc").css({opacity:en,transform:"translateY("+tn+"px)"})}else{$(".list__text .desc").css({opacity:0,transform:"translateY(50px)"})}if(pageYOffset>8627){var nn=(pageYOffset-8627)/213*100,sn=30-nn/100*30;nn>99&&(sn=0),nn<1&&(sn=50),$(".list__text .title span").css({transform:"translateY("+sn+"px)"})}else{$(".list__text .title span").css({transform:"translateY(30px)"})}if(pageYOffset>8524){var an=(pageYOffset-8524)/213*100,on=an/100*1;an>99&&(on=1),an<1&&(on=0),$(".list__col").eq(1).css({opacity:on})}else{$(".list__col").eq(1).css({opacity:0})}if(pageYOffset>8524){var rn=(pageYOffset-8524)/782*100,cn=$(window).height()-612;$(window).width()<1061&&(cn=$(window).height()-412);var ln=cn-cn*(rn/100);rn>99&&(ln=0),rn<1&&(ln=$(window).height()-612,$(window).width()<1061&&(ln=$(window).height()-412)),$(".list__col").eq(1).css({transform:"translateY("+ln+"px)"})}else{$(".list__col").eq(1).css({transform:"translateY("+$(window).height()-612+"px)"})}if(pageYOffset>9306){var fn=$(".list__col"),pn=(pageYOffset-9306)/714*100,dn=-1*(fn.eq(1).height()-$(window).height()),mn=dn*(pn/100);pn>99&&(mn=dn),fn.eq(1).css({transform:"translateY("+mn+"px)"})}if(pageYOffset>8627){var gn=(pageYOffset-8627)/213*100,hn=gn/100*1;gn>99&&(hn=1),gn<1&&(hn=0),$(".list__col").eq(2).css({opacity:hn})}else{$(".list__col").eq(2).css({opacity:0})}if(pageYOffset>8627){var _n=(pageYOffset-8627)/640*100,$n=$(window).height()-822;$(window).width()<1061&&($n=$(window).height()-412);var un=$n-$n*(_n/100);_n>99&&(un=0),_n<1&&(un=$(window).height()-822,$(window).width()<1061&&(un=$(window).height()-412)),$(".list__col").eq(2).css({transform:"translateY("+un+"px)"})}else{$(".list__col").eq(2).css({transform:"translateY("+$(window).height()-822+"px)"})}if(pageYOffset>9267){var vn=$(".list__col"),yn=(pageYOffset-9267)/753*100,wn=-1*(vn.eq(2).height()-$(window).height()),xn=wn*(yn/100);yn>99&&(xn=wn),vn.eq(2).css({transform:"translateY("+xn+"px)"})}}else{if(pageYOffset>8414){var Yn=(pageYOffset-8414)/200*100,bn=Yn/100*1;Yn>99&&(bn=1),Yn<1&&(bn=0);var On=$(".list"),Cn=$(".list__col"),kn=$(".list__text .arrow-link"),zn=$(".list__text .title span"),qn=$(".list__text .desc");On.css({opacity:1,"z-index":57}),Cn.css({opacity:0}),zn.css({transform:"translateY(30px)"}),qn.css({opacity:0}),Cn.css({opacity:bn}),kn.css({opacity:bn})}else{var En=$(".list"),Sn=$(".list__text .arrow-link");En.css({opacity:0,"z-index":50}),Sn.css({opacity:0})}if(pageYOffset>8414){var In=(pageYOffset-8414)/1094*100,Tn=$(window).height()-212;$(window).width()<1061&&(Tn=$(window).height()-212);var Rn=Tn-Tn*(In/100);In>99&&(Rn=0),In<1&&(Rn=$(window).height()-212);$(".list");var jn=$(".list__col");$(".list__text");jn.css({transform:"translateY("+Rn+"px)"})}else{$(".list__col").css({transform:"translateY("+$(window).height()-212+"px)"})}}if(pageYOffset>10020){var An=(pageYOffset-10020)/259*100,Mn=An/100*-260,Nn=1-An/100*1;An>99&&(Mn=-260,Nn=0),An<1&&(Nn=1,Mn=0),$(".list").css({opacity:Nn,transform:"translateY("+Mn+"px)"})}else if(pageYOffset>8414&&pageYOffset){$(".list").css({opacity:1,transform:"translateY(0px)"})}if(pageYOffset>10502){var Fn=(pageYOffset-10502)/214*100,Pn=40-Fn/100*40,Ln=Fn/100*1;Fn>99&&(Pn=0,Ln=1),Fn<1&&(Ln=0,Pn=40);var Bn=$(".event"),Xn=$(".event__title"),Un=$(".event__desc"),Wn=$(".event__text .arrow-link"),Dn=$(".event__video-block");Un.css({opacity:0}),Wn.css({opacity:0}),Dn.css({opacity:0}),Bn.css({opacity:1,"z-index":58}),Xn.css({opacity:Ln,transform:"translateY("+Pn+"px)"})}else{$(".event").css({opacity:0,"z-index":50})}if(pageYOffset>10621){var Hn=(pageYOffset-10621)/214*100,Jn=40-Hn/100*40,Gn=Hn/100*1;Hn>99&&(Jn=0,Gn=1),Hn<1&&(Gn=0,Jn=40),$(".event__desc").css({opacity:Gn,transform:"translateY("+Jn+"px)"})}else{$(".event__desc").css({opacity:0,transform:"translateY(40px)"})}if(pageYOffset>10716){var Kn=(pageYOffset-10716)/214*100,Qn=40-Kn/100*40,Vn=Kn/100*1;Kn>99&&(Qn=0,Vn=1),Kn<1&&(Vn=0,Qn=40),$(".event__text .arrow-link").css({opacity:Vn,transform:"translateY("+Qn+"px)"})}else{$(".event__text .arrow-link").css({opacity:0,transform:"translateY(40px)"})}if(pageYOffset>10835){var Zn=(pageYOffset-10835)/214*100,es=.1*(1-Zn/100*1)+1,ts=Zn/100*1;Zn>99&&(0,ts=1,es=1),Zn<1&&(ts=0,40,es=1.1);var ns=$(".event__video-block"),ss=$(".event__video");ns.css({opacity:ts}),ss.css({transform:"scale("+es+")"})}if(pageYOffset>10930){var as=(pageYOffset-10930)/214*100,is=as/100*1;as>99&&(is=1),as<1&&(is=0),$(".event__small").css({opacity:is})}else{$(".event__small").css({opacity:0})}if(pageYOffset>11049){var os=(pageYOffset-11049)/214*100,rs=os/100*1;os>99&&(rs=1),os<1&&(rs=0),$(".event__video-block .play").css({opacity:rs})}else{$(".event__video-block .play").css({opacity:0})}if(pageYOffset>11751){var cs=(pageYOffset-11751)/220*100,ls=cs/100*-220,fs=1-cs/100*1;cs>99&&(ls=-220,fs=0),cs<1&&(fs=1,ls=0),$(".event").css({opacity:fs,transform:"translateY("+ls+"px)"})}else if(pageYOffset>10502&&pageYOffset){$(".event").css({opacity:1,transform:"translateY(0px)"})}if(pageYOffset>12152){var ps=(pageYOffset-12152)/204*100,ds=50-ps/100*50,ms=ps/100*1;ps>99&&(ds=0,ms=1),ps<1&&(ms=0,ds=50);var gs=$(".blog"),hs=$(".blog__title");gs.css({opacity:1,"z-index":59}),hs.css({opacity:ms,transform:"translateY("+ds+"px)"})}else{$(".blog").css({opacity:0,"z-index":50})}if(pageYOffset>12356){var _s=$(".blog__list .list__row .item"),$s=(_s.length,0);_s.each((function(){var e=120*$s,t=12356+e,n=(pageYOffset-t)/(12563+e-t)*100,s=30-n/100*30,a=n/100*1;n>99&&(a=1,s=0),n<1&&(a=0,s=30),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),$s++}))}else{$(".blog__list .list__row .item").css({opacity:0,transform:"translateY(30px)"})}if(pageYOffset>13572){var us=(pageYOffset-13572)/198*100,vs=1-us/100*1;us>99&&(vs=0),us<1&&(vs=1),$(".blog").css({opacity:vs})}else if(pageYOffset>12152&&pageYOffset){$(".blog").css({opacity:1})}if($(window).width()>800){if(pageYOffset>13888){var ys=$(".home-about__big-block"),ws=(ys.length,0);$(".home-about").css({opacity:1,"z-index":60}),ys.each((function(){var e=189*ws,t=13888+e,n=(pageYOffset-t)/(14077+e-t)*100,s=50-n/100*50,a=n/100*1;n>99&&(a=1,s=0),n<1&&(a=0,s=50),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),ws++}))}else{var xs=$(".home-about__big-block");$(".home-about").css({opacity:0,"z-index":50}),xs.css({opacity:0,transform:"translateY(50px)"})}if(pageYOffset>14175){var Ys=(pageYOffset-14175)/189*100,bs=Ys;Ys>99&&(bs=100),Ys<1&&(bs=0),$(".home-about__container .top-line").css({"max-width":bs+"%"})}else{$(".home-about__container .top-line").css({"max-width":"0%"})}if(pageYOffset>14175){var Os=$(".home-about .coll__center"),Cs=(Os.length,0);Os.each((function(){var e=189*Cs,t=14175+e,n=(pageYOffset-t)/(14364+e-t)*100,s=15-n/100*15,a=n/100*1;n>99&&(a=1,s=0),n<1&&(a=0,s=15),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),Cs++}))}else{$(".home-about .coll__center").css({opacity:0,transform:"translateY(15px)"})}if(pageYOffset>14364){var ks=(pageYOffset-14364)/189*100,zs=ks;ks>99&&(zs=100),ks<1&&(zs=0),$(".home-about__container .bot-line").css({"max-width":zs+"%"})}else{$(".home-about__container .bot-line").css({"max-width":"0%"})}if(pageYOffset>14455){var qs=(pageYOffset-14455)/189*100,Es=30-qs/100*30,Ss=qs/100*1;qs>99&&(Es=0,Ss=1),qs<1&&(Ss=0,Es=30),$(".elba-coop").css({opacity:Ss,transform:"translateY("+Es+"px)"})}else{$(".elba-coop").css({opacity:0,transform:"translateY(30px)"})}}else{if(pageYOffset>13888){var Is=(pageYOffset-13888)/476*100,Ts=$(window).height()-212,Rs=Ts-Ts*(Is/100),js=Is/100*1;Is>99&&(js=1,Rs=0),Is<1&&(js=0,Rs=$(window).height()-212);var As=$(".home-about"),Ms=$(".home-about__big-block"),Ns=$(".elba-coop"),Fs=$(".home-about .coll__center");As.css({opacity:js,"z-index":60,transform:"translateY("+Rs+"px)"}),Ms.removeAttr("style"),Fs.removeAttr("style"),Ns.removeAttr("style")}else{$(".home-about").css({opacity:0,"z-index":50})}if(pageYOffset>14364){var Ps=$(".home-about"),Ls=(pageYOffset-14364)/280*100,Bs=-1*(Ps.height()-$(window).height()),Xs=Bs*(Ls/100);Ls>99&&(Xs=Bs),Ps.css({transform:"translateY("+Xs+"px)"})}}}}),f=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!n&&$(e.currentTarget);t=s&&s.hasClass("next")&&!n?"next":"prev",n&&(t="next"),s&&s.hasClass("dot")&&(t="dot");var a=$(".home-first__title--active"),i=$(".home-first__desc--active"),o=$(".home-first__title"),r=$(".home-first__desc"),c=null,l=null;if("next"===t?(c=a.next(".home-first__title").length>0?a.next(".home-first__title"):o.eq(0),l=i.next(".home-first__desc").length>0?i.next(".home-first__desc"):r.eq(0)):(c=a.prev(".home-first__title").length>0?a.prev(".home-first__title"):o.last(),l=i.prev(".home-first__desc").length>0?i.prev(".home-first__desc"):r.last()),"dot"===t){var f=s.index();c=o.eq(f),l=r.eq(f)}var p=c.index()+1;$(".home-first__video-line .first").html("0"+p);var d=$(".home-first__dots .dot");d.removeClass("dot--active"),d.eq(p-1).addClass("dot--active");var m=$(".wrapp--safe");m.css("min-height",m.height()+"px"),o.fadeOut(100).removeClass("home-first__title--active"),r.fadeOut(100).removeClass("home-first__desc--active"),setTimeout((function(){c.fadeIn("slow").addClass("home-first__title--active"),l.fadeIn("slow").addClass("home-first__desc--active")}),100)};$(document).ready((function(e){!function(){if(!($(".fullPage__box").length<1)){var e=$(window).height()+14700;$("body").css("height",e)}}(),s(),l(),setInterval((function(e){f(e,!0)}),4e3),$(".collections__slider").owlCarousel({margin:16,autoWidth:!0,loop:!1,nav:!0,navText:"",responsive:{0:{autoWidth:!1,items:1},650:{autoWidth:!0}}}),$(".list__inner-slider").owlCarousel({loop:!1,margin:0,item:1,autoWidth:!0,nav:!1,dots:!0}),$(".conf-mobile-slider").owlCarousel({loop:!1,margin:12,autoWidth:!0,nav:!1,dots:!1}),$(".blog__slider").owlCarousel({margin:12,loop:!1,nav:!1,items:1}),document.addEventListener("scroll",(function(){l()})),$(".header__mobile .menu").on("click",a),$(".option--visible").on("click",(function(e){!function(e){$(e.currentTarget).toggleClass("option--hidden")}(e)})),$(".order-new-element--material .new-material").on("click",(function(e){!function(e){$(".order-new-element--material .new-material").removeClass("new-material--active"),$(e.currentTarget).addClass("new-material--active")}(e)})),$(".order-buttons .item--add, .order-buttons .item--cancel").on("click",(function(e){var t,n;t=$(".order-new-element--main"),n=$("#order-title"),t.toggleClass("order-new-element--show"),t.hasClass("order-new-element--show")?n.html("New element"):n.html("Your order")})),$(".order-new-element--main .new-item").on("click",(function(e){!function(e){switch($(".order-new-element").removeClass("order-new-element--show"),$(e.currentTarget).attr("data-type")){case"body":$(".order-new-element--body").addClass("order-new-element--show");break;case"shape":$(".order-new-element--tabs").addClass("order-new-element--show");break;case"straps":$(".order-new-element--straps").addClass("order-new-element--show")}}(e)})),$(".order-tabs .item").on("click",(function(e){!function(e){var t=$(".order-new-element--tabs .order-list");t.removeClass("order-list--show"),$(".order-tabs .item").removeClass("item--active"),$(e.currentTarget).addClass("item--active"),t.eq($(e.currentTarget).index()).addClass("order-list--show")}(e)})),$(".configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link").on("click",(function(e){return i(e)})),$(".home-first__nav .nav__item, .home-first__dots .dot").on("click",(function(e){f(e)})),$(".configurator__sidebar .conf__slider-nav .conf-slider__btn").on("click",(function(e){!function(e){var t=$(".conf__slider "),n=$(".conf-slider__item"),s=+t.attr("data-slid"),a=$(".configurator__sidebar .conf__slider-nav .prev"),i=$(".configurator__sidebar .conf__slider-nav .next");$(e.currentTarget).hasClass("next")&&!$(e.currentTarget).hasClass("disabled")?(s+=1,a.removeClass("disabled")):$(e.currentTarget).hasClass("disabled")||(s-=1,i.removeClass("disabled")),0===s&&a.addClass("disabled"),t.attr("data-slid",s);var o=s+"00%)";n.css({transform:"translateX(-"+o}),(+t.attr("data-slid")==n.length-1||s>n.length)&&i.addClass("disabled")}(e)})),$(".order-head-cancel").on("click",o),$(".order-head-type").on("click",r),$(".order-head-modal").on("click",c),$(document).on("click",(function(e){var t=$(".configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link"),n=$(".conf-modal__body");t.is(e.target)||n.is(e.target)||0!==n.has(e.target).length||$(".conf-modal").hasClass("conf-modal--show")&&i(e)}))})),$(window).resize((function(){s(),l()}));document.getElementsByClassName(".catalog-btn");for(var p=document.getElementsByClassName(".acc-btn"),d=0;d<p.length;d++)p[d].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}]);