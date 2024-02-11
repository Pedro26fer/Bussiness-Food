import { IsArray, IsNumber, IsString } from 'class-validator';

export interface ProductUpdateDTO {
  name?: string;

  qty?: number;

  price: number;

  photo?: string;

  categories?: [];
}
