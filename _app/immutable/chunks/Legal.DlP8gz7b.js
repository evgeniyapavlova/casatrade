import{_ as P}from"./preload-helper.C1FmrZbK.js";import{H as G,l as A,F as J,_ as Q}from"./Footer.JzlXSAdY.js";import{s as j,K as R,L as V,l as $,d as h,f as d,i as p,g as q,n as I,u as B,e as Z,a as D,t as K,c as H,b as L,m as z,v as C,w as F,x as N,C as S,B as U,o as W}from"./scheduler.DSdJPAJ9.js";import{S as M,i as O,c as k,a as T,m as b,t as v,b as g,d as E,g as X,e as Y}from"./index.D1_zti_2.js";function x(i){let t,l;return{c(){t=R("svg"),l=R("path"),this.h()},l(e){t=V(e,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var s=$(t);l=V(s,"path",{d:!0}),$(l).forEach(h),s.forEach(h),this.h()},h(){d(l,"d","M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"height","40px"),d(t,"viewBox","0 -960 960 960"),d(t,"width","40px"),d(t,"fill","#fff")},m(e,s){p(e,t,s),q(t,l)},p:I,i:I,o:I,d(e){e&&h(t)}}}class ee extends M{constructor(t){super(),O(this,t,null,x,j,{})}}function te(i){let t,l,e,s,o,m,r;const _=i[2].default,n=B(_,i,i[1],null);s=new ee({});const u=i[2].default,f=B(u,i,i[1],null);return{c(){t=Z("h2"),n&&n.c(),l=D(),e=Z("a"),k(s.$$.fragment),o=D(),f&&f.c(),m=K(".pdf"),this.h()},l(a){t=H(a,"H2",{class:!0});var c=$(t);n&&n.l(c),c.forEach(h),l=L(a),e=H(a,"A",{href:!0,target:!0,class:!0,alt:!0});var w=$(e);T(s.$$.fragment,w),o=L(w),f&&f.l(w),m=z(w,".pdf"),w.forEach(h),this.h()},h(){d(t,"class","svelte-1ylqee"),d(e,"href",i[0]),d(e,"target","_blank"),d(e,"class","pdf-link svelte-1ylqee"),d(e,"alt","Download PDF")},m(a,c){p(a,t,c),n&&n.m(t,null),p(a,l,c),p(a,e,c),b(s,e,null),q(e,o),f&&f.m(e,null),q(e,m),r=!0},p(a,[c]){n&&n.p&&(!r||c&2)&&C(n,_,a,a[1],r?N(_,a[1],c,null):F(a[1]),null),f&&f.p&&(!r||c&2)&&C(f,u,a,a[1],r?N(u,a[1],c,null):F(a[1]),null),(!r||c&1)&&d(e,"href",a[0])},i(a){r||(v(n,a),v(s.$$.fragment,a),v(f,a),r=!0)},o(a){g(n,a),g(s.$$.fragment,a),g(f,a),r=!1},d(a){a&&(h(t),h(l),h(e)),n&&n.d(a),E(s),f&&f.d(a)}}}function se(i,t,l){let{$$slots:e={},$$scope:s}=t,{link:o}=t;return i.$$set=m=>{"link"in m&&l(0,o=m.link),"$$scope"in m&&l(1,s=m.$$scope)},[o,s,e]}class ne extends M{constructor(t){super(),O(this,t,se,te,j,{link:0})}}function y(i){let t,l,e,s,o,m,r,_;return t=new G({props:{content:i[2].header,isNotMain:!0}}),o=new ne({props:{link:A[i[0]].link,$$slots:{default:[le]},$$scope:{ctx:i}}}),r=new J({props:{content:i[2].footer}}),{c(){k(t.$$.fragment),l=D(),e=Z("section"),s=Z("div"),k(o.$$.fragment),m=D(),k(r.$$.fragment),this.h()},l(n){T(t.$$.fragment,n),l=L(n),e=H(n,"SECTION",{class:!0});var u=$(e);s=H(u,"DIV",{class:!0});var f=$(s);T(o.$$.fragment,f),f.forEach(h),u.forEach(h),m=L(n),T(r.$$.fragment,n),this.h()},h(){d(s,"class","pdf-download"),d(e,"class","legal-links svelte-p30p0m")},m(n,u){b(t,n,u),p(n,l,u),p(n,e,u),q(e,s),b(o,s,null),p(n,m,u),b(r,n,u),_=!0},p(n,u){const f={};u&4&&(f.content=n[2].header),t.$set(f);const a={};u&1&&(a.link=A[n[0]].link),u&37&&(a.$$scope={dirty:u,ctx:n}),o.$set(a);const c={};u&4&&(c.content=n[2].footer),r.$set(c)},i(n){_||(v(t.$$.fragment,n),v(o.$$.fragment,n),v(r.$$.fragment,n),_=!0)},o(n){g(t.$$.fragment,n),g(o.$$.fragment,n),g(r.$$.fragment,n),_=!1},d(n){n&&(h(l),h(e),h(m)),E(t,n),E(o),E(r,n)}}}function le(i){let t=i[2].footer.links[i[0]]+"",l;return{c(){l=K(t)},l(e){l=z(e,t)},m(e,s){p(e,l,s)},p(e,s){s&5&&t!==(t=e[2].footer.links[e[0]]+"")&&W(l,t)},d(e){e&&h(l)}}}function ae(i){let t,l,e=i[1]&&y(i);return{c(){e&&e.c(),t=S()},l(s){e&&e.l(s),t=S()},m(s,o){e&&e.m(s,o),p(s,t,o),l=!0},p(s,[o]){s[1]?e?(e.p(s,o),o&2&&v(e,1)):(e=y(s),e.c(),v(e,1),e.m(t.parentNode,t)):e&&(X(),g(e,1,1,()=>{e=null}),Y())},i(s){l||(v(e),l=!0)},o(s){g(e),l=!1},d(s){s&&h(t),e&&e.d(s)}}}function ie(i,t,l){let{index:e,lang:s}=t,o=!1,m={};async function r(){if(!o){const _=await Q(Object.assign({"../../../lib/translations/en.js":()=>P(()=>import("./en.CsBzAhIl.js"),[],import.meta.url),"../../../lib/translations/es.js":()=>P(()=>import("./es.D3wl0iyJ.js"),[],import.meta.url),"../../../lib/translations/pt.js":()=>P(()=>import("./pt.CkPraoLH.js"),[],import.meta.url)}),`../../../lib/translations/${s}.js`,6);l(2,m=_.default),l(1,o=!0)}}return U(async()=>{r()}),i.$$set=_=>{"index"in _&&l(0,e=_.index),"lang"in _&&l(3,s=_.lang)},[e,o,m,s]}class me extends M{constructor(t){super(),O(this,t,ie,ae,j,{index:0,lang:3})}}export{me as L};
