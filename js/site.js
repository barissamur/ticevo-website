// AOS init
AOS.init({ duration: 800, once: true, offset: 100 });

// Navbar scroll effect
window.addEventListener('scroll', function () {
    var nav = document.getElementById('mainNavbar');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
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
