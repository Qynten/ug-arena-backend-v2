-- CreateEnum
CREATE TYPE "TeamVoteType" AS ENUM ('CAPTAIN', 'KICK');

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_matchId_fkey";

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_roundId_fkey";

-- DropForeignKey
ALTER TABLE "match_history" DROP CONSTRAINT "match_history_tournamentId_fkey";

-- AlterTable
ALTER TABLE "match_disputes" ADD COLUMN     "context" TEXT,
ADD COLUMN     "reason" TEXT;

-- AlterTable
ALTER TABLE "match_sets" ALTER COLUMN "p1Score" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "p2Score" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "unlockedAt" TIMESTAMP(3),
ALTER COLUMN "p1Score" SET DEFAULT 0,
ALTER COLUMN "p1Score" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "p2Score" SET DEFAULT 0,
ALTER COLUMN "p2Score" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "team_messages" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "team_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_disputes" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "reportedById" TEXT NOT NULL,
    "status" "DisputeStatus" NOT NULL DEFAULT 'PENDING',
    "reason" TEXT,
    "context" TEXT,
    "resolution" TEXT,
    "resolvedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_disputes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_votes" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "type" "TeamVoteType" NOT NULL,
    "targetId" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "team_votes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "team_disputes_teamId_idx" ON "team_disputes"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "team_votes_teamId_type_targetId_voterId_key" ON "team_votes"("teamId", "type", "targetId", "voterId");

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_messages" ADD CONSTRAINT "team_messages_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_messages" ADD CONSTRAINT "team_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_disputes" ADD CONSTRAINT "team_disputes_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_disputes" ADD CONSTRAINT "team_disputes_reportedById_fkey" FOREIGN KEY ("reportedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_disputes" ADD CONSTRAINT "team_disputes_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_votes" ADD CONSTRAINT "team_votes_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_votes" ADD CONSTRAINT "team_votes_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
