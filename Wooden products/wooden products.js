const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
   

});

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const navBody = document.querySelector('.nav__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        navBody.classList.toggle('_active');
    });
}

const date = document.querySelector('.date')

let today = new Date();
let year = today.getFullYear();

date.textContent = year


