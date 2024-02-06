import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserService } from 'src/User/user.service';
import { UserModule } from 'src/User/user.module';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv'

dotenv.config()

@Module({
  imports: [UserModule, JwtModule.register({
    secret: process.env.JWT_SECRET, signOptions: { expiresIn: '24h'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
