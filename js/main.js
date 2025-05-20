document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('email-copy').addEventListener('click', function () {
        const email = document.getElementById('email').textContent;
        navigator.clipboard.writeText(email).then(() => {
            console.log('Email скопирован!');
        }).catch(err => {
            console.error('Ошибка копирования:', err);
        });
    });
})