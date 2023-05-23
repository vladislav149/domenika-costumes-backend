import db from '../ext/db.js'

const RequisitesSchema = new db.Schema({
  title: String,
  description: String,
  img: Buffer,
  createdAt: {type: Date, default: Date.now},
  lastChangedAt: {type: Date, default: Date.now},
  employee: {type: 'ObjectId', ref: 'Employee'},
  place: {type: 'ObjectId', ref: 'Place'}
})

const requisitesModel = db.model('Requisite', RequisitesSchema)

export default requisitesModel
