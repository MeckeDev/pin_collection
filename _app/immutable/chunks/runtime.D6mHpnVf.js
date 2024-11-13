var In=Array.isArray,Rn=Array.from,Sn=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,xn=Object.prototype,On=Array.prototype,$t=Object.getPrototypeOf;function kn(t){return typeof t=="function"}const Nn=()=>{};function Cn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,vt=4,Y=8,nt=16,y=32,Z=64,R=128,V=256,p=512,D=1024,C=2048,k=4096,j=8192,zt=16384,pt=32768,bn=65536,Wt=1<<18,ht=1<<19,it=Symbol("$state"),Fn=Symbol("");function dt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Et(t){return!Xt(t,this.v)}function Jt(t){throw new Error("effect_in_teardown")}function Qt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let z=!1;function Hn(){z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function Yn(t){return yt(rt(t))}function sn(t,n=!1){var e;const r=rt(t);return n||(r.equals=Et),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function jn(t,n=!1){return yt(sn(t,n))}function yt(t){return u!==null&&u.f&T&&(E===null?En([t]):E.push(t)),t}function wt(t,n){return u!==null&&lt()&&u.f&(T|nt)&&(E===null||!E.includes(t))&&en(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),Tt(t,D),lt()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(d(o,D),W(o)):g===null?yn([t]):g.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&D||!e&&l===o||(d(l,n),i&(p|R)&&(i&T?Tt(l,C):W(l)))}}const Bn=1,Un=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,ln="[",on="[!",un="]",mt={},tr=Symbol();function At(t){console.warn("hydration_mismatch")}let N=!1;function nr(t){N=t}let m;function L(t){if(t===null)throw At(),mt;return m=t}function rr(){return L(b(m))}function er(t){if(N){if(b(m)!==null)throw At(),mt;m=t}}function sr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===on)&&(t+=1)}var e=b(n);n.remove(),n=e}}var ft,gt,Dt;function ar(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;gt=ut(n,"firstChild").get,Dt=ut(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return gt.call(t)}function b(t){return Dt.call(t)}function lr(t,n){if(!N)return J(t);var r=J(m);if(r===null)r=m.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function or(t,n){if(!N){var r=J(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function ur(t,n=1,r=!1){let e=N?m:t;for(;n--;)e=b(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),L(a),a}return L(e),e}function ir(t){t.textContent=""}function fn(t){var n=T|D;o===null?n|=R:o.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&T){var e=u;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=fn(t);return n.equals=Et,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?et(e):P(e)}}}function Rt(t){var n,r=o;$(t.parent);try{It(t),n=Yt(t)}finally{$(r)}return n}function St(t){var n=Rt(t),r=(S||t.f&R)&&t.deps!==null?C:p;d(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function et(t){It(t),H(t,0),d(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){o===null&&u===null&&tn(),u!==null&&u.f&R&&Qt(),at&&Jt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&Z)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{_t(!0),B(l),l.f|=zt}catch(c){throw P(l),c}finally{_t(i)}}else n!==null&&W(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ht)===0;if(!w&&!s&&e&&(a!==null&&_n(l,a),u!==null&&u.f&T)){var A=u;(A.children??(A.children=[])).push(l)}return l}function _r(t){const n=F(Y,null,!1);return d(n,p),n.teardown=t,n}function cr(t){xt();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ot(t);return e}}function vr(t){return xt(),st(t)}function pr(t){const n=F(Z,t,!0);return()=>{P(n)}}function Ot(t){return F(vt,t,!1)}function hr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=st(()=>{t(),!e.ran&&(e.ran=!0,wt(r.l.r2,!0),gn(n))})}function dr(){var t=f;st(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&d(r,C),q(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function st(t){return F(Y,t,!0)}function Er(t){return cn(t)}function cn(t,n=0){return F(Y|nt|n,t,!0)}function yr(t,n=!0){return F(Y|y,t,!0,n)}function kt(t){var n=t.teardown;if(n!==null){const r=at,e=u;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:b(e);e.remove(),e=a}r=!0}Ct(t,n&&!r),Nt(t),H(t,0),d(t,j);var l=t.transitions;if(l!==null)for(const w of l)w.stop();kt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wr(t,n){var r=[];Ft(t,r,!0),pn(r,()=>{P(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&pt)!==0||(e.f&y)!==0;Ft(e,n,a?r:!1),e=s}}}function Tr(t){Pt(t,!0)}function Pt(t,n){if(t.f&k){q(t)&&B(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,Q=[];function qt(){G=!1;const t=Q.slice();Q=[],Zt(t)}function mr(t){G||(G=!0,queueMicrotask(qt)),Q.push(t)}function hn(){G&&qt()}const Lt=0,dn=1;let U=Lt,M=!1,x=!1,at=!1;function _t(t){x=t}function ct(t){at=t}let I=[],O=0;let u=null;function K(t){u=t}let o=null;function $(t){o=t}let E=null;function En(t){E=t}let _=null,h=0,g=null;function yn(t){g=t}let Mt=0,S=!1,f=null;function Ht(){return++Mt}function lt(){return!z||f!==null&&f.l===null}function q(t){var l,i;var n=t.f;if(n&D)return!0;if(n&C){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&St(a),e&&o!==null&&!S&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||d(t,p)}return!1}function wn(t,n,r){throw t}function Yt(t){var ot;var n=_,r=h,e=g,s=u,a=S,l=E,i=f,w=t.f;_=null,h=0,g=null,u=w&(y|Z)?null:t,S=!x&&(w&R)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!S)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,S=a,E=l,f=i}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(d(n,C),n.f&(R|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){d(t,p);var r=o;o=t;try{n&nt?vn(t):Ct(t),Nt(t),kt(t);var e=Yt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(s){wn(s)}finally{o=r}}}function jt(){O>1e3&&(O=0,nn()),O++}function Bt(t){var n=t.length;if(n!==0){jt();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ut(s,a),mn(a)}}finally{x=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|k))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function An(){if(M=!1,O>1001)return;const t=I;I=[],Bt(t),M||(O=0)}function W(t){U===Lt&&(M||(M=!0,queueMicrotask(An)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&p))return;n.f^=p}}I.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&k))if(s&Y){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&vt&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ut(i,n)}function Vt(t){var n=U,r=I;try{jt();const s=[];U=dn,I=s,M=!1,Bt(r);var e=t==null?void 0:t();return hn(),(I.length>0||s.length>0)&&Vt(),O=0,e}finally{U=n,I=r}}async function Ar(){await Promise.resolve(),Vt()}function Gt(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Rt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&rn();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(d(o,D),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,q(a)&&St(a)),t.v}function gn(t){const n=u;try{return u=null,t()}finally{u=n}}const Dn=~(D|C|p);function d(t,n){t.f=t.f&Dn|n}function gr(t,n=1){var r=+Gt(t);return wt(t,r+n),r}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Ir(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Ot(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Z as $,rt as A,Ln as B,wt as C,ut as D,pt as E,o as F,Mn as G,$t as H,In as I,Tr as J,wr as K,rr as L,on as M,sr as N,L as O,nr as P,Ot as Q,st as R,it as S,mr as T,tr as U,qn as V,bn as W,zn as X,Et as Y,gr as Z,y as _,Ir as a,$ as a0,$n as a1,z as a2,Zn as a3,Wn as a4,fr as a5,Xn as a6,sn as a7,kn as a8,X as a9,Vn as aA,Gn as aB,Kn as aC,Fn as aD,Kt as aE,jn as aF,hr as aG,dr as aH,J as aa,Jn as ab,Qn as ac,K as ad,u as ae,_r as af,Sn as ag,ar as ah,ln as ai,b as aj,mt as ak,un as al,At as am,Pn as an,ir as ao,Rn as ap,pr as aq,Vt as ar,Ar as as,Yn as at,k as au,Bn as av,an as aw,Un as ax,Ft as ay,pn as az,ur as b,lr as c,cr as d,f as e,or as f,gn as g,Cn as h,Zt as i,Gt as j,Rr as k,fn as l,Hn as m,Nn as n,cn as o,Dr as p,yr as q,er as r,Xt as s,Er as t,vr as u,P as v,N as w,m as x,xn as y,On as z};
