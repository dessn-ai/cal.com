export const prisma = {
  booking: {
    findFirst: () => Promise.resolve(null),
    findUnique: () => Promise.resolve(null),
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
  },
  user: {
    findFirst: () => Promise.resolve(null),
    findUnique: () => Promise.resolve(null),
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
  },
  $transaction: (ops: any) => Promise.all(ops),
};

export default prisma;