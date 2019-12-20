// This is the minified and stringified code of the media-encoder-host-worker package.
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=78)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return f}));var r=n(2);const o=-32603,c=-32602,i=-32601,u=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:i}),a=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),s=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:c})},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){!function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce((function(t,e){if("capitalize"===e){var o=t.charAt(0).toUpperCase(),c=t.slice(1);return"".concat(o).concat(c)}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?"".concat(r(t)," ").concat(t):t}),t)},c=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,c=[],i=r.exec(t);null!==i;){var u={modifiers:[],name:i[1]};if(void 0!==i[3])for(var a=/\\.[^(]+\\(\\)/g,s=a.exec(i[2]);null!==s;)u.modifiers.push(s[0].slice(1,-2)),s=a.exec(i[2]);c.push(u),i=r.exec(t)}var f=c.reduce((function(t,r){return t.map((function(t){return"string"==typeof t?t.split(function(t){var e=t.name+t.modifiers.map((function(t){return"\\\\.".concat(t,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(e,"}"),"g")}(r)).reduce((function(t,c,i){return 0===i?[c]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),c]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},c])}),[]):[t]})).reduce((function(t,n){return[].concat(e(t),e(n))}),[])}),[t]);return function(t){return f.reduce((function(n,r){return[].concat(e(n),"string"==typeof r?[r]:[r(t)])}),[]).join("")}};t.compile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.code?void 0:c(t.code,e),r=void 0===t.message?void 0:c(t.message,e);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,c=void 0===o&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9))?{cause:e,missingParameters:{}}:{cause:o,missingParameters:e},i=c.cause,u=c.missingParameters,a=void 0===r?new Error:new Error(r(u));return null!==i&&(a.cause=i),void 0!==n&&(a.code=n(u)),void 0!==t.status&&(a.status=t.status),a}return o},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(79),n(83),n(84))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=()=>new Promise(t=>{const e=new ArrayBuffer(0),{port1:n,port2:r}=new MessageChannel;n.onmessage=e=>{let{data:n}=e;return t(null!==n)},r.postMessage(e,[e])})},function(t,e,n){!function(t){"use strict";var e,n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,r=new WeakMap,o=(e=r,function(t,n){return e.set(t,n),n}),c=function(t,e){return function(r){var o=e.get(r),c=void 0===o?r.size:o>2147483646?0:o+1;if(!r.has(c))return t(r,c);if(r.size<1073741824){for(;r.has(c);)c=Math.floor(2147483648*Math.random());return t(r,c)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(c);)c=Math.floor(Math.random()*n);return t(r,c)}}(o,r),i=function(t){return function(e){var n=t(e);return e.add(n),n}}(c);t.addUniqueNumber=i,t.generateUniqueNumber=c,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>{t.onmessage=null,t.close()}},function(t,e,n){"use strict";n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n(34),n(35),n(36),n(37)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n(39)},function(t,e){},function(t,e,n){"use strict";n(41)},function(t,e){},function(t,e,n){"use strict";n(43),n(44),n(45)},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(47);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o)},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(49);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var c=n(50);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var i=n(51);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var u=n(52);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);var a=n(53);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s=n(54);for(var o in s)"default"!==o&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var f=n(55);for(var o in f)"default"!==o&&function(t){n.d(e,t,(function(){return f[t]}))}(o);var d=n(56);for(var o in d)"default"!==o&&function(t){n.d(e,t,(function(){return d[t]}))}(o);var l=n(57);for(var o in l)"default"!==o&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var p=n(58);for(var o in p)"default"!==o&&function(t){n.d(e,t,(function(){return p[t]}))}(o);var v=n(59);for(var o in v)"default"!==o&&function(t){n.d(e,t,(function(){return v[t]}))}(o);var h=n(60);for(var o in h)"default"!==o&&function(t){n.d(e,t,(function(){return h[t]}))}(o);var m=n(61);for(var o in m)"default"!==o&&function(t){n.d(e,t,(function(){return m[t]}))}(o);var b=n(62);for(var o in b)"default"!==o&&function(t){n.d(e,t,(function(){return b[t]}))}(o);var g=n(63);for(var o in g)"default"!==o&&function(t){n.d(e,t,(function(){return g[t]}))}(o)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"createWorker",(function(){return c}));var r=n(65),o=n(66);n(3),n(6),n(21);const c=function t(e,n){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const i=Object(o.a)(t,n,c),u=Object(r.a)(e,i);return e.addEventListener("message",u),()=>e.removeEventListener("message",u)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);const o=(t,e)=>async n=>{let{data:{id:o,method:c,params:i}}=n;const u=e[c];try{if(void 0===u)throw Object(r.a)({method:c});const e=void 0===i?u():u(i);if(void 0===e)throw Object(r.b)({method:c});const n=e instanceof Promise?await e:e;if(null===o){if(void 0!==n.result)throw Object(r.c)({method:c})}else{if(void 0===n.result)throw Object(r.c)({method:c});const{result:e,transferables:i=[]}=n;t.postMessage({id:o,result:e},i)}}catch(e){const{message:n,status:r=-32603}=e;t.postMessage({error:{code:r,message:n},id:o})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(1),o=n.n(r),c=n(4),i=n(0),u=n(3);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}const s=new Map,f=(t,e,n)=>(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t})({},e,{connect:n=>{let{port:r}=n;r.start();const o=t(r,e),i=Object(c.generateUniqueNumber)(s);return s.set(i,()=>{o(),r.close(),s.delete(i)}),{result:i}},disconnect:t=>{let{portId:e}=t;const n=s.get(e);if(void 0===n)throw Object(i.d)({portId:e.toString()});return n(),{result:null}},isSupported:async()=>{if(await Object(u.a)()){const t=n();return{result:t instanceof Promise?await t:t}}return{result:!1}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e)=>n=>{const[r,o,c,i]=e(n);return c?new Promise(e=>{o.onmessage=c=>{let{data:u}=c;0===u.length?(t(o),e(r.encode(n,null))):r.record(n,i,u)}}):r.encode(n,null)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>e=>{const n=t.get(e);if(void 0===n)throw new Error("There was no instance of an encoder stored with the given id.");return n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e,n)=>(r,o,c)=>{if(e.has(r))throw new Error('There is already an encoder registered with an id called "'.concat(r,'".'));const i=n(o),{port1:u,port2:a}=new MessageChannel,s=[i,u,!0,c];return e.set(r,s),u.onmessage=e=>{let{data:n}=e;0===n.length?(t(u),s[2]=!1):i.record(r,c,n)},a}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>e=>{for(const[n,r]of Array.from(t.values()))if(n.test(e))return r;throw new Error("There is no encoder registered which could handle the given mimeType.")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e)=>n=>{const r=e(n);return t.delete(n),r}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>(e,n)=>{const[r]=t(e);return r.encode(e,n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(74);const o=async(t,e)=>{const n=Object(r.wrap)(e),o=await n.characterize(),c=o.toString();if(t.has(c))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return t.set(c,[o,n]),o}},function(t,e,n){"use strict";n.d(e,"wrap",(function(){return o}));var r=n(75);n(40),n(42);const o=Object(r.createBroker)({characterize:t=>{let{call:e}=t;return()=>e("characterize")},encode:t=>{let{call:e}=t;return(t,n)=>e("encode",{recordingId:t,timeslice:n})},record:t=>{let{call:e}=t;return async(t,n,r)=>{await e("record",{recordingId:t,sampleRate:n,typedArrays:r},r.map(t=>{let{buffer:e}=t;return e}))}}})},function(t,e,n){"use strict";n.d(e,"createBroker",(function(){return d}));var r=n(1),o=n.n(r),c=n(4),i=n(76),u=n(77);n(33),n(38);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const f=new WeakMap,d=t=>{const e=Object(u.a)(t);return t=>{const n=(t=>{if(f.has(t))return f.get(t);const e=new Map;return f.set(t,e),e})(t);t.addEventListener("message",t=>{let{data:e}=t;const{id:r}=e;if(null!==r&&n.has(r)){const{reject:t,resolve:o}=n.get(r);n.delete(r),void 0===e.error?o(e.result):t(new Error(e.error.message))}}),Object(i.a)(t)&&t.start();const r=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise((i,u)=>{const a=Object(c.generateUniqueNumber)(n);n.set(a,{reject:u,resolve:i}),null===r?t.postMessage({id:a,method:e},o):t.postMessage({id:a,method:e,params:r},o)})},o=function(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.postMessage({id:null,method:e,params:n},r)};let u={};for(const[t,n]of Object.entries(e))u=s({},u,{[t]:n({call:r,notify:o})});return s({},u)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>"function"==typeof t.start},function(t,e,n){"use strict";var r=n(1),o=n.n(r);const c=new WeakMap;function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}n.d(e,"a",(function(){return u}));const u=t=>(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t})({},t,{connect:t=>{let{call:e}=t;return async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return c.set(n,r),n}},disconnect:t=>{let{call:e}=t;return async t=>{const n=c.get(t);if(void 0===n)throw new Error("The given port is not connected.");await e("disconnect",{portId:n})}},isSupported:t=>{let{call:e}=t;return()=>e("isSupported")}})},function(t,e,n){"use strict";n.r(e);var r=n(64),o=n(67),c=n(68),i=n(69),u=n(70),a=n(71),s=n(72),f=n(5),d=n(73),l=n(46);for(var p in l)"default"!==p&&function(t){n.d(e,t,(function(){return l[t]}))}(p);var v=n(48);for(var p in v)"default"!==p&&function(t){n.d(e,t,(function(){return v[t]}))}(p);const h=new Map,m=Object(c.a)(h),b=Object(a.a)(h,m),g=new Map,O=Object(o.a)(f.a,b),w=Object(u.a)(g),y=Object(i.a)(f.a,h,w),j=Object(s.a)(m);Object(r.createWorker)(self,{encode:async t=>{let{encoderId:e,timeslice:n}=t;const r=null===n?await O(e):await j(e,n);return{result:r,transferables:r}},instantiate:t=>{let{encoderId:e,mimeType:n,sampleRate:r}=t;const o=y(e,n,r);return{result:o,transferables:[o]}},register:async t=>{let{port:e}=t;return{result:await Object(d.a)(g,e)}}})},function(t,e,n){var r=n(80),o=n(81),c=n(82);t.exports=function(t){return r(t)||o(t)||c()}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";t.exports=(t,e)=>{if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>e&&e.condense?"-":t).toLowerCase()}},function(t,e,n){var r=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";var o=(n=r[0]).toLowerCase(),c=["honest","hour","hono"];for(e in c)if(0==o.indexOf(c[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var i=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<i.length;e++)if(o.match(i[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t.exports?t.exports=r:window.indefiniteArticle=r}]);`; // tslint:disable-line:max-line-length
