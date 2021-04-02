import { routes } from "../useRoute";

export default function GoToCartButton({ setRoute }) {
  return (
    <>
      <button
        onClick={() => setRoute(routes.CartItems)}
        style={{ marginLeft: "1rem" }}
        className="bttn bttn-secondary"
      >
        Go To Cart
      </button>
    </>
  );
}
