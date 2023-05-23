import Places from '../models/places.js'

const getAllPlaces = () => {
  return Places.find().lean()
}

const getPlace = id => {
  return Places.findById(id).lean()
}

const getCostumesByPlaceId = id => {
  return Places.findById(id).lean().populate(['costumes'])
}

const getRequisitesByPlaceId = id => {
  return Places.findById(id).lean().populate(['requisites'])
}

const createPlace = payload => {
  return Places.create(payload)
}

const findPlace = id => {
  return Places.findById(id)
}

export {
  getAllPlaces,
  getPlace,
  getCostumesByPlaceId,
  getRequisitesByPlaceId,
  createPlace,
  findPlace
}
