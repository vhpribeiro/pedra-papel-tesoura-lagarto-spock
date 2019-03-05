let lagarto = require('../../../src/models/lagarto');

describe('Testes do lagarto', () => {
    test('Deve empatar com lagarto', () => {
        const jogada = 'lagarto';

        const resultado = lagarto.empataCom(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra spock', () => {
        const jogada = 'spock';

        const resultado = lagarto.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar contra papel', () => {
        const jogada = 'papel';

        const resultado = lagarto.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    })
})