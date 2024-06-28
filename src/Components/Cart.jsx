import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector(cartSelector);
  const total = cart.reduce((sum, curr) => sum + curr, 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {cart.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
