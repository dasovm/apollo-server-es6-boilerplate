import {getProducts} from "./../../data/product";

export const resolver = {
  Query: {
    products: async () => getProducts(),
  }
}