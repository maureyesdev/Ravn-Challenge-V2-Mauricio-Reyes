import { Module } from '@nestjs/common';
import { ProductsModule } from '@quickcart/products/infrastructure/ins/config/products.module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
