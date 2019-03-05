class Lagarto{
    empataCom(jogada){
        return jogada === "lagarto";
    }

    ganhaContra(jogada){
        return jogada === "spock" || jogada === "papel";
    }
}

module.exports = new Lagarto();