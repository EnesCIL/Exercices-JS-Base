// On récupère l'élément container (celui dont on va changer la couleur de fond)
const container = document.getElementById("container");

// On récupère tous les logos (les div à l'intérieur de #social-media)
const logos = document.querySelectorAll("#social-media div");

// Pour chaque logo, on ajoute un écouteur de clic
logos.forEach(logo => {

    logo.addEventListener("click", () => {

        // Vérifie si ce logo est déjà en état "clicked"
        const isClicked = logo.classList.contains("clicked");

        // On supprime d'abord la classe clicked de tous les logos
        // permet d'avoir seulement 1 icône active à la fois
        logos.forEach(l => l.classList.remove("clicked"));

        // Si le logo n'était PAS déjà cliqué on l'active
        if (!isClicked) {

            // Ajout de la classe clicked (monte, bordure, texte visible)
            logo.classList.add("clicked");

            // Récupère la couleur de fond du logo cliqué
            const color = getComputedStyle(logo).backgroundColor;

            // Applique la couleur au container
            container.style.backgroundColor = color;

        } else {
            // Si on reclique sur le même logo on réinitialise

            // Le container retrouve son gris d'origine
            container.style.backgroundColor = "gray";
        }
    });
});
