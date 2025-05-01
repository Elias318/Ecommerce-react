import { useEffect, useState } from 'react';
import './contadorProductos.css'

function ContadorProductos({cantidadDelProducto, resetearContador, setResetCantidad}) {

    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (resetearContador) {
            setCantidad(1);
            cantidadDelProducto(1); 
            setResetCantidad(false);
        }
    }, [resetearContador]);
    
    function incrementar() {
        const nuevaCantidad = cantidad + 1;
        setCantidad (nuevaCantidad);
        cantidadDelProducto(nuevaCantidad);
      
    }

   
    function decrementar() {
        if (cantidad > 1) {
            const nuevaCantidad = cantidad - 1;
            setCantidad(nuevaCantidad);
            cantidadDelProducto(nuevaCantidad);
        }
    }

    return (
        <div className='contador'>
            <button onClick={decrementar} className='btnCantidad'>-</button>
            <span className='cantidad'>{cantidad}</span>
            <button onClick={incrementar} className='btnCantidad'>+</button>
        </div>
    );
}

export default ContadorProductos;
