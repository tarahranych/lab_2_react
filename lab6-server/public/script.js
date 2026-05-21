// 1. Інформація про систему в LocalStorage
const sysInfo = {
    platform: navigator.platform,
    language: navigator.language,
    browser: navigator.userAgent
};
localStorage.setItem('react_sys_info', JSON.stringify(sysInfo));

const savedInfo = JSON.parse(localStorage.getItem('react_sys_info'));
document.getElementById('sys-info').innerHTML = `
    <strong>Інформація про систему (з LocalStorage):</strong><br>
    Платформа: ${savedInfo.platform}<br>
    Мова: ${savedInfo.language}<br>
    <span style="color: gray;">User-Agent: ${savedInfo.browser}</span>
`;

// 2. Fetch API (Варіант 6)
fetch('https://jsonplaceholder.typicode.com/posts/6/comments')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('comments-container');
        container.innerHTML = ''; 
        data.forEach(comment => {
            container.innerHTML += `
                <div class="card">
                    <h4 style="margin: 0; color: var(--accent-color);">${comment.name}</h4>
                    <small style="opacity: 0.7;">${comment.email}</small>
                    <p style="margin-top: 10px; margin-bottom: 0;">${comment.body}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error('Помилка:', error));

// 3. Модальне вікно (через 60 секунд)
const modal = document.getElementById('contact-modal');
const closeModalBtn = document.getElementById('close-modal');

setTimeout(() => {
    modal.style.display = 'flex';
}, 60000); 

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 4. Перемикач теми
const themeBtn = document.getElementById('theme-btn');
const htmlTag = document.documentElement;

const currentHour = new Date().getHours();
if (currentHour >= 7 && currentHour < 21) {
    htmlTag.setAttribute('data-theme', 'day');
    themeBtn.textContent = ' 🌙  Темна тема';
} else {
    htmlTag.setAttribute('data-theme', 'night');
    themeBtn.textContent = ' ☀️  Денна тема';
}

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') === 'day') {
        htmlTag.setAttribute('data-theme', 'night');
        themeBtn.textContent = ' ☀️  Денна тема';
    } else {
        htmlTag.setAttribute('data-theme', 'day');
        themeBtn.textContent = ' 🌙  Темна тема';
    }
    // Відправка форми на локальний бекенд
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Зупиняємо стандартну відправку (Formspree)

        // Збираємо дані
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            // Шлемо POST запит на наш бекенд
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Супер! Повідомлення успішно відправлено на пошту.');
                contactForm.reset(); // Очищаємо форму
            } else {
                alert('Помилка сервера при відправці.');
            }
        } catch (error) {
            console.error('Помилка:', error);
            alert('Не вдалося з’єднатися з сервером.');
        }
    });
}
});