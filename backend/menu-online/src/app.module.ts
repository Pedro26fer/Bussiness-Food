import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.model';
import { UserModule } from './modules/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pedro',
      password: '1234',
      database: 'menu',
      entities: [UserModel],
      synchronize: true,
    }),
    UserModule
  ],
})
export class AppModule {}
