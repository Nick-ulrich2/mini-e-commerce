import { useContext } from 'react';
import { PanierContext } from '../context/PanierContext';
import Panier from '../components/Panier';

const PanierPage = () => {
    const { panier, supprimerDuPanier, viderPanier } = useContext(PanierContext);

    return (
    <Panier enlever={supprimerDuPanier} vider={viderPanier} panier={panier}/>
  )
}

export default PanierPage;