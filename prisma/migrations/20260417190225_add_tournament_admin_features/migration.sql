-- AlterTable
ALTER TABLE "tournaments" ADD COLUMN     "hasGrandFinalRematch" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isOwnerBlacklisted" BOOLEAN NOT NULL DEFAULT false;
