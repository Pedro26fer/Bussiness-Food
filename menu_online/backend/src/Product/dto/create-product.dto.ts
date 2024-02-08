import { Category } from 'src/Category/category.model';
import { ProductModel } from '../product.model';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, IsDecimal, IsArray, ValidateNested } from 'class-validator';

export class CreateProductDto extends ProductModel {
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
  @ValidateNested({ each: true })
  @Type(() => Category)
  categories: Category[];

  constructor(data: Partial<CreateProductDto>) {
      super();
    Object.assign(this, data);
  }
}
