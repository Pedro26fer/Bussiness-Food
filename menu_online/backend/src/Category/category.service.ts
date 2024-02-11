import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryModel } from './category.model';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly categoryRepository: Repository<CategoryModel>,
  ) {}

  public async getAll(): Promise<CategoryModel[]> {
    const categorys = await this.categoryRepository.find({relations:['products']});
    return categorys;
  }
}
