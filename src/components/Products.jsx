import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.image} alt="" />
          <h4>{p.title}</h4>
          <h5>{p.price}</h5>
          <button className="btn" onClick={() => handleAdd(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
