(()=>{"use strict";const e=document.querySelector(".body"),t=e.querySelector(".form"),r=e.querySelector(".modal-title"),o=e.querySelector(".first-name"),n=e.querySelector("#templateSelect");t.addEventListener("submit",(o=>(o=>{o.preventDefault(),null!==e.querySelector(".pre")&&e.removeChild(e.querySelector(".pre"));const n=(e=>{const{elements:t}=e,r={};return Array.from(t).filter((e=>!!e.name)).map((e=>{const{name:t,value:o}=e;r[t]=o})),r})(t);fetch("./server.js",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((()=>{$(".modal").modal("show"),r.textContent="Данные получены"})).catch((e=>{r.textContent=`Возникла ошибка: ${e}`}));const l=document.createElement("pre");l.innerHTML=JSON.stringify(n,null,2),l.classList.add("pre"),e.append(l)})(o))),(e=>{for(let e=1;e<=5;e++){const r=n.content.cloneNode(!0),l=r.querySelector(".form-label"),c=r.querySelector(".form-control");l.textContent=`${e}. Выберите число`,l.setAttribute("for",`select${e}`),c.name=`select${e}`,c.id=`select${e}`,t.insertBefore(r,o)}})()})();