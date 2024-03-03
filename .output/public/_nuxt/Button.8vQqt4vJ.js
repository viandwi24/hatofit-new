import M from"./Icon.Y-QXVqpL.js";import{g as j,ab as R,i as l,o as d,l as u,c as q,n as m,w as I,s as f,a5 as L,a6 as N,r as p,a8 as G,a as H,P as Q,ar as V,N as _,J as D,M as J,a0 as T,m as E,f as $,h as F,j as K,k as S,q as C,t as W}from"./entry.s6_xT4rN.js";import{_ as z}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as X}from"./nuxt-link.C3Y8E_X8.js";import{u as Y}from"./selectMenu.9bJKhH2E.js";const k={to:{type:[String,Object],default:void 0},href:{type:[String,Object],default:void 0},target:{type:String,default:void 0},rel:{type:String,default:void 0},noRel:{type:Boolean,default:void 0},prefetch:{type:Boolean,default:void 0},noPrefetch:{type:Boolean,default:void 0},activeClass:{type:String,default:void 0},exactActiveClass:{type:String,default:void 0},prefetchedClass:{type:String,default:void 0},replace:{type:Boolean,default:void 0},ariaCurrentValue:{type:String,default:void 0},external:{type:Boolean,default:void 0}},Z={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},ee=e=>Object.keys(k).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),ve=e=>[...Object.keys(k),...Object.keys(Z)].reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),ae=j({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=R();return{dynamic:l(()=>{var t,i;return e.dynamic||((i=(t=n.ui)==null?void 0:t.icons)==null?void 0:i.dynamic)})}}});function ie(e,n,a,t,i,r){const o=M;return e.dynamic?(d(),u(o,{key:0,name:e.name},null,8,["name"])):(d(),q("span",{key:1,class:m(e.name)},null,2))}const U=z(ae,[["render",ie]]),te=j({inheritAttrs:!1,props:{...k,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:i,isExactActive:r}){return e.exactQuery&&!V(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&r||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),ne=["href","aria-disabled","role","rel","target","onClick"];function le(e,n,a,t,i,r){const o=X;return e.to?(d(),u(o,p({key:1},e.$props,{custom:""}),{default:I(({route:c,href:b,target:h,rel:x,navigate:w,isActive:v,isExactActive:y,isExternal:B})=>[H("a",p(e.$attrs,{href:e.disabled?void 0:b,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:x,target:h,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(c,e._.provides[Q]||e.$route,{isActive:v,isExactActive:y}),onClick:g=>!B&&w(g)}),[f(e.$slots,"default",L(N({isActive:e.active!==void 0?e.active:e.exact?y:v})))],16,ne)]),_:3},16)):(d(),u(G(e.as),p({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:I(()=>[f(e.$slots,"default",L(N({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const A=z(te,[["render",le]]);function re({ui:e,props:n}){const a=T();let t=a.parent,i;for(;t&&!i;){if(t.type.name==="ButtonGroup"){i=_(`group-${t.uid}`);break}t=t.parent}const r=l(()=>i==null?void 0:i.value.children.indexOf(a));return D(()=>{i==null||i.value.register(a)}),J(()=>{i==null||i.value.unregister(a)}),{size:l(()=>(i==null?void 0:i.value.size)||n.size),rounded:l(()=>!i||r.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:r.value===0?i.value.rounded.start:r.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const oe={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},s=E($.ui.strategy,$.ui.button,oe),se=j({components:{UIcon:U,ULink:A},inheritAttrs:!1,props:{...k,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...$.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:t}=Y("button",F(e,"ui"),s),{size:i,rounded:r}=re({ui:a,props:e}),o=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),b=l(()=>e.square||!n.default&&!e.label),h=l(()=>{var O,P;const g=((P=(O=a.value.color)==null?void 0:O[e.color])==null?void 0:P[e.variant])||a.value.variant[e.variant];return K(S(a.value.base,a.value.font,r.value,a.value.size[i.value],a.value.gap[i.value],e.padded&&a.value[b.value?"square":"padding"][i.value],g==null?void 0:g.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),x=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),w=l(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),v=l(()=>S(a.value.icon.base,a.value.icon.size[i.value],e.loading&&a.value.icon.loading)),y=l(()=>S(a.value.icon.base,a.value.icon.size[i.value],e.loading&&!o.value&&a.value.icon.loading)),B=l(()=>ee(e));return{ui:a,attrs:t,isLeading:o,isTrailing:c,isSquare:b,buttonClass:h,leadingIconName:x,trailingIconName:w,leadingIconClass:v,trailingIconClass:y,linkProps:B}}});function de(e,n,a,t,i,r){const o=U,c=A;return d(),u(c,p({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:I(()=>[f(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(d(),u(o,{key:0,name:e.leadingIconName,class:m(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)]),f(e.$slots,"default",{},()=>[e.label?(d(),q("span",{key:0,class:m([e.truncate?e.ui.truncate:""])},W(e.label),3)):C("",!0)]),f(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(d(),u(o,{key:0,name:e.trailingIconName,class:m(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)])]),_:3},16,["type","disabled","class"])}const ye=z(se,[["render",de]]);export{U as _,ye as a,A as b,ee as c,ve as g,re as u};
