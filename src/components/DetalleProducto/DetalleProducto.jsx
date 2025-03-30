import { useEffect, useState } from 'react';
import './detalleProducto.css'
import { Link, useParams} from 'react-router';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';

function DetalleProducto(){

   
    
    const {id} = useParams();

    
    const [productoAMostrar, setProductoAMostrar] = useState(null);

    const [loader, setLoader] = useState(true);
    
     useEffect(()=>{ 

        
      fetchData(false)
              .then(response => {
                
                    
                    const productoAMostrar = response.find(el=> el.id === parseInt(id));
                    setProductoAMostrar(productoAMostrar);
                    console.log(productoAMostrar);
                
                
                
                setLoader(false);
              })
              .catch((err)=>console.error(err))


     }, []);
    



    return(
        
                loader ? 
                    <Loader/>
                :


               <div className='container_detalle_producto'>
                    {   

                        productoAMostrar ?
                       
                            <>  
                                <div className='container_img_producto'>

                                </div>

                                <div className='container_descripcion'>
                                    <h2>{productoAMostrar.nombre}</h2>
                                </div>
                            </>
                   
                            :
                            
                        <p> asdasdsada</p>
                    }
                </div>
              
             
                

           
           
           
            
     
     
    );
}

export default DetalleProducto