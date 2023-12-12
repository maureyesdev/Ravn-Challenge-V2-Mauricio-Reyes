import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GetProductsQueryHandler } from 'src/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from 'src/products/infrastructure/ins/gql/resolvers/products.resolver';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { InMemoryProductRepository } from '@quickcart/products/infrastructure/outs/persistence/in-memory/in-memory-product.repository';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({ autoSchemaFile: true }),
    }),
  ],
  providers: [
    ProductsResolver,
    { provide: ProductRepository, useClass: InMemoryProductRepository },
    CreateProductCommandHandler,
    GetProductsQueryHandler,
  ],
})
export class ProductsModule {}
