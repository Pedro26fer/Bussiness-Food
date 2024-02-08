import { CategoryModel } from 'src/Category/category.model';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => CategoryModel, categories => categories.products)
  categories: CategoryModel[]

  @Column({type: 'varchar'})
  name: string
  
  @Column({type: 'int'})
  qty: number
  
  @Column({type: 'decimal'})
  price: number
  
  @Column({type: 'varchar'})
  photo: string  

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}
