import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();
export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		ssl: true,
		url: process.env.DB_STRING as string
	}
} satisfies Config;
