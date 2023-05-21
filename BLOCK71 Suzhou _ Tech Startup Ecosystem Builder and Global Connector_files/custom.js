function whenAvailable(name, callback) {
    var interval = 100; // ms
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            whenAvailable(name, callback);
        }
    }, interval);
}
var webrootpath = window.location.origin;
if(webrootpath.includes('ranosys.net')){
    jQuery('.fa-dingding').append('<img style="width:1em" src="'+webrootpath+'/client/block71_suzhou/sites/default/files/2021-09/dingding.png">');
}else{
    jQuery('.fa-dingding').append('<img style="width:1em" src="'+webrootpath+'/sites/default/files/2021-09/dingding.png">');
}


/************************** For Contact form fields   ***********************/
jQuery(window).on("load", function () {
    if (window.location.href.includes('edit[submitted][category]=event')) {
        jQuery('.isevent').removeClass('d-none');
        jQuery('.isevent input').attr('required', 'required').attr('aria-required','true');
        jQuery('.isevent select').attr('required', 'required').attr('aria-required','true');
        jQuery('.isevent textarea').attr('required', 'required').attr('aria-required','true');
        jQuery('.event-msg').addClass('d-none');
        jQuery("#edit-category option[value!='event']").remove();
    }else{
        jQuery("#edit-category option[value='event']").remove();	
        jQuery('.event-msg textarea').attr('required','required').attr('aria-required','true');
    }
});
/**********************  END contact form fields alter *********************/


jQuery(function ($) {
    if ($('#toolbar-administration').length > 0) {
        $('#main-nav').css('padding-top', '75px');
    }
    // $('.dropdown a').addClass('dropdown-toggle');
    // $('.sub-menu').children().removeClass('dropdown-toggle');
    // $('#main-menu li ul').removeClass('menu').addClass('dropdown-menu');
    // $('.dropdown-menu').children().removeClass('menu__item is-leaf first leaf').addClass('sub-menu');
    // $('.footer-navigation ul:first-child').addClass('d-flex flex-row pl-0');
    // $('.footer-navigation ul:first-child li').removeClass('menu__item is-expanded first expanded').addClass('footer-nav-parent');
    // $('.footer-nav-parent ul').addClass('foot-nav-child d-flex flex-column pl-0');
    // $('.footer-navigation ul.footer-bottom ul').removeClass('foot-nav-child flex-column').addClass('pl-0 d-flex flex-wrap flex-row');
    // $('.footer-navigation ul.footer-bottom li').removeClass('footer-nav-parent');
    var path = window.location.href.split('?')[0];
    $('#theme-main-menu a').each(function () {
        var href = this.href.split('?')[0];
        if (href === path) {
            $(this).addClass('active');
            $(this).closest("li").closest("ul").closest('li').find('a:first').addClass('active')
        }
    });
    $('.top-navigation .region-topbar a').each(function () {
        var href = this.href.split('?')[0];
        var path1 = window.location.href;
        if (path1 === href && href == 'https://singapore.block71.co/dashboard') {
            $(this).addClass('active');
            $(this).closest("li").addClass('active')
        }
    });
    if ($('div.footer-nav-parent.adddress-sec').length > 0) {
        var address = $("div.footer-nav-parent.adddress-sec").html();
        $(".footer-navigation .footer-upper-part ul:first").append('<li class="footer-nav-parent adddress-sec">' + address + '</li>')
    }
    if ($('form.event-organize').length > 0 || $('form.incubator_apply').length > 0) {
        $(this).find("select").each(function () {
            if (!($(this).hasClass("hour") || $(this).hasClass("day")))
                $(this).wrap("<div class='custom-select'></div>")
        })
    }
    $('.form-item-mergevars-EMAIL input').removeClass('required').prop('required', !0);
    $(".form-item-mergevars-EMAIL input").prop("type", "email");
    $('.form-item-mergevars-FNAME input').removeClass('required').prop('required', !0);
    if ($('.page-node-add-room-booking .renew-site #room-booking-node-form').length > 0) {
        $('.page-node-add-room-booking .renew-site #room-booking-node-form').wrap("<section class='container user-room-booking-page'></section>")
    }
    if ($('.page-room-bookings .panels-flexible-region-inside').length > 0) {
        $('.page-room-bookings .panels-flexible-region-inside').wrap("<section class='container user-room-booking-page'></section>")
    }
    if ($('.page-node-edit #room-booking-node-form').length > 0) {
        $('.page-node-edit #room-booking-node-form').wrap("<section class='container user-room-booking-edit-page'></section>")
    }
    if ($('.node-type-event-reservation .node-unpublished').length > 0) {
        $('.node-type-event-reservation .node-unpublished').wrap("<div class='container'></div>")
    }
    if ($('.page-user-password #user-pass').length > 0) {
        $('.page-user-password #user-pass').wrap("<section class='container user-pass-page'></section>")
    }
    if ($('.page-node-79 .node-79 .field-type-text-with-summary').length > 0) {
        $('.page-node-79 .node-79 .field-type-text-with-summary').wrap("<section class='container'></section>")
    }
    if ($('.page-node-160 .node-160 .field-type-text-with-summary').length > 0) {
        $('.page-node-160 .node-160 .field-type-text-with-summary').wrap("<section class='container'></section>")
    }
    if ($('.page-events-create.admin-menu .node-event-form').length > 0) {
        $('.page-events-create.admin-menu .node-event-form').wrap("<section class='container'></section>")
    }
    if ($('.page-user-edit #user-profile-form').length > 0) {
        $('.page-user-edit #user-profile-form').wrap("<section class='container'></section>")
    }
    if ($('.page-batch #progress').length > 0) {
        $('.page-batch #progress').wrap("<section class='container'></section>");
        $(".page-batch #progress").before("<p>Please don't refresh your page. <br><span>Download In Progress..</span></p>");
    }
    // new WOW().init();
    // $(function() {
    //     if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
    //         $('html').addClass('ie11')
    //     }
    // });
    if (window.location.pathname == "/node/add/business-application") {
        var string1 = window.location.href;
        string1 = string1.split('edit[title]=')[1];
        string2 = string1.split('&edit[field_name]')[0];
        string3 = decodeURI(string2);
        string3 = string3.split(" ");
        titleArray = new Array();
        for (var i = 3; i < string3.length - 3; i++) {
            titleArray.push(string3[i]);
            if (i != string3.length - 1) {
                titleArray.push(" ")
            }
        }
        projectTitle = titleArray.toString();
        projectTitle = projectTitle.replace(/[,]/gi, '');
        $('#edit-field-business-und-0-target-id').val(projectTitle)
    }

    $(window).on("load", function () {
        $('#mailchimp-signup-subscribe-block-newsletter-signup-form').children().addClass('mailchamp-form d-flex');
        $('#mailchimp-signup-subscribe-block-newsletter-signup-form').find('input').addClass('form-control');
        $('#mailchimp-signup-subscribe-block-newsletter-signup-form').find('input[type="submit"]').addClass('btn g-btn g-filled-btn').removeClass('form-control');
        $("#edit-mergevars-fullname").addClass('required').attr('placeholder', 'FULL NAME');
        var localpopup_storage = localStorage.getItem('popup_message');
        if (localpopup_storage == 'submission-successful' && $('.messages').length > 0) {
            $('.messages').addClass('hidden');
            var content = $('.messages').text();
            if ($('.messages').hasClass('messages--warning')) {
                swal({
                    type: 'warning',
                    title: '',
                    text: 'You have already subscribed.',
                    showConfirmButton: !0,
                    className: 'orange'
                }, function (isConfirm) {
                    if (isConfirm) {
                        localStorage.removeItem('popup_message')
                    }
                })
            } else {
                swal({
                    type: 'success',
                    title: '',
                    text: 'Kindly check your email to complete the subscription process.',
                    showConfirmButton: !0,
                    className: 'orange'
                }, function (isConfirm) {
                    if (isConfirm) {
                        localStorage.removeItem('popup_message')
                    }
                })
            }
        } else {
            if ($('.messages').length > 0 && $('.latest-news-section .mailchimp-signup-subscribe-form').length > 0) {
                $(".messages").appendTo("#mailchimp-signup-subscribe-block-newsletter-signup-form");
                $(".mailchimp-signup-subscribe-form .messages").attr('id', 'mailchimp-error-message');
                $(".column .messages:first-child").remove();
                $('html, body').animate({
                    scrollTop: $(".latest-news-section").offset().top
                }, 1000)
            }
            localStorage.removeItem('popup_message')
        }
    });
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("#main-nav").addClass("nav-shrink")
        } else {
            $("#main-nav").removeClass("nav-shrink")
        }
        Drupal.behaviors.myBehavior = {
            attach: function (context, settings) {
                var retrievedClassName = localStorage.getItem('activeClass');
                if (retrievedClassName == "active") {
                    //add active class to your element
                }
                $("#block-views-block-members-user-block-3 .js-form-type-radio").bind('click', function () {
                    $("#block-views-block-members-user-block-3 .js-form-type-radio").removeClass("active");
                    $(this).addClass("active");
                    localStorage.setItem('activeClass', "active");
                });

                // jQuery('#block-views-block-members-user-block-3 .js-form-type-radio').click(function(e) {
                //     // e.preventDefault();
                //     jQuery('#block-views-block-members-user-block-3 .js-form-type-radio').removeClass('active');
                //     jQuery(this).addClass('active');
                // });
            }
        };
        // Drupal.behaviors.myBehavior = {
        //   attach: function (context, settings) {  
        // $(" .main-navigation #block-custom-main-navigation > ul ").addClass(" top-navbar nav navbar-nav d-flex");
        // $(" .main-navigation #block-custom-main-navigation > ul > li ").addClass("dropdown");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > a").addClass("dropdown-toggle");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul ").addClass("dropdown-menu");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul > li ").addClass("sub-menu");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul > li > a ").addClass("menu__link dropdown-toggle");
        //   }
        // };
    });
});
jQuery(function ($) {
    $('.menu-close, #main-navigation').on('click', function () {
        $('#main-navigation').removeClass('active', 3000)
    });
    $('.navbar-toggle').on('click', function () {
        $('#main-navigation').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false')
    });

    function mediaSize() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.renew-site .b71--navbar-right .navbar-nav li.dropdown a').unbind('click').bind('click', function () {
                $(this).next('ul').toggleClass('dw-active');
                if ($(this).parent('li.dropdown').hasClass("open")) {
                    $(this).parent('li.dropdown').removeClass("open")
                } else {
                    $('.navbar-nav li.dropdown').removeClass("open");
                    $(this).parent('li.dropdown').addClass("open")
                }
                if ($(this).closest("li").find("ul").length)
                    return !1
            })
        }
    }

    mediaSize();
    window.addEventListener('resize', mediaSize, !1);
    var a = 0;
    $(window).scroll(function () {
        var counter1 = $('#counter');
        if (counter1.length) {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum))
                        },
                        complete: function () {
                            $this.text(this.countNum)
                        }
                    })
                });
                a = 1
            }
        }
    });
/************* For Tabing on Members Page *************/
    jQuery('a.btn-tab').on('click',function(e){
        e.preventDefault();
        jQuery('a.btn-tab').removeClass('g-filled-btn').addClass('g-outline-btn');
        jQuery(this).removeClass('g-outline-btn').addClass('g-filled-btn');

        var btnlink = jQuery(this).attr('data-tab');
        jQuery('section.tab-section').addClass('d-none');
        jQuery("section."+btnlink).removeClass('d-none');
    });


    //     $('.data-digit').each(function() {
    //         $(this).prop('Counter', 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 4000,
    //             easing: 'swing',
    //             step: function(now) {
    //                 $(this).text(Math.ceil(now))
    //             }
    //         })
    //     });
    //     $('#mailchimp-signup-subscribe-block-newsletter-signup-form').children().addClass('mailchamp-form d-flex');
    //     $('#mailchimp-signup-subscribe-block-newsletter-signup-form').find('input').addClass('form-control');
    //     $('#mailchimp-signup-subscribe-block-newsletter-signup-form').find('input[type="submit"]').addClass('btn g-btn g-filled-btn').removeClass('form-control')
    // });
    // $("#mailchimp-signup-subscribe-block-topbar-subscribe-popup-form").submit(function(event) {
    //     localStorage.setItem("popup_message", "submission-successful")
    // })


    $(document).ready(function () {
        $('#edit-company-details .fieldset-legend').click(function () {
            $('#edit-company-details').toggleClass("collapsed", 1000);
        });
    });
    $(document).ready(function () {
        $('#edit-personal-details .fieldset-legend').click(function () {
            $('#edit-personal-details').toggleClass("collapsed", 1000);
        });
    });

    // jQuery(window).on('load',function(){
   jQuery(document).ready(function () {
        if($('#home-slider').length>0){
         //   whenAvailable("owlCarousel", function(t) {
                // do something
                $('#home-slider').owlCarousel({
                    loop: !0,
                    autoplay: !0,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: !0,
                    margin: 0,
                    responsiveClass: !0,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        600: {
                            items: 1,
                            nav: !1
                        },
                        1000: {
                            items: 1,
                            nav: !1,
                            loop: !1
                        }
                    }
                });
         //   });
        }
    });
    $(document).ready(function () {
        // $(" .main-navigation #block-custom-main-navigation > ul ").addClass(" top-navbar nav navbar-nav d-flex");
        // $(" .main-navigation #block-custom-main-navigation > ul > li ").addClass("menu__item is-expanded first expanded dropdown");
        // $(" .main-navigation #block-custom-main-navigation > ul > li ").addClass("dropdown");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > a").addClass("dropdown-toggle");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul ").addClass("dropdown-menu");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul > li ").addClass("sub-menu");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul > li > a ").addClass("menu__link dropdown-toggle");
        // $(" .main-navigation #block-custom-main-navigation > ul > li > ul > li > a ").addClass("sub-menu");

        // $(".footer-navigation #block-custom-footer--2 > ul ").addClass("menu d-flex flex-row pl-0");
        // $(".footer-navigation #block-custom-footer--2 > ul > li ").addClass("footer-nav-parent");
        // $(".footer-navigation #block-custom-footer--2 > ul > li > ul > li ").addClass("is-leaf leaf footer-nav-parent");
        $("h2#block-custom-footer--2-menu").unwrap();


        if (jQuery('#toolbar-administration').length > 0) {
            jQuery('#main-nav').css('height', '190px');
        }
    });

});
if ( window.location.pathname == '/' || window.location.pathname == '/client/block71_suzhou/en' ||  window.location.pathname == '/client/block71_suzhou/cn' ){
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}


////////////////////////////////
