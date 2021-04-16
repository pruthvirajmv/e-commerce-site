import { Link } from "react-router-dom";

export default function EmptyPage({ page }) {
  return (
    <>
      <div className="empty-msg">
        {page} is Empty
        <Link to="/products">
          <button className="bttn bttn-primary">Shop Now</button>
        </Link>
      </div>
    </>
  );
}
