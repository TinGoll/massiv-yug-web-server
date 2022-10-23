import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";

interface IPageMetadata {
  title?: string;
  description?: string;
  image?: string;
}

@Injectable()
export class ClientService {
  constructor(private readonly configService: ConfigService) {}

  public async getApp(
    pageMetadata: IPageMetadata = {
      description: "Сайт Массив - юг",
      image: "",
      title: "Массив Юг",
    }
  ) {
    const basePath = this.configService.get("CLIENT_BUILD_PATH");
    const filePath = path.resolve(path.join(basePath, "index.html"));
    return new Promise((resolve, reject) => {
      fs.readFile(
        filePath,
        "utf8",
        (err: NodeJS.ErrnoException, data: string) => {
          if (err) {
            reject(err);
          } else {
            console.log(data);
            resolve(data);
          }
        }
      );
    });
  }

  getAssetPath(url: any) {
    const basePath = this.configService.get("CLIENT_BUILD_PATH");
    return path.resolve(path.join(basePath, url));
  }
}
