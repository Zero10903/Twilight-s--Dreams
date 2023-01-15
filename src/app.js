const menu = document.getElementById("menu");
const links = document.getElementsByClassName("menu__links");

window.onload = () => {
  //   alert("Pagina cargada");
  menu.style.transform = "translateY(0)";
  links.style.transform = "translateY(200%)";
};

// menu.addEventListener("load", () => {
//   alert("pagina cargada");
//   //   menu.style.transform.translate = 0;
// });
