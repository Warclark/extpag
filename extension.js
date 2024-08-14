document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const writeBinaryButton = document.getElementById('writeBinaryButton');
    const statusDiv = document.getElementById('status');

    loginButton.addEventListener('click', function() {
        const password = prompt('Введите пароль:');
        if (password === '12345678') {
            statusDiv.textContent = 'Вы вошли в систему';
        } else {
            statusDiv.textContent = 'Неверный пароль';
        }
        
    });

    logoutButton.addEventListener('click', function() {
        // Логика выхода
        statusDiv.textContent = 'Выполняется выход...';
    });

    writeBinaryButton.addEventListener('click', function() {
        // Логика записи бинарного файла
        statusDiv.textContent = 'Запись бинарного файла...';
    });
});