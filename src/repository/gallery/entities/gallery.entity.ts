import { CommonEntityData } from "src/repository/common/common-data";
import { Column, Entity, OneToMany } from "typeorm";
import { GalleryItemEntity } from "./gallery-item.entity";

@Entity("galleries")
export class GalleryEntity extends CommonEntityData {
  @Column({ type: "varchar", length: 256 })
  name: string;

  @Column({ type: "boolean", default: false })
  deleted: boolean;

  @OneToMany(() => GalleryItemEntity, (item) => item.gallery, {
    eager: true,
  })
  items: GalleryItemEntity[];
}
