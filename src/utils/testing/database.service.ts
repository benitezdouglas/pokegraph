import { Injectable } from '@nestjs/common';
import { Connection, Repository, EntitySchema } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(readonly Connection: Connection) {}

  async getRepository<T>(
    entity: string | Function | (new () => T) | EntitySchema<T>,
  ): Promise<Repository<T>> {
    return this.Connection.getRepository(entity);
  }
}