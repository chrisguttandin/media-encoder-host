// This is the minified and stringified code of the media-encoder-host-worker package.
export const worker = `!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=78)}([function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return f}));var r=e(1);const o=-32603,c=-32602,i=-32601,u=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:i}),a=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),s=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:c})},function(t,n,e){!function(t,n,e,r){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var o=function(t,n){return void 0===n?t:n.reduce((function(t,n){if("capitalize"===n){var o=t.charAt(0).toUpperCase(),c=t.slice(1);return"".concat(o).concat(c)}return"dashify"===n?e(t):"prependIndefiniteArticle"===n?"".concat(r(t)," ").concat(t):t}),t)},c=function(t,e){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,c=[],i=r.exec(t);null!==i;){var u={modifiers:[],name:i[1]};if(void 0!==i[3])for(var a=/\\.[^(]+\\(\\)/g,s=a.exec(i[2]);null!==s;)u.modifiers.push(s[0].slice(1,-2)),s=a.exec(i[2]);c.push(u),i=r.exec(t)}var f=c.reduce((function(t,r){return t.map((function(t){return"string"==typeof t?t.split(function(t){var n=t.name+t.modifiers.map((function(t){return"\\\\.".concat(t,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(n,"}"),"g")}(r)).reduce((function(t,c,i){return 0===i?[c]:r.name in e?[].concat(n(t),[o(e[r.name],r.modifiers),c]):[].concat(n(t),[function(t){return o(t[r.name],r.modifiers)},c])}),[]):[t]})).reduce((function(t,e){return[].concat(n(t),n(e))}),[])}),[t]);return function(t){return f.reduce((function(e,r){return[].concat(n(e),"string"==typeof r?[r]:[r(t)])}),[]).join("")}};t.compile=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=void 0===t.code?void 0:c(t.code,n),r=void 0===t.message?void 0:c(t.message,n);function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,c=void 0===o&&(n instanceof Error||void 0!==n.code&&"Exception"===n.code.slice(-9)),i=c?{cause:n,missingParameters:{}}:{cause:o,missingParameters:n},u=i.cause,a=i.missingParameters,s=void 0===r?new Error:new Error(r(a));return null!==u&&(s.cause=u),void 0!==e&&(s.code=e(a)),void 0!==t.status&&(s.status=t.status),s}return o},Object.defineProperty(t,"__esModule",{value:!0})}(n,e(79),e(84),e(85))},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=()=>new Promise(t=>{const n=new ArrayBuffer(0),{port1:e,port2:r}=new MessageChannel;e.onmessage=({data:n})=>t(null!==n),r.postMessage(n,[n])})},function(t,n,e){!function(t){"use strict";var n,e=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,r=new WeakMap,o=(n=r,function(t,e){return n.set(t,e),e}),c=function(t,n){return function(r){var o=n.get(r),c=void 0===o?r.size:o<1073741824?o+1:0;if(!r.has(c))return t(r,c);if(r.size<536870912){for(;r.has(c);)c=Math.floor(1073741824*Math.random());return t(r,c)}if(r.size>e)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(c);)c=Math.floor(Math.random()*e);return t(r,c)}}(o,r),i=function(t){return function(n){var e=t(n);return n.add(e),e}}(c);t.addUniqueNumber=i,t.generateUniqueNumber=c,Object.defineProperty(t,"__esModule",{value:!0})}(n)},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>{t.onmessage=null,t.close()}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},function(t,n,e){"use strict";e(7),e(8),e(9),e(10),e(11),e(12),e(13),e(14),e(15),e(16),e(17),e(18),e(19),e(20)},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e(22),e(23),e(24),e(25),e(26),e(27),e(28),e(29),e(30),e(31),e(32)},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e(34),e(35),e(36),e(37)},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e(39)},function(t,n){},function(t,n,e){"use strict";e(41)},function(t,n){},function(t,n,e){"use strict";e(43),e(44),e(45)},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e.r(n);var r=e(47);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o)},function(t,n){},function(t,n,e){"use strict";e.r(n);var r=e(49);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);var c=e(50);for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);var i=e(51);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var u=e(52);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);var a=e(53);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var s=e(54);for(var o in s)"default"!==o&&function(t){e.d(n,t,(function(){return s[t]}))}(o);var f=e(55);for(var o in f)"default"!==o&&function(t){e.d(n,t,(function(){return f[t]}))}(o);var d=e(56);for(var o in d)"default"!==o&&function(t){e.d(n,t,(function(){return d[t]}))}(o);var l=e(57);for(var o in l)"default"!==o&&function(t){e.d(n,t,(function(){return l[t]}))}(o);var p=e(58);for(var o in p)"default"!==o&&function(t){e.d(n,t,(function(){return p[t]}))}(o);var v=e(59);for(var o in v)"default"!==o&&function(t){e.d(n,t,(function(){return v[t]}))}(o);var m=e(60);for(var o in m)"default"!==o&&function(t){e.d(n,t,(function(){return m[t]}))}(o);var h=e(61);for(var o in h)"default"!==o&&function(t){e.d(n,t,(function(){return h[t]}))}(o);var g=e(62);for(var o in g)"default"!==o&&function(t){e.d(n,t,(function(){return g[t]}))}(o);var b=e(63);for(var o in b)"default"!==o&&function(t){e.d(n,t,(function(){return b[t]}))}(o)},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";e.d(n,"createWorker",(function(){return c}));var r=e(65),o=e(66);e(2),e(6),e(21);const c=(t,n,e=(()=>!0))=>{const i=Object(o.a)(c,n,e),u=Object(r.a)(t,i);return t.addEventListener("message",u),()=>t.removeEventListener("message",u)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);const o=(t,n)=>async({data:{id:e,method:o,params:c}})=>{const i=n[o];try{if(void 0===i)throw Object(r.a)({method:o});const n=void 0===c?i():i(c);if(void 0===n)throw Object(r.b)({method:o});const u=n instanceof Promise?await n:n;if(null===e){if(void 0!==u.result)throw Object(r.c)({method:o})}else{if(void 0===u.result)throw Object(r.c)({method:o});const{result:n,transferables:c=[]}=u;t.postMessage({id:e,result:n},c)}}catch(n){const{message:r,status:o=-32603}=n;t.postMessage({error:{code:o,message:r},id:e})}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(3),o=e(0),c=e(2);const i=new Map,u=(t,n,e)=>({...n,connect:({port:e})=>{e.start();const o=t(e,n),c=Object(r.generateUniqueNumber)(i);return i.set(c,()=>{o(),e.close(),i.delete(c)}),{result:c}},disconnect:({portId:t})=>{const n=i.get(t);if(void 0===n)throw Object(o.d)({portId:t.toString()});return n(),{result:null}},isSupported:async()=>{if(await Object(c.a)()){const t=e();return{result:t instanceof Promise?await t:t}}return{result:!1}}})},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=(t,n)=>e=>{const[r,o,c,i]=n(e);return c?new Promise(n=>{o.onmessage=({data:c})=>{0===c.length?(t(o),n(r.encode(e,null))):r.record(e,i,c)}}):r.encode(e,null)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>n=>{const e=t.get(n);if(void 0===e)throw new Error("There was no instance of an encoder stored with the given id.");return e}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=(t,n,e)=>(r,o,c)=>{if(n.has(r))throw new Error('There is already an encoder registered with an id called "'.concat(r,'".'));const i=e(o),{port1:u,port2:a}=new MessageChannel,s=[i,u,!0,c];return n.set(r,s),u.onmessage=({data:n})=>{0===n.length?(t(u),s[2]=!1):i.record(r,c,n)},a}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>n=>{for(const[e,r]of Array.from(t.values()))if(e.test(n))return r;throw new Error("There is no encoder registered which could handle the given mimeType.")}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=(t,n)=>e=>{const r=n(e);return t.delete(e),r}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>(n,e)=>{const[r]=t(n);return r.encode(n,e)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(74);const o=async(t,n)=>{const e=Object(r.wrap)(n),o=await e.characterize(),c=o.toString();if(t.has(c))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return t.set(c,[o,e]),o}},function(t,n,e){"use strict";e.d(n,"wrap",(function(){return o}));var r=e(75);e(40),e(42);const o=Object(r.createBroker)({characterize:({call:t})=>()=>t("characterize"),encode:({call:t})=>(n,e)=>t("encode",{recordingId:n,timeslice:e}),record:({call:t})=>async(n,e,r)=>{await t("record",{recordingId:n,sampleRate:e,typedArrays:r},r.map(({buffer:t})=>t))}})},function(t,n,e){"use strict";e.d(n,"createBroker",(function(){return u}));var r=e(3),o=e(76),c=e(77);e(33),e(38);const i=new WeakMap,u=t=>{const n=Object(c.a)(t);return t=>{const e=(t=>{if(i.has(t))return i.get(t);const n=new Map;return i.set(t,n),n})(t);t.addEventListener("message",({data:t})=>{const{id:n}=t;if(null!==n&&e.has(n)){const{reject:r,resolve:o}=e.get(n);e.delete(n),void 0===t.error?o(t.result):r(new Error(t.error.message))}}),Object(o.a)(t)&&t.start();const c=(n,o=null,c=[])=>new Promise((i,u)=>{const a=Object(r.generateUniqueNumber)(e);e.set(a,{reject:u,resolve:i}),null===o?t.postMessage({id:a,method:n},c):t.postMessage({id:a,method:n,params:o},c)}),u=(n,e,r=[])=>{t.postMessage({id:null,method:n,params:e},r)};let a={};for(const[t,e]of Object.entries(n))a={...a,[t]:e({call:c,notify:u})};return{...a}}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>"function"==typeof t.start},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const r=new WeakMap,o=t=>({...t,connect:({call:t})=>async()=>{const{port1:n,port2:e}=new MessageChannel,o=await t("connect",{port:n},[n]);return r.set(e,o),e},disconnect:({call:t})=>async n=>{const e=r.get(n);if(void 0===e)throw new Error("The given port is not connected.");await t("disconnect",{portId:e})},isSupported:({call:t})=>()=>t("isSupported")})},function(t,n,e){"use strict";e.r(n);var r=e(64),o=e(67),c=e(68),i=e(69),u=e(70),a=e(71),s=e(72),f=e(4),d=e(73),l=e(46);for(var p in l)"default"!==p&&function(t){e.d(n,t,(function(){return l[t]}))}(p);var v=e(48);for(var p in v)"default"!==p&&function(t){e.d(n,t,(function(){return v[t]}))}(p);const m=new Map,h=Object(c.a)(m),g=Object(a.a)(m,h),b=new Map,w=Object(o.a)(f.a,g),y=Object(u.a)(b),O=Object(i.a)(f.a,m,y),j=Object(s.a)(h);Object(r.createWorker)(self,{encode:async({encoderId:t,timeslice:n})=>{const e=null===n?await w(t):await j(t,n);return{result:e,transferables:e}},instantiate:({encoderId:t,mimeType:n,sampleRate:e})=>{const r=O(t,n,e);return{result:r,transferables:[r]}},register:async({port:t})=>({result:await Object(d.a)(b,t)})})},function(t,n,e){var r=e(80),o=e(81),c=e(82),i=e(83);t.exports=function(t){return r(t)||o(t)||c(t)||i()}},function(t,n,e){var r=e(5);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,n,e){"use strict";t.exports=(t,n)=>{if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>n&&n.condense?"-":t).toLowerCase()}},function(t,n,e){var r=function(t){var n,e,r=/\\w+/.exec(t);if(!r)return"an";var o=(e=r[0]).toLowerCase(),c=["honest","hour","hono"];for(n in c)if(0==o.indexOf(c[n]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(e.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var i=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(n=0;n<i.length;n++)if(o.match(i[n]))return"a";return e.match(/^U[NK][AIEO]/)?"a":e==e.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t.exports?t.exports=r:window.indefiniteArticle=r}]);`; // tslint:disable-line:max-line-length
