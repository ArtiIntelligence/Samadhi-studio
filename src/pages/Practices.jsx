import React from "react";
import { motion } from "framer-motion";

const practices = [
  {
    title: "Базовый курс массажа",
    desc: "Вы изучите основы анатомии опорно-двигательного аппарата. Научитесь правильно двигаться и «ставить руки». На практике освоите популярные техники массажа.",
    price: "15 000 ₽",
  },
  {
    title: "Курс уровня PRO",
    desc: "Глубокое изучение анатомии и биомеханики. Работа с триггерными точками. Основы МФР и ПИР.",
    price: "27 000 ₽",
  },
  {
    title: "Группа выходного дня PRO",
    desc: "Идеально подходит для тех, кто может найти время только в выходные дни.",
    price: "27 000 ₽",
  },
];

export default function Practices(){
  return (
    <div style={{padding:40, maxWidth:1100, margin:'0 auto'}}>
      <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-semibold mb-6" style={{color:'#bfefff'}}>Выберите свой курс</motion.h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20}}>
        {practices.map((p,idx)=>(
          <motion.div key={idx} whileHover={{scale:1.02}} style={{background:'rgba(255,255,255,0.02)', padding:20, borderRadius:12}}>
            <h3 style={{fontSize:18, color:'#e6f7ff'}}>{p.title}</h3>
            <p style={{color:'#9fbce6'}}>{p.desc}</p>
            <div style={{fontWeight:700, marginTop:8}}>{p.price}</div>
            <button style={{marginTop:8, padding:'10px 12px', borderRadius:8, background:'#114b8c', color:'#fff'}}>Записаться</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
