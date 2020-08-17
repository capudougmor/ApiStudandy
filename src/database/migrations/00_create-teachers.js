//cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('teachers', table => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('password').notNullable()
    table.decimal('school').notNullable()
    table.decimal('subject').notNullable()
  })
}

//delata a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('teachers')
}