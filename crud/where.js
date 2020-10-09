var database = require('../database')


/**
 * ****************************************************************************************************
 * ************************************ Consulta Simples **********************************************
 * ****************************************************************************************************
 */

database 
    .where({ nome: 'Song of the Sea'})      // Nome da coluna e valor para a condicional
    .table('filmes')                        // na tabela filmes
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('')
        console.log('where => ', dados)
        console.log('')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })



/**
 * ****************************************************************************************************
 * ************************************ Select no Where ***********************************************
 * ****************************************************************************************************
 */

database 
    .select(['nome', 'ano'])
    .where({ nome: 'Song of the Sea'})      // Nome da coluna e valor para a condicional
    .table('filmes')                        // na tabela filmes
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')        
        console.log('')
        console.log('select => "Nome" e "ano" ')
        console.log('dados where com select => ', dados)
        console.log('')

    })
    .catch( err => {        // se der errado
        console.log(err)
    })


/**
 * ****************************************************************************************************
 * ************************************ Where com mais de uma condição ********************************
 * ****************************************************************************************************
 */

database 
    .select(['nome', 'ano'])
    .where({ nome: 'Song of the Sea'})      // Nome da coluna e valor para a condicional
    .where({ id: '2'})                      // Nome da coluna e valor para a condicional
    .table('filmes')                        // na tabela filmes
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('')
        console.log('select => "Nome" e "ano" ')
        console.log('Quando id = 2 e nome = "Song of the Sea" ')
        console.log('dados where com select => ', dados)
        console.log('')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })


/**
 * ****************************************************************************************************
 * ************************************ Where com uma condição ou outra (or) **************************
 * ****************************************************************************************************
 */

    
database 
    .select(['nome', 'ano'])
    .where({ nome: 'Song of the Sea'})      // Nome da coluna e valor para a condicional
    .orWhere({ ano: '2020'})                // Nome da coluna e valor para a condicional
    .table('filmes')                        // na tabela filmes
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('*****************************************************************')
        console.log('')
        console.log('Where com uma condição ou outra (or)')
        console.log('select => "Nome" e "ano" ')
        console.log('Quando nome = "Song of the Sea" ou ano="2020" ')
        console.log('dados where com select => ', dados)
        console.log('')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })

/**
 * ****************************************************************************************************
 * ************************************ Where com uma condição ou outra (or) **************************
 * ****************************************************************************************************
 */

    
database 
    .select()
    .whereRaw('ano > 2019')      // Nome da coluna e valor para a condicional
    .table('filmes')                        // na tabela filmes
    .then( dados => {                       // se der certo

        // vou apenas imprimir os dados no console
        console.log('*****************************************************************')
        console.log(
            '\x1b[36m%s\x1b[0m',
            '************************* IMPORTANTE ****************************'
        );
        console.log('*****************************************************************')
        console.log('')
        console.log('Se for utilizar LIKE, !=, >, <= ')
        console.log('Utilize o metodo ".whereRaw()" e escreva a condicional por extenso')
        console.log('Quando ano > "2019" ')
        console.log(dados)
        console.log('')
    })
    .catch( err => {        // se der errado
        console.log(err)
    })