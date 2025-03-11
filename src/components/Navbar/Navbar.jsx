
import CartWidget from '../CartWidget/CartWidget';
import '../Navbar/navbar.css'


function Navbar(){



    return(
    <>
       <header className=''>
    <div>
        <img src="#" alt="Logo" />
    </div>

    <ul className='container-menu'>
        <li><a href="">Inicio</a></li>
        <li><a href="">Inicio</a></li>

        <li><a href="">Inicio</a></li>

        

    </ul>

    <div className='container-carrito'>
       <CartWidget/>
    </div>
</header>

    
    </>
    )
        
    }
    
    export default Navbar;
