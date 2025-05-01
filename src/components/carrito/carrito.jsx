import React from 'react';
import './carrito.css';
import { useAppContext } from '../../context/context';
import FilaCarrito from '../FilaCarrito/FilaCarrito';
import FinalizarCompraBtn from '../FinalizarCompraBtn/FinalizarCompraBtn';

const Carrito = () => {
    const { carrito } = useAppContext();

    return (
        <div className='contenedor_gral_carrito'>
            {carrito.length > 0 ? (
                <>
                    <h1>Carrito</h1>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((el) => (
                                <FilaCarrito key={el.id} producto={el} />
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <h2>Total: {carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)}</h2>
                    </div>
                    <div>
                        <FinalizarCompraBtn />
                    </div>
                </>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </div>
    );
};

export default Carrito;
