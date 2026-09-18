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

// The MCP server's streamable-HTTP endpoint. MCP clients are configured with
// this URL plus an `Authorization: Bearer <key>` header — the same key the
// REST API takes, with the same `agents` / `chat` scopes.
export const MCP_ENDPOINT_URL = "https://app.NoteDoctor.AI/api/mcp";

// The "leveraging MCP" guide in this site.
export const MCP_GUIDE_URL = "/developers/mcp";

// Bump the suffix to re-show the sitewide banner to everyone who dismissed it.
export const BANNER_DISMISS_KEY = "nd-api-banner-dismissed-v2";
