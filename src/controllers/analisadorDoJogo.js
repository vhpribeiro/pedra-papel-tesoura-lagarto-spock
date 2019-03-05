const analisaJogada = require('../models/analisaJogadas');

class AnalisadorDoJogoController{

    analisarJogo(req, res){
        let jogada = req.body;

        let jogada1 = jogada.jogada1;
        let jogada2 = jogada.jogada2;
        console.log(jogada1);
        console.log(jogada2);

        let resultado = analisaJogada.analisar(jogada1, jogada2);
        return res.json({
            resultado: resultado
        });
    }
}

module.exports = new AnalisadorDoJogoController();