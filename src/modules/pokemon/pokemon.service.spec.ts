import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './models/pokemon.repository';
import { PokemonService } from './pokemon.service';
import { DatabaseModule } from '../../utils/testing/database.module';
import { Repository, SelectQueryBuilder } from 'typeorm';

describe('PokemonService', () => {
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
});
