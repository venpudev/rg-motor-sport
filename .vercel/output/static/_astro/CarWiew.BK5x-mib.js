import{j as d}from"./jsx-runtime.BqEXxvvU.js";import{r as j}from"./index.DHQ29l5n.js";import{h as y,i as C,j as A,S,N as V,A as O,f as v}from"./autoplay.B1A4r824.js";/* empty css                      */import"./_id_.fe7d4371.l0sNRNKZ.js";function T(m){let{swiper:e,extendParams:f,on:n}=m;f({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let u=!1,x=!1;e.thumbs={swiper:null};function g(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,r=t.clickedSlide;if(r&&r.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let a;t.params.loop?a=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=s,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function h(){const{thumbs:t}=e.params;if(u)return!1;u=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(C(t.swiper)){const r=Object.assign({},t.swiper);Object.assign(r,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(r),x=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function c(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const r=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let a=1;const o=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),s.slides.forEach(i=>i.classList.remove(o)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let i=0;i<a;i+=1)A(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+i}"]`).forEach(l=>{l.classList.add(o)});else for(let i=0;i<a;i+=1)s.slides[e.realIndex+i]&&s.slides[e.realIndex+i].classList.add(o);const p=e.params.thumbs.autoScrollOffset,w=p&&!s.params.loop;if(e.realIndex!==s.realIndex||w){const i=s.activeIndex;let l,b;if(s.params.loop){const P=s.slides.find(I=>I.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);l=s.slides.indexOf(P),b=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,b=l>e.previousIndex?"next":"prev";w&&(l+=b==="next"?p:-1*p),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(l)<0&&(s.params.centeredSlides?l>i?l=l-Math.floor(r/2)+1:l=l+Math.floor(r/2)-1:l>i&&s.params.slidesPerGroup,s.slideTo(l,t?0:void 0))}}n("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const s=y(),r=()=>{const o=typeof t.swiper=="string"?s.querySelector(t.swiper):t.swiper;if(o&&o.swiper)t.swiper=o.swiper,h(),c(!0);else if(o){const p=`${e.params.eventsPrefix}init`,w=i=>{t.swiper=i.detail[0],o.removeEventListener(p,w),h(),c(!0),t.swiper.update(),e.update()};o.addEventListener(p,w)}return o},a=()=>{if(e.destroyed)return;r()||requestAnimationFrame(a)};requestAnimationFrame(a)}else h(),c(!0)}),n("slideChange update resize observerUpdate",()=>{c()}),n("setTransition",(t,s)=>{const r=e.thumbs.swiper;!r||r.destroyed||r.setTransition(s)}),n("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||x&&t.destroy()}),Object.assign(e.thumbs,{init:h,update:c})}const M=({images:m})=>{const[e,f]=j.useState(null);return d.jsxs("div",{className:"w-full max-w-5xl mx-auto",children:[d.jsx(S,{modules:[V,O,T],spaceBetween:2,slidesPerView:1,pagination:{clickable:!0},thumbs:{swiper:e},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:1,spaceBetween:30}},children:m.length>0?m.map((n,u)=>d.jsx(v,{children:d.jsx("img",{src:n.imageUrl,alt:n.alt||`Imagen ${u+1}`,className:"w-full h-56 sm:h-50 md:h-[550px] shadow-md hover:shadow-lg object-cover cursor-pointer rounded-lg"})},n.imageUrl)):d.jsx("p",{className:"text-center text-gray-500",children:"No hay imágenes disponibles."})}),d.jsx(S,{modules:[T],onSwiper:f,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,className:"mt-4",breakpoints:{0:{slidesPerView:4,spaceBetween:10},640:{slidesPerView:4,spaceBetween:10},768:{slidesPerView:4,spaceBetween:20}},children:m.map((n,u)=>d.jsx(v,{children:d.jsx("img",{src:n.imageUrl,alt:n.alt||`Thumbnail ${u+1}`,className:"w-full h-20 md:h-36 object-cover cursor-pointer rounded-lg"})},n.imageUrl))})]})};export{M as CarWiew};
