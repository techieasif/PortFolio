/*********************************************************

 Template Name:  MEHUL - Personal Portfolio Template
 Author: MouriThemes
 Version: 1.0
 Design and Developed by: MouriThemes

 NB: This is the custom JQuery file of this theme.

 ***********************************************************/


$(document).ready(function () {
    'use strict';

    /*=========== PAGE LOADER JS ===========*/

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 2000);

    /*=========== STICKY NAV JS ===========*/

    $(".navigation-area").sticky({
        topSpacing: 0,
    });


    /*=========== SMOOTH SCROLL JS ===========*/

    $('a.smoth-scroll,a.btn-1,a.btn-2').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1000);
        e.preventDefault();
    });

    /*=========== MENU HIDES AFTER CLICK (MOBILE MENU) ===========*/

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    /*=========== WOW JS ===========*/

    new WOW().init();

    /*=========== ANIMATED HEADLINE JS ===========*/

    $('.header-text').animatedHeadline({
        animationType: 'clip'
    });

    /*=========== COUNTER UP JS ===========*/

    $('.counter').counterUp({
        delay: 30,
        time: 4000
    });

    /*=========== PORTFOLIO FILTER JS ===========*/

    $('#container').imagesLoaded( function() {

        $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            transitionDuration: '0.8s',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        })
    });

    /*=========== MAGNIFIC POPUP JS ===========*/

    $('.imgs-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*=========== TESTIMONIAL CAROUSEL JS ===========*/

    $("#testimonial-slider").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


});