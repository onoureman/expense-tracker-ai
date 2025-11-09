import { defineConfig, env } from "prisma/config";
import * as dotenv from "dotenv";

// Load environment variables from .env
dotenv.config({ path: ".env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
