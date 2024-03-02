import{_ as x,a as c}from"./FormGroup.EqPhevkC.js";import{_ as w}from"./SelectMenu.S_jDhABj.js";import{_ as V}from"./Form.g4fbEw4v.js";import{a as g}from"./Button.Q3r23Tsu.js";import{_ as h}from"./Card.wHmEsosG.js";import{g as b,E as p,o as P,c as U,b as e,w as o,a as d,B as l}from"./entry.LGFhSWLV.js";import"./selectMenu.Oc8JRZaA.js";import"./useFormGroup.FqfFo4El.js";import"./index.rroUARsy.js";import"./_plugin-vue_export-helper.x3n3nnut.js";import"./client-only.NaGq_sFF.js";import"./Avatar.yWjCgbVA.js";import"./index.A8DG4vnN.js";import"./usePopper.Oq_rWcJY.js";import"./micro-task.CpCSdHm6.js";import"./Icon.iA1I3V9Z.js";import"./index.0wqzsba0.js";import"./nuxt-link.s12hDms1.js";import"./index.QHQq_OEs.js";const v={class:"flex flex-col gap-4"},N=d("h2",{class:"text-xl font-semibold"},"Profile",-1),y={class:"flex gap-4 flex-1 w-full"},B={class:"flex gap-4 flex-1 w-full"},C={class:"flex gap-4 flex-1 w-full"},E={class:"flex justify-end"},O={class:"flex gap-4"},j={class:"flex-1"},F=d("h2",{class:"text-xl font-semibold"},"Change Email",-1),S={class:"flex justify-end"},k=d("h2",{class:"text-xl font-semibold"},"Change Password",-1),D={class:"flex justify-end"},ae=b({__name:"profile",setup(G){const s=p({firstName:"John",lastName:"Doe",email:"john.doe@mail.com",dateOfBirth:"",weight:70,height:50,gender:"male"}),r=p({oldPassword:"",newPassword:"",confirmPassword:""});return($,a)=>{const m=x,n=c,_=w,i=V,f=g,u=h;return P(),U("div",v,[e(u,null,{header:o(()=>[N]),footer:o(()=>[d("div",E,[e(f,{variant:"solid",color:"primary",label:"Save"})])]),default:o(()=>[e(i,{state:l(s),class:"flex flex-col gap-4"},{default:o(()=>[d("div",y,[e(n,{label:"First Name",name:"firstName",class:"flex-1"},{default:o(()=>[e(m,{modelValue:l(s).firstName,"onUpdate:modelValue":a[0]||(a[0]=t=>l(s).firstName=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Last Name",name:"lastName",class:"flex-1"},{default:o(()=>[e(m,{modelValue:l(s).lastName,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).lastName=t)},null,8,["modelValue"])]),_:1})]),d("div",B,[e(n,{label:"Date of Birth",name:"dateOfBirth",class:"flex-1"},{default:o(()=>[e(m,{type:"date",modelValue:l(s).dateOfBirth,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).dateOfBirth=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Gender",name:"gender",class:"flex-1"},{default:o(()=>[e(_,{modelValue:l(s).gender,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).gender=t),options:["male","female"]},null,8,["modelValue"])]),_:1})]),d("div",C,[e(n,{label:"Weight",name:"weight",class:"flex-1"},{default:o(()=>[e(m,{type:"number",modelValue:l(s).weight,"onUpdate:modelValue":a[4]||(a[4]=t=>l(s).weight=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Height",name:"height",class:"flex-1"},{default:o(()=>[e(m,{type:"number",modelValue:l(s).height,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).height=t)},null,8,["modelValue"])]),_:1})])]),_:1},8,["state"])]),_:1}),d("div",O,[d("div",j,[e(u,{class:""},{header:o(()=>[F]),footer:o(()=>[d("div",S,[e(f,{variant:"solid",color:"primary",label:"Change Email"})])]),default:o(()=>[e(i,{state:l(s),class:"flex flex-col gap-4"},{default:o(()=>[e(n,{label:"Email",name:"email"},{default:o(()=>[e(m,{modelValue:l(s).email,"onUpdate:modelValue":a[6]||(a[6]=t=>l(s).email=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["state"])]),_:1})]),e(u,{class:"flex-1"},{header:o(()=>[k]),footer:o(()=>[d("div",D,[e(f,{variant:"solid",color:"primary",label:"Change Email"})])]),default:o(()=>[e(i,{state:l(r),class:"flex flex-col gap-4"},{default:o(()=>[e(n,{label:"Old Password",name:"oldPassword"},{default:o(()=>[e(m,{type:"password",modelValue:l(r).oldPassword,"onUpdate:modelValue":a[7]||(a[7]=t=>l(r).oldPassword=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"New Password",name:"newPassword"},{default:o(()=>[e(m,{type:"password",modelValue:l(r).newPassword,"onUpdate:modelValue":a[8]||(a[8]=t=>l(r).newPassword=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"Confirm Password",name:"confirmPassword"},{default:o(()=>[e(m,{type:"password",modelValue:l(r).confirmPassword,"onUpdate:modelValue":a[9]||(a[9]=t=>l(r).confirmPassword=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["state"])]),_:1})])])}}});export{ae as default};