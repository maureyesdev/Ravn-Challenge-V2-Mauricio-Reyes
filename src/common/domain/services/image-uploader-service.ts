import { Stream } from 'stream';
import { CustomError } from '@quickcart/common/domain/errors/custom-error';

export abstract class ImageUploaderService {
  // TODO: need to specify the args type for upload which is a stream
  abstract upload(image: Stream): Promise<string | CustomError>;
  // TODO: need to specify the args type for delete which is a image key
  abstract delete(imageIdentifier: string): Promise<boolean>;
}
