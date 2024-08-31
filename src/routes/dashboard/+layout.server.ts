import { fail, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { lucia } from '$lib/server/auth';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(302, '/');
	}
	const usernameLocal = event.locals.user.username;
	return {
		username: usernameLocal
	};
};