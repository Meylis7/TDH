// News page slider 

$(document).ready(function () {
    $('.slider__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: false,
        autoplaySpeed: 3000,
        asNavFor: '.slider__mini',

    });
    $('.slider__mini').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        asNavFor: '.slider__big',
        dots: false,
        vertical: true,
        centerMode: true,
        focusOnSelect: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        arrows: false,
        prevArrow: false,
        nextArrow: false,
        mobileFirst: true,
    });

    // slide show

    $(".slide_inner").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,

        infinite: true,
        speed: 2000,
        fade: false,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

    // Test


    $(".test_slider").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: true,
        nextArrow: true,
        autoplay: false,
        autoplaySpeed: 2000,

        infinite: true,
        speed: 2000,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

    // var multipleAsideCount = document.querySelectorAll('.multiple_item').length;


    // $('.multiple_main').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     fade: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     asNavFor: '.multiple_aside',

    // });

    // $(".multiple_aside").slick({
    //   slidesToShow: multipleAsideCount > 3 ? 4 : 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.multiple_main',
    //     dots: false,
    //     autoplay: multipleAsideCount > 3 ? true : false,
    //     vertical: true,
    //     centerMode: true,
    //     centerPadding: 0,
    //     focusOnSelect: true,
    //     verticalSwiping: true,
    //     adaptiveHeight: true,
    //     arrows: false,
    //     prevArrow: false,
    //     nextArrow: false,
    //     mobileFirst: true,

    // });

});

//  foreign ======================================

$(".foreign__box").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4500,
    pauseOnHover: false,

    infinite: true,
    speed: 1000,
    fade: false,
    draggable: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

});

//  Colleag ======================================

$(".colleag_slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4500,
    pauseOnHover: false,

    infinite: true,
    speed: 1000,
    fade: false,
    draggable: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

});

$(".web_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4500,
    pauseOnHover: false,

    infinite: true,
    speed: 1000,
    fade: false,
    draggable: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

});

$(".web_slider-2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4500,
    pauseOnHover: false,

    infinite: true,
    speed: 1000,
    fade: false,
    draggable: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

});



// $(".modal_gal-box").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: false,
//     dots: false,
//     autoplaySpeed: 4500,
//     pauseOnHover: false,

//     infinite: true,
//     speed: 1000,
//     fade: false,
//     draggable: true,
//     lazyLoad: 'ondemand',

// });