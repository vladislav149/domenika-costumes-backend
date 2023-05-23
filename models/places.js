import db from '../ext/db.js'

const PlacesSchema = new db.Schema({
  title: String,
  description: String,
  costumes: [{type: 'ObjectId', ref: 'Costume'}],
  requisites: [{type: 'ObjectId', ref: 'Requisite'}]
})

const placesModel = db.model('Place', PlacesSchema)

export default placesModel
