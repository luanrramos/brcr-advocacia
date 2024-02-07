// Função - menu hambúrguer e sombra no body
function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
  var body = document.querySelector("body");

  body.classList.toggle("shadow");
}

// Áreas de Atuação

// function hover() {
//   var verMais = document.getElementById("inativo");
//   verMais.classList.remove("inativo");
// }

//Troca de mapa no Footer
var btn_cg = document.querySelector("input .btn-cg");
var btn_es = document.querySelector("input .btn-es");
function mapaEs() {
  var mapa_cg = document.querySelector("a .mapa-cg");
  var mapa_es = document.querySelector("a .mapa-es");

  mapa_cg.style.display = "none";
  mapa_es.classList.remove("inativo");
}
function mapaCg() {
  var mapa_cg = document.querySelector("a .mapa-cg");
  var mapa_es = document.querySelector("a .mapa-es");

  mapa_cg.style.display = "block";
  mapa_es.classList.add("inativo");
}

//Animação - Homepage
if (window.SimpleAnime) {
  new SimpleAnime();
}
