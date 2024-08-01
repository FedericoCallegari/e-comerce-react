import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const { data, cart, setCart } = useContext(dataContext);

    const buyProducts = (product)=>{

      const productRepeat = cart.find((item)=> item.id === product.id);

      if(productRepeat){
        setCart(cart.map((item)=>item.id === product.id ? {...product, quanty: productRepeat.quanty + 1}: item ))
      }

      setCart([...cart, product])
    }

  return data.map((product)=>{
    return(
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button onClick={()=>buyProducts(product)}>Comprar</button>
        </div>
    )
  })
}

export default Products