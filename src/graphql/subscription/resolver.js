export const resolver = {
  Subscription: {
    version: async () => require("./../../../package.json").version
  }
};
