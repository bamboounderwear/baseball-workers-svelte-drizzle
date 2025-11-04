import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Security headers (basic)
  const response = await resolve(event, {
    filterSerializedResponseHeaders: (name) => name.startsWith('x-')
  });
  response.headers.set('x-frame-options', 'DENY');
  response.headers.set('x-content-type-options', 'nosniff');
  response.headers.set('referrer-policy', 'no-referrer');
  return response;
};
