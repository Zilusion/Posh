const navButton = document.querySelector('.header__menu-button');
const nav = document.querySelector('.header__nav');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

const navLinks = document.querySelectorAll('.header__link');

for (const link of navLinks) {
    link.addEventListener('click', () => {
        navButton.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 576) {
        navButton.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});
