import React from "react";

const reviews = [
  {
    name: "Анна М.",
    text: "Прекрасный курс! Освоила технику массажа и теперь помогаю своим близким. Преподаватель объясняет все очень доступно.",
  },
  {
    name: "Дмитрий С.",
    text: "Отличная программа обучения. Получил диплом и уже начал практиковать. Спасибо за профессиональный подход!",
  },
  {
    name: "Елена К.",
    text: "Очень довольна курсом. Удобный формат занятий, опытные наставники. Рекомендую всем, кто хочет освоить массаж.",
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-4">Отзывы наших учеников</h2>
      <p className="text-center text-gray-500 mb-12">
        Узнайте, что говорят выпускники наших курсов
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <div className="text-5xl text-blue-400 mb-4">❝</div>
            <p className="text-gray-700 mb-6">"{r.text}"</p>
            <p className="font-semibold text-blue-900">{r.name}</p>
            <p className="text-yellow-400 text-xl mt-2">★★★★★</p>
          </div>
        ))}
      </div>
    </div>
  );
}
