/*
  Warnings:

  - Added the required column `story` to the `FoodCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodCard" ADD COLUMN     "story" TEXT NOT NULL;
