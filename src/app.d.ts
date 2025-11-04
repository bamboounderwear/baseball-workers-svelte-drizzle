// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env: {
        DB: D1Database;
        APP_NAME: string;
      };
    }
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
  }
}

export {};
