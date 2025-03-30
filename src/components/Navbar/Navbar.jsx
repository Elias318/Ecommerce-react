
import CartWidget from '../CartWidget/CartWidget';
import '../Navbar/navbar.css'

import { Link} from 'react-router';

function Navbar(){



    return(
    <>
       <header className=''>
    <div className='container-logo'>
        <img src="./public/images/logosinbg.png" alt="Logo" />
    </div>

    <ul className='container-menu'>

        <Link to="/">
        <li>Inicio</li>
        </Link>

        <Link to="/categoria/computadora">
        <li>Computadora</li>
        </Link>

        <Link to="/categoria/consola">
        <li>Consola</li>
        </Link>
            
        
        
        <li><a href="">Catalogo</a></li>

        

        

    </ul>

    <div className='container-carrito'>

        <Link to="/carrito">
            <CartWidget/>
        
        
        </Link>
    </div>
</header>

    
    </>
    )
        
    }
    
    export default Navbar;
