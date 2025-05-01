import { useEffect, useState } from 'react';
import './detalleProducto.css'
import {useParams} from 'react-router';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';
import ContadorProductos from '../ContadorProductos/ContadorProductos';
import { productos } from '../../../public/js/productos';
import { useAppContext } from '../../context/context';

function DetalleProducto() {
    
    const { id } = useParams();
    const { todosLosProductos,agregarAlCarrito } = useAppContext();
    const [producto, setProducto] = useState(null);
    const [loader, setLoader] = useState(true);
    const[cantidadFinal, setCantidadFinal] = useState(1);
    const [resetCantidad, setResetCantidad] = useState(false);

    useEffect(() => {
        if (todosLosProductos.length > 0) {
            const prod = todosLosProductos.find(p => p.id === id || p.id === parseInt(id));
            setProducto(prod);
            setLoader(false);
        }
    }, [todosLosProductos, id]);

    const obtenerCantidad = (valor) =>{
            setCantidadFinal(valor);
    }

    

   

    return (
        <div className='contenedor_gral_detalle_producto'>
            {loader ? <Loader /> :
                <>
                    <div className='contenedor_detalle_producto'>
                        {producto ?
                            <>
                                <div className='contenedor_img_producto'>
                                    <img src={producto.img } alt={producto.nombre} />
                                </div>

                                <div className='contenedor_descripcion'>
                                    <div className='header_detalle'>
                                        <span>{producto.categoria}</span>
                                    </div>
                                    <h2 className='detalle_titulo'>{producto.nombre}</h2>
                                    <h3 className='detalle_precio'>$ {producto.precio}</h3>

                                    <div className='contenedor_comprar'>
                                        <ContadorProductos cantidadDelProducto={obtenerCantidad} resetearContador={resetCantidad} setResetCantidad={setResetCantidad} />
                                       
                                        <button className='btnComprar'  onClick={() => {agregarAlCarrito(producto, cantidadFinal);setResetCantidad(true);}}>Comprar</button>
                                    </div>
                                    <div className='contenedor_descripcion_producto'>
                                        <p>{producto?.descripcion}</p>
                                    </div>
                                </div>
                            </>
                            :
                            <p>Producto no encontrado.</p>
                        }
                    </div>

                    
                </>
            }
        </div>
    );
}

export default DetalleProducto;