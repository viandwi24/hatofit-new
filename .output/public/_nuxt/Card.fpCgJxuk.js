import{m as g,f as n,g as l,h as p,i as c,j as f,k as b,o as s,l as m,w as y,c as t,n as r,s as o,q as u,a as k,r as v,a7 as h}from"./entry.Dw_QoeK4.js";import{u as $}from"./selectMenu.nDRAbi2i.js";import{_ as C}from"./_plugin-vue_export-helper.x3n3nnut.js";const w={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},B=g(n.ui.strategy,n.ui.card,w),S=l({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:d}=$("card",p(a,"ui"),B),i=c(()=>f(b(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:d,cardClass:i}}});function j(a,e,d,i,A,N){return s(),m(h(a.$attrs.onSubmit?"form":a.as),v({class:a.cardClass},a.attrs),{default:y(()=>[a.$slots.header?(s(),t("div",{key:0,class:r([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[o(a.$slots,"header")],2)):u("",!0),k("div",{class:r([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[o(a.$slots,"default")],2),a.$slots.footer?(s(),t("div",{key:1,class:r([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[o(a.$slots,"footer")],2)):u("",!0)]),_:3},16,["class"])}const z=C(S,[["render",j]]);export{z as _};
