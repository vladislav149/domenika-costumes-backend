import db from '../ext/db.js'

const EmployeesSchema = new db.Schema({
  fName: String,
  lName: String,
  numberPhone: String,
  role: String,
  costumes: [{type: 'ObjectId', ref: 'Costume'}],
  requisites: [{type: 'ObjectId', ref: 'Requisite'}]
})

const employeesModel = db.model('Employee', EmployeesSchema)

export default employeesModel
