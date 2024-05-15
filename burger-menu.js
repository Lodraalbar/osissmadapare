const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    toggleNav();
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideBurger = burger.contains(event.target);
    
    // Jika pengguna mengklik di luar area navlinks dan hamburger, tutup menu
    if (!isClickInsideNav && !isClickInsideBurger) {
        closeNav();
    }
});

function toggleNav() {
    // Toggle nav-links visibility
    nav.classList.toggle('active');

    // Animate burger icon
    burger.classList.toggle('change');

    // Enable/disable scrolling based on nav-links visibility
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'visible';
}

function closeNav() {
    // Close nav-links and reset burger icon
    nav.classList.remove('active');
    burger.classList.remove('change');

    // Enable scrolling
    document.body.style.overflow = 'visible';
}
