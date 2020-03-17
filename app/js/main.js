$(function () {
    $('.header__body-slider-items').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider__arrow-left icon-angle-left"></button>',
        nextArrow: '<button type="button" class="slider__arrow-right icon-angle-right"></button>'
    });

    // $(".checkboxes input").on("click", function () {
    //     if ($(".checkboxes input:checked").length >= 1) {// Не больше 2-х checkbox
    //         $(".checkboxes input:not(:checked)").attr("disabled", true);
    //     } else {
    //         $(".checkboxes input:disabled").attr("disabled", false);
    //     }

    // });
});