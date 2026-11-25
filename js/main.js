(function(){
const C=SITE_CONFIG,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=m=>`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(m||C.whatsappMsg)}`;
const enc=encodeURIComponent(C.endereco);
const maps=C.mapsLink||`https://www.google.com/maps/search/?api=1&query=${enc}`;
$$('.js-wa').forEach(a=>{a.href=wa(a.dataset.msg);a.target='_blank';a.rel='noopener'});
$$('.js-ig').forEach(a=>a.href=C.instagram);
$$('.js-maps').forEach(a=>a.href=maps);
$('#map').src=`https://www.google.com/maps?q=${enc}&output=embed`;
$('#yr').textContent=new Date().getFullYear();
function markMissing(img){const f=()=>img.closest('.ph').classList.add('missing');img.addEventListener('error',f);if(img.complete&&!img.naturalWidth)f()}
$$('.ph img').forEach(markMissing);
const hd=$('#header'),bg=$('.burger'),nav=$('#nav');
const onScroll=()=>hd.classList.toggle('solid',scrollY>60||nav.classList.contains('open'));
addEventListener('scroll',onScroll,{passive:true});onScroll();
const toggle=o=>{nav.classList.toggle('open',o);bg.classList.toggle('on',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');document.body.style.overflow=o?'hidden':'';onScroll()};
bg.onclick=()=>toggle(!nav.classList.contains('open'));
$$('a',nav).forEach(a=>a.addEventListener('click',()=>toggle(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false)});
const tabs=$('#tabs'),menu=$('#menu');let cat=CATEGORIES[0];
function card(p){const el=document.createElement('article');el.className='card';
 el.innerHTML='<figure class="ph"><img loading="lazy"></figure><div class="card-b"><h3></h3><p></p><span class="price"></span><a class="btn btn-gold" target="_blank" rel="noopener">Pedir</a></div>';
 const im=$('img',el);im.alt=p.nome;im.src=p.imagem||'';
 $('h3',el).textContent=p.nome;$('p',el).textContent=p.descricao||'';
 const pr=$('.price',el);p.preco?pr.textContent=p.preco:pr.remove();
 $('a',el).href=wa(`Olá! Gostaria de pedir: ${p.nome}`);markMissing(im);return el}
function renderMenu(){menu.innerHTML='';
 $$('.tab',tabs).forEach(t=>t.setAttribute('aria-selected',t.dataset.c===cat));
 const list=PRODUCTS.filter(p=>p.categoria===cat);
 if(!PRODUCTS.length){menu.innerHTML='<p class="empty-note">Cardápio em preparação: adicione os produtos reais em js/config.js. Os espaços abaixo mostram a estrutura dos cards.</p>';
  for(let i=0;i<3;i++){const el=document.createElement('article');el.className='card empty';el.innerHTML='<figure class="ph missing"><img alt="" src=""></figure><div class="card-b"><h3>Nome do produto</h3><p>Descrição do produto.</p></div>';menu.append(el)}return}
 if(!list.length){menu.innerHTML='<p class="empty-note">Nenhum item cadastrado nesta categoria ainda.</p>';return}
 list.forEach(p=>menu.append(card(p)))}
CATEGORIES.forEach(c=>{const b=document.createElement('button');b.className='tab';b.setAttribute('role','tab');b.dataset.c=c;b.textContent=c;b.onclick=()=>{cat=c;renderMenu()};tabs.append(b)});
renderMenu();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
const lb=$('#lb'),lbi=$('img',lb);let items=[],idx=0;
const shots=()=>$$('#gallery .ph:not(.missing) img');
function show(i){items=shots();if(!items.length)return;idx=(i+items.length)%items.length;lbi.src=items[idx].src;lbi.alt=items[idx].alt}
function open(i){show(i);lb.hidden=false;document.body.style.overflow='hidden';$('.lb-x').focus()}
function close(){lb.hidden=true;document.body.style.overflow=''}
$$('#gallery .ph').forEach(f=>{f.tabIndex=0;f.setAttribute('role','button');const go=()=>{const i=shots().indexOf($('img',f));if(i>-1)open(i)};f.onclick=go;f.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}});
$('.lb-x').onclick=close;$('.lb-p').onclick=()=>show(idx-1);$('.lb-n').onclick=()=>show(idx+1);
lb.onclick=e=>{if(e.target===lb)close()};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
})();
