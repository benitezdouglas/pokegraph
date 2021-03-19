import { DatabaseService } from './database.service';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

interface Entity {
  name: string;
  tableName: string;
}

@Injectable()
export class DatabaseController {
  // databaseService: DatabaseService;

  constructor(private readonly databaseService: DatabaseService) {
    if (process.env.NODE_ENV !== 'test') {
      throw Error(`Use DatabaseController for tests only.`);
    }
    // this.databaseService = _databaseService;
  }

  async closeDatabaseConnection() {
    const connection: Connection = await this.databaseService.Connection;
    if (connection.isConnected) {
      await (await this.databaseService.Connection).close();
    }
  }

  async getEntities(): Promise<Entity[]> {
    const entities: Entity[] = [];
    (await (await this.databaseService.Connection).entityMetadatas).forEach(x =>
      entities.push({ name: x.name, tableName: x.tableName }),
    );
    return entities;
  }

  async cleanAll(entities: Entity[]) {
    try {
      for (const entity of entities) {
        const repository = this.databaseService.getRepository(entity.name);
        await (await repository).query(`DELETE FROM ${entity.tableName};`);
      }
    } catch (error) {
      throw new Error(`ERROR: Cleaning test db: ${error}`);
    }
  }
}