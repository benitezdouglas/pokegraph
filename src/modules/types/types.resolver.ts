import { Query, Resolver } from '@nestjs/graphql';
import { TypeDTO } from './models/type.dto';
import { TypesService } from './types.service';

@Resolver()
export class TypesResolver {
    constructor(
        private readonly typesService: TypesService,
    ) {}

    @Query()
    async pokeTypes(): Promise<Array<TypeDTO>> {
        return this.typesService.pokeTypes();
    }
}
