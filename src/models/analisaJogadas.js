const jogadaFactory = require('./jogadaFactory');

class AnalisaJogadas{
    
    constructor(){
        this.jogadaFactory = jogadaFactory;
    }

    analisar(jogada1, jogada2){
        let jogada1Model = this.jogadaFactory.criarJogada(jogada1);

        if(jogada1Model.empataCom(jogada2))
            return `${jogada1} empata com ${jogada2}`;
        
        return jogada1Model.ganhaContra(jogada2) ? `${jogada1} ganha de ${jogada2}` : `${jogada2} ganha de ${jogada1}`;
    }
}

module.exports = new AnalisaJogadas();