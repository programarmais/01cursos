import { conteudo } from "../data.js";

const title = document.getElementById("title");
const description = document.getElementById("description");
const parametros = new URLSearchParams(window.location.search);

const idCapturado = parametros.get("id");
const idVideo = parametros.get("video");

const cursoSelecionado = conteudo.find((curso) => curso.id === idCapturado);
const videoSelecionado = cursoSelecionado.video.find(
  (video) => video.id === idVideo,
);

title.textContent = videoSelecionado.title;
description.innerHTML = videoSelecionado.description;

const videoElement = document.getElementById("player");
videoElement.src = videoSelecionado.url;

const player = new Plyr(videoElement);

const indexAtual = cursoSelecionado.video.findIndex(
  (video) => video.id === idVideo,
);

const containerAnterior = document.getElementById("containerAnterior");
const linkAnterior = document.getElementById("linkAnterior");
const tituloAnterior = document.getElementById("tituloAnterior");
const imgAnterior = document.getElementById("imgAnterior");

const containerProximo = document.getElementById("containerProximo");
const linkProximo = document.getElementById("linkProximo");
const tituloProximo = document.getElementById("tituloProximo");
const imgProximo = document.getElementById("imgProximo");

if (indexAtual > 0) {
  const videoAnterior = cursoSelecionado.video[indexAtual - 1];

  linkAnterior.href = `player.html?id=${idCapturado}&video=${videoAnterior.id}`;
  tituloAnterior.textContent = videoAnterior.title;
  imgAnterior.src = videoAnterior.img || cursoSelecionado.img;

  containerAnterior.classList.remove("hidden");
}

if (indexAtual < cursoSelecionado.video.length - 1) {
  const videoProximo = cursoSelecionado.video[indexAtual + 1];

  linkProximo.href = `player.html?id=${idCapturado}&video=${videoProximo.id}`;
  tituloProximo.textContent = videoProximo.title;
  imgProximo.src = videoProximo.img || cursoSelecionado.img;

  containerProximo.classList.remove("hidden");
}
