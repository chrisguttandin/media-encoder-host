// This is the minified and stringified code of the media-encoder-host-worker package.
export const worker = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),c=void 0===a?r.size:a<s?a+1:0;if(!r.has(c))return e(r,c);if(r.size<o){for(;r.has(c);)c=Math.floor(Math.random()*s);return e(r,c)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(c);)c=Math.floor(Math.random()*n);return e(r,c)}},c=new WeakMap,i=r(c),l=a(i,c),d=t(l);e.addUniqueNumber=d,e.generateUniqueNumber=l}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(455);const t=new WeakMap,n=new WeakMap,o=(r=>{const o=(s=r,{...s,connect:e=>{let{call:r}=e;return async()=>{const{port1:e,port2:n}=new MessageChannel,o=await r("connect",{port:e},[e]);return t.set(n,o),n}},disconnect:e=>{let{call:r}=e;return async e=>{const n=t.get(e);if(void 0===n)throw new Error("The given port is not connected.");await r("disconnect",{portId:n})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var s;return t=>{const r=(e=>{if(n.has(e))return n.get(e);const t=new Map;return n.set(e,t),t})(t);t.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(t)&&t.start();const s=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,c)=>{const i=(0,e.generateUniqueNumber)(r);r.set(i,{reject:c,resolve:a}),null===o?t.postMessage({id:i,method:n},s):t.postMessage({id:i,method:n,params:o},s)}))},a=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.postMessage({id:null,method:e,params:r},n)};let c={};for(const[e,t]of Object.entries(o))c={...c,[e]:t({call:s,notify:a})};return{...c}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),s=-32603,a=-32602,c=-32601,i=(e,t)=>Object.assign(new Error(e),{status:t}),l=e=>i('The handler of the method called "'.concat(e,'" returned an unexpected result.'),s),d=(e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const d=t[o];try{if(void 0===d)throw(e=>i('The requested method called "'.concat(e,'" is not supported.'),c))(o);const t=void 0===a?d():d(a);if(void 0===t)throw(e=>i('The handler of the method called "'.concat(e,'" returned no required result.'),s))(o);const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw l(o)}else{if(void 0===r.result)throw l(o);const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}},u=new Map,h=(t,r,n)=>({...r,connect:n=>{let{port:o}=n;o.start();const s=t(o,r),a=(0,e.generateUniqueNumber)(u);return u.set(a,(()=>{s(),o.close(),u.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=u.get(t);if(void 0===r)throw(e=>i('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),a))(t);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=function(e,t){const r=h(f,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0),n=d(e,r);return e.addEventListener("message",n),()=>e.removeEventListener("message",n)},w=e=>{e.onmessage=null,e.close()},p=new Map,g=new Map,m=((e,t)=>r=>{const n=t.get(r);if(void 0===n)throw new Error("There was no encoder stored with the given id.");e.delete(n),t.delete(r)})(p,g),v=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(v),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(v,y),E=((e,t)=>r=>{const[n,o,s,a]=t(r);return s?new Promise((t=>{o.onmessage=s=>{let{data:c}=s;0===c.length?(e(o),t(n.encode(r,null))):n.record(r,a,c)}})):n.encode(r,null)})(w,M),b=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(p),T=((e,t,r)=>(n,o,s)=>{if(t.has(n))throw new Error('There is already an encoder instance registered with an id called "'.concat(n,'".'));const a=r(o),{port1:c,port2:i}=new MessageChannel,l=[a,c,!0,s];return t.set(n,l),c.onmessage=t=>{let{data:r}=t;0===r.length?(e(c),l[2]=!1):a.record(n,s,r.map((e=>"number"==typeof e?new Float32Array(e):e)))},i})(w,v,b),I=((e,t,r)=>async(n,o)=>{const s=r(o),a=await s.characterize(),c=a.toString();if(e.has(c))throw new Error("There is already an encoder stored which handles exactly the same mime types.");if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));return e.set(c,[a,s]),t.set(n,c),a})(p,g,o),A=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);f(self,{deregister:async e=>{let{encoderId:t}=e;return m(t),{result:null}},encode:async e=>{let{encoderInstanceId:t,timeslice:r}=e;const n=null===r?await E(t):await A(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderInstanceId:t,mimeType:r,sampleRate:n}=e;const o=T(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{encoderId:t,port:r}=e;return{result:await I(t,r)}}})})()})();`; // tslint:disable-line:max-line-length
