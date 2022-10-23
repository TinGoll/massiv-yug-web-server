import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>("API_PORT");
  await app.listen(port || 3500, () =>
    console.log(`App started on port: ${port}`)
  );
}
bootstrap();
