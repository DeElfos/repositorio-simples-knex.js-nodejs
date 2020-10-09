### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Andamento do projeto](#andamento-do-projeto)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [CRUD Simples](#crud-simples)

:small_blue_diamond: [Licença](#licença)

## Descrição do projeto 

<p align="justify">
  Um projeto Simples mostrando as principais funcionalidades do framework "knex.js"

  Link para documentação: http://knexjs.org/#Installation-node
</p>

## Andamento do projeto

### Migrations
...

### Métodos
- [X] Delete
- [X] Insert
- [X] Select
- [X] Where
- [ ] Update
- [ ] OrderBy
- [ ] Join
- [ ] Join com where

### Relacionamentos
- [ ] 1 para 1
- [ ] 1 para M
- [ ] M para M



## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

> git clone https://github.com/DeElfos/repositorio-simples-knex.js-nodejs.git

Ainda no terminal, instale as dependencias do NPM:

> npm install


## CRUD Simples

### Insert

```
database 
    .insert(dados)          // inserir dados
    .into('filmes')         // na tabela filmes
    .then( dados => {       // se der certo
        
        // retorna o ID do que foi inserido
        // Se retornar maior que zero
        // significa que foi inserido com sucesso
        console.log('dados => ', dados)
    })
    .catch( err => {        // se der errado
        console.log(err)
    })
```

## Como rodar os testes

### Insert
```
    node crud/insert
```

### Select
```
    node crud/select
```

### Where
```
     node crud/where 
```

### Por Extenso (sql sem o builder)
```
     node crud/porExtenso 
```

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2020 - Elphen Sistemas - Estudo de caso - Knex.js