import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/User/user.model';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}
  
  
  login(user: UserModel): UserToken {
    const payload: UserPayload = {
      sub:user.id,
      email: user.email,
      name: user.name,      
    };

    const jwtToken = this.jwtService.sign(payload)

    return {
      accessToken: jwtToken
    }
  }

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
