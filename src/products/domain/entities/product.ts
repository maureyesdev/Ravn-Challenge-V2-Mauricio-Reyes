import { Category } from '@quickcart/products/domain/entities/category';

export type ProductCreateData = {
  name: string;
  price: number;
  image?: string;
  stock: number;
  categories?: Category[] | number[];
  isEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

type ProductProps = {
  data: ProductCreateData;
};

export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  categories: Category[] | number[];
  isEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: ProductProps) {
    this.id = -1;
    this.name = props.data.name;
    this.price = props.data.price;
    this.image = props.data.image;
    this.stock = props.data.stock;
    this.categories = props.data.categories ?? [];
    this.isEnabled = props.data.isEnabled ?? false;
  }

  static create(props: ProductProps) {
    return new Product(props);
  }
}
