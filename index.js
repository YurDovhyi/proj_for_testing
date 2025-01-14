        // Инициализация переменных
        let totalClicks = 0;
        let goodClicks = 0;

        // Получение элементов DOM
        const clickCountSpan = document.getElementById('clickCount');
        const goodPercentageSpan = document.getElementById('goodPercentage');
        const goodButton = document.getElementById('goodButton');
        const badButton = document.getElementById('badButton');
        const neutralButton = document.getElementById('neutralButton');

        // Загрузка данных из localStorage
        function loadFromLocalStorage() {
            const storedTotalClicks = localStorage.getItem('totalClicks');
            const storedGoodClicks = localStorage.getItem('goodClicks');

            if (storedTotalClicks !== null) {
                totalClicks = parseInt(storedTotalClicks, 10);
            }

            if (storedGoodClicks !== null) {
                goodClicks = parseInt(storedGoodClicks, 10);
            }

            updateDisplay();
        }

        // Сохранение данных в localStorage
        function saveToLocalStorage() {
            localStorage.setItem('totalClicks', totalClicks);
            localStorage.setItem('goodClicks', goodClicks);
        }

        // Функция обновления отображения
        function updateDisplay() {
            clickCountSpan.textContent = totalClicks;
            const goodPercentage = totalClicks > 0 ? Math.round((goodClicks / totalClicks) * 100) : 0;
            goodPercentageSpan.textContent = `${goodPercentage}%`;
        }

        // Обработчики событий для кнопок
        goodButton.addEventListener('click', () => {
            totalClicks++;
            goodClicks++;
            updateDisplay();
            saveToLocalStorage();
        });

        badButton.addEventListener('click', () => {
            totalClicks++;
            updateDisplay();
            saveToLocalStorage();
        });

        neutralButton.addEventListener('click', () => {
            totalClicks++;
            updateDisplay();
            saveToLocalStorage();
        });

        // Загрузка данных при загрузке страницы
        loadFromLocalStorage();