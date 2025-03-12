
import CartWidget from '../CartWidget/CartWidget';
import '../Navbar/navbar.css'


function Navbar(){



    return(
    <>
       <header className=''>
    <div className='container-logo'>
        <img src="./public/images/logosinbg.png" alt="Logo" />
    </div>

    <ul className='container-menu'>
        <li><a href="">Inicio</a></li>
        <li><a href="">Catalogo</a></li>

        

        

    </ul>

    <div className='container-carrito'>
       <CartWidget/>
    </div>
</header>

    
    </>
    )
        
    }
    
    export default Navbar;
