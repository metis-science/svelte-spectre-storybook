import{S as _,i as b,s as P,F as u,k as S,l as x,m as d,h as c,H as v,I as n,b as E,J as G,B as f,D as h,G as R}from"./index-4d397774.js";/* empty css                                              */function k(a){let e,t,i=[a[4],{class:t="progress "+(a[0]&&`text-${a[0]}`)},{value:a[2]},{max:a[3]}],o={};for(let s=0;s<i.length;s+=1)o=u(o,i[s]);return{c(){e=S("progress"),this.h()},l(s){e=x(s,"PROGRESS",{class:!0,max:!0}),d(e).forEach(c),this.h()},h(){v(e,o),n(e,"progress-invert",a[1]),n(e,"svelte-1l1eoib",!0)},m(s,l){E(s,e,l)},p(s,[l]){v(e,o=G(i,[l&16&&s[4],l&1&&t!==(t="progress "+(s[0]&&`text-${s[0]}`))&&{class:t},l&4&&{value:s[2]},l&8&&{max:s[3]}])),n(e,"progress-invert",s[1]),n(e,"svelte-1l1eoib",!0)},i:f,o:f,d(s){s&&c(e)}}}function q(a,e,t){const i=["color","invert","value","max"];let o=h(e,i),{color:s="light"}=e,{invert:l=!1}=e,{value:m}=e,{max:g=0}=e;return a.$$set=r=>{e=u(u({},e),R(r)),t(4,o=h(e,i)),"color"in r&&t(0,s=r.color),"invert"in r&&t(1,l=r.invert),"value"in r&&t(2,m=r.value),"max"in r&&t(3,g=r.max)},[s,l,m,g,o]}class D extends _{constructor(e){super(),b(this,e,q,k,P,{color:0,invert:1,value:2,max:3})}}export{D as P};
