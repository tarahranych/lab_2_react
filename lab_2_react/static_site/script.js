document.addEventListener('DOMContentLoaded', () => {
    // --- МАСКА ДЛЯ ТЕЛЕФОНУ ---
    const phoneInput = document.getElementById('phone-input');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            // Видаляємо всі нецифрові символи
            let inputNumbersValue = e.target.value.replace(/\D/g, '');
            
            // Якщо користувач видалив все
            if (!inputNumbersValue) {
                e.target.value = '';
                return;
            }

            // Завжди починаємо з +38
            let formattedInputValue = '+38 ';
            
            // Відкидаємо "38" на початку, якщо користувач їх ввів, щоб уникнути дублювання
            if (inputNumbersValue.startsWith('38')) {
                inputNumbersValue = inputNumbersValue.substring(2);
            } else if (inputNumbersValue.startsWith('8')) {
                inputNumbersValue = inputNumbersValue.substring(1);
            }

            // Форматуємо: (0XX) XXX-XX-XX
            if (inputNumbersValue.length > 0) {
                formattedInputValue += '(' + inputNumbersValue.substring(0, 3);
            }
            if (inputNumbersValue.length >= 4) {
                formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
            }
            if (inputNumbersValue.length >= 7) {
                formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
            }
            if (inputNumbersValue.length >= 9) {
                formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
            }

            // Оновлюємо значення в інпуті
            e.target.value = formattedInputValue;
        });

        // Щоб при кліку на пусте поле одразу ставало +38
        phoneInput.addEventListener('focus', function() {
            if (phoneInput.value === '') {
                phoneInput.value = '+38 ';
            }
        });

        
        phoneInput.addEventListener('blur', function() {
            if (phoneInput.value === '+38 ') {
                phoneInput.value = '';
            }
        });
    }

    // 1. LocalStorage - Системна інформація
    const sysInfoContainer = document.getElementById('sys-info');
    if (sysInfoContainer) {
        const sysData = {
            browser: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language
        };
        localStorage.setItem('cv_sys_info', JSON.stringify(sysData));
        const savedData = JSON.parse(localStorage.getItem('cv_sys_info'));
        sysInfoContainer.innerHTML = `
            <strong>Інформація про систему:</strong><br>
            Платформа: ${savedData.platform} <br>
            Мова: ${savedData.language} <br>
            <span style="font-size: 0.8em; color: #94a3b8;">User-Agent: ${savedData.browser}</span>
        `;
    }

    // 2. Fetch API - Відгуки (Варіант 6)
    const variantNumber = 6; 
    const commentsContainer = document.getElementById('comments-container');
    if (commentsContainer) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
            .then(response => response.json())
            .then(comments => {
                commentsContainer.innerHTML = ''; 
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.className = 'comment';
                    commentDiv.innerHTML = `
                        <h4>${comment.name}</h4>
                        <small>${comment.email}</small>
                        <p>${comment.body}</p>
                    `;
                    commentsContainer.appendChild(commentDiv);
                });
            })
            .catch(error => console.error('Fetch error:', error));
    }

    // 3. Модальне вікно (через 1 хвилину)
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-modal');
    if (modal && closeBtn) {
        setTimeout(() => {
            modal.classList.add('active');
        }, 60000); // 60000 = 1 хвилина

        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // 4. ТЕМА (Vanilla JS - робота з атрибутом data-theme)
    const themeBtn = document.getElementById('theme-btn');
    const htmlEl = document.documentElement; // Звертаємось до тегу <html>
    
    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        if (themeBtn) {
            themeBtn.textContent = theme === 'day' ? '🌙 Темна тема' : '☀️ Денна тема';
        }
    }

    // Автоматичне визначення за часом (07:00 - 21:00 = день)
    const currentHour = new Date().getHours();
    const autoTheme = (currentHour >= 7 && currentHour < 21) ? 'day' : 'night';
    setTheme(autoTheme);

    // Ручне перемикання по кнопці
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            setTheme(currentTheme === 'day' ? 'night' : 'day');
        });
    }
});