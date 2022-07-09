/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return $})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return fe})),n.d(t,"e",(function(){return ge})),n.d(t,"f",(function(){return ye})),n.d(t,"g",(function(){return M})),n.d(t,"h",(function(){return Ke})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return R})),n.d(t,"k",(function(){return Ze})),n.d(t,"l",(function(){return We})),n.d(t,"m",(function(){return Xe})),n.d(t,"n",(function(){return He})),n.d(t,"o",(function(){return Je})),n.d(t,"p",(function(){return $e})),n.d(t,"q",(function(){return Ge})),n.d(t,"r",(function(){return Ve})),n.d(t,"s",(function(){return Fe})),n.d(t,"t",(function(){return Me})),n.d(t,"u",(function(){return De}));var r=n(291),o=n(289),c=n(290);const l="firebasestorage.googleapis.com";class h extends o.c{constructor(code,e){super(d(code),`Firebase Storage: ${e} (${d(code)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(code){return d(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(code){return"storage/"+code}function _(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}function f(){return new h("canceled","User canceled the upload/download.")}function m(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function w(e){return new h("invalid-argument",e)}function k(){return new h("app-deleted","The Firebase app was deleted.")}function R(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function v(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function y(e){throw new h("internal-error","Internal error: "+e)}class T{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=T.makeFromUrl(e,t)}catch(t){return new T(e,"")}if(""===n.path)return n;throw new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function c(e){e.path_=decodeURIComponent(e.path)}const d=t.replace(/[.]/g,"\\."),_=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${d}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let i=0;i<_.length;i++){const t=_[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new T(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new h("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function O(p){return"string"==typeof p||p instanceof String}function C(p){return S()&&p instanceof Blob}function S(){return"undefined"!=typeof Blob}function U(e,t,n,r){if(r<t)throw w(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw w(`Invalid value for '${e}'. Expected ${n} or less.`)}function E(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function P(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var A;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(A||(A={}));class I{constructor(e,t,n,r,o,c,l,h,d,_,f){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=_,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new j(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===A.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===A.ABORT;return void e(!1,new j(!1,null,t))}const c=-1!==this.successCodes_.indexOf(o);e(!0,new j(c,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=_();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?k():f())}else{r(new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new j(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,c=null,l=!1,h=0;function d(){return 2===h}let _=!1;function f(...e){_||(_=!0,t.apply(null,e))}function m(t){o=setTimeout((()=>{o=null,e(k,d())}),t)}function w(){c&&clearTimeout(c)}function k(e,...t){if(_)return void w();if(e)return w(),void f.call(null,e,...t);if(d()||l)return w(),void f.call(null,e,...t);let n;r<64&&(r*=2),1===h?(h=2,n=0):n=1e3*(r+Math.random()),m(n)}let R=!1;function v(e){R||(R=!0,w(),_||(null!==o?(e||(h=2),clearTimeout(o),m(0)):e||(h=1)))}return m(0),c=setTimeout((()=>{l=!0,v(!0)}),n),v}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class j{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function B(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function N(...e){const t=B();if(void 0!==t){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}if(S())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}const z={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class L{constructor(data,e){this.data=data,this.contentType=e||null}}function M(e,t){switch(e){case z.RAW:return new L(D(t));case z.BASE64:case z.BASE64URL:return new L(H(e,t));case z.DATA_URL:return new L(function(e){const t=new F(e);return t.base64?H(z.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw v(z.DATA_URL,"Malformed data URL.")}return D(t)}(t.rest)}(t),new F(t).contentType)}throw _()}function D(e){const b=[];for(let i=0;i<e.length;i++){let t=e.charCodeAt(i);if(t<=127)b.push(t);else if(t<=2047)b.push(192|t>>6,128|63&t);else if(55296==(64512&t)){if(i<e.length-1&&56320==(64512&e.charCodeAt(i+1))){t=65536|(1023&t)<<10|1023&e.charCodeAt(++i),b.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else b.push(239,191,189)}else 56320==(64512&t)?b.push(239,191,189):b.push(224|t>>12,128|t>>6&63,128|63&t)}return new Uint8Array(b)}function H(e,t){switch(e){case z.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw v(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case z.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw v(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw v(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class F{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw v(z.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(s,e){if(!(s.length>=e.length))return!1;return s.substring(s.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class ${constructor(data,e){let t=0,n="";C(data)?(this.data_=data,t=data.size,n=data.type):data instanceof ArrayBuffer?(e?this.data_=new Uint8Array(data):(this.data_=new Uint8Array(data.byteLength),this.data_.set(new Uint8Array(data))),t=this.data_.length):data instanceof Uint8Array&&(e?this.data_=data:(this.data_=new Uint8Array(data.length),this.data_.set(data)),t=data.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(C(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new $(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new $(n,!0)}}static getBlob(...e){if(S()){const t=e.map((e=>e instanceof $?e.data_:e));return new $(N.apply(null,t))}{const t=e.map((e=>O(e)?M(z.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let i=0;i<e.length;i++)r[o++]=e[i]})),new $(r,!0)}}uploadData(){return this.data_}}function G(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function X(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function W(e,t){return t}class V{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||W}}let K=null;function J(){if(K)return K;const e=[];e.push(new V("bucket")),e.push(new V("generation")),e.push(new V("metageneration")),e.push(new V("name","fullPath",!0));const t=new V("name");t.xform=function(e,t){return function(e){return!O(e)||e.length<2?e:X(e)}(t)},e.push(t);const n=new V("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new V("timeCreated")),e.push(new V("updated")),e.push(new V("md5Hash",null,!0)),e.push(new V("cacheControl",null,!0)),e.push(new V("contentDisposition",null,!0)),e.push(new V("contentEncoding",null,!0)),e.push(new V("contentLanguage",null,!0)),e.push(new V("contentType",null,!0)),e.push(new V("metadata","customMetadata",!0)),K=e,K}function Z(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new T(n,path);return t._makeStorageReference(r)}})}(r,e),r}function Y(e,t,n){const r=G(t);if(null===r)return null;return Z(e,r,n)}function Q(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}function ee(e,t,n){const r=G(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const path of n.prefixes){const n=path.replace(/\/$/,""),o=e._makeStorageReference(new T(t,n));r.prefixes.push(o)}if(n.items)for(const o of n.items){const n=e._makeStorageReference(new T(t,o.name));r.items.push(n)}return r}(e,t,r)}class te{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ne(e){if(!e)throw _()}function re(e,t){return function(n,text){const r=Y(e,text,t);return ne(null!==r),r}}function se(e,t){return function(n,text){const r=Y(e,text,t);return ne(null!==r),function(e,t,n,r){const o=G(t);if(null===o)return null;if(!O(o.downloadTokens))return null;const c=o.downloadTokens;if(0===c.length)return null;const l=encodeURIComponent;return c.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return E("/b/"+l(o)+"/o/"+l(path),n,r)+P({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function oe(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new h("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new h("unauthorized","User does not have permission to access '"+path+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ie(e){const t=oe(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new h("object-not-found","Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ae(e,t,n){const r=E(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new te(r,"GET",re(e,n),o);return c.errorHandler=ie(t),c}function ce(e,t,n,r,o){const c={};t.isRoot?c.prefix="":c.prefix=t.path+"/",n&&n.length>0&&(c.delimiter=n),r&&(c.pageToken=r),o&&(c.maxResults=o);const l=E(t.bucketOnlyServerUrl(),e.host,e._protocol),h=e.maxOperationRetryTime,d=new te(l,"GET",function(e,t){return function(n,text){const r=ee(e,t,text);return ne(null!==r),r}}(e,t.bucket),h);return d.urlParams=c,d.errorHandler=oe(t),d}function ue(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function le(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};const h=function(){let e="";for(let i=0;i<2;i++)e+=Math.random().toString().slice(2);return e}();l["Content-Type"]="multipart/related; boundary="+h;const d=ue(t,r,o),_="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Q(d,n)+"\r\n--"+h+"\r\nContent-Type: "+d.contentType+"\r\n\r\n",f="\r\n--"+h+"--",body=$.getBlob(_,r,f);if(null===body)throw m();const w={name:d.fullPath},k=E(c,e.host,e._protocol),R=e.maxUploadRetryTime,v=new te(k,"POST",re(e,n),R);return v.urlParams=w,v.headers=l,v.body=body.uploadData(),v.errorHandler=oe(t),v}class he{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function de(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ne(!1)}return ne(!!n&&-1!==(t||["active"]).indexOf(n)),n}const _e=262144;function pe(e,t,n,r,o,c,l,d){const _=new he(0,0);if(l?(_.current=l.current,_.total=l.total):(_.current=0,_.total=r.size()),r.size()!==_.total)throw new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const f=_.total-_.current;let w=f;o>0&&(w=Math.min(w,o));const k=_.current,R=k+w,v={"X-Goog-Upload-Command":w===f?"upload, finalize":"upload","X-Goog-Upload-Offset":`${_.current}`},body=r.slice(k,R);if(null===body)throw m();const y=t.maxUploadRetryTime,T=new te(n,"POST",(function(e,text){const n=de(e,["active","final"]),o=_.current+w,l=r.size();let h;return h="final"===n?re(t,c)(e,text):null,new he(o,l,"final"===n,h)}),y);return T.headers=v,T.body=body.uploadData(),T.progressCallback=d||null,T.errorHandler=oe(e),T}const fe={STATE_CHANGED:"state_changed"},ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function me(e){switch(e){case"running":case"pausing":case"canceling":return ge.RUNNING;case"paused":return ge.PAUSED;case"success":return ge.SUCCESS;case"canceled":return ge.CANCELED;default:return ge.ERROR}}class be{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function we(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class ke{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=A.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=A.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=A.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw y("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Re extends ke{initXhr(){this.xhr_.responseType="text"}}function ve(){return new Re}class ye{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=J(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l=ue(t,r,o),h={name:l.fullPath},d=E(c,e.host,e._protocol),_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},body=Q(l,n),f=e.maxUploadRetryTime,m=new te(d,"POST",(function(e){let t;de(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ne(!1)}return ne(O(t)),t}),f);return m.urlParams=h,m.headers=_,m.body=body,m.errorHandler=oe(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ve,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const o=e.maxUploadRetryTime,c=new te(n,"POST",(function(e){const t=de(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ne(!1)}n||ne(!1);const o=Number(n);return ne(!isNaN(o)),new he(o,r.size(),"final"===t)}),o);return c.headers={"X-Goog-Upload-Command":"query"},c.errorHandler=oe(t),c}(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,ve,t,n);this._request=o,o.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=_e*this._chunkMultiplier,t=new he(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let c;try{c=pe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const l=this._ref.storage._makeRequest(c,ve,r,o);this._request=l,l.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){_e*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ae(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ve,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=le(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ve,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=f(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=me(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new be(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const i=this._observers.indexOf(e);-1!==i&&this._observers.splice(i,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(me(this._state)){case ge.SUCCESS:we(this._resolve.bind(null,this.snapshot))();break;case ge.CANCELED:case ge.ERROR:we(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(me(this._state)){case ge.RUNNING:case ge.PAUSED:e.next&&we(e.next.bind(e,this.snapshot))();break;case ge.SUCCESS:e.complete&&we(e.complete.bind(e))();break;case ge.CANCELED:case ge.ERROR:default:e.error&&we(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Te{constructor(e,t){this._service=e,this._location=t instanceof T?t:T.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Te(e,t)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new T(this._location.bucket,e);return new Te(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw R(e)}}function xe(e,data,t){e._throwIfRoot("uploadBytes");const n=le(e.storage,e._location,J(),new $(data,!0),t);return e.storage.makeRequestWithTokens(n,ve).then((t=>({metadata:t,ref:e})))}function Oe(e){const t={prefixes:[],items:[]};return Ce(e,t).then((()=>t))}async function Ce(e,t,n){const r={pageToken:n},o=await Se(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await Ce(e,t,o.nextPageToken)}function Se(e,t){null!=t&&"number"==typeof t.maxResults&&U("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ce(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ve)}function Ue(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const o=E(t.fullServerUrl(),e.host,e._protocol),body=Q(n,r),c=e.maxOperationRetryTime,l=new te(o,"PATCH",re(e,r),c);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=body,l.errorHandler=ie(t),l}(e.storage,e._location,t,J());return e.storage.makeRequestWithTokens(n,ve)}function Ee(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=E(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new te(r,"GET",se(e,n),o);return c.errorHandler=ie(t),c}(e.storage,e._location,J());return e.storage.makeRequestWithTokens(t,ve).then((e=>{if(null===e)throw new h("no-download-url","The given file does not have any download URLs.");return e}))}function Pe(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=E(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new te(n,"DELETE",(function(e,t){}),r);return o.successCodes=[200,204],o.errorHandler=ie(t),o}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ve)}function Ae(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new T(e._location.bucket,n);return new Te(e.storage,r)}function Ie(e,path){if(e instanceof Be){const t=e;if(null==t._bucket)throw new h("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const n=new Te(t,t._bucket);return null!=path?Ie(n,path):n}return void 0!==path?Ae(e,path):e}function qe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Be)return new Te(e,t);throw w("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t)}function je(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:T.makeFromBucketSpec(n,e)}class Be{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?T.makeFromBucketSpec(r,this._host):je(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=je(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){U("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){U("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Te(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new x(k());{const o=function(e,t,n,r,o,c){const l=P(e.urlParams),h=e.url+l,d=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(d,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(d,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(d,c),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(d,r),new I(h,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ne="@firebase/storage",ze="0.9.9",Le="storage";function Me(e,data,t){return xe(e=Object(o.l)(e),data,t)}function De(e,data,t){return function(e,data,t){return e._throwIfRoot("uploadBytesResumable"),new ye(e,new $(data),t)}(e=Object(o.l)(e),data,t)}function He(e){return function(e){e._throwIfRoot("getMetadata");const t=ae(e.storage,e._location,J());return e.storage.makeRequestWithTokens(t,ve)}(e=Object(o.l)(e))}function Fe(e,t){return Ue(e=Object(o.l)(e),t)}function $e(e,t){return Se(e=Object(o.l)(e),t)}function Ge(e){return Oe(e=Object(o.l)(e))}function Xe(e){return Ee(e=Object(o.l)(e))}function We(e){return Pe(e=Object(o.l)(e))}function Ve(e,t){return qe(e=Object(o.l)(e),t)}function Ke(e,t){return Ae(e,t)}function Je(e=Object(r.getApp)(),t){e=Object(o.l)(e);return Object(r._getProvider)(e,Le).getImmediate({identifier:t})}function Ze(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:c}=r;c&&(e._overrideAuthToken="string"==typeof c?c:Object(o.g)(c,e.app.options.projectId))}(e,t,n,r)}function Ye(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return new Be(n,o,c,t,r.SDK_VERSION)}Object(r._registerComponent)(new c.a(Le,Ye,"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(Ne,ze,""),Object(r.registerVersion)(Ne,ze,"esm2017")}}]);