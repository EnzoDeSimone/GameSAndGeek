document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons "Acheter"
    const buyButtons = document.querySelectorAll('.game button');

    // Ajouter un gestionnaire d'événement clic à chaque bouton
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Récupérer le nom du jeu correspondant
            const gameName = button.parentNode.querySelector('h3').textContent;
            // Rediriger vers une page dédiée au jeu vidéo sélectionné
            window.location.href = `game_details.html?game=${encodeURIComponent(gameName)}`;
        });
    });
});
// Récupérer les données JSON
const gameData = {
    "nomCommercial": "GameLab",
    "phraseAccroche": "Créez votre propre jeu vidéo !",
    "texteCallToAction": "Commencez votre aventure maintenant",
    "beneficesClients": [
      "Aucun compromis entre innovation, qualité et raffinement.",
      "Profitez des meilleurs design de jeux vidéos",
      "Conseils personnalisés pour l'amélioration de votre projet",
      "2D ou 3D, nos game designers et nos illustrateurs sauront donner vie à vos idées."
    ],
    "realisations": [
      {
        "type": "Création de personnage de jeu vidéo",
        "description": "Nous avons aidé notre client à créer son propre personnage de jeu vidéo, en lui fournissant des conseils personnalisés pour le design et l'histoire.",
        "image": "https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/ef88dadca13badf9418b26b15aaa431a.jpg?v=1683014991626"
      },
      // Les autres réalisations vont ici...
    ]
  };
  
  // Récupérer la section des jeux
  const sectionJeux = document.getElementById('jeux');
  
  // Générer dynamiquement les éléments de jeu
  gameData.realisations.forEach((realisation, index) => {
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
  
    const img = document.createElement('img');
    img.src = realisation.image;
    img.alt = realisation.type;
    gameDiv.appendChild(img);
  
    const h3 = document.createElement('h3');
    h3.textContent = realisation.type;
    gameDiv.appendChild(h3);
  
    const p = document.createElement('p');
    p.textContent = realisation.description;
    gameDiv.appendChild(p);
  
    // Ajoutez d'autres éléments comme le prix et le bouton d'achat si nécessaire
  
    sectionJeux.appendChild(gameDiv);
  });
// Sélectionnez les éléments à animer
const games = document.querySelectorAll('.game');

// Fonction pour vérifier si un élément est dans la vue
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter une classe d'animation
function addAnimation() {
    games.forEach(game => {
        if (isInViewport(game)) {
            game.classList.add('animate');
        }
    });
}

// Ajoutez un écouteur d'événement de défilement
window.addEventListener('scroll', addAnimation);

// Appelez la fonction une fois au chargement de la page pour vérifier les éléments déjà dans la vue
addAnimation();
// Création d'un observer pour les éléments .game
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Arrêtez de surveiller une fois que l'élément est visible
      }
    });
  }, { threshold: 0.5 }); // Définir le seuil à 0.5 pour déclencher lorsque la moitié de l'élément est visible
  
  // Sélectionnez tous les éléments .game à observer
  const elements = document.querySelectorAll('.game');
  elements.forEach(element => {
    observer.observe(element);
  });
  