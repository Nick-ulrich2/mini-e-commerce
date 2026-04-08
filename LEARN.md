- un context API permet de partager un state global accessible depuis n'importe quel composant, sans passer par les props. Dans notre cas:
App.jsx
├── Navbar       ← accès au panier (nombre d'articles)
├── Accueil      ← accès au panier (ajouter)
└── PanierPage   ← accès au panier (afficher, supprimer)

- React Router permet de recuperer les parametres dynamiques de l'URL avec useParams (il faut l'importer dans la page vers laquelle menera le lien). la syntaxe de recuperation dynamique est {`chemin/${id}`}

- Filter affiche un tableau vide qui un truthly
- find lorsque rien n'est trouve affiche un undefined qui est falsy