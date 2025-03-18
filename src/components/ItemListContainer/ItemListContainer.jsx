import './itemListContainer.css'
import { productos } from '../../../public/js/productos'
import Producto from '../Producto/Producto'

function ItemListContainer({greetings}){

    
console.log(productos);
    return(

        <>
        <div className='contenedorGralProductos'>
        <div className='contenedorProductos'>
            

            {productos.map(el=>{
                return(

                    <Producto key={el.id} producto = {el}/>
                )
            })}


          

        </div>
        </div>
        
           
        </>

    )
}

export default ItemListContainer