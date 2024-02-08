import { CategoryModel } from 'src/Category/category.model';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, IsDecimal, IsArray, ValidateNested } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  qty: number;

  @IsDecimal()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsArray()
  categories: string[];

  constructor(data: Partial<CreateProductDto>) {
    Object.assign(this, data);
  }
}
