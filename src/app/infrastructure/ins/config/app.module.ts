import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from '@quickcart/auth/infrastructure/ins/config/auth.module';
import { ProductsModule } from '@quickcart/products/infrastructure/ins/config/products.module';
import { UsersModule } from '@quickcart/users/infrastructure/ins/config/users.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: true,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: ({ req }) => ({ req }),
      }),
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
