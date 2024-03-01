import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string

	@Column({ default: "" })
	description!: string

	@Column()
	time_string!: string

	@Column()
	time!: string

	@Column({ default: "once time" })
	every!: string
}

// model task {
// 	id          Int    @id @default(autoincrement())
// 	name        String
// 	description String @default("")
// 	time_string String
// 	time        String
// 	every       String @default("once time")
//   }
