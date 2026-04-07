import React from 'react'
import ProductCard from './ProductCard';
import '../css/ProductList.css'

const ProductList = ({ ajouterAuPanier, filtreActif }) => {

    const produits = [
        { id: 1, nom: "Nike Air Max", prix: 120, categorie: "Chaussures" },
        { id: 2, nom: "Adidas Hoodie", prix: 85, categorie: "Vêtements" },
        { id: 3, nom: "Casquette NY", prix: 30, categorie: "Accessoires" },
        { id: 4, nom: "Jordan 1", prix: 150, categorie: "Chaussures" },
    ];

    return (
        <div className='product-list'>
            {
                // filtrons ce qui doit etre affiche
                produits
                    .filter(prod => filtreActif === "Tous" || prod.categorie === filtreActif)
                    .map((produit) => (
                        <ProductCard
                            key={produit.id}
                            {...produit}
                            ajouterAuPanier={ajouterAuPanier}
                        />
                    )
                    )
            }
        </div>
    )
}

export default ProductList
