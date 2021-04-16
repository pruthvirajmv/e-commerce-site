import { Link } from "react-router-dom";

export default function GoToCartButton() {
  return (
    <>
      <Link to="/cart">
        <button className="bttn bttn-secondary">Go To Cart</button>
      </Link>
    </>
  );
}
