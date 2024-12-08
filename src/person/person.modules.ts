// src/person/person.module.ts

import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controllers';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
