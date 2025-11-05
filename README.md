# escape-game-webdev-escape-game-webdev/
│
├── index.html                # Page d’introduction + règles du jeu (indice 1)
├── enigme1.html              # Révision HTML - structure de page (indice 2)
├── enigme2.html              # Révision CSS - sélecteurs et styles (indice 3)
├── enigme3.html              # Révision JavaScript - fonctions et console (indice 4)
├── enigme4.html              # Révision DOM - interactions (indice 5)
├── enigme5.html              # Révision API / Fetch - affichage dynamique (indice 6)
├── final.html                # Page finale - vérification du code secret
│
├── assets/
│   ├── images/
│   │   ├── enigme1.jpg
│   │   ├── enigme2.jpg
│   │   ├── enigme3.jpg
│   │   ├── enigme4.jpg
│   │   ├── enigme5.jpg
│   │   └── logo.png
│   └── css/
│       └── style.css
│
├── js/
│   ├── main.js               # Gestion globale (navigation, validation finale)
│   ├── enigme1.js
│   ├── enigme2.js
│   ├── enigme3.js
│   ├── enigme4.js
│   ├── enigme5.js
│   └── final.js
│
└── README.md                 # Consignes du formateur et scénario du jeu



touch index.html enigme1.html enigme2.html enigme3.html enigme4.html enigme5.html final.html

# 3. Créer les dossiers pour les ressources et scripts
mkdir -p assets/images
mkdir -p assets/css
mkdir js

# 4. Créer les fichiers CSS et JS
touch assets/css/style.css
touch js/main.js js/enigme1.js js/enigme2.js js/enigme3.js js/enigme4.js js/enigme5.js js/final.js

# 5. Ajouter un fichier README
touch README.md

# 6. (Optionnel) Ajouter des images de base vides
touch assets/images/enigme1.jpg assets/images/enigme2.jpg assets/images/enigme3.jpg \
      assets/images/enigme4.jpg assets/images/enigme5.jpg assets/images/logo.png
