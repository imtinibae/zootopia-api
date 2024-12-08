import { Module } from '@nestjs/common';
import { AnimalModule } from './animals/animals.module';
import { PersonModule } from './person/person.modules'; 

@Module({
  imports: [AnimalModule, PersonModule],
})
export class AppModule {}
