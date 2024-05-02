// Cette fonction lit notre fichier de données
fetch("./gamelab.json")
.then(rep => {
    return rep.json();
})
.then(data => {
    // on a accès ici à notre donnée : data
    console.log(data.realisations);
    afficheLesRealisations(data.realisations);
   afficheLesTemoignages(data.temoignagesClients)
});


function afficheLesRealisations(reals){
    // reals est un tableau d'objets
    reals.forEach(real => {
        // Pour chaque réalisation : 
            // on veut afficher les jeux vidéos dans la div qui a l'id jeuxVideo
        document.querySelector("#JeuxVideo").innerHTML += `
        <div class="jeux video">
            <h3>${real.type}</h3>
            <img class="image" src="${real.image}" alt="jeux video 1">
            <p>${real.description}</p>
        </div>`;
    });
}

function afficheLesTemoignages(avis){
    // cette fonction a besoin du tableau des témoignages clients et les affiche dans la bonne div dans le document
    avis.forEach(avi => {
        // pour chaque avis :
        // on veut afficher les avis dans la div qui a l'id avis
        document.querySelector("#avis").innerHTML += `
        <div class="avis">
            <h3>${avi.prenom}</h3>
            <p>${avi.typePrestation}</p>
            <p>${avi.commentaire}</p>
        </div>`;
    });
}
