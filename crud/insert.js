var database = require('../database')

var dados = {
    nome: "Song of the Sea",
    ano: '2014'
}


/**
 * ****************************************************************************************************
 * ************************************** Insert Simples **********************************************
 * ****************************************************************************************************
 */

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


/**
 * ****************************************************************************************************
 * ************************************** Insert Multiplo *********************************************
 * ****************************************************************************************************
 */

/**
 * Também é possivel inserir um objeto
 * (multiplas linhas ao mesmo tempo) 
 * com a seguinte construção:
 */
 
 var dados = [
  {
      nome: "Song of the Sea 2",
      ano: '2014'
  },
  {
      nome: "Scooby!",
      ano: '2020'
  },
 ]

 database 
    .insert(dados)          // inserir dados
    .into('filmes')         // na tabela filmes
    .then( dados => {       // se der certo
        
        // retorna o ID do que foi inserido
        // Se retornar maior que zero
        // significa que foi inserido com sucesso
        console.log('retorno inserção múltipla de dados => ', dados)
    })
    .catch( err => {        // se der errado
        console.log(err)
    })


    

/**
 * ****************************************************************************************************
 * ************************************** Vsualização de query construída *****************************
 * ****************************************************************************************************
 */

// esse metodo retorna uma query
// armazenamos numa variavel pra poder mostrar no console
// para executar no console é so utilizar:

var query = database 
    .insert(dados) // inserir dados
    .into('filmes') // na tabela filmes

console.log(query.toQuery())
    