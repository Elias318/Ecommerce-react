
import './App.css'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import Navbar from './components/Navbar/navbar'
function App() {
 

  return (
    <>
      <Navbar/>
      <ItemListContainer greetings="Contenedor de productos "/>
      <Footer/>
    </>
  )
}

export default App
