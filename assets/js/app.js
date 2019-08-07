// $(window).load(function() {
//     $('.main_index').hide();
// });

$(document).ready(function() {
    
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

    $(function(){
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
    });

    $('.proceed_btn').hide();
    $('.proceed_btn').css('visibility','hidden');
    // $('.index-page').hide();
    
    $('.my_btn').click(function(){
        window.location.href='home.php';
        $('.loading_overlay').hide();
        // $('.index-page').show();
        // $('.main_index').show();
        // $('.main_index').fadeIn('slow');
        // $('.owl-gal1').show();
        // $('.owl-gal2').show();
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
        loop:false,
        rewind:true,
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
        loop:false,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots: false,
        smartSpeed: 1500,
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
    $('.middle-content .timeline-div .timeline .container.box').hover(function(){
        $(this).find('p').fadeIn("slow");
        $('.middle-content .timeline-div .timeline .container.box::after').css('transform','scale(1.5)');
    },function(){
        $(this).find('p').fadeOut("slow");
        $(this).find('::after').css('transform','scale(1)');
    });

    $('.middle-content .team-main-div .player-div').hover(function(){
        $(this).find('.player-btn').slideDown('slow');
        $(this).find('.player-img').css('transform', 'scale(1.2)');
    },function(){
        $(this).find('.player-btn').slideUp('fast');
        $(this).find('.player-img').css('transform', 'scale(1)');
    });

    $('.middle-content .lead-main-div .small-card').hover(function(){
        $(this).find('.add').css('-webkit-transform', 'rotate(360deg)');
        $(this).find('.add').css('transform', 'rotate(360deg)');
    },function(){
        $(this).find('.add').css('-webkit-transform', 'rotate(0deg)');
        $(this).find('.add').css('transform', 'rotate(0deg)');
    });

    // var fixedScroll = $('.fixedScroll');

    // fixedScroll.on("scroll", function(e) {
    //     if (this.scrollTop > 147) {
    //         fixedScroll.css('background-attachment', 'fixed');
    //     } else {
    //         fixedScroll.css('background-attachment', 'scroll');
    //     }
    // });

    // $('.main_index').ready(function() {
        
    // });


    $('#profileModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('profile') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-body .lead-profile').val(recipient)
        modal.find('.modal-body p').text(recipient)
        var image = button.data('img')
        modal.find('.modal-body img').attr('src', image)
        var name = button.data('name')
        modal.find('.modal-dialog .modal-header h5').text(name)
        var role = button.data('role')
        modal.find('.modal-dialog .modal-header small').text(role)
    });

    $('#trophyModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('profile') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-body .lead-profile').val(recipient)
        modal.find('.modal-body h4').text(recipient)
        var name = button.data('name')
        modal.find('.modal-dialog .modal-header h5').text(name)
    });

    // $('.photos-tab-content').lightGallery({
    //     subHtmlSelectorRelative: true,
    //     html: true
    // });
    // $('.videos-tab-content').lightGallery({
    //     subHtmlSelectorRelative: true
    // });

    var myLightbox = GLightbox({
        'selector': 'glightbox-demo'
    });

    // $('#pills-statistics-tab').click(function() {
    //     $('.stats h1').each(function () {
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 5500,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // });

    var a = 0;
    $(window).scroll(function() {

        var oTop = $('.stats-container').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.stats .stats-content h1').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },

                {

                duration: 3000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

                });
            });
            a = 1;
        }
    });

    $('#signup').click(function() {
        $('.login-modal').modal('hide');
        $('.join-modal').modal('show');
    });
    $('#login').click(function() {
        $('.join-modal').modal('hide');
        $('.login-modal').modal('show');
    });

    $("#register-user").click( function() {
        $.post ( 
            $(".register-form").attr("action"), 
            $(".register-form :input").serializeArray(), 
            function(info){ $(".join-modal .feedback").html(info); 
            $(".register-form .clr").each( function() {
                $(this).val('');
            });
        });
    });
        
    $(".register-form").submit( function() {
        $('.feedback').delay(3500).fadeOut();
        return false;
    });

    $("#auth-user").click( function() {
        $.post ( 
            $(".login-form").attr("action"), 
            $(".login-form :input").serializeArray(), 
            function(info){ $(".display .name").html(info); 
            $(".login-form .clr").each( function() {
                $(this).val('');
            });
            // $('.login-modal').delay(2000).modal('hide');
            location.reload();
        });
    });

    $(".login-form").submit( function() {
        $('.feedback').delay(3500).fadeOut();
        return false;
    });

    $('#log-out').click(function() {
        $.ajax({
            url: 'inc/logout.php',
            type: 'get',
            data: {
                action: 'logout'
            },
            success: function()
            {
                location.reload();
            }
        });
    })

    $('[data-toggle="tooltip"]').tooltip();

    $('.va_btn').click(function() {
        var action = "fetch";
        var album_id =  $(this).attr('data-id');
        $.ajax({
            url: 'images.php',
            method: 'POST',
            data:{
                action: action,
                album_id: album_id
            },
            success: function(data) {
                $('#imgModal .modal-dialog .modal-body').html(data);
            }
        });
    });

    $('.new_card').hide();
    var x = 4;
    $('.new_card').slice(0, 4).show();
    $('#loadMore').click(function () {
        $('.new_card').slice(0, x + 4).slideDown();
    });

    $('.new_card2').hide();
    var x = 4;
    $('.new_card2').slice(0, 4).show();
    $('#loadMore2').click(function () {
        $('.new_card2').slice(0, x + 4).slideDown();
    });

    $('#subscribe').click(function() {
        var email = $('#visitor_email').val();
        if (email == null || email == '') {
            $('.footer-div .feedback').fadeIn();
            $('.footer-div .feedback').html('<div class="alert alert-danger text-center scifly">Email Is Required</div>');
            $('#visitor_email').val('');
            setTimeout(function(){
                $('.footer-div .feedback').html('');
                $('.footer-div .feedback').fadeOut();
            }, 3000)
        } else {
            $.ajax({
                url: 'inc/subscribe.php',
                method: 'POST',
                data: {
                    email: email
                },
                success: function(response) {
                    $('.footer-div .feedback').fadeIn();
                    $('.footer-div .feedback').html(response);
                    $('#visitor_email').val('');
                    setTimeout(function() {
                        $('.footer-div .feedback').html('');
                        $('.footer-div .feedback').fadeOut();
                    }, 3000)
                }
            });
        }
    });

    $('#subscribeform').submit(function() {
        var email = $('#visitor_email').val();
        if (email == null || email == '') {
            $('.footer-div .feedback').fadeIn();
            $('.footer-div .feedback').html('<div class="alert alert-danger text-center scifly">Email Is Required</div>');
            $('#visitor_email').val('');
            setTimeout(function(){
                $('.footer-div .feedback').html('');
                $('.footer-div .feedback').fadeOut();
            }, 3000)
        } else {
            $.ajax({
                url: 'inc/subscribe.php',
                method: 'POST',
                data: {
                    email: email
                },
                success: function(response) {
                    $('.footer-div .feedback').fadeIn();
                    $('.footer-div .feedback').html(response);
                    $('#visitor_email').val('');
                    setTimeout(function() {
                        $('.footer-div .feedback').html('');
                        $('.footer-div .feedback').fadeOut();
                    }, 3000)
                }
            });
        }
    });

    $('#filterbycompetition').change(function() {
        var comp = $(this).val();
        if (comp == 'all') {
            $('.all').show('slow');
        } else {
            $('.fil' + comp).siblings().hide('slow');
            $('.fil' + comp).show('slow');    
        }
    });

    $('#filbycompetition').change(function() {
        var comp = $(this).val();
        var season = $('#filbyseason').val();
        if (comp == 'all') {
            $('.all').show('slow');
        } else {
            $('.fil' + comp + season).siblings().hide('slow');
            $('.fil' + comp + season).show('slow');    
        }
    });

    $('#filbyseason').change(function() {
        var comp = $(this).val();
        var season = $('#filbyseason').val();
        if (comp == 'all') {
            $('.all').show('slow');
        } else {
            $('.fil' + comp + season).siblings().hide('slow');
            $('.fil' + comp + season).show('slow');    
        }
    });

    $("#match_details_card").height($("#score_details").outerHeight(true) + 80);
    // var child_height = $('#headline_score_details').height();
    // alert(child_height);
    $('.middle-content .timeline-div .timeline::after').height($('.timeline-div.fixedScroll').outerHeight(true) - 100);
    
});
