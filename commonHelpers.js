import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function g(){i.hidden=!1,u.innerHTML="";const o=new URLSearchParams({key:"43152818-b9b3fa9adc16b8bb91486a66f",q:y.value,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}let n;function p(o){i.hidden=!0,o.hits.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"#fafafb",maxWidth:"432px"}):(n=o.hits.flatMap(({webformatURL:t,largeImageURL:l,tags:a,likes:e,views:r,comments:s,downloads:m})=>`<li class="gallery-item"><a class="gallery-link" href="${l}"> <img class="gallery-image" src="${t}" alt="${a}"/> </a>
              <ul class="gallery-item-info-list"><li class="gallery-item-info">Likes<span class="gallery-item-info-value">${e}</span></li><li class="gallery-item-info">Views<span class="gallery-item-info-value">${r}</span></li><li class="gallery-item-info">Comments<span class="gallery-item-info-value">${s}</span></li><li class="gallery-item-info">Downloads<span class="gallery-item-info-value">${m}</span></li></ul></li>`).join(""),u.insertAdjacentHTML("afterbegin",n),h.refresh())}const c=document.querySelector("form"),y=document.querySelector("input"),u=document.querySelector(".gallery"),h=new d(".gallery-link",{captionsData:"alt",captionsDelay:250}),i=document.querySelector(".loader");i.setAttribute("hidden",!0);c.addEventListener("submit",o=>{if(o.preventDefault(),o.target.elements.keyword.value===""){f.error({message:"Please enter key word",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"#fafafb"});return}g().then(t=>p(t)).catch(t=>console.log(t)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map