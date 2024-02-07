import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category.model';
import { Repository } from 'typeorm';

@Injectable()
export class CategorySeeder {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const categoriesToCreate = [
      { name: 'Italianos' },
      { name: 'Orientais' },
      { name: 'Americano', children: [
        { name: 'Hamburger' },
        { name: 'Batata', children: [
          { name: 'Batata Frita' },
          { name: 'Chips' },
        ]},
      ]},
    ];

    const createCategories = async (categoriesData: any[], parent?: Category) => {
      for (const categoryData of categoriesData) {
        const { children: subcategoriesData, ...categoryParams } = categoryData;
        const category = new Category();
        category.name = categoryParams.name;
        category.parent = parent;

        await this.categoryRepository.save(category);

        if (subcategoriesData && subcategoriesData.length > 0) {
          await createCategories(subcategoriesData, category);
        }
      }
    };

    await createCategories(categoriesToCreate);
  }
}