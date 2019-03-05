class Tesoura{

    empataCom(jogada){
        return jogada === "tesoura";
    }

    ganhaContra(jogada){
        return jogada === "papel" || jogada === "lagarto";
    }
}

module.exports = new Tesoura();