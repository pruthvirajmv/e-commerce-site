import { Link } from "react-router-dom";

export function GoToCartBttn() {
  return (
    <>
      <Link to="/cart">
        <button className="bttn bttn-secondary">Go To Cart</button>
      </Link>
    </>
  );
}
