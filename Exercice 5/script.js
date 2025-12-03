
const quoteContainer = document.getElementById("quotes");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

Object.entries(quotes).forEach(([auteur, citation]) => {

    const container = document.createElement("div");
    container.classList.add("container");

    const citationDiv = document.createElement("div");
    citationDiv.classList.add("citation");
    citationDiv.textContent = citation;

    const auteurDiv = document.createElement("div");
    auteurDiv.classList.add("auteur");
    auteurDiv.textContent = auteur;

    const fav = document.createElement("div");
    fav.innerHTML = "<i class='fa-solid fa-heart'></i> ";
    fav.classList.add("fav");


    container.appendChild(fav);
    container.appendChild(citationDiv);
    container.appendChild(auteurDiv);

    quoteContainer.appendChild(container);

        const favs = quoteContainer.querySelectorAll('.fav');

        favs.forEach(fav => {
            fav.addEventListener("click", () => {
                fav.classList.toggle("clicked");
                if(fav.classList.contains("clicked")){
                    favorites.push({auteur, citation});
                    localStorage.setItem("favorite", fav);
                }
                else{
                  localStorage.removeItem("favorite");
                }

            });
        });
});
//detecter la class cliked si elle y est rajouter , ou pas retirer
//faire un tableau 