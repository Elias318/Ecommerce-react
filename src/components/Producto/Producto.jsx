import { useEffect } from 'react';
import './producto.css'
import { Link, useParams} from 'react-router';

function Productos({producto}){

    const {id,nombre,descripcion,descripcionCorta,precio} = producto;
    

    
   

    return(
        

        <div className="contenedorProducto">
            <img src="#" alt="Imagen producto" />
            <h3>{nombre}</h3>
            <p>{descripcionCorta}</p>


            <Link to={`/detalle/${id}`}>
                <button className='btnComprar'>Comprar</button> 
            </Link>
           


        </div>  
    );
}

export default Productos