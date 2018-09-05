# Validador de cartões v.1.0.0
** Esta biblioteca se destina a validação de cartões de credito, para uso em aplicações web. **
Na versão atual é capaz de fazer a verificação de validade de numero de cartões de credito atraves do numero passado como parametro. 

## Os metodos utilizados na biblioteca são:

#### ** cardValidator(num); **

Exemplos de uso:

```
$node
> let validate = require('larissa-card-validator');
>validade.cardValidator(5555666677778884);
```

## Versão 1.0.0

- funcionalidades: validação de cartões de credito;
- conversão que funciona para os cartoes Visa, MasterCard, Americacan Express, Eloo, Dinners Club, Discover, Jcb e Aura;

## instalação 

- Necessário ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm);
- proceda a instalação com `$npm install larissa-card-validator`;


## Roadmap oficial do projeto


#### versão 2.0.0 (sem previsão)
- README translated to english;
- implementação da opção cartões de outras nacionalidades;


#### versão 1.0.0 (released)
- funcionalidades: validação de cartões de credito;
- conversão que funciona para os cartoes Visa, MasterCard, Americacan Express, Eloo, Dinners Club, Discover, Jcb e Aura;