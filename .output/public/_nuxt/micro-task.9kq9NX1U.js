import{H as s}from"./usePopper.bNAVlg5L.js";import{g as a}from"./entry.tkMfAKYY.js";var d=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(d||{});let l=a({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:o,...i}=e,n={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return s({ourProps:n,theirProps:i,slot:{},attrs:r,slots:t,name:"Hidden"})}}});function f(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}export{d as a,l as f,f as t};