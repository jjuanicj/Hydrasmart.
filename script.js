// Header cambia al hacer scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll suave para los links del menú
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Evitar envío real del formulario (solo demo)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Mensaje enviado (demo). En el proyecto real podrías conectar esto a un backend.');
    });
}
