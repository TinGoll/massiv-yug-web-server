import { CommonEntityData } from "src/repository/common/common-data";
import { Column, Entity, ManyToOne } from "typeorm";
import { GalleryItemEntity } from "./gallery-item.entity";

@Entity("gallery_photos")
export class GalleryPhotoEntity extends CommonEntityData {
  @Column({ type: "varchar", length: 512 })
  fileName: string;

  @Column({ type: "varchar", length: 256 })
  mimetype: string;

  @Column({ type: "int", default: 0 })
  size: number;

  @Column()
  index: number;

  @ManyToOne(() => GalleryItemEntity, (item) => item.photos, {
    onDelete: "CASCADE",
  })
  galleryItem: GalleryItemEntity;
}
