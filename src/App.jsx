import React from 'react'
import {
  BrowserRouter, // Enveloppe toute l'app
  Routes, // Conteneur des routes
  Route, //l'url de chacun des differrents composants
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import PanierPage from './pages/PanierPage';
import ProduitDetail from './pages/ProduitDetail';
import { useState } from 'react';

const App = () => {
  const [filtreActif, setFiltre] = useState("Tous");

  const listCategories = ["Tous", "Chaussures", "Vêtements", "Accessoires"];

  return (
    <BrowserRouter>
      {/* la navbar est un layout commun */}
      <Navbar categories={listCategories} filtreActif={filtreActif} setFiltre={setFiltre} />
      <Routes>
        <Route path='/' element={<Accueil filtreActif={filtreActif} />} />
        <Route path='/panier' element={<PanierPage />} />
        <Route path='/produit/:id' element={<ProduitDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
