const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(
            evento.target.dataset.controle,
            evento.target.parentNode,
            evento.target.dataset.peca
        );
    });
});

function manipulaDados(operacao, controle, peca_estatistica) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao == "+") {
        peca.value = Number(peca.value) + 1;
        atualizaEstatistica(peca_estatistica, operacao);
    } else {
        if (Number(peca.value) === 0) {
            peca.value = "00";
        } else if (Number(peca.value) - 1 === 0) {
            peca.value = "00";
            atualizaEstatistica(peca_estatistica, operacao);
        } else {
            peca.value = Number(peca.value) - 1;
            atualizaEstatistica(peca_estatistica, operacao);
        }
    }
}

const pecas = {
    bracos: {
        forca: 29,
        poder: 35,
        energia: -21,
        velocidade: -5,
    },

    blindagem: {
        forca: 41,
        poder: 20,
        energia: 0,
        velocidade: -20,
    },
    nucleos: {
        forca: 0,
        poder: 7,
        energia: 48,
        velocidade: -24,
    },
    pernas: {
        forca: 27,
        poder: 21,
        energia: -32,
        velocidade: 42,
    },
    foguetes: {
        forca: 0,
        poder: 28,
        energia: 0,
        velocidade: -2,
    },
};

function atualizaEstatistica(peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (operacao === "+") {
            elemento.textContent =
                Number(elemento.textContent) +
                pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent =
                Number(elemento.textContent) -
                pecas[peca][elemento.dataset.estatistica];
        }
    });
}
