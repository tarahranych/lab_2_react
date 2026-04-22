import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Таймер на 60 секунд (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    // Очищення таймера при розмонтуванні компонента
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null; // Якщо false, компонент не рендериться

  return (
    <div className="modal-overlay active" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <h2 style={{ marginTop: 0 }}>Зв'язок зі мною</h2>
        
        {/* ВСТАВ СВІЙ ENDPOINT FORMSPREE НИЖЧЕ */}
        <form action="YOUR_FORMSPREE_ENDPOINT_HERE" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" name="name" placeholder="Ім'я" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          <input type="tel" name="phone" placeholder="Номер телефону" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          <textarea name="message" rows="4" placeholder="Повідомлення" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}></textarea>
          <button type="submit" style={{ padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Відправити</button>
        </form>
      </div>
    </div>
  );
}