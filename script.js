(()=>{
const I='assets/images/',pg=document.body.dataset.page,$=(s,c=document)=>[...c.querySelectorAll(s)];
const nav=[['index','Inicio'],['servicios','Servicios'],['proyectos','Proyectos'],['estudio','El estudio']];
document.body.insertAdjacentHTML('afterbegin',`<div class="bar"></div><div class="pt"><img src="${I}Logo%20blanco.png" alt=""></div>
<header class="nav"><a href="index.html" class="brand"><img src="${I}Logo%20negro.png" alt="Squid Design Studio"><span>SQUID DESIGN STUDIO</span></a>
<nav class="links">${nav.map(n=>`<a href="${n[0]}.html" class="${pg==n[0]?'on':''}">${n[1]}</a>`).join('')}<a href="contacto.html" class="cta">Contacto</a></nav>
<button class="burger" aria-label="Menú"><i></i><i></i></button></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="foot"><div><img src="${I}Logo%20blanco.png" alt=""><span>Squid Design Studio · Branding, web y redes<br>© 2026 Todos los derechos reservados.</span></div><div><a href="mailto:squidstudio.contacto@gmail.com">squidstudio.contacto@gmail.com</a><a href="https://www.instagram.com/squid.designstudio/" target="_blank" rel="noopener">@squid.designstudio</a></div></footer>`);
const pt=$('.pt')[0],bar=$('.bar')[0],hd=$('.nav')[0];
setTimeout(()=>pt.style.display='none',650);
addEventListener('pageshow',e=>{if(e.persisted){pt.style.display='none';pt.classList.remove('leave')}});
$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^(https?:|mailto:|#)/.test(h)||a.target)return;
a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();document.body.classList.remove('menu-open');pt.style.display='grid';pt.classList.add('leave');setTimeout(()=>location.href=h,380)})});
$('.burger')[0].onclick=()=>document.body.classList.toggle('menu-open');
let i=0;$('[data-split]').forEach(el=>{el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="w"><span style="--i:${i++}">${w}</span></span>`).join(' ')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
$('.rv').forEach((el,i)=>{el.style.setProperty('--d',(i%4)*.1+'s');io.observe(el)});
const fl=$('.fl');let sy=0;
const tick=()=>{const y=scrollY;bar.style.transform=`scaleX(${y/(document.body.scrollHeight-innerHeight||1)})`;hd.classList.toggle('solid',y>40);
fl.forEach(f=>{const s=+f.dataset.s||20;f.style.transform=`translate(${(f._mx||0)*s}px,${(f._my||0)*s-y*s/150}px)`})};
addEventListener('scroll',tick,{passive:true});tick();
if(matchMedia('(hover:hover)').matches){
addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;fl.forEach(f=>{f._mx=x;f._my=y});tick()});
const c=document.createElement('div');c.className='cur';document.body.append(c);document.body.classList.add('has-cur');
let cx=0,cy=0,tx=0,ty=0;addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});
(function l(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;c.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(l)})();
document.addEventListener('mouseover',e=>c.classList.toggle('big',!!e.target.closest('a,button,.card,.shot')));
$('.tilt').forEach(t=>{t.addEventListener('mousemove',e=>{const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-6px)`});t.addEventListener('mouseleave',()=>t.style.transform='')});
$('.btn,.shot').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.08}px ${(e.clientY-r.top-r.height/2)*.12}px`});b.addEventListener('mouseleave',()=>b.style.translate='')});}
$('.mq div').forEach(d=>d.innerHTML+=d.innerHTML);
$('.acc-h').forEach(h=>h.onclick=()=>{const it=h.parentElement,open=it.classList.contains('on');
$('.acc-i').forEach(o=>{o.classList.remove('on');o.querySelector('.acc-b').style.maxHeight=null});
if(!open){it.classList.add('on');const b=it.querySelector('.acc-b');b.style.maxHeight=b.scrollHeight+'px'}});
})();
