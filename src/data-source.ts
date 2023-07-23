import "reflect-metadata";
import { DataSource } from "typeorm";
import { Child } from "./entity/Child";
import { ParentTwo } from "./entity/ParentTwo";
import { ParentOne } from "./entity/ParentOne";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Child, ParentOne, ParentTwo],
  migrations: [],
  subscribers: [],
});
