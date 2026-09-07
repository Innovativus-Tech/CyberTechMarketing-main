import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable("enquiries", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull().default(""),
  service: text("service").notNull().default(""),
  message: text("message").notNull(),
  createdAt: integer("created_at").notNull(),
});
