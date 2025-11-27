const carres = document.querySelectorAll("#carre div")

carres.forEach(carre => {
    carre.addEventListener("click", function () {
        //ajoute la liste de classe clicked au carre et toogle va permettre de remettre à l'inital au deuxieme clique
        //car le add va juste garder la forme meme au deuxieme clique
        carre.classList.toggle("clicked")
    console.log(carre)
  });
});