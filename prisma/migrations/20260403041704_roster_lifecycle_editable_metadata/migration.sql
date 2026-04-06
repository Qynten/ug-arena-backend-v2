/*
  Warnings:

  - You are about to drop the `organizer_requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "organizer_requests" DROP CONSTRAINT "organizer_requests_userId_fkey";

-- AlterTable
ALTER TABLE "tournaments" ADD COLUMN     "requirements" TEXT,
ADD COLUMN     "rules" TEXT,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "organizer_requests";

-- DropEnum
DROP TYPE "OrganizerRequestStatus";
