import React, { useRef, useState } from 'react';
import Particles from './components/Particles';
import { sendTelegramMessage } from './utils/telegram';

export default function App() {
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и телефон.');
      return;
    }
    setLoading(true);
    const text = `<b>Заявка с сайта Samadhi Studio</b>\nИмя: ${name}\nТелефон: ${phone}`;
    const res = await sendTelegramMessage(text);
    setLoading(false);
    if (res && res.ok) {
      setDone(true);
      e.target.reset();
      setTimeout(() => setDone(false), 4000);
    } else {
      alert('Ошибка отправки. Проверьте настройки бота.');
      console.error(res);
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden text-[1.15rem] leading-relaxed">
      <Particles />

      {/* HEADER */}
      <header className="relative z-10">
        <div className="container px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-semibold drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
            Школа массажа в Курске <span className="text-accent">SAMADHI</span> 8(920)260-06-05
          </div>
          <nav className="space-x-6 text-[1.05rem]">
            <button onClick={() => scrollToId('hero')} className="hover:text-indigo-300 transition">Главная</button>
            <button onClick={() => scrollToId('courses')} className="hover:text-indigo-300 transition">Курсы</button>
            <button onClick={() => scrollToId('reviews')} className="hover:text-indigo-300 transition">Отзывы</button>
            <button onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-indigo-300 transition">Оставить заявку</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="relative z-10 pt-6 pb-24">
        <section id="hero" className="container px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div style={{ flex: 1 }}>
            <h1 className="hero-title text-5xl md:text-6xl leading-tight font-bold mb-6 drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]">
              Научись массажу с нуля.<br />
              <span className="text-accent">Первый урок — бесплатно!</span>
            </h1>
            <p className="small-muted max-w-xl mb-8 text-[1.1rem]">
              Обучение массажу от опытных массажистов с нуля до уровня PRO. Очные и онлайн форматы.
              С выдачей диплома государственного образца.
            </p>
            <button
              onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]"
            >
              Записаться на бесплатный урок
            </button>
          </div>

          {/* IMAGE */}
          <div style={{ width: 420 }} className="relative">
            <div
              className="card p-4 rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition"
              style={{ width: 420, height: 260 }}
            >
              <img
                src="/images/SPO-Diplom.jpg"
                alt="Диплом Samadhi"
                className="w-full h-full object-cover rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              />
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="container px-6 py-20">
          <h2 className="text-4xl font-semibold mb-4 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">Выберите свой курс</h2>
          <p className="small-muted mb-8 max-w-2xl text-[1.1rem]">
            Мы предлагаем комплексное обучение массажу с практической направленностью. Каждый курс включает теорию, практику и итоговую сертификацию.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый курс массажа",
                desc: "Вы изучите основы анатомии опорно-двигательного аппарата. Научитесь правильно двигаться и «ставить руки».",
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
            ].map((c, i) => (
              <div key={i} className="card p-8 rounded-xl bg-indigo-900/20 border border-indigo-700/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition">
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="small-muted mb-6">{c.desc}</p>
                <div className="text-2xl font-bold mb-4 text-indigo-300">{c.price}</div>
                <button
                  onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-indigo-700 w-full py-3 rounded-md hover:bg-indigo-600 transition hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]"
                >
                  Записаться на бесплатный урок
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="container px-6 py-20">
          <h2 className="text-4xl font-semibold mb-4 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">Отзывы наших учеников</h2>
          <p className="small-muted mb-8 max-w-2xl text-[1.1rem]">Узнайте, что говорят выпускники наших курсов</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Прекрасный курс! Освоила технику массажа и теперь помогаю своим близким.", name: "Анна М." },
              { text: "Отличная программа обучения. Лично мне подошла очень хорошо. Получил диплом и уже начал практиковать.", name: "Дмитрий С." },
              { text: "Очень довольна курсом. Удобный формат занятий, глубокие знания анатомии и практики.", name: "Елена К." },
            ].map((r, i) => (
              <div key={i} className="card p-8 rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition">
                <div className="text-4xl text-accent mb-4">❝</div>
                <p className="mb-4">{r.text}</p>
                <div className="font-semibold text-accent">{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={contactRef} className="container px-6 py-20">
          <div className="card p-10 rounded-xl max-w-3xl mx-auto text-center bg-indigo-900/20 border border-indigo-700/40 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-indigo-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]">Оставьте заявку</h3>
            <p className="small-muted mb-6 text-[1.1rem]">
              Мы перезвоним вам в течение 15 минут. Получите бесплатную консультацию и запишитесь на пробный урок.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <label className="block">
                <div className="mb-2">Имя</div>
                <input name="name" className="w-full p-3 rounded border border-gray-300 bg-transparent text-white" placeholder="Введите ваше имя" />
              </label>
              <label className="block">
                <div className="mb-2">Телефон</div>
                <input name="phone" className="w-full p-3 rounded border border-gray-300 bg-transparent text-white" placeholder="+7 (___) ___-__-__" />
              </label>
              <button type="submit" disabled={loading} className="bg-indigo-700 w-full py-3 rounded-md text-white hover:bg-indigo-600 transition hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]">
                {loading ? 'Отправка...' : 'Отправить заявку'}
              </button>
              {done && <div className="mt-2 text-green-400">Спасибо! Мы скоро свяжемся с вами.</div>}
              <div className="text-xs small-muted mt-4">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-10 small-muted border-t border-indigo-800/50">
        <div className="animate-pulse space-y-2">
          <a href="tel:+79202600605" className="block text-indigo-400 hover:text-indigo-300 transition">
            📞 +7 (920) 260-06-05
          </a>
          <a href="https://t.me/Samadhi46" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 hover:text-indigo-300 transition">
            💬 Telegram: @Samadhi46
          </a>
          <div className="text-indigo-300 mt-4">📍 Курск</div>
        </div>
        <div className="mt-6 text-xs text-indigo-400">
          © {new Date().getFullYear()} Samadhi Studio — пространство прикосновений
        </div>
      </footer>
    </div>
  );
}

