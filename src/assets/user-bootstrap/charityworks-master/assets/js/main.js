(function ($) {
  "use strict";
  
  /* 1. Preloader */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  /* 2. Sticky Header and Scroll Up */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }
  });

  // Scroll Up
  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  /* 3. SlickNav */
  var menu = $('ul#navigation');
  if(menu.length){
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  }

  /* 4. MainSlider */
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 4000,
      dots: false,
      fade: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /* 5. Testimonial Slider */
  var testimonial = $('.h1-testimonial-active');
  if(testimonial.length){
    testimonial.slick({
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay:false,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow:true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow:true
          }
        }
      ]
    });
  }

  /* 6. Nice Select */
  var nice_Select = $('select');
  if(nice_Select.length){
    nice_Select.niceSelect();
  }

  /* 7. Background Image (data-background) */
  const basePath = 'assets/user-bootstrap/charityworks-master/assets/img/';
  $("[data-background]").each(function () {
    const imageName = $(this).attr("data-background");
    const imagePath = basePath + imageName;
    $(this).css("background-image", "url(" + imagePath + ")");
  });

  /* 10. WOW Animation */
  new WOW().init();

  /* 11. Mailchimp */
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  /* 12. Popup Image */
  var popUp = $('.single_gallery_part, .img-pop-up');
  if(popUp.length){
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  /* 13. Popup Video */
  var popUp = $('.popup-video');
  if(popUp.length){
    popUp.magnificPopup({
      type: 'iframe'
    });
  }

  /* 14. CounterUp */
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

  /* 15. Datepicker */
  $('#datepicker1').datepicker();

  /* 16. Time Picker */
  $('#timepicker').timepicker();

  /* 17. Overlay */
  $(".snake").snakeify({
    speed: 200
  });

  /* 18. Progress barfiller */
  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();
  $('#bar5').barfiller();
  $('#bar6').barfiller();

})(jQuery);
