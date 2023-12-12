import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GetProductsQueryHandler } from 'src/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from 'src/products/infrastructure/ins/gql/resolvers/products.resolver';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { PrismaProductRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-product.repository';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: true,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
  ],
  providers: [
    PrismaService,
    ProductsResolver,
    { provide: ProductRepository, useClass: PrismaProductRepository },
    CreateProductCommandHandler,
    GetProductsQueryHandler,
  ],
})
export class ProductsModule {}
