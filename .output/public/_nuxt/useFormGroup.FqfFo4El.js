import{u as h}from"./index.rroUARsy.js";import{N as z,E as B,i as c}from"./entry.LGFhSWLV.js";const x=(a,v)=>{const t=z("form-events",void 0),e=z("form-group",void 0),F=z("form-inputs",void 0);e&&(a!=null&&a.id&&(e.inputId.value=a==null?void 0:a.id),F&&(F.value[e.name.value]=e.inputId.value));const I=B(!1);function m(l,d){t&&t.emit({type:l,path:d})}function n(){m("blur",e==null?void 0:e.name.value),I.value=!0}function i(){m("change",e==null?void 0:e.name.value)}const b=h(()=>{(I.value||e!=null&&e.eagerValidation.value)&&m("input",e==null?void 0:e.name.value)},300);return{inputId:c(()=>(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value)),name:c(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:c(()=>{var d;const l=v.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((d=v==null?void 0:v.default)==null?void 0:d.size)}),color:c(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:n,emitFormInput:b,emitFormChange:i}};export{x as u};