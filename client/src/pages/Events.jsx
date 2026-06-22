import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI.jsx'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const data = await EventsAPI.getAllEvents()
        setEvents(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <section className="events-page">
      <h2>All Events</h2>
      <main>
        {events && events.length > 0 ? (
          events.map((e) => (
            <article key={e.id} className="event-item">
              <h3>{e.title}</h3>
              <p>{e.date} {e.time}</p>
            </article>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </main>
    </section>
  )
}

export default Events
