// Fichier : js/enigme5.js

document.getElementById("btnFetch").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent =
        `Nom : ${data.name}\nEmail : ${data.email}\nVille : ${data.address.city}`;
      console.log("Astuce : Inspecte les attributs de l'image pour ton indice final !");
    })
    .catch(() => {
      document.getElementById("output").textContent = "Erreur de chargement.";
    });
});
