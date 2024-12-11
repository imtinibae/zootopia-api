Person & Animal API
Bienvenue dans le projet Person & Animal API, une API CRUD développée avec NestJS et MySQL. Ce projet est conçu pour gérer des tables persons et animals en utilisant des bases de données relationnelles. Ce guide explique comment installer, configurer et utiliser l'API.

Fonctionnalités
CRUD Complet : Gestion des objets persons et animals (Create, Read, Update, Delete).
Connexion MySQL : Interfaçage avec une base de données MySQL.
API REST : Routes pour interagir avec les données via Postman ou tout autre client HTTP.
Prérequis
Avant de commencer, assurez-vous d'avoir installé les outils suivants :

Node.js (version 16 ou supérieure)
MySQL (serveur de base de données)
Postman (ou un autre client HTTP pour tester l'API)
Git (pour cloner le dépôt)
Installation
1. Cloner le projet
git clone https://github.com/imtinibae/zootopia-api.git
cd zootopia-api
2. Installer les dépendances
npm install
3. Configurer la base de données
Créez une base de données MySQL nommée zootopia_db.
Importez le fichier backup.sql inclus dans le projet pour créer les tables nécessaires :

mysql -u <username> -p zootopia_db < path/to/backup.sql
Configurez les informations de connexion dans le fichier .env :
env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
4. Lancer le serveur

npm run start:dev
Par défaut, l'API sera accessible sur http://localhost:4000/persons ou http://localhost:4000/animals .

Tester l'API
Vous pouvez utiliser Postman pour interagir avec l'API.

Exemples de requêtes (via Postman)
Créer une personne (POST /persons)
Body (JSON) :
{
  "firstName": "Tom",
  "lastName": "Holland",
  "email": "tom.holland@example.com",
  "phoneNumber": "1234567890"
}

Vous pouvez faire les requêtes SQL dans le terminal ;

1. Quel animal est le plus vieux ?

SELECT name, species, breed, dateOfBirth
FROM animal
ORDER BY dateOfBirth ASC
LIMIT 1;

2. Quelle espèce est la mieux représentée ? (Le plus d’entités de cette espèce)
SELECT species, COUNT(*) AS count
FROM animal
GROUP BY species
ORDER BY count DESC
LIMIT 1;

3. Qui possède le plus d'animaux ? 

SELECT ownerId, COUNT(*) AS animal_count
FROM animal
GROUP BY ownerId
ORDER BY animal_count DESC
LIMIT 1;

4. Qui possède le plus de chats ? 

SELECT ownerId, COUNT(*) AS cat_count
FROM animal
WHERE species = 'Cat'
GROUP BY ownerId
ORDER BY cat_count DESC
LIMIT 1;

5. Qui possède l'animal le plus lourd ? Comment s'appelle cet animal et quel est son poids ? 

SELECT a.ownerId, a.name, a.weight
FROM animal a
ORDER BY a.weight DESC
LIMIT 1;

6. Qui possède le groupe d’animaux le plus lourd ? Quel est le poids total de ce groupe d’animaux ?

SELECT ownerId, SUM(weight) AS total_weight
FROM animal
GROUP BY ownerId
ORDER BY total_weight DESC
LIMIT 1;

Merci ! 