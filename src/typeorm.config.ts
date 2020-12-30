import { __prod__ } from "./constants";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default {
  type: "postgres" as const,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, "./entities/*")],
  migrations: [path.join(__dirname, "./migrations/*")],
  logging: !__prod__,
  synchronize: !__prod__,
};
