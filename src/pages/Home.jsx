import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-200 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">Школа массажа в Курске SAMADHI</h1>
        <a href="tel:+79202600605" className="text-blue-900 text-sm hover:text-blue-700">
          +7 (920) 260-06-05
        </a>
      </header>

      <main className="flex flex-col md:flex-row justify-between items-center px-10 py-16 max-w-7xl mx-auto flex-grow">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Научись массажу с нуля.<br />
            <span className="text-blue-900">Первый урок — бесплатно!</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Обучение массажу от опытных массажистов с нуля до уровня PRO.
            Очные и онлайн форматы. С выдачей диплома государственного образца.
          </p>
          <Link
            to="/courses"
            className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition"
          >
            Записаться на бесплатный урок
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/OIP.jpg" alt="Диплом" className="rounded-lg shadow-lg max-w-sm" />
        </div>
      </main>
    </div>
  );
}
