import { pool } from './database.js'

const seed = async () => {
  try {
    await pool.query('BEGIN')

    const locations = [
      { name: 'MangaMart Screening Room', address: '12 Otaku Way', city: 'Austin', state: 'TX', zip: '78701', image: '' },
      { name: 'Cosplay Cafe', address: '45 Cosplay Ave', city: 'Austin', state: 'TX', zip: '78702', image: '' },
      { name: 'Otaku Hall', address: '98 Fan St', city: 'Austin', state: 'TX', zip: '78703', image: '' },
      { name: 'Kitsune Theater', address: '7 Fox Ln', city: 'Austin', state: 'TX', zip: '78704', image: '' }
    ]

    const locationIds = []
    for (const loc of locations) {
      const { rows } = await pool.query(
        `INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`,
        [loc.name, loc.address, loc.city, loc.state, loc.zip, loc.image]
      )
      locationIds.push(rows[0].id)
    }

    const events = [
      { locationIndex: 0, title: 'Studio Ghibli Screening Night', description: 'A marathon of Studio Ghibli classics.', date: '2026-07-10', time: '19:00', image: '' },
      { locationIndex: 1, title: 'Cosplay Coffee & Craft', description: 'Casual meetup and costume help.', date: '2026-07-12', time: '14:00', image: '' },
      { locationIndex: 2, title: 'AMV Contest', description: 'Fan-made AMVs judged by the crowd.', date: '2026-07-18', time: '20:00', image: '' },
      { locationIndex: 3, title: 'Panel: Anime Music Trends', description: 'Discussion with local DJs and creators.', date: '2026-07-20', time: '18:30', image: '' },
      { locationIndex: 0, title: 'Retro Anime Watch Party', description: 'Showing retro 80s/90s anime episodes.', date: '2026-08-01', time: '17:30', image: '' }
    ]

    for (const ev of events) {
      const locationId = locationIds[ev.locationIndex]
      await pool.query(
        `INSERT INTO events (location_id, title, description, date, time, image) VALUES ($1,$2,$3,$4,$5,$6)`,
        [locationId, ev.title, ev.description, ev.date, ev.time, ev.image]
      )
    }

    await pool.query('COMMIT')
    console.log('Seed complete: inserted', locations.length, 'locations and', events.length, 'events')
  } catch (error) {
    await pool.query('ROLLBACK')
    console.error('Seed failed:', error)
  } finally {
    await pool.end()
  }
}

if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  seed()
}

export default seed
