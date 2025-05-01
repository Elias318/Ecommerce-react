import { useEffect } from 'react';
import './producto.css'
import { Link, useParams} from 'react-router';
import { useAppContext } from '../../context/context';

function Productos({producto}){

    const {id,nombre,precio,categoria, descripcion,img} = producto;
    
    const {agregarAlCarrito} = useAppContext();
    
   

    return(
        

        <div className="contenedorProducto">
            <img src={img} alt="Imagen producto" />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>


          
                <button className='btnComprar'onClick={()=> agregarAlCarrito(producto, 1)}>Comprar</button> 
         

             <Link to={`/detalle/${id}`}>
             <button className='btnComprar'>Ver Detalle</button> 
            </Link>
           


        </div>  
    );
}

export default Productos