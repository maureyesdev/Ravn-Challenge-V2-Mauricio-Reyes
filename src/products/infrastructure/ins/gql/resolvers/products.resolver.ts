import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteProductCommandHandler } from '@quickcart/infrastructure/commands/delete-product/delete-product-command-handler';
import { UpdateProductCommandHandler } from '@quickcart/infrastructure/commands/update-product/update-product-command-handler';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { GetProductQueryHandler } from '@quickcart/products/application/queries/get-product/get-product-query-handler';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { CreateProductArgs } from '@quickcart/products/infrastructure/ins/gql/args/create-product.args';
import { DeleteProductArgs } from '@quickcart/products/infrastructure/ins/gql/args/delete-product.args';
import { GetProductArgs } from '@quickcart/products/infrastructure/ins/gql/args/get-product.args';
import { GetProductsArgs } from '@quickcart/products/infrastructure/ins/gql/args/get-products.args';
import { UpdateProductArgs } from '@quickcart/products/infrastructure/ins/gql/args/update-product.args';
import { PaginatedProductsModel } from '@quickcart/products/infrastructure/ins/gql/models/paginated-products.model';
import { ProductModel } from '@quickcart/products/infrastructure/ins/gql/models/product.model';

// import { UserRole } from '@quickcart/users/domain/entities/user';
// import { UserRoles } from '@quickcart/auth/infrastructure/ins/decorators/user-roles.decorator';
// import { JwtAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/jwt-auth.guard';
// import { UseGuards } from '@nestjs/common';
// import { UserRolesGuard } from '@quickcart/auth/infrastructure/outs/guards/user-roles.guard';

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(
    private readonly createProductCommandHandler: CreateProductCommandHandler,
    private readonly getProductsQueryHandler: GetProductsQueryHandler,
    private readonly getProductQueryHandler: GetProductQueryHandler,
    private readonly updateProductCommandHandler: UpdateProductCommandHandler,
    private readonly deleteProductCommandHandler: DeleteProductCommandHandler,
  ) {}

  // @UseGuards(JwtAuthGuard, UserRolesGuard)
  // @UserRoles(UserRole.Manager)
  @Mutation(() => ProductModel)
  async createProduct(@Args() args: CreateProductArgs) {
    return this.createProductCommandHandler.execute(args);
  }

  @Query(() => PaginatedProductsModel, { name: 'products' })
  getProducts(@Args() args: GetProductsArgs) {
    return this.getProductsQueryHandler.execute(args);
  }

  @Query(() => ProductModel, { name: 'product' })
  getProduct(@Args() args: GetProductArgs) {
    return this.getProductQueryHandler.execute(args);
  }

  // @UseGuards(JwtAuthGuard, UserRolesGuard)
  // @UserRoles(UserRole.Manager)
  @Mutation(() => ProductModel)
  updateProduct(@Args() args: UpdateProductArgs) {
    return this.updateProductCommandHandler.execute(args);
  }

  // @UseGuards(JwtAuthGuard, UserRolesGuard)
  // @UserRoles(UserRole.Manager)
  @Mutation(() => ProductModel)
  deleteProduct(@Args() args: DeleteProductArgs) {
    return this.deleteProductCommandHandler.execute(args);
  }
}
