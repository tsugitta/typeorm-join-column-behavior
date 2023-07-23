import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Child } from "./Child";

@Entity()
export class ParentTwo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer")
  idToJoinOnParentTwo: number;

  @OneToMany(() => Child, (child) => child.parentTwo, {})
  children: Child[];
}
