import express from 'express'
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../helpers/employees.js'

const router = express.Router()

router
  .post('/', async (req, res, next) => {
    try {
      const {body} = req
      const newEmployee = await createEmployee(body)
      return res.status(201).send(newEmployee)
    } catch (error) {
      return next(error)
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const allEmployees = await getAllEmployees()
      return res.status(200).send(allEmployees)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const employee = await getEmployee(id)
      if (!employee) return res.status(404).send('employee not found')
      return res.status(200).send(employee)
    } catch (error) {
      return next(error)
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const employee = await deleteEmployee(id)
      if (!employee) return res.status(404).send('employee not found')
      return res.status(200).send(employee)
    } catch (error) {
      return next(error)
    }
  })

export default router
