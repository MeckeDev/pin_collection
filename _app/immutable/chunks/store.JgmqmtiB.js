import{ac as E,_ as m,ad as V,D,ae as M,R as Y,af as j,H as q,ag as L,a9 as P,ah as $,ai as z,aj as S,O as g,N as I,K as G,w as v,ak as K,al as U,am as x,an as F,ao as J,ap as Q,a8 as X,n as Z,p as ee,v as N,a as re,d as te,o as k,e as ae,a7 as ne,h as se,B as ie}from"./runtime.DGYDUvoA.js";import{b as oe}from"./disclose-version.CjxEKO0Q.js";function ue(e){var r=V,a=D;E(null),m(null);try{return e()}finally{E(r),m(a)}}const B=new Set,A=new Set;function ce(e,r,a,n){function s(t){if(n.capture||b.call(r,t),!t.cancelBubble)return ue(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function ye(e,r,a,n,s){var t={capture:n,passive:s},u=ce(e,r,a,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(e,u,t)})}function ge(e){for(var r=0;r<e.length;r++)B.add(e[r]);for(var a of A)a(e)}function b(e){var O;var r=this,a=r.ownerDocument,n=e.type,s=((O=e.composedPath)==null?void 0:O.call(e))||[],t=s[0]||e.target,u=0,p=e.__root;if(p){var l=s.indexOf(p);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(u=l)}if(t=s[u]||e.target,t!==r){j(e,"currentTarget",{configurable:!0,get(){return t||a}});var T=V,c=D;E(null),m(null);try{for(var i,o=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(q(_)){var[W,...C]=_;W.apply(t,[e,...C])}else _.call(t,e)}catch(y){i?o.push(y):i=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let y of o)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,E(T),m(c)}}}function we(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ee(e){return fe.includes(e)}const le={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function me(e){return e=e.toLowerCase(),le[e]??e}const de=["touchstart","touchmove"];function _e(e){return de.includes(e)}function Te(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function pe(e,r){return H(e,r)}function Se(e,r){L(),r.intro=r.intro??!1;const a=r.target,n=N,s=v;try{for(var t=P(a);t&&(t.nodeType!==8||t.data!==$);)t=z(t);if(!t)throw S;g(!0),I(t),G();const u=H(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==K)throw U(),S;return g(!1),u}catch(u){if(u===S)return r.recover===!1&&x(),L(),F(a),g(!1),pe(e,r);throw u}finally{g(n),I(s)}}const h=new Map;function H(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:u=!0}){L();var p=new Set,l=c=>{for(var i=0;i<c.length;i++){var o=c[i];if(!p.has(o)){p.add(o);var f=_e(o);r.addEventListener(o,b,{passive:f});var _=h.get(o);_===void 0?(document.addEventListener(o,b,{passive:f}),h.set(o,1)):h.set(o,_+1)}}};l(J(B)),A.add(l);var d=void 0,T=Q(()=>{var c=a??r.appendChild(X());return Z(()=>{if(t){ee({});var i=te;i.c=t}s&&(n.$$events=s),N&&oe(c,null),d=e(c,n)||{},N&&(D.nodes_end=v),t&&re()}),()=>{var f;for(var i of p){r.removeEventListener(i,b);var o=h.get(i);--o===0?(document.removeEventListener(i,b),h.delete(i)):h.set(i,o)}A.delete(l),R.delete(d),c!==a&&((f=c.parentNode)==null||f.removeChild(c))}});return R.set(d,T),d}let R=new WeakMap;function Le(e){const r=R.get(e);r&&r()}function he(e,r,a){if(e==null)return r(void 0),k;const n=ae(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function Ne(e,r,a){const n=a[r]??(a[r]={store:null,source:ne(void 0),unsubscribe:k});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=k;else{var s=!0;n.unsubscribe=he(e,t=>{s?n.source.v=t:ie(n.source,t)}),s=!1}return se(n.source)}function ke(){const e={};return M(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ae(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{Te as a,Ne as b,Ae as c,ce as d,ge as e,Ee as f,ye as g,Se as h,we as i,pe as m,me as n,ke as s,Le as u};
