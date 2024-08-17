import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findForAuth(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passCheck = await compare(password, user.password);

    if (!passCheck) {
      throw new UnauthorizedException();
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1w',
    });

    return { token };
  }
}
