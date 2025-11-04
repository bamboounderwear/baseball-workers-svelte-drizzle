import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

/**
 * Minimal skeleton tables for Phase 1.
 * We'll expand in Phase 2.
 */

export const designTokens = sqliteTable('design_tokens', {
  key: text('key').primaryKey(),
  value: text('value').notNull()
});

export const news = sqliteTable('news', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  subtitle: text('subtitle'),
  body: text('body'),
  featuredImage: text('featured_image'),
  publishedAt: integer('published_at', { mode: 'timestamp_ms' })
});

export const games = sqliteTable('games', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  date: integer('date', { mode: 'timestamp_ms' }).notNull(),
  opponent: text('opponent').notNull(),
  venue: text('venue').notNull()
});

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  priceCents: integer('price_cents').notNull(),
  description: text('description'),
  image: text('image')
});

export const players = sqliteTable('players', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  bio: text('bio'),
  image: text('image')
});

// Venue seating skeleton (will flesh out in Phase 2)
export const venueSections = sqliteTable('venue_sections', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull()
});

export const venueRows = sqliteTable('venue_rows', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sectionId: integer('section_id').notNull().references(() => venueSections.id),
  code: text('code').notNull() // e.g., 'A', 'B'
});

export const venueSeats = sqliteTable('venue_seats', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  rowId: integer('row_id').notNull().references(() => venueRows.id),
  number: integer('number').notNull(), // seat number
  basePriceCents: integer('base_price_cents').notNull()
});

export const ticketsByGame = sqliteTable('tickets_by_game', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  gameId: integer('game_id').notNull().references(() => games.id),
  seatId: integer('seat_id').notNull().references(() => venueSeats.id),
  priceCents: integer('price_cents').notNull(),
  isAvailable: integer('is_available', { mode: 'boolean' }).notNull().default(true)
});

// Helper to seed a few defaults
export const seedSQL = sql`
  INSERT OR IGNORE INTO design_tokens (key, value) VALUES
    ('--bg', '#ffffff'),
    ('--fg', '#000000'),
    ('--container-max', '1200px');

  INSERT OR IGNORE INTO news (id, slug, title, subtitle, body, featured_image, published_at) VALUES
    (1, 'welcome', 'Welcome to the Team', 'Season kick-off', 'Stay tuned for updates.', 'https://placehold.co/1200x600', strftime('%s','now')*1000);

  INSERT OR IGNORE INTO games (id, title, date, opponent, venue) VALUES
    (1, 'Home Opener', strftime('%s','now')*1000 + 86400000, 'Rivals', 'Home Park');

  INSERT OR IGNORE INTO products (id, slug, title, price_cents, description, image) VALUES
    (1, 'team-cap', 'Team Cap', 2500, 'Classic cap with logo.', 'https://placehold.co/800x800');

  INSERT OR IGNORE INTO players (id, name, bio, image) VALUES
    (1, 'Alex Pitcher', 'Right-handed pitcher.', 'https://placehold.co/400x400');
`;
