import "./PriceRangeSlider.css";

export default function PriceRangeSlider({ dispatch, price }) {
  return (
    <>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="1000"
          value={price}
          class="slider"
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
