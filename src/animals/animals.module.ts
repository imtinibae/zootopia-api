// src/animal/animal.module.ts

import { Module } from '@nestjs/common';
import { AnimalService } from './animals.services';
import { AnimalController } from './animals.controller';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
