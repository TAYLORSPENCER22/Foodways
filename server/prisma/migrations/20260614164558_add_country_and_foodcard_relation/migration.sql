/*
  Warnings:

  - Added the required column `countryId` to the `FoodCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodCard" ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");

-- AddForeignKey
ALTER TABLE "FoodCard" ADD CONSTRAINT "FoodCard_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
