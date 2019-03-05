let spock = require('../../../src/models/spock');

describe('Testes do Spock', () => {
    test('Deve empatar com Spock', () => {
        const jogada = "spock";

        const resultado = spock.empataCom(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra pedra', () => {
        const jogada = 'pedra';

        const resultado = spock.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra tesoura', () => {
        const jogada = 'tesoura';

        const resultado = spock.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });
});