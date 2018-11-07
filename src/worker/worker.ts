// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){var n=r(9),o=r(10),a=r(11);e.exports=function(e,t){return n(e)||o(e,t)||a()}},function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),a=e.slice(1);return"".concat(o).concat(a)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e},e)},a=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,a=[],s=n.exec(e);null!==s;){var i={modifiers:[],name:s[1]};if(void 0!==s[3])for(var c=/\\.[^(]+\\(\\)/g,u=c.exec(s[2]);null!==u;)i.modifiers.push(u[0].slice(1,-2)),u=c.exec(s[2]);a.push(i),s=n.exec(e)}var l=a.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce(function(e,a,s){return 0===s?[a]:n.name in r?t(e).concat([o(r[n.name],n.modifiers),a]):t(e).concat([function(e){return o(e[n.name],n.modifiers)},a])},[]):[e]}).reduce(function(e,r){return t(e).concat(t(r))},[])},[e]);return function(e){return l.reduce(function(r,n){return"string"==typeof n?t(r).concat([n]):t(r).concat([n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:a(e.code,t),n=void 0===e.message?void 0:a(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(3),r(7),r(8))},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=Number.MAX_SAFE_INTEGER||9007199254740991,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),a=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(a))return n(e,a);if(e.size<1073741824){for(;e.has(a);)a=Math.floor(2147483648*Math.random());return n(e,a)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(a);)a=Math.floor(Math.random()*r);return n(e,a)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(4),o=r(5),a=r(6);e.exports=function(e){return n(e)||o(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){"use strict";r.r(t);var n=r(1);const o=-32603,a=-32602,s=-32601,i=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:s}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),l=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:a});var d=r(2);const f=new Map,p=(e,t,r)=>Object.assign({},t,{connect:r=>{let n=r.port;n.start();const o=e(n,t),a=Object(d.generateUniqueNumber)(f);return f.set(a,()=>{o(),n.close(),f.delete(a)}),{result:a}},disconnect:e=>{let t=e.portId;const r=f.get(t);if(void 0===r)throw l({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=(t=>{let r=t.data;return e(null!==r)}),o.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}});var h=r(0),m=r.n(h);const g=e=>{e.onmessage=null,e.close()},v=(e,t)=>{const r=t.get(e);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return t.delete(e),r},w=(e,t,r,n)=>{if(r.has(t))throw new Error('There is already an encoder registered with an id called "'.concat(t,'".'));const o=((e,t)=>{for(const n of Array.from(e.values())){var r=m()(n,2);const e=r[0],o=r[1];if(e.test(t))return o}throw new Error("There is no encoder registered which could handle the given mimeType.")})(e,n),a=new MessageChannel,s=a.port1,i=a.port2,c=[o,s,!0];return r.set(t,c),s.onmessage=(e=>{let r=e.data;null===r.channelData?(g(s),c[2]=!1):o.record(t,r.channelData)}),i},y=new WeakMap,b=new WeakMap,x=(e=>{const t=(e=>Object.assign({},e,{connect:e=>{let t=e.call;return async()=>{const e=new MessageChannel,r=e.port1,n=e.port2,o=await t("connect",{port:r},[r]);return y.set(n,o),n}},disconnect:e=>{let t=e.call;return async e=>{const r=y.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let t=e.call;return()=>t("isSupported")}}))(e);return e=>{const r=(e=>{if(b.has(e))return b.get(e);const t=new Map;return b.set(e,t),t})(e);e.addEventListener("message",e=>{let t=e.data;const n=t.id;if(null!==n&&r.has(n)){const e=r.get(n),o=e.reject,a=e.resolve;r.delete(n),void 0===t.error?a(t.result):o(new Error(t.error.message))}}),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise((a,s)=>{const i=Object(d.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)})},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const e of Object.entries(t)){var s=m()(e,2);const t=s[0],r=s[1];a=Object.assign({},a,{[t]:r({call:n,notify:o})})}return Object.assign({},a)}})({characterize:e=>{let t=e.call;return()=>t("characterize")},encode:e=>{let t=e.call;return e=>t("encode",{recordingId:e})},record:e=>{let t=e.call;return async(e,r)=>{await t("record",{recordingId:e,typedArrays:r},r.map(e=>{return e.buffer}))}}}),O=new Map,M=new Map;!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=p(e,r,n),a=((e,t)=>async r=>{let n=r.data,o=n.id,a=n.method,s=n.params;const l=t[a];try{if(void 0===l)throw i({method:a});const t=void 0===s?l():l(s);if(void 0===t)throw c({method:a});const r=t instanceof Promise?await t:t;if(null===o){if(void 0!==r.result)throw u({method:a})}else{if(void 0===r.result)throw u({method:a});const t=r.result,n=r.transferables,s=void 0===n?[]:n;e.postMessage({id:o,result:t},s)}}catch(t){const r=t.message,n=t.status,a=void 0===n?-32603:n;e.postMessage({error:{code:a,message:r},id:o})}})(t,o);return t.addEventListener("message",a),()=>t.removeEventListener("message",a)}(self,{cancel:e=>{return((e,t)=>{const r=v(e,t),n=m()(r,3),o=n[0],a=n[1],s=n[2];o.cancel(),s&&g(a)})(e.encoderId,M),{result:null}},encode:async e=>{let t=e.encoderId;const r=await((e,t)=>{const r=v(e,t),n=m()(r,3),o=n[0],a=n[1];return n[2]?new Promise(t=>{a.onmessage=(r=>{let n=r.data;null===n.channelData?(g(a),t(o.encode(e))):o.record(e,n.channelData)})}):Promise.resolve(o.encode(e))})(t,M);return{result:r,transferables:r}},instantiate:e=>{let t=e.encoderId,r=e.mimeType;const n=w(O,t,M,r);return{result:n,transferables:[n]}},register:async e=>{let t=e.port;return{result:await(async(e,t)=>{const r=x(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n})(O,t)}}})}]);`;
