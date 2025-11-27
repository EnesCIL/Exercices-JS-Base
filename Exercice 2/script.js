//prend tout les élement stocké dans l'id carré qui sont des div
const carres = document.querySelectorAll("#carre div")
//prend l'element stocké dans affichage
const affichage = document.querySelector(".affichage")
//prend l'element stocké dans nomCouleur
const nomCouleur = document.querySelector(".nomCouleur")

carres.forEach(carre => {
    carre.addEventListener("click", function () {
    //recup la couleur du carré cliqué
    const couleur = getComputedStyle(carre).backgroundColor;
    console.log(couleur)
    //permet aplliquer la couleur de fond a l'affichage en prenant la couleur de getComputedstyle qui est cliqué
    affichage.style.backgroundColor = couleur;
    //affiche le nom de la couleur au milieu du text en rgb
    nomCouleur.textContent = couleur;
  });
});