import { conteudo } from "../data.js";

const parametros = new URLSearchParams(window.location.search);
const idCapturado = parametros.get("id");

const cursoSelecionado = conteudo.find((curso) => curso.id === idCapturado);
const cursosContainer = document.querySelector("#aulas");

async function aulas() {
  cursoSelecionado.video.forEach((aula) => {
    cursosContainer.insertAdjacentHTML(
      "beforeend",
      `<a class="text-lg font-semibold mb-2 block bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors cursor-pointer" href="player.html?id=${idCapturado}&video=${aula.id}">${aula.title}</a>`,
    );
  });
}

aulas();
