/*
  Warnings:

  - A unique constraint covering the columns `[title,content]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_content_key" ON "Blog"("title", "content");
