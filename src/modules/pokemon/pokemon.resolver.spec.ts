import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseModule } from '../../utils/testing/database.module';
import { PokemonRepository } from './models/pokemon.repository';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';

describe('PokemonResolver', () => {
  let resolver: PokemonResolver;
  let service: PokemonService;
  let pokemonRepository: Repository<PokemonRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([PokemonRepository]),
      ],
      providers: [
        PokemonService,
        PokemonResolver
      ],
    }).compile();
    await module.init();

    service = module.get<PokemonService>(PokemonService);
    pokemonRepository = module.get(getRepositoryToken(PokemonRepository));
    resolver = module.get<PokemonResolver>(PokemonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return a pokemon list', async () => {
    expect(resolver.pokemon()).not.toBe(null);
  });
});
