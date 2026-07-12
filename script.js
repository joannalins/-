let paginaAtual = 0;

const paginas = document.querySelectorAll(".pagina");


function mostrarPagina(numero) {

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    paginas[numero].classList.add("ativa");

}


function proximaPagina() {

    paginaAtual++;

    if (paginaAtual < paginas.length) {
        mostrarPagina(paginaAtual);
    }

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
let diaEscolhido = "";
let horaEscolhida = "";


function escolherLugar(lugar) {

    lugarEscolhido = lugar;

    paginaAtual = 7;

    mostrarPagina(paginaAtual);

}


function escolherDia(dia) {

    diaEscolhido = dia;

    paginaAtual = 8;

    mostrarPagina(paginaAtual);

}


function escolherHora(hora) {

    horaEscolhida = hora;

    alert(
        "Seu date ficou:\n\n" +
        lugarEscolhido + "\n" +
        diaEscolhido + "\n" +
        horaEscolhida
    );

}
