-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'Competitor';

-- AlterTable
ALTER TABLE "_CompetitionToOrganization" ADD CONSTRAINT "_CompetitionToOrganization_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CompetitionToOrganization_AB_unique";

-- AlterTable
ALTER TABLE "_CompetitionToSponsor" ADD CONSTRAINT "_CompetitionToSponsor_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CompetitionToSponsor_AB_unique";

-- AlterTable
ALTER TABLE "_EventToOrganization" ADD CONSTRAINT "_EventToOrganization_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EventToOrganization_AB_unique";

-- AlterTable
ALTER TABLE "_EventToSponsor" ADD CONSTRAINT "_EventToSponsor_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EventToSponsor_AB_unique";

-- AlterTable
ALTER TABLE "_EventToUser" ADD CONSTRAINT "_EventToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EventToUser_AB_unique";

-- AlterTable
ALTER TABLE "_ProniteToUser" ADD CONSTRAINT "_ProniteToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProniteToUser_AB_unique";

-- AlterTable
ALTER TABLE "_TeamToUser" ADD CONSTRAINT "_TeamToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_TeamToUser_AB_unique";

-- AlterTable
ALTER TABLE "_invitations" ADD CONSTRAINT "_invitations_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_invitations_AB_unique";
