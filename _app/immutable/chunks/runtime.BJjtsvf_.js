var An=Array.isArray,mn=Array.from,gn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,In=Object.prototype,Rn=Array.prototype,Ut=Object.getPrototypeOf;const Sn=()=>{};function Dn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ct=4,M=8,nt=16,E=32,$=64,S=128,U=256,p=512,I=1024,H=2048,k=4096,Y=8192,Gt=16384,vt=32768,On=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),xn=Symbol("");function ht(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function kn(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function Cn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Pn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Fn(t){return tn(rt(t))}function qn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&T&&(d===null?pn([t]):d.push(t)),t}function Ln(t,n){return u!==null&&at()&&u.f&(T|nt)&&(d===null||!d.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,I),at()&&o!==null&&o.f&p&&!(o.f&E)&&(_!==null&&_.includes(t)?(y(o,I),W(o)):g===null?hn([t]):g.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&I||!e&&l===o||(y(l,n),i&(p|S)&&(i&T?Et(l,H):W(l)))}}const Mn=1,Hn=2,Yn=4,jn=8,Bn=16,Un=1,Vn=2,Gn=4,Kn=8,$n=16,Zn=1,zn=2,rn="[",en="[!",sn="]",yt={},Wn=Symbol();function wt(t){console.warn("hydration_mismatch")}let N=!1;function Xn(t){N=t}let A;function F(t){if(t===null)throw wt(),yt;return A=t}function Jn(){return F(C(A))}function Qn(t){if(N){if(C(A)!==null)throw wt(),yt;A=t}}function tr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=C(n);n.remove(),n=e}}var it,Tt,At;function nr(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,At=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function C(t){return At.call(t)}function rr(t,n){if(!N)return J(t);var r=J(A);if(r===null)r=A.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function er(t,n){if(!N){var r=J(t);return r instanceof Comment&&r.data===""?C(r):r}return A}function sr(t,n=1,r=!1){let e=N?A:t;for(;n--;)e=C(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function ar(t){t.textContent=""}function an(t){var n=T|I;o===null?n|=S:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function lr(t){const n=an(t);return n.equals=dt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):P(e)}}}function gt(t){var n,r=o;K(t.parent);try{mt(t),n=Lt(t)}finally{K(r)}return n}function It(t){var n=gt(t),r=(D||t.f&S)&&t.deps!==null?H:p;y(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){mt(t),L(t,0),y(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){o===null&&u===null&&Wt(),u!==null&&u.f&S&&zt(),st&&Zt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),z(l),l.f|=Gt}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&W(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!w&&!s&&e&&(a!==null&&ln(l,a),u!==null&&u.f&T)){var m=u;(m.children??(m.children=[])).push(l)}return l}function or(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function ur(t){Rt();var n=o!==null&&(o.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=St(t);return e}}function ir(t){return Rt(),on(t)}function fr(t){const n=b($,t,!0);return()=>{P(n)}}function St(t){return b(ct,t,!1)}function on(t){return b(M,t,!0)}function _r(t){return un(t)}function un(t,n=0){return b(M|nt|n,t,!0)}function cr(t,n=!0){return b(M|E,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:C(e);e.remove(),e=a}r=!0}xt(t,n&&!r),Ot(t),L(t,0),y(t,Y);var l=t.transitions;if(l!==null)for(const w of l)w.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function vr(t,n){var r=[];Nt(t,r,!0),_n(r,()=>{P(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&E)!==0;Nt(e,n,a?r:!1),e=s}}}function pr(t){Ct(t,!0)}function Ct(t,n){if(t.f&k){j(t)&&z(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function hr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function cn(){V&&bt()}const Pt=0,vn=1;let B=Pt,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let R=[],x=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let d=null;function pn(t){d=t}let _=null,h=0,g=null;function hn(t){g=t}let Ft=0,D=!1,f=null;function qt(){return++Ft}function at(){return!Z||f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&I)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&It(a),e&&o!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=g,s=u,a=D,l=d,i=f,w=t.f;_=null,h=0,g=null,u=w&(E|$)?null:t,D=!O&&(w&S)!==0,d=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return m}finally{_=n,h=r,g=e,u=s,D=a,d=l,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,H),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function z(t){var n=t.f;if(!(n&Y)){y(t,p);var r=o;o=t;try{n&nt?fn(t):xt(t),Ot(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{o=r}}}function Mt(){x>1e3&&(x=0,Xt()),x++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),yn(a)}}finally{O=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|k))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function wn(){if(q=!1,x>1001)return;const t=R;R=[],Ht(t),q||(x=0)}function W(t){B===Pt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&E)!==0,l=a&&(s&p)!==0;if(!l&&!(s&k))if(s&M){a?r.f^=p:j(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=B,r=R;try{Mt();const s=[];B=vn,R=s,q=!1,Ht(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&jt(),x=0,e}finally{B=n,R=r}}async function dr(){await Promise.resolve(),jt()}function Er(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&Y){var e=gt(t);return et(t),e}if(u!==null){d!==null&&d.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&E)&&g.includes(t)&&(y(o,I),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,j(a)&&It(a)),t.v}function yr(t){const n=u;try{return u=null,t()}finally{u=n}}const Tn=~(I|H|p);function y(t,n){t.f=t.f&Tn|n}function wr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Tr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),G(a.reaction),St(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{nn as $,Ar as A,an as B,_r as C,sr as D,vt as E,rr as F,Qn as G,en as H,gn as I,G as J,K,An as L,u as M,o as N,nr as O,J as P,rn as Q,C as R,yt as S,sn as T,wt as U,kn as V,ar as W,mn as X,fr as Y,X as Z,k as _,Jn as a,Nt as a0,_n as a1,hr as a2,Mn as a3,Hn as a4,rt as a5,Yn as a6,jn as a7,Bn as a8,xn as a9,dr as aA,Fn as aB,$t as aC,Ut as aa,Bt as ab,Zn as ac,zn as ad,ut as ae,In as af,Rn as ag,Cn as ah,Wn as ai,ot as aj,bn as ak,St as al,on as am,Nn as an,On as ao,Gn as ap,dt as aq,E as ar,$ as as,Un as at,Z as au,Vn as av,Kn as aw,lr as ax,$n as ay,jt as az,un as b,Xn as c,pr as d,cr as e,A as f,Pn as g,N as h,Er as i,Ln as j,P as k,wr as l,qn as m,Sn as n,er as o,vr as p,Tr as q,tr as r,F as s,or as t,yr as u,ir as v,ur as w,f as x,Vt as y,Dn as z};
