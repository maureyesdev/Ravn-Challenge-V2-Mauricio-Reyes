import { registerAs } from '@nestjs/config';
import { get } from 'env-var';

export type ImageUploaderConfig = {
  cloudinary: {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
  };
};

export const imageUploaderConfig = registerAs(
  'imageUploader',
  () =>
    ({
      cloudinary: {
        cloudName: get('CLOUDINARY_CLOUD_NAME').required().asString(),
        apiKey: get('CLOUDINARY_API_KEY').required().asString(),
        apiSecret: get('CLOUDINARY_API_SECRET').required().asString(),
      },
    }) as ImageUploaderConfig,
);
