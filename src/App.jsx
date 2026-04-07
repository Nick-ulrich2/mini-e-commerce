import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import Panier from './components/Panier'
import Navbar from './components/Navbar';

const App = () => {
  // recuperons le contenu du localStorage Si le localStorage est vide, afficher un tableau vide
  const donnees = JSON.parse(localStorage.getItem("panier")) || [];

  const [panier, setPanier] = useState(donnees);

  const [filtreActif, setFiltre] = useState("Tous");

  const listCategories = ["Tous", "Chaussures", "Vêtements", "Accessoires"];

  const ajouterAuPanier = (produit) => {
    // Verifions si le produit existe deja dans le panier
    const exist = panier.find((product) => product.nom === produit.nom);

    // incrementons sa quantite si il est deja dans le panier
    if (exist) {
      setPanier(
        panier.map((prod) => prod.nom === produit.nom ? { ...prod, quantite: prod.quantite + 1 } : prod)
      )
    }
    else {
      // si c'est nouveau dans le panier initialiser sa quantite a 1
      setPanier(
        [...panier, { ...produit, quantite: 1 }]
      )
    }
  }

  const supprimerDuPanier = (id) => {
    setPanier(
      (prev) => prev.filter(
        (prod) => prod.id !== id
      )
    )

  }

  const viderPanier = () => {
    setPanier([]);
  }

  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier])


  return (
    <div>
      <Navbar categories={listCategories} filtreActif={filtreActif} setFiltre={setFiltre} />
      <Panier panier={panier} enlever={supprimerDuPanier} vider={viderPanier} />
      <ProductList ajouterAuPanier={ajouterAuPanier} filtreActif={filtreActif} />
    </div>
  )
}

export default App
