import './producto.css'

function Productos({producto}){

    const {id,nombre,descripcion,descripcionCorta,precio} = producto;

    return(

        <div className="contenedorProducto">
            <img src="" alt="Imagen producto" />
            <h3>{nombre}</h3>
            <p>{descripcionCorta}</p>

            <button className='btnComprar'>Comprar</button>


        </div>

       
           
        
    )
}

export default Productos