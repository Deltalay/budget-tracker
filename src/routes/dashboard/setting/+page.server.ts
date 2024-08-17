import { db } from '$lib/server/db';
import { budget, user } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const userId = event.locals.user?.id as number;
	const [userData] = await db
		.select()
		.from(user)
		.leftJoin(budget, eq(budget.user_id, userId))
		.where(eq(user.id, userId));
	return {
		user: userData
	};
};
