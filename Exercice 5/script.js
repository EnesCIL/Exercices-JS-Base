const quoteContainer = document.getElementById("quotes");
 
// Récupère les favoris depuis le localStorage (tableau d'ids)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
 
// Génère les citations
quotes.forEach(quote => {
 
    let citation = quote.content;
    let auteur = quote.author;
    
    //on creer la div du container
    const container = document.createElement("div");
    //ajoute une class container
    container.classList.add("container");
 
    const citationDiv = document.createElement("div");
    citationDiv.classList.add("citation");
    //ajoute le text citation de l'objet quotes
    citationDiv.textContent = citation;
 
    const auteurDiv = document.createElement("div");
    auteurDiv.classList.add("auteur");
    auteurDiv.textContent = auteur;
 
    const fav = document.createElement("div");
    //définit la syntaxe HTML
    fav.innerHTML = "<i class='fa-solid fa-heart'></i>";
    fav.classList.add("fav");
 
    // Restaurer l'état cliqué si favori
    // recharger la page garde l'option de clique 
    if (favorites.includes(quote.id, citation)) {
        fav.classList.add("clicked");
    }
 
    // Un seul listener par fav
    fav.addEventListener("click", () => {
        //met a l'initial au second clique
        fav.classList.toggle("clicked");

        //renvoie si la clicked est vrai ou faux
        if (fav.classList.contains("clicked")) {
            // Ajouter l'id si pas déjà dedans
            // si pas deja cliquer on l'active donc mes dans le local
            if (!favorites.includes(quote.id, citation)) {
                //ajotue le nombre d'element qu'il faut  
                favorites.push(quote.id, citation);
            }
        } else {
            // Retirer l'id
            favorites = favorites.filter(id => id !== quote.id);
            // va permettre d'enlever un seul et pas tout 
            favorites = favorites.filter(citation => citation !== quote.content)
        }
 
        //mettre plusieur value ensemble grace au stringify sous forme de chaine de caractère va metre un virgule entre different valeur 
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
    
    //on ajoute la div fav dans la div container 
    container.appendChild(fav);
    container.appendChild(citationDiv);
    container.appendChild(auteurDiv);
    quoteContainer.appendChild(container);
});