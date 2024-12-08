import { AnimalService } from './animals.services';
import { mysqlConnection } from '../config/mysql.config';

describe('AnimalService', () => {
  let animalService: AnimalService;

  beforeEach(() => {
    animalService = new AnimalService();
  });

  it('should fetch all animals', async () => {
    const result = await animalService.getAllAnimals();
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should fetch animal by ID', async () => {
    const id = 1;
    const result = await animalService.getAnimalById(id);
    expect(result).toBeDefined();
    expect(result[0].id).toBe(id);
  });
});
