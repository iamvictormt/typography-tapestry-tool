-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "AccountProfile" AS ENUM ('CONTRACTOR', 'OWNER', 'BOTH', 'ADMIN');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('DRAFT', 'PENDING_REVIEW', 'ACTIVE', 'PAUSED', 'REJECTED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'BUSY', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "PriceUnit" AS ENUM ('HOUR', 'HECTARE', 'DAY');

-- CreateEnum
CREATE TYPE "DemandStatus" AS ENUM ('OPEN', 'PROPOSALS_RECEIVED', 'NEGOTIATING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'REVIEWED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('SENT', 'VIEWED', 'NEGOTIATING', 'ACCEPTED', 'DECLINED', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('RESERVED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "MessageChannel" AS ENUM ('PLATFORM', 'WHATSAPP');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "whatsapp" TEXT,
    "document" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "profile" "AccountProfile" NOT NULL DEFAULT 'CONTRACTOR',
    "imageUrl" TEXT,
    "passwordHash" TEXT,
    "phoneVerifiedAt" TIMESTAMP(3),
    "termsAcceptedAt" TIMESTAMP(3),
    "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MachineCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MachineCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER,
    "powerHp" INTEGER,
    "locationCity" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "priceAmount" DECIMAL(10,2) NOT NULL,
    "priceUnit" "PriceUnit" NOT NULL,
    "operatorIncluded" BOOLEAN NOT NULL DEFAULT false,
    "fuelIncluded" BOOLEAN NOT NULL DEFAULT false,
    "serviceRadiusKm" INTEGER NOT NULL,
    "availabilityStatus" "AvailabilityStatus" NOT NULL DEFAULT 'AVAILABLE',
    "availableFrom" TIMESTAMP(3),
    "availableUntil" TIMESTAMP(3),
    "description" TEXT,
    "conditions" TEXT,
    "status" "ListingStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MachinePhoto" (
    "id" TEXT NOT NULL,
    "machineId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MachinePhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demand" (
    "id" TEXT NOT NULL,
    "contractorId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "operationType" TEXT NOT NULL,
    "estimatedAreaHa" DECIMAL(10,2),
    "minPowerHp" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL,
    "durationDays" INTEGER,
    "locationCity" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "operatorRequired" BOOLEAN NOT NULL DEFAULT false,
    "budgetAmount" DECIMAL(10,2),
    "notes" TEXT,
    "status" "DemandStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Demand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandPhoto" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DemandPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "machineId" TEXT,
    "amount" DECIMAL(10,2) NOT NULL,
    "priceUnit" "PriceUnit" NOT NULL,
    "operatorIncluded" BOOLEAN NOT NULL DEFAULT false,
    "fuelIncluded" BOOLEAN NOT NULL DEFAULT false,
    "displacementFeeAmount" DECIMAL(10,2),
    "availableDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "validUntil" TIMESTAMP(3),
    "status" "ProposalStatus" NOT NULL DEFAULT 'SENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "proposalId" TEXT,
    "contractorId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "status" "DemandStatus" NOT NULL DEFAULT 'NEGOTIATING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "channel" "MessageChannel" NOT NULL DEFAULT 'PLATFORM',
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "contractorId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "machineId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "locationCity" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "agreedAmount" DECIMAL(10,2) NOT NULL,
    "priceUnit" "PriceUnit" NOT NULL,
    "conditions" TEXT,
    "status" "ReservationStatus" NOT NULL DEFAULT 'RESERVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "revieweeId" TEXT NOT NULL,
    "machineCondition" INTEGER,
    "punctuality" INTEGER,
    "serviceQuality" INTEGER,
    "demandClarity" INTEGER,
    "agreementAccuracy" INTEGER,
    "siteConditions" INTEGER,
    "communication" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");

-- CreateIndex
CREATE INDEX "User_city_state_idx" ON "User"("city", "state");

-- CreateIndex
CREATE INDEX "User_profile_verificationStatus_idx" ON "User"("profile", "verificationStatus");

-- CreateIndex
CREATE UNIQUE INDEX "MachineCategory_name_key" ON "MachineCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MachineCategory_slug_key" ON "MachineCategory"("slug");

-- CreateIndex
CREATE INDEX "Machine_categoryId_locationCity_locationState_idx" ON "Machine"("categoryId", "locationCity", "locationState");

-- CreateIndex
CREATE INDEX "Machine_ownerId_status_idx" ON "Machine"("ownerId", "status");

-- CreateIndex
CREATE INDEX "Machine_availabilityStatus_status_idx" ON "Machine"("availabilityStatus", "status");

-- CreateIndex
CREATE INDEX "MachinePhoto_machineId_position_idx" ON "MachinePhoto"("machineId", "position");

-- CreateIndex
CREATE INDEX "Demand_categoryId_locationCity_locationState_startDate_idx" ON "Demand"("categoryId", "locationCity", "locationState", "startDate");

-- CreateIndex
CREATE INDEX "Demand_contractorId_status_idx" ON "Demand"("contractorId", "status");

-- CreateIndex
CREATE INDEX "Demand_status_createdAt_idx" ON "Demand"("status", "createdAt");

-- CreateIndex
CREATE INDEX "DemandPhoto_demandId_position_idx" ON "DemandPhoto"("demandId", "position");

-- CreateIndex
CREATE INDEX "Proposal_demandId_status_idx" ON "Proposal"("demandId", "status");

-- CreateIndex
CREATE INDEX "Proposal_ownerId_status_idx" ON "Proposal"("ownerId", "status");

-- CreateIndex
CREATE INDEX "Proposal_machineId_idx" ON "Proposal"("machineId");

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_proposalId_key" ON "Conversation"("proposalId");

-- CreateIndex
CREATE INDEX "Conversation_contractorId_updatedAt_idx" ON "Conversation"("contractorId", "updatedAt");

-- CreateIndex
CREATE INDEX "Conversation_ownerId_updatedAt_idx" ON "Conversation"("ownerId", "updatedAt");

-- CreateIndex
CREATE INDEX "Message_conversationId_createdAt_idx" ON "Message"("conversationId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_proposalId_key" ON "Reservation"("proposalId");

-- CreateIndex
CREATE INDEX "Reservation_contractorId_status_idx" ON "Reservation"("contractorId", "status");

-- CreateIndex
CREATE INDEX "Reservation_ownerId_status_idx" ON "Reservation"("ownerId", "status");

-- CreateIndex
CREATE INDEX "Reservation_startDate_status_idx" ON "Reservation"("startDate", "status");

-- CreateIndex
CREATE INDEX "Review_revieweeId_createdAt_idx" ON "Review"("revieweeId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Review_reservationId_reviewerId_key" ON "Review"("reservationId", "reviewerId");

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MachineCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachinePhoto" ADD CONSTRAINT "MachinePhoto_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MachineCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandPhoto" ADD CONSTRAINT "DemandPhoto_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_revieweeId_fkey" FOREIGN KEY ("revieweeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
