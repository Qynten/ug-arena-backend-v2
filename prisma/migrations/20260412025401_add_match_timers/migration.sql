/*
  Warnings:

  - You are about to drop the `dispute_messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dispute_messages" DROP CONSTRAINT "dispute_messages_disputeId_fkey";

-- DropForeignKey
ALTER TABLE "dispute_messages" DROP CONSTRAINT "dispute_messages_senderId_fkey";

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "matchReadyAt" TIMESTAMP(3),
ADD COLUMN     "p1CheckInAt" TIMESTAMP(3),
ADD COLUMN     "p1CheckInStatus" "CheckInStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "p2CheckInAt" TIMESTAMP(3),
ADD COLUMN     "p2CheckInStatus" "CheckInStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "tournaments" ADD COLUMN     "checkInTimer" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "matchStartTimer" INTEGER NOT NULL DEFAULT 5;

-- DropTable
DROP TABLE "dispute_messages";

-- CreateTable
CREATE TABLE "match_messages" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "match_messages" ADD CONSTRAINT "match_messages_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_messages" ADD CONSTRAINT "match_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
