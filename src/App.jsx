import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import AboutUs from './componentes/AboutUs/AboutUs';

import { useState } from 'react'

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />

      <Routes>
        <Route path='/' element={<ItemListContainer onAddToCart={handleAddToCart} />} />

        <Route path='/categoria/:categoryId' element={<ItemListContainer onAddToCart={handleAddToCart} />} />

        <Route path='/about' element={<AboutUs />}/>

        <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        <Route path='*' element={<h1>404 - Pagina no encontrada😓</h1>} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}


export default App;
