const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../assets/fonts.DF0ORABb.css"])))=>i.map(i=>d[i]);
import{_ as j}from"../chunks/preload-helper.C1FmrZbK.js";import{s as q,r as V,f as F,g as W,h as N,d as M,j as U,i as z,u as H,v as J,w as Q,o as Z}from"../chunks/scheduler.C6Mfd0A3.js";import{S as oo,i as eo,a as to,t as so}from"../chunks/index.BZaGerpB.js";import{c as ro,g as R,S as io}from"../chunks/ScrollTrigger.D3P8AdK4.js";const no=()=>{const _=n=>{const t=n.getAttribute("data-bgimage");t&&(n.style.backgroundImage=`url(${t})`)},u=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting&&(_(t.target),u.unobserve(t.target))})},{root:null,rootMargin:"992px 0px 0px 0px",threshold:0}),f=()=>{document.querySelectorAll(".has-bgr").forEach(t=>{t.style.backgroundImage||u.observe(t)})};new MutationObserver(()=>{f()}).observe(document.body,{childList:!0,subtree:!0}),f()};var v={exports:{}};(function(_,u){(function(f,l){l(u)})(ro,function(f){/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var l,n,t,c,y,A,O,S,L=function(){return typeof window<"u"},E=function(){return l||L()&&(l=window.gsap)&&l.registerPlugin&&l},X=function(o){return typeof o=="string"},Y=function(o){return typeof o=="function"},a=function(o,e){var r=e==="x"?"Width":"Height",i="scroll"+r,p="client"+r;return o===t||o===c||o===y?Math.max(c[i],y[i])-(t["inner"+r]||c[p]||y[p]):o[i]-o["offset"+r]},x=function(o,e){var r="scroll"+(e==="x"?"Left":"Top");return o===t&&(o.pageXOffset!=null?r="page"+e.toUpperCase()+"Offset":o=c[r]!=null?c:y),function(){return o[r]}},D=function(o,e,r,i){if(Y(o)&&(o=o(e,r,i)),typeof o!="object")return X(o)&&o!=="max"&&o.charAt(1)!=="="?{x:o,y:o}:{y:o};if(o.nodeType)return{y:o,x:o};var p={},s;for(s in o)p[s]=s!=="onAutoKill"&&Y(o[s])?o[s](e,r,i):o[s];return p},I=function(o,e){if(o=A(o)[0],!o||!o.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var r=o.getBoundingClientRect(),i=!e||e===t||e===y,p=i?{top:c.clientTop-(t.pageYOffset||c.scrollTop||y.scrollTop||0),left:c.clientLeft-(t.pageXOffset||c.scrollLeft||y.scrollLeft||0)}:e.getBoundingClientRect(),s={x:r.left-p.left,y:r.top-p.top};return!i&&e&&(s.x+=x(e,"x")(),s.y+=x(e,"y")()),s},K=function(o,e,r,i,p){return!isNaN(o)&&typeof o!="object"?parseFloat(o)-p:X(o)&&o.charAt(1)==="="?parseFloat(o.substr(2))*(o.charAt(0)==="-"?-1:1)+i-p:o==="max"?a(e,r)-p:Math.min(a(e,r),I(o,e)[r]-p)},$=function(){l=E(),L()&&l&&typeof document<"u"&&document.body&&(t=window,y=document.body,c=document.documentElement,A=l.utils.toArray,l.config({autoKillThreshold:7}),O=l.config(),n=1)},m={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(o){l=o,$()},init:function(o,e,r,i,p){n||$();var s=this,b=l.getProperty(o,"scrollSnapType");s.isWin=o===t,s.target=o,s.tween=r,e=D(e,i,o,p),s.vars=e,s.autoKill=!!e.autoKill,s.getX=x(o,"x"),s.getY=x(o,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),S||(S=l.core.globals().ScrollTrigger),l.getProperty(o,"scrollBehavior")==="smooth"&&l.set(o,{scrollBehavior:"auto"}),b&&b!=="none"&&(s.snap=1,s.snapInline=o.style.scrollSnapType,o.style.scrollSnapType="none"),e.x!=null?(s.add(s,"x",s.x,K(e.x,o,"x",s.x,e.offsetX||0),i,p),s._props.push("scrollTo_x")):s.skipX=1,e.y!=null?(s.add(s,"y",s.y,K(e.y,o,"y",s.y,e.offsetY||0),i,p),s._props.push("scrollTo_y")):s.skipY=1},render:function(o,e){for(var r=e._pt,i=e.target,p=e.tween,s=e.autoKill,b=e.xPrev,B=e.yPrev,w=e.isWin,G=e.snap,C=e.snapInline,d,h,P,k,T;r;)r.r(o,r.d),r=r._next;d=w||!e.skipX?e.getX():b,h=w||!e.skipY?e.getY():B,P=h-B,k=d-b,T=O.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),s&&(!e.skipX&&(k>T||k<-T)&&d<a(i,"x")&&(e.skipX=1),!e.skipY&&(P>T||P<-T)&&h<a(i,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(p.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(p,e.vars.onAutoKillParams||[]))),w?t.scrollTo(e.skipX?d:e.x,e.skipY?h:e.y):(e.skipY||(i.scrollTop=e.y),e.skipX||(i.scrollLeft=e.x)),G&&(o===1||o===0)&&(h=i.scrollTop,d=i.scrollLeft,C?i.style.scrollSnapType=C:i.style.removeProperty("scroll-snap-type"),i.scrollTop=h+1,i.scrollLeft=d+1,i.scrollTop=h,i.scrollLeft=d),e.xPrev=e.x,e.yPrev=e.y,S&&S.update()},kill:function(o){var e=o==="scrollTo",r=this._props.indexOf(o);return(e||o==="scrollTo_x")&&(this.skipX=1),(e||o==="scrollTo_y")&&(this.skipY=1),r>-1&&this._props.splice(r,1),!this._props.length}};m.max=a,m.getOffset=I,m.buildGetter=x,E()&&l.registerPlugin(m),f.ScrollToPlugin=m,f.default=m,Object.defineProperty(f,"__esModule",{value:!0})})})(v,v.exports);var lo=v.exports;R.gsap.registerPlugin(io.ScrollTrigger,lo.ScrollToPlugin);function co(){const _=()=>{document.querySelectorAll('a[href^="#"]').forEach(f=>{f.dataset.smoothScrollAdded||(f.addEventListener("click",function(l){l.preventDefault();const n=this.getAttribute("href"),t=document.querySelector(n);if(t){const c=t.getBoundingClientRect().top+window.pageYOffset;R.gsap.to(window,{scrollTo:c,duration:.5,ease:"power2.inOut"})}}),f.dataset.smoothScrollAdded=!0)})};_(),new MutationObserver(()=>{_()}).observe(document.body,{childList:!0,subtree:!0})}function fo(_){let u,f;const l=_[1].default,n=V(l,_,_[0],null);return{c(){u=F("div"),n&&n.c(),this.h()},l(t){u=W(t,"DIV",{class:!0});var c=N(u);n&&n.l(c),c.forEach(M),this.h()},h(){U(u,"class","app svelte-18394qd")},m(t,c){z(t,u,c),n&&n.m(u,null),f=!0},p(t,[c]){n&&n.p&&(!f||c&1)&&H(n,l,t,t[0],f?Q(l,t[0],c,null):J(t[0]),null)},i(t){f||(to(n,t),f=!0)},o(t){so(n,t),f=!1},d(t){t&&M(u),n&&n.d(t)}}}function po(_,u,f){let{$$slots:l={},$$scope:n}=u,t=!1;async function c(){t||(await j(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),t=!0)}return Z(()=>{c(),no(),co()}),_.$$set=y=>{"$$scope"in y&&f(0,n=y.$$scope)},[n,l]}class ho extends oo{constructor(u){super(),eo(this,u,po,fo,q,{})}}export{ho as component};
