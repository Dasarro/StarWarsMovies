!function(n){var r={};function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var a in n)e.d(t,a,function(r){return n[r]}.bind(null,a));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=21)}([function(n,r,e){var t=e(1);"string"==typeof t&&(t=[[n.i,t,""]]);var a={insert:"head",singleton:!1};e(19)(t,a);t.locals&&(n.exports=t.locals)},function(n,r,e){r=n.exports=e(2)(!1);var t=e(3),a=t(e(4)),o=t(e(5)),i=t(e(6)),c=t(e(7)),s=t(e(8)),d=t(e(9)),l=t(e(10)),u=t(e(11)),p=t(e(12)),m=t(e(13)),f=t(e(14)),g=t(e(15)),h=t(e(16)),b=t(e(17)),_=t(e(18));r.push([n.i,"@font-face {\r\n    font-family: Star-Jedi;\r\n    src: url("+a+");\r\n}\r\n\r\n@font-face {\r\n    font-family: Star-Jedi-Hol;\r\n    src: url("+o+");\r\n}\r\n\r\n:root {\r\n    --star-orange: #FFA813;\r\n    --dark-side-red: #E60813;\r\n    --lightsaber-green: rgb(0, 184, 0);\r\n}\r\n\r\n.b-body {\r\n    position: relative;\r\n    color: white;\r\n    background-image: url("+i+");\r\n}\r\n\r\n.b-body__content {\r\n    width: 100%;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n    line-height: 0rem;\r\n    box-sizing: border-box;\r\n    margin: 1rem;\r\n    word-wrap: break-word;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.header__background--video {\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.b-main__image {\r\n    position: absolute;\r\n    width: 14.5rem;\r\n    height: 14.5rem;\r\n    background-size: cover;\r\n    background-position: center;\r\n    margin: 0;\r\n\r\n}\r\n\r\n.b-main__image-first--back-img {\r\n    background-image: url("+c+");\r\n}\r\n\r\n.b-main__image-first--position {\r\n    top: 5%;\r\n    left: 2%;\r\n}\r\n\r\n.b-main__image-second--back-img {\r\n\r\n    background-image: url("+s+");\r\n}\r\n\r\n.b-main__image-second--position {\r\n    top: 56%;\r\n    left: 40%;\r\n}\r\n\r\n.b-main__image-second--big-size {\r\n    width: 25rem;\r\n    height: 22rem;\r\n}\r\n\r\n.b-main__image-second--angel {\r\n    transform: rotate(-25deg);\r\n}\r\n\r\n.header_caption-first {\r\n    font-family: Star-Jedi;\r\n    font-size: 3rem;\r\n    -webkit-text-stroke-width: 3px;\r\n    -webkit-text-stroke-color: #2999D4;\r\n    -webkit-text-stroke-color: #ffffff;\r\n}\r\n\r\n.b-header__caption-second {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.b-header__content-caption-second {\r\n    padding: 4rem;\r\n    margin-bottom: 1rem;\r\n\r\n}\r\n\r\n.b-header__content-caption-second__header {\r\n    font-family: Star-Jedi-Hol;\r\n    font-size: 10.5rem;\r\n    color: #E60813;\r\n    margin: 0;\r\n}\r\n\r\n.header__caption-third {\r\n    font-family: Star-Jedi;\r\n    font-size: 2rem;\r\n    -webkit-text-stroke-width: 2px;\r\n    -webkit-text-stroke-color: #ffffff;\r\n}\r\n\r\n.main-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.main-section__article {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: relative;\r\n\r\n}\r\n\r\n.main-section__content-input {\r\n    /* min-height: 15rem; */\r\n    text-align: center;\r\n}\r\n\r\n.movie-search-input {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 5%;\r\n    width: 80%;\r\n    height: 25%;\r\n    padding: 2%;\r\n    margin-bottom: 0px;\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 25px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    outline: none;\r\n    background: rgba(255, 255, 255, 0.4);\r\n    z-index: 1;\r\n    padding: 2%;\r\n    -webkit-box-sizing: border-box;\r\n    /* Safari/Chrome, other WebKit */\r\n    -moz-box-sizing: border-box;\r\n    /* Firefox, other Gecko */\r\n    box-sizing: border-box;\r\n}\r\n\r\n.button-search {\r\n    font-family: Star-Jedi;\r\n    font-size: 1.5rem;\r\n    -webkit-text-stroke-width: 2px;\r\n    -webkit-text-stroke-color: var(--star-orange);\r\n    position: absolute;\r\n    bottom: 18%;\r\n    right: 6%;\r\n    width: 40px;\r\n    margin-left: 5px;\r\n    margin-bottom: 0px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: transparent;\r\n    font-weight: bold;\r\n    border: none;\r\n    outline: none;\r\n    z-index: 1;\r\n    transition: transform .03s ease-in-out;\r\n}\r\n\r\n.button-search:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.button-search:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n.button-img {\r\n    position: absolute;\r\n    height: 6.5rem;\r\n    bottom: 65%;\r\n    left: 50%;\r\n    /* margin-left: 20%; */\r\n}\r\n\r\n.search-panel {\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    min-width: 60rem;\r\n    min-height: 10rem;\r\n    margin-bottom: 5%;\r\n    padding: 2%;\r\n    display: inline-block;\r\n}\r\n\r\n::placeholder {\r\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #000000;\r\n    opacity: 1;\r\n    /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    /* Internet Explorer 10-11 */\r\n    color: #000000;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    /* Microsoft Edge */\r\n    color: #000000;\r\n}\r\n\r\n.search-panel-img {\r\n    position: absolute;\r\n    top: 20%;\r\n    right: 5%;\r\n    width: 100%;\r\n    margin-top: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.main-section__content-input__caption-nothing-finded {\r\n    position: absolute;\r\n    color: white;\r\n    font-size: 8rem;\r\n    margin: 1%;\r\n    font-family: Star-Jedi;\r\n    color: var(--star-orange);\r\n    margin: 0;\r\n    margin-top: 2%;\r\n    top: 55%;\r\n}\r\n\r\n.main-section__content-items {\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 10rem;\r\n}\r\n\r\n\r\n.main-section__content-items__list__cards {\r\n    width: 97%;\r\n    display: grid;\r\n    grid-gap: 4rem;\r\n    grid-template-columns: repeat(auto-fill, 27rem);\r\n    justify-content: center;\r\n    margin: 8rem 0 8rem 0;\r\n    align-items: center;\r\n}\r\n\r\n.card {\r\n    width: 24.8rem;\r\n    height: 19rem;\r\n    border-radius: 4%;\r\n    background: white;\r\n    position: relative;\r\n    background-color: black;\r\n    border: solid white 0.5px;\r\n    box-sizing: border-box;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    background-size: cover;\r\n    box-shadow: #000000, 5px;\r\n    background-position: center;\r\n}\r\n\r\n.card--shadow {\r\n    -webkit-box-shadow: 5px 5px 5px 1px rgba(255, 248, 248, 0.75);\r\n    -moz-box-shadow: 5px 5px 5px 1px rgba(255, 255, 255, 0.75);\r\n    box-shadow: 10px 5px 10px 1px rgba(255, 255, 255, 0.75);\r\n}\r\n\r\n.card__bacground--transparency {\r\n    position: absolute;\r\n    top: 0.2rem;\r\n    left: 0.2rem;\r\n    width: 99%;\r\n    min-height: 99%;\r\n    background-color: #000000;\r\n    border-radius: 2%;\r\n    opacity: 0.6;\r\n    filter: alpha(opacity=60);\r\n}\r\n\r\n.b-card__content {\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    word-wrap: break-word;\r\n    max-width: 14rem;\r\n}\r\n\r\n.b-card__header {\r\n    border-bottom: white 0.01rem solid;\r\n    min-width: 20rem;\r\n    text-align: center;\r\n    /* padding: 0.5rem; */\r\n    box-sizing: border-box;\r\n    line-height: 0.5rem;\r\n\r\n}\r\n\r\n.b-card__header__caption {\r\n    font-size: 28px;\r\n    color: var(--star-orange);\r\n    font-family: 'Ubuntu',\r\n        sans-serif;\r\n}\r\n\r\n.b-card__header--position {\r\n    top: 1rem;\r\n    left: 4.3rem;\r\n\r\n}\r\n\r\n.card__subtitle--red {\r\n    color: var(--dark-side-red);\r\n}\r\n\r\n\r\n.card__subtitle {\r\n    font-size: 22px;\r\n    font-family: 'Lemonada',\r\n        cursive;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 2rem;\r\n\r\n}\r\n\r\n.card__content-director--position {\r\n    top: 6rem;\r\n    left: 0.5rem;\r\n}\r\n\r\n.card__content-producer {\r\n    min-width: 12rem;\r\n    min-height: 6.5rem;\r\n    margin: 0;\r\n}\r\n\r\n.card__content-producer--position {\r\n    right: 2rem;\r\n    top: 8.5rem;\r\n}\r\n\r\n.card__content-date {\r\n    min-width: 12rem;\r\n    /* border: solid red; */\r\n}\r\n\r\n.card__content-date--position {\r\n    bottom: 1.4rem;\r\n    left: 2rem;\r\n}\r\n\r\n.card__subtitle__name {\r\n    font-family: 'Ubuntu',\r\n        sans-serif;\r\n    font-size: 19px;\r\n    margin: 0 0 0 3rem;\r\n}\r\n\r\n.card__subtitle__name--white {\r\n    color: white;\r\n}\r\n\r\n.card__background-first--image {\r\n    background-image: url("+d+");\r\n}\r\n\r\n.card__background-second--image {\r\n    background-image: url("+l+");\r\n\r\n}\r\n\r\n.card__background-third--image {\r\n    background-image: url("+u+")\r\n}\r\n\r\n.card__background-fourth--image {\r\n    background-image: url("+p+");\r\n}\r\n\r\n.card__background-fifth--image {\r\n    background-image: url("+m+");\r\n}\r\n\r\n.card__background-sixth--image {\r\n    background-image: url("+f+");\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#navMenu {\r\n    display: flex;\r\n}\r\n\r\n.navElement {\r\n    margin: 5px;\r\n    font-family: Star-Jedi-hol;\r\n    font-size: 1.5rem;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.navElement:hover {\r\n    color: var(--lightsaber-green);\r\n    text-shadow: 0 0 10px var(--lightsaber-green);\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    font-family: Star-Jedi-hol;\r\n    color: var(--star-orange);\r\n    margin: 20px;\r\n}\r\n\r\n.row {\r\n    margin: 20px;\r\n}\r\n\r\n.info {\r\n    text-align: center;\r\n}\r\n\r\n.info header {\r\n    font-family: Star-Jedi-hol;\r\n    color: var(--dark-side-red);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.info span {\r\n    font-family: Star-Jedi;\r\n}\r\n\r\n.categoryName {\r\n    font-family: Star-Jedi-hol;\r\n    color: var(--star-orange);\r\n    font-size: 3rem;\r\n    margin: 20px;\r\n}\r\n\r\n.category {\r\n    font-family: Star-Jedi-Hol;\r\n    font-size: 1.8rem;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 50px 0;\r\n    margin: 50px 0;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.category:hover{\r\n    color: var(--lightsaber-green);\r\n}\r\n\r\n.outline {\r\n    position: relative;\r\n    text-shadow: 0 0 10px black;\r\n    z-index: 1;\r\n}\r\n\r\n.black {\r\n    position: absolute;\r\n    font-family: Star-Jedi;\r\n    color: black;\r\n    z-index: -1;\r\n    left: 1px;\r\n}\r\n\r\n.charactersCategory {\r\n    background-image: url("+g+");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: center;\r\n}\r\n\r\n.starshipsCategory {\r\n    background-image: url("+h+");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: center;\r\n}\r\n\r\n.vehiclesCategory {\r\n    background-image: url("+b+");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: center;\r\n}\r\n\r\n.planetsCategory {\r\n    background-image: url("+_+");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: center;\r\n}\r\n\r\n.element, .loading{\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-family: Star-Jedi;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.element:hover {\r\n    color: var(--lightsaber-green);\r\n}\r\n",""])},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var a=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")}));return[e].concat(o).concat([a]).join("\n")}var i,c,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(e,"}"):e})).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(t[o]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&t[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),r.push(c))}},r}},function(n,r,e){"use strict";n.exports=function(n,r){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||r?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,e){n.exports=e.p+"fonts/Starjedi.ttf"},function(n,r,e){n.exports=e.p+"fonts/Starjhol.ttf"},function(n,r,e){n.exports=e.p+"imgs/space-1164579.png"},function(n,r,e){n.exports=e.p+"imgs/starwars_PNG56.png"},function(n,r,e){n.exports=e.p+"imgs/spaceship-2844250_1280.png"},function(n,r,e){n.exports=e.p+"imgs/4oh3plg-free-star-wars-wallpaper.jpg"},function(n,r,e){n.exports=e.p+"imgs/5QqOnXd-free-star-wars-wallpaper.jpg"},function(n,r,e){n.exports=e.p+"imgs/ALTwMNx-free-star-wars-wallpapers.jpg"},function(n,r,e){n.exports=e.p+"imgs/prnDtZE-free-star-wars-wallpapers.jpg"},function(n,r,e){n.exports=e.p+"imgs/VCHc7zT-free-star-wars-wallpapers.jpg"},function(n,r,e){n.exports=e.p+"imgs/WHY12jS-free-star-wars-wallpaper.jpg"},function(n,r,e){n.exports=e.p+"imgs/star-wars-2463926_1920.png"},function(n,r,e){n.exports=e.p+"imgs/spaceship-2844248_1280.png"},function(n,r,e){n.exports=e.p+"imgs/starwars_PNG46.png"},function(n,r,e){n.exports=e.p+"imgs/isolated-1513342_1920.png"},function(n,r,e){"use strict";var t,a={},o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}();function c(n,r){for(var e=[],t={},a=0;a<n.length;a++){var o=n[a],i=r.base?o[0]+r.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};t[i]?t[i].parts.push(c):e.push(t[i]={id:i,parts:[c]})}return e}function s(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=a[t.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(h(t.parts[i],r))}else{for(var c=[];i<t.parts.length;i++)c.push(h(t.parts[i],r));a[t.id]={id:t.id,refs:1,parts:c}}}}function d(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var t=e.nc;t&&(n.attributes.nonce=t)}if(Object.keys(n.attributes).forEach((function(e){r.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,u=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function p(n,r,e,t){var a=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=u(r,a);else{var o=document.createTextNode(a),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(o,i[r]):n.appendChild(o)}}function m(n,r,e){var t=e.css,a=e.media,o=e.sourceMap;if(a&&n.setAttribute("media",a),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,g=0;function h(n,r){var e,t,a;if(r.singleton){var o=g++;e=f||(f=d(r)),t=p.bind(null,e,o,!1),a=p.bind(null,e,o,!0)}else e=d(r),t=m.bind(null,e,r),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else a()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=c(n,r);return s(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var i=e[o],d=a[i.id];d&&(d.refs--,t.push(d))}n&&s(c(n,r),r);for(var l=0;l<t.length;l++){var u=t[l];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete a[u.id]}}}}},function(n,r,e){n.exports=e.p+"movie/Starfield_Fly_Through.mp4"},function(n,r,e){"use strict";async function t(){const n=[];let r="https://swapi.co/api/planets/";for(;null!==r;){const e=await a(r);n.push(...e.results),r=e.next}return n}async function a(n){let r;await fetch(n).then(n=>n.json()).then(n=>r=n).catch(n=>r=n);return r}async function o(){const n=[];let r="https://swapi.co/api/people/";for(;null!==r;){const e=await a(r);n.push(...e.results),r=e.next}return n}async function i(){const n=[];let r="https://swapi.co/api/vehicles/";for(;null!==r;){const e=await a(r);n.push(...e.results),r=e.next}return n}async function c(){const n=[];let r="https://swapi.co/api/starships/";for(;null!==r;){const e=await a(r);n.push(...e.results),r=e.next}return n}async function s(n,r,e){const t=[],a=document.querySelector(".loading");return a.style.display="block",(await async function(n,r){const e=await r(),t=[];return n.forEach(n=>{let r=e.find(r=>r.url==n);t.push({name:r.name,url:n})}),t}(n,r)).forEach(n=>{const r=document.createElement("div");r.classList="element col-xs-12 col-lg-6 col-xl-4",r.innerHTML=n.name,r.addEventListener("click",e),t.push(r)}),a.style.display="none",t}function d(){}function l(){}function u(){}function p(){}function m(){}async function f(n){document.querySelector(".categoryName").innerHTML="Characters:";const r=document.querySelector(".links");r.innerHTML="",(await s(n.characters,o,l)).forEach(n=>{r.appendChild(n)})}async function g(n){document.querySelector(".categoryName").innerHTML="Starships:";const r=document.querySelector(".links");r.innerHTML="",(await s(n.starships,c,u)).forEach(n=>{r.appendChild(n)})}async function h(n){document.querySelector(".categoryName").innerHTML="Vehicles:";const r=document.querySelector(".links");r.innerHTML="",(await s(n.vehicles,i,p)).forEach(n=>{r.appendChild(n)})}async function b(n){document.querySelector(".categoryName").innerHTML="Planets:";const r=document.querySelector(".links");r.innerHTML="",(await s(n.planets,t,d)).forEach(n=>{r.appendChild(n)})}e.r(r);e(0),e(20);e.d(r,"insideMenu",(function(){return M})),e.d(r,"render",(function(){return C}));let _=document.querySelector(".b-body__content"),x=_.querySelector(".main-section__content-items"),y=_.querySelector("#movie-input"),v=_.querySelector("#movie-search"),w=_.querySelector(".main-section__content-input__caption-nothing-finded"),k=_.querySelector(".b-main__image-second--back-img");const S=(n,r,e,t,a)=>{const o=document.createElement("div");o.className=e;const i=document.createElement("p"),c=document.createElement("p");return i.className=t,c.className=a,i.innerText=n,c.innerText=r,o.appendChild(i),o.appendChild(c),o},E=(n,r)=>{const e=n.title,t=n.director,a=n.producer,o=n.release_date,i=document.createElement("div");return i.className="card  card--shadow card__backgroundFirst--image "+`${r}`,i.appendChild((()=>{const n=document.createElement("div");return n.className="card__bacground--transparency",n})()),i.appendChild((n=>{const r=document.createElement("div");r.className="b-card__content b-card__header b-card__header--position";const e=document.createElement("h1");return e.innerText=n,e.className="b-card__header__caption",r.appendChild(e),r})(e)),i.appendChild(S("Director:",t,"b-card__content card__content-director card__content-director--position","card__subtitle card__directorHeader card__subtitle--red","card__subtitle__name card__directorName card__subtitle__name--white")),i.appendChild(S("Producer:",a," b-card__content card__content-producer  card__content-producer--position","card__subtitle card__producer card__subtitle--red","card__subtitle__name card__producerName card__subtitle__name--white")),i.appendChild(S("Realese Date:",o,"b-card__content card__content-date card__content-date--position","card__subtitle card_date card__subtitle--red","card__subtitle__name card_dateRealase card__subtitle__name--white")),i.addEventListener("click",()=>(function(n){M(["Characters","Starships","Vehicles","Planets"]);const r=document.querySelector(".backButton"),e=document.querySelector(".mainButton"),t=document.querySelector(".CharactersButton"),a=document.querySelector(".StarshipsButton"),o=document.querySelector(".VehiclesButton"),i=document.querySelector(".PlanetsButton");r.addEventListener("click",m),e.addEventListener("click",C),t.addEventListener("click",()=>f(n)),a.addEventListener("click",()=>g(n)),o.addEventListener("click",()=>h(n)),i.addEventListener("click",()=>b(n));const c=document.querySelector(".view"),s=document.createElement("header");s.classList="title",s.innerHTML=n.title,c.appendChild(s);const d=document.createElement("div");d.classList="row",c.appendChild(d);const l=document.createElement("div");l.classList="col-12 col-md-4 info",l.innerHTML=`<header>Director:</header><span>${n.director}</span>`,d.appendChild(l);const u=document.createElement("div");u.classList="col-12 col-md-4 info",u.innerHTML=`<header>Producer:</header><span>${n.producer}</span>`,d.appendChild(u);const p=document.createElement("div");p.classList="col-12 col-md-4 info",p.innerHTML=`<header>Relase date:</header><span>${n.release_date}</span>`,d.appendChild(p);const _=document.createElement("div");_.classList="categoryName",c.appendChild(_);const x=document.createElement("loading");x.classList="loading",x.innerHTML="Loading...",x.style.display="none",c.appendChild(x);const y=document.createElement("div");y.classList="row links",c.appendChild(y);const v=document.createElement("div");v.classList="col-12 col-sm-6 col-lg-3 charactersCategory category",v.innerHTML="<span class='outline'><span class='black'>characters</span>characters</span>",y.appendChild(v),v.addEventListener("click",()=>f(n));const w=document.createElement("div");w.classList="col-12 col-sm-6 col-lg-3 starshipsCategory category",w.innerHTML="<span class='outline'><span class='black'>starships</span>starships</span>",y.appendChild(w),w.addEventListener("click",()=>g(n));const k=document.createElement("div");k.classList="col-12 col-sm-6 col-lg-3 vehiclesCategory category",k.innerHTML="<span class='outline'><span class='black'>vehicles</span>vehicles</span>",y.appendChild(k),k.addEventListener("click",()=>h(n));const S=document.createElement("div");S.classList="col-12 col-sm-6 col-lg-3 planetsCategory category",S.innerHTML="<span class='outline'><span class='black'>planets</span>planets</span>",y.appendChild(S),S.addEventListener("click",()=>b(n))})(n)),i};let L=[];async function C(){document.querySelector(".b-body__content").style.display="block";const n=document.querySelector("body"),r=document.querySelector(".view");r&&n.removeChild(r),0==L.length&&(L=await async function(){const n=[];let r="https://swapi.co/api/films/";for(;null!==r;){const e=await a(r);n.push(...e.results),r=e.next}return n}());const e=["card__background-first--image","card__background-second--image","card__background-third--image","card__background-fourth--image","card__background-fifth--image","card__background-sixth--image"],t=document.createElement("ul");t.className="main-section__content-items__list__cards";let o=0;L.forEach(n=>{E(n),t.appendChild(E(n,e[o])),o==e.length-1?o=0:o++}),k.setAttribute("style","z-index: 1;"),x.innerHTML="",w.innerText="",x.appendChild(t)}function M(n){const r=document.querySelector("body");document.querySelector(".b-body__content").style.display="none";let e=document.querySelector("view");e&&r.removeChild(e),(e=document.createElement("section")).classList="view container-fluid",r.appendChild(e);const t=document.createElement("nav");e.appendChild(t);const a=document.createElement("div");a.classList="backButton navElement",a.innerHTML="Back",t.appendChild(a);const o=document.createElement("div");o.id="navMenu",t.appendChild(o);const i=document.createElement("div");i.classList="mainButton navElement",i.innerHTML="Main",o.appendChild(i),n.forEach(n=>{const r=document.createElement("div");r.classList=n+"Button navElement",r.innerHTML=n,o.appendChild(r)})}v.addEventListener("click",()=>{(async function(n){let r;const e=encodeURI("https://swapi.co/api/films/?search="+n),t=await a(e);return r=null!=t.results[0]?t.results:"Nothing finded"})(y.value).then(n=>{"Nothing finded"==n?(k.setAttribute("style","z-index: -2;"),x.innerHTML="",w.innerText="nothig Finded"):(L=n,C())})}),C()}]);