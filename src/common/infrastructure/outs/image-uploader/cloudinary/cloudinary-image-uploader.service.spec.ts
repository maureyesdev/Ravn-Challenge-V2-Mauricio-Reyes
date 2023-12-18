import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryImageUploaderService } from '@quickcart/common/infrastructure/outs/image-uploader/cloudinary/cloudinary-image-uploader.service';

describe('CloudinaryImageUploaderService', () => {
  let service: CloudinaryImageUploaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CloudinaryImageUploaderService,
        // TODO: Use Factory instead of value, need to be mocked
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue({
              cloudinary: {
                cloudName: 'test',
                apiKey: 'test',
                apiSecret: 'test',
              },
            }),
          },
        },
      ],
    }).compile();

    service = module.get<CloudinaryImageUploaderService>(
      CloudinaryImageUploaderService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
