/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "imageUrl",
ADD COLUMN     "countryFlagUrl" TEXT,
ADD COLUMN     "countryImageUrl" TEXT;
