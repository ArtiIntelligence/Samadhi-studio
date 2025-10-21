import React, { useState } from 'react';
import { sendTelegramMessage } from '../utils/telegram';

export default function ContactForm(){
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e){
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    if(!name||!phone){ alert('Пожалуйста, заполните имя и телефон'); return; }
    setLoading(true);
    const text = `<b>Заявка с сайта Samadhi Studio</b>\nИмя: ${name}\nТелефон: ${phone}`;
    const res = await sendTelegramMessage(text);
    setLoading(false);
    if(res && res.ok){ setDone(true); e.target.reset(); setTimeout(()=>setDone(false),5000); }
    else { alert('Ошибка отправки. Проверьте бот/токен.'); console.error(res); }
  }

  return (
    <div className="card p-8 rounded-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Оставьте заявку</h3>
      <p className="small-muted mb-6">Мы перезвоним в течение 15 минут</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Имя</label>
          <input name="name" className="w-full p-3 rounded bg-transparent border border-white/10 text-white" />
        </div>
        <div>
          <label className="block mb-2">Телефон</label>
          <input name="phone" className="w-full p-3 rounded bg-transparent border border-white/10 text-white" />
        </div>
        <button type="submit" className="btn w-full mt-2">{loading? 'Отправка...' : 'Отправить заявку'}</button>
        {done && <div className="text-green-400 mt-2">Спасибо! Мы свяжемся с вами.</div>}
      </form>
    </div>
  )
}
