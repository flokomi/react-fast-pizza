import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6">
      <p className="text-sone-300font-semibold space-x-4 text-sm sm:space-x-6 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>€{totalCartPrice.toFixed(2)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
