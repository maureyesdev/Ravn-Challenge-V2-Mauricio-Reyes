export type ProductCreateData = {
  name: string;
  price: number;
  image: string;
  stock: number;
  // category: Category[];
  isEnabled?: boolean;
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
  // category: Category[];
  isEnabled: boolean;

  private constructor(props: ProductProps) {
    this.id = -1;
    this.name = props.data.name;
    this.price = props.data.price;
    this.image = props.data.image;
    this.stock = props.data.stock;
    // this.category = props.data.category;
    this.isEnabled = props.data.isEnabled ?? false;
  }

  static create(props: ProductProps) {
    return new Product(props);
  }
}
