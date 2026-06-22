import { pool } from '../config/database.js'

export const getAllEvents = async () => {
  const { rows } = await pool.query('SELECT * FROM events ORDER BY date, time')
  return rows
}

export const getEventsByLocation = async (locationId) => {
  const { rows } = await pool.query('SELECT * FROM events WHERE location_id = $1 ORDER BY date, time', [locationId])
  return rows
}

export const getEventById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM events WHERE id = $1', [id])
  return rows[0]
}
