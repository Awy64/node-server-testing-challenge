
exports.up = function(knex) {
  return knex.schema.createTable('animals', tbl => {
    tbl.increments('id');
    tbl.text('name').notNullable();
    tbl.text('species').notNullable();
    tbl.float('age').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('animals')
};
