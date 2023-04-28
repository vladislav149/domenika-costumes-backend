import db from '../ext/db.js'

const PlacesSchema = new db.Schema({
  title: String,
  description: String,
  costumes: [{type: 'ObjectId', ref: 'Costumes'}]
})

const placesModel = db.model('Places', PlacesSchema)

export default placesModel
