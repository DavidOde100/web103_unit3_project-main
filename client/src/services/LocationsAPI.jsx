const apiBase = ''

export const getAllLocations = async () => {
  const res = await fetch(`${apiBase}/api/locations`)
  if (!res.ok) throw new Error('Failed to fetch locations')
  return res.json()
}

export const getLocationById = async (id) => {
  const res = await fetch(`${apiBase}/api/locations/${id}`)
  if (!res.ok) throw new Error('Failed to fetch location')
  return res.json()
}

export default { getAllLocations, getLocationById }
