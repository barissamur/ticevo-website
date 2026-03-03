// AOS init
AOS.init({ duration: 800, once: true, offset: 100 });

// Navbar scroll effect + logo swap
window.addEventListener('scroll', function () {
    var nav = document.getElementById('mainNavbar');
    var logo = document.getElementById('navbarLogo');
    var scrolled = window.scrollY > 50;

    if (nav) {
        nav.classList.toggle('scrolled', scrolled);
    }
    if (logo) {
        logo.src = scrolled ? '/logo.svg' : '/logo-white.svg';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
