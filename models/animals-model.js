const db = require('../data/db_config')

module.exports = {
  findOneAnimalBy,
  findAnimalsBy,
  add,
  find,
  remove
}

function findOneAnimalBy(filter){
  return db('animals').where(filter).first();
}

function findAnimalsBy(filter){
  return db('animals').where(filter);
}

async function add(animal){
  const [id] = await db('animals').insert(animal)
  return findOneAnimalBy({id});
}

function find(){
  return db('animals')
}

function remove(id){
  return db('animals').where({id}).del()
}