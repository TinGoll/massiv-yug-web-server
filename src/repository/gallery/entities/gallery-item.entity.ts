import { CommonEntityData } from "src/repository/common/common-data";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { GalleryPhotoEntity } from "./gallery-photo.entity";
import { GalleryEntity } from "./gallery.entity";

@Entity("gallery_items")
export class GalleryItemEntity extends CommonEntityData {
  @Column({ type: "varchar", length: 128 })
  title: string;

  @Column({ type: "varchar", length: 128 })
  subtitle: string;

  @Column({ type: "varchar", length: 2048 })
  description: string;

  @Column({ type: "jsonb", default: {} })
  params: object;

  @OneToMany(() => GalleryPhotoEntity, (item) => item.galleryItem, {
    eager: true,
  })
  photos: GalleryPhotoEntity[];

  @ManyToOne(() => GalleryEntity, (gallery) => gallery.items, {
    onDelete: "CASCADE",
  })
  gallery: GalleryEntity;
}
