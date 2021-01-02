import { __prod__ } from "./constants";
import path from "path";
import dotenv from "dotenv";

if (!__prod__) dotenv.config({ path: path.join(__dirname, "../.env.dev") });

export default {
  type: "postgres" as const,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, "./entities/*.js")],
  migrations: __prod__
    ? [path.join(__dirname, "./migrations/*.js")]
    : [path.join(__dirname, "./seeds/*.js")],
  logging: !__prod__,
  synchronize: !__prod__,
};
