// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').
        classList.toggle
        ('window-scrolled', window.
            scrollY > 0);
})

// CONTACT BUTTONS(circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');