import { useState, useEffect } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState({
    browser: '',
    platform: '',
    language: ''
  });

  useEffect(() => {
    // Збираємо дані при першому рендері
    const data = {
      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    };
    
    localStorage.setItem('react_cv_sys_info', JSON.stringify(data));
    setSysInfo(data);
  }, []); // Порожній масив = виконується 1 раз при монтуванні

  return (
    <footer>
      <p>CV - Тарас Граничка, 2026</p>
      <hr />
      <div style={{ fontSize: '0.8em' }}>
        <strong>Інформація про систему (React LocalStorage):</strong><br />
        Платформа: {sysInfo.platform} <br />
        Мова: {sysInfo.language} <br />
        <span style={{ color: '#94a3b8' }}>User-Agent: {sysInfo.browser}</span>
      </div>
    </footer>
  );
}