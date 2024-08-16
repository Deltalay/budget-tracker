import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { hash } from '@node-rs/argon2';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { user } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		if (
			typeof username !== 'string' ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				message: 'Invalid username'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		const [searchUser] = await db.select().from(user).where(eq(user.username, username)).limit(1);
		if (searchUser == undefined) {
			const [usrInsert] = await db
				.insert(user)
				.values({
					username: username,
					password_hash: passwordHash
				})
				.returning({
					insertId: user.id
				});

			const session = await lucia.createSession(usrInsert.insertId, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			redirect(302, '/');
		} else {
			console.log('Hello');
			return fail(400, {
				message: 'User already exist!'
			});
		}
	}
};
