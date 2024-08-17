import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedException();
    }

    const parts = authorization.split(' ');

    if (parts.length !== 2) {
      throw new UnauthorizedException();
    }

    const [schema, token] = parts;

    if (schema !== 'Bearer') {
      throw new UnauthorizedException();
    }

    let error = false;
    verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        error = true;
        return;
      }

      const user = await this.userService.findOne(decoded['id']);

      if (!user || !user._id) {
        error = true;
        return;
      }

      req['userId'] = user._id;
      req['isWriter'] = user.isWriter;
      req['isAdmin'] = user.isAdmin;

      next();
    });
    if (error) {
      throw new UnauthorizedException('Token invalid or expired');
    }
  }
}
