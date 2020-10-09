var knex = require('knex')({
    // biblioteca instalada, no nosso caso a mysql2
    // é possivel verificar esta informação nas dependencias do projeto pelo package.json
    client: 'mysql2', 
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'pesquisaesatisfacao'
    }
  });

  module.exports = knex