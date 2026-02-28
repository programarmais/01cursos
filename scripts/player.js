import { conteudo } from "../data.js";

const title = document.getElementById("title");
const parametros = new URLSearchParams(window.location.search);

const idCapturado = parametros.get("id");
const idVideo = parametros.get("video");

const cursoSelecionado = conteudo.find((curso) => curso.id === idCapturado);
const videoSelecionado = cursoSelecionado.video.find(
  (video) => video.id === idVideo,
);

title.textContent = videoSelecionado.title;

const videoElement = document.getElementById("player");

videoElement.src = videoSelecionado.url;

const player = new Plyr(videoElement);
