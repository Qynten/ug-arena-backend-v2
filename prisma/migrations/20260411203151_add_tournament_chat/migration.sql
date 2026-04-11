/*
  Warnings:

  - The values [ORGANIZER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "ChatMessageType" AS ENUM ('NORMAL', 'ADMIN_CALL', 'SYSTEM');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationType" ADD VALUE 'PARTY_INVITE';
ALTER TYPE "NotificationType" ADD VALUE 'ADMIN_CALL';

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('PLAYER', 'OWNER', 'ADMIN', 'SUPER_ADMIN');
ALTER TABLE "public"."users" ALTER COLUMN "roles" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "roles" TYPE "UserRole_new"[] USING ("roles"::text::"UserRole_new"[]);
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "public"."UserRole_old";
ALTER TABLE "users" ALTER COLUMN "roles" SET DEFAULT ARRAY['PLAYER']::"UserRole"[];
COMMIT;

-- AlterTable
ALTER TABLE "tournaments" ADD COLUMN     "allowSubstitutions" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "imageId" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "photoId" TEXT;

-- CreateTable
CREATE TABLE "parties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party_members" (
    "id" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "TeamPlayerRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "party_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party_invites" (
    "id" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "CommonStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "party_invites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "content" BYTEA NOT NULL,
    "mimeType" TEXT NOT NULL,
    "fileName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tournament_chat_messages" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "ChatMessageType" NOT NULL DEFAULT 'NORMAL',
    "issueType" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tournament_chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "party_members_partyId_userId_key" ON "party_members"("partyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "party_invites_partyId_userId_key" ON "party_invites"("partyId", "userId");

-- CreateIndex
CREATE INDEX "tournament_chat_messages_tournamentId_createdAt_idx" ON "tournament_chat_messages"("tournamentId", "createdAt");

-- CreateIndex
CREATE INDEX "match_history_opponentId_idx" ON "match_history"("opponentId");

-- CreateIndex
CREATE INDEX "matches_participant1Id_idx" ON "matches"("participant1Id");

-- CreateIndex
CREATE INDEX "matches_participant2Id_idx" ON "matches"("participant2Id");

-- CreateIndex
CREATE INDEX "participants_userId_idx" ON "participants"("userId");

-- CreateIndex
CREATE INDEX "participants_teamId_idx" ON "participants"("teamId");

-- CreateIndex
CREATE INDEX "teams_isDeleted_idx" ON "teams"("isDeleted");

-- CreateIndex
CREATE INDEX "tournaments_isDeleted_idx" ON "tournaments"("isDeleted");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournaments" ADD CONSTRAINT "tournaments_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parties" ADD CONSTRAINT "parties_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_members" ADD CONSTRAINT "party_members_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_members" ADD CONSTRAINT "party_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_invites" ADD CONSTRAINT "party_invites_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_invites" ADD CONSTRAINT "party_invites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_chat_messages" ADD CONSTRAINT "tournament_chat_messages_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_chat_messages" ADD CONSTRAINT "tournament_chat_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_chat_messages" ADD CONSTRAINT "tournament_chat_messages_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
