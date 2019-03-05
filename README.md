# Pedra Papel Tesoura Lagarto Spock

Esse é um jogo muito conhecido devido a série _The big bang theory_ aonde o personagem _Sheldon_ é viciado no jogo. Como grande fã da série, resolvi criar uma API que dado a jogada de ambos os jogadores respondesse quem ganha.

## Como funciona

Para testar esa API basta executar a aplicação, executando na raiz o comando: 
```
yarn start
```

Com a aplicação em execução, basta fazer uma requisição para o endereço 
```
http://localhost:3000/analisarJogo
```

No formato:
```
{
    jogada1: pedra,
    jogada2: lagarto
}
```
 E com isto, ele retornar um json no fomato:
```
{
    "resultado": "lagarto ganha de spock"
}
```

### Tecnologias usadas

Essa API foi desenvolvida para praticar meus conhecimento de NodeJS e testar o framework de teste **Jest**. Uma funcionalidade interessante é a facilidade de se ver a cobertura de código do seu projeto com este framework, para isto basta executar o comando na raiz:
```
yarn test
```

Que será gerado um arquivo .html na pasta **\_\_testes__/cobertura**.
