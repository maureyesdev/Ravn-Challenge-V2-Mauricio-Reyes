export type CartItemCreateData = {
  productId: number;
  quantity: number;
  cartId?: number;
};

export type CartItemProps = {
  data: CartItemCreateData;
};

export class CartItem {
  id: number;
  productId: number;
  quantity: number;
  cartId: number;

  private constructor(props: CartItemProps) {
    this.id = -1;
    this.productId = props.data.productId;
    this.quantity = props.data.quantity;
    this.cartId = props.data.cartId;
  }

  static create(props: CartItemProps): CartItem {
    return new CartItem(props);
  }
}
