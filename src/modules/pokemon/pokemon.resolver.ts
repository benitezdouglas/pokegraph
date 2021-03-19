import { Query, Resolver } from '@nestjs/graphql';
import { PokemonDTO } from './models/pokemon.dto';
import { PokemonService } from './pokemon.service';

@Resolver()
export class PokemonResolver {
    constructor(
        private readonly pokemonService: PokemonService, 
    ) {}

    @Query()
    async pokemon(): Promise<Array<PokemonDTO>> {
        return this.pokemonService.pokemon();
    }
}
