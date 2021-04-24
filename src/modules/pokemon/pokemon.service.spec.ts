import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './models/pokemon.repository';
import { PokemonService } from './pokemon.service';
import { DatabaseModule } from '../../utils/testing/database.module';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { DatabaseController } from '../../utils/testing/database.controller';


describe('PokemonService', () => {
  let databaseController: DatabaseController;
  let service: PokemonService;
  let pokemonRepository: Repository<PokemonRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([PokemonRepository]),
      ],
      providers: [
        PokemonService
      ],
    }).compile();
    await module.init();

    databaseController = module.get<DatabaseController>(DatabaseController);
    service = module.get<PokemonService>(PokemonService);
    pokemonRepository = module.get(getRepositoryToken(PokemonRepository));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return pokemon ID', async () => {
    let queryBuilder: SelectQueryBuilder<any>;
    expect(queryBuilder).not.toBe(null);

    const pokemon = await service.pokemon();
    expect(pokemon).not.toBe(null);
  });

  afterAll(async () => {
    const entities = await databaseController.getEntities();
    await databaseController.cleanAll(entities);
  })
});
