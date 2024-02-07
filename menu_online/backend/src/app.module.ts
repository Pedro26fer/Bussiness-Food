import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './User/user.model';
import { UserModule } from './User/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CategoryModule } from './Category/category.module';
import { CategorySeeder } from './Category/seeds/category.seed';
import { Category } from './Category/category.model';
import { ProductModule } from './Product/product.module';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [UserModel, Category],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    ProductModule,
  ],
  providers: [
    CategorySeeder,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})

export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly categorySeeder: CategorySeeder) {}

  async onApplicationBootstrap() {
    await this.categorySeeder.seed();
  }
}


