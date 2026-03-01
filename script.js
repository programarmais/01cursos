import { conteudo } from "../data.js";

const sliders = document.querySelector(".carrosselBox");
let scrollPerClick = 100;

async function scrollSlider() {
  conteudo.forEach((curso) => {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<a href="./pages/curso.html?id=${curso.id}"><img class="img-${curso.id} slider-img shrink-0 w-[85vw] md:w-80 h-full object-cover rounded-xl shadow-lg" src="${curso.img}"></a>`,
    );
  });
}

scrollSlider();

const btnesquerdo = document.querySelector(".switchLeft");
const btndireito = document.querySelector(".switchRight");

btnesquerdo.addEventListener("click", () => {
  sliders.scrollLeft += scrollPerClick;
});

btndireito.addEventListener("click", () => {
  sliders.scrollLeft -= scrollPerClick;
});
