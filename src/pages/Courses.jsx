import React from "react";

const courses = [
  {
    title: "Базовый курс массажа",
    desc: "Вы изучите основы анатомии опорно-двигательного аппарата. Научитесь правильно двигаться и 'ставить руки'. На практике освоите популярные техники массажа.",
    price: "15 000 ₽",
  },
  {
    title: "Курс уровня PRO",
    desc: "Глубокое изучение анатомии и биомеханики. Работа с триггерными точками. Основы МФР и ПИР. Станете профессионалом и получите диплом гос. образца.",
    price: "27 000 ₽",
  },
  {
    title: "Группа выходного дня PRO",
    desc: "Идеально подходит для тех, кто может найти время только в выходные. Получите навыки, описанные ранее в Курсе массажа PRO.",
    price: "27 000 ₽",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-200 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">Школа массажа в Курске SAMADHI</h1>
        <a href="tel:+79202600605" className="text-blue-900 text-sm hover:text-blue-700">
          +7 (920) 260-06-05
        </a>
      </header>

      <section className="text-center py-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Выберите свой курс</h2>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
          Мы предлагаем комплексное обучение массажу с практической направленностью.
          Каждый курс включает теорию, практику и итоговую сертификацию.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {courses.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <p className="text-2xl font-bold text-blue-900 mb-6">{item.price}</p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-all w-full">
                Записаться на бесплатный урок
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
