import { createConnection } from 'mysql2';

export const mysqlConnection = createConnection({
  host: '127.0.0.1',  // Hôte du serveur MySQL
  port: 3306,         // Port MySQL par défaut
  user: 'root',       // Ton utilisateur MySQL
  password: 'password',       // Mot de passe de l'utilisateur
  database: 'zootopia_db'  // Nom de ta base de données
});
