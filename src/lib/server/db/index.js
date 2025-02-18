import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "$env/dynamic/private";
const POSTGRES_URL = `postgresql://${encodeURIComponent(env.DB_USER)}:${encodeURIComponent(env.DB_PASSWORD)}@localhost:5432/${encodeURIComponent(env.DB_NAME)}`;
console.log(POSTGRES_URL);
const client = postgres(POSTGRES_URL);
export const db = drizzle(client);
