let pedra = require('../../../src/models/pedra');

describe('Testes da pedra', () => {
    test('Deve empatar com pedra', () => {
        const jogada = 'pedra';

        const resultado = pedra.empataCom(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra tesoura', () => {
        const jogada = 'tesoura';

        const resultado = pedra.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra lagarto', () => {
        const jogada = 'lagarto';

        const resultado = pedra.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });
});