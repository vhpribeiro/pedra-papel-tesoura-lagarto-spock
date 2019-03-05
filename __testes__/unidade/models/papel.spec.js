let papel = require('../../../src/models/papel');

describe('Testes do papel', () => {
    test('Deve empatar com papel', () => {
        const jogada = 'papel';

        const resultado = papel.empataCom(jogada);

        expect(resultado).toBeTruthy();
    });

    test('Deve ganhar de pedra', () => {
        const jogada = 'pedra';

        const resultado = papel.ganhaContra(jogada);
        
        expect(resultado).toBeTruthy();
    });

    test('Deve refutar o Spock', () => {
        const jogada = 'spock';

        const resultado = papel.ganhaContra(jogada);

        expect(resultado).toBeTruthy();
    });
});