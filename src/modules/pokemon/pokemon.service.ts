import { Injectable } from '@nestjs/common';
import { PokemonDTO } from './models/pokemon.dto';

import { PokemonRepository } from './models/pokemon.repository';

@Injectable()
export class PokemonService {
    constructor(
        private readonly pokemonRepository: PokemonRepository,
    ) {}

    async pokemon(): Promise<Array<PokemonDTO>> {
        return this.pokemonRepository
            .createQueryBuilder('pokemon')
            .select([
                'id',
                'identifier AS name',
                'height',
                'weight',
            ]).getRawMany();
    }
}
