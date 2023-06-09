import db from '../ext/db.js'

const CostumesSchema = new db.Schema({
  title: String,
  description: String,
  img: Buffer,
  createdAt: {type: Date, default: Date.now},
  lastChangedAt: {type: Date, default: Date.now},
  employee: {type: 'ObjectId', ref: 'Employee'},
  place: {type: 'ObjectId', ref: 'Place'}
})

const costumesModel = db.model('Costume', CostumesSchema)

export default costumesModel
