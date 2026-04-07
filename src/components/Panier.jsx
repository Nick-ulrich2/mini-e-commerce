import React from 'react'

const Panier = ({ panier, enlever, vider }) => {
    return (
        <div>
            {/* Liste des produits du panier */}
            <ol>
                {
                    panier.map(({ id, nom, prix, quantite}) => (
                        <li key={id}>
                            Nom: {nom}, Prix : {prix}€
                            Quantite: {quantite} 
                            <button onClick={() => enlever(id)} >Supprimer</button>
                        </li>    
                    ))
                }
            </ol>

            {/* la fonction reduce se fixe a un tableau et prend en parametre une fonction accumulatrice et la quantite initiale
                total est la variable qui accumule les elements en parcourant le tableau 
                p est l'element courant
            */}
            <p>Panier : {panier.reduce((total, p) => total + p.prix * p.quantite, 0)} € </p>
            <button onClick={vider}>Vider le panier</button>
        </div>
    )
}

export default Panier
