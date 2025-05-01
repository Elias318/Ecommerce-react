
import './App.css'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router';

import Navbar from './components/Navbar/navbar'
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import { ConstextProvider } from './context/context';
import Carrito from './components/carrito/carrito';
function App() {
 

  return (
    <>
      

        
      <ConstextProvider>
        <BrowserRouter>

          <Navbar/>
          <Routes>

            <Route path='/'  element = { <ItemListContainer />} />
            <Route path='/categoria/:categ'  element = { <ItemListContainer />} />
            <Route path='/carrito'  element = { <Carrito/>} />


            <Route path="/detalle/:id"  element = { <DetalleProducto/>} />

          </Routes>
        
        
        </BrowserRouter>
      </ConstextProvider>


          
       


      
    
      <Footer/>
    </>
  )
}

export default App
