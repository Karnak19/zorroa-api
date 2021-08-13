/*
  Warnings:

  - You are about to drop the column `coinId` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the `Coin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `coin` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_coinId_fkey";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "coinId",
ADD COLUMN     "coin" TEXT NOT NULL;

-- DropTable
DROP TABLE "Coin";
