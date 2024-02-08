import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductModel } from './product.model';
import { Repository } from 'typeorm';
import { CategoryModel } from 'src/Category/category.model';
import { IsUUID } from 'class-validator';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private readonly productRepository: Repository<ProductModel>,
    @InjectRepository(CategoryModel)
    private readonly categoryRepository: Repository<CategoryModel>
  ) {}

  public async create(body: CreateProductDto) : Promise<ProductModel> {
    const productAlreadyExits = await this.productRepository.findOne({
      where: { name: body.name },
    });
    if (productAlreadyExits) {
      throw new ForbiddenException('This product is already registered');
    }

    let categories = []

    if(body.categories){
      for(let categoryId of body.categories){
        const categoryRegistered = await this.categoryRepository.findOne({ where: { id: categoryId }})
        if(categoryRegistered){
          categories.push(categoryRegistered);
        } else {
          throw new NotFoundException("Category with id " + categoryId + " not found");
        }
      }
    }
    
    const newProduct = await this.productRepository.save({
      ...body,
      categories: categories
    });
    
    return newProduct;
  }
}
