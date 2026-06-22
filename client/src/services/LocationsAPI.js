const sampleLocations = [
  {
    id: 1,
    name: 'Echo Lounge',
    address: '123 Echo St',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    image: ''
  },
  {
    id: 2,
    name: 'House of Blues',
    address: '456 Blues Ave',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    image: ''
  },
  {
    id: 3,
    name: 'Pavilion',
    address: '789 Pavilion Rd',
    city: 'San Antonio',
    state: 'TX',
    zip: '78205',
    image: ''
  },
  {
    id: 4,
    name: 'American Airlines Center',
    address: '100 Arena Blvd',
    city: 'Dallas',
    state: 'TX',
    zip: '75219',
    image: ''
  }
]

const getAllLocations = async () => {
  // In a real app this would fetch from an API, e.g. `fetch('/api/locations')`.
  // Return a copy to mimic network response.
  return Promise.resolve(JSON.parse(JSON.stringify(sampleLocations)))
}

export default { getAllLocations }
