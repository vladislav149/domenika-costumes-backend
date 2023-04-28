import db from '../ext/db.js'

const CostumesSchema = new db.Schema({
  title: String,
  description: String,
  createdAt: {type: Date, default: Date.now},
  employees: {type: 'ObjectId', ref: 'Employees'}
})

const costumesModel = db.model('Costumes', CostumesSchema)

export default costumesModel
