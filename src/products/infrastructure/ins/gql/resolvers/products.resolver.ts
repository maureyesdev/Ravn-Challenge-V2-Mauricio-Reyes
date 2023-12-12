import { Query, Resolver } from '@nestjs/graphql';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { ProductModel } from '@quickcart/products/infrastructure/ins/gql/models/product.model';

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(
    private readonly getProductsQueryHandler: GetProductsQueryHandler,
  ) {}

  // createProduct() {}

  @Query(() => [ProductModel], { name: 'products' })
  getProducts() {
    return this.getProductsQueryHandler.execute();
  }

  // @Query(() => Product, { name: 'product' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.productsService.findOne(id);
  // }

  // @Mutation(() => Product)
  // updateProduct(
  //   @Args('updateProductInput') updateProductInput: UpdateProductInput,
  // ) {
  //   return this.productsService.update(
  //     updateProductInput.id,
  //     updateProductInput,
  //   );
  // }

  // @Mutation(() => Product)
  // removeProduct(@Args('id', { type: () => Int }) id: number) {
  //   return this.productsService.remove(id);
  // }
}
