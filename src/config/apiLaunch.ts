/**
 * Shared links for the API launch announcement surfaces
 * (homepage section, sitewide banner, card callout, /developers page).
 */

// Where the "Get an API key" buttons land. Keys are issued from the app
// dashboard; login is the entry point until a deep link to key management exists.
export const API_KEYS_URL = "https://app.NoteDoctor.AI/auth/login";

// The developer platform page in this site.
export const DEVELOPERS_URL = "/developers";

// TODO: repoint at the developer docs once they are published.
export const DOCS_URL = "/#contact";

// Bump the suffix to re-show the sitewide banner to everyone who dismissed it.
export const BANNER_DISMISS_KEY = "nd-api-banner-dismissed-v1";
