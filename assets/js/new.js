$(document).ready(function() {
    $('.thrumbs-images-projects-page').slick({
        slidesToScroll: 3,
        asNavFor: '.main-images-projects-page',
        dots: false,
        variableWidth: true,
        arrows: false,
        focusOnSelect: true,
    });
    
    $('.main-images-projects-page').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.thrumbs-images-projects-page'
    });

    

    
    $('.other-project__content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
        ]
    });
});
