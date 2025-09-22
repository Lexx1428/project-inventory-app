/*
  Warnings:

  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "description",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Uncategorized',
ADD COLUMN     "parLevel" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "reorderPoint" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "unit" TEXT NOT NULL DEFAULT 'Each',
ALTER COLUMN "quantity" SET DEFAULT 0,
ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(65,30);
