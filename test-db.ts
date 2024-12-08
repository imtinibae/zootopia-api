import { mysqlConnection } from './src/config/mysql.config';

// Test de connexion à la base de données
mysqlConnection.query('SHOW TABLES', (error, results) => {
  if (error) {
    console.error('Erreur lors de la requête SQL :', error);
  } else {
    console.log('Tables disponibles dans la base de données :', results);
  }
  // Ferme la connexion après le test
  mysqlConnection.end();
});
