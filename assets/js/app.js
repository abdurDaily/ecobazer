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
    arrows:false,
    dots:true
  });
});
