import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });
