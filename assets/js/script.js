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

    const promoSlider = new Swiper('.promo__slider', {
        slidesPerView: 1,
        speed: 2000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        effect: "fade",
        touchRatio: false,
    });

    new Choices('.select', {
        searchEnabled: false,
    });

    const gallerySlider = new Swiper('.gallery__slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        touchRatio: false,
        navigation: {
            nextEl: '.slider-gallery__button-next',
            prevEl: '.slider-gallery__button-prev',
        },
        pagination: {
            el: '.slider-gallery__pagination',
            type: 'fraction',
        },
    });
});