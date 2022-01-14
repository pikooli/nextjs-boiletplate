// lib/prisma.ts
import { PrismaClient, Prisma } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

const options: Prisma.PrismaClientOptions = {
  // log: ["query", "info", "warn", "error"],
};

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient(options);
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient(options);
//   }
//   prisma = global.prisma;
// }

if (!global.prisma) {
  global.prisma = new PrismaClient(options);
}

export default global.prisma;

export { Prisma };
