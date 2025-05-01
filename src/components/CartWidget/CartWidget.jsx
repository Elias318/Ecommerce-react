
import { FaShoppingCart } from "react-icons/fa";

import '../CartWidget/cartWidget.css'
import { useAppContext } from "../../context/context";
function CartWidget(){


    const {carrito} = useAppContext();
    return(

        <>
        <div className="contenedor-carrito">
    

            <div>{carrito.length}</div>
            <i className="fa-solid fa-cart-shopping" ></i>

          

       

        </div>
           
        
        </>

    )
}

export default CartWidget