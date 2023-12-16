import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { CreateProductArgs } from '@quickcart/products/infrastructure/ins/gql/args/create-product.args';
import { GetProductsArgs } from '@quickcart/products/infrastructure/ins/gql/args/get-products.args';
import { PaginatedProductsModel } from '@quickcart/products/infrastructure/ins/gql/models/paginated-products.model';
import { ProductModel } from '@quickcart/products/infrastructure/ins/gql/models/product.model';

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(
    private readonly createProductCommandHandler: CreateProductCommandHandler,
    private readonly getProductsQueryHandler: GetProductsQueryHandler,
  ) {}

  @Mutation(() => ProductModel)
  async createProduct(@Args() args: CreateProductArgs) {
    return this.createProductCommandHandler.execute(args);
  }

  @Query(() => PaginatedProductsModel, { name: 'products' })
  getProducts(@Args() args: GetProductsArgs) {
    return this.getProductsQueryHandler.execute(args);
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
