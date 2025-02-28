const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

var swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: null, // Disables next button
        prevEl: null  // Disables previous button
    },
});

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Enables infinite loop
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 10000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after manual interaction
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});