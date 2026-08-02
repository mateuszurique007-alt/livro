/* =====================================================
SCRIPT.JS — LIVRO ROMÂNTICO
Controla a abertura e a troca das páginas
===================================================== */

/* =====================================================
ELEMENTOS DO LIVRO
===================================================== */

const cover = document.getElementById("cover");

const page1 = document.getElementById("page1");

const page2 = document.getElementById("page2");

const finalPage = document.getElementById("final");

const music = document.getElementById("music");

const flipSound = document.getElementById("flip");

/* =====================================================
FUNÇÃO PARA TOCAR O SOM DA PÁGINA
===================================================== */

function playFlipSound() {

if (!flipSound) return;

flipSound.currentTime = 0;

flipSound.play().catch(() => {

    console.log(
        "O som da página não foi reproduzido."
    );

});

}

/* =====================================================
FUNÇÃO PARA ESCONDER TODAS AS PÁGINAS
===================================================== */

function hideAllPages() {

cover.classList.remove("active");

page1.classList.remove("active");

page2.classList.remove("active");

finalPage.classList.remove("active");

}

/* =====================================================
ABRIR O LIVRO
===================================================== */

function openBook() {

/* Toca o som */

playFlipSound();


/* Faz a capa desaparecer */

cover.style.transform =
    "rotateY(-180deg)";


/* Espera a animação começar */

setTimeout(() => {

    cover.style.opacity = "0";

    cover.style.visibility = "hidden";

    cover.style.pointerEvents = "none";


    /* Mostra a primeira página */

    page1.classList.add("active");

}, 450);


/* Tenta iniciar a música */

if (music) {

    music.volume = 0.35;

    music.play().catch(() => {

        console.log(
            "A música não começou automaticamente."
        );

    });

}

}

/* =====================================================
IR PARA A PÁGINA 2
===================================================== */

function nextPage() {

playFlipSound();


/* Esconde a página 1 */

page1.classList.remove("active");


/* Mostra a página 2 */

setTimeout(() => {

    page2.classList.add("active");

}, 250);

}

/* =====================================================
VOLTAR PARA A PÁGINA 1
===================================================== */

function previousPage() {

playFlipSound();


/* Esconde a página 2 */

page2.classList.remove("active");


/* Mostra a página 1 */

setTimeout(() => {

    page1.classList.add("active");

}, 250);

}

/* =====================================================
IR PARA A PÁGINA FINAL
===================================================== */

function finishBook() {

playFlipSound();


/* Esconde a página 2 */

page2.classList.remove("active");


/* Mostra a última página */

setTimeout(() => {

    finalPage.classList.add("active");

}, 250);

}

/* =====================================================
VOLTAR PARA A PÁGINA 2
===================================================== */

function backToPage2() {

playFlipSound();


/* Esconde a página final */

finalPage.classList.remove("active");


/* Mostra novamente a página 2 */

setTimeout(() => {

    page2.classList.add("active");

}, 250);

}

/* =====================================================
ESTADO INICIAL
===================================================== */

document.addEventListener(
"DOMContentLoaded",
() => {

    /* A capa começa visível */

    cover.style.opacity = "1";

    cover.style.visibility = "visible";

    cover.style.pointerEvents = "auto";


    /* As outras páginas começam escondidas */

    page1.classList.remove("active");

    page2.classList.remove("active");

    finalPage.classList.remove("active");


    /* Volume inicial */

    if (music) {

        music.volume = 0.35;

    }

}

);
/* =====================================================
   VOLTAR AO INÍCIO DO LIVRO
   ===================================================== */

function restartBook() {

    /* Toca o som de virar página */

    playFlipSound();


    /* Esconde a página final */

    finalPage.classList.remove("active");


    /* Para e reinicia a música */

    if (music) {

        music.pause();

        music.currentTime = 0;

    }


    /* Depois da animação, mostra a capa */

    setTimeout(() => {

        /* Volta a capa para a posição original */

        cover.style.transform =
            "rotateY(0deg)";


        /* Mostra novamente a capa */

        cover.style.opacity = "1";

        cover.style.visibility = "visible";

        cover.style.pointerEvents = "auto";

    }, 350);

}
function restartBook() {
    playFlipSound();

    finalPage.classList.remove("active");

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

    setTimeout(() => {
        cover.style.transform = "rotateY(0deg)";
        cover.style.opacity = "1";
        cover.style.visibility = "visible";
        cover.style.pointerEvents = "auto";
    }, 350);
}