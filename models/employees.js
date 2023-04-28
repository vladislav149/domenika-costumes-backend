import db from '../ext/db.js'

const EmployeesSchema = new db.Schema({
  fName: String,
  lName: String,
  numberPhone: String,
  role: String,
  costumes: [{type: 'ObjectId', ref: 'Costumes'}]
})

const employeesModel = db.model('Employees', EmployeesSchema)

export default employeesModel
