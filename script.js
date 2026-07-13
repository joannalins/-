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

    const duracao = 3000;
    const fim = Date.now() + duracao;

    const intervalo = setInterval(() => {

        if (Date.now() > fim) {
            clearInterval(intervalo);
            return;
        }

        confetti({
            particleCount: 80,
            spread: 100,
            startVelocity: 30,
            origin: {
                x: Math.random(),
                y: 0
            }
        });

    }, 250);


    setTimeout(() => {
        paginaAtual = 5;
        mostrarPagina(paginaAtual);
    }, 3000);

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

    document.getElementById("resumoDate").innerHTML =
    `
    🌻 seu date:

    <br><br>

    📍 ${lugarEscolhido}

    <br>

    📅 ${dataEscolhida}

    <br>

    ⏰ ${horaEscolhida}
    `;

}
