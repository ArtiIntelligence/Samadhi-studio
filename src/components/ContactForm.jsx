import React, { useState } from "react";
import { sendTelegramMessage } from "../utils/telegram";

export default function ContactForm(){
  const [loading,setLoading]=useState(false);
  const [done,setDone]=useState(false);
  async function submit(e){
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    if(!name||!phone){ alert('Введите имя и телефон'); return; }
    setLoading(true);
    const res = await sendTelegramMessage(`<b>Заявка</b>\nИмя: ${name}\nТелефон: ${phone}`);
    setLoading(false);
    if(res && res.ok){ setDone(true); e.target.reset(); setTimeout(()=>setDone(false),4000); }
    else alert('Ошибка отправки');
  }
  return (
    <form onSubmit={submit} style={{maxWidth:600, margin:'0 auto', background:'rgba(255,255,255,0.02)', padding:20, borderRadius:12}}>
      <div style={{marginBottom:10}}><label>Имя</label><input name="name" style={{width:'100%', padding:8, borderRadius:6}}/></div>
      <div style={{marginBottom:10}}><label>Телефон</label><input name="phone" style={{width:'100%', padding:8, borderRadius:6}}/></div>
      <button type="submit" style={{padding:'10px 16px', borderRadius:8}}>Отправить</button>
      {done && <div style={{color:'#6ee7b7', marginTop:10}}>Спасибо! Мы свяжемся.</div>}
    </form>
  )
}