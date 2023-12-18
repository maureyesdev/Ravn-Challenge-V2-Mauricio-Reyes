import { CartItem } from '@quickcart/users/domain/entities/cart-item';

export enum CartStatus {
  Active = 'Active',
  CheckedOut = 'CheckedOut',
}

export type CartCreateData = {
  userId: number;
  status?: keyof typeof CartStatus;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CartProps = {
  data: CartCreateData;
};

export class Cart {
  id: number;
  userId: number;
  status: keyof typeof CartStatus;
  items: CartItem[];
  total: number;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: CartProps) {
    this.id = -1;
    this.userId = props.data.userId;
    this.status = props.data.status ?? CartStatus.Active;
    this.total = 0;
    this.createdAt = props.data.createdAt;
    this.updatedAt = props.data.updatedAt;
  }

  static create(props: CartProps): Cart {
    return new Cart(props);
  }
}
