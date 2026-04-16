export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8080/api/";
export const FILE_BASE = process.env.NEXT_PUBLIC_FILE_BASE || "http://localhost:8080/";

// Re-export the mock API fetch for use across the app
export { apiFetch } from "./mockApi";

