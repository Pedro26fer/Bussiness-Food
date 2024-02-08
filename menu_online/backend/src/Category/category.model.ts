import { ProductModel } from 'src/Product/product.model';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @ManyToOne(() => Category, category => category.children, { nullable: true })
  parent: Category;

  @OneToMany(() => Category, category => category.parent)
  children: Category[];

  @ManyToMany(() => ProductModel, products => products.categories)
  @JoinTable()
  products: any
  
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}


