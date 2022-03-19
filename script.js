let containerImg = document.getElementById("containerImg");
let container = document.getElementById("containerPaiDeTodos");
let caixa;
let capa1 = {
  imagem:
    "https://i.pinimg.com/originals/50/8f/ba/508fba93c5f1b8f1ea1db81dd969e2a0.jpg",
  videos: "https://www.youtube.com/embed/Ro0yIrOKgbM",
};
let capa2 = {
  imagem:
    "https://www.planocritico.com/wp-content/uploads/2021/01/175-Lista-Os-Melhores-Episodios-de-Vikings-1.jpg",
  videos: "https://www.youtube.com/embed/dV6p83HRk4o",
};
let capa3 = {
  imagem:
    "https://i.pinimg.com/550x/56/a0/be/56a0bec9ff88fbb573f9bf176e487e0f.jpg",
  videos: "https://www.youtube.com/embed/iSiqmV13Ffk",
};
let capa4 = {
  imagem: "https://i.ytimg.com/vi/aO-ZaF4FJls/maxresdefault.jpg",
  videos: "https://www.youtube.com/embed/aO-ZaF4FJls",
};
let capaFilmes = [capa1, capa2, capa3, capa4];

//COLOCO A CAPA NA TELA PASSANDO A FUNÇÃO DO FRAME NO CLICK
function filmeCapa() {
  containerImg.innerHTML = "";
  for (let i = 0; i < capaFilmes.length; i++) {
    containerImg.innerHTML += `<img class="idImagem${i}" src="${capaFilmes[i].imagem}" alt="" onclick= "createiFrame(${i})"/>`;
  }
}
filmeCapa();
function adicionar(i) {
  // let capaFilmesImagens = capaFilmes[i].imagem;
  let capa = document.getElementById("capa");
  let linkVideo = document.getElementById("linkVideo");
  let novaCapa = {
    imagem: capa.value,
    videos: linkVideo.value,
  };
  //VERIFICANDO OS INPUTS
  if (capa.value == "" && linkVideo.value == "") {
    alert("[ERROR] Insira a URL");
  } else if (capa.value == "" && !linkVideo.value == "") {
    alert("[ERROR] Insira a URL");
  } else if (!capa.value == "" && linkVideo.value == "") {
    alert("[ERROR] Insira a URL");
  } else if (
    capa.value.endsWith(".jpg") == false &&
    capa.value.endsWith(".png") == false
  ) {
    alert("[ERROR] Insira o endereço da capa, CORRETO!");
  } else {
    capa.value = "";
    linkVideo.value = "";
    capaFilmes.push(novaCapa);
  }
  filmeCapa();
}
function createiFrame(i) {
  let iframe;
  console.log("FUICLICADO");
  if (!caixa) {
    caixa = document.createElement("div");
    caixa.setAttribute("id", "video");
    container.appendChild(caixa);
  }
  console.log(video);
  iframe = document.getElementsByTagName("iframe")[0];
  caixa.innerHTML = `<iframe id="frame" src="${capaFilmes[i].videos}"></iframe>`;
  caixa.innerHTML += ` <button onclick="removFrameImg(${i})">Remover</button>`;
}
function removFrameImg(i) {
  let removDiv = document.getElementById("video");
  let removImg = document.querySelector(`.idImagem${i}`);
  removImg.style.display = "none";
  container.removeChild(removDiv);
  caixa = undefined;
}
