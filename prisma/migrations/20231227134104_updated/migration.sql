-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "agent" TEXT NOT NULL DEFAULT 'not available';

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
