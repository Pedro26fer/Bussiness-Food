import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductModel } from './product.model';
import { ProductUpdateDTO } from './dto/update-product.dto';

@Controller('/product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    public async create(@Body() body: CreateProductDto) : Promise<ProductModel>{
        const newProduct = await this.productService.create(body)
        return newProduct
    }

    @Get()
    public async get() : Promise<ProductModel[]>{
      return await this.productService.getAll()
    }

    @Get(':id')
    public async getOne(@Param('id') id : string) : Promise<ProductModel>{
      const product = await this.productService.getOne(id)
      return product
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() body: ProductUpdateDTO): Promise<ProductModel>{
      const updateProduct = await this.productService.update(id, body)
      return updateProduct
    }

    @Delete(':id')
    @HttpCode(204)
    public async delete(@Param('id') id: string): Promise<string> {
      const responseDelete = await this.productService.delete(id) 
      return responseDelete     
    }
}
