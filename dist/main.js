(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let r;const c=e=>e<10?"0"+e:e;r=setInterval((()=>{let e=(()=>{let e=(new Date("10 january 2023").getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})();t.textContent=c(e.hours),o.textContent=c(e.minutes),n.textContent=c(e.seconds),e.timeRemaining>0||(clearInterval(r),t.textContent="00",o.textContent="00",n.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu");console.log("fkjhgjf");const o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.closest(".menu")||!e.target.closest("menu")||e.target.classList.contains("close-btn")||e.target.matches("ul>li>a"))&&o()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=document.querySelector(".popup-content");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}));let n,r=0;const c=()=>{r++,n=requestAnimationFrame(c),r<800&&(o.style.left=r+"px")};window.addEventListener("resize",(()=>{screen.width<768&&(console.log("проверка"),cancelAnimationFrame(n)),c()}))})(),(()=>{const e=document.querySelectorAll("ul > li > a"),t=document.querySelector("main > a");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),t.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelectorAll(".calc-block input[type=text]"),t=document.querySelectorAll("form"),o=document.querySelectorAll("form input[type=text]"),n=document.querySelectorAll("form input[type=email]"),r=document.querySelectorAll("form input[type=tel]"),c=document.querySelector(".mess");e.forEach((e=>{e.addEventListener("input",(t=>{e.value=e.value.replace(/[^\d]/g,"")}))})),t.forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-я\s-]/gi,"")}))})),c.addEventListener("input",(()=>{c.value=c.value.replace(/[^а-я\s-]/gi,"")})),r.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^0-9\-()]/g,"")}))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\w@\-_.!~*']/gi,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(o=>{if(o.target.closest(".service-header-tab")){const n=o.target.closest(".service-header-tab");t.forEach(((t,o)=>{t===n?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const n=document.querySelector(".portfolio-dots");let r,c=0;t.forEach((()=>{const e=document.createElement("li");e.classList.add("dot"),n.append(e)})),o=document.querySelectorAll(".dot");const l=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,c,"portfolio-item-active"),l(o,c,"dot-active"),c++,c>=t.length&&(c=0),a(t,c,"portfolio-item-active"),a(o,c,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,c,"portfolio-item-active"),l(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),a(t,c,"portfolio-item-active"),a(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})()})();