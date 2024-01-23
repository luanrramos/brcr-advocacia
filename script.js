function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/icones/menu_white_36dp.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/icones/close_white_36dp.svg";
  }
}
