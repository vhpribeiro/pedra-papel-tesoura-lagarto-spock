class JogadaFactory{
    criarJogada(jogada){
        try{
            let jogadaCriada = require(`../models/${jogada}`);
            return jogadaCriada;
        }
        catch{
            throw new Error();
        }
    }
}

module.exports = new JogadaFactory()