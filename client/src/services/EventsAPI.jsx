const apiBase = ''

export const getAllEvents = async () => {
  const res = await fetch(`${apiBase}/api/events`)
  if (!res.ok) throw new Error('Failed to fetch events')
  return res.json()
}

export const getEventById = async (id) => {
  const res = await fetch(`${apiBase}/api/events/${id}`)
  if (!res.ok) throw new Error('Failed to fetch event')
  return res.json()
}

export const getEventsByLocation = async (locationId) => {
  const res = await fetch(`${apiBase}/api/events/location/${locationId}`)
  if (!res.ok) throw new Error('Failed to fetch events for location')
  return res.json()
}

export default { getAllEvents, getEventById, getEventsByLocation }
