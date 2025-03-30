import { useState } from 'react';
import './contadorProductos.css'

function ContadorProductos() {

    const [cantidad, setCantidad] = useState(1);

    // Incrementar cantidad
    function incrementar() {
        setCantidad (cantidad + 1);
      
    }

    // Disminuir cantidad
    function decrementar() {
        if (cantidad > 1) {
            setCantidad(cantidad -1);

            
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
