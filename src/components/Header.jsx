import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-opacity-30 bg-black flex justify-between items-center">
      <h1 className="text-2xl font-bold">Samadhi Studio</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-accent">Главная</Link>
        <Link to="/projects" className="hover:text-accent">Проекты</Link>
        <Link to="/team" className="hover:text-accent">Команда</Link>
        <Link to="/contact" className="hover:text-accent">Контакты</Link>
      </nav>
    </header>
  );
}