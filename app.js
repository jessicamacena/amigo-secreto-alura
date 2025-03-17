//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function() {
    let amigos = [];

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        amigos.forEach(nome => {
            let item = document.createElement("li");
            item.textContent = nome;
            lista.appendChild(item);
        });
    }

    window.adicionarAmigo = function() {
        let nomeInput = document.getElementById("amigo");
        let nome = nomeInput.value.trim();
        if (nome && !amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            nomeInput.value = "";
        }
    };

    function sortearAmigoSecreto(participantes) {
        if (participantes.length < 2) return null;
        let sorteante = participantes[Math.floor(Math.random() * participantes.length)];
        let possiveis = participantes.filter(pessoa => pessoa !== sorteante);
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        return { sorteante, sorteado };
    }

    window.sortearAmigo = function() {
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";

        if (amigos.length < 2) {
            resultadoLista.innerHTML = "<li>Adicione pelo menos dois amigos para sortear.</li>";
            return;
        }

        let { sorteante, sorteado } = sortearAmigoSecreto(amigos);
        let resultadoItem = document.createElement("li");
        resultadoItem.textContent = `${sorteante} tirou ${sorteado}`;
        resultadoLista.appendChild(resultadoItem);
    };
});