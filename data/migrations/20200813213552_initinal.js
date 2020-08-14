
exports.up = function(knex) {
  knex.schema.createTable('animals', tbl => {
    tbl.incerments('id');
    tbl.text('name').notNullable();
    tbl.text('species').notNullable();
    tbl.float('age').notNullable();
  })
};

exports.down = function(knex) {
  
};
