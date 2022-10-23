import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryModule } from './repository/repository.module';
import { ApiModule } from './api/api.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "../.env",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<"postgres">("TYPEORM_CONNECTION"),
        host: config.get<string>("TYPEORM_HOST"),
        username: config.get<string>("TYPEORM_USERNAME"),
        password: config.get<string>("TYPEORM_PASSWORD"),
        database: config.get<string>("TYPEORM_DATABASE"),
        port: config.get<number>("TYPEORM_PORT"),
        entities: [__dirname + "dist/**/*.entity{.ts,.js}"],
        migrations: [__dirname + "src/migrations/*{.js,.ts}"],
        migrationsTableName: "migrations",
        synchronize: true,
        autoLoadEntities: true,
        logging: ["error", "query", "migration"], //'query',
      }),
    }),
    RepositoryModule,
    ApiModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
