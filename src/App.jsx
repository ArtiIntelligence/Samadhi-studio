import React, { useRef, useState } from 'react';
import Particles from './components/Particles';
import { sendTelegramMessage } from './utils/telegram';

export default function App(){
  const contactRef = useRef(null);
  const [loading,setLoading] = useState(false);
  const [done,setDone] = useState(false);

  const scrollToId = (id)=>{
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    if(!name || !phone){ alert('Пожалуйста, заполните имя и телефон.'); return; }
    setLoading(true);
    const text = `<b>Заявка с сайта Samadhi Studio</b>\nИмя: ${name}\nТелефон: ${phone}`;
    const res = await sendTelegramMessage(text);
    setLoading(false);
    if(res && res.ok){ setDone(true); e.target.reset(); setTimeout(()=>setDone(false),4000); }
    else { alert('Ошибка отправки. Проверьте настройки бота.'); console.error(res); }
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Particles />
      <header className="relative z-10">
        <div className="container px-6 py-6 flex items-center justify-between">
          <div className="text-lg font-semibold">Школа массажа в Курске <span className="text-accent">SAMADHI</span></div>
          <nav className="space-x-6">
            <button onClick={()=>scrollToId('hero')} className="text-sm small-muted">Главная</button>
            <button onClick={()=>scrollToId('courses')} className="text-sm small-muted">Курсы</button>
            <button onClick={()=>scrollToId('reviews')} className="text-sm small-muted">Отзывы</button>
            <button onClick={()=>contactRef.current?.scrollIntoView({behavior:'smooth'})} className="text-sm small-muted">Оставить заявку</button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-6 pb-24">
        <section id="hero" className="container px-6 py-20 flex items-center gap-12">
          <div style={{flex:1}}>
            <h1 className="hero-title text-5xl md:text-6xl leading-tight font-bold mb-6">Научись массажу с нуля.<br/><span className="text-accent">Первый урок — бесплатно!</span></h1>
            <p className="small-muted max-w-xl mb-8">Обучение массажу от опытных массажистов с нуля до уровня PRO. Очные и онлайн форматы. С выдачей диплома государственного образца.</p>
            <button onClick={()=>contactRef.current?.scrollIntoView({behavior:'smooth'})} className="bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg">Записаться на бесплатный урок</button>
          </div>
          <div style={{width:420}} className="relative">
            <div className="card p-4 rounded-xl shadow-xl" style={{width:420,height:260}}>
              <img src="/images/OIP.jpg" alt="Диплом" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </section>

        <section id="courses" className="container px-6 py-20">
          <h2 className="text-4xl font-semibold mb-4">Выберите свой курс</h2>
          <p className="small-muted mb-8 max-w-2xl">Мы предлагаем комплексное обучение массажу с практической направленностью. Каждый курс включает теорию, практику и итоговую сертификацию.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Базовый курс массажа</h3>
              <p className="small-muted mb-6">Вы изучите основы анатомии опорно-двигательного аппарата. Научитесь правильно двигаться и «ставить руки».</p>
              <div className="text-2xl font-bold mb-4">15 000 ₽</div>
              <button onClick={()=>contactRef.current?.scrollIntoView({behavior:'smooth'})} className="bg-indigo-700 w-full py-3 rounded-md">Записаться на бесплатный урок</button>
            </div>
            <div className="card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Курс уровня PRO</h3>
              <p className="small-muted mb-6">Глубокое изучение анатомии и биомеханики. Работа с триггерными точками. Основы МФР и ПИР.</p>
              <div className="text-2xl font-bold mb-4">27 000 ₽</div>
              <button onClick={()=>contactRef.current?.scrollIntoView({behavior:'smooth'})} className="bg-indigo-700 w-full py-3 rounded-md">Записаться на бесплатный урок</button>
            </div>
            <div className="card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Группа выходного дня PRO</h3>
              <p className="small-muted mb-6">Идеально подходит для тех, кто может найти время только в выходные дни.</p>
              <div className="text-2xl font-bold mb-4">27 000 ₽</div>
              <button onClick={()=>contactRef.current?.scrollIntoView({behavior:'smooth'})} className="bg-indigo-700 w-full py-3 rounded-md">Записаться на бесплатный урок</button>
            </div>
          </div>
        </section>

        <section id="reviews" className="container px-6 py-20">
          <h2 className="text-4xl font-semibold mb-4">Отзывы наших учеников</h2>
          <p className="small-muted mb-8 max-w-2xl">Узнайте, что говорят выпускники наших курсов</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl">
              <div className="text-4xl text-accent mb-4">❝</div>
              <p className="mb-4">"Прекрасный курс! Освоила технику массажа и теперь помогаю своим близким. Преподаватель объясняет все очень доступно."</p>
              <div className="font-semibold text-accent">Анна М.</div>
            </div>
            <div className="card p-8 rounded-xl">
              <div className="text-4xl text-accent mb-4">❝</div>
              <p className="mb-4">"Отличная программа обучения. Получил диплом и уже начал практиковать. Спасибо за профессиональный подход!"</p>
              <div className="font-semibold text-accent">Дмитрий С.</div>
            </div>
            <div className="card p-8 rounded-xl">
              <div className="text-4xl text-accent mb-4">❝</div>
              <p className="mb-4">"Очень довольна курсом. Удобный формат занятий, опытные наставники. Рекомендую всем, кто хочет освоить массаж."</p>
              <div className="font-semibold text-accent">Елена К.</div>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className="container px-6 py-20">
          <div className="card p-10 rounded-xl max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Оставьте заявку</h3>
            <p className="small-muted mb-6">Мы перезвоним вам в течение 15 минут. Получите бесплатную консультацию и запишитесь на пробный урок.</p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <label className="block">
                <div className="mb-2">Имя</div>
                <input name="name" className="w-full p-3 rounded border border-gray-300 bg-transparent text-white" placeholder="Введите ваше имя" />
              </label>
              <label className="block">
                <div className="mb-2">Телефон</div>
                <input name="phone" className="w-full p-3 rounded border border-gray-300 bg-transparent text-white" placeholder="+7 (___) ___-__-__" />
              </label>
              <button type="submit" disabled={loading} className="bg-indigo-700 w-full py-3 rounded-md text-white">{loading? 'Отправка...' : 'Отправить заявку'}</button>
              {done && <div className="mt-2 text-green-400">Спасибо! Мы скоро свяжемся с вами.</div>}
              <div className="text-xs small-muted mt-4">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</div>
            </form>
          </div>
        </section>

      </main>

      <footer className="relative z-10 text-center py-8 small-muted">© {new Date().getFullYear()} Samadhi Studio</footer>
    </div>
  );
}
