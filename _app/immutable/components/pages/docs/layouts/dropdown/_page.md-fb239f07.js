import{S as vt,i as kt,s as ht,Q as It,T as it,F as x,k as E,a as A,l as I,m as P,h as i,c as R,n as h,H as ut,I as H,b as f,L as G,U,ah as Tt,V as ft,W as $t,X as mt,J as Mt,f as $,t as m,a3 as St,D as _t,G as qt,a6 as Bt,a0 as tt,a1 as et,q,w as g,r as B,x as d,y as v,a2 as nt,z as k,am as Y,B as F,u as Pt}from"../../../../../chunks/index-4d397774.js";import{b as J}from"../../../../../chunks/paths-6cd3a76e.js";/* empty css                                                                  */import{I as Ct}from"../../../../../chunks/IconButton-7490264a.js";import{A as N}from"../../../../../chunks/Avatar-424e1ccd.js";import{B as j}from"../../../../../chunks/Button-a30598c2.js";import{G as Gt}from"../../../../../chunks/Group-8834346a.js";import{I as wt}from"../../../../../chunks/Icon-4c7a551a.js";import{M as at}from"../../../../../chunks/Menu-61aa3ff7.js";import{G as Ht,C as y}from"../../../../../chunks/Col-56b667da.js";import{T as st}from"../../../../../chunks/Tile-7ee56fa4.js";import{K as At}from"../../../../../chunks/knobs-118d5e43.js";const Rt=o=>({}),gt=o=>({});function Ft(o){let t,n,e,a,s,l,r,u;It(o[9]);const T=o[7].default,_=it(T,o,o[6],null),b=o[7].content,w=it(b,o,o[6],gt);let M=[o[5],{class:"dropdown"}],C={};for(let c=0;c<M.length;c+=1)C=x(C,M[c]);return{c(){t=E("div"),n=E("div"),_&&_.c(),e=A(),a=E("div"),w&&w.c(),s=A(),this.h()},l(c){t=I(c,"DIV",{class:!0});var S=P(t);n=I(S,"DIV",{class:!0,tabindex:!0});var L=P(n);_&&_.l(L),L.forEach(i),e=R(S),a=I(S,"DIV",{class:!0});var V=P(a);w&&w.l(V),V.forEach(i),S.forEach(i),s=R(c),this.h()},h(){h(n,"class","dropdown-toggle svelte-rw4qoe"),h(n,"tabindex","0"),h(a,"class","menu svelte-rw4qoe"),ut(t,C),H(t,"active",o[0]),H(t,"dropdown-center",o[1].center),H(t,"dropdown-right",o[1].right),H(t,"dropdown-bottom",o[1].bottom),H(t,"svelte-rw4qoe",!0)},m(c,S){f(c,t,S),G(t,n),_&&_.m(n,null),G(t,e),G(t,a),w&&w.m(a,null),f(c,s,S),l=!0,r||(u=[U(window,"resize",o[9]),U(n,"click",Tt(o[8])),U(n,"click",o[4]),U(document.body,"click",o[10])],r=!0)},p(c,[S]){_&&_.p&&(!l||S&64)&&ft(_,T,c,c[6],l?mt(T,c[6],S,null):$t(c[6]),null),w&&w.p&&(!l||S&64)&&ft(w,b,c,c[6],l?mt(b,c[6],S,Rt):$t(c[6]),gt),ut(t,C=Mt(M,[S&32&&c[5],{class:"dropdown"}])),H(t,"active",c[0]),H(t,"dropdown-center",c[1].center),H(t,"dropdown-right",c[1].right),H(t,"dropdown-bottom",c[1].bottom),H(t,"svelte-rw4qoe",!0)},i(c){l||($(_,c),$(w,c),l=!0)},o(c){m(_,c),m(w,c),l=!1},d(c){c&&i(t),_&&_.d(c),w&&w.d(c),c&&i(s),r=!1,St(u)}}}function Lt(o,t,n){const e=["active","align"];let a=_t(t,e),{$$slots:s={},$$scope:l}=t,{active:r=!1}=t,{align:u={}}=t,T=0,_=0;function b(c){n(1,u={right:T-c.clientX<c.clientX,bottom:_-c.clientY<c.clientY})}function w(c){Bt.call(this,o,c)}function M(){n(2,T=window.innerWidth),n(3,_=window.innerHeight)}const C=()=>n(0,r=!1);return o.$$set=c=>{t=x(x({},t),qt(c)),n(5,a=_t(t,e)),"active"in c&&n(0,r=c.active),"align"in c&&n(1,u=c.align),"$$scope"in c&&n(6,l=c.$$scope)},[r,u,T,_,b,a,l,s,w,M,C]}class ot extends vt{constructor(t){super(),kt(this,t,Lt,Ft,ht,{active:0,align:1})}}function Ot(o){let t,n,e;return t=new wt({props:{icon:"caret"}}),{c(){g(t.$$.fragment),n=q("\xA0 Dropdown left")},l(a){d(t.$$.fragment,a),n=B(a,"\xA0 Dropdown left")},m(a,s){v(t,a,s),f(a,n,s),e=!0},p:F,i(a){e||($(t.$$.fragment,a),e=!0)},o(a){m(t.$$.fragment,a),e=!1},d(a){k(t,a),a&&i(n)}}}function Vt(o){let t,n;return t=new j({props:{$$slots:{default:[Ot]},$$scope:{ctx:o}}}),t.$on("click",o[3]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function jt(o){let t,n;return{c(){t=E("img"),this.h()},l(e){t=I(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(t,"class","avatar"),Y(t.src,n=J+"/img/avatar-4.png")||h(t,"src",n),h(t,"alt","Avatar")},m(e,a){f(e,t,a)},p:F,d(e){e&&i(t)}}}function zt(o){let t,n;return t=new N({props:{slot:"icon",$$slots:{default:[jt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Kt(o){let t,n;return{c(){t=E("div"),n=q("Steve Rogers"),this.h()},l(e){t=I(e,"DIV",{slot:!0,class:!0});var a=P(t);n=B(a,"Steve Rogers"),a.forEach(i),this.h()},h(){h(t,"slot","title"),h(t,"class","tile-content")},m(e,a){f(e,t,a),G(t,n)},p:F,d(e){e&&i(t)}}}function Wt(o){let t,n;return t=new st({props:{slot:"header",$$slots:{title:[Kt],icon:[zt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Xt(o){let t;return{c(){t=q("Footer")},l(n){t=B(n,"Footer")},m(n,e){f(n,t,e)},d(n){n&&i(t)}}}function Qt(o){let t,n;return t=new j({props:{slot:"footer",block:!0,variant:"primary",$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ut(o){let t,n;return t=new at({props:{slot:"content",items:o[2],nav:!0,$$slots:{footer:[Qt],header:[Wt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Yt(o){let t,n,e;function a(l){o[4](l)}let s={align:"left",$$slots:{content:[Ut],default:[Vt]},$$scope:{ctx:o}};return o[1].active0!==void 0&&(s.active=o[1].active0),t=new ot({props:s}),tt.push(()=>et(t,"active",a,o[1].active0)),{c(){g(t.$$.fragment)},l(l){d(t.$$.fragment,l)},m(l,r){v(t,l,r),e=!0},p(l,r){const u={};r&1026&&(u.$$scope={dirty:r,ctx:l}),!n&&r&2&&(n=!0,u.active=l[1].active0,nt(()=>n=!1)),t.$set(u)},i(l){e||($(t.$$.fragment,l),e=!0)},o(l){m(t.$$.fragment,l),e=!1},d(l){k(t,l)}}}function Jt(o){let t,n=o[1].align+"",e;return{c(){t=q("Dropdown "),e=q(n)},l(a){t=B(a,"Dropdown "),e=B(a,n)},m(a,s){f(a,t,s),f(a,e,s)},p(a,s){s&2&&n!==(n=a[1].align+"")&&Pt(e,n)},d(a){a&&i(t),a&&i(e)}}}function Nt(o){let t,n,e,a;return t=new j({props:{variant:"primary",$$slots:{default:[Jt]},$$scope:{ctx:o}}}),t.$on("click",o[5]),e=new Ct({props:{variant:"primary",icon:"caret"}}),e.$on("click",o[6]),{c(){g(t.$$.fragment),n=A(),g(e.$$.fragment)},l(s){d(t.$$.fragment,s),n=R(s),d(e.$$.fragment,s)},m(s,l){v(t,s,l),f(s,n,l),v(e,s,l),a=!0},p(s,l){const r={};l&1026&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){a||($(t.$$.fragment,s),$(e.$$.fragment,s),a=!0)},o(s){m(t.$$.fragment,s),m(e.$$.fragment,s),a=!1},d(s){k(t,s),s&&i(n),k(e,s)}}}function Zt(o){let t,n;return t=new Gt({props:{$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1027&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function yt(o){let t,n;return{c(){t=E("img"),this.h()},l(e){t=I(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(t,"class","avatar"),Y(t.src,n=J+"/img/avatar-4.png")||h(t,"src",n),h(t,"alt","Avatar")},m(e,a){f(e,t,a)},p:F,d(e){e&&i(t)}}}function xt(o){let t,n;return t=new N({props:{slot:"icon",$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function te(o){let t,n;return{c(){t=E("img"),this.h()},l(e){t=I(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(t,"class","avatar"),Y(t.src,n=J+"/img/avatar-4.png")||h(t,"src",n),h(t,"alt","Avatar")},m(e,a){f(e,t,a)},p:F,d(e){e&&i(t)}}}function ee(o){let t,n;return t=new N({props:{slot:"icon",$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ne(o){let t,n;return{c(){t=E("div"),n=q("Steve Rogers"),this.h()},l(e){t=I(e,"DIV",{slot:!0,class:!0});var a=P(t);n=B(a,"Steve Rogers"),a.forEach(i),this.h()},h(){h(t,"slot","title"),h(t,"class","tile-content")},m(e,a){f(e,t,a),G(t,n)},p:F,d(e){e&&i(t)}}}function ae(o){let t,n;return t=new st({props:{slot:"header",$$slots:{title:[ne],icon:[ee]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function se(o){let t;return{c(){t=q("Footer")},l(n){t=B(n,"Footer")},m(n,e){f(n,t,e)},d(n){n&&i(t)}}}function oe(o){let t,n;return t=new j({props:{slot:"footer",block:!0,variant:"primary",$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function re(o){let t,n;return t=new at({props:{slot:"content",items:o[2],nav:!0,$$slots:{footer:[oe],header:[ae]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function le(o){let t,n,e;function a(l){o[7](l)}let s={align:o[1].align,$$slots:{content:[re],icon:[xt],default:[Zt]},$$scope:{ctx:o}};return o[0]!==void 0&&(s.active=o[0]),t=new ot({props:s}),tt.push(()=>et(t,"active",a,o[0])),{c(){g(t.$$.fragment)},l(l){d(t.$$.fragment,l)},m(l,r){v(t,l,r),e=!0},p(l,r){const u={};r&2&&(u.align=l[1].align),r&1027&&(u.$$scope={dirty:r,ctx:l}),!n&&r&1&&(n=!0,u.active=l[0],nt(()=>n=!1)),t.$set(u)},i(l){e||($(t.$$.fragment,l),e=!0)},o(l){m(t.$$.fragment,l),e=!1},d(l){k(t,l)}}}function ce(o){let t,n,e;return n=new wt({props:{icon:"caret"}}),{c(){t=q("Dropdown right \xA0"),g(n.$$.fragment)},l(a){t=B(a,"Dropdown right \xA0"),d(n.$$.fragment,a)},m(a,s){f(a,t,s),v(n,a,s),e=!0},p:F,i(a){e||($(n.$$.fragment,a),e=!0)},o(a){m(n.$$.fragment,a),e=!1},d(a){a&&i(t),k(n,a)}}}function pe(o){let t,n;return t=new j({props:{variant:"primary",$$slots:{default:[ce]},$$scope:{ctx:o}}}),t.$on("click",o[8]),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ie(o){let t,n;return{c(){t=E("img"),this.h()},l(e){t=I(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(t,"class","avatar"),Y(t.src,n=J+"/img/avatar-4.png")||h(t,"src",n),h(t,"alt","Avatar")},m(e,a){f(e,t,a)},p:F,d(e){e&&i(t)}}}function ue(o){let t,n;return t=new N({props:{slot:"icon",$$slots:{default:[ie]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function fe(o){let t,n;return{c(){t=E("div"),n=q("Steve Rogers"),this.h()},l(e){t=I(e,"DIV",{slot:!0,class:!0});var a=P(t);n=B(a,"Steve Rogers"),a.forEach(i),this.h()},h(){h(t,"slot","title"),h(t,"class","tile-content")},m(e,a){f(e,t,a),G(t,n)},p:F,d(e){e&&i(t)}}}function $e(o){let t,n;return t=new st({props:{slot:"header",$$slots:{title:[fe],icon:[ue]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function me(o){let t;return{c(){t=q("Footer")},l(n){t=B(n,"Footer")},m(n,e){f(n,t,e)},d(n){n&&i(t)}}}function _e(o){let t,n;return t=new j({props:{slot:"footer",block:!0,variant:"primary",$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ge(o){let t,n;return t=new at({props:{slot:"content",items:o[2],nav:!0,$$slots:{footer:[_e],header:[$e]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&1024&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function de(o){let t,n;return t=new ot({props:{active:o[1].active2,align:"right",$$slots:{content:[ge],default:[pe]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const s={};a&2&&(s.active=e[1].active2),a&1026&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ve(o){let t,n,e,a,s,l;return t=new y({props:{col:"auto",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),e=new y({props:{col:"auto",mx:"auto",$$slots:{default:[le]},$$scope:{ctx:o}}}),s=new y({props:{col:"auto",$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment),n=A(),g(e.$$.fragment),a=A(),g(s.$$.fragment)},l(r){d(t.$$.fragment,r),n=R(r),d(e.$$.fragment,r),a=R(r),d(s.$$.fragment,r)},m(r,u){v(t,r,u),f(r,n,u),v(e,r,u),f(r,a,u),v(s,r,u),l=!0},p(r,u){const T={};u&1026&&(T.$$scope={dirty:u,ctx:r}),t.$set(T);const _={};u&1027&&(_.$$scope={dirty:u,ctx:r}),e.$set(_);const b={};u&1026&&(b.$$scope={dirty:u,ctx:r}),s.$set(b)},i(r){l||($(t.$$.fragment,r),$(e.$$.fragment,r),$(s.$$.fragment,r),l=!0)},o(r){m(t.$$.fragment,r),m(e.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){k(t,r),r&&i(n),k(e,r),r&&i(a),k(s,r)}}}function ke(o){let t,n,e,a,s,l,r,u,T,_,b,w,M,C,c,S,L,V,Z,W,O,bt=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> active <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name"><span class="token namespace">bind:</span>active</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> active <span class="token operator">=</span> <span class="token operator">!</span>active<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
        Dropdown <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>caret<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">items=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>menu<span class="token punctuation">&#125;</span></span> <span class="token attr-name">nav</span> <span class="token punctuation">/></span></span> // or any content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click|stopPropagation=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> active <span class="token operator">=</span> <span class="token operator">!</span>active<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
    Outside open Dropdown
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>`,X;u=new Ht({props:{stack:!0,$$slots:{default:[ve]},$$scope:{ctx:o}}});function Dt(p){o[9](p)}let rt={config:we};return o[1]!==void 0&&(rt.state=o[1]),b=new At({props:rt}),tt.push(()=>et(b,"state",Dt,o[1])),{c(){t=E("h1"),n=q(dt),e=A(),a=E("p"),s=q("The Dropdown is a toggled by click layout for any toggler element & content."),l=A(),r=E("p"),g(u.$$.fragment),T=A(),_=E("p"),g(b.$$.fragment),M=A(),C=E("blockquote"),c=E("p"),S=q("If you are opening Dropdown outside component you need "),L=E("code"),V=q("|stopPropagation"),Z=q(`
modifier`),W=A(),O=E("pre"),this.h()},l(p){t=I(p,"H1",{});var D=P(t);n=B(D,dt),D.forEach(i),e=R(p),a=I(p,"P",{});var z=P(a);s=B(z,"The Dropdown is a toggled by click layout for any toggler element & content."),z.forEach(i),l=R(p),r=I(p,"P",{});var K=P(r);d(u.$$.fragment,K),K.forEach(i),T=R(p),_=I(p,"P",{});var lt=P(_);d(b.$$.fragment,lt),lt.forEach(i),M=R(p),C=I(p,"BLOCKQUOTE",{});var ct=P(C);c=I(ct,"P",{});var Q=P(c);S=B(Q,"If you are opening Dropdown outside component you need "),L=I(Q,"CODE",{});var pt=P(L);V=B(pt,"|stopPropagation"),pt.forEach(i),Z=B(Q,`
modifier`),Q.forEach(i),ct.forEach(i),W=R(p),O=I(p,"PRE",{class:!0});var Et=P(O);Et.forEach(i),this.h()},h(){h(O,"class","language-sv")},m(p,D){f(p,t,D),G(t,n),f(p,e,D),f(p,a,D),G(a,s),f(p,l,D),f(p,r,D),v(u,r,null),f(p,T,D),f(p,_,D),v(b,_,null),f(p,M,D),f(p,C,D),G(C,c),G(c,S),G(c,L),G(L,V),G(c,Z),f(p,W,D),f(p,O,D),O.innerHTML=bt,X=!0},p(p,[D]){const z={};D&1027&&(z.$$scope={dirty:D,ctx:p}),u.$set(z);const K={};!w&&D&2&&(w=!0,K.state=p[1],nt(()=>w=!1)),b.$set(K)},i(p){X||($(u.$$.fragment,p),$(b.$$.fragment,p),X=!0)},o(p){m(u.$$.fragment,p),m(b.$$.fragment,p),X=!1},d(p){p&&i(t),p&&i(e),p&&i(a),p&&i(l),p&&i(r),k(u),p&&i(T),p&&i(_),k(b),p&&i(M),p&&i(C),p&&i(W),p&&i(O)}}}const he={file:"dropdown.md",title:"Dropdown",api:[{title:"<slot>: HTMLelement | SvelteComponent",description:"Dropdown toggler. Add on:click event to element inside for handle active state.",variables:"HTMLelement | SvelteComponent"},{title:'<slot name="content">: HTMLelement | SvelteComponent',description:"Dropdown content",variables:"HTMLelement | SvelteComponent"},{title:"active: boolean = false",description:"Dropdown active",variables:"true | false"},{title:'align: Aling = "left"',description:"Dropdown align",variables:"left | center | right"}],config:{align:{options:["left","center","right"]},open:{type:"button"}}},{file:Ae,title:dt,api:Re,config:we}=he;function be(o,t,n){let e=[{divider:"TOP"},{text:"top_left",active:!0},{text:"top_center",checkbox:!0},{text:"top_right",badge:2},{divider:"CENTER"},{text:"center_left",icon:"link"},{text:"center_center",switch:!0},{text:"center_right",badge:"badge",checkbox:!0},{divider:"BOTTOM"},{text:"bottom_left",radio:!0},{text:"bottom_center",radio:!0},{text:"bottom_right",radio:!0}],a=!1,s={open:()=>n(0,a=!a),align:"left"};const l=()=>n(1,s.active0=!s.active0,s);function r(M){o.$$.not_equal(s.active0,M)&&(s.active0=M,n(1,s))}const u=()=>alert("toggler out click"),T=()=>n(0,a=!a);function _(M){a=M,n(0,a)}const b=()=>n(1,s.active2=!s.active2,s);function w(M){s=M,n(1,s)}return[a,s,e,l,r,u,T,_,b,w]}class Fe extends vt{constructor(t){super(),kt(this,t,be,ke,ht,{})}}export{Fe as default,he as metadata};
