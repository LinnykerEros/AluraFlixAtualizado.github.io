let filme = ["Yesterday", "A chegada", "Escola de Rock"];
let res = document.getElementById("res");
let container = document.getElementById("container1");
let caixa;

let capaFilmes = [
  "https://i.pinimg.com/originals/50/8f/ba/508fba93c5f1b8f1ea1db81dd969e2a0.jpg",
  "https://www.planocritico.com/wp-content/uploads/2021/01/175-Lista-Os-Melhores-Episodios-de-Vikings-1.jpg",
  "https://i.pinimg.com/550x/56/a0/be/56a0bec9ff88fbb573f9bf176e487e0f.jpg",
  "https://i.ytimg.com/vi/aO-ZaF4FJls/maxresdefault.jpg",
];

let videos = [
  "https://www.youtube.com/embed/Ro0yIrOKgbM",
  "https://www.youtube.com/embed/dV6p83HRk4o",
  "https://www.youtube.com/embed/iSiqmV13Ffk",
  "https://www.youtube.com/embed/aO-ZaF4FJls",
];

//COLOCO A CAPA NA TELA PASSANDO A FUNÇÃO DO FRAME NO CLICK
function filmeCapa() {
  res.innerHTML = "";
  for (let i = 0; i < capaFilmes.length; i++) {
    let video = videos[i];
    let img = capaFilmes[i];
    let foto = document.createElement("img"); //criando um elemento IMG
    foto.setAttribute("src", `${img}`); //atribuindo SRC em IMG passando o vetor
    foto.setAttribute("id", "idImagem");
    foto.addEventListener("click", function () {
      //adicionando um evento click e passando uma função criando o vídeo
      createiFrame(video, foto);
    });
    res.appendChild(foto); // adicionando a tag IMG na DIV
  }
}

//CRIANDO O FRAMe
function createiFrame(video, img) {
  let iframe;
  console.log("FUICLICADO");
  if (!caixa) {
    // verificando variável global se ela estiver vazia ssomente na primeira vez ela adiciona o video apenas na div caixa
    caixa = document.createElement("div");
    caixa.setAttribute("id", "video");
    container.appendChild(caixa);
    iframe = document.createElement("iframe");
    caixa.appendChild(iframe);
    button = document.createElement("button");
    button.innerText = "Remover";
    button.addEventListener("click", function () {
      let removDiv = document.getElementById("video");
      res.removeChild(img);
      container.removeChild(removDiv);
      caixa = undefined;
    });
    caixa.appendChild(button);
  }
  console.log(video);
  iframe = document.getElementsByTagName("iframe")[0];
  iframe.setAttribute("src", video);
  iframe.setAttribute("id", "frame");
}
//CHAMO A FUNÇÃO DAS IMAGENS ANTES DE ADICIONAR
filmeCapa();
//ADICIONANDO NOVAS CAPAS E VIDEOS
function adicionar() {
  let capa = document.getElementById("capa");
  let linkVideo = document.getElementById("linkVideo");

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
    alert("[ERROR] Insira o endereço da imagem, CORRETO!");
  } else if (capaFilmes.includes(capa.value)) {
    alert("URL JA ADICIONADA");
  } else {
    //ADICIONANDO NO VETOR "CAPAFILMES" e "VIDEOS"
    capa.value = "";
    linkVideo.value = "";
    capaFilmes.push(capa.value);
    videos.push(linkVideo.value);
  }

  filmeCapa();
}
