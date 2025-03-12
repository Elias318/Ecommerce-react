import '../ItemListContainer/itemListContainer.css'

function ItemListContainer({mensajeBienvenida}){

    

    return(

        <>

        <div className='container-products'>
            <h2>{mensajeBienvenida}</h2>
        </div>
           
        </>

    )
}

export default ItemListContainer