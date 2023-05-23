import express from 'express'
import {
  getAllPlaces,
  getPlace,
  getCostumesByPlaceId,
  getRequisitesByPlaceId,
  createPlace,
  findPlace
} from '../helpers/places.js'

const router = express.Router()

router
  .post('/', async (req, res, next) => {
    try {
      const {body} = req
      const newPlace = await createPlace(body)
      return res.status(201).send(newPlace)
    } catch (error) {
      return next(error)
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const allPlaces = await getAllPlaces()
      return res.status(200).send(allPlaces)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const place = await getPlace(id)
      if (!place) return res.status(404).send('place not found')
      return res.status(200).send(place)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id/costumes', async (req, res, next) => {
    try {
      const {id} = req.params
      const place = await findPlace(id)
      if (!place) return res.status(404).send('place not found')

      const costumes = await getCostumesByPlaceId(id)
      return res.status(200).send(costumes)
    } catch (error) {
      return next(error)
    }
  })
  .get('/:id/requisites', async (req, res, next) => {
    try {
      const {id} = req.params
      const place = await findPlace(id)
      if (!place) return res.status(404).send('place not found')

      const requisites = await getRequisitesByPlaceId(id)
      return res.status(200).send(requisites)
    } catch (error) {
      return next(error)
    }
  })

export default router
