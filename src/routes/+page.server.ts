import { lucia } from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { verify, hash } from '@node-rs/argon2';
import { user } from '$lib/server/schema';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
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
				username: 'Invalid username'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				password: 'Invalid password'
			});
		}

		const [searchUser] = await db.select().from(user).where(eq(user.username, username)).limit(1);
		if (searchUser == undefined) {
			await hash(password, {
				memoryCost: 19456,
				timeCost: 2,
				outputLen: 32,
				parallelism: 1
			});
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}

		const validPassword = await verify(searchUser.password_hash, password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}

		const session = await lucia.createSession(searchUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
export const load: PageServerLoad = async (event) => {
  if (event.locals.user) {
    redirect(302, "/dashboard")
  }
  return {}
}