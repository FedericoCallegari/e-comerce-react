
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
    <div className="cart-container">
      {cart.length > 0 ? (
          <div className="cart-elements-container">
            <CartElements/>
            <CartTotal/>
          </div>
      ):( 
        <h2 className="cart-message-center">Tu carrito esta vacio</h2>
      ) }
    </div>
      <div className="volver-content">
        <Link className="volver" to={"/"}>
          <p>Volver</p>
        </Link>
      </div>
      
      
    </>
  )
  
};


export default CartContent