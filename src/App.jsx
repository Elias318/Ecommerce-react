
import './App.css'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router';

import Navbar from './components/Navbar/navbar'
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
function App() {
 

  return (
    <>
      

        

        <BrowserRouter>

          <Navbar/>
          <Routes>

            <Route path='/'  element = { <ItemListContainer />} />
            <Route path='/categoria/:categ'  element = { <ItemListContainer />} />
            <Route path='/carrito'  element = { <h2>Esto seria el carrito</h2>} />


            <Route path="/detalle/:id"  element = { <DetalleProducto/>} />

          </Routes>
        
        
        </BrowserRouter>


          
       


      
    
      <Footer/>
    </>
  )
}

export default App
