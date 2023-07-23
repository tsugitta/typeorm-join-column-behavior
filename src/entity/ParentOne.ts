import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Child } from "./Child";

@Entity()
export class ParentOne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer")
  idToJoinOnParentOne: number;

  @OneToMany(() => Child, (child) => child.parentOne, {})
  children: Child[];
}
