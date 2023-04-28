import Places from '../models/places.js'

const getAllPlaces = () => {
  return Places.find().lean()
}

const getPlace = id => {
  return Places.findById(id).lean()
}

const createPlace = payload => {
  return Places.create(payload)
}

export {getAllPlaces, getPlace, createPlace}
