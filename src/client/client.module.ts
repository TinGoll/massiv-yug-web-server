import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ClientController } from "./client.controller";
import { ClientMiddleware } from "./client.middleware";
import { ClientService } from "./client.service";

@Module({
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClientMiddleware).forRoutes(ClientController);
  }
}
