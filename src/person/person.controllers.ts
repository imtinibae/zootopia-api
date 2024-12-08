// src/person/person.controller.ts

import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAllPersons() {
    return await this.personService.getAllPersons();
  }

  // Ajouter d'autres routes pour les CRUD et répondre aux questions
}
