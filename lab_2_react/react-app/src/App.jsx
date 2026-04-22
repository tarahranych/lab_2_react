import { useState, useEffect } from 'react';
import './App.css'; // Переконайся, що твій style.css підввключено тут
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Автоматичне визначення теми при завантаженні сторінки
  useEffect(() => {
    const currentHour = new Date().getHours();
    // День з 07:00 до 21:00
    const isNight = currentHour < 7 || currentHour >= 21;
    setIsDarkTheme(isNight);
  }, []);

  // Синхронізація стейту з body class
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <>
      <button 
        className="theme-btn" 
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? '☀️ Денна тема' : '🌙 Темна тема'}
      </button>

      <div className="container">
        <header id="main-header">
          <h1>Тарас Граничка</h1>
          <p className="subtitle">Trainee QA Engineer / Спеціаліст з кібербезпеки та Linux</p>
          <div className="contacts">
            <span>Львівська область, Україна</span>
            <span>|</span>
            <span><a href="mailto:granichka34@gmail.com">granichka34@gmail.com</a></span>
          </div>
        </header>

        <main>
          <section className="cv-section">
            <h2>Про мене</h2>
            <p>Цілеспрямований фахівець із глибоким інтересом до забезпечення якості програмного забезпечення, системного адміністрування ОС Linux та кібербезпеки.</p>
          </section>

          <section className="cv-section">
            <h2>Досвід та практика</h2>
            <ul className="experience-list">
              <li className="card">
                <strong>Стажування в UnderDefense</strong>
                <p>Виконання практичних лабораторних завдань з кібербезпеки. Аналіз вразливостей та робота з інфраструктурою.</p>
              </li>
              <li className="card">
                <strong>Хмарні технології (AWS)</strong>
                <p>Самостійне налаштування та розгортання хмарної віртуальної машини Ubuntu на базі екземплярів AWS EC2.</p>
              </li>
              <li className="card">
                <strong>Автоматизація сайтів</strong>
                <p>Створення промптів для витягу інформації з сайтів</p>
              </li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Технічні навички</h2>
            <ul className="skills-list">
              <li><strong>ОС:</strong> Linux (Ubuntu), Windows</li>
              <li><strong>QA та тестування:</strong> Розуміння процесів тестування, підготовка до позиції Trainee QA</li>
              <li><strong>Інструменти:</strong> Git, HTML, AWS</li>
            </ul>
          </section>

          {/* Інтеграція компонента відгуків */}
          
        </main>

        {/* Інтеграція футера */}
        <Footer />
      </div>

      {/* Інтеграція модального вікна */}
      <ContactForm />
    </>
  );
}

export default App;