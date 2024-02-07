import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category.model';

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
      {
        name: 'Americano',
        children: [
          { name: 'Hamburger' },
          {
            name: 'Batata',
            children: [{ name: 'Batata Frita' }, { name: 'Chips' }],
          },
        ],
      },
    ];

    const createCategories = async (
      categoriesData: any[],
      parent?: Category,
    ) => {
      for (const categoryData of categoriesData) {
        const { children: subcategoriesData, ...categoryParams } = categoryData;

        const existingCategory = await this.categoryRepository.findOne({
          where: { name: categoryParams.name, parent },
        });

        if (!existingCategory) {
          const category = new Category();
          category.name = categoryParams.name;
          category.parent = parent;

          await this.categoryRepository.save(category);

          if (subcategoriesData && subcategoriesData.length > 0) {
            await createCategories(subcategoriesData, category);
          }
        } else {
          console.log(`A categoria "${categoryParams.name}" já existe.`);
        }
      }
    };

    await createCategories(categoriesToCreate);
  }
}
