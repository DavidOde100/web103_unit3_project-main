import express from 'express'
import { getAllLocations, getLocationById } from '../controllers/locations.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const locations = await getAllLocations()
    res.json(locations)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const location = await getLocationById(id)
    if (!location) return res.status(404).json({ error: 'Location not found' })
    res.json(location)
  } catch (error) {
    next(error)
  }
})

export default router
