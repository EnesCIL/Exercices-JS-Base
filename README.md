📘 **README — Exercices JavaScript**

Ce dépôt contient 5 exercices JavaScript permettant de pratiquer les bases du DOM, des événements, de la manipulation des styles, des classes et du stockage local.
Chaque exercice est indépendant et possède son propre fichier HTML / CSS / JS.

---

🟥 **Exercice 1**
**Objectif**

Créer 4 carrés HTML.
Lorsque l’utilisateur clique sur un carré, une boîte de dialogue (alert) affiche :

- la classe CSS du carré

- la couleur du texte

- la couleur de fond

- la hauteur et largeur du carré

- le nom de sa classe

- la police et la taille du texte

**Notions utilisées**

- const, let

- document.querySelector / document.getElementById

- getComputedStyle()

- addEventListener("click")

- alert()

- getPropertyValue()

**Fonctionnement**

Chaque carré est sélectionné avec querySelector.
Au clic, le script récupère les propriétés CSS avec getComputedStyle() et les affiche dans un alert().

---

🟦 **Exercice 2**
**Objectif**

Afficher 4 carrés colorés.
En cliquant sur un carré du haut :

- le carré du bas prend la même couleur

- son code couleur s’affiche dans du texte

**Notions utilisées**

- forEach()

- getComputedStyle()

- modification du style : element.style.backgroundColor = ...

- modification du texte : textContent = ...

**Fonctionnement**

Chaque carré du haut écoute un clic.
Le script lit sa couleur via getComputedStyle(), applique cette couleur au carré du bas et affiche le code couleur dans une zone texte.

---

🟩 **Exercice 3**
**Objectif**

Créer 4 carrés verts (200x200 px), numérotés de 1 à 4.
Au clic sur un carré :

- il rétrécit de 10%

- il effectue une rotation de 360°

- il devient rouge

En recliquant, il revient à l’état initial.

**Notions utilisées**

- querySelectorAll()

- classList.toggle()

- animations CSS (transition, transform)

**Fonctionnement**

Chaque carré possède une classe CSS définissant l’animation.
Le clic déclenche classList.toggle("active"), ce qui active ou désactive les transformations CSS.

---

🟪**Exercice 4**
**Objectif**

Changer la couleur du background en cliquant sur des icônes représentant 3 réseaux sociaux.
Au clic sur une icône :

- le background prend la couleur associée

- le nom du réseau s’affiche

- l’icône s’arrondit

- une ombre portée apparaît

En recliquant sur la même icône :

- le background redevient gris

- l’icône retrouve son style initial

**Notions utilisées**

- classList.contains()

- test d’état via : if (!isActive)

- ajout/suppression de classes CSS

- manipulation du style du body

**Fonctionnement**

Chaque icône possède une classe "active".
Le script vérifie si l’icône possède déjà cette classe :

- si elle ne l’a pas → activation + changement du background

- si elle l’a → retour à la couleur d’origine

---

🟨 **Exercice 5**
**Objectif**

Créer un système d'affichage de citations avec possibilité d’ajouter des favoris.
Option bonus : sauvegarder les favoris dans le **localStorage**.

**Étapes**

**1.** Créer un fichier quotes.js contenant un tableau associatif (liste de citations + auteur).

**2.** Un fichier JS lit ce tableau et affiche toutes les citations dans la page.

**3.** L’utilisateur peut cliquer sur une étoile pour ajouter la citation aux favoris.

**4.** Bonus : enregistrer les favoris dans localStorage.

**Notions utilisées**

- createElement()

- appendChild()

- .includes(), .push(), .filter()

- localStorage.getItem() / setItem()

- JSON.parse() / JSON.stringify()

**Fonctionnement**

Au chargement :

- les citations sont générées dynamiquement avec createElement()

- un tableau favoris est chargé depuis localStorage si disponible

- un clic sur une étoile ajoute ou retire la citation des favoris

- le tableau est sauvegardé dans le localStorage

🧑‍💻 **Technologies utilisées**

- HTML5

- CSS3

- JavaScript

---

📄 **Licence**

Ce projet est sous licence MIT
.
Vous pouvez l’utiliser, le modifier et le distribuer librement.
