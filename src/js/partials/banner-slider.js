// ====================
// Project:
// 26-10-2018: FedorVinecky
// ---------------------
// описание скрипта
// ====================

$('.js-sl-main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
})

/// sl card

$('.js-sl-card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.js-sl-card-bot'
})

$('.js-sl-card-bot').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-sl-card',
    dots: false,
    arrows: false,
    focusOnSelect: true
})