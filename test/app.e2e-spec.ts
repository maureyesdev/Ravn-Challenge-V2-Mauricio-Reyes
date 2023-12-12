import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@quickcart/app/infrastructure/ins/config/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('gql', () => {
    describe('products', () => {
      it('should get products', () => {
        return request(app.getHttpServer())
          .post('/graphql')
          .send({ query: 'query get_products { products { id } }' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.products).toEqual([{ id: '1' }]);
          });
      });
    });
  });
});
