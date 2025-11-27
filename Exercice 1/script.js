//recupere l'element dans lequel le carre est stocké
const carre = document.querySelector(".carre")
//recupere juste l'id carré
const carreForme = document.getElementById("carre")
//mettre carre ou carreForme donne tout ce que le carre contient en terme de style css
const style = getComputedStyle(carre)
console.log(style)

//quand le carré est cliqué affiche ces information
carre.addEventListener("click", function(){
    //toute les informations vont être donnés sous forme d'alert
    //getPropertValue permet de recuperer une propriété css. Donc pour afficher le nom l'id $(carre.id) et class $(carre.className)
    alert(`Class : ${carre.className}\n` +
        `- Background-color : ${style.getPropertyValue("background-color")} \n` +
        `- Color : ${style.getPropertyValue("color")} \n` +
        `- Height : ${style.getPropertyValue("height")} \n` +
        `- Width : ${style.getPropertyValue("width")} \n` +
        `- Display : ${style.getPropertyValue("display")} \n` +
        `- Display : ${style.getPropertyValue("font-family")} \n` 
    )
})