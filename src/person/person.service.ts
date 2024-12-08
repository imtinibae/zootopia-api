import { Injectable } from '@nestjs/common';
import { mysqlConnection } from '../config/mysql.config';

@Injectable()
export class PersonService {
  // Récupérer toutes les personnes
  async getAllPersons() {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM person', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Récupérer une personne par ID
  async getPersonById(id: number) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM person WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Créer une nouvelle personne
  async createPerson(person: any) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('INSERT INTO person SET ?', person, (err, results) => {
        if (err) reject(err);

        const insertId = (results as any).insertId;
        resolve({ id: insertId, ...person });
      });
    });
  }

  // Mettre à jour une personne
  async updatePerson(id: string, person: any) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('UPDATE person SET ? WHERE id = ?', [person, id], (err, results) => {
        if (err) reject(err);
        resolve({ message: `Person with ID ${id} updated successfully` });
      });
    });
  }

  // Supprimer une personne
  async deletePerson(id: string) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('DELETE FROM person WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve({ message: `Person with ID ${id} deleted successfully` });
      });
    });
  }
}
