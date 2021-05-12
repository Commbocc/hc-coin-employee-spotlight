import{r as e,o as a,c as t,a as r,b as o,F as s,d as n,w as i,e as l,t as c,f as d,g as u,h as m,i as p}from"./vendor.4f36ea95.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,s)=>{const n=new URL(e,r);if(self[a].moduleMap[n])return t(self[a].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${a}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),o(l)},onload(){t(self[a].moduleMap[n]),o(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("assets/");const g={setup:()=>({})};g.render=function(r,o,s,n,i,l){const c=e("router-view");return a(),t(c)};var y=r.create({baseURL:"https://api.airtable.com/v0/appst1zyHKSZ92roW",headers:{Authorization:"Bearer key1XrFuYhG1GKHvu"}});const f=o({error:"",loading:!1,data:[]});const h=o({error:"",loading:!1,data:{}});const b={setup:()=>(async function(){f.loading=!0;try{const{data:e}=await y.get("/categories",{params:{view:"Grid view"}});f.data=e.records}catch(e){f.error=e.message}finally{f.loading=!1}}(),{categories:f})},v={key:0,class:"text-center my-5"},w=d("div",{class:"spinner-border",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1),L={key:1,class:"list-group"},k={key:2,class:"alert alert-warning",role:"alert"};b.render=function(r,o,d,u,m,p){const g=e("router-link");return u.categories.loading?(a(),t("div",v,[w])):u.categories.data.length?(a(),t("div",L,[(a(!0),t(s,null,n(u.categories.data,(({id:e,fields:r})=>(a(),t(g,{key:e,to:{name:"Category",params:{categoryId:e}},class:"list-group-item list-group-item-action"},{default:i((()=>[l(c(r.Name),1)])),_:2},1032,["to"])))),128))])):(a(),t("div",k," No categories to show at this time. "))};const R=o({error:"",loading:!1,data:[]});const F={props:{categoryId:String},setup:e=>(async function(e){h.loading=!0;try{const{data:a}=await y.get(`/categories/${e}`);h.data=a}catch(a){h.error=a.message}finally{h.loading=!1}}(e.categoryId),async function(e){R.loading=!0;try{const{data:a}=await y.get("/nominees",{params:{filterByFormula:`ARRAYJOIN({CategoryID}) = '${e}'`}});R.data=a.records}catch(a){R.error=a.message}finally{R.loading=!1}}(e.categoryId),{category:h,nominees:R})},I={key:0,class:"text-center my-5"},M=d("div",{class:"spinner-border",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1),N={key:1},U={"aria-label":"breadcrumb"},C={class:"breadcrumb"},$={class:"breadcrumb-item"},_=l("Categories"),j={class:"breadcrumb-item active","aria-current":"page"},D={class:"table"},H=d("thead",null,[d("tr",null,[d("th",{scope:"col"},"First"),d("th",{scope:"col"},"Last"),d("th",{scope:"col"},"Department")])],-1);F.render=function(r,o,l,u,m,p){const g=e("router-link");return u.category.loading?(a(),t("div",I,[M])):(a(),t("div",N,[d("nav",U,[d("ol",C,[d("li",$,[d(g,{to:"/"},{default:i((()=>[_])),_:1})]),d("li",j,c(u.category.data.fields.Name),1)])]),d("h1",null,c(u.category.data.fields.Name),1),d("p",{innerHTML:u.category.data.fields.Description},null,8,["innerHTML"]),d("table",D,[H,d("tbody",null,[(a(!0),t(s,null,n(u.nominees.data,(({id:e,fields:r})=>(a(),t("tr",{key:e},[d("td",null,c(r.FirstName),1),d("td",null,c(r.LastName),1),d("td",null,c(r.Department),1)])))),128))])])]))};const O=[{path:"/",name:"Categories",component:b},{path:"/:categoryId",name:"Category",component:F,props:!0}],x=u({history:m(),routes:O});p(g).use(x).mount("#app");
