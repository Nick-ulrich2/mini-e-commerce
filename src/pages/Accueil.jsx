import React, { useContext} from 'react';
import ProductList from '../components/ProductList';
import { PanierContext } from '../context/PanierContext';


const Accueil = ({ filtreActif }) => {

    // Accueil devant ajouter les elements au panier, recuperons ce dont on a besoin pour cela 
    const { ajouterAuPanier} = useContext(PanierContext);

    return (
        <div>
            <ProductList ajouterAuPanier={ajouterAuPanier} filtreActif={filtreActif} />
        </div>
    )
}

export default Accueil
