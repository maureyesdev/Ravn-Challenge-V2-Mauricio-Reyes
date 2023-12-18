import { PrismaClient } from '@prisma/client';
import { stdout } from 'process';

(async (prisma) => {
  // Create categories
  stdout.write(`Creating categories\n`);
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Salty' },
      { name: 'Spicy' },
      { name: 'Sweet' },
      { name: 'Sour' },
      { name: 'Bitter' },
      { name: 'Umami' },
      { name: 'Fruity' },
      { name: 'Cheesy' },
      { name: 'Crunchy' },
      { name: 'Soft' },
    ],
  });
  stdout.write(`Categories created: ${categories.count}\n`);

  stdout.write(`Creating products\n`);
  // Create products
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Semilla de marañon',
        price: 1.99,
        image: 'https://example.com/images/salty-chips.jpg',
        stock: 100,
        isEnabled: true,
      },
      {
        name: 'Mani japones',
        price: 2.99,
        image: 'https://example.com/images/spicy-nuts.jpg',
        stock: 80,
        isEnabled: true,
      },
      {
        name: 'Mani con sal',
        price: 0.99,
        image: 'https://example.com/images/sweet-candy.jpg',
        stock: 200,
        isEnabled: true,
      },
      {
        name: 'Mani con limon',
        price: 1.49,
        image: 'https://example.com/images/sour-gummies.jpg',
        stock: 150,
        isEnabled: true,
      },
      {
        name: 'Platanitos',
        price: 2.49,
        image: 'https://example.com/images/umami-crackers.jpg',
        stock: 120,
        isEnabled: true,
      },
    ],
  });
  stdout.write(`Products created: ${products.count}\n`);

  stdout.write(`Attaching categories to products\n`);
  prisma.product.update({
    data: { categories: { connect: [{ id: 1 }, { id: 6 }] } },
    where: { id: 1 },
  });
  prisma.product.update({
    data: { categories: { connect: [{ id: 5 }, { id: 9 }] } },
    where: { id: 2 },
  });
  prisma.product.update({
    data: { categories: { connect: [{ id: 1 }, { id: 8 }] } },
    where: { id: 3 },
  });
  prisma.product.update({
    data: { categories: { connect: [{ id: 7 }, { id: 8 }] } },
    where: { id: 4 },
  });
  prisma.product.update({
    data: { categories: { connect: [{ id: 10 }, { id: 2 }] } },
    where: { id: 5 },
  });
  stdout.write(`Categories attached to products\n`);

  stdout.write(`Creating users\n`);
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'admin@ravn.com',
        // qwerty12345
        password:
          '$2a$10$Eox2NqqjqCnxHSX5eHtxOucVwWVMtxYXnUWq9CXB47qjOONVDcsg6',
        role: 'Manager',
        status: 'Active',
      },
      {
        email: 'user@ravn.com',
        // qwerty12345
        password:
          '$2a$10$Eox2NqqjqCnxHSX5eHtxOucVwWVMtxYXnUWq9CXB47qjOONVDcsg6',
        role: 'User',
        status: 'Active',
      },
    ],
  });
  stdout.write(`users created: ${users.count}\n`);
})(new PrismaClient());
