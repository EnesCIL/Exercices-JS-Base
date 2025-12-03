
const quoteContainer = document.getElementById("quotes");

//permettre de mettre plusieurs valeur en une clé sous forme de tableau
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let auteur = (quotes["Serge Karamazov"]);
let citation = (auteur[""])
console.log(auteur)
console.log(citation)
//prend l'objet quotes pour avoir plusieurs fois l'auteur et la citation 
quotes.forEach(quote => {

    //on creer la div du container 
    const container = document.createElement("div");
    //ajoute une class container
    container.classList.add("container");

    const citationDiv = document.createElement("div");
    citationDiv.classList.add("citation");
    //ajoute le text citation de l'objet quotes
    citationDiv.textContent = citation;

    // let auteur = auteurDiv.add(quote);
    const auteurDiv = document.createElement("div");
    auteurDiv.classList.add("auteur");
    auteurDiv.textContent = auteur;
    console.log(auteur)

    const fav = document.createElement("div");
    fav.innerHTML = "<i class='fa-solid fa-heart'></i> ";
    fav.classList.add("fav");

    //on ajoute la div fav dans la div container 
    container.appendChild(fav);
    container.appendChild(citationDiv);
    container.appendChild(auteurDiv);

    //on ajoute la div container dans la div id = quotes
    quoteContainer.appendChild(container);

        //selectionne tout les fav
        const favs = quoteContainer.querySelectorAll('.fav');

        // if(favorites){
        // favorites.push({auteur, citation});
        
        // }
        //permet d'appliquer un effet a tout les favs en un
        favs.forEach(fav => {
            //ajoute un écouteur d'evment sur chaque fav donc a chaque clique
            fav.addEventListener("click", () => {
                //permet de remettre a l'initial au second clique
                fav.classList.toggle("clicked");
                //renvoie si la clicked est vrai ou faux
                if(fav.classList.contains("clicked")){
                    //mes dans le local de clé favorite avec la valeur initier
                    localStorage.setItem("favorite", auteur);
                }
                else{
                    //enleve l'iteme au second clique
                  localStorage.removeItem("favorite");
                }

            });
        });
});
//detecter la class cliked si elle y est rajouter , ou pas retirer
//faire un tableau 