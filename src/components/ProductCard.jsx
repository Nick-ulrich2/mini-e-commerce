import React from 'react';
import "../css/ProductCard.css";
import { Link } from 'react-router-dom';

const ProductCard = ({ nom, prix, id, ajouterAuPanier }) => {
    return (
        <div className='card'>
            <Link to={`/produit/${id}`}><h2>{nom}</h2></Link>
            <p>{prix}</p>
            <button onClick={() => ajouterAuPanier({ nom, prix, id })}>Ajouter au panier</button>
        </div>
    )
}

export default ProductCard
