$(function () {
  let mobileSearchClose = $(".search_cross");
  let getSearchIcon = $(".get_search");
  let serachBody = $(".mobile_search");

  getSearchIcon.on("click", function () {
    serachBody.addClass("mobile_search_active");
  });

  mobileSearchClose.on("click", function () {
    serachBody.removeClass("mobile_search_active");
  });

  //   SLIDER FOR BANNER
  $(".slides").slick({
    arrows: false,
    dots: true,
  });

  // BANNER ADD CARD
  const $cards = $(".single_card");
  const $defaultActive = $(".single_card.active");

  $cards.on("mouseenter", function () {
    const $hovered = $(this);

    if (!$hovered.hasClass("active")) {
      $defaultActive.addClass("add_secondery_active").removeClass("active");
      $hovered.addClass("add_active");
    }
  });

  $cards.on("mouseleave", function () {
    const $hovered = $(this);

    if (!$hovered.hasClass("active")) {
      $hovered.removeClass("add_active");
      $defaultActive.removeClass("add_secondery_active").addClass("active");
    }
  });
  // BANNER ADD CARD END

  //  CATEGORY FILTER
  $(".category-button").categoryFilter();
  // BOOTSTRAP TOOLTIP
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  //PRODUCT DETAILS

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerMode: false,
    centerPadding: "0px",
    prevArrow: `<span class="prev"><iconify-icon icon="hugeicons:arrow-up-01" width="30" height="30"></iconify-icon></span>`,
    nextArrow: `<span class="next"><iconify-icon icon="hugeicons:arrow-down-01" width="30" height="30"></iconify-icon></span>`,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          vertical: false,
          centerMode: false,
          centerPadding: 0,
          arrows: false,
        },
      },
    ],
  });

  // * ZOOM
  $(".example").imagezoomsl();

  //**COUNTER  */
  let currentPrice = $(".count_price");
  let convertedVal = parseFloat(currentPrice.text());

  $(".dec").on("click", function (e) {
    e.preventDefault();
    let countRslt = parseInt($(".count_rslt").val()); // Convert string to number

    if (countRslt > 1) {
      // console.log(convertedVal * countRslt);
      countRslt--; // Increment
      currentPrice.text(convertedVal * countRslt);
      $(".count_rslt").val(countRslt); // Set the updated value back
      $(".inc").css({
        cursor: "pointer",
      });
    } else {
      $(".dec").css({
        cursor: "not-allowed ",
      });
    }
  });

  $(".inc").on("click", function (e) {
    e.preventDefault();

    let rslt = parseInt($(".count_rslt").val());

    if (rslt < 5) {
      $(".dec").css({
        cursor: "pointer",
      });

      rslt++;
      currentPrice.text(convertedVal * rslt);
      $(".count_rslt").val(rslt);
    } else {
      $(".inc").css({
        cursor: "not-allowed",
      });
    }
  });

  //*COUNTDOWN
  const countdownDate = $(".count_timer").attr("data-time"); // or .attr("data-time")

  $(".count_timer").countdown(
    {
      date: countdownDate,
    },
    function () {
      alert("Merry Christmas!");
    }
  );

  //*VENOBOX
  $(".venobox").venobox({
    // settings here
  });
});
