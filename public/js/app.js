(()=>{var e={757:(e,t,r)=>{e.exports=r(666)},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=function(e,t,r){var n=d;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?h:m,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",m="suspendedYield",p="executing",h="completed",f={};function v(){}function y(){}function g(){}var C={};C[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==r&&n.call(w,o)&&(C=w);var _=g.prototype=v.prototype=Object.create(C);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=s(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,f;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(_),l(_,c,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"img/trashCan.svg"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="https://raphael-carre.github.io/RaphaelCarre_5_05052021/public/",(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function a(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,l,"next",e)}function l(e){a(i,n,o,c,l,"throw",e)}c(void 0)}))}}var i=r(757),c=r.n(i);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(){function t(){e(this,t)}return n(t,null,[{key:"getDatas",value:function(e){return fetch(e).then((function(e){if(e.ok)return e.json()}))}},{key:"postDatas",value:function(e,t){return fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(e){return e.ok?e.json():f.showModal("Il y a eu un problème !","error","Erreur ".concat(e.status,": ").concat(e.statusText))}))}}]),t}(),d=function(){function t(){e(this,t),this.matches={quantity:{regex:/^[1-9][0-9]*/,errorMessage:"Vous ne devez saisir que des nombres; valeur minimale : 1"},number:{regex:/[0-9]+/,errorMessage:"Vous ne devez saisir que des nombres"},lastName:{regex:/^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,errorMessage:"Seuls les caractères alphabétiques, les ' et les - sont autorisés"},firstName:{regex:/^[a-zA-Zçéèàëêùûüô]+([\s|\-]?[a-zA-Zçéèàëêùûüô])+$/,errorMessage:"Seuls les caractères alphabétiques et les - sont autorisés"},address:{regex:/^([0-9]+)?([\,|\s|\-]?[a-zA-Z0-9çéèàëêùûüô])+$/,errorMessage:"L'adresse saise n'est pas valide"},city:{regex:/^[a-zA-Zçéèàëêùûüô]+([\s|\'|\-]?[a-zA-Zçéèàëêùûüô])+$/,errorMessage:"Seuls les caractères alphabétiques, les ' et - sont autorisés"},email:{regex:/^[\w\-\.]+\@[\w\-\.]+\.[\w]+$/,errorMessage:"L'adresse e-mail n'est pas valide"}}}return n(t,[{key:"validate",value:function(e,t){if(""===t)return{validate:!1,message:"Merci de renseigner ce champ de formulaire"};var r={validate:this.matches[e].regex.test(t)};return!r.validate&&(r.message=this.matches[e].errorMessage),r}}]),t}();function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(){function t(){e(this,t)}var r,a;return n(t,null,[{key:"addToCart",value:function(e){e.preventDefault();var t,r=new d,n=m(e.target);try{for(n.s();!(t=n.n()).done;){var a=t.value;if("quantity"===a.name&&!r.validate(a.name,a.value).validate)return}}catch(e){n.e(e)}finally{n.f()}var o=localStorage.getItem("cart"),i=this._setNewCartItem(e);localStorage.setItem("cart",JSON.stringify(o?this._updateCartContent(i):[i])),this.headerNotification(),f.showModal("L'article a bien été ajouté à votre panier")}},{key:"deleteItemFromCart",value:function(e,t){var r=e.target.parentNode.parentNode.parentNode,n=r.parentNode,a=parseInt(e.target.parentNode.getAttribute("data-index")),o=document.querySelector(".cart__total"),i=JSON.parse(localStorage.getItem("cart")),c=[];if(i.map((function(e,t){t!==a&&c.push(e)})),0===c.length)return this.resetCart();localStorage.setItem("cart",JSON.stringify(c));for(var l=r.nextElementSibling;l;){var u=l.querySelector("[data-index]"),s=parseInt(u.getAttribute("data-index"));u.setAttribute("data-index",s-1),l=l.nextElementSibling}n.removeChild(r),this.totalPrice(c,t).then((function(e){return o.textContent="Total : ".concat(e/100," €")})).catch((function(e){f.showModal("Il y a eu une erreur !","error",e)})),this.headerNotification()}},{key:"headerNotification",value:function(){var e=document.getElementById("product-counter");if(localStorage.getItem("cart")){var t=JSON.parse(localStorage.getItem("cart")).reduce((function(e,t){return e+t.quantity}),0);t>0&&(e.classList.contains("hidden")&&e.classList.remove("hidden"),e.textContent=t)}else e.classList.add("hidden"),e.textContent=""}},{key:"resetCart",value:function(){var e=document.getElementById("main"),t=document.getElementById("buyForm");e.removeChild(t),f.showEmptyCart(),localStorage.clear(),this.headerNotification()}},{key:"buyCartContent",value:(a=o(c().mark((function e(t,r){var n,a,o,i,l,p,h,v=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=new d,a={},o=m(t.target),e.prev=4,o.s();case 6:if((i=o.n()).done){e.next=15;break}if("reset"===(l=i.value).type||"submit"===l.type){e.next=13;break}if(n.validate(l.name,l.value).validate){e.next=12;break}return e.abrupt("return");case 12:a[l.name]=l.value;case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),o.e(e.t0);case 20:return e.prev=20,o.f(),e.finish(20);case 23:return p=JSON.parse(localStorage.getItem("cart")),e.next=26,this.totalPrice(p,r).then((function(e){return localStorage.setItem("totalPrice",e.toString())})).catch((function(e){v.showModal("Il y a eu une erreur !","error",e)}));case 26:return h=[],p.map((function(e){h=[].concat(u(h),[e._id])})),e.next=30,s.postDatas("".concat(r,"/order"),JSON.stringify({contact:a,products:h})).then((function(e){localStorage.removeItem("cart"),localStorage.setItem("order",JSON.stringify(e)),v.headerNotification(),window.location="confirmation.html"})).catch((function(e){f.showModal("Il y a eu une erreur !","error",e)}));case 30:case"end":return e.stop()}}),e,this,[[4,17,20,23]])}))),function(e,t){return a.apply(this,arguments)})},{key:"totalPrice",value:(r=o(c().mark((function e(t,r){var n,a,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,a=m(t),e.prev=2,i=c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.value,e.next=3,s.getDatas("".concat(r,"/").concat(t._id)).then((function(e){n+=t.quantity*e.price})).catch((function(e){return f.showModal("Il y a eu une erreur !","error",e)}));case 3:case"end":return e.stop()}}),e)})),a.s();case 5:if((o=a.n()).done){e.next=9;break}return e.delegateYield(i(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),a.e(e.t1);case 14:return e.prev=14,a.f(),e.finish(14);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[2,11,14,17]])}))),function(e,t){return r.apply(this,arguments)})},{key:"_setNewCartItem",value:function(e){var t,r={},n=m(e.target);try{for(n.s();!(t=n.n()).done;){var a=t.value;"submit"!==a.getAttribute("type")&&(r[a.name]="quantity"===a.name?parseInt(a.value):a.value)}}catch(e){n.e(e)}finally{n.f()}return r}},{key:"_updateCartContent",value:function(e){var t=JSON.parse(localStorage.getItem("cart")),r=t.filter((function(t){return t._id===e._id&&t.option===e.option}));return 0!==r.length?t.map((function(t){t===r[0]&&(t.quantity+=e.quantity)})):t=[].concat(u(t),[e]),t}}]),t}(),f=function(){function t(){e(this,t)}var a;return n(t,null,[{key:"showProductFromList",value:function(e){var t=document.createElement("div");t.className="product-list-card";var r=document.createElement("a");r.className="product-list-card__link",r.href="produit.html?id=".concat(e._id),r.title="".concat(e.name," - Voir la fiche produit");var n=document.createElement("div");n.className="product-list-card__image-canvas",n.style.backgroundImage="url(".concat(e.imageUrl,")");var a=document.createElement("span");a.className="product-list-card__price",a.textContent=this._formatPrice(e.price);var o=document.createElement("div");o.className="product-list-card__info";var i=document.createElement("h3");i.className="product-list-card__name",i.textContent=e.name;var c=document.createElement("p");c.className="product-list-card__description",c.textContent=e.description,t.appendChild(r),r.appendChild(n),r.appendChild(o),n.appendChild(a),o.appendChild(i),o.appendChild(c),this._addToContainer(t,"main","product-list")}},{key:"showOneProduct",value:function(e){var t=this,r=new d,n=document.createElement("div");n.className="product";var a=document.createElement("img");a.className="product__image",a.src=e.imageUrl,a.alt=e.name;var o=document.createElement("div");o.classList.add("product__info");var i=document.createElement("h3");i.className="product__title",i.textContent=e.name;var c=document.createElement("p");c.className="product_description",c.textContent=e.description;var l=document.createElement("p");l.className="product__price",l.textContent=this._formatPrice(e.price);var u=document.createElement("form");u.method="POST",u.id="addToCartForm",u.addEventListener("submit",h.addToCart.bind(h));var s=document.createElement("input");s.type="hidden",s.value=e._id,s.name="_id",s.id="id";var m=document.createElement("div"),p=document.createElement("label");p.htmlFor="option-selector",p.textContent="Couleur";var f=document.createElement("select");f.name="option",f.id="option-selector",e.colors.map((function(e){var t=document.createElement("option");t.value=e,t.textContent=e,f.appendChild(t)}));var v=document.createElement("div"),y=document.createElement("label");y.htmlFor="quantity",y.textContent="Quantité";var g=document.createElement("input");g.type="number",g.min=1,g.value=1,g.name="quantity",g.id="quantity",g.addEventListener("change",(function(e){var n=r.validate(e.target.name,e.target.value);t._showHideErrorElement(e.target,n)}));var C=document.createElement("button");C.className="btn",C.classList.add("btn--primary"),C.type="submit",C.textContent="Ajouter au panier",n.appendChild(a),n.appendChild(o),o.appendChild(i),o.appendChild(c),o.appendChild(l),o.appendChild(u),u.appendChild(s),u.appendChild(m),u.appendChild(v),u.appendChild(C),m.appendChild(p),m.appendChild(f),v.appendChild(y),v.appendChild(g),this._changeHeadTags(e),this._addToContainer(n,"main","product-section")}},{key:"showCart",value:function(e){var t=this,r=localStorage.getItem("cart"),n=document.createElement("form");if(n.method="POST",n.id="buyForm",n.addEventListener("submit",(function(t){h.buyCartContent(t,e)})),r){var a=JSON.parse(r),o=document.createElement("h2");o.className="cart__title",o.textContent="Contenu de votre panier";var i=document.createElement("p");i.className="cart__total",h.totalPrice(a,e).then((function(e){return i.textContent="Total : ".concat(t._formatPrice(e))})).catch((function(e){t.showModal("Il y a eu une erreur !","error",e)}));var c=document.createElement("div");c.className="cart__button-div";var l=document.createElement("button");l.type="reset",l.className="btn",l.textContent="Vider mon panier",l.addEventListener("click",(function(e){e.preventDefault(),t.showModal("Êtes-vous sûr de vouloir vider votre panier ? ","confirm",null,h.resetCart.bind(h))}));var u=document.createElement("button");return u.type="submit",u.className="btn",u.classList.add("btn--primary"),u.textContent="Valider ma commande",n.appendChild(o),n.appendChild(this._createCartTable(a,e)),n.appendChild(i),n.appendChild(this._createDetailsForm()),n.appendChild(c),c.appendChild(l),c.appendChild(u),void this._addToContainer(n,"main","cart")}this.showEmptyCart()}},{key:"showEmptyCart",value:function(){var e=document.getElementById("main"),t=document.createElement("div"),r=document.createElement("h2");r.className="empty-cart__title",r.textContent="Votre panier est vide";var n=document.createElement("p");n.className="empty-cart__content",n.textContent="Consultez notre catalogue !",t.appendChild(r),t.appendChild(n),e.classList.contains("cart")&&e.classList.remove("cart"),this._addToContainer(t,"main","empty-cart")}},{key:"showOrderConfirmation",value:function(){var e=JSON.parse(localStorage.getItem("order"));console.log(localStorage.getItem("totalPrice"));var t=parseInt(JSON.parse(localStorage.getItem("totalPrice"))),r=document.createElement("div"),n=document.createElement("h2");n.className="order-confirmation__title",n.textContent="Confirmation de votre commande";var a=document.createElement("p");a.textContent="".concat(e.contact.firstName," ").concat(e.contact.lastName,", nous vous remercions pour votre achat !");var o=document.createElement("p");o.textContent="Montant total de la facture : ".concat(this._formatPrice(t));var i=document.createElement("p");i.textContent='N° de commande : "'.concat(e.orderId,'"'),r.appendChild(a),r.appendChild(o),r.appendChild(i),this._addToContainer(n,"main",""),this._addToContainer(r,"main","order-confirmation")}},{key:"loader",value:function(){var e=document.getElementById("main"),t=document.createElement("div");t.className="loader";var r=document.createElement("p");r.className="loader__content",r.innerHTML="Chargement en cours<span>.</span><span>.</span><span>.</span>",t.appendChild(r),e.appendChild(t)}},{key:"showModal",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=document.body,i=document.createElement("div");i.className="overlay";var c=document.createElement("div");c.className="modal";var l=document.createElement("p");l.className="modal__message",l.textContent=e;var u=document.createElement("div");u.className="modal__buttons";var s=document.createElement("button");s.className="btn",s.textContent="OK";var d=document.createElement("button");d.className="btn",d.textContent="non";var m=document.createElement("button");switch(m.className="btn",m.classList.add("btn--primary"),m.textContent="oui",i.appendChild(c),c.appendChild(l),r){case"error":var p=document.createElement("p");p.className="modal__error",p.textContent=n,c.appendChild(p),c.appendChild(u),u.appendChild(s),s.addEventListener("click",this._hideModal.bind(this));break;case"confirm":c.appendChild(u),u.appendChild(d),u.appendChild(m),d.addEventListener("click",this._hideModal.bind(this)),m.addEventListener("click",(function(){a(),t._hideModal()}));break;default:setTimeout(this._hideModal.bind(this),1500)}o.appendChild(i),this._lockScroll()}},{key:"_hideModal",value:function(){document.querySelector(".overlay").classList.add("fade-out"),setTimeout((function(){document.body.removeChild(document.querySelector(".overlay"))}),200),this._unlockScroll()}},{key:"_changeHeadTags",value:function(e){document.head.querySelector("title").textContent+=" - ".concat(e.name)}},{key:"_createCartTable",value:function(e,t){var r=this,n=document.createElement("table");n.className="cart__table";var a=document.createElement("thead"),o=document.createElement("tr");["Article","Couleur","Quantité","Prix unitaire","Prix total","Supprimer"].map((function(e){var t=document.createElement("th");t.textContent=e,o.appendChild(t)}));var i=document.createElement("tbody");return n.appendChild(a),a.appendChild(o),n.appendChild(i),e.map((function(e,n){r._createCartTableRow(e,n,t).then((function(e){i.appendChild(e)})).catch((function(e){r.showModal("Il y a eu une erreur !","error",e)}))})),n}},{key:"_createCartTableRow",value:(a=o(c().mark((function e(t,n,a){var o,i,l,u=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=document.createElement("tr"),(i=document.createElement("a")).href="#",i.title="Supprimer l'article",(l=document.createElement("img")).src=r(927).Z,l.className="cart__delete-item",l.alt="Une poubelle",e.next=10,s.getDatas("".concat(a,"/").concat(t._id)).then((function(e){for(var r=0;r<=5;r++){var c=document.createElement("td");switch(o.appendChild(c),r){case 0:c.textContent=e.name;break;case 1:c.textContent=t.option;break;case 2:c.textContent=t.quantity;break;case 3:c.textContent=u._formatPrice(e.price);break;case 4:c.textContent=u._formatPrice(parseInt(e.price)*t.quantity);break;case 5:c.appendChild(i),i.setAttribute("data-index",n),i.addEventListener("click",(function(e){u.showModal("Êtes-vous sûr de vouloir supprimer cet article ?","confirm","",(function(){h.deleteItemFromCart(e,a)}))})),i.appendChild(l)}}}));case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)}))),function(e,t,r){return a.apply(this,arguments)})},{key:"_createDetailsForm",value:function(){var e=this,t=new d,r=document.createElement("div");r.className="cart__details";var n=document.createElement("h2");n.className="cart__details__title",n.textContent="Mes coordonnées";var a={lastName:"Nom",firstName:"Prénom",email:"E-mail",address:"Adresse",city:"Ville"};for(var o in a){var i=document.createElement("div"),c=document.createElement("label");c.htmlFor="".concat(o,"Input"),c.textContent=a[o];var l=document.createElement("input");l.type="email"===o?"email":"text",l.required=!0,l.name=o,l.id="".concat(o,"Input"),l.addEventListener("change",(function(r){var n=t.validate(r.target.name,r.target.value);e._showHideErrorElement(r.target,n)})),i.appendChild(c),i.appendChild(l),r.appendChild(i)}return r}},{key:"_addToContainer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.getElementById(t);""!==r&&n.classList.add(r),n.appendChild(e)}},{key:"_showHideErrorElement",value:function(e,t){if(t.validate){if(e.parentNode.querySelector(".error-span"))return e.parentNode.removeChild(document.querySelector(".error-span")),e.previousElementSibling.classList.remove("label--error"),void e.classList.remove("input--error")}else{if(!e.parentNode.querySelector(".error-span")){var r=document.createElement("span");return r.className="error-span",r.textContent=t.message,e.parentNode.appendChild(r),e.previousElementSibling.className="label--error",void(e.className="input--error")}e.parentNode.querySelector(".error-span").textContent=t.message}}},{key:"_formatPrice",value:function(e){return"".concat((e/100).toString()," €")}},{key:"_lockScroll",value:function(){var e=window.scrollY,t=document.querySelector("header"),r=document.querySelector(".overlay");document.body.style.position="fixed",document.body.style.top="-".concat(e,"px"),document.body.style.width="100%",t.style.top=0,r.style.top=0}},{key:"_unlockScroll",value:function(){var e=document.body.style.top,t=document.querySelector("header");document.body.removeAttribute("style"),t.removeAttribute("style"),window.scrollTo(0,-1*parseInt(e||"O"))}}]),t}(),v=function(){function t(){e(this,t)}var r,a;return n(t,null,[{key:"index",value:(a=o(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getDatas(t).then((function(e){document.getElementById("main").removeChild(document.querySelector(".loader")),e.map((function(e){f.showProductFromList(e)}))})).catch((function(e){f.showModal("Il y a eu une erreur !","error",e)}));case 2:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"produit",value:(r=o(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getDatas(t).then((function(e){document.getElementById("main").removeChild(document.querySelector(".loader")),f.showOneProduct(e)})).catch((function(e){f.showModal("Il y a eu une erreur !","error",e)}));case 2:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"panier",value:function(e){document.getElementById("main").removeChild(document.querySelector(".loader")),f.showCart(e)}},{key:"confirmation",value:function(){document.getElementById("main").removeChild(document.querySelector(".loader")),!localStorage.getItem("order")&&(window.location="index.html"),f.showOrderConfirmation(),localStorage.clear()}}]),t}();new(function(){function t(r){e(this,t),this.baseApiUrl=r}return n(t,[{key:"route",value:function(){f.loader();var e=this._pageNameParser();v[""!==e?e:"index"](this._apiRequestUrl(this.baseApiUrl))}},{key:"_apiRequestUrl",value:function(e){if("produit"===this._pageNameParser()){var t=new URLSearchParams(window.location.search);if(t.has("id")&&""!==t.get("id"))return"".concat(e,"/").concat(t.get("id"));window.location="/public/"}return e}},{key:"_pageNameParser",value:function(){return window.location.pathname.split("/").pop().split(".").shift()}}]),t}())("https://ocorino.herokuapp.com/api/teddies").route(),h.headerNotification()})()})();