// Redirect Prisma client imports to our mock
module.exports = {
  '@prisma/client': require.resolve('./prisma-client-mock.ts')
};