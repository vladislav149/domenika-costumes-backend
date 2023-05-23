import express from 'express'
import {
  getAllRequisites,
  getRequisite,
  createRequisite,
  updateRequisite,
  deleteRequisite
} from '../helpers/requisites.js'

import {findEmployee} from '../helpers/employees.js'
import {findPlace} from '../helpers/places.js'

const router = express.Router()

router
  .post('/', async (req, res, next) => {
    try {
      const {body} = req
      const {employee, place} = body
      const foundEmployee = await findEmployee(employee)
      if (!foundEmployee) {
        return res.status(403).send('requisite not added, not found employee')
      }
      const foundPlace = await findPlace(place)
      if (!foundPlace) {
        return res.status(403).send('requisite not added, not found place')
      }
      const newRequisite = await createRequisite(body)
      const newRequisiteId = newRequisite._id.toString()
      foundEmployee.requisites.push(newRequisiteId)
      foundEmployee.save()
      foundPlace.requisites.push(newRequisiteId)
      foundPlace.save()
      return res.status(201).send(newRequisite)
    } catch (error) {
      return next(error)
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const allRequisites = await getAllRequisite()
      return res.status(200).send(allRequisites)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const requisite = await getRequisite(id)
      if (!requisite) return res.status(404).send('requisite not found')
      return res.status(200).send(requisite)
    } catch (error) {
      return next(error)
    }
  })

export default router
