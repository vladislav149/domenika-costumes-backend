import Requisites from '../models/requisites.js'

const getAllRequisites = () => {
  return Requisites.find().lean()
}

const getRequisite = id => {
  return Requisites.findById(id).lean()
}

const createRequisite = payload => {
  return Requisites.create(payload)
}

const updateRequisite = (id, payload) => {
  return Requisites.findByIdAndUpdate(id, payload)
}

const deleteRequisite = id => {
  return Requisites.findByIdAndDelete(id)
}

export {
  getAllRequisites,
  getRequisite,
  createRequisite,
  updateRequisite,
  deleteRequisite
}
