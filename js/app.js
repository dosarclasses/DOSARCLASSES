// DOSAR Classes Homepage JS

const counters=document.querySelectorAll('[data-count]');
counters.forEach(counter=>{
  const target=+counter.dataset.count;
  let count=0;
  const step=Math.max(1,Math.ceil(target/120));
  const timer=setInterval(()=>{
    count+=step;
    if(count>=target){
      count=target;
      clearInterval(timer);
    }
    counter.textContent=count+"+";
  },15);
});

const nav=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  if(!nav) return;
  if(window.scrollY>80){
    nav.style.background='rgba(11,31,58,.95)';
    nav.style.boxShadow='0 10px 25px rgba(0,0,0,.18)';
  }else{
    nav.style.background='rgba(11,31,58,.78)';
    nav.style.boxShadow='none';
  }
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.2});

document.querySelectorAll('.stat-card,.question-card,.subject-card').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(40px)';
  el.style.transition='all .8s ease';
  observer.observe(el);
});
