
import { Injectable } from '@nestjs/common';
import { mysqlConnection } from '../config/mysql.config';

@Injectable()
export class AnimalService {
  
  // Méthode pour obtenir tous les animaux
  async getAllAnimals() {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM animal', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Méthode pour obtenir un animal par ID
  async getAnimalById(id: number) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM animal WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Méthode pour créer un animal
  async createAnimal(animal: any) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('INSERT INTO animal SET ?', animal, (err, results) => {
        if (err) reject(err);

        // Récupérer l'insertId depuis ResultSetHeader
        const insertId = (results as any).insertId;
        resolve({ id: insertId, ...animal });
      });
    });
  }

  // Méthode pour mettre à jour un animal
  async updateAnimal(id: string, animal: any) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('UPDATE animal SET ? WHERE id = ?', [animal, id], (err, results) => {
        if (err) reject(err);
        resolve({ message: `Animal with ID ${id} updated successfully` });
      });
    });
  }

  // Méthode pour supprimer un animal
  async deleteAnimal(id: string) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('DELETE FROM animal WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve({ message: `Animal with ID ${id} deleted successfully` });
      });
    });
  }
}
