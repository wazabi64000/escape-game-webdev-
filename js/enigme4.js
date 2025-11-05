// Fichier : js/enigme4.js

const boutons = document.querySelectorAll("button");
const message = document.getElementById("message");

boutons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.id === "btn2") {
      message.textContent = " Indice 5 : Le cinquième fragment du code secret est 'DOM'";
      message.style.color = "lime";
    } else {
      message.textContent = "Non, ce n’est pas le bon bouton. Cherche encore.";
      message.style.color = "crimson";
    }
  });
});

// Objectif : montrer comment gérer des événements DOM en JS.
