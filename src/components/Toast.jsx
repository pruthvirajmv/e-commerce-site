import useCommerce from "../context/commerce-context";

export function Toast() {
  const { state } = useCommerce();

  return (
    <div className="notify">
      <p>{state.Toast.msg}</p>
    </div>
  );
}
