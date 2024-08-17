import { db } from '$lib/server/db';
import { budget } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const userId = event.locals.user?.id as number;
	const getUserBudgetInfo = await db.select().from(budget).where(eq(budget.user_id, userId));
	return {
		budgetInfo: getUserBudgetInfo
	};
};
