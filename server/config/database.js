import pg from 'pg'

// Allow toggling SSL via PGSSLMODE env var. Set PGSSLMODE=require to enable SSL.
const ssl = process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : false

const config = {
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		host: process.env.PGHOST,
		port: process.env.PGPORT,
		database: process.env.PGDATABASE,
		ssl
}

export const pool = new pg.Pool(config)
