import { NestMiddleware } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { NextFunction, Request, Response } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: Request, res: Response, next: NextFunction): void;
}
