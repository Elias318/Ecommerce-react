import './itemListContainer.css'
import Producto from '../Producto/Producto'
import { useEffect, useState } from 'react';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';
import { useParams } from 'react-router';

function ItemListContainer(){

    const[loader,setLoader] = useState(true);

    const[todosLosProductos,setTodosLosProductos] = useState([]);

    const{categ} = useParams();
    



    useEffect(()=>{
        
            
      

            fetchData(false)
            .then(response => {
            setTodosLosProductos(response);
            console.log(categ);
            console.log(todosLosProductos);

            setLoader(false);
            })
            .catch((err)=>console.error(err))
        

        },[categ])



        const productosFiltrados = () => {
            if (!categ){
                return todosLosProductos; 
            } else{
                return todosLosProductos.filter(el => el.categoria === categ);

            }

        };

    return(
       
        <>


        <div className='contenedorGralProductos'>
        <div className='contenedorProductos'>
            
            
            { 
                loader ? <Loader/> :

                    productosFiltrados().length > 0 ? 

                        productosFiltrados().map(el => <Producto key={el.id} producto={el} />)
                    :

                    <p>No hay productos disponibles para la categoría "{categ}".</p>


                        
            
                
                 
            }          

        </div>
        </div>
        
           
        </>

    )
}

export default ItemListContainer