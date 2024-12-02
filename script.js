// Effectue une requête HTTP GET vers l'API Fake Store pour récupérer une liste de produits
fetch('https://fakestoreapi.com/products')
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then(donnee => {
    // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça focntionen bien)
    console.log(donnee);

    // Parcourt chaque produit dans le tableau de données
    donnee.forEach(product => {
      // Appelle la fonction 'afficher' pour afficher les informations du produit dans la page HTML
      afficher(product);
    });
  });

// ** Fonction : afficher **
// Rôle : Afficher un produit dans la page HTML en le stylisant, probablement sous forme de cartes ou d'autres composants visuels
// Paramètre : "product",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)
function afficher(product) {
  // TODO : Ajouter le code pour insérer dynamiquement les informations du produits 
  /*Maquette de la carte produit à réaliser :
    |-------------------|
    |                   |
    |       image       |
    |                   |
    |                   |
    |-------------------|
    | TITRE             |
    | description ---   |
    |               prix|
    | Note (nbr avis)   |
    |                   |
    | Ajouter au panier |
    |-------------------|
    */
};

//
 // Fonction pour afficher un produit dans le conteneur
 function afficher(product) {
    // Cible le conteneur des produits
    const container = document.getElementById('product-container');

    // Crée une carte pour le produit
    const card = document.createElement('div');
    card.className = 'card';

    // Ajoute le contenu à la carte
    let categorie1 = document.querySelector("result")
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <div>
                <p>Note : ⭐⭐⭐⭐</p>
                <p>Prix : ${product.price} €</p>
            </div>
            <a href="#">Ajouter au panier</a>
        </div>
    `;

    // Ajoute la carte au conteneur
    container.appendChild(card);
}

// Effectue une requête HTTP GET vers l'API Fake Store pour récupérer une liste de produits
fetch('https://fakestoreapi.com/products')
    .then((rep) => rep.json()) // Convertit la réponse en JSON
    .then((donnee) => {
        // Affiche les données dans la console pour vérification
        console.log(donnee);

        // Parcourt chaque produit et appelle la fonction 'afficher'
        donnee.forEach((product) => {
            afficher(product);
        });
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération des produits :', error);
    });

    function affiche(prod){
    let img = prod.image
    let nom = prod.title;
    let description = prod.description;
    let categorie = prod.category;
    let rate = prod.rate;
    let count = prod.count;
    let prix = prod.price;
}