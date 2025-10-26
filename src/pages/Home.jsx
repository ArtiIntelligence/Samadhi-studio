import React from "react";
import ContactForm from "../components/ContactForm";

export default function Home(){
  return (
    <div id="home" style={{padding:40}}>
      <section style={{textAlign:'center', padding:'60px 20px'}}>
        <h1 style={{fontSize:56, color:'#c7e9ff', margin:0, textShadow:'0 0 20px rgba(99,102,241,0.5)'}}>Научись массажу с нуля.<br/><span style={{color:'#9fbce6'}}>Первый урок — бесплатно!</span></h1>
        <p style={{marginTop:12, color:'#9fbce6'}}>Обучение массажу от опытных массажистов с нуля до уровня PRO.</p>
      </section>

      <section style={{maxWidth:1100, margin:'0 auto', padding:20}}>
        <h2 style={{color:'#bfefff'}}>Наши курсы</h2>
        <p style={{color:'#9fbce6'}}>Кликни по экрану — увидишь всплеск энергии ✨</p>
      </section>

      <section style={{maxWidth:800, margin:'40px auto'}}>
        <ContactForm />
      </section>
    </div>
  )
}
