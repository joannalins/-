let paginaAtual = 0;

const paginas = document.querySelectorAll(".pagina");
console.log(paginas.length);


function mostrarPagina(numero) {

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    paginas[numero].classList.add("ativa");

}

function proximaPagina() {

    console.log("cliquei");

    paginaAtual++;

    mostrarPagina(paginaAtual);

}


// botão não fugindo

const botaoNao = document.getElementById("nao");


if (botaoNao) {

    botaoNao.addEventListener("mouseover", fugir);

    botaoNao.addEventListener("touchstart", fugir);

}


function fugir(event) {

    const largura = window.innerWidth - 120;
    const altura = window.innerHeight - 80;


    botaoNao.style.position = "fixed";

    botaoNao.style.left = Math.random() * largura + "px";

    botaoNao.style.top = Math.random() * altura + "px";

}


// quando aceita

function aceitou() {

    paginaAtual = 5;

    mostrarPagina(paginaAtual);

}
let lugarEscolhido = "";

function escolherLugar(lugar) {

    lugarEscolhido = lugar;

    paginaAtual = 7;

    mostrarPagina(paginaAtual);

}

let dataEscolhida = "";
let horaEscolhida = "";


function escolherData() {

    const campoData = document.getElementById("dataEscolhida");

    dataEscolhida = campoData.value;

    paginaAtual = 8;

    mostrarPagina(paginaAtual);

}


function escolherHora() {

    const campoHora = document.getElementById("horaEscolhida");

    horaEscolhida = campoHora.value;

    paginaAtual = 9;

    mostrarPagina(paginaAtual);

}

function avisarNoca() {

    alert("funcionou 💛");

}
