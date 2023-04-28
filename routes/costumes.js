import express from 'express'
import {
  getAllCostumes,
  getCostume,
  createCostume,
  updateCostume,
  deleteCostume
} from '../helpers/costumes.js'

const router = express.Router()

router
  .post('/', async (req, res, next) => {
    try {
      const {body} = req
      const newCostume = await createCostume(body)
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
      if (!costume) return res.status(404).send('employee not found')
      return res.status(200).send(costume)
    } catch (error) {
      return next(error)
    }
  })

export default router
