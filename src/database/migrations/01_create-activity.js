exports.up = function(knex) {
  return knex.schema.createTable('activities', function (table) {
    table.increments()
    table.string('teacher_id').notNullable();
    table.string('whatsapp').notNullable();
    table.string('group').notNullable();
    table.string('subject').notNullable();

    table.integer('week_day');
    table.integer('from');
    table.integer('to');

    table.string('description');  

    table.foreign('teacher_id').references('id').inTable('teachers'); 
  });
};

exports.down = function(knex) {
return knex.schema.dropTable('activities');
};