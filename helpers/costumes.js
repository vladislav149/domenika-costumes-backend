import Costumes from '../models/costumes.js'

const getAllCostumes = () => {
  return Costumes.find().lean()
}

const getCostumesByPlace = idPlace => {
  return Costumes.find().lean()
}

const getCostume = id => {
  return Costumes.findById(id).lean()
}

const createCostume = payload => {
  return Costumes.create(payload)
}

const updateCostume = (id, payload) => {
  return Costumes.findByIdAndUpdate(id, payload)
}

const deleteCostume = id => {
  return Costumes.findByIdAndDelete(id)
}

export {getAllCostumes, getCostume, createCostume, updateCostume, deleteCostume}
