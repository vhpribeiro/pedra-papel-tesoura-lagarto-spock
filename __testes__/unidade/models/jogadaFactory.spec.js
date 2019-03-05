let jogadaFactory = require('../../../src/models/jogadaFactory');
let pedraModel = require('../../../src/models/pedra');
let papelModel = require('../../../src/models/papel');
let tesouraModel = require('../../../src/models/tesoura');
let lagartoModel = require('../../../src/models/lagarto');
let spockModel = require('../../../src/models/spock');

describe('Testes da factory de jogadas', () => {

    test.each`
    jogada | jogadaEsperada
    ${'pedra'} | ${pedraModel}
    ${'papel'} | ${papelModel}
    ${'tesoura'} | ${tesouraModel}
    ${'lagarto'} | ${lagartoModel}
    ${'spock'} | ${spockModel}
    `('Deve criar um(a) $jogada conforme lhe é informado a $jogadaEsperada', ({ jogada, jogadaEsperada}) => {     
        const jogadaObtida = jogadaFactory.criarJogada(jogada);

        expect(jogadaObtida).toBe(jogadaEsperada);
    });

    test('Não deve criar uma jogada inválida', () => {
        const jogadaInvalida = 'balao';

        const violacaoObtida = () => {
            jogadaFactory.criarJogada(jogadaInvalida);
        }

        expect(violacaoObtida).toThrow(Error);
    });
});