import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadApiOptions, v2 as cloudinary } from 'cloudinary';
import { CustomError } from '@quickcart/common/domain/errors/custom-error';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { ImageUploaderConfig } from '@quickcart/common/infrastructure/ins/config/image-uploader.config';

@Injectable()
export class CloudinaryImageUploaderService implements ImageUploaderService {
  constructor(private readonly configService: ConfigService) {
    const { cloudinary: cloudinaryConfig } =
      this.configService.get<ImageUploaderConfig>('imageUploader');
    cloudinary.config({
      cloud_name: cloudinaryConfig.cloudName,
      api_key: cloudinaryConfig.apiKey,
      api_secret: cloudinaryConfig.apiSecret,
    });
  }

  async upload(readStream: any): Promise<string | CustomError> {
    return new Promise((resolve, reject) => {
      const uploadParams: UploadApiOptions = { format: 'webp' };
      const upload = cloudinary.uploader.upload_stream(
        uploadParams,
        (error, { secure_url }) => {
          if (error) {
            return reject(CustomError.InternalServerError(error.message));
          }
          resolve(secure_url);
        },
      );
      readStream.pipe(upload);
    });
  }

  async delete(imageIdentifier: any): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      await cloudinary.uploader.destroy(imageIdentifier, (error) => {
        if (error) {
          return reject(false);
        }
        resolve(true);
      });
    });
  }
}
