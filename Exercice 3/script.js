const carres = document.querySelectorAll("#carre div")

carres.forEach(carre => {
    carre.addEventListener("click", function () {
        //ajoute la liste de classe clicked au carre
        carre.classList.add("clicked")
    console.log(carre)
    //supprime la liste de classe clicked au carre au deuxieme click(marche pas)
        else{carre.classList.remove("cliked")
        }
  });
});