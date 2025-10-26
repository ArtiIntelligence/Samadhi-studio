import React from "react";

export default function Reviews(){
  return (
    <div style={{padding:40, maxWidth:1100, margin:'0 auto'}}>
      <h2 style={{color:'#bfefff'}}>Отзывы наших учеников</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20, marginTop:20}}>
        <div style={{background:'rgba(255,255,255,0.02)', padding:20, borderRadius:12}}>
          <div style={{fontSize:36, color:'#9fbce6'}}>❝</div>
          <p>"Прекрасный курс! Освоила технику массажа и теперь помогаю своим близким."</p>
          <div style={{fontWeight:700, marginTop:8}}>Анна М.</div>
        </div>
        <div style={{background:'rgba(255,255,255,0.02)', padding:20, borderRadius:12}}>
          <div style={{fontSize:36, color:'#9fbce6'}}>❝</div>
          <p>"Отличная программа обучения. Получил диплом и уже начал практиковать."</p>
          <div style={{fontWeight:700, marginTop:8}}>Дмитрий С.</div>
        </div>
        <div style={{background:'rgba(255,255,255,0.02)', padding:20, borderRadius:12}}>
          <div style={{fontSize:36, color:'#9fbce6'}}>❝</div>
          <p>"Очень довольна курсом. Удобный формат занятий, опытные наставники."</p>
          <div style={{fontWeight:700, marginTop:8}}>Елена К.</div>
        </div>
      </div>
    </div>
  )
}
