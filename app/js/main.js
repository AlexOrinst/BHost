$(function () {
    $('.header__body-slider-items').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider__arrow-left icon-angle-left"></button>',
        nextArrow: '<button type="button" class="slider__arrow-right icon-angle-right"></button>'
    });

    $('.pricing__slider').slick({
        dots: true,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider__arrow-left icon-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="slider__arrow-right icon-long-arrow-right"></button>'
    });

});

