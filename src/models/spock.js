class Spock{
    empataCom(jogada){
        return jogada === "spock";
    }

    ganhaContra(jogada){
        return jogada === "pedra" || jogada === "tesoura";
    }
}

module.exports = new Spock();