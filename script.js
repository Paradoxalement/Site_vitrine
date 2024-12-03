// Effectue une requête HTTP GET vers l'API Fake Store pour récupérer une liste de produits
/*fetch('https://fakestoreapi.com/products')
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then(donnee => {
    // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça focntionen bien)
    console.log(donnee);

    // Parcourt chaque produit dans le tableau de données
    // Appelle la fonction 'afficher' pour afficher les informations du produit dans la page HTML
    donnee.forEach(prod => {
      afficher(prod);
    });
    
  }); */

// ** Fonction : afficher **
// Rôle : Afficher un produit dans la page HTML en le stylisant, probablement sous forme de cartes ou d'autres composants visuels
// Paramètre : "product",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)
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
fetch('https://fakestoreapi.com/products')
    .then((rep) => rep.json()) // Convertit la réponse en JSON
    .then((donnee) => {
        // Affiche les données dans la console pour vérification
        console.log(donnee);

        // Parcourt chaque produit et appelle la fonction 'afficher'
        donnee.forEach((prod) => {
            affiche(prod);
        });
    })
   

function affiche(prod){
let img = prod.image
let nom = prod.title;
let description = prod.description;
let categorie = prod.category;
let rate = prod.rating.rate;
let count = prod.rating.count;
let prix = prod.price;

//
    // Ajoute le contenu à la carte
    let card = document.querySelector("#result")
    card.innerHTML += `
    <div class="card">
      <div> 
        <img src="${img} ">
        <p>${categorie}</p>
      </div>
      <div>
            <h2>${nom}</h2>
            <p>${description}</p>
            <div>
                <p>${rate} ${count}</p>
                <p>${prix} €</p>
            </div>
            <a href="#">Ajouter au panier</a>
      </div>
    </div>
    `
    }
    // Effectue une requête HTTP GET vers l'API Fake Store pour récupérer une liste de produits
