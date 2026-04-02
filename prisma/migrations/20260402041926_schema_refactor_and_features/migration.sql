-- CreateEnum
CREATE TYPE "TournamentRoleType" AS ENUM ('DRAFT_ADMIN', 'SEED_ADMIN', 'SCORE_REPORTER', 'MODERATOR', 'TOURNAMENT_CREATOR', 'DISPUTE_MANAGER', 'TOURNAMENT_OVERSEER');

-- CreateEnum
CREATE TYPE "CommonStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PLAYER', 'ORGANIZER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('DISCORD');

-- CreateEnum
CREATE TYPE "TournamentStatus" AS ENUM ('DRAFT', 'REGISTRATION', 'SEEDING', 'LIVE', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TournamentType" AS ENUM ('SOLO', 'TEAM');

-- CreateEnum
CREATE TYPE "BracketType" AS ENUM ('SINGLE_ELIMINATION', 'DOUBLE_ELIMINATION', 'SWISS', 'ROUND_ROBIN');

-- CreateEnum
CREATE TYPE "CheckInStatus" AS ENUM ('PENDING', 'CHECKED_IN', 'ABSENT', 'DISQUALIFIED');

-- CreateEnum
CREATE TYPE "ParticipantStatus" AS ENUM ('REGISTERED', 'DISQUALIFIED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DisputeStatus" AS ENUM ('PENDING', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "EvidenceType" AS ENUM ('IMAGE', 'VIDEO', 'DOCUMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "PayoutStatus" AS ENUM ('PENDING', 'PROCESSING', 'PAID', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TeamPlayerRole" AS ENUM ('CAPTAIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING', 'ONGOING', 'COMPLETED', 'DISPUTED');

-- CreateEnum
CREATE TYPE "MatchResult" AS ENUM ('WIN', 'LOSS', 'DRAW');

-- CreateEnum
CREATE TYPE "TournamentActivityEnum" AS ENUM ('TOURNAMENT_CREATE', 'TEAM_REQUEST', 'TEAM_ACCEPTED', 'TEAM_REQUEST_REJECTED', 'PLAYER_INVITED_TO_TEAM', 'PLAYER_REMOVED_FROM_TEAM', 'PLAYER_JOINED', 'PLAYER_DECLINE', 'SCORE_UPDATE', 'MATCH_UPDATE', 'PARTICIPANT_DISQUALIFIED');

-- CreateEnum
CREATE TYPE "PrizePoolPosition" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH');

-- CreateEnum
CREATE TYPE "OrganizerRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'REVOKED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "displayName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "refreshTokenHash" TEXT,
    "photo" TEXT,
    "contactNO" TEXT,
    "location" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "roles" "UserRole"[] DEFAULT ARRAY['PLAYER']::"UserRole"[],
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" "AuthProvider" NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "metadata" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizer_requests" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "OrganizerRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizer_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tournaments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "game" TEXT NOT NULL DEFAULT 'Chess',
    "region" TEXT NOT NULL DEFAULT 'Global',
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT,
    "type" "TournamentType" NOT NULL DEFAULT 'TEAM',
    "status" "TournamentStatus" NOT NULL DEFAULT 'DRAFT',
    "regStart" TIMESTAMP(3),
    "regEnd" TIMESTAMP(3),
    "seedingStart" TIMESTAMP(3),
    "seedingEnd" TIMESTAMP(3),
    "liveStart" TIMESTAMP(3),
    "liveEnd" TIMESTAMP(3),
    "checkInStart" TIMESTAMP(3),
    "checkInEnd" TIMESTAMP(3),
    "maxParticipants" INTEGER NOT NULL,
    "minTeamSize" INTEGER NOT NULL DEFAULT 1,
    "maxTeamSize" INTEGER NOT NULL DEFAULT 5,
    "bestOf" INTEGER NOT NULL DEFAULT 1,
    "allowDraws" BOOLEAN NOT NULL DEFAULT false,
    "logo" TEXT,
    "metadata" JSONB DEFAULT '{}',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tournament_staff" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "role" "TournamentRoleType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournament_staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "userId" TEXT,
    "teamId" TEXT,
    "seed" INTEGER NOT NULL DEFAULT 0,
    "status" "ParticipantStatus" NOT NULL DEFAULT 'REGISTERED',
    "checkInStatus" "CheckInStatus" NOT NULL DEFAULT 'PENDING',
    "points" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "draws" INTEGER NOT NULL DEFAULT 0,
    "tiebreakerScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "buchholzScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tournament_rosters" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "TeamPlayerRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournament_rosters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "payload" JSONB,
    "snapshot" JSONB,
    "performedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currentRoundId" TEXT,
    "tournamentId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_players" (
    "id" TEXT NOT NULL,
    "role" "TeamPlayerRole" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teamId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_player_registrations" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "status" "CommonStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_player_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rounds" (
    "id" TEXT NOT NULL,
    "name" INTEGER NOT NULL DEFAULT 1,
    "tournamentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,
    "participant1Id" TEXT,
    "participant2Id" TEXT,
    "p1Score" INTEGER NOT NULL DEFAULT 0,
    "p2Score" INTEGER NOT NULL DEFAULT 0,
    "status" "MatchStatus" NOT NULL DEFAULT 'PENDING',
    "winnerId" TEXT,
    "draw" BOOLEAN NOT NULL DEFAULT false,
    "nextMatchId" TEXT,
    "loserMoveToMatchId" TEXT,
    "branch" TEXT,
    "scheduledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_sets" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "p1Score" INTEGER NOT NULL,
    "p2Score" INTEGER NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "evidenceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "match_sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_disputes" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "reportedById" TEXT NOT NULL,
    "status" "DisputeStatus" NOT NULL DEFAULT 'PENDING',
    "resolution" TEXT,
    "resolvedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "match_disputes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dispute_evidence" (
    "id" TEXT NOT NULL,
    "disputeId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "EvidenceType" NOT NULL DEFAULT 'IMAGE',
    "description" TEXT,
    "uploadedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dispute_evidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dispute_messages" (
    "id" TEXT NOT NULL,
    "disputeId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dispute_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scores" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "firstParticipantId" TEXT NOT NULL,
    "secondParticipantId" TEXT NOT NULL,
    "firstParticipantScore" INTEGER NOT NULL,
    "secondParticipantScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tournament_activities" (
    "id" TEXT NOT NULL,
    "type" "TournamentActivityEnum" NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournament_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_history" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "opponentId" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "participantScore" INTEGER NOT NULL,
    "opponentScore" INTEGER NOT NULL,
    "result" "MatchResult" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prize_pools" (
    "id" TEXT NOT NULL,
    "position" "PrizePoolPosition" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "tournamentId" TEXT NOT NULL,
    "winnerId" TEXT,
    "payoutStatus" "PayoutStatus" NOT NULL DEFAULT 'PENDING',
    "metadata" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prize_pools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE INDEX "users_isBlocked_idx" ON "users"("isBlocked");

-- CreateIndex
CREATE UNIQUE INDEX "user_accounts_providerAccountId_key" ON "user_accounts"("providerAccountId");

-- CreateIndex
CREATE INDEX "user_accounts_userId_idx" ON "user_accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_accounts_provider_providerAccountId_key" ON "user_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "organizer_requests_userId_idx" ON "organizer_requests"("userId");

-- CreateIndex
CREATE INDEX "organizer_requests_status_idx" ON "organizer_requests"("status");

-- CreateIndex
CREATE INDEX "tournaments_ownerId_idx" ON "tournaments"("ownerId");

-- CreateIndex
CREATE INDEX "tournaments_status_idx" ON "tournaments"("status");

-- CreateIndex
CREATE INDEX "tournaments_name_idx" ON "tournaments"("name");

-- CreateIndex
CREATE INDEX "tournaments_game_idx" ON "tournaments"("game");

-- CreateIndex
CREATE INDEX "tournaments_region_idx" ON "tournaments"("region");

-- CreateIndex
CREATE INDEX "tournaments_game_region_idx" ON "tournaments"("game", "region");

-- CreateIndex
CREATE INDEX "tournament_staff_userId_idx" ON "tournament_staff"("userId");

-- CreateIndex
CREATE INDEX "tournament_staff_tournamentId_idx" ON "tournament_staff"("tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "tournament_staff_userId_tournamentId_role_key" ON "tournament_staff"("userId", "tournamentId", "role");

-- CreateIndex
CREATE INDEX "participants_tournamentId_status_idx" ON "participants"("tournamentId", "status");

-- CreateIndex
CREATE INDEX "participants_tournamentId_checkInStatus_idx" ON "participants"("tournamentId", "checkInStatus");

-- CreateIndex
CREATE UNIQUE INDEX "participants_tournamentId_userId_key" ON "participants"("tournamentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "participants_tournamentId_teamId_key" ON "participants"("tournamentId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "tournament_rosters_participantId_userId_key" ON "tournament_rosters"("participantId", "userId");

-- CreateIndex
CREATE INDEX "audit_logs_tournamentId_idx" ON "audit_logs"("tournamentId");

-- CreateIndex
CREATE INDEX "teams_tournamentId_idx" ON "teams"("tournamentId");

-- CreateIndex
CREATE INDEX "team_players_teamId_idx" ON "team_players"("teamId");

-- CreateIndex
CREATE INDEX "team_players_playerId_idx" ON "team_players"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "team_players_teamId_playerId_key" ON "team_players"("teamId", "playerId");

-- CreateIndex
CREATE INDEX "team_player_registrations_teamId_idx" ON "team_player_registrations"("teamId");

-- CreateIndex
CREATE INDEX "team_player_registrations_playerId_idx" ON "team_player_registrations"("playerId");

-- CreateIndex
CREATE INDEX "matches_tournamentId_status_idx" ON "matches"("tournamentId", "status");

-- CreateIndex
CREATE INDEX "match_sets_matchId_idx" ON "match_sets"("matchId");

-- CreateIndex
CREATE INDEX "match_disputes_matchId_idx" ON "match_disputes"("matchId");

-- CreateIndex
CREATE INDEX "tournament_activities_tournamentId_idx" ON "tournament_activities"("tournamentId");

-- CreateIndex
CREATE INDEX "match_history_participantId_idx" ON "match_history"("participantId");

-- CreateIndex
CREATE INDEX "match_history_tournamentId_idx" ON "match_history"("tournamentId");

-- CreateIndex
CREATE INDEX "match_history_roundId_idx" ON "match_history"("roundId");

-- CreateIndex
CREATE INDEX "match_history_matchId_idx" ON "match_history"("matchId");

-- AddForeignKey
ALTER TABLE "user_accounts" ADD CONSTRAINT "user_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizer_requests" ADD CONSTRAINT "organizer_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournaments" ADD CONSTRAINT "tournaments_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_staff" ADD CONSTRAINT "tournament_staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_staff" ADD CONSTRAINT "tournament_staff_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_rosters" ADD CONSTRAINT "tournament_rosters_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_rosters" ADD CONSTRAINT "tournament_rosters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_players" ADD CONSTRAINT "team_players_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_players" ADD CONSTRAINT "team_players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_player_registrations" ADD CONSTRAINT "team_player_registrations_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_player_registrations" ADD CONSTRAINT "team_player_registrations_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_participant1Id_fkey" FOREIGN KEY ("participant1Id") REFERENCES "participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_participant2Id_fkey" FOREIGN KEY ("participant2Id") REFERENCES "participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_sets" ADD CONSTRAINT "match_sets_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_disputes" ADD CONSTRAINT "match_disputes_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_disputes" ADD CONSTRAINT "match_disputes_reportedById_fkey" FOREIGN KEY ("reportedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_disputes" ADD CONSTRAINT "match_disputes_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dispute_evidence" ADD CONSTRAINT "dispute_evidence_disputeId_fkey" FOREIGN KEY ("disputeId") REFERENCES "match_disputes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dispute_evidence" ADD CONSTRAINT "dispute_evidence_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dispute_messages" ADD CONSTRAINT "dispute_messages_disputeId_fkey" FOREIGN KEY ("disputeId") REFERENCES "match_disputes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dispute_messages" ADD CONSTRAINT "dispute_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scores" ADD CONSTRAINT "scores_firstParticipantId_fkey" FOREIGN KEY ("firstParticipantId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scores" ADD CONSTRAINT "scores_secondParticipantId_fkey" FOREIGN KEY ("secondParticipantId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scores" ADD CONSTRAINT "scores_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tournament_activities" ADD CONSTRAINT "tournament_activities_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_history" ADD CONSTRAINT "match_history_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prize_pools" ADD CONSTRAINT "prize_pools_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prize_pools" ADD CONSTRAINT "prize_pools_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
