import useCommerce from "../context/commerce-context";

export default function ToastComponent() {
  const { state } = useCommerce();

  return (
    <div class="notify">
      <p>{state.Toast.msg}</p>
    </div>
  );
}
