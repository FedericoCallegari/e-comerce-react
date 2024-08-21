
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import NavBar from "../NavBar/NavBar";


const CartContent = () => {
  const { cart } = useContext(dataContext);
  //Condition
  return (
    <>
      <NavBar/>
      {cart.length > 0 ? (
        <>
          <CartElements/>
          <CartTotal/>
        </> 
      ):( 
        <h3 className="cart-message-center">Tu carrito esta vacio</h3>
      )}
      <Link className="volver" to={"/"}>
        <p>Volver</p>
      </Link>
    </>
  )
  
};


export default CartContent