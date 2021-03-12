// This is the minified and stringified code of the media-encoder-host-worker package.
export const worker = `(()=>{var e={834:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},640:(e,t,r)=>{var n=r(834);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},942:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},841:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},545:(e,t,r)=>{var n=r(640),o=r(942),a=r(798),s=r(841);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},798:(e,t,r)=>{var n=r(834);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},d=function(e,t){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,d=i.exec(o[2]);null!==d;)s.modifiers.push(d[0].slice(1,-2)),d=i.exec(o[2]);n.push(s),o=r.exec(e)}var l=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return l.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:d(e.code,t),n=void 0===e.message?void 0:d(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=l,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(545),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),d=t(u);e.addUniqueNumber=d,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:'The requested method called "\${method}" is not supported.',status:o}),s=(0,e.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:t}),i=(0,e.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:t}),c=(0,e.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:n});var u=r(107);const d=new Map,l=(e,t,r)=>({...t,connect:({port:r})=>{r.start();const n=e(r,t),o=(0,u.generateUniqueNumber)(d);return d.set(o,(()=>{n(),r.close(),d.delete(o)})),{result:o}},disconnect:({portId:e})=>{const t=d.get(e);if(void 0===t)throw c({portId:e.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=(e,t,r=(()=>!0))=>{const n=l(f,t,r),o=((e,t)=>async({data:{id:r,method:n,params:o}})=>{const c=t[n];try{if(void 0===c)throw a({method:n});const t=void 0===o?c():c(o);if(void 0===t)throw s({method:n});const u=t instanceof Promise?await t:t;if(null===r){if(void 0!==u.result)throw i({method:n})}else{if(void 0===u.result)throw i({method:n});const{result:t,transferables:o=[]}=u;e.postMessage({id:r,result:t},o)}}catch(t){const{message:n,status:o=-32603}=t;e.postMessage({error:{code:o,message:n},id:r})}})(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},p=e=>{e.onmessage=null,e.close()},m=new WeakMap,h=new WeakMap,g=(e=>{const t=(r=e,{...r,connect:({call:e})=>async()=>{const{port1:t,port2:r}=new MessageChannel,n=await e("connect",{port:t},[t]);return m.set(r,n),r},disconnect:({call:e})=>async t=>{const r=m.get(t);if(void 0===r)throw new Error("The given port is not connected.");await e("disconnect",{portId:r})},isSupported:({call:e})=>()=>e("isSupported")});var r;return e=>{const r=(e=>{if(h.has(e))return h.get(e);const t=new Map;return h.set(e,t),t})(e);e.addEventListener("message",(({data:e})=>{const{id:t}=e;if(null!==t&&r.has(t)){const{reject:n,resolve:o}=r.get(t);r.delete(t),void 0===e.error?o(e.result):n(new Error(e.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=(t,n=null,o=[])=>new Promise(((a,s)=>{const i=(0,u.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)})),o=(t,r,n=[])=>{e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:({call:e})=>()=>e("characterize"),encode:({call:e})=>(t,r)=>e("encode",{recordingId:t,timeslice:r}),record:({call:e})=>async(t,r,n)=>{await e("record",{recordingId:t,sampleRate:r,typedArrays:n},n.map((({buffer:e})=>e)))}}),v=async(e,t)=>{const r=g(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},w=new Map,x=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(w),y=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(w,x),M=new Map,b=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=({data:a})=>{0===a.length?(e(o),t(n.encode(r,null))):n.record(r,s,a)}})):n.encode(r,null)})(p,y),E=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=({data:t})=>{0===t.length?(e(i),u[2]=!1):s.record(n,a,t)},c})(p,w,(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(M)),A=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(x);f(self,{encode:async({encoderId:e,timeslice:t})=>{const r=null===t?await b(e):await A(e,t);return{result:r,transferables:r}},instantiate:({encoderId:e,mimeType:t,sampleRate:r})=>{const n=E(e,t,r);return{result:n,transferables:[n]}},register:async({port:e})=>({result:await v(M,e)})})})()})();`; // tslint:disable-line:max-line-length
