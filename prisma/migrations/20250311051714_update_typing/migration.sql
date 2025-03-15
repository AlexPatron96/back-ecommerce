/*
  Warnings:

  - You are about to drop the column `contrasena` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "contrasena",
ADD COLUMN     "password" TEXT NOT NULL;
