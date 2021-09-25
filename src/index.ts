import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "user-1",
      name: "Gabriel",
      email: "gabriel@example.com",
      groups: {
        connectOrCreate: {
          where: {
            title: "Group 01",
          },
          create: {
            id: "group-01",
            title: "Group 01",
          },
        },
      },
    },
  });
}

main();
