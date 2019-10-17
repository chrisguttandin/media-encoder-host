// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),a=e.slice(1);return"".concat(o).concat(a)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e}),e)},a=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,a=[],c=n.exec(e);null!==c;){var i={modifiers:[],name:c[1]};if(void 0!==c[3])for(var s=/\\.[^(]+\\(\\)/g,u=s.exec(c[2]);null!==u;)i.modifiers.push(u[0].slice(1,-2)),u=s.exec(c[2]);a.push(i),c=n.exec(e)}var l=a.reduce((function(e,n){return e.map((function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce((function(e,a,c){return 0===c?[a]:n.name in r?[].concat(t(e),[o(r[n.name],n.modifiers),a]):[].concat(t(e),[function(e){return o(e[n.name],n.modifiers)},a])}),[]):[e]})).reduce((function(e,r){return[].concat(t(e),t(r))}),[])}),[e]);return function(e){return l.reduce((function(r,n){return[].concat(t(r),"string"==typeof n?[n]:[n(e)])}),[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:a(e.code,t),n=void 0===e.message?void 0:a(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},c=a.cause,i=a.missingParameters,s=void 0===n?new Error:new Error(n(i));return null!==c&&(s.cause=c),void 0!==r&&(s.code=r(i)),void 0!==e.status&&(s.status=e.status),s}return o},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(3),r(7),r(8))},function(e,t,r){!function(e){"use strict";var t,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=new WeakMap,o=(t=n,function(e,r){return t.set(e,r),r}),a=function(e,t){return function(n){var o=t.get(n),a=void 0===o?n.size:o>2147483646?0:o+1;if(!n.has(a))return e(n,a);if(n.size<1073741824){for(;n.has(a);)a=Math.floor(2147483648*Math.random());return e(n,a)}if(n.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(a);)a=Math.floor(Math.random()*r);return e(n,a)}}(o,n),c=function(e){return function(t){var r=e(t);return t.add(r),r}}(a);e.addUniqueNumber=c,e.generateUniqueNumber=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(4),o=r(5),a=r(6);e.exports=function(e){return n(e)||o(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var c=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<c.length;t++)if(o.match(c[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t,r){"use strict";r.r(t);var n=r(1);const o=-32603,a=-32602,c=-32601,i=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:c}),s=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),l=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:a}),d=(e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const c=t[o];try{if(void 0===c)throw i({method:o});const t=void 0===a?c():c(a);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw u({method:o})}else{if(void 0===r.result)throw u({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var f=r(0),p=r.n(f),h=r(2);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const g=new Map,v=(e,t,r)=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e})({},t,{connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=Object(h.generateUniqueNumber)(g);return g.set(a,()=>{o(),n.close(),g.delete(a)}),{result:a}},disconnect:e=>{let{portId:t}=e;const r=g.get(t);if(void 0===r)throw l({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),w=e=>{e.onmessage=null,e.close()},y=new WeakMap;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const O=e=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e})({},e,{connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return y.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=y.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const E=new WeakMap,M=(e=>{const t=O(e);return e=>{const r=(e=>{if(E.has(e))return E.get(e);const t=new Map;return E.set(e,t),t})(e);e.addEventListener("message",e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}}),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise((a,c)=>{const i=Object(h.generateUniqueNumber)(r);r.set(i,{reject:c,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)})},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a=P({},a,{[e]:r({call:n,notify:o})});return P({},a)}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map(e=>{let{buffer:t}=e;return t}))}}}),x=async(e,t)=>{const r=M(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},S=new Map,A=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(S),T=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(S,A),I=((e,t)=>r=>{const[n,o,a]=t(r);n.cancel(),a&&e(o)})(w,T),N=new Map,_=((e,t)=>r=>{const[n,o,a,c]=t(r);return a?new Promise(t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,c,i)}}):n.encode(r,null)})(w,T),D=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const c=r(o),{port1:i,port2:s}=new MessageChannel,u=[c,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):c.record(n,a,r)},s})(w,S,(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(N)),L=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(A);!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=v(e,r,n),a=d(t,o);return t.addEventListener("message",a),()=>t.removeEventListener("message",a)}(self,{cancel:e=>{let{encoderId:t}=e;return I(t),{result:null}},encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await _(t):await L(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=D(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await x(N,t)}}})}]);`;
