import type { RequestHandler } from './$types';
import { getDb } from '$lib/db';
import { seedSQL } from '$lib/db/schema';

export const GET: RequestHandler = async ({ platform }) => {
  try {
    const db = getDb(platform!.env);
    // Seed a few defaults on first run (idempotent due to INSERT OR IGNORE)
    await db.run(seedSQL);
    // Simple sanity query
    const res = await platform!.env.DB.prepare('select 1 as ok').first();
    return new Response(JSON.stringify({ ok: res?.ok === 1 }), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
};
