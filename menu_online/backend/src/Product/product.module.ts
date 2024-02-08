import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/Category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel]), CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],

})
export class ProductModule {}
