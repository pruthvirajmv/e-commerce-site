import useCommerce from "../commerce-context/commerce-context";

export default function Toast() {
  const { state } = useCommerce();

  return (
    <div class="notify">
      <p>{state.ToastMsg}</p>
    </div>
  );
}
