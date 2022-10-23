import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export class CommonEntityData {
  @PrimaryGeneratedColumn()
  id: number;

  /** Дата создания */
  @CreateDateColumn()
  createdAt: Date;

  /** Дата изменения */
  @UpdateDateColumn()
  updatedAt: Date;
}
