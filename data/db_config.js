const knex = require('knex')
const config = require('../knexfile');
const db_enviorment = process.env.DB_ENV || 'development'

module.exports = knex(config[db_enviorment])