var database = require('../database')


/**
 * ****************************************************************************************************
 * ************************************ Consulta Simples **********************************************
 * ****************************************************************************************************
 */

database 
    .raw('SELECT * FROM `filmes`')      // Nome da coluna e valor para a condicional
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('')
        console.log('where => ', dados)
        console.log('')
        console.log('Retorna Duas Arrays: a primeira são os dados e a segunda são as definições das colunas que ele percorreu')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })