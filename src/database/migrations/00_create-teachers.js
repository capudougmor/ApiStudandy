//cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('teachers', table => {
    table.increments('id').primary()
    table.string('name').notNullable
    table.string('whatsapp').notNullable
    table.string('email').notNullable
    table.string('password').notNullable
    table.decimal('school').notNullable
    table.decimal('subject').notNullable
    table.string('city').notNullable
    table.string('uf', 2).notNullable
  })
}

//delata a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('teachers')
}