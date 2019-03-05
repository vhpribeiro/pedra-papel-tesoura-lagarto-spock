class Pedra{
    empataCom(jogada){
        return jogada === "pedra";
    }

    ganhaContra(jogada){
        return jogada === "tesoura" || jogada === "lagarto";
    }
}

module.exports = new Pedra();