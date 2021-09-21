(()=>{"use strict";var t,e={875:()=>{const t={init:function(){if(document.body.classList.remove("no-js"),document.body.classList.add("js"),function(){for(var t=document.getElementsByTagName("section"),e=0,n=t.length;e<n;e++)t[e].setAttribute("tabindex",-1),t[e].className+=" focusable"}(),window.location.hash&&"#"!==window.location.hash){var t=document.querySelector(window.location.hash);if(t){var e=t.closest("div[hidden]");if(e)e.hidden=!1,e.previousElementSibling.querySelector("button").setAttribute("aria-expanded",!0),t.scrollIntoView()}}var n,o,a;document.querySelector(".js-header-nav-toggle").addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".header__nav").classList.toggle("header__nav--active")})),n=document.querySelectorAll(".dropdown > p, .dropdown > div.reading-header__toc__title"),Array.prototype.forEach.call(n,(function(t){t.innerHTML='\n\t\t\t\t<button type="button" aria-expanded="false">\n\t\t\t\t\t'.concat(t.innerHTML,'\n\t\t\t\t\t<svg role="img" class="arrow" width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg"><path d="M6.255 8L0 0h12.51z" fill="currentColor" fill-rule="evenodd"></path></svg>\n\t\t\t\t</button>\n\t\t\t\t');var e=t.nextElementSibling;e.hidden=!0;var n=t.querySelector("button"),o=t.querySelector("button > .arrow"),a=e.querySelectorAll("a");Array.prototype.forEach.call(a,(function(t){t.onblur=function(o){t===a[a.length-1]&&"LI"!==o.relatedTarget.parentNode.nodeName&&(n.setAttribute("aria-expanded",!1),e.hidden=!0)}}));var i=jQuery("button[aria-expanded] > svg"),r=jQuery("button[aria-expanded]");jQuery(r,i).on("click",(function(t){var a="true"===n.getAttribute("aria-expanded")||!1;n===t.target||o===t.target.closest("svg")?(n.setAttribute("aria-expanded",!a),e.hidden=a):(n.setAttribute("aria-expanded",!1),e.hidden=!0)})),document.onclick=function(t){var o="book-header__cover__downloads",a=jQuery(t.target),i=jQuery(".".concat(o)).find("button");0===i.length||a.closest("div").hasClass(o)||a.hasClass("dropdown-item")||"true"===i.attr("aria-expanded")&&(n.setAttribute("aria-expanded",!1),e.hidden=!0)},document.onkeydown=function(t){27!==t.which||e.hidden||(n.setAttribute("aria-expanded",!1),e.hidden=!0)}})),o=document.querySelectorAll(".toc__part--full > .toc__title__container, .toc__chapter--full > .toc__title__container, .toc__front-matter--full > .toc__title__container, .toc__back-matter--full > .toc__title__container"),a=document.body.classList.contains("home"),Array.prototype.forEach.call(o,(function(t){var e=!!(a&&t.parentNode.classList.contains("toc__part")||!a&&t.parentNode.classList.contains("toc__parent")),n="".concat(pressbooksBook.toggle_contents," '").concat(t.innerText,"'");t.innerHTML="\n\t\t\t\t<span>".concat(t.innerHTML,'</span>\n\t\t\t\t<button type="button" aria-expanded="').concat(e,'" aria-label="').concat(n,'">\n\t\t\t\t\t<svg viewBox="0 0 9 9" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t<rect class="vert" height="7" width="1" y="1" x="4" />\n\t\t\t\t\t\t<rect height="1" width="7" y="4" x="1" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t');var o=t.nextElementSibling;!1===e||!a&&!t.parentNode.classList.contains("toc__parent")?o.hidden=!0:a&&t.parentNode.classList.contains("toc__parent")&&(o.hidden=!1);var i=t.querySelector("button");i.onclick=function(){var t="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!t),o.hidden=t}})),jQuery((function(t){var e=t(".h5p-row-item"),n=t(".h5p-activity-container");n.hide(),t("#h5p-show-hide").text(t("#h5p-show-hide").attr("show-all-text")),t(".h5p-row-item").text(t(".h5p-row-item").attr("show-activity-text")),e.on("click",(function(){t(this).text()===t(this).attr("show-activity-text")?(n.hide(),t(this).closest("tr").next(this).show("slow"),t(this).text(t(this).attr("hide-activity-text")),window.dispatchEvent(new Event("resize"))):(t(this).closest("tr").next(this).hide(),t(this).text(t(this).attr("show-activity-text")))})),t("#h5p-show-hide").on("click",(function(){t(this).text()===t(this).attr("show-all-text")?(n.show(),t(this).text(t(this).attr("hide-all-text")),t(".h5p-row-item").text(t(".h5p-row-item").attr("hide-activity-text")),window.dispatchEvent(new Event("resize"))):(n.hide(),t(this).text(t(this).attr("show-all-text")),t(".h5p-row-item").text(t(".h5p-row-item").attr("show-activity-text")))}))}))},finalize:function(){}},e={init:function(){jQuery((function(t){t(document.body).on("click",".js-toggle-block",(function(e){var n=t(this);n.parents(".js-block").toggleClass("block-toggle--visible"),n.toggleClass("--visible")})),t(document.body).on("click",".toc__toggle #show",(function(e){var n=t(this);t('.toc [class*="--full"]').each((function(e){t(this).find("button").attr("aria-expanded","true"),t(this).find("ol").prop("hidden",!1)})),n.parents(".toc__toggle").attr("aria-expanded","true")})),t(document.body).on("click",".toc__toggle #hide",(function(e){var n=t(this);t('.toc [class*="--full"]').each((function(e){t(this).find("button").attr("aria-expanded","false"),t(this).find("ol").attr("hidden","true")})),n.parents(".toc__toggle").attr("aria-expanded","false")}))}))},finalize:function(){}},n={init:function(){jQuery((function(t){var e=t(".block-reading-meta__compare__toggle");e.on("click",(function(n){var o=t(".block-reading-meta__compare__activity"),a=t(".alert"),i=t(".block-reading-meta__compare__comparison"),r=t(".block-reading-meta__compare__stats"),c=t(".block-reading-meta__compare__current");if(a.addClass("visually-hidden"),"false"===t(n.currentTarget).attr("aria-expanded"))if(e.attr("aria-expanded",!0),o.prop("hidden",!1),i.hasClass("populated"))i.prop("hidden",!1),o.attr("hidden",!0);else{a.text(pressbooksBook.comparison_loading);var s=c.html(),d=c.attr("data-source-endpoint");fetch(d).then((function(e){if(200!==e.status)return a.addClass("alert--error").removeClass("visually-hidden").text(pressbooksBook.chapter_not_loaded),void o.attr("hidden",!0);e.json().then((function(e){var n=t("<div>"+e.content.raw+"</div>").html();t.post(pressbooksBook.ajaxurl,{action:"text_diff",security:pressbooksBook.text_diff_nonce,left:n,right:s},(function(e){if(!0===e.success){var n=JSON.parse(e.data);i.append(n),i.children("table");var c=t(".diff del").length,s=t(".diff ins").length;r.children("ins").children(".num").text(s),r.children("del ").children(".num").text(c),o.attr("hidden",!0),a.text(pressbooksBook.comparison_loaded),i.prop("hidden",!1)}}))}))})).catch((function(t){a.addClass("alert--error").removeClass("visually-hidden").text(pressbooksBook.chapter_not_loaded),o.attr("hidden",!0)}))}else e.attr("aria-expanded",!1),i.attr("hidden",!0),t(".diff").remove()})),t(document).ready((function(){var e;t(window).on("scroll",(function(){t(window).scrollTop()>250&&t(".nav-reading__up").animate({opacity:1},0),t(window).scrollTop()<250&&t(".nav-reading__up").animate({opacity:0},0)})),t(".nav-reading__up").on("click",(function(e){return e.preventDefault(),t(".nav-reading__up").blur().animate({opacity:0},0),t("html, body").animate({scrollTop:0},0),!1})),t(document).on("keydown",(function(e){if(!t("body").hasClass("no-navigation")){var n=!1;37===e.which?n=t(".nav-previous a, .js-nav-previous a").attr("href"):39===e.which&&(n=t(".nav-next a, .js-nav-next a").attr("href")),n&&!t("textarea, input").is(":focus")&&(window.location=n)}})),(e=t("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com']")).each((function(){t(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")})),t(window).on("resize",(function(){e.each((function(){var e=t(this),n=e.parent().parent().width();e.width(n).height(n*e.data("aspectRatio"))}))})).trigger("resize")}))}))},finalize:function(){}},o=function(t){return"".concat(t.charAt(0).toLowerCase()).concat(t.replace(/[\W_]/g,"|").split("|").map((function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))})).join("").slice(1))};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=e}var e,n,i;return e=t,(n=[{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments.length>2?arguments[2]:void 0,o=""!==t&&this.routes[t]&&"function"==typeof this.routes[t][e];o&&this.routes[t][e](n)}},{key:"loadEvents",value:function(){var t=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o).forEach((function(e){t.fire(e),t.fire(e,"finalize")})),this.fire("common","finalize")}}])&&a(e.prototype,n),i&&a(e,i),t}())({common:t,home:e,single:n});jQuery(document).ready((function(){return i.loadEvents()}))},340:()=>{},811:()=>{}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,a,i)=>{if(!n){var r=1/0;for(d=0;d<t.length;d++){for(var[n,a,i]=t[d],c=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((t=>o.O[t](n[s])))?n.splice(s--,1):(c=!1,i<r&&(r=i));c&&(t.splice(d--,1),e=a())}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,a,i]},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={370:0,97:0,765:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,[r,c,s]=n,d=0;for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var l=s(o);for(e&&e(n);d<r.length;d++)i=r[d],o.o(t,i)&&t[i]&&t[i][0](),t[r[d]]=0;return o.O(l)},n=self.webpackChunk_pressbooks_pressbooks_book=self.webpackChunk_pressbooks_pressbooks_book||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.O(void 0,[97,765],(()=>o(875))),o.O(void 0,[97,765],(()=>o(340)));var a=o.O(void 0,[97,765],(()=>o(811)));a=o.O(a)})();