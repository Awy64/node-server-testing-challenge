const router = require('express').Router();
const animals = require('../models/animals-model');
const { valadateAnimalId } = require('../middleware/middleware');

router.get('/', async (req, res, next) => {
  try {
    const allAnimals = await animals.find()
    res.json(allAnimals)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
try {
  const newAnimal = await animals.add(req.body)
  res.status(201).json(newAnimal)
} catch (error) {
  next(error)
}})

router.get('/:id', valadateAnimalId, (req, res) => {
  res.json(req.valadatedAnimalId)
})

router.delete('/:id', valadateAnimalId, async (req, res, next) => {
  const {id} = req.params
  const removed = req.valadatedAnimalId[0]
  try {
    await animals.remove(id)
    res.status(200).json({removed})
  } catch (error) {
    next(error)
  }
})
module.exports = router;