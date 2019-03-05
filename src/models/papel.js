class Papel{
    empataCom(jogada){
        return jogada === "papel";
    }

    ganhaContra(jogada){
        return jogada === "pedra" || jogada === "spock";
    }
}

module.exports = new Papel();