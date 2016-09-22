function dropDown () {
  $("ul").toggleClass("visible");
  $(".hamburger").toggleClass("is-active");
}

$(".hamburger").click(dropDown);
