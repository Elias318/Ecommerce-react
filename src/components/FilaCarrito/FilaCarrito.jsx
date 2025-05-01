import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';
import './filaCarrito.css'

const FilaCarrito = ({producto}) => {

    const {borrarDelCarrito} = useAppContext();
    const{id,nombre,precio,cantidad,categoria, descripcion,img} = producto;

  
        function borrarProducto(producto){
        
            borrarDelCarrito(producto);
        }


  

    return (
       
       <tr className='filaCarrito'>
            <td> <img className='filaCarritoImg' src={img} alt="" /> </td>
            <td>{nombre}</td>
            <td>{precio * cantidad}</td>
            <td>{cantidad}</td>
            <td><i className="fa-solid fa-trash" onClick={()=>borrarProducto(producto)}></i></td>
           

       </tr>
        
       
    );
};

export default FilaCarrito;