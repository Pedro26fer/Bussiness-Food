import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User Not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return {
        ...user,
        password: undefined,
      };
    }
    throw new Error('Invalid credentials')
  }
}
