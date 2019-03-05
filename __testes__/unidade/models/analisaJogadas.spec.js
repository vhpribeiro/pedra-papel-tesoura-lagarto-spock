let analisaJogadas = require('../../../src/models/analisaJogadas');

describe('Testes do analisador de vencedor', () => {
    test('Deve dizer que empatou quando forem ambas jogadas iguais', () => {
        const jogada1 = 'lagarto';
        const jogada2 = 'lagarto';
        const resultadoEsperado = `${jogada1} empata com ${jogada2}`;

        let resultadoObtido = analisaJogadas.analisar(jogada1, jogada2);

        expect(resultadoObtido).toBe(resultadoEsperado);
    });

    test('Deve dizer que a primeira jogada ganhou', () => {
        const jogada1 = 'pedra';
        const jogada2 = 'lagarto';
        const resultadoEsperado = `${jogada1} ganha de ${jogada2}`;

        let resultadoObtido = analisaJogadas.analisar(jogada1, jogada2);

        expect(resultadoObtido).toBe(resultadoEsperado);
    });

    test('Deve dizer que a segunda jogada ganhou', () => {
        const jogada1 = 'lagarto';
        const jogada2 = 'pedra';
        const resultadoEsperado = `${jogada2} ganha de ${jogada1}`;

        let resultadoObtido = analisaJogadas.analisar(jogada1, jogada2);

        expect(resultadoObtido).toBe(resultadoEsperado);
    });
});