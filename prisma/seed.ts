import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function runSeeders() {
  const user = await prisma.user.create({
    data: {
      name: "Admin",
      password: "password",
      email: "admin@gmail.com",
      role: "ADMIN",
    },
  });
  console.log(user);
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });