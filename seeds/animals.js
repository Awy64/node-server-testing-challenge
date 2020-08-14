
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { name: 'catty', species: "cat", age: 1},
        { name: 'doggie', species: 'dog', age: 1},
        { name: 'peanut', species: "dog", age: 12}
        
      ]);
    });
};
