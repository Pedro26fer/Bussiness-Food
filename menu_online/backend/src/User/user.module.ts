import { Module } from '@nestjs/common';
import { UserController } from 'src/User/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'src/User/user.model';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
