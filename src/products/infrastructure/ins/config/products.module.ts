import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GetProductsQueryHandler } from 'src/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from 'src/products/infrastructure/ins/gql/resolvers/products.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({ autoSchemaFile: true }),
    }),
  ],
  providers: [ProductsResolver, GetProductsQueryHandler],
})
export class ProductsModule {}
