import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GetProductsQueryHandler } from 'src/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from 'src/products/infrastructure/ins/gql/resolvers/products.resolver';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { imageUploaderConfig } from '@quickcart/common/infrastructure/ins/config/image-uploader.config';
import { CloudinaryImageUploaderService } from '@quickcart/common/infrastructure/outs/image-uploader/cloudinary/cloudinary-image-uploader.service';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { DeleteProductCommandHandler } from '@quickcart/infrastructure/commands/delete-product/delete-product-command-handler';
import { UpdateProductCommandHandler } from '@quickcart/infrastructure/commands/update-product/update-product-command-handler';
import { CreateCategoryCommandHandler } from '@quickcart/products/application/commands/create-category/create-category-command-handler';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { GetProductQueryHandler } from '@quickcart/products/application/queries/get-product/get-product-query-handler';
import { CategoryRepository } from '@quickcart/products/domain/repositories/category-repository';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { CategoriesResolver } from '@quickcart/products/infrastructure/ins/gql/resolvers/categories.resolver';
import { PrismaCategoryRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-category.repository';
import { PrismaProductRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-product.repository';

@Module({
  imports: [ConfigModule.forRoot({ load: [imageUploaderConfig] })],
  providers: [
    PrismaService,
    // Products
    ProductsResolver,
    { provide: ImageUploaderService, useClass: CloudinaryImageUploaderService },
    { provide: ProductRepository, useClass: PrismaProductRepository },
    CreateProductCommandHandler,
    GetProductsQueryHandler,
    GetProductQueryHandler,
    UpdateProductCommandHandler,
    DeleteProductCommandHandler,
    // Categories
    CategoriesResolver,
    { provide: CategoryRepository, useClass: PrismaCategoryRepository },
    CreateCategoryCommandHandler,
  ],
})
export class ProductsModule {}
