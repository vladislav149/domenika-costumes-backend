import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {
  getAllCostumes,
  getCostume,
  createCostume,
  updateCostume,
  deleteCostume
} from '../helpers/costumes.js'

import {findEmployee} from '../helpers/employees.js'
import {findPlace} from '../helpers/places.js'

const router = express.Router()

router
  .post('/', async (req, res, next) => {
    try {
      if (req.files) {
        const {img} = req.files
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = dirname(__filename)
        const parentDir = join(__dirname, '..')
        const randomNumber = Math.floor(Math.random() * 10000)
        const uploadPath = `${parentDir}/uploads/${randomNumber}${img.name}`
        img.mv(uploadPath)
      }

      const {body} = req
      const {employee, place} = body
      const foundEmployee = await findEmployee(employee)
      if (!foundEmployee) {
        return res.status(403).send('costume not added, not found employee')
      }
      const foundPlace = await findPlace(place)
      if (!foundPlace) {
        return res.status(403).send('costume not added, not found place')
      }
      const newCostume = await createCostume(body)
      const newCostumeId = newCostume._id.toString()
      foundEmployee.costumes.push(newCostumeId)
      foundEmployee.save()
      foundPlace.costumes.push(newCostumeId)
      foundPlace.save()
      return res.status(201).send(newCostume)
    } catch (error) {
      return next(error)
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const allCostumes = await getAllCostumes()
      return res.status(200).send(allCostumes)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const costume = await getCostume(id)
      if (!costume) return res.status(404).send('costume not found')
      return res.status(200).send(costume)
    } catch (error) {
      return next(error)
    }
  })

export default router
