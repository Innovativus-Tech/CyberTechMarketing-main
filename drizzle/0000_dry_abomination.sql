CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`company` text DEFAULT '' NOT NULL,
	`service` text DEFAULT '' NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL
);
