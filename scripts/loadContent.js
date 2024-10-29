document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);
});
function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('show');
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Inicjalizacja zegara

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        fetchPage(link.getAttribute('href'));
        history.pushState(null, '', link.getAttribute('href'));
    });
});

function fetchPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('main.content').innerHTML = data;
        });
}
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prosta walidacja dla pola email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Podaj prawidłowy adres e-mail.');
        e.preventDefault();
    }

    // Sprawdzenie, czy pole wiadomości nie jest puste
    if (message.trim() === '') {
        alert('Wiadomość nie może być pusta.');
        e.preventDefault();
    }
});
