import express from 'express'
import { getAllEvents, getEventById, getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const events = await getAllEvents()
    res.json(events)
  } catch (error) {
    next(error)
  }
})

router.get('/location/:locationId', async (req, res, next) => {
  try {
    const locationId = Number(req.params.locationId)
    const events = await getEventsByLocation(locationId)
    res.json(events)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const event = await getEventById(id)
    if (!event) return res.status(404).json({ error: 'Event not found' })
    res.json(event)
  } catch (error) {
    next(error)
  }
})

export default router
