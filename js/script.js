$(document).ready(function() {
    $('.comments__carousel').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        speed:1000,
        centerMode:true,
        responsive: [
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    arrows:false,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                }
            }
        ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list-active');
    });
});