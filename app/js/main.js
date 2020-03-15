$(function () {
    $('.header__body-slider-items').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider__arrow-left icon-angle-left"></button>',
        nextArrow: '<button type="button" class="slider__arrow-right icon-angle-right"></button>'
    });
});