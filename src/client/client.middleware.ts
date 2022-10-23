import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { ClientService } from "./client.service";

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  constructor(private readonly clientService: ClientService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = this.clientService.getAssetPath(req.path);
      res.sendFile(file, (err: any) => {
        if (err) {
          res.status(err.status).end();
        }
      });
    } else {
      return next();
    }
  }
}
