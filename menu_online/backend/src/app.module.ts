import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './User/user.model';
import { UserModule } from './User/user.module';
import {ConfigModule} from '@nestjs/config'
import * as dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [UserModel],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
