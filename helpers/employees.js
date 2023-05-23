import Employees from '../models/employees.js'

const getAllEmployees = () => {
  return Employees.find().lean()
}

const getEmployee = id => {
  return Employees.findById(id).lean()
}

const createEmployee = payload => {
  return Employees.create(payload)
}

const updateEmployee = (id, payload) => {
  return Employees.findByIdAndUpdate(id, payload)
}

const deleteEmployee = id => {
  return Employees.findByIdAndDelete(id)
}

const findEmployee = id => {
  return Employees.findById(id)
}

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  findEmployee
}
