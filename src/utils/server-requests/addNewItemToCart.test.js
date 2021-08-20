import addNewItemToCart from "./addNewItemToCart";
import * as axios from "axios";

jest.mock("axios");

describe("add new item to cart", () => {
   it("should add a new item to the cart", async () => {
      axios.get.mockResolvedValue({ data: { name: "Tanay", age: 30 } });
      const user = addNewItemToCart();

      expect(user).toEqual({ name: "Tanay", age: 30 });
   });
});
