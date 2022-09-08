function getHeight(el) {
    return el.offsetHeight;
}

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

    // Accordion
    const accorOpenBtns = document.querySelectorAll('.accor-open');

    for (let i = 0; i < accorOpenBtns.length; i += 1) {
        let accorOpenBtn = accorOpenBtns[i];

        accorOpenBtn.addEventListener('click', function () {
            let accor = accorOpenBtn.closest('.accor');
            let accorFull = accor.querySelector('.accor-full');
            let accorFullContent = accor.querySelector('.accor-full-content');
            let accorFullContentHeight = getHeight(accorFullContent);

            console.log(accorFullContentHeight);

            if (accor.classList.contains('active')) {
                accor.classList.remove('active');
                accorFull.style.height = '0px';
            } else {
                document.querySelectorAll('.accor').forEach(function(el) {
                    el.classList.remove('active');
                    el.querySelector('.accor-full').style.height = '0px';
                });
                accor.classList.add('active');
                accorFull.style.height = accorFullContentHeight + 'px';
            }
        });
    }
});