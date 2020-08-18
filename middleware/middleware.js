const db = require('../data/db_config')

async function valadateAnimalId(req, res, next){
  const {id} = req.params
  const validId = await db('animals').where({id})
  try{
    if(!validId){
        res.status(404).json("animal not found")
      }else{
        req.valadatedAnimalId = validId
        next()
      }
  }catch(error){
    next(error)
  }
  
}

module.exports = {
  valadateAnimalId
}