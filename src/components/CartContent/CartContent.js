
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements"
import CartTotal from "./CartTotal"


const CartContent = () => {
  const { cart } = useContext(dataContext);
  //Condition

  return cart.length > 0 ?(
    <>
      <CartElements/>
      <CartTotal/>
    </>
  ): (<h3 className="cart-message-center">Tu carrito esta vacio</h3>) ; 
};

export default CartContent