var database = require('../database')


/**
 * ****************************************************************************************************
 * ************************************ Consulta Simples **********************************************
 * ****************************************************************************************************
 */

 // O numero de condicionais "where" é ilimitado!

database 
    .where({ nome: 'Song of the Sea' })      // Nome da coluna e valor para a condicional
    .table('filmes')                         // na tabela filmes
    .delete()                                // deleta
    .then( dados => {                        // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('')
        console.log('Retorna o numero de linhas afetadas')
        console.log('condição => nome: "Song of the Sea"')
        console.log('delete => ', dados)
        console.log('')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })

