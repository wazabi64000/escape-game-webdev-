// Fichier : js/final.js

const form = document.getElementById("codeForm");
const success = document.getElementById("success");
const solution = document.getElementById("solution");

// Code secret attendu
const secret = ["HTML", "STRUCTURE", "STYLE", "SCRIPT", "DOM", "FETCH"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const inputs = [
    document.getElementById("frag1").value.trim().toUpperCase(),
    document.getElementById("frag2").value.trim().toUpperCase(),
    document.getElementById("frag3").value.trim().toUpperCase(),
    document.getElementById("frag4").value.trim().toUpperCase(),
    document.getElementById("frag5").value.trim().toUpperCase(),
    document.getElementById("frag6").value.trim().toUpperCase(),
  ];

  const isCorrect = inputs.every((val, index) => val === secret[index]);

  if (isCorrect) {
    success.textContent = " Bravo ! Vous avez déverrouillé le code secret !";
    solution.style.display = "block"; // Montre la section cachée
  } else {
    success.textContent = " Code incorrect. Vérifie tes fragments et réessaye.";
    solution.style.display = "none";
  }
});
