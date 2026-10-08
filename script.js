(()=>{
const I='assets/images/',pg=document.body.dataset.page,$=(s,c=document)=>[...c.querySelectorAll(s)];
const nav=[['index','Inicio'],['servicios','Servicios'],['proyectos','Proyectos'],['estudio','El estudio']];
document.body.insertAdjacentHTML('afterbegin',`<div class="bar"></div><div class="pt"><img src="${I}Logo%20blanco.png" alt=""></div>
<header class="nav"><a href="index.html" class="brand"><img src="${I}Logo%20negro.png" alt="Squid Design Studio"><span>SQUID DESIGN STUDIO</span></a>
<nav class="links">${nav.map(n=>`<a href="${n[0]}.html" class="${pg==n[0]?'on':''}">${n[1]}</a>`).join('')}<a href="contacto.html" class="cta">Contacto</a></nav>
<button class="burger" aria-label="Menú"><i></i><i></i></button></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="foot"><div><img src="${I}Logo%20blanco.png" alt=""><span>Squid Design Studio · Branding, web y redes</span></div><div><a href="mailto:squidstudio.contacto@gmail.com">squidstudio.contacto@gmail.com</a><a href="https://www.instagram.com/squid.designstudio/" target="_blank" rel="noopener">@squid.designstudio</a></div>
<div class="legal-row"><a href="terminos.html">Términos y condiciones</a><a href="privacidad.html">Política de privacidad</a><a href="cookies.html">Política de cookies</a><a href="mailto:squidstudio.contacto@gmail.com?subject=Bot%C3%B3n%20de%20arrepentimiento">Botón de arrepentimiento</a><a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor" target="_blank" rel="noopener">Defensa del Consumidor: para reclamos ingresá acá</a></div>
<p class="fine">© 2026 Squid Design Studio. Titular: a quien corresponda · CUIT: a quien corresponda · Argentina. Todos los derechos reservados. Salvo el logo y la identidad de Squid Design Studio, las ilustraciones, íconos, texturas y fotografías pertenecen a sus respectivos titulares, se muestran con fines ilustrativos y no implican vínculo, patrocinio ni cesión de derechos. Las marcas, nombres y sitios mencionados son de sus dueños. El contenido es informativo y no constituye una oferta vinculante: los servicios se contratan por propuesta escrita. Este sitio no usa cookies de seguimiento ni de publicidad. Si sos titular de un contenido y querés que se retire, escribinos.</p></footer>`);
const pt=$('.pt')[0],bar=$('.bar')[0],hd=$('.nav')[0],fl=$('.fl');
setTimeout(()=>pt.style.display='none',650);
addEventListener('pageshow',e=>{if(e.persisted){pt.style.display='none';pt.classList.remove('leave')}});
$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^(https?:|mailto:|#)/.test(h)||a.target)return;
a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();document.body.classList.remove('menu-open');pt.style.display='grid';pt.classList.add('leave');setTimeout(()=>location.href=h,380)})});
$('.burger')[0].onclick=()=>document.body.classList.toggle('menu-open');
let n=0;$('[data-split]').forEach(el=>{el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="w"><span style="--i:${n++}">${w}</span></span>`).join(' ')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08});
$('.rv').forEach((el,i)=>{el.style.setProperty('--d',(i%4)*.1+'s');io.observe(el)});
/* movimiento: una sola lectura de layout y un solo frame por cambio */
let H=1,y=0,mx=0,my=0,tk=0;
const meas=()=>{H=Math.max(document.documentElement.scrollHeight-innerHeight,1)};
const paint=()=>{tk=0;bar.style.transform=`scaleX(${y/H})`;hd.classList.toggle('solid',y>40);
fl.forEach(f=>{const s=+f.dataset.s||20;f.style.transform=`translate3d(${mx*s}px,${my*s-y*s/150}px,0)`})};
const req=()=>{if(!tk){tk=1;requestAnimationFrame(paint)}};
addEventListener('scroll',()=>{y=scrollY;req()},{passive:true});
addEventListener('load',()=>{meas();req()});
addEventListener('resize',()=>{meas();$('.acc-i.open .acc-b').forEach(b=>b.style.maxHeight=b.scrollHeight+'px')});
meas();y=scrollY;paint();
if(matchMedia('(hover:hover)').matches){
const c=document.createElement('div');c.className='cur';document.body.append(c);document.body.classList.add('has-cur');
let cx=0,cy=0,tx=0,ty=0,run=0;
const loop=()=>{cx+=(tx-cx)*.25;cy+=(ty-cy)*.25;c.style.transform=`translate3d(${cx}px,${cy}px,0)`;if(Math.abs(tx-cx)+Math.abs(ty-cy)>.3)requestAnimationFrame(loop);else run=0};
addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;c.style.opacity=1;if(!run){run=1;requestAnimationFrame(loop)}mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;req()},{passive:true});
document.addEventListener('mouseover',e=>c.classList.toggle('big',!!e.target.closest('a,button,.card,.shot')));
$('.tilt').forEach(t=>{t.addEventListener('mousemove',e=>{const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,v=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-v*12}deg) translateY(-6px)`});t.addEventListener('mouseleave',()=>t.style.transform='')});
$('.btn,.shot').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.08}px ${(e.clientY-r.top-r.height/2)*.12}px`});b.addEventListener('mouseleave',()=>b.style.translate='')})}
$('.mq div').forEach(d=>d.innerHTML+=d.innerHTML);
/* acordeón: usa la clase "open" (antes chocaba con la de aparición) */
const acc=$('.acc-i');
$('.acc-h').forEach(h=>{h.setAttribute('aria-expanded','false');h.onclick=()=>{const it=h.parentElement,was=it.classList.contains('open');
acc.forEach(a=>{a.classList.remove('open');a.querySelector('.acc-h').setAttribute('aria-expanded','false');a.querySelector('.acc-b').style.maxHeight='0px'});
if(!was){it.classList.add('open');h.setAttribute('aria-expanded','true');const b=it.querySelector('.acc-b');b.style.maxHeight=b.scrollHeight+'px'}
setTimeout(meas,650)}});
/* aviso de cookies (informativo) */
let ok;try{ok=localStorage.getItem('sq_ck')}catch(e){}
if(!ok){document.body.insertAdjacentHTML('beforeend','<div class="ck" role="dialog" aria-label="Aviso de cookies"><p>Este sitio no usa cookies de seguimiento ni de publicidad, solo elementos técnicos necesarios. <a href="cookies.html">Más info</a></p><button type="button">Entendido</button></div>');
const b=$('.ck')[0];setTimeout(()=>b.classList.add('show'),1800);
b.querySelector('button').onclick=()=>{b.classList.remove('show');try{localStorage.setItem('sq_ck','1')}catch(e){}setTimeout(()=>b.remove(),600)}}
})();
