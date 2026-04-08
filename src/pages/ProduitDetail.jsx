import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PanierContext } from '../context/PanierContext';


const ProduitDetail = () => {
    const { id } = useParams();
    const { produits, ajouterAuPanier } = useContext(PanierContext);

    const produit = produits.find((prod) => prod.id === parseInt(id));
    if (!produit) return <p>Produit introuvable</p>;
    return (
        <div>
            <h1>{produit.nom}</h1>
            <p>{produit.prix}€</p>
            <p>{produit.categorie}</p>
            <button onClick={() => ajouterAuPanier(produit)}>
                Ajouter au panier
            </button>
        </div>
    )
}

export default ProduitDetail
