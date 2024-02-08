import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModel } from './category.model';
import { ProductModel } from 'src/Product/product.model';


@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel]), ProductModel],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryModel],
  exports: [TypeOrmModule.forFeature([CategoryModel])]
})
export class CategoryModule {}
