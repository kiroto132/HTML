(function(omidGlobal){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike")}
function r(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}
return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b()},t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}
throw Error("Cannot find global object")}
var da=ca(this);function u(a,b){if(b)
a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}
a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&t(c,a,{configurable:!0,writable:!0,value:b})}}
var ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}
fa=!1}
ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=ea;function v(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)
if("prototype"!=c)
if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.va=b.prototype}
function w(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)
b[c-a]=arguments[c];return b}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)x(d,e)&&(a[e]=d[e]);}
return a};u("Object.assign",function(a){return a||ka});u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,k){this.g=f;t(this,"description",{configurable:!0,writable:!0,value:k})}
if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+((1e9*Math.random())>>>0)+"_",e=0;return b});u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ",),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&t(d.prototype,a,{configurable:!0,writable:!0,value:function(){return la(aa(this))},})}
return a});function la(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
u("WeakMap",function(a){function b(h){this.g=(g+=Math.random()+1).toString();if(h){h=p(h);for(var l;!(l=h.next()).done;)(l=l.value),this.set(l[0],l[1]);}}
function c(){}
function d(h){var l=typeof h;return("object"===l&&null!==h)||"function"===l}
function e(h){if(!x(h,k)){var l=new c();t(h,k,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if((function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),n=new a([[h,2],[l,3],]);if(2!=n.get(h)||3!=n.get(l))return!1;n.delete(h);n.set(l,4);return!n.has(h)&&4==n.get(l)}catch(q){return!1}})())
return a;var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!x(h,k))throw Error("WeakMap key fail: "+h);h[k][this.g]=l;return this};b.prototype.get=function(h){return d(h)&&x(h,k)?h[k][this.g]:void 0};b.prototype.has=function(h){return d(h)&&x(h,k)&&x(h[k],this.g)};b.prototype.delete=function(h){return d(h)&&x(h,k)&&x(h[k],this.g)?delete h[k][this.g]:!1};return b});u("Map",function(a){function b(){var g={};return(g.K=g.next=g.head=g)}
function c(g,h){var l=g.g;return la(function(){if(l){for(;l.head!=g.g;)l=l.K;for(;l.next!=l.head;)
return(l=l.next),{done:!1,value:h(l)};l=null}
return{done:!0,value:void 0}})}
function d(g,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?(l=f.get(h)):((l=""+ ++k),f.set(h,l)):(l="p_"+h);var n=g.h[l];if(n&&x(g.h,l))
for(g=0;g<n.length;g++){var q=n[g];if((h!==h&&q.key!==q.key)||h===q.key)
return{id:l,list:n,index:g,v:q}}
return{id:l,list:n,index:-1,v:void 0}}
function e(g){this.h={};this.g=b();this.size=0;if(g){g=p(g);for(var h;!(h=g.next()).done;)(h=h.value),this.set(h[0],h[1]);}}
if((function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)
return!1;try{var g=Object.seal({x:4}),h=new a(p([[g,"s"]]));if("s"!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)
return!1;var l=h.entries(),n=l.next();if(n.done||n.value[0]!=g||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}})())
return a;var f=new WeakMap();e.prototype.set=function(g,h){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.h[l.id]=[]);l.v?(l.v.value=h):((l.v={next:this.g,K:this.g.K,head:this.g,key:g,value:h,}),l.list.push(l.v),(this.g.K.next=l.v),(this.g.K=l.v),this.size++);return this};e.prototype.delete=function(g){g=d(this,g);return g.v&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.h[g.id],(g.v.K.next=g.v.next),(g.v.next.K=g.v.K),(g.v.head=null),this.size--,!0):!1};e.prototype.clear=function(){this.h={};this.g=this.g.K=b();this.size=0};e.prototype.has=function(g){return!!d(this,g).v};e.prototype.get=function(g){return(g=d(this,g).v)&&g.value};e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};e.prototype.keys=function(){return c(this,function(g){return g.key})};e.prototype.values=function(){return c(this,function(g){return g.value})};e.prototype.forEach=function(g,h){for(var l=this.entries(),n;!(n=l.next()).done;)(n=n.value),g.call(h,n[1],n[0],this);};e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push(b[d]);return c}});function ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}
d=!0;return{done:!0,value:void 0}},};e[Symbol.iterator]=function(){return e};return e}
u("Array.prototype.keys",function(a){return a?a:function(){return ma(this,function(b){return b})}});u("Set",function(a){function b(c){this.g=new Map();if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value);}
this.size=this.g.size}
if((function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)
return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)
return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}})())
return a;b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};b.prototype.clear=function(){this.g.clear();this.size=0};b.prototype.has=function(c){return this.g.has(c)};b.prototype.entries=function(){return this.g.entries()};b.prototype.values=function(){return this.g.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};return b});u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}
return!1}});u("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)
throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined",);if(b instanceof RegExp)
throw new TypeError("First argument to String.prototype.includes must not be a regular expression",);return-1!==this.indexOf(b,c||0)}});u("Array.prototype.values",function(a){return a?a:function(){return ma(this,function(b,c){return c})}});var B={ma:"loaded",sa:"start",ja:"firstQuartile",na:"midpoint",ta:"thirdQuartile",ha:"complete",oa:"pause",qa:"resume",ga:"bufferStart",fa:"bufferFinish",ra:"skipped",ua:"volumeChange",pa:"playerStateChange",ea:"adUserInteraction",},na={ka:"full",ia:"domain",la:"limited"};function C(a,b){this.x=null!=a.x?a.x:a.left;this.y=null!=a.y?a.y:a.top;this.width=a.width;this.height=a.height;this.I=this.x+this.width;this.J=this.y+this.height;this.G=a.G||void 0;this.V=a.V||[];this.h=a.friendlyObstructionClass||void 0;this.i=a.friendlyObstructionPurpose||void 0;this.j=a.friendlyObstructionReason||void 0;this.O=void 0!==a.O?!0===a.O:!0;this.l=void 0!==a.hasWindowFocus?!0===a.hasWindowFocus:!0;this.D=a.D||void 0;this.$=a.$||void 0;this.N=a.N||[];this.P=a.P||!1;this.g=b}
function oa(a){var b={};return(b.width=a.width),(b.height=a.height),b}
function D(a){var b={};return Object.assign({},oa(a),((b.x=a.x),(b.y=a.y),b))}
function G(a){var b=D(a),c={};return Object.assign({},b,((c.endX=a.I),(c.endY=a.J),c))}
C.prototype.T=function(a){if(null==a)return!1;a=D(a);var b=a.y,c=a.width,d=a.height;return(this.x===a.x&&this.y===b&&this.width===c&&this.height===d)};function pa(a){return a.width*a.height}
function H(a){return 0===a.width||0===a.height}
function qa(a,b){a=D(a);for(var c=[],d=[],e=0;e<b.length;e++){var f=D(b[e]);f=ra(a,f);I(c,f.x);I(c,f.I);I(d,f.y);I(d,f.J)}
c=c.sort(function(k,g){return k-g});d=d.sort(function(k,g){return k-g});return{ca:c,da:d}}
function ra(a,b){return{x:Math.max(a.x,b.x),y:Math.max(a.y,b.y),I:Math.min(a.x+a.width,b.x+b.width),J:Math.min(a.y+a.height,b.y+b.height),}}
function I(a,b){-1===a.indexOf(b)&&a.push(b)}
function sa(){this.h=this.g=this.i=this.m=void 0;this.u=0;this.o=[];this.B=[];this.A=0;this.s=[];this.j=[];this.l=[]}
sa.prototype.T=function(a){return null==a?!1:JSON.stringify(J(this))===JSON.stringify(J(a))};function J(a){var b=[],c=[],d={viewport:a.m,adView:{percentageInView:a.u,pixelsInView:a.A,reasons:a.l},declaredFriendlyObstructions:a.o.length,};if(void 0!==a.g){d.adView.geometry=D(a.g);d.adView.geometry.pixels=pa(a.g);d.adView.onScreenGeometry=D(a.h);d.adView.onScreenGeometry.pixels=ta(a);for(var e=0;e<a.j.length;e++)b.push(D(a.j[e]));for(e=0;e<a.B.length;e++){var f=a.B[e],k=f,g={};k.h&&(g.obstructionClass=k.h);k.i&&(g.obstructionPurpose=k.i);k.j&&(g.obstructionReason=k.j);f=ra(a.g,f);c.push(Object.assign({},{x:f.x,y:f.y,width:f.I-f.x,height:f.J-f.y},g,),)}
d.adView.onScreenGeometry.obstructions=b;d.adView.onScreenGeometry.friendlyObstructions=c}
return d}
function ua(a,b){b=oa(b);a.m={};a.m.width=b.width;a.m.height=b.height;a.i={};a.i.x=0;a.i.y=0;a.i.width=b.width;a.i.height=b.height;a.i.endX=b.width;a.i.endY=b.height}
function va(){return{x:0,y:0,endX:0,endY:0,width:0,height:0}}
function wa(a,b){var c={};c.x=Math.max(a.x,b.x);c.y=Math.max(a.y,b.y);c.endX=Math.min(a.endX,b.endX);c.endY=Math.min(a.endY,b.endY);c.width=Math.max(0,c.endX-c.x);c.height=Math.max(0,c.endY-c.y);return c}
function xa(a,b){return 0.01<b.width-a.width||0.01<b.height-a.height}
function ya(a){if(-1!==a.l.indexOf("backgrounded"))(a.u=0),(a.A=0);else{var b=pa(a.g);if(0!==b){var c=ta(a);a.u=Math.round((c/b)*100);a.A=c}}}
function za(a,b){if(H(b)||!a.h)b=!1;else{var c=G(a.h),d=c.y,e=c.endX;a=c.endY;var f=b.I;c=c.x;(f=f<c||0.01>Math.abs(f-c))||((f=b.x),(f=f>e||0.01>Math.abs(f-e)));(e=f)||((e=b.J),(e=e<d||0.01>Math.abs(e-d)));(d=e)||((b=b.y),(d=b>a||0.01>Math.abs(b-a)));b=!d}
return b}
function K(a,b){for(var c=!1,d=0;d<a.l.length;d++)a.l[d]===b&&(c=!0);c||a.l.push(b)}
function ta(a){var b=Math,c=b.max,d=pa(a.h),e=a.j,f=0;if(0<e.length){var k=qa(a.h,e);a=k.ca;k=k.da;for(var g=0;g<a.length-1;g++)
for(var h=(a[g]+(a[g]+1))/2,l=a[g+1]-a[g],n=0;n<k.length-1;n++){for(var q=(k[n]+(k[n]+1))/2,z=k[n+1]-k[n],y=!1,E=0;E<e.length;E++){var F=D(e[E]);if(F.x<h&&F.x+F.width>h&&F.y<q&&F.y+F.height>q){y=!0;break}}
y&&(f+=Math.round(l)*Math.round(z))}}
return c.call(b,0,d-f)}
function Aa(){}
function Ba(){}
function Ca(a,b,c,d){var e=b.P?!0:b.G===d;if(e){c.g=b;var f=G(c.g);a=wa(c.i,f);var k=c.g;"notAttached"===k.D||"noWindowFocus"===k.D||"noAdView"===k.D?(K(c,"notFound"),(c.h=new C(va(),!1))):((k=c.g),"viewInvisible"===k.D||"viewGone"===k.D||"viewNotVisible"===k.D||"viewAlphaZero"===k.D||"viewHidden"===k.D||void 0!==c.g.D||H(c.g)?(K(c,"hidden"),(c.h=new C(va(),!1))):(c.g.l||(K(c,"backgrounded"),K(c,"noWindowFocus")),xa(a,f)&&K(c,"clipped"),(c.h=new C(a,!1))))}else if(((f=!0),b.g&&(f=-1!==b.V.indexOf(d)?!1:!1===b.O),f)){k=b.N;for(var g=0;g<k.length;g++)(f=void 0!==c.g),Ca(a,new C(k[g],f),c,d);}
e||void 0===c.g||(b.g?-1!==b.V.indexOf(d)?c.o.push(b):c.s.push(b):((e=G(b)),(d=G(c.h)),D(c.h),!H(c.h)&&b.O&&((b=wa(d,e)),xa(b,d)&&(K(c,"clipped"),(c.h=new C(b,!1))))))}
function Da(){this.g=new Map();this.h=null}
function Ea(){Fa||(Fa=new Da());return Fa}
var Fa=null;function Ga(a,b){this.y=this.x=0;this.width=a;this.height=b}
function Ha(){this.G=null;this.i={apiVersion:"1.0",accessMode:"limited",environment:"web",omidJsInfo:{omidImplementer:"omsdk",serviceVersion:"1.4.10-iab4273",},adSessionType:"html",supports:["clid","vlid"],};this.B=null;this.A="foregrounded";this.o=this.u="none";this.m=this.l=this.j=this.C=this.h=this.g=this.M=this.S=null;this.s=new Map()}
var L=(function(){if("undefined"!==typeof omidGlobal&&omidGlobal)return omidGlobal;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&window)return window;if("undefined"!==typeof globalThis&&globalThis)return globalThis;var a=Function("return this")();if(a)return a;throw Error("Could not determine global object context.")})();function Ia(a){if(a===L)return!1;try{if("undefined"===typeof a.location.hostname)return!0}catch(b){return!0}
return!1}
function Ja(){var a=omidGlobal;if(null==a||"undefined"===typeof a.top||null==a.top)return null;try{var b=a.top;return Ia(b)?null:b.location.href}catch(c){return null}}
function Ka(a,b){this.g=a;this.h=b}
da.Object.defineProperties(Ka.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.g},},origin:{configurable:!0,enumerable:!0,get:function(){return this.h},},});function M(){var a=w.apply(0,arguments);La(function(){throw new(Function.prototype.bind.apply(Error,[null,"Could not complete the test successfully - "].concat(r(a)),))()},function(){return console.error.apply(console,r(a))},)}
function Ma(){var a=w.apply(0,arguments);La(function(){},function(){return console.error.apply(console,r(a))},)}
function La(a,b){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==typeof console&&console&&console.error&&b()}
function Na(a){this.g=a;this.l=[];this.i=[];this.j=[];this.m=[];this.o={}}
function Oa(a,b){if(void 0!==a.g&&a.g.G&&!1!==Pa(a,b)){var c=b.event;a.j.filter(function(d){return d.type===c.type}).forEach(function(d){a.h(d.H,c)})}}
function N(a,b){a.l.push(b);Oa(a,b)}
function Qa(a,b,c){void 0!==a.g&&a.g.G&&a.l.filter(function(d){return d.event.type===b&&Pa(a,d)}).map(function(d){return d.event}).forEach(function(d){a.h(c.H,d)})}
function Pa(a,b){var c=b.event.type,d=-1!==Object.values(B).indexOf(c)&&"volumeChange"!==c;return"impression"===c||("loaded"===c&&a.g.h)?b.origin===a.g.o:d?b.origin===a.g.u:!0}
function Ra(a,b,c){Object.keys(B).forEach(function(d){d=B[d];var e={type:d,U:c,H:b};a.j.push(e);Qa(a,d,e)})}
function Sa(a,b,c,d){var e={aa:c,U:d,H:b};a.m.push(e);a.i.forEach(function(f){var k=Ta(f);"sessionStart"===f.event.type&&Ua(a,k,e);a.h(e.H,k)})}
function Va(a,b,c){var d=O(a,"sessionError","native",{errorType:b,message:c});a.i.push(d);a.m.forEach(function(e){a.h(e.H,d.event)})}
function Wa(a,b){a.o=Object.assign(a.o,b);b=a.g.i;if(void 0!==b){b=Object.assign({},Xa(P(a,Q(a,{context:b}),!0)),{supportsLoadedEvent:!!a.g.h||"video"==a.g.g,});Object.assign(b,{pageUrl:Ja(),contentUrl:a.g.B});var c=O(a,"sessionStart","native",b);a.i.push(c);a.m.forEach(function(d){var e=Ta(c);Ua(a,e,d);a.h(d.H,e)},a);Ya(a)}}
function Ua(a,b,c){c.aa&&(b.data.verificationParameters=a.o[c.aa]);c.U&&(c=a.g.s.get(c.U))&&((b.data.verificationParameters=c.verificationParameters),(b.data.context.accessMode=c.accessMode),"full"===c.accessMode&&(a.g.l&&(b.data.context.videoElement=a.g.l),a.g.j&&(b.data.context.slotElement=a.g.j)))}
function Za(a){var b=O(a,"sessionFinish","native");a.i.push(b);a.m.forEach(function(c){a.h(c.H,b.event)})}
Na.prototype.h=function(a){var b=w.apply(1,arguments);try{a.apply(null,r(b))}catch(c){Ma(c)}};function Ya(a){var b=a.l.filter(function(f){return(Object.values(B).includes(f.event.type)&&"video"==a.g.g&&f.origin===a.g.u)||("loaded"==f.event.type&&"display"==a.g.g&&f.origin===a.g.o)?!0:!1}).map(function(f){return f.event}),c=a.g.G||"",d={};b=p(b);for(var e=b.next();!e.done;d={F:d.F},e=b.next()){d.F=e.value;d.F.adSessionId||(d.F.adSessionId=c);if("loaded"==d.F.type){if(!a.g.h&&"display"==a.g.g)continue;d.F.data=P(a,Q(a,d.F.data))}
a.j.filter((function(f){return function(k){return k.type===f.F.type}})(d),).forEach((function(f){return function(k){return k.H(f.F)}})(d),)}}
function $a(a,b){a:{b=new Set(b);a=p(a.l.concat(a.i));for(var c=a.next();!c.done;c=a.next())
if(((c=c.value),b.has(c.event.type)&&"javascript"!=c.origin)){b=!0;break a}
b=!1}
return b?(M("Event owner cannot be registered after its events have already been published.",),!1):!0}
function ab(a){var b=a.g.o;return"none"!=b&&"javascript"!=b?(M("Impression event is owned by "+(a.g.o+", not javascript.")),!1):!0}
function bb(a){var b=a.g.u;return"none"!=b&&"javascript"!=b?(M("Media events are owned by "+(a.g.u+", not javascript.")),!1):!0}
function P(a,b,c){c=void 0===c?!1:c;b=Object.assign({},b);a.g.g&&Object.assign(b,{mediaType:a.g.g});a.g.h&&(c||"definedByJavaScript"!==a.g.h)&&Object.assign(b,{creativeType:a.g.h});return b}
function Xa(a){var b=Ea().h;return b?Object.assign({},a,{lastActivity:b}):a}
function Q(a,b){return a.g.C?Object.assign({},b,{impressionType:a.g.C}):b}
function O(a,b,c,d){return new Ka({adSessionId:a.g.G||"",timestamp:new Date().getTime(),type:b,data:d,},c,)}
function Ta(a){a=a.event;var b=a.data?Object.assign({},a.data):void 0;"sessionStart"===a.type&&(b.context=Object.assign({},b.context));return{adSessionId:a.adSessionId,timestamp:a.timestamp,type:a.type,data:b,}}
function cb(a,b){this.h=a;this.g=b}
function db(a,b,c){return eb(a,"setInterval")(b,c)}
function fb(a,b){eb(a,"clearInterval")(b)}
function gb(a,b){eb(a,"clearTimeout")(b)}
function eb(a,b){return a.g&&a.g[b]?a.g[b]:hb(a,b)}
function ib(a,b,c,d){if(a.g.document&&a.g.document.body){var e=a.g.document.createElement("img");e.width=1;e.height=1;e.style.display="none";e.src=b;c&&e.addEventListener("load",function(){return c()});d&&e.addEventListener("error",function(){return d()});a.g.document.body.appendChild(e)}else hb(a,"sendUrl")(b,c,d)}
function hb(a,b){if(a.g&&a.g.omidNative&&a.g.omidNative[b])
return a.g.omidNative[b].bind(a.g.omidNative);throw Error('Native interface method "'+b+'" not found.')}
function jb(a){return!(!a||!a.tagName||"iframe"!==a.tagName.toLowerCase())}
function R(a,b,c,d,e){this.j=a;this.ba=b;this.W=c;this.i=d;this.Z=e;this.h=null;this.g=this.l=this.M=void 0;this.Y=!0;this.o=void 0;kb(this)}
function kb(a){if(!a.h){var b;a:{if((b=a.j.document)&&b.getElementsByClassName&&(b=b.getElementsByClassName("omid-element"))){if(1==b.length){b=b[0];break a}
1<b.length&&a.Y&&(Va(a.W,"generic","More than one element with 'omid-element' class name.",),(a.Y=!1))}
b=null}
if(b&&b.tagName&&"video"===b.tagName.toLowerCase())a.i.l=b;else if(b&&b.tagName)a.i.j=b;else return;lb(a)}}
function lb(a){a.i.l?((a.h=a.i.l),a.s()):a.i.j&&((a.h=a.i.j),jb(a.h)?a.i.m&&a.s():a.s())}
function S(a){a.g&&(jb(a.h)?a.i.m&&(a.S(),mb(a)):(a.S(),mb(a)))}
R.prototype.B=function(){this.o&&(this.j.document.removeEventListener("visibilitychange",this.o),(this.o=void 0))};R.prototype.s=function(){var a=this;this.o||((this.o=function(){a.i.A=a.j.document.hidden?"backgrounded":"foregrounded";S(a)}),this.j.document.addEventListener("visibilitychange",this.o),this.o())};function mb(a){if(a.M){a.i.R=a.M;a=a.ba;var b=a.g.R,c=a.g.L;if(b&&!b.T(c)){c=J(b);var d=a.h;"audio"!=d.g.h&&N(d,O(d,"geometryChange","native",c));a.g.L=b}}}
function nb(a){if(a.g&&a.i.m){var b=new C(a.i.m,!1),c=a.g.x;a=a.g.y;b.x+=c;b.y+=a;b.I+=c;b.J+=a;b.O=!0;return b}}
function T(a,b,c,d,e,f){R.call(this,a,c,d,e,f);this.u=b;this.m=void 0}
v(T,R);T.prototype.B=function(){void 0!==this.m&&(fb(this.Z,this.m),(this.m=void 0));R.prototype.B.call(this)};T.prototype.s=function(){var a=this;R.prototype.s.call(this);null==this.h?(this.m=void 0):void 0===this.m&&((this.m=db(this.Z,function(){return ob(a)},200,)),ob(this))};T.prototype.S=function(){if(this.l){var a=nb(this);if(a){this.g.P=!1;a.P=!0;for(var b=!1,c=0;c<this.g.N.length;c++)
if(this.g.N[c].P){this.g.N[c]=a;b=!0;break}
b||this.g.N.push(a)}else this.g.P=!0;b=this.u;c=this.i.A;var d=this.i.G,e=this.R();a=new sa();var f=new C(this.l,!1);ua(a,f);Ca(b,f,a,d);if(e)
if((f.$&&(K(a,"backgrounded"),K(a,"noOutputDevice")),"backgrounded"===c))
K(a,"backgrounded");else if(void 0!==a.g){for(b=0;b<a.o.length;b++)za(a,a.o[b])&&a.B.push(a.o[b]);for(b=0;b<a.s.length;b++){if((c=za(a,a.s[b]))){b:{c=a.s[b];for(d=0;d<a.j.length;d++)
if(a.j[d].T(c)){c=!0;break b}
c=!1}
c=!c}
c&&(K(a,"obstructed"),a.j.push(a.s[b]))}
ya(a)}else K(a,"notFound");else(a.l=["unmeasurable"]),(a.m=void 0),(a.u=0),(a.j=[]),a.g&&((b=a.g),(c={}),(b=new C(((c.x=0),(c.y=0),(c.width=b.width),(c.height=b.height),c),b.g,)),(a.g=b)),(a.h=va());this.M=a}};T.prototype.R=function(){return pb(this)};function ob(a){if(void 0!==a.m){if(pb(a)){var b=a.j.top;b=new C(new Ga(b.innerWidth,b.innerHeight),!1)}else b=new C(new Ga(0,0),!1);var c=a.h.getBoundingClientRect();if(null==c.x||isNaN(c.x))c.x=c.left;if(null==c.y||isNaN(c.y))c.y=c.top;c=new C(c,!1);(b.T(a.l)&&c.T(a.g))||((a.g=c),(a.g.O=!0),(a.l=b),a.l.N.push(a.g),S(a))}}
function pb(a){try{var b=a.j.top;return 0<=b.innerHeight&&0<=b.innerWidth}catch(c){}
return!1}
function U(a,b,c,d,e,f){R.call(this,a,c,d,e,f);this.C=this.u=this.A=this.m=void 0;this.X=!1;this.L=void 0}
v(U,R);U.prototype.B=function(){this.m&&this.m.disconnect();qb(this);R.prototype.B.call(this)};U.prototype.s=function(){R.prototype.s.call(this);if(this.h&&(this.m||(this.m=rb(this)),sb(this),tb(this.h)&&ub(this),"backgrounded"===this.i.A)){var a=vb(new Ga(0,0));this.L=this.g=this.l=a;S(this)}};U.prototype.S=function(){if(this.g&&this.L){var a=nb(this);if(a){var b=a;var c=this.L;var d=Math.max(a.x,c.x);var e=Math.max(a.y,c.y),f=Math.min(a.I,c.I);a=Math.min(a.J,c.J);f<=d||a<=e?(d=null):((c={}),(d=new C(((c.x=d),(c.y=e),(c.width=Math.abs(f-d)),(c.height=Math.abs(a-e)),c),!1,)));d||(d=new C({x:0,y:0,width:0,height:0},!1))}else(b=this.g),(d=this.L);e=new sa();this.l&&ua(e,this.l);(f="backgrounded"==this.i.A)&&K(e,"backgrounded");e.g=b;e.h=d;ya(e);this.X?!f&&H(e.g)?K(e,"hidden"):f||100===e.u||K(e,"clipped"):K(e,"viewport");this.M=e}};U.prototype.R=function(){return!0};function qb(a){a.A&&(a.A.disconnect(),(a.A=void 0));a.u&&(a.u.disconnect(),(a.u=void 0));a.C&&((0,a.j.removeEventListener)("resize",a.C),(a.C=void 0))}
function sb(a){a.m&&a.h&&(a.m.unobserve(a.h),a.m.observe(a.h))}
function tb(a){a=a.getBoundingClientRect();return 0==a.width||0==a.height}
function rb(a){return new a.j.IntersectionObserver(function(b){try{if(b.length){for(var c,d=b[0],e=1;e<b.length;e++)
b[e].time>d.time&&(d=b[e]);c=d;a.l=vb(c.rootBounds);a.g=vb(c.boundingClientRect);a.L=vb(c.intersectionRect);a.X=!!c.isIntersecting;S(a)}}catch(f){a.B(),Va(a.W,"generic","Problem handling IntersectionObserver callback: "+f.message,)}},{root:null,rootMargin:"0px",threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],},)}
function ub(a){a.j.ResizeObserver?a.A||((a.A=wb(a,function(){return xb(a)})),a.A.observe(a.h)):(a.C||((a.C=function(){return xb(a)}),(0,a.j.addEventListener)("resize",a.C)),a.u||((a.u=new MutationObserver(function(){return xb(a)})),a.u.observe(a.h,{childList:!1,attributes:!0,subtree:!1})))}
function xb(a){a.h&&!tb(a.h)&&(sb(a),qb(a))}
function wb(a,b){return new a.j.ResizeObserver(b)}
function vb(a){if(a&&null!==a.x&&null!==a.y&&null!==a.width&&null!==a.height)
return new C(a,!1);}
function yb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=(16*Math.random())|0;return"y"===a?((b&3)|8).toString(16):b.toString(16)},)}
function zb(a,b){var c=void 0===c?L:c;this.i=a;this.g=c;this.j=b;this.h=[]}
function Bb(a){if(!a.g||!a.g.document)
throw Error("OMID Service Script is not running within a window.");var b=a.h;a.h=[];b.forEach(function(c){try{var d=c.accessMode,e="string"===typeof d&&-1!==Object.values(na).indexOf(d)?c.accessMode:null;var f=e?e:"limited";c.accessMode=f;a:{var k=c.resourceUrl,g=a.g.location.origin;try{var h=new URL(k,g);break a}catch(E){}
try{h=new URL(k);break a}catch(E){}
h=null}
if((d=h)){var l=yb(),n=a.g.document,q=n.createElement("iframe");q.id="omid-verification-script-frame-"+l;q.style.display="none";["full","limited"].includes(f)?(q.srcdoc="<html><head>\n<script nonce=\""+ window.nonce+"\" type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionSource': 'web',\n'injectionId': '"+(l+'\',\n};\x3c/script>\n<script nonce="'+ window.nonce+'" type="text/javascript" src="')+d.href+'">\x3c/script>\n</head><body></body></html>'):"domain"==f&&(q.src=Cb(a,l,d).href);["domain","limited"].includes(f)&&(q.sandbox="allow-scripts");n.body.appendChild(q);Ea().g.set(l,q);var z=c.vendorKey,y=c.verificationParameters;z=void 0===z?"":z;y=void 0===y?"":y;z&&"string"===typeof z&&""!==z&&y&&"string"===typeof y&&""!==y&&(a.i.o[z]=y);a.j.s.set(l,c)}}catch(E){Ma("OMID verification script "+c.resourceUrl+" failed to load: "+E,)}})}
function Cb(a,b,c){var d="/.well-known/omid/omloader-v1.html#";new Map([["verificationScriptUrl",c.href],["injectionId",b],]).forEach(function(e,f){d+=encodeURIComponent(f)+"="+encodeURIComponent(e)+"&"});b=null;try{b=new URL(d,a.g.parent.location.origin)}catch(e){throw Error("OMID Service Script cannot access the parent window.")}
return b}
function Db(a,b,c,d){var e=this;this.g=a;this.i=b;this.h=c;this.l=d;this.j=!1;Eb(this,function(f){if("sessionStart"===f.type){e.j=!0;try{Bb(e.l)}catch(k){M(k.message)}}
"sessionFinish"===f.type&&(e.j=!1)})}
function Eb(a,b,c,d){Sa(a.i,b,c,d)}
m=Db.prototype;m.setSlotElement=function(a){a&&a.tagName?((this.g.j=a),this.h&&lb(this.h)):M("setSlotElement called with a non-HTMLElement.  It will be ignored.")};m.setElementBounds=function(a){this.g.m=a;this.h&&lb(this.h);this.h&&S(this.h)};m.error=function(a,b){Va(this.i,a,b)};m.injectVerificationScriptResources=function(a){var b=this.l;b.h.push.apply(b.h,r(a));if(this.j)
try{Bb(this.l)}catch(c){M(c.message)}};m.setCreativeType=function(a,b){b=void 0===b?null:b;if(!this.g.g||this.g.h)(this.g.h=a),"video"==a||"audio"==a?(this.g.g="video"):"htmlDisplay"==a||"nativeDisplay"==a?(this.g.g="display"):"definedByJavaScript"==a&&b&&(this.g.g="none"==b?"display":"video");};m.setImpressionType=function(a){if(!this.g.g||this.g.h)this.g.C=a};m.setClientInfo=function(a,b,c){var d=this.g.i||{};d.omidJsInfo=Object.assign({},d.omidJsInfo,{sessionClientVersion:a,partnerName:b,partnerVersion:c,});this.g.i=d;return this.g.i.omidJsInfo.serviceVersion};function Fb(a,b){if(!b)return a.g;for(var c=p(a.h.values()),d=c.next();!d.done;d=c.next())
if(((d=d.value),d.g.s.has(b)))return d;return a.g}
function V(a,b){return null==b?a.g:a.h.get(b)||a.g}
function Gb(a){var b=new Ha(),c=new Na(b),d=new Aa(),e=new Ba(),f=new cb(c,b);a=a.i;var k=omidGlobal;d=k?k.IntersectionObserver&&(k.MutationObserver||k.ResizeObserver)?new U(k,d,f,c,b,a):new T(k,e,f,c,b,a):null;return new Db(b,c,d,new zb(c,b))}
function W(a,b,c,d){this.h=a;this.method=b;this.version=c;this.g=d}
function Hb(a){return(!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===typeof a.omid_message_guid&&"string"===typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args))}
function Ib(a){return new W(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args,)}
function Jb(a){var b={};b=((b.omid_message_guid=a.h),(b.omid_message_method=a.method),(b.omid_message_version=a.version),b);void 0!==a.g&&(b.omid_message_args=a.g);return b}
function Kb(a){this.i=a}
function X(a){this.i=a;this.handleExportedMessage=X.prototype.j.bind(this)}
v(X,Kb);X.prototype.h=function(a,b){b=void 0===b?this.i:b;if(!b)
throw Error("Message destination must be defined at construction time or when sending the message.",);b.handleExportedMessage(Jb(a),this)};X.prototype.j=function(a,b){Hb(a)&&this.g&&this.g(Ib(a),b)};function Lb(a){return Mb(a,"SessionService.")}
function Mb(a,b){return(a=a.match(new RegExp("^"+b+"(.*)")))&&a[1]}
function Nb(a,b){this.h=a;this.i=b}
Nb.prototype.g=function(a){var b=w.apply(1,arguments);a:switch(a){case "registerSessionObserver":var c=b.slice(1);break a;default:c=b}
return this.h("SessionService."+a,this.j.bind(this,a,b),c)};Nb.prototype.j=function(a,b,c){switch(a){case "registerSessionObserver":(a=p(b).next().value),a(c)}};function Y(a,b){return a.g.bind(a,b)}
function Ob(a,b){b=void 0===b?L:b;null==b.omidSessionInterface&&((a={setSessionClientWindow:a.i,setClientInfo:Y(a,"setClientInfo"),registerSessionObserver:Y(a,"registerSessionObserver"),startAdSession:Y(a,"startSession"),finishAdSession:Y(a,"finishSession"),reportError:Y(a,"sessionError"),registerAdEvents:Y(a,"registerAdEvents"),registerMediaEvents:Y(a,"registerMediaEvents"),injectVerificationScriptResources:Y(a,"injectVerificationScriptResources",),setSlotElement:Y(a,"setSlotElement"),setVideoElement:Y(a,"setVideoElement"),setElementBounds:Y(a,"setElementBounds"),setCreativeType:Y(a,"setCreativeType"),setImpressionType:Y(a,"setImpressionType"),setContentUrl:Y(a,"setContentUrl"),adEvents:{impressionOccurred:Y(a,"impressionOccurred"),loaded:Y(a,"loaded"),},mediaEvents:{start:Y(a,"start"),firstQuartile:Y(a,"firstQuartile"),midpoint:Y(a,"midpoint"),thirdQuartile:Y(a,"thirdQuartile"),complete:Y(a,"complete"),pause:Y(a,"pause"),resume:Y(a,"resume"),bufferStart:Y(a,"bufferStart"),bufferFinish:Y(a,"bufferFinish"),skipped:Y(a,"skipped"),volumeChange:Y(a,"volumeChange"),playerStateChange:Y(a,"playerStateChange"),adUserInteraction:Y(a,"adUserInteraction"),},}),(a.mediaEvents.loaded=a.adEvents.loaded),(a.videoEvents=a.mediaEvents),Object.freeze(a),Object.defineProperty(b,"omidSessionInterface",{value:a,writable:!1,}))}
function Pb(a,b){this.i=b=void 0===b?L:b;var c=this;a.addEventListener("message",function(d){if("object"===typeof d.data){var e=d.data;Hb(e)&&d.source&&c.g&&c.g(Ib(e),d.source)}})}
v(Pb,Kb);Pb.prototype.h=function(a,b){b=void 0===b?this.i:b;if(!b)
throw Error("Message destination must be defined at construction time or when sending the message.",);b.postMessage(Jb(a),"*")};function Qb(){this.g=Rb}
m=Qb.prototype;m.registerSessionObserver=function(a,b){Eb(V(this.g,a),b)};m.setSlotElement=function(a,b){V(this.g,a).setSlotElement(b)};m.setElementBounds=function(a,b){V(this.g,a).setElementBounds(b)};m.error=function(a,b,c){V(this.g,a).error(b,c)};function Z(a,b,c,d){a=V(a.g,b);if("impression"==c)
ab(a.i)&&((c=a.i),(d=(d=c.g.L)?J(d):null),(d=P(c,Q(c,d))),N(c,O(c,"impression","javascript",d)),a.h&&kb(a.h));else{if("loaded"==c){if(((b=d),(b=void 0===b?null:b),bb(a.i)&&((d=a.i),d.g.h||"display"!=d.g.g)))(b=O(d,"loaded","javascript",P(d,Q(d,void 0===b?null:b)),)),N(d,b);}else if(bb(a.i)){b=a.i;("start"!==c&&"volumeChange"!==c)||null!=(d&&d.deviceVolume)||(d.deviceVolume=b.g.S);if(d&&("start"===c||"volumeChange"===c)){var e=d.videoPlayerVolume,f=d.mediaPlayerVolume;null!=e?(Object.assign(d,{mediaPlayerVolume:e}),(b.g.M=e)):null!=f&&(Object.assign(d,{videoPlayerVolume:f}),(b.g.M=f))}
N(b,O(b,c,"javascript",d))}["loaded","start"].includes(c)&&a.h&&kb(a.h)}}
m.injectVerificationScriptResources=function(a,b){V(this.g,a).injectVerificationScriptResources(b)};m.setCreativeType=function(a,b,c){c=void 0===c?null:c;V(this.g,a).setCreativeType(b,c)};m.setImpressionType=function(a,b){V(this.g,a).setImpressionType(b)};m.setClientInfo=function(a,b,c,d){var e=this.g;if(null==a)a=e.g;else{var f=[].concat(r(e.h.values())).includes(e.g)?Gb(e):e.g;e.h.set(a,f);a=f}
return a.setClientInfo(b,c,d)};function Sb(a){a=a.split("-")[0].split(".");for(var b=["1","0","3"],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}
return!0}
function Tb(a,b){return/\d+\.\d+\.\d+(-.*)?/.test(a)&&Sb(a)?b:JSON.stringify(b)}
function Ub(a,b){return/\d+\.\d+\.\d+(-.*)?/.test(a)&&Sb(a)?b?b:[]:b&&"string"===typeof b?JSON.parse(b):[]}
function Vb(){var a=Wb,b=this;var c=void 0===c?omidGlobal:c;this.g=a;this.i=c;this.j=new X();this.i.omid=this.i.omid||{};this.i.omid.v1_SessionServiceCommunication=this.j;this.h=c&&c.addEventListener&&c.postMessage?new Pb(c):null;this.l=null;this.j.g=this.m.bind(this);this.h&&(this.h.g=this.o.bind(this));this.s=new Nb(function(d,e,f){try{Xb(b,d,e,f)}catch(k){M(Yb(k))}},function(d){b.l=d;var e=yb();b.h.h(new W(e,"identifyServiceWindow","1.4.10-iab4273"),d)},);Ob(this.s,this.i)}
Vb.prototype.m=function(a,b){null!=Lb(a.method)&&Zb(this,a,b,this.j)};Vb.prototype.o=function(a,b){if(null!=Lb(a.method)){if(!this.l||b!==this.l)
return(M("Unrecognized session client window. Cross-origin session clients must register via the setSessionClientWindow API. See https://interactiveadvertisingbureau.github.io/Open-Measurement-SDKJS/iframes.html#om-sdk-js-session-client",),!1);Zb(this,a,b,this.h)}};function Zb(a,b,c,d){function e(){var h=new W(f,"response",g,Tb(g,w.apply(0,arguments)));d.h(h,c)}
var f=b.h,k=b.method,g=b.version;b=Ub(g,b.g);try{Xb(a,k,e,b)}catch(h){d.h(new W(f,"error",g,Yb(h)),c)}}
function Xb(a,b,c,d){if(null!=Lb(b))
switch(Lb(b)){case "registerAdEvents":var e=p(d).next().value;a=V(a.g.g,e).i;$a(a,["impression"])&&ab(a)&&(a.g.o="javascript");break;case "registerMediaEvents":e=p(d).next().value;a=V(a.g.g,e).i;$a(a,Object.values(B))&&bb(a)&&(a.g.u="javascript");break;case "registerSessionObserver":e=p(d).next().value;a.g.registerSessionObserver(e,c);break;case "setSlotElement":c=p(d);e=c.next().value;c=c.next().value;a.g.setSlotElement(c,e);break;case "setVideoElement":c=p(d);e=c.next().value;c=c.next().value;a=V(a.g.g,c);e&&e.tagName&&"video"===e.tagName.toLowerCase()?((a.g.l=e),a.h&&lb(a.h)):M("setVideoElement called with a non-HTMLVideoElement. It will be ignored.",);break;case "setElementBounds":c=p(d);e=c.next().value;c=c.next().value;a.g.setElementBounds(c,e);break;case "startSession":c=p(d);b=c.next().value;c=c.next().value;null!=b&&"object"===typeof b?((d=b.customReferenceData),(b=b.underEvaluation),"string"===typeof d||(d=void 0),"boolean"===typeof b||(b=!1),(b={customReferenceData:d,underEvaluation:b})):(b=null);if(null==b)break;e=void 0===e?null:e;a=V(a.g.g,c);c=c||yb();a.g.G=c;b.canMeasureVisibility=a.h.R();c=a.g;void 0!==b.contentUrl&&((c.B=b.contentUrl),(b.contentUrl=void 0));d=c.i||{};b.omidJsInfo=Object.assign({},d.omidJsInfo||{},b.omidJsInfo||{},);b=Object.assign({},d,b);c.i=b;Wa(a.i,e);a.h&&kb(a.h);break;case "finishSession":e=p(d).next().value;a=a.g;e=V(a.g,e);a=a.g;a.g=Gb(a);Za(e.i);e.h.B();break;case "impressionOccurred":e=p(d).next().value;Z(a.g,e,"impression");break;case "loaded":c=p(d);e=c.next().value;c=c.next().value;e?((b={skippable:e.isSkippable,autoPlay:e.isAutoPlay,position:e.position,}),e.isSkippable&&(b.skipOffset=e.skipOffset),Z(a.g,c,"loaded",b)):Z(a.g,c,"loaded");break;case "start":b=p(d);e=b.next().value;c=b.next().value;b=b.next().value;Z(a.g,b,"start",{duration:e,mediaPlayerVolume:c});break;case "firstQuartile":e=p(d).next().value;Z(a.g,e,"firstQuartile");break;case "midpoint":e=p(d).next().value;Z(a.g,e,"midpoint");break;case "thirdQuartile":e=p(d).next().value;Z(a.g,e,"thirdQuartile");break;case "complete":e=p(d).next().value;Z(a.g,e,"complete");break;case "pause":e=p(d).next().value;Z(a.g,e,"pause");break;case "resume":e=p(d).next().value;Z(a.g,e,"resume");break;case "bufferStart":e=p(d).next().value;Z(a.g,e,"bufferStart");break;case "bufferFinish":e=p(d).next().value;Z(a.g,e,"bufferFinish");break;case "skipped":e=p(d).next().value;Z(a.g,e,"skipped");break;case "volumeChange":c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,"volumeChange",{mediaPlayerVolume:e});break;case "playerStateChange":c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,"playerStateChange",{state:e});break;case "adUserInteraction":c=p(d);e=c.next().value;c=c.next().value;Z(a.g,c,"adUserInteraction",{interactionType:e});break;case "setClientInfo":var f=p(d);e=f.next().value;b=f.next().value;d=f.next().value;f=f.next().value;a=a.g.setClientInfo(f,e,b,d);c(a);break;case "injectVerificationScriptResources":c=p(d);e=c.next().value;c=c.next().value;a.g.injectVerificationScriptResources(c,e);break;case "setCreativeType":c=p(d);e=c.next().value;c=c.next().value;a.g.setCreativeType(c,e);break;case "setImpressionType":c=p(d);e=c.next().value;c=c.next().value;a.g.setImpressionType(c,e);break;case "setContentUrl":c=p(d);e=c.next().value;c=c.next().value;V(a.g.g,c).g.B=e;break;case "sessionError":(b=p(d)),(e=b.next().value),(c=b.next().value),(b=b.next().value),a.g.error(b,e,c)}}
function Yb(a){return("\n        name: "+a.name+"\n        message: "+a.message+"\n        filename: "+a.filename+"\n        lineNumber: "+a.lineNumber+"\n        columnNumber: "+a.columnNumber+"\n        stack: "+a.stack+"\n        toString(): "+a.toString())}
function $b(a){a({adSessionId:"",timestamp:new Date().getTime(),type:"sessionError",data:{errorType:"generic",message:"Registration to session events is only allowed for verification clients injected by the OM-SDK service itself. Please note that in a future release registration in this manner will be rejected.",},})}
function ac(a,b,c,d){a=Fb(a.j,d);void 0!==d&&a.g.s.has(d)?((a=a.i),"media"===b||"video"===b?Ra(a,c,d):((c={type:b,U:d,H:c}),a.j.push(c),Qa(a,b,c))):$b(c)}
function bc(a,b,c,d){a=Fb(a.j,d);void 0!==d&&a.g.s.has(d)?Eb(a,b,c,d):$b(b)}
function cc(a,b,c,d){ib(a.g,b,c,d)}
function dc(a,b,c,d){hb(a.g,"downloadJavaScriptResource")(b,c,d)}
function ec(a,b,c,d){function e(){var A=new W(f,"response",g,Tb(g,w.apply(0,arguments)));d.h(A,c)}
var f=b.h,k=b.method,g=b.version;b=Ub(g,b.g);if(null!=Mb(k,"VerificationService.")){k=Mb(k,"VerificationService.");try{switch(k){case "addEventListener":var h=p(b),l=h.next().value,n=h.next().value||fc(c);ac(a,l,e,n);break;case "addSessionListener":var q=p(b),z=q.next().value,y=q.next().value||fc(c);bc(a,e,z,y);break;case "sendUrl":var E=p(b).next().value;cc(a,E,function(){return e(!0)},function(){return e(!1)},);break;case "setTimeout":var F=p(b),kc=F.next().value,lc=F.next().value;a.m[kc]=eb(a.g,"setTimeout")(e,lc);break;case "clearTimeout":var mc=p(b).next().value;gb(a.g,a.m[mc]);break;case "setInterval":var Ab=p(b),nc=Ab.next().value,oc=Ab.next().value;a.l[nc]=db(a.g,e,oc);break;case "clearInterval":var pc=p(b).next().value;fb(a.g,a.l[pc]);break;case "injectJavaScriptResource":var qc=p(b).next().value;dc(a,qc,function(A){return e(!0,A)},function(){return e(!1)},);break;case "getVersion":e("1.4.10-iab4273")}}catch(A){d.h(new W(f,"error",g,"\n              name: "+A.name+"\n              message: "+A.message+"\n              filename: "+A.filename+"\n              lineNumber: "+A.lineNumber+"\n              columnNumber: "+A.columnNumber+"\n              stack: "+A.stack+"\n              toString(): "+A.toString()+"\n          ",),c,)}}}
function fc(a){for(var b=Ea().g,c=p(b.keys()),d=c.next();!d.done;d=c.next()){d=d.value;var e=b.get(d);if(e){if(e.contentWindow===a)return d;try{if(e.contentWindow.Object.prototype.isPrototypeOf(a))return d}catch(f){}}}}
function gc(a){var b={};return((b.app="omid_v1_present_app"),(b.web="omid_v1_present_web"),b)[a]}
function hc(a,b){a.document.write('<iframe style="display:none" id="'+(b+'" name="'+b+'" sandbox></iframe>'),)}
function ic(a,b){var c=a.document.createElement("iframe");c.id=b;c.name=b;c.style.display="none";c.sandbox="";a.document.body.appendChild(c)}
function jc(a,b){var c=new MutationObserver(function(d){d.forEach(function(e){"BODY"===e.addedNodes[0].nodeName&&((e=gc(b)),ic(a,"omid_v1_present"),ic(a,e),c.disconnect())})});c.observe(a.document.documentElement,{childList:!0})}
var rc=new(function(){var a;this.g=a=void 0===a?omidGlobal:a})(),Rb=new(function(){this.i=rc;this.h=new Map();this.g=Gb(this)})(),Wb=new Qb();new(function(){var a=Rb,b=this;var c=void 0===c?L:c;this.j=a;this.g=rc;this.m={};this.l={};this.i=new X();c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.i;this.h=null;c&&c.addEventListener&&c.postMessage&&(this.h=new Pb(c));this.i.g=function(d,e){ec(b,d,e,b.i)};this.h&&(this.h.g=function(d,e){b.h&&ec(b,d,e,b.h)})})();new Vb();(function(a,b){a.frames&&a.document&&!["omid_v1_present","omid_v1_present_web","omid_v1_present_app"].some(function(c){return!!a.frames[c]},)&&(null==a.document.body&&"MutationObserver" in a?jc(a,b):((b=gc(b)),a.document.body?(ic(a,"omid_v1_present"),ic(a,b)):(hc(a,"omid_v1_present"),hc(a,b))))})(L,"web")}).call(this,this)
