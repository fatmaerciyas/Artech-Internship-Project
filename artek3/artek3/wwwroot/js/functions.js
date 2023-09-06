/* ===================================
    About
====================================== */

/*---------------------------------------------------------------------
    Theme Name: Trax
    Theme URI:
    Author: Themes Industry
    Author URI:
    Description: One Page , Multi Parallax Template
    Tags: one page, multi page, multipurpose, parallax, creative, html5

 ----------------------------------------------------------------------*/

//PAGE LOADER
jQuery(window).on("load", function () {
    "use strict";
    jQuery(".loader").fadeOut(800);
    jQuery('.side-menu').removeClass('opacity-0');
	jQuery('.floatck').each(function(   ){
		var $this = jQuery(this);
		var dem = $this.find('div.maximenuck2:last').index();
		if (dem >0 ){
			$this.addClass('btmegamenu').parent().addClass('btmegamenu');
		}else if (dem == 0){
			$this.addClass('dropdown').parent().addClass('dropdown');
		}
	});  
	jQuery('.nav-item a').addClass('nav-link'); 
	jQuery('.floatck.btmegamenu div.maximenuck2').addClass('col-lg-3 col-md-6');
});


jQuery($=> {
    "use strict";
    let $window = jQuery(window);
    let body = jQuery("body");
    let $root = jQuery("html, body");
    jQuery('[data-toggle="tooltip"]').tooltip();
 
    /*rating stars*/
    let fadeInStar = () => {
        let starItem = jQuery('#rattingIcon .fa-star.fas');
        starItem.addClass('scale-star');
        setTimeout(function () {
            starItem.removeClass('scale-star');
        }, 180);
    }
    let ratingText = jQuery('#ratingText');

    let fadeInStarText = n => {
        ratingText.addClass('scale-price');
        setTimeout(function () {
            ratingText.removeClass('scale-price');
            switch (n) {
                case 0:
                    ratingText.text('Poor!');
                    break;
                case 1:
                    ratingText.text('Average!');
                    break;
                case 2:
                    ratingText.text('Good!');
                    break;
                case 3:
                    ratingText.text('Very Good!');
                    break;
                case 4:
                    ratingText.text('Excellent!');
            }
        }, 180);
    }

    jQuery("#rattingIcon .fa-star").on('click', function () {
        let iconIndex = jQuery(this).index();
        jQuery(this).addClass("fas").removeClass("far");
        jQuery(this).prevAll().addClass("fas").removeClass("far");
        jQuery(this).nextAll().addClass("far").removeClass("fas");
        fadeInStar();
        fadeInStarText(iconIndex);
    });


    /* ----- Back to Top ----- */
    jQuery(body).append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
    let amountScrolled = 700;
    let backBtn = jQuery("a.back-top");
    $window.on("scroll", function () {
        if ($window.scrollTop() > amountScrolled) {
            backBtn.addClass("back-top-visible");
        } else {
            backBtn.removeClass("back-top-visible");
        }
    });
    backBtn.on("click", function () {
        $root.animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    /* ------- Smooth scroll ------- */
    jQuery("a.pagescroll").on("click", function (event) {
        event.preventDefault();
        let action = jQuery(this.hash).offset().top;
        if(jQuery(this).hasClass('scrollupto')){
            action-=45;
        }
        jQuery("html,body").animate({
            scrollTop: action
        }, 1200);
    });

    /* ------- navbar menu Position dynamically ------- */
    jQuery(".dropdown").on("mouseenter", function () {
        let $elem = jQuery(this).find('.dropdown-menu'),
            left = $elem.offset().left,
            width = $elem.width(),
            docW = jQuery(window).width();

        if ((left + width) > docW) {
            $elem.addClass("right-show");
        } else if ((left + (width * 2)) < docW) {
            $elem.removeClass("right-show");
        }
    });

    /*------ Sticky MENU Fixed ------*/
    let headerHeight = jQuery("header").outerHeight();
    let navbar = jQuery("nav.navbar");
    if (navbar.not('.fixed-bottom').hasClass("static-nav")) {
        $window.scroll(function () {
            let $scroll = $window.scrollTop();
            let $navbar = jQuery(".static-nav");
            let nextSection = jQuery(".section-nav-smooth");
            if ($scroll > 250) {
                $navbar.addClass("fixedmenu");
                nextSection.css("margin-top", headerHeight);
            } else {
                $navbar.removeClass("fixedmenu");
                nextSection.css("margin-top", 0);
            }
            if ($scroll > 125) {
                jQuery('.header-with-topbar nav').addClass('mt-0');
            } else {
                jQuery('.header-with-topbar nav').removeClass('mt-0');
            }
        });
        jQuery(function () {
            if ($window.scrollTop() >= jQuery(window).height()) {
                jQuery(".static-nav").addClass('fixedmenu');
            }
        })
    }
    if (navbar.hasClass("fixed-bottom")) {
        let navTopMargin = jQuery(".fixed-bottom").offset().top;
        let scrollTop = $window.scrollTop();
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() > navTopMargin) {
                jQuery('.fixed-bottom').addClass('fixedmenu');
            } else {
                jQuery('.fixed-bottom').removeClass('fixedmenu');
            }
            if (jQuery(window).scrollTop() < 260) {
                jQuery('.fixed-bottom').addClass('menu-top');
            } else {
                jQuery('.fixed-bottom').removeClass('menu-top');
            }
        });
        jQuery(function () {
            if (scrollTop < 230) {
                jQuery('.fixed-bottom').addClass('menu-top');
            } else {
                jQuery('.fixed-bottom').removeClass('menu-top');
            }
            if (scrollTop >= jQuery(window).height()) {
                jQuery('.fixed-bottom').addClass('fixedmenu');
            }
        })
    }
    /*Menu Onclick*/
    let sideMenuToggle = jQuery("#sidemenu_toggle");
    let sideMenu = jQuery(".side-menu");
    if (sideMenuToggle.length) {
        sideMenuToggle.on("click", function () {
            jQuery("body").addClass("overflow-hidden");
            sideMenu.addClass("side-menu-active");
            jQuery(function () {
                setTimeout(function () {
                    jQuery("#close_side_menu").fadeIn(300);
                }, 300);
            });
        });
        jQuery("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function () {
            jQuery("body").removeClass("overflow-hidden");
            sideMenu.removeClass("side-menu-active");
            jQuery("#close_side_menu").fadeOut(200);
            jQuery(() => {
                setTimeout(() => {
                    jQuery('.sideNavPages').removeClass('show');
                    jQuery('.fas').removeClass('rotate-180');
                }, 400);
            });
        });
        jQuery(document).keyup(e => {
            if (e.keyCode === 27) { // escape key maps to keycode `27`
                if (sideMenu.hasClass("side-menu-active")) {
                    jQuery("body").removeClass("overflow-hidden");
                    sideMenu.removeClass("side-menu-active");
                    jQuery("#close_side_menu").fadeOut(200);
                    $tooltip.tooltipster('close');
                    jQuery(() => {
                        setTimeout(()=> {
                            jQuery('.sideNavPages').removeClass('show');
                            jQuery('.fas').removeClass('rotate-180');
                        }, 400);
                    });
                }
            }
        });
    }

    /*
     * Side menu collapse opener
     * */
    jQuery(".collapsePagesSideMenu").on('click', function () {
        jQuery(this).children().toggleClass("rotate-180");
    });


    /* ----- Full Screen ----- */
    let resizebanner = ()=> {
        let $fullscreen = jQuery(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function () {
        resizebanner();
    });

    jQuery('.progress').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).animate({
                opacity: 1,
                left: "0px"
            }, 500);
            let b = jQuery(this).find(".progress-bar").attr("data-value");
            jQuery(this).find(".progress-bar").animate({
                width: b + "%"
            }, 500);
        });
    });

    /*----- shop detail Tabs init -----*/
    jQuery(function () {
        initTabsToAccordion();
    });

    function initTabsToAccordion() {
        var animSpeed = 500;
        var win = jQuery(window);
        var isAccordionMode = true;
        var tabWrap = jQuery(".tab-to-accordion");
        var tabContainer = tabWrap.find(".tab-container");
        var tabItem = tabContainer.children("div[id]");
        var tabsetList = tabWrap.find(".tabset-list");
        var tabsetLi = tabsetList.find("li");
        var tabsetItem = tabsetList.find("a");
        var activeId = tabsetList
            .find(".active")
            .children()
            .attr("href");
        cloneTabsToAccordion();
        accordionMode();
        tabsToggle();
        hashToggle();
        win.on("resize orientationchange", accordionMode);

        function cloneTabsToAccordion() {
            jQuery(tabsetItem).each(function () {
                var $this = jQuery(this);
                var activeClass = $this.parent().hasClass("active");
                var listItem = $this.attr("href");
                var listTab = jQuery(listItem);
                if (activeClass) {
                    var activeClassId = listItem;
                    listTab.show();
                }
                var itemContent = $this.clone();
                var itemTab = $this.attr("href");
                if (activeClassId) {
                    itemContent
                        .insertBefore(itemTab)
                        .wrap('<div class="accordion-item active"></div>');
                } else {
                    itemContent
                        .insertBefore(itemTab)
                        .wrap('<div class="accordion-item"></div>');
                }
            });
        }

        function accordionMode() {
            var liWidth = Math.round(tabsetLi.outerWidth());
            var liCount = tabsetLi.length;
            var allLiWidth = liWidth * liCount;
            var tabsetListWidth = tabsetList.outerWidth();
            if (tabsetListWidth <= allLiWidth) {
                isAccordionMode = true;
                tabWrap.addClass("accordion-mod");
            } else {
                isAccordionMode = false;
                tabWrap.removeClass("accordion-mod");
            }
        }

        function tabsToggle() {
            tabItem.hide();
            jQuery(activeId).show();
            jQuery(tabWrap).on("click", 'a[href^="#tab"]', function (e) {
                e.preventDefault();
                var $this = jQuery(this);
                var activeId = $this.attr("href");
                var activeTabSlide = jQuery(activeId);
                var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
                jQuery('a[href^="#tab"]')
                    .parent()
                    .removeClass("active");
                activeOpener.parent().addClass("active");
                if (isAccordionMode) {
                    tabItem.stop().slideUp(animSpeed);
                    activeTabSlide.stop().slideDown(animSpeed);
                } else {
                    tabItem.hide();
                    activeTabSlide.show();
                }
            });
        }

        function hashToggle() {
            var hash = location.hash;
            var activeId = hash;
            var activeTabSlide = jQuery(activeId);
            var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
            if (jQuery(hash).length > 0) {
                jQuery('a[href^="#tab"]')
                    .parent()
                    .removeClass("active");
                activeOpener.parent().addClass("active");
                tabItem.hide();
                activeTabSlide.show();
                win
                    .scrollTop(activeTabSlide.offset().top)
                    .scrollLeft(activeTabSlide.offset().left);
            }
        }
    }
    /* =====================================
             Particles Index
      ====================================== */

    if (jQuery("#particles-js").length) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100,
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
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
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
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 150,
                        "size": 12,
                        "duration": 0.2,
                        "opacity": 0.6,
                        "speed": 10
                    },
                    "repulse": {
                        "distance": 150
                    },
                    "push": {
                        "particles_nb": 1
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
        });
    }

    /* =====================================
             Text Rotating in Particles
      ====================================== */
    let morphRotatingText = jQuery("#morph-text");
    if (morphRotatingText.length) {
        morphRotatingText.Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3500,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    /* =====================================
     Parallax And responsive plugins initialize
      ====================================== */
    let $tooltip = jQuery('.tooltip');
    jQuery(()=> {
        $tooltip.tooltipster({
            plugins: ['follower'],
            anchor: 'bottom-right',
            offset: [0, 0],
            animation: 'fade',
            content:'Click Here To Close or Press ESC!',
            delay: 20,
            theme: 'tooltipster-light',
            repositionOnScroll: true,
            // change the content of tooltip in all pages
            // functionBefore: function (instance, helper) {
            //     instance.content('Click Here To Close or Press ESC!');
            // }
        });
    });
    /*Wow Animations*/
    if (jQuery(".wow").length && jQuery(window).outerWidth() >= 567) {
        let wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
    if (jQuery(window).width() > 992) {

        jQuery(".parallax").parallaxie({
            //speed value btw (-1 to 1)
            speed: 0.55,
            offset: 0,
        });
        jQuery(".parallax.parallax-slow").parallaxie({
            speed: 0.31,
        });
    } else if (jQuery(window).width() < 576) {
        jQuery('#pagepiling #submit_btn').on('click', function () {
            jQuery('#pagepiling #result').remove();
        });
        jQuery('#pagepiling .para-opacity').addClass('opacity-5');
    } else {
        jQuery('#pagepiling .para-opacity').removeClass('opacity-5');
    }
    jQuery(window).resize(function () {
        if (jQuery(window).width() < 576) {
            jQuery('#pagepiling .para-opacity').addClass('opacity-5');
        } else {
            jQuery('#pagepiling .para-opacity').removeClass('opacity-5');
        }
    });

    /* =====================================
                 Pricing duration toggle
          ====================================== */

    jQuery('.Pricing-toggle-button').on('click', function () {
        var opt = true;
        if (jQuery(this).hasClass('month')) {
            opt = false;
        }
        if (!jQuery(this).hasClass('active')) {
            jQuery('.pricing-price .pricing-currency').each(function () {
                let priceWithDollar = jQuery(this).text();
                let price = priceWithDollar.substring(1, priceWithDollar.length);
                var discountOffer = 9;
                if (opt) {
                    price *= discountOffer;
                } else {
                    price /= discountOffer;
                }
                price = price.toFixed(2);
                let priceF = '$' + price;
                fadeInPrice(jQuery(this), priceF);
            });
            jQuery('.pricing-price .pricing-duration').each(function () {
                if (opt) {
                    jQuery(this).text("year");
                } else {
                    jQuery(this).text("month");
                }

            });
            jQuery(this).addClass('active').siblings().removeClass('active');
        }
    });

    let fadeInPrice = (thisItem, priceText)=> {
        let pricingItem = jQuery('.pricing-price');
        pricingItem.addClass('scale-price');
        setTimeout(function () {
            thisItem.text(priceText);
            pricingItem.removeClass('scale-price');
        }, 200);
    }

    jQuery('.pricing-item').on('mouseenter' , function(){
       jQuery('.pricing-item').removeClass('active');
        jQuery(this).addClass('active');
    }).on('mouseleave' , function(){
        jQuery('.pricing-item').removeClass('active');
        jQuery('.pricing-item.selected').addClass('active');
    });


    /* =====================================
             Fancy Box Image viewer
      ====================================== */
    jQuery('[data-fancybox]').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            // 'download',
            'zoom',
            'close'
        ],
    });


    /* ------ OWL Slider ------ */
    /*Partners / LOgo*/
    jQuery("#partners-slider").owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            991: {
                items: 4,
            },
            767: {
                items: 3,
            },
            480: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });

    /*Testimonials*/
    jQuery("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayHoverPause: true,
        mouseDrag: false,
        loop: true,
        margin: 30,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            980: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    //gallery detail slider
    jQuery("#carousel-gallery-detail").owlCarousel({
        items: 1,
        autoplay: false,
        mouseDrag: true,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        responsive: {
            980: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    //main slider in pages
    jQuery("#testimonial-main-slider").owlCarousel({
        items: 3,
        autoplay: 2500,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                items: 3,
            },
            980: {
                items: 3,
            },
            600: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    //main slider in pages
    jQuery("#price-slider").owlCarousel({
        items: 3,
        autoplay: false,
        loop: false,
        margin: 0,
        padding: 0,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                items: 3,
            },
            980: {
                items: 3,
            },
            600: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });


    /*Our Team*/
    jQuery("#ourteam-slider").owlCarousel({
        items: 4,
        margin: 0,
        dots: false,
        nav: false,
        responsive: {
            1280: {
                items: 4,
            },
            768: {
                items: 3,
            },
            520: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });

    //App Slider

    jQuery("#app-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: false,
        autoplayTimeout: 5000,
        // mouseDrag:false,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    jQuery('.app-slider-lock-btn').on('click' , function () {
        jQuery('.app-slider-lock').fadeToggle(600);
    });

    /*Services Box Slider*/
    jQuery("#services-slider").owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            }
        }
    });
    //service detail
    jQuery("#service-detail").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            }
        }
    });
    var owl6 = jQuery('.owl-blog-item');
    owl6.owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
    });
    //shop detail dual carousel
    let syncCont = jQuery("#shop-dual-carousel");
    let syncCarousel = jQuery("#syncCarousel.owl-carousel");

    if (syncCont) {
        syncCont.append('<div class="owl-carousel carousel-shop-detail-inner owl-theme" id="syncChild"></div>');
        let arrTotal = syncCarousel.find('.item').length - 1;
        let item = '';
        let syncChild = jQuery("#syncChild");
        for (let i = 0; i <= arrTotal; i++) {
            item = syncCarousel.find('.item').eq(i).find('img').attr('src');
            syncChild.append('<!-- Item ' + (i + 1) + '--><div class="item"><img src="' + item + '" alt=""></div>');
        }
    }


    let syncChild = jQuery("#syncChild.owl-carousel");

    syncCarousel.owlCarousel({
        singleItem: true,
        items: 1,
        dots: false,
        slideSpeed: 1000,
        mouseDrag: false,
        nav: true,
        pagination: false,
        afterAction: syncPosition(),
        responsiveRefreshRate: 200,
    });

    syncChild.owlCarousel({
        items: 4,
        pagination: false,
        margin: 0,
        dots: false,
        afterAction: syncPosition(),
    });

    function syncPosition() {
        setTimeout(function () {
            syncChild.find(".owl-item").first().addClass("synced");
        }, 300);
    }

    // Sync nav
    syncCarousel.on('click', '.owl-next', function () {
        let innerActive = syncChild.find('.owl-item.active:first').index();
        let innerActiveLast = syncChild.find('.owl-item.active:last').index();
        let innerActiveSynced = syncChild.find('.owl-item.active.synced').index();
        let innerSynced = syncChild.find('.owl-item.synced').index();
        if (innerActiveSynced === -1) {
            if (innerActive > innerSynced) {
                while (innerActive > innerSynced) {
                    syncChild.trigger('prev.owl.carousel');
                    innerSynced++;
                }
            } else if (innerActive < innerSynced) {
                while (innerActive < innerSynced) {
                    syncChild.trigger('next.owl.carousel');
                    innerSynced--;
                }
            }
        } else if (innerActiveSynced === innerActiveLast) {
            syncChild.trigger('next.owl.carousel');
        }
        let itemBottom = syncChild.find('.owl-item.synced');
        itemBottom.next().addClass('synced').siblings().removeClass('synced');
    });
    syncCarousel.on('click', '.owl-prev', function () {
        let innerActive = syncChild.find('.owl-item.active:first').index();
        let innerActiveSynced = syncChild.find('.owl-item.active.synced').index();
        let innerSynced = syncChild.find('.owl-item.synced').index();
        if (innerActiveSynced === -1) {
            if (innerActive > innerSynced) {
                while (innerActive > innerSynced - 2) {
                    syncChild.trigger('prev.owl.carousel');
                    innerSynced++;
                }
            } else if (innerActive < innerSynced) {
                while (innerActive < innerSynced - 2) {
                    syncChild.trigger('next.owl.carousel');
                    innerSynced--;
                }
            }
        } else if (innerActiveSynced === innerActive) {
            syncChild.trigger('prev.owl.carousel');
        }
        let itemBottom = syncChild.find('.owl-item.synced');
        itemBottom.prev().addClass('synced').siblings().removeClass('synced');
    });

    syncChild.on("click", ".owl-item", function () {
        let number = jQuery(this).index();
        syncCarousel.trigger("to.owl.carousel", number, 300);
        jQuery(this).siblings().removeClass('synced');
        jQuery(this).addClass("synced");
    });
    //fancybox for shop
    jQuery('#syncCarousel [data-fancybox]').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            'download',
            'zoom',
            'close'
        ],
        afterShow: function () {
            let number = this.index;
            jQuery(syncChild).add(syncCarousel).trigger("to.owl.carousel", number, 300);
            jQuery('#syncChild .owl-item').removeClass("synced").eq(number).addClass('synced');
        }
    });
    //hover effect on shop detail slider image : zooming effect
    jQuery("#syncCarousel .item").on('mousemove', function (e) {
        jQuery(this).find('img').css({
            'transform-origin': ((e.pageX - jQuery(this).offset().left) / jQuery(this).width()) * 100 + '% ' + ((e.pageY - jQuery(this).offset().top) / jQuery(this).height()) * 100 + '%'
        });
    });
    /*  ---------  gallery hover effect  ----------  */
    jQuery("#carousel-gallery-detail .item").on('mousemove', function (e) {
        jQuery(this).find('img').css({
            'transform-origin': ((e.pageX - jQuery(this).offset().left) / jQuery(this).width()) * 100 + '% ' + ((e.pageY - jQuery(this).offset().top) / jQuery(this).height()) * 100 + '%'
        });
    });


    /* ----------- Counters ---------- */
    jQuery(".counters").appear(function () {
        jQuery(".count_nums").countTo();
    });


    /* -------copy right year maker------ */
    let copyYear = new Date().getFullYear();
    let copyText = jQuery('#year , #year1');
    if (copyYear === 2019) {
        copyText.text(copyYear);
    } else {
        copyText.text('2019-' + copyYear);
    }

    /* =====================================
            Coming Soon Count Down
    ====================================== */
    let countDown = jQuery(".count_down");
    if (countDown.length) {
        countDown.downCount({
            // month / day / Year
            date: '2/21/2021 12:00:00',
            offset: +10
        });
    }

    /* =====================================
            pagePiling parallax Index
    ====================================== */
    let pagePiling = jQuery('#pagepiling');
    if (jQuery(pagePiling).length) {
        jQuery(pagePiling).pagepiling({
            onLeave: function (index, nextIndex, direction) {
                let i = index;
                let lastIndex = jQuery('#pagepiling section:last').index();
                if (direction === 'down') {
                    jQuery('#para-menu li a').removeClass('current');
                    jQuery('#para-menu li').eq(i).children().addClass('current');
                    jQuery('.para-btn.para-up').removeClass('disabled');
                } else {
                    i -= 2;
                    jQuery('#para-menu li a').removeClass('current');
                    jQuery('#para-menu li').eq(i).children().addClass('current');
                }
                if (i === 0) {
                    jQuery('.para-btn.para-up').addClass('disabled');
                } else if (lastIndex === i) {
                    jQuery('.para-btn.para-down').addClass('disabled');
                } else if (direction === 'up' && i < lastIndex) {
                    jQuery('.para-btn.para-down').removeClass('disabled');
                }
            }
        });
        //PagePiling Arrows
        jQuery('.para-up').on('click', function () {
            jQuery.fn.pagepiling.moveSectionUp();
        });
        jQuery('.para-down').on('click', function () {
            jQuery.fn.pagepiling.moveSectionDown();
        });
    }
    //parallax menu navigation
    jQuery('#para-menu li a').on('click', function (e) {
        e.preventDefault();
        let pageSection = jQuery(this).parent().index();
        let lastPage = jQuery('#pagepiling').find('section').length;
        pageSection++;
        jQuery.fn.pagepiling.moveTo(pageSection);
        jQuery('#para-menu li a').removeClass('current');
        jQuery(this).addClass('current');
        //arrows disabling
        if (pageSection === 1) {
            jQuery('.para-btn.para-up').addClass('disabled');
        } else if (pageSection === lastPage) {
            jQuery('.para-btn.para-down').addClass('disabled');
        }
    });

    //  classic startup text rotation
    let typed = jQuery('#typed-text');
    if (typed.length) {
        let classicStartup = new Typed('#typed-text', {
            strings: ['Front End Developer', 'Front End Designer', 'Front End Master', 'Creative Designer', 'Creative Builder'],
            typeSpeed: 45,
            backSpeed: 22,
            backDelay: 1000,
            smartBackspace: true, // this is a default
            loop: true
        });
    }

    /* =====================================
                CubePortfolio
    ====================================== */
    /* ------Blog Masonry----- */
    jQuery("#blog-measonry").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: "scaleSides",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 992,
            cols: 3
        }, {
            width: 768,
            cols: 3
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1,
        }],
    });
    /*services*/
    jQuery("#services-measonry").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        filters: '#services-filter',
        animationType: "scaleSides",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 992,
            cols: 3
        }, {
            width: 768,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1,
        }],
    });

    /*Testimonials Grids*/
    jQuery("#testimonial-grid").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: "quicksand",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
    });

    /*Testimonials Grids*/
    jQuery("#price-grid").cubeportfolio({
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: "quicksand",
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }]
    });

    /*Gallery without spaces*/
    jQuery("#grid-mosaic").cubeportfolio({
        filters: "#mosaic-filter",
        layoutMode: 'grid',
        defaultFilter: "*",
        animationType: "rotateSides",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 767,
            cols: 2,
        }, {
            width: 480,
            cols: 1,
        }],
        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic',
                action: 'click',
                loadItems: 3,
            }
        },
    });
  
//    end of js
});