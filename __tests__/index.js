const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db_config');




describe("Server setup", () => {
  test("Env setup", async () => {
    const response = await request(server).get('/')
    expect(process.env.DB_ENV).toBe('testing')
    expect(response.statusCode).toBe(200)
  })
})

describe('Aninmal Routes', () => {
  beforeAll(async () => {
    await db('animals').truncate();
    await db.seed.run
  })

  it('GET /', async () => {
    const response = await request(server).get('/animals/')
    expect(response.statusCode).toBe(200)
  })

  it('POST / ', async () => {
    const animal = {name: 'animal', species: "newAnimal", age: 3}
    const response = await request(server).post('/animals/').send(animal)
    expect(response.body).toEqual({...animal, id: 1})
  })

  it("DELETE /:id", async () => {
    const response = await request(server).delete('/animals/1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({removed: {id: 1, name: "animal", species: "newAnimal", age: 3}})
  })
})
