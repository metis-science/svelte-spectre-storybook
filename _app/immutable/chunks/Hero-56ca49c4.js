import{S as D,i as I,s as T,T as V,F as g,k as d,l as b,m as v,h as c,n as q,I as h,H as k,b as m,L as H,V as P,W as S,X as B,J as C,f as F,t as G,D as p,G as J,q as E,a as L,r as j,c as W,B as X}from"./index-4d397774.js";/* empty css                                              */function y(r){let s,a,o,i,f;return{c(){s=d("h1"),a=E("Hero title"),o=L(),i=d("p"),f=E("This is a hero example")},l(l){s=b(l,"H1",{});var t=v(s);a=j(t,"Hero title"),t.forEach(c),o=W(l),i=b(l,"P",{});var _=v(i);f=j(_,"This is a hero example"),_.forEach(c)},m(l,t){m(l,s,t),H(s,a),m(l,o,t),m(l,i,t),H(i,f)},p:X,d(l){l&&c(s),l&&c(o),l&&c(i)}}}function A(r){let s,a,o,i;const f=r[5].default,l=V(f,r,r[4],null),t=l||y();let _=[r[3],{class:o="hero "+(r[0]&&`hero-${r[0]}`)+" "+(r[1]&&`bg-${r[1]}`)}],u={};for(let e=0;e<_.length;e+=1)u=g(u,_[e]);return{c(){s=d("div"),a=d("div"),t&&t.c(),this.h()},l(e){s=b(e,"DIV",{class:!0});var n=v(s);a=b(n,"DIV",{class:!0});var z=v(a);t&&t.l(z),z.forEach(c),n.forEach(c),this.h()},h(){q(a,"class","hero-body svelte-cm4ijb"),h(a,"text-center",r[2]),k(s,u),h(s,"svelte-cm4ijb",!0)},m(e,n){m(e,s,n),H(s,a),t&&t.m(a,null),i=!0},p(e,[n]){l&&l.p&&(!i||n&16)&&P(l,f,e,e[4],i?B(f,e[4],n,null):S(e[4]),null),(!i||n&4)&&h(a,"text-center",e[2]),k(s,u=C(_,[n&8&&e[3],(!i||n&3&&o!==(o="hero "+(e[0]&&`hero-${e[0]}`)+" "+(e[1]&&`bg-${e[1]}`)))&&{class:o}])),h(s,"svelte-cm4ijb",!0)},i(e){i||(F(t,e),i=!0)},o(e){G(t,e),i=!1},d(e){e&&c(s),t&&t.d(e)}}}function K(r,s,a){const o=["size","bg","center"];let i=p(s,o),{$$slots:f={},$$scope:l}=s,{size:t="xs"}=s,{bg:_=""}=s,{center:u=!1}=s;return r.$$set=e=>{s=g(g({},s),J(e)),a(3,i=p(s,o)),"size"in e&&a(0,t=e.size),"bg"in e&&a(1,_=e.bg),"center"in e&&a(2,u=e.center),"$$scope"in e&&a(4,l=e.$$scope)},[t,_,u,i,l,f]}class O extends D{constructor(s){super(),I(this,s,K,A,T,{size:0,bg:1,center:2})}}export{O as H};
