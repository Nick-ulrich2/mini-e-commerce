import React from 'react';
import "../css/ProductCard.css";

const ProductCard = ({ nom, prix, id, ajouterAuPanier }) => {
    return (
        <div className='card'>
            <h2>{nom}</h2>
            <p>{prix}</p>
            <button onClick={() => ajouterAuPanier({ nom, prix, id })}>Ajouter au panier</button>
        </div>
    )
}

export default ProductCard
