// Função dedicada ao menu hambúrguer
function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
  var body = document.querySelector("body");

  body.classList.toggle("shadow");
}
