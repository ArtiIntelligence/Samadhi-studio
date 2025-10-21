import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const practices = [
  {
    title: "Базовый курс массажа",
    desc: "Вы изучите основы анатомии опорно-двигательного аппарата. Научитесь правильно двигаться и «ставить руки». На практике освоите популярные техники массажа.",
    price: "15 000 ₽",
  },
  {
    title: "Курс уровня PRO",
    desc: "Глубокое изучение анатомии и биомеханики. Работа с триггерными точками. Основы МФР и ПИР. Станете настоящим профессионалом в своём деле и получите диплом государственного образца.",
    price: "27 000 ₽",
  },
  {
    title: "Группа выходного дня PRO",
    desc: "Идеально подходит для тех, кто может найти время только в выходные дни. Получите навыки, описанные ранее в Курсе массажа PRO.",
    price: "27 000 ₽",
  },
];

export default function Practices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-[#141a45] text-white flex flex-col">
      <header className="flex justify-between items-center px-10 py-6 border-b border-indigo-800 bg-[#0f143b]/70 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl font-semibold tracking-wider">
          <span className="text-indigo-300">Samadhi</span> Studio
        </h1>
        <nav className="space-x-8">
          <Link to="/" className="hover:text-indigo-300 transition">
            Главная
          </Link>
          <Link to="/practices" className="text-indigo-300">
            Наши курсы
          </Link>
        </nav>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 text-center flex-grow"
      >
        <h2 className="text-4xl font-light mb-10 text-indigo-200 tracking-wide">
          Наши курсы массажа
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {practices.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#10163a] text-gray-100 rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-indigo-900/40 hover:shadow-indigo-900/40 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-200 mb-4">
                  {item.price}
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-md transition-all w-full shadow-md">
                  Записаться на бесплатный урок
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14"
        >
          <Link
            to="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white py-3 px-8 rounded-full transition-all shadow-lg"
          >
            ← Назад на главную
          </Link>
        </motion.div>
      </motion.section>

      <footer className="py-6 text-center text-indigo-300 text-sm border-t border-indigo-900/50 bg-[#0f143b]/50">
        © {new Date().getFullYear()} Samadhi Studio — пространство прикосновений
      </footer>
    </div>
  );
}
