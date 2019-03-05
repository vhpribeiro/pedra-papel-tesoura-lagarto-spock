let tesoura = require('../../../src/models/tesoura');

describe('Testes da tesoura', () => {
    test('Deve empatar com tesoura', () => {
        const jogada = 'tesoura';

        const resultado = tesoura.empataCom(jogada);
        
        expect(resultado).toBe(true);
    });

    test('Deve ganhar de papel', () => {
        const jogada = 'papel';

        const resultado = tesoura.ganhaContra(jogada);

        expect(resultado).toBe(true);
    });

    test('Deve ganhar de lagarto', () => {
        const jogada = 'lagarto';

        const resultado = tesoura.ganhaContra(jogada);

        expect(resultado).toBe(true);
    });
});