export default function IncrementDecrementButton({ clickHandler, value }) {
  return (
    <>
      <div>
        <button
          onClick={() =>
            clickHandler({
              type: "DECREMENT_CART_QUANTITY",
              payload: value
            })
          }
          class="bttn bttn-primary"
        >
          -
        </button>
        <span> {value.quantity} </span>
        <button
          onClick={() =>
            clickHandler({
              type: "INCREMENT_CART_QUANTITY",
              payload: value
            })
          }
          class="bttn bttn-primary"
        >
          +
        </button>
      </div>
    </>
  );
}
