import{j as a}from"./index-jAJE4B7-.js";function p({title:n,subtitle:d,theme:o,onClick:u,difficulty:i}){const l=(t,e)=>{const r=document.createElement("span");return r.innerHTML=`${t} `,r.classList.add("card-subtitle-word"),r.style.transitionDelay=`${e*40}ms`,r};function m(){const t=[],e=(s,c)=>t.push(l(s,c));return(s=>s.split(" ").map(e))(d),t}function h(){const t=[],e=(s,c)=>t.push(l(s,c));return(s=>s.split(" ").map(e))("Difficulty: "+i),t}return a.jsx("div",{className:"card "+o,onClick:u,children:a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:n}),a.jsx("h4",{className:"card-subtitle",children:m().map((t,e)=>a.jsx("label",{className:"card-subtitle-word",style:{transitionDelay:`${e*40}ms`},children:t.innerHTML}))}),i&&a.jsx("h4",{className:"card-subtitle",children:h().map((t,e)=>a.jsx("label",{className:"card-subtitle-word",style:{transitionDelay:`${e*40}ms`},children:t.innerHTML}))})]})})}export{p as C};