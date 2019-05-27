// ACORDION SECTION REVIEWS
$(".menu-acco__trigger").on("click", e => {
  e.preventDefault();
  const thisTarget = e.currentTarget;
  const thisItem = thisTarget.parentNode;
  if (thisItem.classList.contains("active")) {
    return null;
  }
  $(".menu-acco__item").removeClass("active");
  thisItem.classList.add("active");
});

$(".menu-close").on("click", e => {
  e.preventDefault();
  $(".menu-acco__item").removeClass("active");
});
