$(document).ready(function($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // ---- Active
    $('#slider-area').owlCarousel({
            loop: true,
            margin: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    /*items: 1,
                    nav: false,
                    loop: false*/
                    items: 1,
                    nav: false,
                    autoplay: true,
                    autoplayHoverPause: false,
                    autoplaySpeed: 1500,
                    autoplayTimeout: 2000,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: false,
                    autoplay: true,
                    autoplayHoverPause: false,
                    autoplaySpeed: 1500,
                    autoplayTimeout: 2000,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: false,
                    autoplay: true,
                    autoplayHoverPause: false,
                    autoplaySpeed: 1500,
                    autoplayTimeout: 2000,
                    loop: true
                }
            }
        })
        // Owl Next Privew Change
        //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
        //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    /* isotope start */
    $('.portfolio-item').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function() {
        $('portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        })
        return false;
    });



    /* isotope end */

}(jQuery));