import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // Route pour obtenir toutes les personnes
  @Get()
  async getAllPersons() {
    return await this.personService.getAllPersons();
  }

  // Route pour obtenir une personne par ID
  @Get(':id')
  async getPersonById(@Param('id') id: number) {
    return await this.personService.getPersonById(id);
  }

  // Route pour créer une nouvelle personne
  @Post()
  async createPerson(@Body() person: any) {
    return await this.personService.createPerson(person);
  }

  // Route pour mettre à jour une personne
  @Put(':id')
  async updatePerson(@Param('id') id: string, @Body() person: any) {
    return await this.personService.updatePerson(id, person);
  }

  // Route pour supprimer une personne
  @Delete(':id')
  async deletePerson(@Param('id') id: string) {
    return await this.personService.deletePerson(id);
  }
}
