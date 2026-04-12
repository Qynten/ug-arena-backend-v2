-- AlterTable
ALTER TABLE "tournament_chat_messages" ADD COLUMN     "isResolved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "resolvedById" TEXT,
ADD COLUMN     "response" TEXT;

-- AddForeignKey
ALTER TABLE "tournament_chat_messages" ADD CONSTRAINT "tournament_chat_messages_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
