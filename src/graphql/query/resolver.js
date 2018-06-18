export const resolver = {
  Query: {
    version: async () => require('./../../../package.json').version,
  }
}