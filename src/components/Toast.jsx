import { useCommerce } from "../context";

export function Toast() {
   const { state } = useCommerce();

   return (
      <div className="notify">
         <p>{state.Toast.msg}</p>
      </div>
   );
}
