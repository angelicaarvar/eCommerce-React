import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemList'
import Footer from './componentes/Footer/Footer';

import { useState } from 'react'

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer onAddToCart={handleAddToCart} />

      <Footer />
    </>
  )
}

export default App
