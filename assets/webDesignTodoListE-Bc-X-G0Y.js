import"./modulepreload-polyfill-B5Qt9EMX.js";const c=document.getElementById("addBtn"),i=document.getElementById("addInput"),d=document.querySelector(".list");document.addEventListener("DOMContentLoaded",()=>{let t=JSON.parse(localStorage.getItem("items"));t!=null&&t.forEach(l=>{let e=document.createElement("div");e.classList.add("item"),e.id=d.childElementCount;let n=document.createElement("li");n.textContent=l,e.appendChild(n);let a=document.createElement("button");a.textContent="Delete",a.addEventListener("click",m),e.appendChild(a),d.appendChild(e)})});c.addEventListener("click",()=>{if(i.value==="")return;let t=document.createElement("div");t.classList.add("item"),t.id=d.childElementCount;let l=document.createElement("li");l.textContent=i.value,t.appendChild(l);let e=document.createElement("button");e.textContent="Delete",e.addEventListener("click",m),t.appendChild(e),d.appendChild(t);let n=JSON.parse(localStorage.getItem("items"));n==null&&(n=[]),n.push(i.value),localStorage.setItem("items",JSON.stringify(n)),i.value=""});function m(t){const l=t.target.parentElement,e=l.id;d.removeChild(l);let n=JSON.parse(localStorage.getItem("items"));n.splice(e,1),localStorage.setItem("items",JSON.stringify(n))}
