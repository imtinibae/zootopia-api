// src/animal/animal.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AnimalService } from './animals.services';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  // Route pour obtenir tous les animaux
  @Get()
  async getAllAnimals() {
    return await this.animalService.getAllAnimals();
  }

  // Route pour obtenir un animal par ID
  @Get(':id')
  async getAnimalById(@Param('id') id: number) {
    return await this.animalService.getAnimalById(id);
  }

  // Route pour créer un nouvel animal
  @Post()
  async createAnimal(@Body() animal: any) {
    return await this.animalService.createAnimal(animal);
  }

  // Route pour mettre à jour un animal
  @Put(':id')
  async updateAnimal(@Param('id') id: string, @Body() animal: any) {
    return await this.animalService.updateAnimal(id, animal);
  }

  // Route pour supprimer un animal
  @Delete(':id')
  async deleteAnimal(@Param('id') id: string) {
    return await this.animalService.deleteAnimal(id);
  }
}
