//prend tout les div de social media (logo,p)
const logos = document.querySelectorAll("#social-media div")
//prend l'element stocker dans wrapper
const couleurDeFond= document.querySelector("#container")

//quand je clique l'image monte, avec bordure,texte apparait, 
let icons = document.getElementById("social-media")
// let classList = icons.classList
// let icon = classList.contains("click")



logos.forEach(logo => {
    if(logos){
    logo.addEventListener("click", function () {
        logo.classList.toggle("clicked")
        const couleur = getComputedStyle(logo).backgroundColor;
        couleurDeFond.style.backgroundColor = couleur;
        // console.log(couleur);
        // console.log(logo);

    }); 
    }else {
    //couleur = couleur.remove
    // logos = couleur.remove(logo)
    let classList = couleurDeFond.classList;
    let icon = classList.contains(logo);
    icon = icon.remove(logo)
    console.log(icon)
    }
});

// Sélectionne tous les éléments avec l'ID "box" dans le document HTML
const boxes = document.querySelectorAll("#container");
 
// Sélectionne l'élément <body> dans le document HTML
const body = document.body;
 
// Pour chaque élément avec l'ID "box"
boxes.forEach(box => {
    // Ajoute un écouteur d'événements qui se déclenche lorsque l'utilisateur clique sur l'élément "box"
    box.addEventListener('click', function() {
        // Vérifie si la classe 'active' est présente sur l'élément "box"
        const isActive = box.classList.contains('clicked');
        // Récupère les styles CSS appliqués à l'élément "box" cliqué
        const boxesCSS = window.getComputedStyle(box);
        // Récupère la valeur de la couleur de fond de l'élément "box"
        const cssValue = boxesCSS.getPropertyValue("background-color");
        // Sélectionne l'élément <span> enfant de l'élément "box"
        const spanElement = box.querySelector("span");
        // Sélectionne l'élément avec la classe "logo" enfant de l'élément "box"
        const logoElement = box.querySelector("#social-media");
 
        // Si l'élément "box" est actif
        if (isActive) {
            // Supprime les styles appliqués lorsqu'il est actif
            box.style.boxShadow = "";
            box.style.transform = "";
            box.style.borderRadius = "";
            box.style.border = "";
            body.style.backgroundColor = "";
            spanElement.style.opacity = "0";
            logoElement.style.transform = "";
            logoElement.style.paddingTop = "50px";
        } else {
            // Applique les styles lorsque l'élément "box" n'est pas actif
            box.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
            box.style.transform = "scale(1.1, 1.1)";
            box.style.borderRadius = "10px";
            box.style.border = "1px solid white";
            body.style.setProperty("background-color", cssValue);
            spanElement.style.opacity = "100";
            logoElement.style.transform = "rotate(360deg)";
            logoElement.style.paddingTop = "0px";
        }
 
        // Ajoute ou supprime la classe 'active' à l'élément "box" pour changer son état
        box.classList.toggle('clicked');
    });
});