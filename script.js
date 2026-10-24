const modal=document.getElementById('modal');
document.getElementById('surpriseBtn').addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
document.getElementById('close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('wishBtn').addEventListener('click',()=>{
 document.getElementById('wishReveal').textContent='Tumhari saari achhi wishes poori hon, meri pyaari Maahi! Ameen 🤲💗';
 hearts(24);
});
document.getElementById('hugBtn').addEventListener('click',()=>{hearts(40);closeModal();});
function hearts(n){const bits=['💗','♡','🌸','✨','🎀','💕'];for(let i=0;i<n;i++){const s=document.createElement('span');s.className='floaty';s.textContent=bits[Math.floor(Math.random()*bits.length)];s.style.left=(4+Math.random()*92)+'vw';s.style.top=(55+Math.random()*38)+'vh';s.style.animationDelay=(Math.random()*.5)+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),2400);}}
