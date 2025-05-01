
import CartWidget from '../CartWidget/CartWidget';
import '../Navbar/Navbar.css'

import { Link} from 'react-router';

function Navbar(){



    return(
    <>
       <header className=''>
    <div className='container-logo'>
        <Link to="/">
            <img src="./public/images/logosinbg.png" alt="Logo" />
        </Link>

    </div>

    

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
