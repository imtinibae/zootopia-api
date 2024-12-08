// src/person/person.service.ts

import { Injectable } from '@nestjs/common';
import { mysqlConnection } from '../config/mysql.config';

@Injectable()
export class PersonService {
  // Exemple de méthode pour obtenir toutes les personnes
  async getAllPersons() {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM person', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Ajouter d'autres méthodes pour les CRUD et répondre aux questions
}
