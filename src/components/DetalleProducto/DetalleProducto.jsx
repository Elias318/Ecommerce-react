import { useEffect, useState } from 'react';
import './detalleProducto.css'
import {useParams} from 'react-router';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';
import ContadorProductos from '../ContadorProductos/ContadorProductos';
import { productos } from '../../../public/js/productos';

function DetalleProducto(){

   
    
    const {id} = useParams();

    
    const [productoAMostrar, setProductoAMostrar] = useState(null);
    const [loader, setLoader] = useState(true);


    
     useEffect(()=>{ 

        
      fetchData(false)
              .then(response => {
                
                    
                const productoAMostrar = response.find(el=> el.id === parseInt(id));
                setProductoAMostrar(productoAMostrar);
                setLoader(false);

              })
              .catch((err)=>console.error(err))


     }, []);


        function agregarAlCarrito(producto){
            const nuevoProducto ={
                ...producto,

                stock: 1,
            
            }
            console.log("Vas a agregar",nuevoProducto);
            }
    



        return(
        
            

                <div className='contenedor_gral'>

                    {


                        loader ? <Loader/>: 

                        <>
                        
                            <div className='contenedor_detalle_producto'>
                                

                                {

                                    productoAMostrar ?
                            
                                    <>  
                                        <div className='contenedor_img_producto'>
                                            <img src="../logosinbg.png" alt="Imagen del producto" />
                                        </div>

                                        <div className='contenedor_descripcion'>

                                            <div className='header_detalle'>
                                                <span>{productoAMostrar.categoria}</span>
                                            </div>
                                            <h2 className='detalle_titulo'>{productoAMostrar.nombre}</h2>
                                            
                                            <h3 className='detalle_precio'>$ {productoAMostrar.precio}</h3>


                                            <div className='contenedor_comprar'>

                                                <ContadorProductos/>
                                                <button className='btnComprar' onClick={()=>agregarAlCarrito(productoAMostrar)}>Comprar</button>
                                            </div>

                                        </div>
                                    </>
                        
                                :
                                    
                                <p> asdasdsada</p>

                                }

                                
                            
                            </div>

                            <div className='contenedor_descripcion_producto'>
                                <p>
                                    {productoAMostrar.descripcion}
                                </p>
                                    
                            </div>
                        
                        
                        </>

                       
                    }
                   
                    
                
                    


                    
              
                </div>
               

        );
}

export default DetalleProducto