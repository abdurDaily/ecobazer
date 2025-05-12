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
});
