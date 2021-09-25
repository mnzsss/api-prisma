import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Gabriel",
      email: "gabriel@example.com",
      groups: {
        connectOrCreate: {
          where: {
            title: "Group 01",
          },
          create: {
            title: "Group 01",
          },
        },
      },
    },
  });
}

main();
