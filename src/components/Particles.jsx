import React, { useEffect, useRef } from 'react';

export default function Particles(){
  const ref = useRef();
  useEffect(()=>{
    const c = ref.current;
    const ctx = c.getContext('2d');
    let w, h, particles=[], raf;
    function resize(){ w=c.width=c.clientWidth; h=c.height=c.clientHeight; particles=[]; for(let i=0;i<Math.max(40, Math.floor(w*h/90000)); i++){ particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+0.6,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,a:Math.random()*0.6+0.2}) } }
    function draw(){ ctx.clearRect(0,0,w,h); for(const p of particles){ ctx.beginPath(); ctx.fillStyle = `rgba(51,78,230,${p.a})`; ctx.shadowColor='rgba(51,78,230,0.6)'; ctx.shadowBlur = 8; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); p.x+=p.vx; p.y+=p.vy; if(p.x<0) p.x=w; if(p.x>w) p.x=0; if(p.y<0) p.y=h; if(p.y>h) p.y=0; } raf = requestAnimationFrame(draw); }
    resize(); window.addEventListener('resize', resize); draw();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize); }
  },[]);
  return <canvas ref={ref} style={{position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0}} />;
}
