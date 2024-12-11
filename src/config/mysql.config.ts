const express = require('express');

import { createConnection } from 'mysql2';

// Créer la connexion MySQL
export const mysqlConnection = createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'zootopia_db'
});

// Tester la connexion à la base de données
mysqlConnection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.stack);
    return;
  }
  console.log('Connecté à la base de données avec l\'ID', mysqlConnection.threadId);
});

const app = express();


const PORT = 4000;


app.get('/', (req, res) => {
  res.send('Base de données connectée et serveur en fonctionnement !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
