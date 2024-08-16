import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(302, '/');
	}
	const usernameLocal = event.locals.user.username;
	return {
		username: usernameLocal
	};
};
