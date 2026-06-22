import { pool } from './database.js'

const createTables = async () => {
	try {
		await pool.query(`
			CREATE TABLE IF NOT EXISTS locations (
				id SERIAL PRIMARY KEY,
				name TEXT NOT NULL,
				address TEXT,
				city TEXT,
				state TEXT,
				zip TEXT,
				image TEXT,
				created_at TIMESTAMP DEFAULT NOW()
			);
		`)

		await pool.query(`
			CREATE TABLE IF NOT EXISTS events (
				id SERIAL PRIMARY KEY,
				location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
				title TEXT NOT NULL,
				description TEXT,
				date DATE,
				time TIME,
				image TEXT,
				created_at TIMESTAMP DEFAULT NOW()
			);
		`)

		console.log('Tables created (if they did not exist).')
	}
	catch (error) {
		console.error('Error creating tables:', error)
		throw error
	}
	finally {
		await pool.end()
	}
}

// If executed directly, run the reset
if (process.argv[1] && process.argv[1].endsWith('reset.js')) {
	createTables()
}

export default createTables
