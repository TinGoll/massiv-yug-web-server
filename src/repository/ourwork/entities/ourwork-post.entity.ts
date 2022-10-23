import { CommonEntityData } from "src/repository/common/common-data";
import { Entity, Column, OneToMany } from "typeorm";
import { OurworkMediaEntity } from "./ourwork-media.entity";

@Entity("ourwork_items")
export class OurworkPostEntity extends CommonEntityData {
  @Column({ type: "varchar", length: 512 })
  preview: string;

  @Column({ type: "varchar", length: 128 })
  title: string;

  @Column({ type: "varchar", length: 128 })
  subtitle: string;

  @Column({ type: "varchar", length: 2048 })
  description: string;

  @OneToMany(() => OurworkMediaEntity, (media) => media.post, {
    eager: true,
  })
  medias: OurworkMediaEntity[];
}
