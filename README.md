# SneakerHeadz

Ce projet est un projet a réaliser dans le cadre du Projet B2 Dev 23-24. 

Au départ il nous est proposé de choisir entre plusieurs projets, au cours de cette réflexion nous sommes venues a bout de ce choix et nous sommes donc parties sur le projet personnel. De la est né "SneakerHeadZ".

Le but de ce projet est donc de créer un site web qui comptera plusieurs fonctionnalités chacune noté en degré de difficulté.

## Description

Bienvenue sur SneakerHeadZ, votre site de référence pour la recherche de sneakers. Que vous soyez un passionné de baskets à la recherche des dernières sorties, ou que vous souhaitiez simplement trouver la meilleure paire au meilleur prix, SneakerHeadZ est conçu pour répondre à tous vos besoins.

Notre site offre une plateforme intuitive et riche en fonctionnalités pour vous aider à naviguer dans le vaste monde des sneakers. Grâce à des outils de recherche avancés, des comparaisons de prix, et des alertes de disponibilité, nous facilitons votre quête des baskets idéales.

SneakerHeadZ n'est pas seulement un moteur de recherche ; c'est une communauté de passionnés partageant des avis et des évaluations, vous aidant à faire des choix informés. Avec une wishlist personnalisée et bien d'autres fonctionnalités, SneakerHeadZ se positionne comme votre allié incontournable dans l'univers des sneakers.

Rejoignez-nous et découvrez une nouvelle manière de trouver et d'acheter des sneakers, où que vous soyez.


## Sommaire

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Auteurs](#auteurs)

## Fonctionnalités

- **Recherche Avancée** : Trouvez des sneakers par marque, modèle, couleur, taille, et prix.
- **Comparaison de Prix** : Comparez les prix de différentes boutiques pour trouver la meilleure offre.
- **Alertes de Disponibilité** : Soyez informés de toutes les nouvelles sorties sneakers.
- **Avis et Évaluations** : Consultez les avis d'autres utilisateurs que ce soit sur le forum ou sous les sneakers pour faire le meilleur choix.
- **Wishlist Personnalisée** : Sauvegardez vos sneakers préférées pour les retrouver facilement plus tard.

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```sh
   git clone https://github.com/HugoGarrigues/SneakerHeadZ
   
2. Accédez au répertoire du projet :
   ```sh
   cd SneakerHead

3. Installez les dépendances en exécutant la commande suivante :
   ```sh
   npm install

4. Assurez-vous d'avoir une instance de MySQL en cours d'exécution sur votre machine. Vous devrez également créer une base de données nommée sneakerhead et importer le fichier sneakerhead.sql situé dans le dossier installation.


5. Configurez votre base de données en créant un fichier .env dans le dossier SneakerHeadZ. Copiez le contenu suivant dans le fichier .env et remplacez les valeurs par vos propres informations de connexion :
   ```sh
   DB_NAME='sneakerhead'
   DB_USER='votre_nom_utilisateur',
   DB_PASSWORD='votre_mot_de_passe',
   DB_HOST='localhost'

6. Lancez l'application en exécutant la commande suivante :
   ```sh
   npm start

## Architecture

``` bash
SneakerHead
├── app.js
├── public
│   ├── css
│   └── img
├── src
│   ├── config
│   │   ├── db.js
│   │   └── index.js
│   ├── controllers
│   │   ├── accountController.js
│   │   └── sneakersController.js
│   ├── data
│   │   ├── data.json
│   │   ├── news.json
│   │   └── items
│   │       ├── image1.jpg
│   │       ├── image2.jpg
│   │       └── ...
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── isAuthenticated.js
│   ├── models
│   │   ├── Utilisateur.js
│   │   └── Wishlist.js
│   ├── routes
│   │   ├── accountRoutes.js
│   │   ├── collectionRoutes.js
│   │   ├── homeRoutes.js
│   │   ├── newsRoutes.js
│   │   ├── sneakersRoutes.js
│   │   └── wishlistRoutes.js
│   ├── views
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── sneakers.html
│   │   └── ...
│   ├── .gitattributes
│   └── README.md
└───
```

## Technologies

```
Frontend :

- CSS
- HTML
- JS

Backend : 

- MySQL
- Sequelize
- Json
- Node.js
- Express
```

## Auteurs

- GARRIGUES Hugo - https://github.com/HugoGarrigues
- Viollet Yoan - https://github.com/yoanvlt
