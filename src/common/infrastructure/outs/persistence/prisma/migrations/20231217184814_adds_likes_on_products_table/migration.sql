-- AlterTable
ALTER TABLE "users"
ADD COLUMN "productId" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
