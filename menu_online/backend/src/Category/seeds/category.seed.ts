import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryModel } from '../category.model';

@Injectable()
export class CategorySeeder {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly categoryRepository: Repository<CategoryModel>,
  ) {}

  async seed() {
    const categoriesToCreate = [
      { name: 'Italy Food' },
      { name: 'Japanese' },
      {
        name: 'American',
        children: [
          { name: 'Hamburger' },
          {
            name: 'Steak',
            children: [{ name: 'Chicken' }, { name: 'Soup' }],
          },
        ],
      },
    ];

    const createCategories = async (
      categoriesData: any[],
      parent?: CategoryModel,
    ) => {
      for (const categoryData of categoriesData) {
        const { children: subcategoriesData, ...categoryParams } = categoryData;

        const existingCategory = await this.categoryRepository.findOne({
          where: { name: categoryParams.name, parent },
        });

        if (!existingCategory) {
          const category = new CategoryModel();
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
