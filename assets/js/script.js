document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-bottom__simplebar").forEach(dropdown => {
        new SimpleBar(dropdown, {
            autoHide: false,
            scrollbarMaxSize: 28,
        });
    });

    const itemsMenuBottom = document.querySelectorAll('.menu-bottom__item-open');

    for (let i = 0; i < itemsMenuBottom.length; i += 1) {
        const itemMenuBottom = itemsMenuBottom[i];

        itemMenuBottom.addEventListener('click', function (el) {
            itemsMenuBottom.forEach(el => {
                if (el != this) {
                    el.classList.remove('active');
                }
            });
            itemMenuBottom.classList.toggle('active');
        });

        window.addEventListener('click', function (e) {
            const target = e.target;
            if (!target.closest('.menu-bottom__item')) {
                itemMenuBottom.classList.remove('active');
            }
        });
    }

    const swiper = new Swiper('.promo__slider', {
        slidesPerView: 1,
        speed: 2000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        effect: "fade",
        touchRatio: false,
    });
});