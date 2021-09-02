(function ($) {
  "use strict";

  /*=====================
     01.Pre loader
     ==========================*/
  $(window).on("load", function () {
    setTimeout(function () {
      $(".loader_skeleton").fadeOut("slow");
      $("body").css({
        overflow: "auto",
      });
    }, 500);
    $(".loader_skeleton").remove("slow");
    $("body").css({
      overflow: "hidden",
    });
  });
  $("#preloader").fadeOut("slow", function () {
    $(this).remove();
  });

  // Scroll Smothly
  $(".smooth-goto>li a").click(function (e) {
    e.preventDefault();
    var sectionTo = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(sectionTo).offset().top - 15,
      },
      1000
    );
  });

  /*=====================
     02.Tap on Top
     ==========================*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".tap-top").fadeIn();
    } else {
      $(".tap-top").fadeOut();
    }
  });
  $(".tap-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  /*=====================
     03. Age verify modal
     ==========================*/
  $(window).on("load", function () {
    $("#ageModal").modal("show");
  });

  /*=====================
     04. Mega menu js
     ==========================*/
  if ($(window).width() > "1200") {
    $("#hover-cls").hover(function () {
      $(".sm").addClass("hover-unset");
    });
  }
  if ($(window).width() > "1200") {
    $("#sub-menu > li").hover(
      function () {
        if ($(this).children().hasClass("has-submenu")) {
          $(this).parents().find("nav").addClass("sidebar-unset");
        }
      },
      function () {
        $(this).parents().find("nav").removeClass("sidebar-unset");
      }
    );
  }

  /*=====================
     05. Image to background js
     ==========================*/
  $(".bg-top").parent().addClass("b-top");
  $(".bg-bottom").parent().addClass("b-bottom");
  $(".bg-center").parent().addClass("b-center");
  $(".bg_size_content").parent().addClass("b_size_content");
  $(".bg-img").parent().addClass("bg-size");
  $(".bg-img.blur-up").parent().addClass("blur-up lazyload");

  jQuery(".bg-img").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();

    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });

    el.hide();
  });

  /*=====================
     06. Filter js
     ==========================*/
  $(".filter-button").click(function () {
    $(this).addClass("active").siblings(".active").removeClass("active");
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  $("#formButton").click(function () {
    $("#form1").toggle();
  });

  /*=====================
     07. left offer toggle
     ==========================*/
  $(".heading-right h3").click(function () {
    $(".offer-box").toggleClass("toggle-cls");
  });

  /*=====================
     08. toggle nav
     ==========================*/
  $(".toggle-nav").on("click", function () {
    $(".sm-horizontal").css("right", "0px");
  });
  $(".mobile-back").on("click", function () {
    $(".sm-horizontal").css("right", "-410px");
  });
  var window_width = jQuery(window).width();
  if (window_width > "1199") {
    $("#toggle-sidebar").click(function () {
      $(".marketplace-sidebar").slideToggle("slow");
    });
  }
  if (window_width < "1199") {
    $("#toggle-sidebar-res").click(function () {
      $(".marketplace-sidebar").addClass("open-side");
    });
    $(".marketplace-sidebar .sidebar-back").click(function () {
      $(".marketplace-sidebar").removeClass("open-side");
    });
  }
  $("#toggle_sidebar-res").click(function () {
    $(".left-header-sm").addClass("open-side");
  });
  $(".left-header-sm .sidebar-back").click(function () {
    $(".left-header-sm").removeClass("open-side");
  });

  /*=========================
     09. left category slider height
     ==========================*/
  var window_width = jQuery(window).width();
  if (window_width > "1199") {
    var category_height = $("#sidebar-height").height();
    $(".height-apply").css({ height: category_height });
  }

  /*=====================
     10. footer according
     ==========================*/
  var contentwidth = jQuery(window).width();
  if (contentwidth < "750") {
    jQuery(".footer-title h4").append('<span class="according-menu"></span>');
    jQuery(".footer-title").on("click", function () {
      jQuery(".footer-title").removeClass("active");
      jQuery(".footer-contant").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this).next().slideDown("normal");
      }
    });
    jQuery(".footer-contant").hide();
  } else {
    jQuery(".footer-contant").show();
  }

  if ($(window).width() < "1183") {
    jQuery(".menu-title h5").append('<span class="according-menu"></span>');
    jQuery(".menu-title").on("click", function () {
      jQuery(".menu-title").removeClass("active");
      jQuery(".menu-content").slideUp("normal");
      if (jQuery(this).next().is(":hidden") == true) {
        jQuery(this).addClass("active");
        jQuery(this).next().slideDown("normal");
      }
    });
    jQuery(".menu-content").hide();
  } else {
    jQuery(".menu-content").show();
  }

  /*=====================
     11. Add to cart quantity Counter
     ==========================*/
  $("button.add-button").click(function () {
    $(this).next().addClass("open");
    $(".qty-input").val("1");
  });
  $(".quantity-right-plus").on("click", function () {
    var $qty = $(this).siblings(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
  });
  $(".quantity-left-minus").on("click", function () {
    var $qty = $(this).siblings(".qty-input");
    var _val = $($qty).val();
    if (_val == "1") {
      var _removeCls = $(this).parents(".cart_qty");
      $(_removeCls).removeClass("open");
    }
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $qty.val(currentVal - 1);
    }
  });

  /*=====================
     12. Product page Quantity Counter
     ==========================*/
  $(".collection-wrapper .qty-box").each(function () {
    let $qty = $(this).find(".input-number");
    $(this)
      .find(".quantity-right-plus")
      .on("click", function () {
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal)) {
          $qty.val(currentVal + 1);
        }
      });
    $(this)
      .find(".quantity-left-minus")
      .on("click", function () {
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
          $qty.val(currentVal - 1);
        }
      });
  });
  /*=====================
     13. Full slider
     ==========================*/
  if ($(window).width() > 767) {
    var $slider = $(".full-slider");
    $slider
      .on("init", function () {
        mouseWheel($slider);
      })
      .slick({
        dots: true,
        nav: false,
        vertical: true,
        infinite: false,
      });

    function mouseWheel($slider) {
      $(window).on(
        "wheel",
        {
          $slider: $slider,
        },
        mouseWheelHandler
      );
    }

    function mouseWheelHandler(event) {
      var $slider = event.data.$slider;
      var delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick("slickNext");
      } else {
        $slider.slick("slickPrev");
      }
    }
  } else {
    var $slider = $(".full-slider");
    $slider
      .on("init", function () {
        mouseWheel($slider);
      })
      .slick({
        dots: true,
        nav: false,
        vertical: false,
        infinite: false,
      });

    function mouseWheel($slider) {
      $(window).on(
        "wheel",
        {
          $slider: $slider,
        },
        mouseWheelHandler
      );
    }

    function mouseWheelHandler(event) {
      var $slider = event.data.$slider;
      var delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick("slickNext");
      } else {
        $slider.slick("slickPrev");
      }
    }
  }

  /*=====================
     14. slick slider
     ==========================*/
  $(".hero-slider").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
  });

  $(".slide-1").slick({
    dots: false,
    arrows: false,
  });

  $(".tenproducts-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".flash-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slide-center").slick({
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $("#quick-view").on("shown.bs.modal", function () {
    $(".quick-slide-1").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
    });
  });

  $(".slide-2").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slide-3").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slide-3-center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".center-slider-bicycle").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: "0",
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "200px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".team-4").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slide-4").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-4").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".tools-product-4").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".product_4").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".product-3").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slider-3").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slide-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".category-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slide-5-center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".slide-6").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slide-6-product").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".brand-6").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".hot-product-slider-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $(".review-slider").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".product-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slide-7").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".slide-8").slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".vector-slide-8").slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".vector-slide-center").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    centerMode: true,
    centerPadding: 15,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".product-slick-detail").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-detail",
  });

  $(".slider-nav-detail").slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slick-detail",
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });

  $(".product-slick-custom").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-custom",
  });

  $(".slider-nav-custom").slick({
    vertical: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-slick-custom",
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });

  $("#quick-view").on("show.bs.modal", function (e) {
    $("#quick-view").css("opacity", 0);
    setTimeout(function () {
      $("#quick-view").css("opacity", 1);
    }, 500);
  });

  $(".product-detail-zoom .slick-slide > div>div").zoom({
    magnify: 0.6,
  });

  // Go To Specific Slider Using External Btn
  $("[data-slide]").click(function (e) {
    e.preventDefault();
    let slider = $(this).data("slider");
    let slideno = $(this).data("slide");
    $(slider).slick("slickGoTo", slideno - 1);
  });

  $("#quick-view").on("shown.bs.modal", function (e) {
    $(".product-slick").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: ".slider-nav",
    });

    $(".slider-nav").slick({
      vertical: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".product-slick",
      arrows: false,
      dots: false,
      focusOnSelect: true,
    });

    $(".product-slick .slick-slide > div>div").zoom({
      magnify: 0.4,
    });
  });

  $("#quick-view").on("hidden.bs.modal", function (e) {
    $(".product-slick").slick("unslick");
    $(".slider-nav").slick("unslick");
  });

  $(".product-right-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-right-nav",
  });
  if ($(window).width() > 575) {
    $(".slider-right-nav").slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".product-right-slick",
      arrows: false,
      infinite: true,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
    });
  } else {
    $(".slider-right-nav").slick({
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".product-right-slick",
      arrows: false,
      infinite: true,
      centerMode: false,
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  $(".center-slider-slick").slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".marketplace-5").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".marketplace-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".vertical-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 3000,
  });

  $(".animated-nav").slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slick-animated",
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });

  $(".home-slider-center").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "30px",
          dots: false,
        },
      },
    ],
  });

  /*=====================
     15.Header z-index js
     ==========================*/
  if ($(window).width() < 1199) {
    $(
      ".header-2 .navbar .sidebar-bar, .header-2 .navbar .sidebar-back, .header-2 .mobile-search img"
    ).on("click", function () {
      if ($("#mySidenav").hasClass("open-side")) {
        $(".header-2 #main-nav .toggle-nav").css("z-index", "99");
      } else {
        $(".header-2 #main-nav .toggle-nav").css("z-index", "1");
      }
    });
    $(".sidebar-overlay").on("click", function () {
      $(".header-2 #main-nav .toggle-nav").css("z-index", "99");
    });
    $(".header-2 #search-overlay .closebtn").on("click", function () {
      $(".header-2 #main-nav .toggle-nav").css("z-index", "99");
    });
    $(
      ".layout3-menu .mobile-search .ti-search, .header-2 .mobile-search .ti-search"
    ).on("click", function () {
      $(
        ".layout3-menu #main-nav .toggle-nav, .header-2 #main-nav .toggle-nav"
      ).css("z-index", "1");
    });
  }

  // external controller
  $(".slider-controller").each(function () {
    let targetSlider = $(this).data("target");
    $(this)
      .find(".slide-left")
      .on("click", function (e) {
        e.preventDefault();
        $(targetSlider).slick("slickPrev");
      });
    $(this)
      .find(".slide-right")
      .on("click", function (e) {
        e.preventDefault();
        $(targetSlider).slick("slickNext");
      });
  });
  /*=====================
     16.Tab js
     ==========================*/
  $("#tab-1").css("display", "Block");
  $(".default").css("display", "Block");
  $(".tabs li a").on("click", function () {
    event.preventDefault();
    $(".tab_product_slider").slick("unslick");
    $(".product-4").slick("unslick");
    $(this).parent().parent().find("li").removeClass("current");
    $(this).parent().addClass("current");
    var currunt_href = $(this).attr("href");
    $("#" + currunt_href).show();
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".tab-content")
      .not("#" + currunt_href)
      .css("display", "none");
    $(".product-4").slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  $(".tabs li a").on("click", function () {
    event.preventDefault();
    $(".tab_product_slider").slick("unslick");
    $(".product-5").slick("unslick");
    $(this).parent().parent().find("li").removeClass("current");
    $(this).parent().addClass("current");
    var currunt_href = $(this).attr("href");
    $("#" + currunt_href).show();
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".tab-content")
      .not("#" + currunt_href)
      .css("display", "none");
    // var slider_class = $(this).parent().parent().parent().find(".tab-content").children().attr("class").split(' ').pop();
    $(".product-5").slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $("#tab-1").css("display", "Block");
  $(".default").css("display", "Block");
  $(".tabs li a").on("click", function () {
    event.preventDefault();
    $(".tab_product_slider").slick("unslick");
    $(".product-3").slick("unslick");
    $(this).parent().parent().find("li").removeClass("current");
    $(this).parent().addClass("current");
    var currunt_href = $(this).attr("href");
    $("#" + currunt_href).show();
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".tab-content")
      .not("#" + currunt_href)
      .css("display", "none");
    $(".product-3").slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });

  /*=====================
     17 .category page
     ==========================*/

  $(".collapse-block-title").on("click", function (e) {
    e.preventDefault;
    var speed = 300;
    var thisItem = $(this).parent(),
      nextLevel = $(this).next(".collection-collapse-block-content");
    if (thisItem.hasClass("open")) {
      thisItem.removeClass("open");
      nextLevel.slideUp(speed);
      nextLevel.removeClass("overflow-visible");
    } else {
      thisItem.addClass("open");
      nextLevel.slideDown(speed, function () {
        nextLevel.addClass("overflow-visible");
      });
    }
  });
  $(".color-selector ul li").on("click", function (e) {
    $(".color-selector ul li").removeClass("active");
    $(this).addClass("active");
  });
  $(".color-w-name ul li").on("click", function (e) {
    $(".color-w-name ul li").removeClass("active");
    $(this).addClass("active");
  });
  //list layout view
  $(".list-layout-view").on("click", function (e) {
    $(".collection-grid-view").css("opacity", "0");
    $(".product-wrapper-grid").css("opacity", "0.2");
    $(".shop-cart-ajax-loader").css("display", "block");
    $(".product-wrapper-grid").addClass("list-view");
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-lg-12");
    setTimeout(function () {
      $(".product-wrapper-grid").css("opacity", "1");
      $(".shop-cart-ajax-loader").css("display", "none");
    }, 500);
  });
  //grid layout view
  $(".grid-layout-view").on("click", function (e) {
    $(".collection-grid-view").css("opacity", "1");
    $(".product-wrapper-grid").removeClass("list-view");
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-lg-3");
  });
  $(".product-2-layout-view").on("click", function (e) {
    if ($(".product-wrapper-grid").hasClass("list-view")) {
    } else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-6");
    }
  });
  $(".product-3-layout-view").on("click", function (e) {
    if ($(".product-wrapper-grid").hasClass("list-view")) {
    } else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid")
        .children()
        .children()
        .addClass("col-lg-4 col-6");
    }
  });
  $(".product-4-layout-view").on("click", function (e) {
    if ($(".product-wrapper-grid").hasClass("list-view")) {
    } else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid")
        .children()
        .children()
        .addClass("col-xl-3 col-6");
    }
  });
  $(".product-6-layout-view").on("click", function (e) {
    if ($(".product-wrapper-grid").hasClass("list-view")) {
    } else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-2");
    }
  });

  /*=====================
     18.filter sidebar js
     ==========================*/
  $(".sidebar-popup").on("click", function (e) {
    $(".open-popup").toggleClass("open");
    $(".collection-filter").css("left", "-15px");
  });
  $(".filter-btn").on("click", function (e) {
    $(".collection-filter").css("left", "-15px");
  });
  $(".filter-back").on("click", function (e) {
    $(".collection-filter").css("left", "-365px");
    $(".sidebar-popup").trigger("click");
  });

  $(".account-sidebar").on("click", function (e) {
    $(".dashboard-left").css("left", "0");
  });
  $(".filter-back").on("click", function (e) {
    $(".dashboard-left").css("left", "-365px");
  });

  $(function () {
    $(".product-load-more .col-grid-box").slice(0, 8).show();
    $(".loadMore").on("click", function (e) {
      e.preventDefault();
      $(".product-load-more .col-grid-box:hidden").slice(0, 4).slideDown();
      if ($(".product-load-more .col-grid-box:hidden").length === 0) {
        $(".loadMore").text("no more products");
      }
    });
  });

  var t;

  $(function () {
    $(".infinite-product .product-box").slice(0, 8).show();
    $(".load-product").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("loading");
      t = setTimeout(function () {
        $(".load-product").removeClass("loading");
        $(".infinite-product .product-box:hidden").slice(0, 4).slideDown();
        if ($(".infinite-product .product-box:hidden").length === 0) {
          $(".load-product").text("no more products");
          $(".load-product").addClass("mt-4");
        }
      }, 2500);
    });
  });

  /*=====================
     19.Add to cart
     ==========================*/
  $(".product-box button .ti-shopping-cart").on("click", function () {
    $.notify(
      {
        icon: "fa fa-check",
        title: "Success!",
        message: "Item Successfully added to your cart",
      },
      {
        element: "body",
        position: null,
        type: "success",
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: true,
        placement: {
          from: "top",
          align: "right",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        animate: {
          enter: "animated fadeInDown",
          exit: "animated fadeOutUp",
        },
        icon_type: "class",
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>",
      }
    );
  });

  /*=====================
     20.Add to wishlist
     ==========================*/
  $(".product-box a .ti-heart , .product-box a .fa-heart").on(
    "click",
    function () {
      $.notify(
        {
          icon: "fa fa-check",
          title: "Success!",
          message: "Item Successfully added in wishlist",
        },
        {
          element: "body",
          position: null,
          type: "info",
          allow_dismiss: true,
          newest_on_top: false,
          showProgressbar: true,
          placement: {
            from: "top",
            align: "right",
          },
          offset: 20,
          spacing: 10,
          z_index: 1031,
          delay: 5000,
          animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp",
          },
          icon_type: "class",
          template:
            '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            "</div>" +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            "</div>",
        }
      );
    }
  );
})(jQuery);

/*=====================
 22. Menu js
 ==========================*/
function openNav() {
  document.getElementById("mySidenav").classList.add("open-side");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open-side");
}
$(function () {
  $("#main-menu").smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8,
  });
  $("#sub-menu").smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8,
  });
});

/*=====================
 23.Tooltip
 ==========================*/
$(window).on("load", function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/*=====================
 24. Cookiebar
 ==========================*/
window.setTimeout(function () {
  $(".cookie-bar").addClass("show");
}, 5000);

$(".cookie-bar .btn, .cookie-bar .btn-close").on("click", function () {
  $(".cookie-bar").removeClass("show");
});

/*=====================
 25. Recently puchase modal
 ==========================*/
setInterval(function () {
  $(".recently-purchase").toggleClass("show");
}, 20000);

$(".recently-purchase .close-popup").on("click", function () {
  $(".recently-purchase").removeClass("show");
});

/*=====================
 26. other js
 ==========================*/
var width_content = jQuery(window).width();
if (width_content > "991") {
  $(".filter-bottom-title").click(function () {
    $(".filter-bottom-content").slideToggle("");
  });
  $(".close-filter-bottom").click(function () {
    $(".filter-bottom-content").slideUp("");
  });
} else {
  $(".filter-bottom-title").click(function () {
    $(".filter-bottom-content").toggleClass("open");
  });
  $(".close-filter-bottom").click(function () {
    $(".filter-bottom-content").removeClass("open");
  });
}

if (width_content < "991") {
  $(".filter-bottom-title").on("click", function (e) {
    $(".filter-bottom-content").css("left", "-15px");
  });
}

$(".color-variant li").on("click", function (e) {
  $(".color-variant li").removeClass("active");
  $(this).addClass("active");
});

$(".custom-variations li").on("click", function (e) {
  $(".custom-variations li").removeClass("active");
  $(this).addClass("active");
});

$(".size-box ul li").on("click", function (e) {
  $(".size-box ul li").removeClass("active");
  $("#selectSize").removeClass("cartMove");
  $(this).addClass("active");
  $(this).parent().addClass("selected");
});

$("#cartEffect").on("click", function (e) {
  if ($("#selectSize .size-box ul").hasClass("selected")) {
    $("#cartEffect").text("Added to bag ");
    $(".added-notification").addClass("show");
    setTimeout(function () {
      $(".added-notification").removeClass("show");
    }, 5000);
  } else {
    $("#selectSize").addClass("cartMove");
  }
});

// modern product box plus effect
$(".add-extent .animated-btn").on("click", function (e) {
  $(this).parents(".add-extent").toggleClass("show");
});

$(".product-left").each(function () {
  let sideBarValue = $(this).find(".slider-bar").val();
  $(this)
    .find(".progress-bar")
    .css("width", sideBarValue + "%");
  $(this)
    .parent()
    .find(".rating-percent")
    .text(sideBarValue + "%");
});

// Testimonial Card Height Same

let cardHeight = [];
$(".testimonial-slider .slick-slide>div").each(function () {
  cardHeight.push($(this).height());
});
let maxHeight = Math.max.apply(Math, cardHeight);
$(".testimonial-slider .slick-slide>div").each(function () {
  $(this).css("height", maxHeight + "px");
});

let rcardHeight = [];
$(".review-slider .slick-slide>div").each(function () {
  rcardHeight.push($(this).height());
});
let rmaxHeight = Math.max.apply(Math, rcardHeight);
$(".review-slider .slick-slide>div").each(function () {
  $(this).css("height", rmaxHeight + "px");
});

// Menu Category Preview

$("#preview-menu-img").css(
  "background-image",
  `url('${$(".has-preview li:first-child a").data("preview-src")}')`
);

$(".has-preview li").each(function () {
  $(this)
    .find("a")
    .on("mouseenter", function () {
      let previewSRC = $(this).data("preview-src");
      $("#preview-menu-img").css("background-image", `url('${previewSRC}')`);
    });
  $(this)
    .find("a")
    .on("mouseleave", function () {
      let previewSRC = $(this)
        .parent()
        .parent()
        .find("li:first-child a")
        .data("preview-src");
      $("#preview-menu-img").css("background-image", `url('${previewSRC}')`);
    });
});

// Ratting

$(".product-rating").each(function () {
  $(this).on("rateyo.init", function (e, data) {
    $(this)
      .parent()
      .parent()
      .find(".rating-count")
      .text(`${data.rating} OUT OF 5`);
    $(this).parent().parent().find("h4.avg-rate").text(data.rating);
    $(this)
      .parent()
      .parent()
      .find(".review-tooltip")
      .text(`${data.rating} Stars`);
  });
  $(this).rateYo({
    normalFill: "#dddddd",
    ratedFill: "#04abed",
    spacing: "3px",
    starWidth: "18px",
    fullStar: true,
    starSvg: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="1280.000000pt" height="1221.000000pt" viewBox="0 0 1280.000000 1221.000000"
      preserveAspectRatio="xMidYMid meet">
     <g transform="translate(0.000000,1221.000000) scale(0.100000,-0.100000)" stroke="none">
     <path d="M6307 12196 c-98 -36 -178 -122 -275 -295 -116 -207 -394 -714 -756
     -1380 -532 -976 -792 -1442 -1071 -1916 l-47 -81 -971 -183 c-535 -101 -1262
     -239 -1617 -307 -355 -68 -742 -139 -861 -158 -343 -55 -495 -100 -595 -174
     -98 -74 -140 -224 -95 -343 39 -103 -5 -54 871 -984 734 -780 1440 -1525 1641
     -1732 109 -111 215 -230 238 -264 40 -59 41 -64 41 -144 0 -48 -13 -160 -30
     -260 -17 -97 -60 -402 -96 -678 -119 -924 -192 -1499 -239 -1877 -25 -206 -60
     -478 -77 -605 -48 -355 -44 -563 13 -676 26 -53 90 -106 150 -123 117 -35 194
     -16 444 108 105 52 393 189 640 304 248 115 801 375 1230 577 429 202 850 401
     935 441 85 40 230 111 322 158 184 94 261 121 319 113 50 -7 126 -42 284 -132
     140 -80 280 -147 1405 -667 1022 -473 1584 -736 1725 -806 166 -83 233 -105
     325 -106 180 0 277 104 299 321 13 129 -2 296 -59 633 -10 63 -51 371 -90 685
     -38 314 -104 842 -145 1175 -73 593 -180 1409 -191 1462 -5 24 20 54 232 285
     295 320 512 552 1104 1183 256 272 595 635 754 805 159 171 357 381 438 468
     182 194 223 245 259 322 82 174 21 314 -174 405 -108 50 -198 72 -473 119
     -126 22 -391 71 -589 110 -198 38 -616 117 -930 176 -1644 306 -1961 367
     -1972 378 -16 16 -226 393 -1001 1797 -365 663 -684 1239 -707 1280 -23 41
     -81 152 -129 246 -110 215 -153 271 -240 314 -78 39 -177 49 -239 26z"/>
     </g>
     </svg>`,
    onChange: function (rating, rateYoInstance) {
      $(this)
        .parent()
        .parent()
        .find(".rating-count")
        .text(`${rating} OUT OF 5`);
      $(this).parent().parent().find(".review-tooltip").text(rating);
    },
  });
});

// Select 2 Initialize
$("select").each(function () {
  let myselect = $(this).select2({
    minimumResultsForSearch: -1,
    width: "resolve",
  });

  //Custom Change Events
  // myselect.on("change", function () {
  //   if ($(this).val() == "arc") {
  //     $(".selected-" + $(this).val()).removeClass("hidden");
  //   }
  //   else{

  //   }
  // });
});

// Image Popup
$(".img-container").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

// Customize Product No Scroll to body when modal over
// Custum Color Swatches

$(".swatch-list")
  .find("li")
  .each(function () {
    let thisLi = $(this);
    let colorCode = $(this).data("color");
    let colorCode2 = $(this).data("color2");
    let colorCode3 = $(this).data("color3");
    let colorName = $(this).attr("data-colorName");
    let chosenFabric, selectedFabric;

    $(this).attr("data-titleText", colorName);

    let fabricType = $(this).parent().attr("fabric-type");
    let fabricWool = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/wool.png"/></div>`;
    let fabricLeather = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/Genuine_Leather.png"/></div>`;
    let fabricSnaps = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/snaps.png"/></div>`;
    let fabricBands = `<div style="display: inline-block; position: relative; top:0; left:0; margin: 0 auto; overflow: hidden; position: relative;">
    <div style="position: absolute; top: 0; left:0; background-color:${colorCode}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_main_color.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="position: absolute; top: 0; left:0; background-color:${colorCode2}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_4_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="position: absolute;top: 0; left:0; background-color:${colorCode3}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_2_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="display: inline-block; position: absolute; top:0; left:0;"><img src="./assets/images/icons/band-combo/tricot.png" style="display: inline-block; width:100%"></div>
    </div>`;

    if (fabricType == "leather") {
      chosenFabric = fabricLeather;
    } else if (fabricType == "snaps") {
      chosenFabric = fabricSnaps;
    } else if (fabricType == "bands") {
      chosenFabric = fabricBands;
    } else {
      chosenFabric = fabricWool;
    }

    let selectedcolorCode = thisLi
      .parent()
      .find(".selected-color")
      .data("color");
    let selectedcolorCode2 = thisLi
      .parent()
      .find(".selected-color")
      .data("color2");
    let selectedcolorCode3 = thisLi
      .parent()
      .find(".selected-color")
      .data("color3");
    let selectedcolorName = thisLi
      .parent()
      .find(".selected-color")
      .attr("data-colorName");

    // For Fabric Divs
    let selectedfabricWool = `<div style="background-color:${selectedcolorCode}"><img src="./assets/images/icons/wool.png"/></div><span>${selectedcolorName}</span>`;
    let selectedfabricLeather = `<div style="background-color:${selectedcolorCode}"><img src="./assets/images/icons/Genuine_Leather.png"/></div><span>${selectedcolorName}</span>`;
    let selectedfabricSnaps = `<div style="background-color:${selectedcolorCode}"><img src="./assets/images/icons/snaps.png"/></div><span>${selectedcolorName}</span>`;
    let selectedfabricBands = `<div style="display: inline-block; position: relative; top:0; left:0; margin: 0 auto; overflow: hidden; position: relative;">
    <div style="position: absolute; top: 0; left:0; background-color:${selectedcolorCode}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_main_color.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="position: absolute; top: 0; left:0; background-color:${selectedcolorCode2}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_4_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="position: absolute;top: 0; left:0; background-color:${selectedcolorCode3}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_2_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
    <div style="display: inline-block; position: absolute; top:0; left:0;"><img src="./assets/images/icons/band-combo/tricot.png" style="display: inline-block; width:100%"></div>
    </div><span>${selectedcolorName}</span>`;

    if (fabricType == "leather") {
      selectedFabric = selectedfabricLeather;
    } else if (fabricType == "snaps") {
      selectedFabric = selectedfabricSnaps;
    } else if (fabricType == "bands") {
      selectedFabric = selectedfabricBands;
    } else {
      selectedFabric = selectedfabricWool;
    }

    if (thisLi.hasClass("selected-color")) {
      thisLi
        .parent()
        .parent()
        .parent()
        .find(".swatch-img")
        .html(selectedFabric);
    }
    $(this).append(chosenFabric);

    $(this).on("click", function () {
      $(this).parent().find("li").removeClass("selected-color");
      $(this)
        .addClass("selected-color")
        .parent()
        .parent()
        .parent()
        .find(".swatch-select span")
        .css("background-color", colorCode);
      $(this).parent().parent().removeClass("fadeUpIn");
      let targetInput = $(this).parent().attr("targetInput");
      if (targetInput !== undefined || targetInput !== false) {
        $(targetInput).css("color", colorCode);
      }

      // For Fabric Divs
      let newfabricWool = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/wool.png"/></div><span>${colorName}</span>`;
      let newfabricLeather = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/Genuine_Leather.png"/></div><span>${colorName}</span>`;
      let newfabricSnaps = `<div style="background-color:${colorCode}"><img src="./assets/images/icons/snaps.png"/></div><span>${colorName}</span>`;
      let newfabricBands = `<div style="display: inline-block; position: relative; top:0; left:0; margin: 0 auto; overflow: hidden; position: relative;">
      <div style="position: absolute; top: 0; left:0; background-color:${colorCode}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_main_color.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
      <div style="position: absolute; top: 0; left:0; background-color:${colorCode2}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_4_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
      <div style="position: absolute;top: 0; left:0; background-color:${colorCode3}; -webkit-mask-image: url(./assets/images/icons/band-combo/tricot_2_lines.png); -webkit-mask-position: center; -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"></div>
      <div style="display: inline-block; position: absolute; top:0; left:0;"><img src="./assets/images/icons/band-combo/tricot.png" style="display: inline-block; width:100%"></div>
      </div><span>${colorName}</span>`;

      if (fabricType == "leather") {
        chosenFabric = newfabricLeather;
      } else if (fabricType == "snaps") {
        chosenFabric = newfabricSnaps;
      } else if (fabricType == "bands") {
        chosenFabric = newfabricBands;
      } else {
        chosenFabric = newfabricWool;
      }

      $(this).parent().parent().parent().find(".swatch-img").html(chosenFabric);
    });
  });

// Text Options Action Behave
$("[data-related]").each(function () {
  $($(this).data("related"))
    .addClass("hidden")
    .css("transition", "all .3s ease");
  $(this).on("change", function () {
    if ($(this).val() == "arc") {
      $($(this).data("related")).removeClass("hidden");
    } else {
      $($(this).data("related")).addClass("hidden");
    }
  });
});

$("button[data-action]").on("click", function () {
  if ($(this).data("action") == "bold") {
    $($(this).data("target")).toggleClass("font-weight-bold");
    $(this).toggleClass("active-effect");
  }
  if ($(this).data("action") == "stroke") {
    $(this).toggleClass("active-effect");
    $($(this).data("related")).toggleClass("hidden");
  }
});

$(".swatch-select").on("click", function (e) {
  e.stopPropagation();
  if ($(this).parent().find(".swatch-container").hasClass("fadeUpIn")) {
    $(this).parent().find(".swatch-container").removeClass("fadeUpIn");
  } else {
    $(".swatch-container").removeClass("fadeUpIn");
    $(this).parent().find(".swatch-container").addClass("fadeUpIn");
    $($(this).data("related")).addClass("slideRight");
  }
});

$("body").click(function (evt) {
  if ($(".swatch-container").hasClass("fadeUpIn"))
    $(".swatch-container").removeClass("fadeUpIn");
});

// Custom Range Slider 2
$(".custom-txt-sliders").each(function () {
  var rangePercent = $(this).val();
  $(this)
    .parent()
    .find("h4")
    .html(rangePercent + "<span></span>");
  $(this).on("change input", function () {
    rangePercent = $(this).val();
    $(this)
      .parent()
      .find("h4")
      .html(rangePercent + "<span></span>");
  });
});

$(".single-range-slider").each(function () {
  let cusSlider = $(this),
    instanceNew,
    min = $(this).data("min"),
    max = $(this).data("max"),
    from = $(this).val(),
    step = $(this).data("step");

  cusSlider.ionRangeSlider({
    skin: "big",
    min: min,
    max: max,
    step: step,
    from: from,
    prettify_enabled: true,
    force_edges: true,
  });

  instanceNew = cusSlider.data("ionRangeSlider");
});

// Edit Selected Toogle
$(".img-direct-edit").hide();
$(".edit-selected").each(function () {
  let type = $(this).data("for");
  let target = $(this).data("target");
  $(this).click(function (e) {
    if (type == "images") {
      $(this).parent().parent().parent().find(target).slideDown();
    }
  });
});

// Delete Sure
$(".sure-btn").on("click", function (e) {
  e.preventDefault();
  var mes = $(this).data("message");
  Swal.fire({
    title: mes,
    icon: "warning",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: `Yes`,
    confirmButtonColor: "#f74646",
    iconColor: "#f74646",
    cancelButtonColor: "#04abed",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Cleared!",
        showConfirmButton: false,
        timer: 800,
        iconColor: "#04abed",
      });
    }
  });
});

// Password View
$(".password-input i").on("click", function () {
  if ($(this).hasClass("fa-eye-slash")) {
    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
    $(this).parent().find("input").attr("type", "text");
  } else {
    $(this).addClass("fa-eye-slash").removeClass("fa-eye");
    $(this).parent().find("input").attr("type", "password");
  }
});

// Custom Add

$("#add-new-text").hide();
$("[data-action]").click(function (e) {
  e.preventDefault();
  let type = $(this).data("for");
  let target = $(this).data("target");
  if ($(this).data("action") == "new-text-field") {
    $(target).slideDown();
  }
  if ($(this).data("action") == "cancel-field") {
    if (type == "images") {
      $(this).parent().parent().parent().parent().find(target).slideUp();
    }
    if (type == "text") {
      $(target).slideUp();
    }
  }
});

$(".clipart-container").hide();
$(".clipart-add").click(function (e) {
  e.preventDefault();
  $(".clipart-container").slideDown();
});
$(".btn-cancle").click(function () {
  $($(this).data("target")).slideUp();
});

$(".date").each(function () {
  $(this).datepicker({
    format: "dd-mm-yy",
  });
});

// Subcategory under mega menu hide

$("#main-menu .has-subcat").each(function () {
  $(this).find("ul").slideUp();
  if ($(window).width() >= "1200") {
    $(this).on("mouseenter", function () {
      $(this).find("ul").slideDown();
    });
    $(this).on("mouseleave", function () {
      $(this).find("ul").slideUp();
    });
  } else {
    $(this).on("click", function (e) {
      $(this).find("ul").slideToggle();
    });
  }
});

$(".reply-field").hide();
$(".reply-btn").each(function () {
  $(this).on("click", function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".reply-field")
      .slideToggle();
  });
});

$("#size-table").find("td span:first-child").removeClass("d-none");
$("#size-table").find("td span:last-child").addClass("d-none");

$(".size-change input").on("change", function () {
  let target = $(this).data("target");
  if ($(this).prop("checked")) {
    $(target).find("td span:first-child").addClass("d-none");
    $(target).find("td span:last-child").removeClass("d-none");
  } else {
    $(target).find("td span:first-child").removeClass("d-none");
    $(target).find("td span:last-child").addClass("d-none");
  }
});

$(".review-form-reveal").on("click", function () {
  $(this).parent().toggleClass("open");
});

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "/assets/images/flags";
  var $state = $(
    '<span><img src="' +
      baseUrl +
      "/" +
      state.element.value.toLowerCase() +
      '.png" width="18" class="flag-select" /> ' +
      state.text +
      "</span>"
  );
  return $state;
}

$(".has-flag").each(function () {
  $(this).select2({
    minimumResultsForSearch: -1,
    templateResult: formatState,
    templateSelection: formatState,
  });
});

if ($(window).width() < "1200") {
  let searchBar = $(".main-menu").find(".nav-search-bar").html();
  $(".main-menu").find(".nav-search-bar").remove();
  $(".mob-nav-icon").after(`<li>${searchBar}</li>`);
}
