import React, { useState } from 'react';
import './FinalizarCompraBtn.css';
import Carrito from '../carrito/carrito';
import { useAppContext } from '../../context/context';
import { addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { collection } from 'firebase/firestore';

const FinalizarCompraBtn = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
      const{ carrito } =useAppContext();

    function abrirFormularioFinalizarCompra() {
        setMostrarFormulario(true);
    }

    function cerrarFormulario() {
        setMostrarFormulario(false);
    }
    

    const ordenesCollection = collection(db, "ordenes");

    const enviarDatosOrden= (e)=>{
        
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const direccion = e.target.direccion.value;
        
        crearOrden(nombre, email, direccion);
    }

    const crearOrden = (nombre,email,direccion) =>{

        const nuevaOrden = {
            nombre: nombre ,
            email: email,
            direccion: direccion,
            productos: carrito
        }
       
        addDoc(ordenesCollection, nuevaOrden).then(response =>{
            alert("creaste correctamente tu orden con el id: "+ response.id);
        })
        .catch(err => console.log(err));
    };
    return (
        <>
            <button className='btnComprar' onClick={abrirFormularioFinalizarCompra}>Finalizar Compra</button>

            {mostrarFormulario && (
                <div className="modal-overlay">
                    <div className="modal-contenido">
                        <button className="btn-cerrar" onClick={cerrarFormulario}>X</button>
                        <h2>Formulario de Compra</h2>
                        <form onSubmit={enviarDatosOrden}>
                            <input type="text" name='nombre' placeholder="Nombre completo" required />
                            <input type="email" name='email' placeholder="Correo electrónico" required />
                            <input type="text" name='direccion' placeholder="Dirección" required />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FinalizarCompraBtn;
