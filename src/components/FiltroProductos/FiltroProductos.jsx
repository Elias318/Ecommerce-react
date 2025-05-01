import './FiltroProductos.css'
import Producto from '../Producto/Producto'
import { useEffect, useState } from 'react';
import { fetchData } from '../../../public/js/fetchData';
import Loader from '../Loader/loader';
import { Link, useLocation, useParams } from 'react-router';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../../context/context';




function FiltroProductos(){

    const pathUbicacion = useLocation();
    return(
       
     
        <div className='contenedor_filtro'>
            <Link to={"/"}>
                <div className={`btnCategoria ${pathUbicacion.pathname === '/' ? 'activo' : ''}`}>Ver todos</div>
            </Link>
            <Link to={"/categoria/computadora"}>
                <div className={`btnCategoria ${pathUbicacion.pathname === '/categoria/computadora' ? 'activo' : ''}`}>Computadoras</div>
            </Link>
            <Link to={"/categoria/Consola"}>
                <div className={`btnCategoria ${pathUbicacion.pathname === '/categoria/Consola' ? 'activo' : ''}`}>Consolas</div>
            </Link>
        
        </div>

        
        
        
     

 )
}

export default FiltroProductos;