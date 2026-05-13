import { conteudo } from "../data.js";

const parametros = new URLSearchParams(window.location.search);
const idCapturado = parametros.get("id");

function aulas() {
  const cursoSelecionado = conteudo.find((curso) => curso.id === idCapturado);
  const cursosContainer = document.querySelector("#aulas");
  const curso = document.querySelector(".infos");

  curso.insertAdjacentHTML(
    "beforeend",
    `
    <div class="infos flex flex-row items-center justify-start flex-wrap gap-10 mb-8 pl-10 pt-10 w-full">
      <img src="${cursoSelecionado.img}" alt="${cursoSelecionado.title}" class="max-w-50 w-full rounded-lg  "/>  
      <div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4">${cursoSelecionado.title}</h1>
        <p class="text-white mb-6">${cursoSelecionado.description}</p>
      </div>
    </div>
  `,
  );

  cursoSelecionado.video.forEach((aula) => {
    const imagem = aula.img ? aula.img : cursoSelecionado.img;

    cursosContainer.insertAdjacentHTML(
      "beforeend",
      `
        <a class="max-w-45 md:max-w-70 w-full text-lg font-semibold block bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors cursor-pointer" href="player.html?id=${idCapturado}&video=${aula.id}">
          <div class="aspect-video mt-2 rounded-lg overflow-hidden">
            <img src="${imagem}" alt="${aula.title}" class="w-full h-full object-cover" />
          </div>
          ${aula.title}
        </a>
    `,
    );
  });
}

aulas();
