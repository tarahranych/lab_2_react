function Header({ theme, toggleTheme }) {
  return (
    <header id="main-header" style={{ position: 'relative' }}>
      {/* Кнопка перемикання теми тепер знаходиться всередині шапки */}
      <button 
        className="theme-btn" 
        onClick={toggleTheme}
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        {theme === 'day' ? '🌙 Темна тема' : '☀️ Денна тема'}
      </button>

      <h1>Тарас Граничка</h1>
      <p className="subtitle">Trainee QA Engineer / Спеціаліст з кібербезпеки та Linux</p>
      <div className="contacts">
        <span>Львівська область, Україна</span>
        <span>|</span>
        <span><a href="mailto:granichka34@gmail.com">granichka34@gmail.com</a></span>
      </div>
    </header>
  );
}

export default Header;