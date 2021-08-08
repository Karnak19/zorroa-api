-- CreateTable
CREATE TABLE "Coin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coinId" TEXT NOT NULL,
    "platformId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coin.name_unique" ON "Coin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform.name_unique" ON "Platform"("name");

-- AddForeignKey
ALTER TABLE "Token" ADD FOREIGN KEY ("coinId") REFERENCES "Coin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE SET NULL ON UPDATE CASCADE;
