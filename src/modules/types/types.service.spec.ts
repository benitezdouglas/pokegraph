import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseController } from '../../utils/testing/database.controller';
import { DatabaseModule } from '../../utils/testing/database.module';
import { TypeRepository } from './models/type.repository';
import { TypesService } from './types.service';

describe('TypesService', () => {
  let service: TypesService;
  let databaseController: DatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([TypeRepository,])],
      providers: [TypesService],
    }).compile();

    service = module.get<TypesService>(TypesService);
    databaseController = module.get<DatabaseController>(DatabaseController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async () => {
    const entities = await databaseController.getEntities();
    await databaseController.cleanAll(entities);
    databaseController.closeDatabaseConnection();
  })
});
