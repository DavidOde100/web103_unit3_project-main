import pg from 'pg'

// Enable SSL for remote Postgres connections (rejectUnauthorized false for compatibility)
const config = {
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	database: process.env.PGDATABASE,
	ssl: { rejectUnauthorized: false }
}

export const pool = new pg.Pool(config)
