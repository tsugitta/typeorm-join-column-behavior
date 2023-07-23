import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ParentOne } from "./ParentOne";
import { ParentTwo } from "./ParentTwo";

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer")
  idToJoin: number;

  @ManyToOne(() => ParentOne, (parentOne) => parentOne.children, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn([
    { name: "idToJoin", referencedColumnName: "idToJoinOnParentOne" },
  ])
  parentOne?: ParentOne;

  @ManyToOne(() => ParentTwo, (parentTwo) => parentTwo.children, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn([
    { name: "idToJoin", referencedColumnName: "idToJoinOnParentTwo" },
  ])
  parentTwo?: ParentTwo;
}
