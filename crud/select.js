var database = require('../database')


/**
 * ****************************************************************************************************
 * ************************************ Consulta Simples **********************************************
 * ****************************************************************************************************
 */

database 
    .select()               // Comando SELECT do mysql
    .table('filmes')        // na tabela filmes
    .then( dados => {       // se der certo

        // vou apenas imprimir os dados no console
        console.log('dados Select => ', dados)
    })
    .catch( err => {        // se der errado
        console.log(err)
    })

/**
 * ****************************************************************************************************
 * ************************************ Consulta Com parametro ****************************************
 * ****************************************************************************************************
 */

    /**
        * O método .select() aceita parametros de retorno
        *  
        * Irá retornar apenas "nome" e "ano" dos filmes
        * não retornará "id" *
        *
     */ 
    
database 
    .select(['nome','ano']) // Comando SELECT do mysql
    .table('filmes')        // na tabela filmes
    .then( dados => {       // se der certo

        // vou apenas imprimir os dados no console
        console.log('dados Select com parametro => ', dados)
    })
    .catch( err => {        // se der errado
        console.log(err)
    })
    