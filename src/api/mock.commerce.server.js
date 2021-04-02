import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export default function setupMockCommerceServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("products");
    },

    seeds(server) {
      [...Array(20)].forEach((_) => {
        server.create("product", {
          id: faker.random.uuid(),
          name: faker.commerce.productName(),
          adjective: faker.commerce.productAdjective(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          quantity: 0,
          inStock: faker.datatype.boolean(),
          fastDelivery: faker.datatype.boolean(),
          isWishListed: false,
          popularityScore: faker.random.number()
        });
      });
    }
  });
}
