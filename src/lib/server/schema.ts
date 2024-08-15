import { relations } from 'drizzle-orm';
import {
	decimal,
	integer,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar
} from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull().unique(),
	password: varchar('password').notNull(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date()),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
export const userRelation = relations(user, ({ many, one }) => ({
	category: many(category),
	transaction: many(transaction),
	budget: one(budget)
}));

export const categoryEnum = pgEnum('category_type', ['income', 'expense']);
export const category = pgTable('categories', {
	id: serial('id').primaryKey(),
	user_id: integer('user_id').references(() => user.id),
	category_name: varchar('category_name', { length: 50 }).notNull(),
	category_type: categoryEnum('category_type'),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
export const categoryRelation = relations(category, ({ many }) => ({
	transaction: many(transaction),
	budget: many(budget)
}));
export const transaction = pgTable('transactions', {
	id: serial('id').primaryKey(),
	user_id: integer('user_id').references(() => user.id),
	category_id: integer('category_id').references(() => category.id),
	amount: decimal('amount', { precision: 10, scale: 3 }).notNull(),
	transaction_data: timestamp('transaction_date').notNull(),
	description: varchar('description', { length: 255 }),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
export const sessionTable = pgTable('session', {
	id: text('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});
export const budget = pgTable('budgets', {
	id: serial('id').primaryKey(),
	user_id: integer('user_id').references(() => user.id),
	category_id: integer('category_id').references(() => category.id),
	amount_limit: decimal('amount_limit', { precision: 10, scale: 3 }).notNull(),
	start_data: timestamp('start_date').notNull(),
	end_date: timestamp('end_date').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
