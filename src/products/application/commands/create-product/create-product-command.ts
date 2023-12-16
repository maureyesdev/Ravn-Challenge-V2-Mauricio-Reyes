import { FileUpload } from 'graphql-upload-ts';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';

export type CreateProductCommand = ProductCreateOneArgs & {
  image: Promise<FileUpload>;
};
