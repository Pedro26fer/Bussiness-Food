import { ProductModel } from 'src/Product/product.model';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class CategoryModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @ManyToOne(() => CategoryModel, (categoryCategoryModel) => categoryCategoryModel.children, {
    nullable: true,
  })
  parent: CategoryModel;

  @OneToMany(() => CategoryModel, (categoryCategoryModel) => categoryCategoryModel.parent)
  children: CategoryModel[];

  @ManyToMany(() => ProductModel, (products) => products.categories)
  @JoinTable()
  products: ProductModel[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
