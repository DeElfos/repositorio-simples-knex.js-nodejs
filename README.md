# Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Andamento do projeto](#andamento-do-projeto)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)


:small_blue_diamond: [Licença](#licença)

<br />
<br />

# Descrição do projeto 

<p align="justify">
  Um projeto Simples mostrando as principais funcionalidades do framework "knex.js"

  Link para documentação: http://knexjs.org/#Installation-node
</p>

<br/>
<br/>

# Menu de referência :

## Rodando testes: 
:small_blue_diamond: [Insert](###realizar-insert)

:small_blue_diamond: [Select](###realizar-select)

:small_blue_diamond: [Where](###realizar-where)

:small_blue_diamond: [Por Extenso (sql sem o builder)](###realizar-por-extenso-(sql-sem-o-builder))


<br/>
<br/>

# Andamento do projeto (o que está incluso nos testes)

## Migrations
- [] O que são?
- [] Configurando
- [] Delete
- [] Criando uma migration
- [] Rodando uma migration
- [] "voltando" uma migration (Rollback)

## Métodos
- [X] Delete
- [X] Insert
- [X] Select
- [X] Where
- [ ] Update
- [ ] OrderBy
- [ ] Join
- [ ] Join com where

## Relacionamentos
- [ ] 1 para 1
- [ ] 1 para M
- [ ] M para M



<br/>
<br/>

# Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

> git clone https://github.com/DeElfos/repositorio-simples-knex.js-nodejs.git

Ainda no terminal, instale as dependencias do NPM:

> npm install

Ainda no terminal, instale o knex globalmente ( para facilitar o gerenciamento do pacote e poder seguir os exemplos ) :
> npm install knex -g


<br/>
<br/>
<br/>

# Como rodar os testes

## Realizar Insert
```
    node crud/insert
```

## Realizar Select
```
    node crud/select
```

## Realizar Where
```
     node crud/where 
```

## Realizar Por Extenso (sql sem o builder)
```
     node crud/porExtenso 
```


<br/>
<br/>
<br/>

# Explicações

## O que são migrations?

>

<br />

## Configurando

Caso seu projeto não possua um "knexfile.js" existente, rode o seguinte comando para criar uma amostra de arquivo para configurações de banco de dados ( meu projeto já possui, basta configurar com os seus dados ) :

> knex init

Este comando irá gerar um arquivo de amostra, para facilitar os testes, eu comentei os métodos e deixei apenas o development (desenvolvimento), porém é possível configurar diferentes bancos para os modos de "produção", "desenvolvimento" e 

<br/>
<br/>
<br/>

# Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2020 - Elphen Sistemas - Estudo de caso - Knex.js