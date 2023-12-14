import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GetProductsQueryHandler } from 'src/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from 'src/products/infrastructure/ins/gql/resolvers/products.resolver';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { imageUploaderConfig } from '@quickcart/common/infrastructure/ins/config/image-uploader.config';
import { CloudinaryImageUploaderService } from '@quickcart/common/infrastructure/outs/image-uploader/cloudinary/cloudinary-image-uploader.service';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { PrismaProductRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-product.repository';

@Module({
  imports: [ConfigModule.forRoot({ load: [imageUploaderConfig] })],
  providers: [
    PrismaService,
    ProductsResolver,
    { provide: ImageUploaderService, useClass: CloudinaryImageUploaderService },
    { provide: ProductRepository, useClass: PrismaProductRepository },
    CreateProductCommandHandler,
    GetProductsQueryHandler,
  ],
})
export class ProductsModule {}
