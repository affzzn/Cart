import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cardWrapper"></div>
      {cartList.map((c) => (
        <div className="cartCard" key={c.id}>
          <img src={c.image} alt="" />
          <h5>{c.title}</h5>
          <h5>{c.price}</h5>
          <button className="btn" onClick={() => handleRemove(c.id)}>
            Remove
          </button>
        </div>
      ))}
      {!cartList.length && <h2>Cart is empty...</h2>}
    </div>
  );
}

export default Cart;
