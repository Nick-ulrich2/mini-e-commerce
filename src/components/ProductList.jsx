import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import '../css/ProductList.css'
import { PanierContext } from '../context/PanierContext';

const ProductList = ({ ajouterAuPanier, filtreActif }) => {

    const {produits} = useContext(PanierContext);

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
