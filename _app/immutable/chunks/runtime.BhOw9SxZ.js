var Dn=Array.isArray,Rn=Array.from,Sn=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,xn=Object.prototype,On=Array.prototype,$t=Object.getPrototypeOf;function kn(t){return typeof t=="function"}const Nn=()=>{};function Cn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,vt=4,Y=8,nt=16,w=32,Z=64,S=128,V=256,p=512,I=1024,b=2048,C=4096,j=8192,zt=16384,pt=32768,bn=65536,Wt=1<<18,ht=1<<19,it=Symbol("$state"),Fn=Symbol("");function dt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Et(t){return!Xt(t,this.v)}function Jt(t){throw new Error("effect_in_teardown")}function Qt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let z=!1;function Hn(){z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function Yn(t){return yt(rt(t))}function sn(t,n=!1){var e;const r=rt(t);return n||(r.equals=Et),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function jn(t,n=!1){return yt(sn(t,n))}function yt(t){return u!==null&&u.f&m&&(y===null?En([t]):y.push(t)),t}function wt(t,n){return u!==null&&lt()&&u.f&(m|nt)&&(y===null||!y.includes(t))&&en(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),Tt(t,I),lt()&&o!==null&&o.f&p&&!(o.f&w)&&(_!==null&&_.includes(t)?(E(o,I),W(o)):g===null?yn([t]):g.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&I||!e&&l===o||(E(l,n),i&(p|S)&&(i&m?Tt(l,b):W(l)))}}const Bn=1,Un=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,ln="[",on="[!",un="]",mt={},tr=Symbol();function At(t){console.warn("hydration_mismatch")}let R=!1;function nr(t){R=t}let d;function L(t){if(t===null)throw At(),mt;return d=t}function rr(){return L(x(d))}function er(t){if(R){if(x(d)!==null)throw At(),mt;d=t}}function sr(t=1){if(R){for(var n=t,r=d;n--;)r=x(r);d=r}}function ar(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===on)&&(t+=1)}var e=x(n);n.remove(),n=e}}var ft,gt,It;function lr(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;gt=ut(n,"firstChild").get,It=ut(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return gt.call(t)}function x(t){return It.call(t)}function or(t,n){if(!R)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function ur(t,n){if(!R){var r=J(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function ir(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=x(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),L(a),a}return L(e),e}function fr(t){t.textContent=""}function fn(t){var n=m|I;o===null?n|=S:o.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function _r(t){const n=fn(t);return n.equals=Et,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):P(e)}}}function Rt(t){var n,r=o;$(t.parent);try{Dt(t),n=Yt(t)}finally{$(r)}return n}function St(t){var n=Rt(t),r=(O||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function et(t){Dt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){o===null&&u===null&&tn(),u!==null&&u.f&S&&Qt(),at&&Jt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&Z)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{_t(!0),B(l),l.f|=zt}catch(c){throw P(l),c}finally{_t(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ht)===0;if(!T&&!s&&e&&(a!==null&&_n(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function cr(t){const n=F(Y,null,!1);return E(n,p),n.teardown=t,n}function vr(t){xt();var n=o!==null&&(o.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ot(t);return e}}function pr(t){return xt(),st(t)}function hr(t){const n=F(Z,t,!0);return()=>{P(n)}}function Ot(t){return F(vt,t,!1)}function dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=st(()=>{e.ran||(e.ran=!0,wt(r.l.r2,!0),gn(n))})}function Er(){var t=f;st(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),q(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function st(t){return F(Y,t,!0)}function yr(t){return cn(t)}function cn(t,n=0){return F(Y|nt|n,t,!0)}function wr(t,n=!0){return F(Y|w,t,!0,n)}function kt(t){var n=t.teardown;if(n!==null){const r=at,e=u;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Ct(t,n&&!r),Nt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();kt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tr(t,n){var r=[];Ft(t,r,!0),pn(r,()=>{P(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&pt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function mr(t){Pt(t,!0)}function Pt(t,n){if(t.f&C){q(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&w)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,Q=[];function qt(){G=!1;const t=Q.slice();Q=[],Zt(t)}function Ar(t){G||(G=!0,queueMicrotask(qt)),Q.push(t)}function hn(){G&&qt()}const Lt=0,dn=1;let U=Lt,M=!1,k=!1,at=!1;function _t(t){k=t}function ct(t){at=t}let D=[],N=0;let u=null;function K(t){u=t}let o=null;function $(t){o=t}let y=null;function En(t){y=t}let _=null,h=0,g=null;function yn(t){g=t}let Mt=0,O=!1,f=null;function Ht(){return++Mt}function lt(){return!z||f!==null&&f.l===null}function q(t){var l,i;var n=t.f;if(n&I)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&St(a),e&&o!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function wn(t,n,r){throw t}function Yt(t){var ot;var n=_,r=h,e=g,s=u,a=O,l=y,i=f,T=t.f;_=null,h=0,g=null,u=T&(w|Z)?null:t,O=!k&&(T&S)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,O=a,y=l,f=i}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=o;o=t;try{n&nt?vn(t):Ct(t),Nt(t),kt(t);var e=Yt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(s){wn(s)}finally{o=r}}}function jt(){N>1e3&&(N=0,nn()),N++}function Bt(t){var n=t.length;if(n!==0){jt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ut(s,a),mn(a)}}finally{k=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function An(){if(M=!1,N>1001)return;const t=D;D=[],Bt(t),M||(N=0)}function W(t){U===Lt&&(M||(M=!0,queueMicrotask(An)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}D.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&vt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ut(i,n)}function Vt(t){var n=U,r=D;try{jt();const s=[];U=dn,D=s,M=!1,Bt(r);var e=t==null?void 0:t();return hn(),(D.length>0||s.length>0)&&Vt(),N=0,e}finally{U=n,D=r}}async function gr(){await Promise.resolve(),Vt()}function Gt(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return et(t),e}if(u!==null){y!==null&&y.includes(t)&&rn();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&w)&&g.includes(t)&&(E(o,I),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,q(a)&&St(a)),t.v}function gn(t){const n=u;try{return u=null,t()}finally{u=n}}const In=~(I|b|p);function E(t,n){t.f=t.f&In|n}function Ir(t,n=1){var r=+Gt(t);return wt(t,r+n),r}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Rr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Ot(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{$n as $,Ln as A,wt as B,ut as C,o as D,pt as E,Mn as F,$t as G,Dn as H,mr as I,Tr as J,rr as K,on as L,ar as M,L as N,nr as O,Ot as P,st as Q,Ar as R,it as S,qn as T,tr as U,bn as V,zn as W,Et as X,w as Y,Z,$ as _,Rr as a,z as a0,Zn as a1,Wn as a2,_r as a3,sn as a4,Ir as a5,kn as a6,Xn as a7,X as a8,J as a9,Gn as aA,Kn as aB,Fn as aC,Kt as aD,jn as aE,dr as aF,Er as aG,sr as aH,Xt as aI,Jn as aa,Qn as ab,K as ac,u as ad,cr as ae,Sn as af,lr as ag,ln as ah,x as ai,mt as aj,un as ak,At as al,Pn as am,fr as an,Rn as ao,hr as ap,Vt as aq,gr as ar,Yn as as,C as at,Bn as au,an as av,Un as aw,Ft as ax,pn as ay,Vn as az,vr as b,or as c,f as d,gn as e,ur as f,Zt as g,Gt as h,Cn as i,Sr as j,fn as k,Hn as l,cn as m,wr as n,Nn as o,Dr as p,P as q,er as r,ir as s,yr as t,pr as u,R as v,d as w,xn as x,On as y,rt as z};
