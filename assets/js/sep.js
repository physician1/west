// $('.loading_overlay').ready(function() {
            
// });

// $(window).load(function() {
//     $('.main_index').hide();
// });

$(window).load(function() {
    
    $('#validationform').parsley();

    jQuery("time.timeago").timeago();

    // var el = $('.main_index'),
    // inited = false;

    // el.appear({ force_process: true });

    // el.on('appear', function() {
    // if (!inited) {
    //     $('#circle').circleProgress({
    //         value: 1,
    //         size: 80,
    //         fill: {
    //         gradient: ["white", "white"]
    //         },
    //         animation: { 
    //             duration: 2500, 
    //             easing: "circleProgressEasing" } ,
    //         thickness: 3,
    //     }).on('circle-animation-progress', function(event, progress) {
    //         $(this).find('.circle-inner').html(Math.round(100 * progress) + ' <i>%</i>');
    //     }).on('circle-animation-end', function(event, progress) {
    //         $(this).css('visibility','hidden');
    //         $('.proceed_btn').css('visibility','visible');
    //         $('.proceed_btn').show();
    //     });
    //     inited = true;
    // }
    // });

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
           scrollTop: $(this.hash).offset().top - 300
        }, 1200);
    });

        $('#circle').circleProgress({
            value: 1,
            size: 80,
            fill: {
            gradient: ["white", "white"]
            },
            animation: { 
                duration: 2500, 
                easing: "circleProgressEasing" } ,
            thickness: 3,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(100 * progress) + ' <i>%</i>');
        }).on('circle-animation-end', function(event, progress) {
            $(this).css('visibility','hidden');
            $('.proceed_btn').css('visibility','visible');
            $('.proceed_btn').show();
        });

    $('.proceed_btn').hide();
    $('.proceed_btn').css('visibility','hidden');
    // $('.index-page').hide();
    
    $('.my_btn').click(function(){
        window.location.href='home.php';
    //     $('.loading_overlay').hide();
    //     $('.index-page').show();
    //     $('.main_index').show();
    //     $('.main_index').fadeIn('slow');
    //     $('.owl-gal1').show();
    //     $('.owl-gal2').show();
    });

    $('.tile-desc').hide();

    $('.item').hover(function(){
        $(this).find('.tile-desc').show('slow');
        $(this).find('.tile-img').css('transform', 'scale(1.2)');
    },function(){
        $(this).find('.tile-desc').hide('fast');
        $('.tile-img').css('transform', 'scale(1)');
    });

    // $('.left-btn').hide();

    // $('.shop-btn').hover(function(){
    //     // $(this).find('.left-btn').show('slow');
    //     $(this).find('.right-btn').css('translate',);
    // },function(){
    //     $(this).find('.right-btn').show('slow');
    //     $(this).find('.left-btn').hide();
    // });

    $('.owl-hero').owlCarousel({
        loop:true,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
        margin: 0,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    var sync2 = $('.owl-gal2'),
    sync1 = $('.owl-gal1');

    // Sync nav
    sync2.on('click', '.owl-next', function () {
        sync1.trigger('next.owl.carousel')
    });
    sync2.on('click', '.owl-prev', function () {
        sync1.trigger('prev.owl.carousel')
    });

    $('.owl-gal1').owlCarousel({
        autoWidth:true,
        loop:true,
        nav:false,
        dots: false,
        margin: 0,
        autoplay: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    $('.owl-gal2').owlCarousel({
        autoWidth:true,
        loop:true,
        rtl:true,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
        margin: 0,
        autoplay: true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    $('.owl-honours').owlCarousel({
        loop:true,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            850:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            },
            1700:{
                items:5
            }
        }
    });
    $('.owl-phobia-news').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
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
    $('.owl-livescore').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
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
