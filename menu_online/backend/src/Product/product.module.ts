import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
