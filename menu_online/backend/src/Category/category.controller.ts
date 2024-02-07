import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Controller('/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService ){}

    @Get()
    public async getAllCategories() : Promise<Category[]>{
        const categories = await this.categoryService.getAll()
        return categories
    }
}
