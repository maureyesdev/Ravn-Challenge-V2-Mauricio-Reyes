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
    describe('createProducts', () => {
      it('should create a product', () => {
        return request(app.getHttpServer())
          .post('/graphql')
          .send({
            query:
              'mutation create_product($data: CreateProductDataInput!) { createProduct(data: $data) { id name price image stock } }',
            variables: {
              data: {
                name: 'Product 1',
                price: 100,
                image: 'http://localhost:3000/image.png',
                stock: 100,
              },
            },
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.createProduct).toEqual({ id: '1' });
          });
      });
    });

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
