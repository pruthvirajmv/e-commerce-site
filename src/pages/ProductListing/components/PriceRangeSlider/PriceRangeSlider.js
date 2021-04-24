import "./PriceRangeSlider.css";

export default function PriceRangeSlider({ dispatch, price }) {
  return (
    <>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="10000"
          value={price}
          className="slider"
          onChange={(e) =>
            dispatch({
              type: "PRICE_RANGE",
              payload: Number(e.target.value)
            })
          }
        ></input>
        <span>Show below: Rs{price} </span>
      </div>
    </>
  );
}
