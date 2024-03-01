import { DataSource } from "typeorm"

import { Task } from "./task.entity.js"

export const myDataSource = new DataSource({
	type: "sqlite",
	database: "database.db",
	synchronize: true,
	logging: false,
	entities: [Task],
})
