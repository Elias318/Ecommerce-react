import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();


export const useAppContext = () => useContext(AppContext);

export const ConstextProvider = (props) =>{  

    const [carrito, setCarrito] = useState([]);
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    useEffect(()=>{
        console.log("Vas a agregar", carrito);

    },[carrito]);
    

    function agregarAlCarrito(prod, cantidad){

        const nuevoProducto = {

            ...prod,
            cantidad,

        };


        if(carrito.some(el => el.id === prod.id)){


            const newCarrito = carrito.map(element => {

                if(element.id === prod.id){
                    return{

                        ...element,
                        cantidad: element.cantidad + cantidad,

                    }
                }else{
                    return element;
                }
            })

            setCarrito(newCarrito);
           
            
        }else{
            setCarrito([...carrito, nuevoProducto]);
            
        }


        
    }

    function borrarDelCarrito(prod){

        const newCarrito = carrito.filter(element => element.id !== prod.id);
        setCarrito(newCarrito);
    }

    return(

        <AppContext.Provider value={{carrito, agregarAlCarrito, todosLosProductos,
            setTodosLosProductos, borrarDelCarrito}}>

            {props.children}
        </AppContext.Provider>

    )


}


