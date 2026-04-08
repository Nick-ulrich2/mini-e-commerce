import { createContext, useState, useEffect } from 'react';

export const PanierContext = createContext(); // Crée le contexte avec createContext

export const PanierProvider = ({ children }) => {
    // recuperons le contenu du localStorage Si le localStorage est vide, afficher un tableau vide
    const donnees = JSON.parse(localStorage.getItem("panier")) || [];

    const [panier, setPanier] = useState(donnees);

    const produits = [
        { id: 1, nom: "Nike Air Max", prix: 120, categorie: "Chaussures" },
        { id: 2, nom: "Adidas Hoodie", prix: 85, categorie: "Vêtements" },
        { id: 3, nom: "Casquette NY", prix: 30, categorie: "Accessoires" },
        { id: 4, nom: "Jordan 1", prix: 150, categorie: "Chaussures" },
    ];

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
        // exposons tout ce a quoi auront acces les composants qui auront acces au meme contenu 
        // Sans exposition dans value, aucun composant n'aura acces arien
        <PanierContext.Provider value={{ panier, ajouterAuPanier, supprimerDuPanier, viderPanier, produits }}>
            {children}
        </PanierContext.Provider>
    );
};