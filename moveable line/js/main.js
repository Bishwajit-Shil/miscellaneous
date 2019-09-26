(function($) {



    $(document).ready(function() {
        $(window).trigger("resize");
       
        owlCarouselSetup();

    });
    /*--------------------------------------------------------------
        6. Owl Carousel
    --------------------------------------------------------------*/

    function owlCarouselSetup() {

        /* Owl Carousel For Partner Logo */
        $('.clients').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            navText:false,
            autoplay:true,
            smartSpeed:400,
            autoplayTimeout:1000,
            responsive:{
                0:{
                    items:2
                },
                100:{
                    items:3
                },
                200:{
                    items:4
                },
                300:{
                    items:5
                }
            }
        });

    }

   



   
})(jQuery); // End of use strict