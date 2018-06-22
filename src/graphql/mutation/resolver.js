export const resolver = {
  Mutation: {
    version: async () => require('./../../../package.json').version,
  },
};
