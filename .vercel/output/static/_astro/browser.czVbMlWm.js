import{g as Be}from"./client.Dm-eYAro.js";var z={exports:{}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */var Ue=z.exports,_e;function Ge(){return _e||(_e=1,function(Ae,xe){(function(m){var O=m.setTimeout,M=m.clearTimeout,w=m.XMLHttpRequest,de=m.XDomainRequest,ue=m.ActiveXObject,Q=m.EventSource,N=m.document,De=m.Promise,K=m.fetch,ce=m.Response,Z=m.TextDecoder,le=m.TextEncoder,k=m.AbortController;if(typeof window<"u"&&typeof N<"u"&&!("readyState"in N)&&N.body==null&&(N.readyState="loading",window.addEventListener("load",function(e){N.readyState="complete"},!1)),w==null&&ue!=null&&(w=function(){return new ue("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),k==null){var Fe=K;K=function(e,r){var n=r.signal;return Fe(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var i=t.body.getReader();return n._reader=i,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return i}}}})},k=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function ve(){this.bitsNeeded=0,this.codePoint=0}ve.prototype.decode=function(e){function r(d,u,o){if(o===1)return d>=128>>u&&d<<u<=2047;if(o===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(o===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,i="",a=this.bitsNeeded,s=this.codePoint,c=0;c<e.length;c+=1){var f=e[c];a!==0&&(f<128||f>191||!r(s<<6|f&63,a-6,n(a,s)))&&(a=0,s=t,i+=String.fromCharCode(s)),a===0?(f>=0&&f<=127?(a=0,s=f):f>=192&&f<=223?(a=6*1,s=f&31):f>=224&&f<=239?(a=6*2,s=f&15):f>=240&&f<=247?(a=6*3,s=f&7):(a=0,s=t),a!==0&&!r(s,a,n(a,s))&&(a=0,s=t)):(a-=6,s=s<<6|f&63),a===0&&(s<=65535?i+=String.fromCharCode(s):(i+=String.fromCharCode(55296+(s-65535-1>>10)),i+=String.fromCharCode(56320+(s-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=s,i};var Oe=function(){try{return new Z().decode(new le().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(Z==null||le==null||!Oe())&&(Z=ve);var b=function(){};function L(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=b,this.onload=b,this.onerror=b,this.onreadystatechange=b,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=b}L.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,i=1,a=0;this._abort=function(o){n._sendTimeout!==0&&(M(n._sendTimeout),n._sendTimeout=0),(i===1||i===2||i===3)&&(i=4,t.onload=b,t.onerror=b,t.onabort=b,t.onprogress=b,t.onreadystatechange=b,t.abort(),a!==0&&(M(a),a=0),o||(n.readyState=4,n.onabort(null),n.onreadystatechange())),i=0};var s=function(){if(i===1){var o=0,l="",A=void 0;if("contentType"in t)o=200,l="OK",A=t.contentType;else try{o=t.status,l=t.statusText,A=t.getResponseHeader("Content-Type")}catch{o=0,l="",A=void 0}o!==0&&(i=2,n.readyState=2,n.status=o,n.statusText=l,n._contentType=A,n.onreadystatechange())}},c=function(){if(s(),i===2||i===3){i=3;var o="";try{o=t.responseText}catch{}n.readyState=3,n.responseText=o,n.onprogress()}},f=function(o,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:b}),c(),i===1||i===2||i===3){if(i=4,a!==0&&(M(a),a=0),n.readyState=4,o==="load")n.onload(l);else if(o==="error")n.onerror(l);else if(o==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(o){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&f(t.responseText===""?"error":"load",o):t.readyState===3?"onprogress"in t||c():t.readyState===2&&s())},u=function(){a=O(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(o){f("load",o)}),"onerror"in t&&(t.onerror=function(o){f("error",o)}),"onabort"in t&&(t.onabort=function(o){f("abort",o)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(o){d(o)}),("contentType"in t||!("ontimeout"in w.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=O(function(){u()},0))},L.prototype.abort=function(){this._abort(!1)},L.prototype.getResponseHeader=function(e){return this._contentType},L.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},L.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},L.prototype.send=function(){if((!("ontimeout"in w.prototype)||!("sendAsBinary"in w.prototype)&&!("mozAnon"in w.prototype))&&N!=null&&N.readyState!=null&&N.readyState!=="complete"){var e=this;e._sendTimeout=O(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function he(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function pe(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var i=n[t],a=i.split(": "),s=a.shift(),c=a.join(": ");r[he(s)]=c}this._map=r}pe.prototype.get=function(e){return this._map[he(e)]},w!=null&&w.HEADERS_RECEIVED==null&&(w.HEADERS_RECEIVED=2);function ye(){}ye.prototype.open=function(e,r,n,t,i,a,s){e.open("GET",i);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===w.HEADERS_RECEIVED){var d=e.status,u=e.statusText,o=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,o,new pe(l))}},e.withCredentials=a;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&e.setRequestHeader(f,s[f]);return e.send(),e};function Ee(e){this._headers=e}Ee.prototype.get=function(e){return this._headers.get(e)};function ge(){}ge.prototype.open=function(e,r,n,t,i,a,s){var c=null,f=new k,d=f.signal,u=new Z;return K(i,{headers:s,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(o){return c=o.body.getReader(),r(o.status,o.statusText,o.headers.get("Content-Type"),new Ee(o.headers)),new De(function(l,A){var $=function(){c.read().then(function(T){if(T.done)l(void 0);else{var y=u.decode(T.value,{stream:!0});n(y),$()}}).catch(function(T){A(T)})};$()})}).catch(function(o){if(o.name!=="AbortError")return o}).then(function(o){t(o)}),{abort:function(){c?.cancel(),f.abort()}}};function G(){this._listeners=Object.create(null)}function we(e){O(function(){throw e},0)}G.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var i=r[t];try{typeof i.handleEvent=="function"?i.handleEvent(e):i.call(this,e)}catch(a){we(a)}}},G.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var i=!1,a=0;a<t.length;a+=1)t[a]===r&&(i=!0);i||t.push(r)},G.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var i=[],a=0;a<t.length;a+=1)t[a]!==r&&i.push(t[a]);i.length===0?delete n[e]:n[e]=i}};function q(e){this.type=e,this.target=void 0}function me(e,r){q.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}me.prototype=Object.create(q.prototype);function ee(e,r){q.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}ee.prototype=Object.create(q.prototype);function Te(e,r){q.call(this,e),this.error=r.error}Te.prototype=Object.create(q.prototype);var te=-1,I=0,P=1,V=2,re=-1,H=0,ne=1,Ce=2,Ne=3,Ie=/^text\/event\-stream(;.*)?$/i,He=1e3,Le=18e6,ae=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),ie(n)},ie=function(e){return Math.min(Math.max(e,He),Le)},X=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){we(t)}};function _(e,r){G.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,qe(this,e,r)}function je(){return w!=null&&"withCredentials"in w.prototype||de==null?new w:new de}var Me=K!=null&&ce!=null&&"body"in ce.prototype;function qe(e,r,n){r=String(r);var t=!!n.withCredentials,i=n.lastEventIdQueryParameterName||"lastEventId",a=ie(1e3),s=ae(n.heartbeatTimeout,45e3),c="",f=a,d=!1,u=0,o=n.headers||{},l=n.Transport,A=Me&&l==null?void 0:new L(l!=null?new l:je()),$=l!=null&&typeof l!="string"?new l:A==null?new ge:new ye,T=void 0,y=0,R=te,B="",J="",x="",Y="",E=H,oe=0,j=0,Pe=function(h,v,C,S){if(R===I)if(h===200&&C!=null&&Ie.test(C)){R=P,d=Date.now(),f=a,e.readyState=P;var g=new ee("open",{status:h,statusText:v,headers:S});e.dispatchEvent(g),X(e,e.onopen,g)}else{var p="";h!==200?(v&&(v=v.replace(/\s+/g," ")),p="EventSource's response has a status "+h+" "+v+" that is not 200. Aborting the connection."):p="EventSource's response has a Content-Type specifying an unsupported type: "+(C==null?"-":C.replace(/\s+/g," "))+". Aborting the connection.",se();var g=new ee("error",{status:h,statusText:v,headers:S});e.dispatchEvent(g),X(e,e.onerror,g),console.error(p)}},Xe=function(h){if(R===P){for(var v=-1,C=0;C<h.length;C+=1){var S=h.charCodeAt(C);(S===10||S===13)&&(v=C)}var g=(v!==-1?Y:"")+h.slice(0,v+1);Y=(v===-1?Y:"")+h.slice(v+1),h!==""&&(d=Date.now(),u+=h.length);for(var p=0;p<g.length;p+=1){var S=g.charCodeAt(p);if(E===re&&S===10)E=H;else if(E===re&&(E=H),S===13||S===10){if(E!==H){E===ne&&(j=p+1);var D=g.slice(oe,j-1),F=g.slice(j+(j<p&&g.charCodeAt(j)===32?1:0),p);D==="data"?(B+=`
`,B+=F):D==="id"?J=F:D==="event"?x=F:D==="retry"?(a=ae(F,a),f=a):D==="heartbeatTimeout"&&(s=ae(F,s),y!==0&&(M(y),y=O(function(){W()},s)))}if(E===H){if(B!==""){c=J,x===""&&(x="message");var U=new me(x,{data:B.slice(1),lastEventId:J});if(e.dispatchEvent(U),x==="open"?X(e,e.onopen,U):x==="message"?X(e,e.onmessage,U):x==="error"&&X(e,e.onerror,U),R===V)return}B="",x=""}E=S===13?re:H}else E===H&&(oe=p,E=ne),E===ne?S===58&&(j=p+1,E=Ce):E===Ce&&(E=Ne)}}},be=function(h){if(R===P||R===I){R=te,y!==0&&(M(y),y=0),y=O(function(){W()},f),f=ie(Math.min(a*16,f*2)),e.readyState=I;var v=new Te("error",{error:h});e.dispatchEvent(v),X(e,e.onerror,v),h!=null&&console.error(h)}},se=function(){R=V,T!=null&&(T.abort(),T=void 0),y!==0&&(M(y),y=0),e.readyState=V},W=function(){if(y=0,R!==te){if(!d&&T!=null)be(new Error("No activity within "+s+" milliseconds. "+(R===I?"No response received.":u+" chars received.")+" Reconnecting.")),T!=null&&(T.abort(),T=void 0);else{var h=Math.max((d||Date.now())+s-Date.now(),1);d=!1,y=O(function(){W()},h)}return}d=!1,u=0,y=O(function(){W()},s),R=I,B="",x="",J=c,Y="",oe=0,j=0,E=H;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var C=r.indexOf("?");v=C===-1?r:r.slice(0,C+1)+r.slice(C+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(F,U){return U===i?"":F}),v+=(r.indexOf("?")===-1?"?":"&")+i+"="+encodeURIComponent(c)}var S=e.withCredentials,g={};g.Accept="text/event-stream";var p=e.headers;if(p!=null)for(var D in p)Object.prototype.hasOwnProperty.call(p,D)&&(g[D]=p[D]);try{T=$.open(A,Pe,Xe,be,v,S,g)}catch(F){throw se(),F}};e.url=r,e.readyState=I,e.withCredentials=t,e.headers=o,e._close=se,W()}_.prototype=Object.create(G.prototype),_.prototype.CONNECTING=I,_.prototype.OPEN=P,_.prototype.CLOSED=V,_.prototype.close=function(){this._close()},_.CONNECTING=I,_.OPEN=P,_.CLOSED=V,_.prototype.withCredentials=void 0;var Se=Q;w!=null&&(Q==null||!("withCredentials"in Q.prototype))&&(Se=_),function(e){{var r=e(xe);r!==void 0&&(Ae.exports=r)}}(function(e){e.EventSourcePolyfill=_,e.NativeEventSource=Q,e.EventSource=Se})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Ue:globalThis)}(z,z.exports)),z.exports}var fe,Re;function Ve(){return Re||(Re=1,fe=Ge().EventSourcePolyfill),fe}var $e=Ve();const We=Be($e),Qe=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"}));export{Qe as b};
