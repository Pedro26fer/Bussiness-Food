import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductModel } from './product.model';
import { Repository } from 'typeorm';
import { CategoryModel } from 'src/Category/category.model';
import { ProductUpdateDTO } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private readonly productRepository: Repository<ProductModel>,
    @InjectRepository(CategoryModel)
    private readonly categoryRepository: Repository<CategoryModel>,
  ) {}

  public async create(body: CreateProductDto): Promise<ProductModel> {
    const productAlreadyExits = await this.productRepository.findOne({
      where: { name: body.name },
    });
    if (productAlreadyExits) {
      throw new ForbiddenException('This product is already registered');
    }

    let categories = [];

    if (body.categories) {
      for (let categoryName of body.categories) {
        const categoryRegistered = await this.categoryRepository.findOne({
          where: { name: categoryName },
        });
        if (categoryRegistered) {
          categories.push(categoryRegistered);
        } else {
          throw new NotFoundException(
            'Category with id ' + categoryName + ' not found',
          );
        }
      }
    }

    const newProduct = await this.productRepository.save({
      ...body,
      categories: categories,
    });

    return newProduct;
  }

  public async getOne(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
    if (!product) {
      throw new NotFoundException('Not found product');
    }
    return product;
  }

  public async update(
    id: string,
    body: ProductUpdateDTO,
  ): Promise<ProductModel> {
    let productUpdating = await this.productRepository.findOne({
      where: { id },
    });

    if (!productUpdating) {
      throw new NotFoundException('Product does not exits');
    }

    let categories = []

    if(body.categories){
      for (let categoryName of body.categories) {
        const categoryRegistered = await this.categoryRepository.findOne({
          where: { name: categoryName },
        });

        categories.push(categoryRegistered)
    }

    productUpdating = { ...productUpdating, ...body, categories };
    this.productRepository.save(productUpdating);

    const productUpdated = await this.productRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
    return productUpdated;
  }}

  public async delete(id: string): Promise<string> {
    const productToBeDelete = await this.productRepository.findOne({
      where: { id },
    });
    if (!productToBeDelete) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.delete(productToBeDelete.id);
    return 'Delete succesfully';
  }

  public async getAll(): Promise<ProductModel[]> {
    const products = await this.productRepository.find({
      relations: ['categories'],
    });
    return products;
  }
}
