import { CommonEntityData } from "src/repository/common/common-data";
import { Entity, Column, ManyToOne } from "typeorm";
import { OurworkPostEntity } from "./ourwork-post.entity";

@Entity("ourwork_medias")
export class OurworkMediaEntity extends CommonEntityData {
  @Column({ type: "varchar", length: 512 })
  fileName: string;

  @Column({ type: "varchar", length: 256 })
  mimetype: string;

  @Column({ type: "int", default: 0 })
  size: number;

  @Column()
  index: number;

  @ManyToOne(() => OurworkPostEntity, (post) => post.medias, {
    onDelete: "CASCADE",
  })
  post: OurworkPostEntity;
}
