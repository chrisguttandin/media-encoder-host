// tslint:disable-next-line:max-line-length
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=78)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",function(){return o}),n.d(e,"__assign",function(){return i}),n.d(e,"__rest",function(){return u}),n.d(e,"__decorate",function(){return a}),n.d(e,"__param",function(){return c}),n.d(e,"__metadata",function(){return s}),n.d(e,"__awaiter",function(){return f}),n.d(e,"__generator",function(){return l}),n.d(e,"__exportStar",function(){return d}),n.d(e,"__values",function(){return p}),n.d(e,"__read",function(){return v}),n.d(e,"__spread",function(){return h}),n.d(e,"__await",function(){return y}),n.d(e,"__asyncGenerator",function(){return m}),n.d(e,"__asyncDelegator",function(){return g}),n.d(e,"__asyncValues",function(){return _}),n.d(e,"__makeTemplateObject",function(){return w}),n.d(e,"__importStar",function(){return b}),n.d(e,"__importDefault",function(){return x});var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n}function a(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}function c(t,e){return function(n,r){e(n,r,t)}}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})}function l(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function p(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function v(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(v(arguments[e]));return t}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function m(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){i.push([t,e,n,r])>1||a(t,e)})})}function a(t,e){try{(n=o[t](e)).value instanceof y?Promise.resolve(n.value.v).then(c,s):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function c(t){a("next",t)}function s(t){a("throw",t)}function f(t,e){t(e),i.shift(),i.length&&a(i[0][0],i[0][1])}}function g(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:y(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function _(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,o,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function b(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function x(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){var r=n(29)("wks"),o=n(28),i=n(4).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports={}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(10),o=n(16);t.exports=n(9)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){!function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce(function(t,e){if("capitalize"===e){var o=t.charAt(0).toUpperCase(),i=t.slice(1);return""+o+i}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?r(t)+" "+t:t},t)},i=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=r.exec(t);null!==u;){var a={modifiers:[],name:u[1]};if(void 0!==u[3])for(var c=/\\.[^(]+\\(\\)/g,s=c.exec(u[2]);null!==s;)a.modifiers.push(s[0].slice(1,-2)),s=c.exec(u[2]);i.push(a),u=r.exec(t)}var f=i.reduce(function(t,r){return t.map(function(t){return"string"==typeof t?t.split(function(t){var e=t.name+t.modifiers.map(function(t){return"\\\\."+t+"\\\\(\\\\)"}).join("");return new RegExp("\\\\$\\\\{"+e+"}","g")}(r)).reduce(function(t,i,u){return 0===u?[i]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),i]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},i])},[]):[t]}).reduce(function(t,n){return[].concat(e(t),e(n))},[])},[t]);return function(t){return f.reduce(function(n,r){return[].concat(e(n),"string"==typeof r?[r]:[r(t)])},[]).join("")}};t.compile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.code?void 0:i(t.code,e),r=void 0===t.message?void 0:i(t.message,e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],i=void 0===o&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9))?{cause:e,missingParameters:{}}:{cause:o,missingParameters:e},u=i.cause,a=i.missingParameters,c=void 0===r?new Error:new Error(r(a));return null!==u&&(c.cause=u),void 0!==n&&(c.code=n(a)),void 0!==t.status&&(c.status=t.status),c}},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(77),n(54),n(53))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(33)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(5),o=n(72),i=n(71),u=Object.defineProperty;e.f=n(9)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){!function(t){"use strict";var e=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(t){var r=e.get(t),o=void 0===r||r>2147483648?0:r+1;if(t.size<1073741824){for(;t.has(o);)o=Math.floor(2147483648*Math.random());return e.set(t,o),o}if(t.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(o);)o=Math.floor(Math.random()*n);return e.set(t,o),o};t.addUniqueNumber=function(t){var e=r(t);return t.add(e),e},t.generateUniqueNumber=r,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.closePort=(t=>{t.onmessage=null,t.close()})},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(51)),o=i(n(45));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var a,c=(0,o.default)(t);!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){var r=n(29)("keys"),o=n(28);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(64),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(74)(!0);n(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.removeEncoderInstance=((t,e)=>{const n=e.get(t);if(void 0===n)throw new Error("There was no instance of an encoder stored with the given id.");return e.delete(t),n})},function(t,e,n){n(49);for(var r=n(4),o=n(6),i=n(2),u=n(1)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var s=a[c],f=r[s],l=f&&f.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e,n){var r=n(31),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(23),o=n(1)("iterator"),i=n(2);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10).f,o=n(8),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3),o=n(4),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(36)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(73);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),o=n(3),i=n(34),u=n(6),a=n(8),c=function(t,e,n){var s,f,l,d=t&c.F,p=t&c.G,v=t&c.S,h=t&c.P,y=t&c.B,m=t&c.W,g=p?o:o[e]||(o[e]={}),_=g.prototype,w=p?r:v?r[e]:(r[e]||{}).prototype;for(s in p&&(n=e),n)(f=!d&&w&&void 0!==w[s])&&a(g,s)||(l=f?w[s]:n[s],g[s]=p&&"function"!=typeof w[s]?n[s]:y&&f?i(l,r):m&&w[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[s]=l,t&c.R&&_&&!_[s]&&u(_,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(36),o=n(35),i=n(70),u=n(6),a=n(2),c=n(69),s=n(26),f=n(60),l=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,h,y,m){c(n,e,v);var g,_,w,b=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",O="values"==h,j=!1,M=t.prototype,P=M[l]||M["@@iterator"]||h&&M[h],S=P||b(h),E=h?O?b("entries"):S:void 0,T="Array"==e&&M.entries||P;if(T&&(w=f(T.call(new t)))!==Object.prototype&&w.next&&(s(w,x,!0),r||"function"==typeof w[l]||u(w,l,p)),O&&P&&"values"!==P.name&&(j=!0,S=function(){return P.call(this)}),r&&!m||!d&&!j&&M[l]||u(M,l,S),a[e]=S,a[x]=p,h)if(g={values:O?S:b("values"),keys:y?S:b("keys"),entries:E},m)for(_ in g)_ in M||i(M,_,g[_]);else o(o.P+o.F*(d||j),e,g);return g}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(11),i=new WeakMap,u=new WeakMap;n.d(e,"wrap",function(){return s}),n.d(e,"load",function(){return f});var a,c,s=(a={characterize:function(t){var e=t.call;return function(){return e("characterize",{})}},encode:function(t){var e=t.call;return function(t){return e("encode",{recordingId:t})}},record:function(t){var e=t.call;return function(t,n){return r.__awaiter(void 0,void 0,void 0,function(){return r.__generator(this,function(r){switch(r.label){case 0:return[4,e("record",{recordingId:t,typedArrays:n},n.map(function(t){return t.buffer}))];case 1:return r.sent(),[2]}})})}}},c=Object.assign({},a,{connect:function(t){var e=t.call;return function(){return r.__awaiter(void 0,void 0,void 0,function(){var t,n,o,u;return r.__generator(this,function(r){switch(r.label){case 0:return t=new MessageChannel,n=t.port1,o=t.port2,[4,e("connect",{port:n},[n])];case 1:return u=r.sent(),i.set(o,u),[2,o]}})})}},disconnect:function(t){var e=t.call;return function(t){return r.__awaiter(void 0,void 0,void 0,function(){var n;return r.__generator(this,function(r){switch(r.label){case 0:if(void 0===(n=i.get(t)))throw new Error("The given port is not connected.");return[4,e("disconnect",{portId:n})];case 1:return r.sent(),[2]}})})}}}),function(t){var e,n=function(t){if(u.has(t))return u.get(t);var e=new Map;return u.set(t,e),e}(t);t.addEventListener("message",function(t){var e=t.data,r=e.id;if(null!==r&&n.has(r)){var o=n.get(r),i=o.reject,u=o.resolve;n.delete(r),void 0===e.error?u(e.result):i(new Error(e.error.message))}}),function(t){return"function"==typeof t.start}(t)&&t.start();for(var i=function(e,r,i){return void 0===i&&(i=[]),new Promise(function(u,a){var c=Object(o.generateUniqueNumber)(n);n.set(c,{reject:a,resolve:u}),t.postMessage({id:c,method:e,params:r},i)})},a=function(e,n,r){void 0===r&&(r=[]),t.postMessage({id:null,method:e,params:n},r)},s={},f=0,l=Object.entries(c);f<l.length;f++){var d=l[f],p=d[0],v=d[1];s=r.__assign({},s,((e={})[p]=v({call:i,notify:a}),e))}return r.__assign({},s)}),f=function(t){var e=new Worker(t);return s(e)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(7),i=-32603,u=-32602,a=-32601,c=Object(o.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),s=Object(o.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:i}),f=Object(o.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:i}),l=Object(o.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:u}),d=n(11),p=new Map,v=new Promise(function(t){var e=new ArrayBuffer(0),n=new MessageChannel,r=n.port1,o=n.port2;r.onmessage=function(e){var n=e.data;return t(null!==n)},o.postMessage(e,[e])});n.d(e,"createWorker",function(){return h});var h=function(t,e){var n,o,i=(n=h,o=e,Object.assign({},o,{connect:function(t){var e=t.port;e.start();var r=n(e,o),i=Object(d.generateUniqueNumber)(p);return p.set(i,function(){r(),e.close(),p.delete(i)}),{result:i}},disconnect:function(t){var e=t.portId,n=p.get(e);if(void 0===n)throw l({portId:e.toString()});return n(),{result:null}}})),u=function(t,e,n){return function(o){var i=o.data,u=i.id,a=i.method,l=i.params;return r.__awaiter(void 0,void 0,void 0,function(){var o,i,d,p,v,h,y,m,g,_,w,b,x,O,j,M;return r.__generator(this,function(r){switch(r.label){case 0:o=e[a],r.label=1;case 1:if(r.trys.push([1,8,,9]),void 0===o)throw c({method:a});if(void 0===(i=o(l)))throw s({method:a});return i instanceof Promise?[4,i]:[3,3];case 2:return p=r.sent(),[3,4];case 3:p=i,r.label=4;case 4:if(d=p,null!==u)return[3,5];if(void 0!==d.result)throw f({method:a});return[3,7];case 5:if(void 0===d.result)throw f({method:a});return h=(v=d).result,y=v.transferables,m=void 0===y?[]:y,_=(g=t).postMessage,w=[{id:u,result:h}],[4,n];case 6:_.apply(g,w.concat([r.sent()?m:[]])),r.label=7;case 7:return[3,9];case 8:return b=r.sent(),O=(x=b).message,j=x.status,M=void 0===j?-32603:j,t.postMessage({error:{code:M,message:O},id:u}),[3,9];case 9:return[2]}})})}}(t,i,v);return t.addEventListener("message",u),function(){return t.removeEventListener("message",u)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.registerEncoder=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),o=n(38);e.registerEncoder=((t,e)=>r.__awaiter(void 0,void 0,void 0,function*(){const n=(0,o.wrap)(e),r=yield n.characterize(),i=r.toString();if(t.has(i))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return t.set(i,[r,n]),r}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.instantiateEncoder=void 0;var r,o=n(13),i=(r=o)&&r.__esModule?r:{default:r},u=n(12);e.instantiateEncoder=((t,e,n,r)=>{if(n.has(e))throw new Error('There is already an encoder registered with an id called "'+e+'".');const o=((t,e)=>{for(const r of Array.from(t.values())){var n=(0,i.default)(r,2);const t=n[0],o=n[1];if(t.test(e))return o}throw new Error("There is no encoder registered which could handle the given mimeType.")})(t,r);var a=new MessageChannel;const c=a.port1,s=a.port2,f=[o,c,!0];return n.set(e,f),c.onmessage=(({data:t})=>{null===t.channelData?((0,u.closePort)(c),f[2]=!1):o.record(e,t.channelData)}),s})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.finishEncoding=void 0;var r,o=n(13),i=(r=o)&&r.__esModule?r:{default:r},u=n(12),a=n(21);e.finishEncoding=((t,e)=>{var n=(0,a.removeEncoderInstance)(t,e),r=(0,i.default)(n,3);const o=r[0],c=r[1];return r[2]?new Promise(e=>{c.onmessage=(({data:n})=>{null===n.channelData?((0,u.closePort)(c),e(o.encode(t))):o.record(t,n.channelData)})}):Promise.resolve(o.encode(t))})},function(t,e,n){var r=n(5),o=n(24);t.exports=n(3).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){n(22),n(20),t.exports=n(43)},function(t,e,n){t.exports={default:n(44),__esModule:!0}},function(t,e,n){var r=n(23),o=n(1)("iterator"),i=n(2);t.exports=n(3).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(48),o=n(47),i=n(2),u=n(15);t.exports=n(37)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){n(22),n(20),t.exports=n(46)},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cancelEncoding=void 0;var r,o=n(13),i=(r=o)&&r.__esModule?r:{default:r},u=n(12),a=n(21);e.cancelEncoding=((t,e)=>{var n=(0,a.removeEncoderInstance)(t,e),r=(0,i.default)(n,3);const o=r[0],c=r[1],s=r[2];o.cancel(),s&&(0,u.closePort)(c)})},function(t,e){var n=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(e in i)if(0==o.indexOf(i[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<u.length;e++)if(o.match(u[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t&&void 0!==t.exports?t.exports=n:window.indefiniteArticle=n},function(t,e,n){"use strict";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>e&&e.condense?"-":t).toLowerCase()}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(10),o=n(16);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(2),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(34),o=n(35),i=n(25),u=n(58),a=n(57),c=n(30),s=n(56),f=n(24);o(o.S+o.F*!n(55)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=0,g=f(d);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(n=new p(e=c(d.length));e>m;m++)s(n,m,y?h(d[m],m):d[m]);else for(l=g.call(d),n=new p;!(o=l.next()).done;m++)s(n,m,y?u(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(8),o=n(25),i=n(14)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(15),o=n(30),i=n(62);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=o(c.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(8),o=n(15),i=n(63)(!1),u=n(14)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(65),o=n(27);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(10),o=n(5),i=n(66);t.exports=n(9)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(5),o=n(67),i=n(27),u=n(14)("IE_PROTO"),a=function(){},c=function(){var t,e=n(32)("iframe"),r=i.length;for(e.style.display="none",n(61).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){"use strict";var r=n(68),o=n(16),i=n(26),u={};n(6)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(17);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=!n(9)&&!n(33)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(19),o=n(18);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){n(20),n(59),t.exports=n(3).Array.from},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(76),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},function(t,e,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),o=n(39),i=n(52),u=n(42),a=n(41),c=n(40);const s=new Map,f=new Map;(0,o.createWorker)(self,{cancel:({encoderId:t})=>((0,i.cancelEncoding)(t,f),{result:null}),encode:({encoderId:t})=>r.__awaiter(void 0,void 0,void 0,function*(){const e=yield(0,u.finishEncoding)(t,f);return{result:e,transferables:e}}),instantiate:({encoderId:t,mimeType:e})=>{const n=(0,a.instantiateEncoder)(s,t,f,e);return{result:n,transferables:[n]}},register:({port:t})=>r.__awaiter(void 0,void 0,void 0,function*(){return{result:yield(0,c.registerEncoder)(s,t)}})})}]);`;
