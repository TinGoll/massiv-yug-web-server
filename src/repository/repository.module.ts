import { Module } from "@nestjs/common";
import { RepositoryUserService } from "./users/services/repository-user/repository-user.service";
import { RepositoryGalleryService } from "./gallery/services/repository-gallery/repository-gallery.service";
import { RepositoryOurworkService } from "./ourwork/services/repository-ourwork/repository-ourwork.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GalleryItemEntity } from "./gallery/entities/gallery-item.entity";
import { GalleryEntity } from "./gallery/entities/gallery.entity";
import { GalleryPhotoEntity } from "./gallery/entities/gallery-photo.entity";
import { OurworkMediaEntity } from "./ourwork/entities/ourwork-media.entity";
import { OurworkPostEntity } from "./ourwork/entities/ourwork-post.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GalleryItemEntity,
      GalleryEntity,
      GalleryPhotoEntity,
      OurworkPostEntity,
      OurworkMediaEntity,
    ]),
  ],
  providers: [
    RepositoryUserService,
    RepositoryGalleryService,
    RepositoryOurworkService,
  ],
})
export class RepositoryModule {}
