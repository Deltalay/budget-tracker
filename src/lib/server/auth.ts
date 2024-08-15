import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db';
import { sessionTable, user } from './schema';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';
const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, user);
export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	}
});
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
	}
}