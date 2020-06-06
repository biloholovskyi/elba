!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){var s=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(s(a,o),a.locals?a.locals:{});e.exports=i},function(e,t,n){"use strict";var s,a=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function r(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},s=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],l=n[c]||0,f="".concat(c," ").concat(l);n[c]=l+1;var d=r(f),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:f,updater:u(p,t),references:1}),s.push(f)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var a=n.nc;a&&(s.nonce=a)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var f,d=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,s){var a=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var s=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var g=null,h=0;function u(e,t){var n,s,a;if(t.singleton){var o=h++;n=g||(g=l(t)),s=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=l(t),s=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var a=r(n[s]);i[a].references--}for(var o=c(e,t),l=0;l<n.length;l++){var f=r(n[l]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var a=(i=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),o=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,r,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(s)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);s&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){$(document).ready((function(){$("#factory-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#blog-owl").owlCarousel({margin:10,loop:!0,nav:!0,items:1}),$("#single-owl").owlCarousel({margin:10,loop:!0,nav:!1,items:1}),$("#single-news-owl").owlCarousel({margin:10,loop:!0,nav:!1,dots:!1,items:3,responsive:{0:{items:1},991:{items:3}}})}))},function(e,t){function n(){$("#accordeon .hidden").not($(this).next()),$(this).next().toggleClass("active")}$(document).ready((function(){$("#accordeon .head").on("click",n)}))},function(e,t){$(document).ready((function(){$(".price__quick").on("click",(function(){$(".catalog-overlay").show().css("display","flex"),$("body").css({overflow:"hidden"})})),$(".img-block .small-img").on("click",(function(){var e=$(this).attr("src");$(".img-main ").css("background-image","url("+e+")")})),$(".catalog-close").on("click",(function(){$(".catalog-overlay").hide(),$("body").css({overflow:"visible"})}))})),$(document).on("click",(function(e){var t=$(".catalog-modal"),n=$(".price__quick");n.is(e.target)||0!==n.has(e.target).length||t.is(e.target)||0!==t.has(e.target).length||$(".catalog-overlay").hide()}))},function(e,t){$(document).ready((function(){$(".search-btn").on("click",(function(){var e=$(".search-inp").val();$(".inner-inp").html(e),$(".visability-title").css("display","none"),$(".hidden-title").fadeIn("slow").css("display","block"),$(".hidden-title-mobile").fadeIn("slow").css("display","block")})),$(".reset").bind("click",(function(){$("input[type=text]").val(""),$(".visability-title").css("display","block"),$(".hidden-title").fadeOut("slow").css("display","none"),$(".hidden-title-mobile").fadeOut("slow").css("display","none")}))}))},function(e,t){$(document).ready((function(){$(".acc-btn").on("click",(function(){$(this).toggleClass("active")})),$(".color-btn").on("click",(function(){$(this).toggleClass("active")})),$(".method_type button").on("click",(function(){$(this).toggleClass("active")}))}))},function(e,t){$(document).ready((function(){$((function(){var e=$("#top_nav"),t=$(this).scrollTop();t>150&&e.css("top",0),$(window).scroll((function(){(t=$(this).scrollTop())+0<150?e.css("top",150-t):e.css("top",0)}))}))}))},function(e,t){$(document).ready((function(){$(".sign_in").on("click",(function(){$(".sign_in-wrap").toggleClass("active")})),$(".basket").on("click",(function(){$(".basket-wrap").toggleClass("active")})),$(".dlt-click").on("click",(function(){$(".dlt-Adress-overlay").fadeIn("slow").css("display","flex")})),$(".pass-close").on("click",(function(){$(".dlt-Adress-overlay").fadeOut("slow").css("display","none")}))})),$(document).on("click",(function(e){var t=$(".dlt-click"),n=$(".pass-modal");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||$(".dlt-Adress-overlay").fadeOut("slow").css("display","none")})),$(document).mouseup((function(e){var t=$(".active");t.is(e.target)||0!==t.has(e.target).length||$(e.target).hasClass("btn")||t.removeClass("active")}))},function(e,t){$("select").each((function(){var e=$(this),t=$(this).children("option").length;e.addClass("select-hidden"),e.wrap('<div class="select"></div>'),e.after('<div class="select-styled"></div>');var n=e.next("div.select-styled");n.text(e.children("option").eq(0).text());for(var s=$("<ul />",{class:"select-options"}).insertAfter(n),a=0;a<t;a++)$("<li />",{text:e.children("option").eq(a).text(),rel:e.children("option").eq(a).val()}).appendTo(s);var o=s.children("li");n.click((function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each((function(){$(this).removeClass("active").next("ul.select-options").hide()})),$(this).toggleClass("active").next("ul.select-options").toggle()})),o.click((function(t){t.stopPropagation(),n.text($(this).text()).removeClass("active"),e.val($(this).attr("rel")),s.hide()})),$(document).click((function(){n.removeClass("active"),s.hide()}))}))},function(e,t,n){"use strict";n.r(t);n(0);var s=function(){var e=$(".event__video-block");e.length>0&&e.css("height",e.width()+"px")},a=function(){$(".modal-menu").toggleClass("modal-menu--active"),$(".header__mobile .menu").toggleClass("menu--show"),$("body").toggleClass("stop-scroll")},o=(n(4),function(e){e.preventDefault();var t=$(".conf-modal"),n=$(".header");t.toggleClass("conf-modal--show"),t.hasClass("conf-modal--show")?(n.css("z-index","1"),$("body").css({overflow:"hidden"})):(n.css("z-index","60"),$("body").css("overflow","visible"))}),i=function(){$(".order-new-element").removeClass("order-new-element--show")},r=function(){$(".order-new-element").removeClass("order-new-element--show"),$(".order-new-element--main").addClass("order-new-element--show")},c=function(){$(".conf-modal").removeClass("conf-modal--show"),$(".header").css("z-index","60"),$("body").css("overflow","visible")},l=(n(5),n(6),n(7),n(8),function(){if(!($(".fullPage__box").length<1)){if(console.log(pageYOffset),0===pageYOffset)$(".home-first").css({opacity:1});if(pageYOffset>0){var e=1-(pageYOffset-1)/199*100/100*1;e<.1&&(e=0),e>.9&&(e=1),$(".home-first").css({opacity:e})}if(pageYOffset>200){var t=(pageYOffset-200)/202*100,n=t/100*1,s=100-t/100*100;t>99&&(n=1,s=0),t<1&&(n=0,s=100);var a=$(".home-text__title");$(".home-text").eq(0).css({opacity:1}),a.css({opacity:n,transform:"translateY("+s+"px)"})}else{var o=$(".home-text").eq(0),i=$(".home-text__desc"),r=$(".home-text__title");o.css({opacity:0}),r.css({transform:"translateY(100px)"}),i.css({opacity:0})}if(pageYOffset>295){var c=(pageYOffset-295)/216*100,l=c/100*1,f=100-c/100*100;c>99&&(l=1,f=0),c<1&&(l=0,f=100),$(".home-text__desc").css({opacity:l,transform:"translateY("+f+"px)"})}else{$(".home-text__desc").css({transform:"translateY(100px)"})}if(pageYOffset>1e3){var d=(pageYOffset-1e3)/200*100,p=1-d/100*1,m=d/100*-100;d>99&&(p=0,m=-100),d<1&&(p=1,m=0),$(".home-text__title").css({opacity:p,transform:"translateY("+m+"px)"})}if(pageYOffset>1100){var g=(pageYOffset-1100)/200*100,h=1-g/100*1,u=g/100*-100;g>99&&(h=0,u=-100),g<1&&(h=1,u=0),$(".home-text__desc").css({opacity:h,transform:"translateY("+u+"px)"})}if(pageYOffset>1400){var _=(pageYOffset-1400)/200*100,v=_/100*1;_>99&&(v=1),_<1&&(v=0);var y=$(".image-text__img--1"),b=$(".image-text__img--2"),x=$(".image-text__img--3");$(".image-text").eq(0).css({opacity:1}),y.css({opacity:v}),b.css({opacity:v}),x.css({opacity:v})}else{$(".image-text").eq(0).css({opacity:0})}if(pageYOffset>1850){var w=(pageYOffset-1850)/200*100,Y=60-w/100*60;w>99&&(Y=0),w<1&&(Y=60),$(".image-text__title").eq(0).children("span").css({transform:"translateY("+Y+"px)"})}else{$(".image-text__title").eq(0).children("span").css({transform:"translateY(60px)"})}if(pageYOffset>1945){var O=(pageYOffset-1945)/300*100,C=O/100*1,k=60-O/100*60;O>99&&(k=0,C=1),O<1&&(k=60,C=0),$(".image-text__desc").eq(0).css({transform:"translateY("+k+"px)",opacity:C})}else{$(".image-text__desc").eq(0).css({transform:"translateY(60px)",opacity:0})}if(pageYOffset>2610){var z=(pageYOffset-2610)/200*100,E=z/100*60;z>99&&(E=60),z<1&&(E=0),$(".image-text__title").eq(0).children("span").css({transform:"translateY("+E+"px)"})}if(pageYOffset>3005){var q=(pageYOffset-3005)/200*100,S=1-q/100*1,I=q/100*60;q>99&&(I=60,S=0),q<1&&(I=0,S=1),$(".image-text__desc").eq(0).css({transform:"translateY("+I+"px)",opacity:S})}if(pageYOffset>3205){var T=(pageYOffset-3205)/205*100,R=T/100*1;T>99&&(R=1),T<1&&(R=0);var A=$(".image-text__img--1"),j=$(".image-text__img--2"),M=$(".image-text__img--3"),N=$(".image-text__img--4");$(".image-text").eq(1).css({opacity:1}),A.css({opacity:0}),j.css({opacity:0}),M.css({opacity:0}),N.css({opacity:R})}else{$(".image-text").eq(1).css({opacity:0})}if(pageYOffset>3410){var F=(pageYOffset-3410)/185*100,P=60-F/100*60;F>99&&(P=0),F<1&&(P=60),$(".image-text__title").eq(1).children("span").css({transform:"translateY("+P+"px)"})}else{$(".image-text__title").eq(1).children("span").css({transform:"translateY(60px)"})}if(pageYOffset>3505){var L=(pageYOffset-3505)/185*100,B=L/100*1,U=60-L/100*60;L>99&&(U=0,B=1),L<1&&(U=60,B=0),$(".image-text__desc").eq(1).css({transform:"translateY("+U+"px)",opacity:B})}else{$(".image-text__desc").eq(1).css({transform:"translateY(60px)",opacity:0})}if(pageYOffset>4150){var W=(pageYOffset-4150)/176*100,D=W/100*60;W>99&&(D=60),W<1&&(D=0),$(".image-text__title").eq(1).children("span").css({transform:"translateY("+D+"px)"})}if(pageYOffset>4238){var X=(pageYOffset-4238)/176*100,H=1-X/100*1,J=X/100*60;X>99&&(J=60,H=0),X<1&&(J=0,H=1),$(".image-text__desc").eq(1).css({transform:"translateY("+J+"px)",opacity:H})}if(pageYOffset>4414){var G=(pageYOffset-4414)/100*100,K=1-G/100*1;G>99&&(K=0),G<1&&(K=1),$(".image-text").eq(1).css({opacity:K})}if(pageYOffset>4614){var Q=(pageYOffset-4614)/100*100,V=Q/100*1;Q>99&&(V=1),Q<1&&(V=0);var Z=$(".shape__img--1"),ee=$(".shape__text"),te=$(".shape");ee.css({transform:"translateY(100%)"}),te.css({opacity:1}),Z.css({opacity:V})}else{var ne=$(".shape__img--1");$(".shape").css({opacity:0}),ne.css({opacity:0})}if(pageYOffset>4714){var se=(pageYOffset-4714)/100*100,ae=se/100*1,oe=se/100*-22.5,ie=se/100*-45,re=se/100*-67.5,ce=se/100*-90,le=se/100*-112.5,fe=se/100*-135,de=se/100*-157.5;se>99&&(ae=1,oe=-22.5,ie=-45,re=-67.5,ce=-90,le=-112.5,fe=-135,de=-157.5),se<1&&(ae=0,oe=0,ie=0,re=0,ce=0,le=0,fe=0,de=0);var pe=$(".shape__img--2"),me=$(".shape__img--3"),ge=$(".shape__img--4"),he=$(".shape__img--5"),ue=$(".shape__img--6"),_e=$(".shape__img--7"),ve=$(".shape__img--8");pe.css({opacity:ae,transform:"rotate("+oe+"deg)"}),me.css({opacity:ae,transform:"rotate("+ie+"deg)"}),ge.css({opacity:ae,transform:"rotate("+re+"deg)"}),he.css({opacity:ae,transform:"rotate("+ce+"deg)"}),ue.css({opacity:ae,transform:"rotate("+le+"deg)"}),_e.css({opacity:ae,transform:"rotate("+fe+"deg)"}),ve.css({opacity:ae,transform:"rotate("+de+"deg)"})}else{var $e=$(".shape__img--2"),ye=$(".shape__img--3"),be=$(".shape__img--4"),xe=$(".shape__img--5"),we=$(".shape__img--6"),Ye=$(".shape__img--7"),Oe=$(".shape__img--8");$e.css({opacity:0,transform:"rotate(0deg)"}),ye.css({opacity:0,transform:"rotate(0deg)"}),be.css({opacity:0,transform:"rotate(0deg)"}),xe.css({opacity:0,transform:"rotate(0deg)"}),we.css({opacity:0,transform:"rotate(0deg)"}),Ye.css({opacity:0,transform:"rotate(0deg)"}),Oe.css({opacity:0,transform:"rotate(0deg)"})}if(pageYOffset>4914){var Ce=(pageYOffset-4914)/100*100,ke=Ce/100*1;Ce>99&&(ke=1),Ce<1&&(ke=0),$(".shape__circle--1").css({opacity:ke})}else{$(".shape__circle--1").css({opacity:0})}if(pageYOffset>4934){var ze=(pageYOffset-4934)/100*100,Ee=ze/100*1;ze>99&&(Ee=1),ze<1&&(Ee=0),$(".shape__circle--2").css({opacity:Ee})}else{$(".shape__circle--2").css({opacity:0})}if(pageYOffset>4954){var qe=(pageYOffset-4954)/100*100,Se=qe/100*1;qe>99&&(Se=1),qe<1&&(Se=0),$(".shape__circle--3").css({opacity:Se})}else{$(".shape__circle--3").css({opacity:0})}if(pageYOffset>4974){var Ie=(pageYOffset-4974)/100*100,Te=Ie/100*1;Ie>99&&(Te=1),Ie<1&&(Te=0),$(".shape__circle--4").css({opacity:Te})}else{$(".shape__circle--4").css({opacity:0})}if(pageYOffset>4994){var Re=(pageYOffset-4994)/100*100,Ae=Re/100*1;Re>99&&(Ae=1),Re<1&&(Ae=0),$(".shape__circle--5").css({opacity:Ae})}else{$(".shape__circle--5").css({opacity:0})}if(pageYOffset>5014){var je=(pageYOffset-5014)/100*100,Me=je/100*1;je>99&&(Me=1),je<1&&(Me=0),$(".shape__circle--6").css({opacity:Me})}else{$(".shape__circle--6").css({opacity:0})}if(pageYOffset>5034){var Ne=(pageYOffset-5034)/100*100,Fe=Ne/100*1;Ne>99&&(Fe=1),Ne<1&&(Fe=0),$(".shape__circle--7").css({opacity:Fe})}else{$(".shape__circle--7").css({opacity:0})}if(pageYOffset>5054){var Pe=(pageYOffset-5054)/100*100,Le=Pe/100*1;Pe>99&&(Le=1),Pe<1&&(Le=0),$(".shape__circle--8").css({opacity:Le})}else{$(".shape__circle--8").css({opacity:0})}if(pageYOffset>5074){var Be=(pageYOffset-5074)/100*100,Ue=Be/100*1;Be>99&&(Ue=1),Be<1&&(Ue=0),$(".shape__circle--9").css({opacity:Ue})}else{$(".shape__circle--9").css({opacity:0})}if(pageYOffset>5094){var We=(pageYOffset-5094)/100*100,De=We/100*1;We>99&&(De=1),We<1&&(De=0),$(".shape__circle--10").css({opacity:De})}else{$(".shape__circle--10").css({opacity:0})}if(pageYOffset>5114){var Xe=(pageYOffset-5114)/100*100,He=Xe/100*1;Xe>99&&(He=1),Xe<1&&(He=0),$(".shape__circle--11").css({opacity:He})}else{$(".shape__circle--11").css({opacity:0})}if(pageYOffset>5134){var Je=(pageYOffset-5134)/100*100,Ge=Je/100*1;Je>99&&(Ge=1),Je<1&&(Ge=0),$(".shape__circle--12").css({opacity:Ge})}else{$(".shape__circle--12").css({opacity:0})}if(pageYOffset>5154){var Ke=(pageYOffset-5154)/100*100,Qe=Ke/100*1;Ke>99&&(Qe=1),Ke<1&&(Qe=0),$(".shape__circle--13").css({opacity:Qe})}else{$(".shape__circle--13").css({opacity:0})}if(pageYOffset>5174){var Ve=(pageYOffset-5174)/100*100,Ze=Ve/100*1;Ve>99&&(Ze=1),Ve<1&&(Ze=0),$(".shape__circle--14").css({opacity:Ze})}else{$(".shape__circle--14").css({opacity:0})}if(pageYOffset>5194){var et=(pageYOffset-5194)/100*100,tt=et/100*1;et>99&&(tt=1),et<1&&(tt=0),$(".shape__circle--15").css({opacity:tt})}else{$(".shape__circle--15").css({opacity:0})}if(pageYOffset>5214){var nt=(pageYOffset-5214)/100*100,st=nt/100*1;nt>99&&(st=1),nt<1&&(st=0),$(".shape__circle--16").css({opacity:st})}else{$(".shape__circle--16").css({opacity:0})}if(pageYOffset>5414){var at=(pageYOffset-5414)/200*100,ot=at/100*429;at>99&&(ot=429),at<1&&(ot=0),$(".shape__imgs").css({transform:"translateX("+ot+"px)"})}else{$(".shape__imgs").css({transform:"translateX(0)"})}if(pageYOffset>5523){var it=(pageYOffset-5523)/291*100,rt=100-it;it>99&&(rt=0),it<1&&(rt=100),$(".shape__text").css({transform:"translateY("+rt+"%)"})}else{$(".shape__text").css({transform:"translateY(100%)"})}if(pageYOffset>5814){var ct=(pageYOffset-5814)/200*100,lt=1-ct/100*1;ct>99&&(lt=0),ct<1&&(lt=1),$(".shape").css({opacity:lt})}if(pageYOffset>6114){var ft=(pageYOffset-6114)/206*100,dt=60-ft/100*60,pt=ft/100*1;ft>99&&(pt=1,dt=0),ft<1&&(pt=0,dt=60);var mt=$(".collections"),gt=$(".collections .collect__nav-box .title"),ht=$(".collections__slider .collect-slider__item");mt.css({opacity:1}),gt.css({opacity:pt,transform:"translateY("+dt+"px"}),ht.css({opacity:0})}else{var ut=$(".collections"),_t=$(".collections .collect__nav-box .title");ut.css({opacity:0}),_t.css({opacity:0,transform:"translateY(60px"})}if(pageYOffset>6221){var vt=(pageYOffset-6221)/206*100,$t=vt/100*1;vt>99&&($t=1),vt<1&&($t=0),$(".collections__slider .owl-nav").css({opacity:$t})}else{$(".collections__slider .owl-nav").css({opacity:0})}if(pageYOffset>6427){var yt=$(".collections__slider .collect-slider__item"),bt=(yt.length,0);yt.each((function(){var e=118*bt,t=6427+e,n=(pageYOffset-t)/(6671+e-t)*100,s=60-n/100*60,a=n/100*1;n>99&&(a=1,s=0),n<1&&(a=0,s=60),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),bt++}))}else{$(".collections__slider .collect-slider__item").css({opacity:0,transform:"translateY(60px)"})}if(pageYOffset>7700){var xt=(pageYOffset-7700)/205*100,wt=xt/100*-60,Yt=1-xt/100*1;xt>99&&(Yt=0,wt=-60),xt<1&&(Yt=1,wt=0),$(".collections .collect__nav-box .title").css({opacity:Yt,transform:"translateY("+wt+"px"})}if(pageYOffset>7804){var Ot=(pageYOffset-7804)/205*100,Ct=1-Ot/100*1;Ot>99&&(Ct=0),Ot<1&&(Ct=1),$(".collections__slider .owl-nav").css({opacity:Ct})}if(pageYOffset>8009){var kt=$(".collections__slider .collect-slider__item"),zt=0;kt.each((function(){var e=94*zt,t=8009+e,n=(pageYOffset-t)/(8214+e-t)*100,s=n/100*-60,a=1-n/100*1;n>99&&(a=0,s=-60),n<1&&(a=1,s=0),$(this).css({opacity:a,transform:"translateY("+s+"px)"}),zt++}))}if(pageYOffset>9050){var Et=(pageYOffset-9050)/1606*100,qt=654-Et/100*654,St=Et/100*1;Et>99&&(St=1,qt=0),Et<1&&(St=0,qt=654);var It=$(".list"),Tt=$(".list__col"),Rt=$(".list__text");It.css({opacity:1,"z-index":1e4}),Tt.css({opacity:0}),Rt.css({opacity:0}),Tt.eq(0).css({opacity:St,transform:"translateY("+qt+"px)"})}else{$(".list").css({opacity:0})}}}),f=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!n&&$(e.currentTarget);t=s&&s.hasClass("next")&&!n?"next":"prev",n&&(t="next"),s&&s.hasClass("dot")&&(t="dot");var a=$(".home-first__title--active"),o=$(".home-first__desc--active"),i=$(".home-first__title"),r=$(".home-first__desc"),c=null,l=null;if("next"===t?(c=a.next(".home-first__title").length>0?a.next(".home-first__title"):i.eq(0),l=o.next(".home-first__desc").length>0?o.next(".home-first__desc"):r.eq(0)):(c=a.prev(".home-first__title").length>0?a.prev(".home-first__title"):i.last(),l=o.prev(".home-first__desc").length>0?o.prev(".home-first__desc"):r.last()),"dot"===t){var f=s.index();c=i.eq(f),l=r.eq(f)}var d=c.index()+1;$(".home-first__video-line .first").html("0"+d);var p=$(".home-first__dots .dot");p.removeClass("dot--active"),p.eq(d-1).addClass("dot--active");var m=$(".wrapp--safe");m.css("min-height",m.height()+"px"),i.fadeOut(100).removeClass("home-first__title--active"),r.fadeOut(100).removeClass("home-first__desc--active"),setTimeout((function(){c.fadeIn("slow").addClass("home-first__title--active"),l.fadeIn("slow").addClass("home-first__desc--active")}),100)};n(9),n(10),n(11);$(document).ready((function(e){$(".fullPage__box").length<1||$("body").css("height","16074px"),s(),l(),setInterval((function(e){f(e,!0)}),4e3),$(".collections__slider").owlCarousel({margin:16,autoWidth:!0,loop:!1,nav:!0,navText:"",responsive:{0:{autoWidth:!1,items:1},650:{autoWidth:!0}}}),$(".list__inner-slider").owlCarousel({loop:!1,margin:0,item:1,autoWidth:!0,nav:!1,dots:!0}),$(".conf-mobile-slider").owlCarousel({loop:!1,margin:12,autoWidth:!0,nav:!1,dots:!1}),$(".blog__slider").owlCarousel({margin:12,loop:!1,nav:!1,items:1}),document.addEventListener("scroll",(function(){l()})),$(".header__mobile .menu").on("click",a),$(".option--visible").on("click",(function(e){!function(e){$(e.currentTarget).toggleClass("option--hidden")}(e)})),$(".order-new-element--material .new-material").on("click",(function(e){!function(e){$(".order-new-element--material .new-material").removeClass("new-material--active"),$(e.currentTarget).addClass("new-material--active")}(e)})),$(".order-buttons .item--add, .order-buttons .item--cancel").on("click",(function(e){var t,n;t=$(".order-new-element--main"),n=$("#order-title"),t.toggleClass("order-new-element--show"),t.hasClass("order-new-element--show")?n.html("New element"):n.html("Your order")})),$(".order-new-element--main .new-item").on("click",(function(e){!function(e){switch($(".order-new-element").removeClass("order-new-element--show"),$(e.currentTarget).attr("data-type")){case"body":$(".order-new-element--body").addClass("order-new-element--show");break;case"shape":$(".order-new-element--tabs").addClass("order-new-element--show");break;case"straps":$(".order-new-element--straps").addClass("order-new-element--show")}}(e)})),$(".order-tabs .item").on("click",(function(e){!function(e){var t=$(".order-new-element--tabs .order-list");t.removeClass("order-list--show"),$(".order-tabs .item").removeClass("item--active"),$(e.currentTarget).addClass("item--active"),t.eq($(e.currentTarget).index()).addClass("order-list--show")}(e)})),$(".configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link").on("click",(function(e){return o(e)})),$(".home-first__nav .nav__item, .home-first__dots .dot").on("click",(function(e){f(e)})),$(".configurator__sidebar .conf__slider-nav .conf-slider__btn").on("click",(function(e){!function(e){var t=$(".conf__slider "),n=$(".conf-slider__item"),s=+t.attr("data-slid"),a=$(".configurator__sidebar .conf__slider-nav .prev"),o=$(".configurator__sidebar .conf__slider-nav .next");$(e.currentTarget).hasClass("next")&&!$(e.currentTarget).hasClass("disabled")?(s+=1,a.removeClass("disabled")):$(e.currentTarget).hasClass("disabled")||(s-=1,o.removeClass("disabled")),0===s&&a.addClass("disabled"),t.attr("data-slid",s);var i=s+"00%)";n.css({transform:"translateX(-"+i}),(+t.attr("data-slid")==n.length-1||s>n.length)&&o.addClass("disabled")}(e)})),$(".order-head-cancel").on("click",i),$(".order-head-type").on("click",r),$(".order-head-modal").on("click",c),$(document).on("click",(function(e){var t=$(".dlt-click"),n=$(".pass-modal");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||$(".dlt-Adress-overlay").fadeOut("slow").css("display","none");var s=$(".configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link"),a=$(".conf-modal__body");s.is(e.target)||a.is(e.target)||0!==a.has(e.target).length||$(".conf-modal").hasClass("conf-modal--show")&&o(e)}))})),$(window).resize((function(){s(),l()}));document.getElementsByClassName(".catalog-btn");for(var d=document.getElementsByClassName(".acc-btn"),p=0;p<d.length;p++)d[p].addEventListener("click",(function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}]);