import './itemListContainer.css'
import Producto from '../Producto/Producto'
import { useEffect, useState } from 'react';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';
import { useParams } from 'react-router';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../../context/context';
import FiltroProductos from '../FiltroProductos/FiltroProductos';



function ItemListContainer(){

    const[loader,setLoader] = useState(true);

   // const[todosLosProductos,setTodosLosProductos] = useState([]);

    const{categ} = useParams();
    
    const {carrito} = useAppContext();

    const productosCollection = collection(db,"productos");
    const { setTodosLosProductos, todosLosProductos } = useAppContext();

    useEffect(() => {
        getDocs(productosCollection)
            .then(snapshot => {
                const productos = snapshot.docs.map(el => ({
                    id: el.id,
                    ...el.data()
                }));
                setTodosLosProductos(productos);
                setLoader(false);
            })
            .catch(err => console.log(err));
    }, [categ]);



    const productosFiltrados = () => {
        if (!categ) {
            return todosLosProductos;
        }
        return todosLosProductos.filter(el => el.categoria === categ);
    };

    return(
       
        <>


        <div className='contenedor_gral'>
            

                <FiltroProductos/>
            
        <div className='contenedorProductos'>
            
            
            { 
               loader ? <Loader /> :
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