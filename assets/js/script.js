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

            if (accor.classList.contains('active')) {
                accor.classList.remove('active');
                accorFull.style.height = '0px';
            } else {
                document.querySelectorAll('.accor').forEach(function (el) {
                    el.classList.remove('active');
                    el.querySelector('.accor-full').style.height = '0px';
                });
                accor.classList.add('active');
                accorFull.style.height = accorFullContentHeight + 'px';
            }
        });
    }

    accorOpenBtns[0].click();

    // Tabs
    const tabsBtns = document.querySelectorAll('.tabs-btn');
    const tabsContent = document.querySelectorAll('.tabs-content');

    tabsBtns.forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;
            tabsBtns.forEach(function (btn) {
                btn.classList.remove('active')
            });
            e.currentTarget.classList.add('active');
            tabsContent.forEach(function (tabsBtn) {
                tabsBtn.classList.remove('active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('active');
        });
    });


    // Scroll to block
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            // const topOffset = document.querySelector('.scrollto').offsetHeight;
            const topOffset = 170;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // events slider
    const eventsSlider = new Swiper('.events__slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        touchRatio: false,
        spaceBetween: 50,
        navigation: {
            nextEl: '.events__slider-button_next',
            prevEl: '.events__slider-button_prev',
        },
    });

    // partners slider
    const partnersSlider = new Swiper('.partners__slider', {
        slidesPerView: 3,
        touchRatio: false,
        spaceBetween: 50,
        navigation: {
            nextEl: '.partners__slider-button_next',
            prevEl: '.partners__slider-button_prev',
        },
    });

    // tooltips
    let tooltips = document.querySelectorAll('.tooltip');

    for (let i = 0; i < tooltips.length; i += 1) {
        let tooltip = tooltips[i];

        tooltip.addEventListener('click', function () {
            if (tooltip.classList.contains('active')) {
                tooltip.classList.remove('active');
            } else {
                for (let j = 0; j < tooltips.length; j += 1) {
                    tooltips[j].classList.remove('active');
                }
                tooltip.classList.add('active');
            }
        });

        window.addEventListener('click', function (e) {
            const target = e.target;
            if (!target.closest('.tooltip')) {
                tooltip.classList.remove('active');
            }
        });
    }
});