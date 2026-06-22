import { pool } from '../config/database.js'

export const getAllLocations = async () => {
  const { rows } = await pool.query('SELECT * FROM locations ORDER BY id')
  return rows
}

export const getLocationById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
  return rows[0]
}
