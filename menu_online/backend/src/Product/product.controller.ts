import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductModel } from './product.model';

@Controller('/product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    public async create(@Body() body: CreateProductDto) : Promise<ProductModel>{
        const newProduct = await this.productService.create(body)
        return newProduct
    }
}
