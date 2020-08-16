const knex = require('knex')

const connection = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '@Cintia130609',
    database : 'ApiStudanDy'
  }
})

module.exports = connection
