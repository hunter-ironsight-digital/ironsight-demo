// ── SCROLL REVEAL ──
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.rev:not(.vis)').forEach(el=>obs.observe(el));
}
initReveal();

// ── STAT COUNTERS ──
const statObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target,target=parseFloat(el.dataset.target),suffix=el.dataset.suffix||'',dec=parseInt(el.dataset.dec||0),dur=1800,start=performance.now();
    const run=now=>{
      const p=Math.min((now-start)/dur,1),ease=1-Math.pow(1-p,3),val=target*ease;
      el.textContent=(dec?val.toFixed(dec):Math.floor(val).toLocaleString())+suffix;
      if(p<1)requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
    statObs.unobserve(el);
  });
},{threshold:0.5});
document.querySelectorAll('[data-target]').forEach(el=>statObs.observe(el));

// ── PHONE CLOCK ──
function updateClock(){
  const now=new Date(),h=now.getHours()%12||12,m=String(now.getMinutes()).padStart(2,'0'),ampm=now.getHours()>=12?'PM':'AM';
  const el=document.getElementById('phone-time');
  if(el)el.textContent=h+':'+m+' '+ampm;
}
updateClock();setInterval(updateClock,30000);

// ── FAQ ──
function toggleFaq(btn){
  const ans=btn.nextElementSibling,isOpen=ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a=>{a.classList.remove('open');a.previousElementSibling.classList.remove('open');a.previousElementSibling.setAttribute('aria-expanded','false');});
  if(!isOpen){ans.classList.add('open');btn.classList.add('open');btn.setAttribute('aria-expanded','true');}
}

// ── SMS DEMO ──
function triggerSmsDemo(){
  const name=document.getElementById('d-fname').value.trim()||'there';
  const service=document.getElementById('d-service').value||'roofing inspection';
  const thread=document.getElementById('sms-thread');
  const typing=document.getElementById('sms-typing');

  thread.innerHTML='';

  const out=document.createElement('div');
  out.className='sms-msg sms-out';
  out.textContent='Hi, I need a '+service+'. Can someone come take a look?';
  thread.appendChild(out);

  typing.style.display='flex';

  setTimeout(()=>{
    typing.style.display='none';
    const t=document.createElement('div');t.className='sms-time';
    const now=new Date(),h=now.getHours()%12||12,m=String(now.getMinutes()).padStart(2,'0'),ampm=now.getHours()>=12?'PM':'AM';
    t.textContent='Delivered '+h+':'+m+' '+ampm+' — Instant';
    thread.appendChild(t);
    const msg1=document.createElement('div');
    msg1.className='sms-msg sms-in';
    msg1.textContent='Hi '+name+'! This is Ironclad Roofing — we just got your request for a '+service+'. We\'ll have someone reach out within the hour to confirm. Thanks for trusting us with your home.';
    thread.appendChild(msg1);
    thread.scrollTop=thread.scrollHeight;

    setTimeout(()=>{
      typing.style.display='flex';
      setTimeout(()=>{
        typing.style.display='none';
        const msg2=document.createElement('div');
        msg2.className='sms-msg sms-in';
        msg2.textContent='In the meantime — here\'s a quick look at what to expect from your free inspection: ironcladroofing.com/services';
        thread.appendChild(msg2);
        thread.scrollTop=thread.scrollHeight;
      },1800);
    },2500);
  },1600);
}

// ── CONTACT FORM ──
function handleContactSubmit(){
  const fname=document.getElementById('c-fname').value;
  const phone=document.getElementById('c-phone').value;
  if(!fname||!phone){alert('Please enter your name and phone number.');return;}
  // CUSTOMIZE: Replace with Formspree, webhook, or CRM POST
  // fetch('https://formspree.io/f/YOUR_ID',{method:'POST',body:new FormData(...)})
  alert('Got it, '+fname+'. We\'ll be in touch within the hour.');
}
