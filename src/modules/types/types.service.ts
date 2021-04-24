import { Injectable } from '@nestjs/common';
import { TypeDTO } from './models/type.dto';
import { TypeRepository } from './models/type.repository';

@Injectable()
export class TypesService {
    constructor(
        private readonly typesRepository: TypeRepository,
    ) {}

    async pokeTypes(): Promise<Array<TypeDTO>> {
        const types = await this.typesRepository
        .createQueryBuilder('types')
        .select([
            'id',
            'identifier AS name',
            'generation_id AS generation',
            'damage_class_id AS damageclass'
        ]).getRawMany();
        return types;
    }
}
