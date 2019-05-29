// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){var n=r(10);e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}},function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),a=e.slice(1);return"".concat(o).concat(a)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e},e)},a=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,a=[],i=n.exec(e);null!==i;){var s={modifiers:[],name:i[1]};if(void 0!==i[3])for(var c=/\\.[^(]+\\(\\)/g,u=c.exec(i[2]);null!==u;)s.modifiers.push(u[0].slice(1,-2)),u=c.exec(i[2]);a.push(s),i=n.exec(e)}var l=a.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce(function(e,a,i){return 0===i?[a]:n.name in r?[].concat(t(e),[o(r[n.name],n.modifiers),a]):[].concat(t(e),[function(e){return o(e[n.name],n.modifiers)},a])},[]):[e]}).reduce(function(e,r){return[].concat(t(e),t(r))},[])},[e]);return function(e){return l.reduce(function(r,n){return[].concat(t(r),"string"==typeof n?[n]:[n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:a(e.code,t),n=void 0===e.message?void 0:a(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},i=a.cause,s=a.missingParameters,c=void 0===n?new Error:new Error(n(s));return null!==i&&(c.cause=i),void 0!==r&&(c.code=r(s)),void 0!==e.status&&(c.status=e.status),c}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(4),r(8),r(9))},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),a=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(a))return n(e,a);if(e.size<1073741824){for(;e.has(a);)a=Math.floor(2147483648*Math.random());return n(e,a)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(a);)a=Math.floor(Math.random()*r);return n(e,a)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),a=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(a))return n(e,a);if(e.size<1073741824){for(;e.has(a);)a=Math.floor(2147483648*Math.random());return n(e,a)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(a);)a=Math.floor(Math.random()*r);return n(e,a)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(5),o=r(6),a=r(7);e.exports=function(e){return n(e)||o(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var i=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<i.length;t++)if(o.match(i[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){"use strict";r.r(t);var n=r(1);const o=-32603,a=-32602,i=-32601,s=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:i}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),l=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:a});var d=r(0),f=r.n(d),p=r(2);const h=new Map,m=(e,t,r)=>f()({},t,{connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=Object(p.generateUniqueNumber)(h);return h.set(a,()=>{o(),n.close(),h.delete(a)}),{result:a}},disconnect:e=>{let{portId:t}=e;const r=h.get(t);if(void 0===r)throw l({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),g=e=>{e.onmessage=null,e.close()},v=(e,t)=>{const r=t.get(e);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return t.delete(e),r},w=(e,t,r,n)=>{if(r.has(t))throw new Error('There is already an encoder registered with an id called "'.concat(t,'".'));const o=((e,t)=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(e,n),{port1:a,port2:i}=new MessageChannel,s=[o,a,!0];return r.set(t,s),a.onmessage=e=>{let{data:r}=e;0===r.length?(g(a),s[2]=!1):o.record(t,r)},i};var y=r(3);const b=new WeakMap,M=new WeakMap,O=(e=>{const t=(e=>f()({},e,{connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return b.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=b.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}}))(e);return e=>{const r=(e=>{if(M.has(e))return M.get(e);const t=new Map;return M.set(e,t),t})(e);e.addEventListener("message",e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}}),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise((a,i)=>{const s=Object(y.generateUniqueNumber)(r);r.set(s,{reject:i,resolve:a}),null===n?e.postMessage({id:s,method:t},o):e.postMessage({id:s,method:t,params:n},o)})},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a=f()({},a,{[e]:r({call:n,notify:o})});return f()({},a)}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return e=>t("encode",{recordingId:e})},record:e=>{let{call:t}=e;return async(e,r)=>{await t("record",{recordingId:e,typedArrays:r},r.map(e=>{let{buffer:t}=e;return t}))}}}),E=async(e,t)=>{const r=O(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},j=new Map,x=new Map;!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=m(e,r,n),a=((e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const i=t[o];try{if(void 0===i)throw s({method:o});const t=void 0===a?i():i(a);if(void 0===t)throw c({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw u({method:o})}else{if(void 0===r.result)throw u({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}})(t,o);return t.addEventListener("message",a),()=>t.removeEventListener("message",a)}(self,{cancel:e=>{let{encoderId:t}=e;return((e,t)=>{const[r,n,o]=v(e,t);r.cancel(),o&&g(n)})(t,x),{result:null}},encode:async e=>{let{encoderId:t}=e;const r=await((e,t)=>{const[r,n,o]=v(e,t);return o?new Promise(t=>{n.onmessage=o=>{let{data:a}=o;0===a.length?(g(n),t(r.encode(e))):r.record(e,a)}}):Promise.resolve(r.encode(e))})(t,x);return{result:r,transferables:r}},instantiate:e=>{let{encoderId:t,mimeType:r}=e;const n=w(j,t,x,r);return{result:n,transferables:[n]}},register:async e=>{let{port:t}=e;return{result:await E(j,t)}}})}]);`;
