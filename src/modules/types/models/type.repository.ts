import { EntityRepository } from "typeorm";
import { Repository } from "typeorm";
import { Types } from "./type.entity";

@EntityRepository(Types)
export class TypeRepository extends Repository<Types> {}