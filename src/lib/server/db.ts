import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
const client = new Client({
	connectionString: env.DB_STRING
});
// or
await client.connect();
export const db = drizzle(client);
